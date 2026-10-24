/**
 * Post-build step, run by `npm run build` after the client build and the SSR
 * build of src/entry-server.tsx:
 *
 *  1. Injects the server-rendered page into dist/index.html, so crawlers and
 *     link previews get the full content instead of an empty #root.
 *  2. Writes dist/sitemap.xml with the build date as lastmod.
 */
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://www.adworksbymaheer.com';
const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const indexPath = path.join(dist, 'index.html');
const template = await readFile(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`);
}
const appHtml = render();
await writeFile(indexPath, template.replace(marker, `<div id="root">${appHtml}</div>`));

const lastmod = new Date().toISOString().slice(0, 10);
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`
);

await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: injected ${(appHtml.length / 1024).toFixed(1)} kB of HTML, wrote sitemap.xml`);
