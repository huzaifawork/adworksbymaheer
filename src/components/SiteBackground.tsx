import React from 'react';

/**
 * Fixed, full-viewport brand backdrop that stays put while the page scrolls.
 * Uses a position:fixed layer instead of background-attachment:fixed so it also
 * works on iOS Safari. Sits behind everything at -z-10 and never takes pointer events.
 */
export const SiteBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      
      {/* Layer 1: the hoardings artwork, softened so its baked-in text reads as texture */}
      <div className="site-bg-image" />

      {/* Layer 2: dark scrim keeping all foreground copy at full contrast */}
      <div className="site-bg-scrim" />

      {/* Layer 3: brand red glow + corner vignette for depth */}
      <div className="site-bg-glow" />

      {/* Layer 4: fine grid to tie the backdrop to the rest of the UI */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
};
