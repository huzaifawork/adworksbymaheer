import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
