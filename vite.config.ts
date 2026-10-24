import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Serves the Vercel Functions in /api during `npm run dev`, so the contact
 * forms work locally without the Vercel CLI. Each file is expected to export
 * Web-standard handlers named after HTTP methods (`export function POST`),
 * which is the same signature Vercel runs in production.
 */
function vercelApiDev(): Plugin {
  return {
    name: 'vercel-api-dev',
    apply: 'serve',
    configureServer(server) {
      // Functions read their secrets from process.env, as on Vercel.
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''));

      server.middlewares.use('/api', async (req, res, next) => {
        const route = (req.url ?? '/').split('?')[0].replace(/^\/+|\/+$/g, '');
        if (!/^[\w-]+$/.test(route)) return next();

        let mod: Record<string, unknown>;
        try {
          mod = await server.ssrLoadModule(`/api/${route}.ts`);
        } catch {
          return next();
        }
        const handler = mod[req.method ?? 'GET'];
        if (typeof handler !== 'function') {
          res.statusCode = 405;
          return res.end();
        }

        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);
        const request = new Request(`http://${req.headers.host}${req.originalUrl}`, {
          method: req.method,
          headers: req.headers as Record<string, string>,
          body: chunks.length ? Buffer.concat(chunks) : undefined,
        });

        const response: Response = await handler(request);
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(Buffer.from(await response.arrayBuffer()));
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiDev()],
  server: {
    port: 3000,
    open: false
  },
  build: {
    // Every browser that can run this site's CSS (image-set, aspect-ratio)
    // handles modern syntax, so skip the legacy downlevelling.
    target: 'es2020',
    cssTarget: 'es2020',
    // Source maps would otherwise ship next to the bundle on deploy.
    sourcemap: false,
    // Inline anything under 4 kB rather than paying a round trip for it.
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Keep React in its own long-lived chunk: it changes far less often
        // than the site's own markup, so repeat visitors keep it cached
        // across content deploys.
        manualChunks: {
          react: ['react', 'react-dom']
        }
      }
    }
  }
});
