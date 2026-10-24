import React from 'react';

/**
 * Premium Luxury Agency Backdrop
 * Replaces the blurry billboard collage with an ultra-clean, deep obsidian canvas
 * featuring a sophisticated carmine-red radial spotlight and subtle architectural micro-grid.
 */
export const SiteBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base Obsidian Tone */}
      <div className="absolute inset-0 bg-[#070609]" />

      {/* Elegant Carmine Red Ambient Spotlight from Top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(50% 50% at 50% 0%, rgba(220, 38, 38, 0.18) 0%, rgba(185, 28, 28, 0.05) 50%, transparent 80%)',
        }}
      />

      {/* Subtle Bottom Ambient Glow for depth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(50% 50% at 50% 100%, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Architectural Micro-Grid for subtle premium texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      {/* Corner Vignette for deep cinematic focus */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5, 4, 6, 0.7) 100%)',
        }}
      />
    </div>
  );
};
