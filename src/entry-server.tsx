import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Renders the page to HTML at build time (see scripts/prerender.mjs), so the
 * shipped index.html carries the full content for crawlers and link previews
 * instead of an empty #root. The browser then hydrates it in main.tsx.
 */
export function render(): string {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
