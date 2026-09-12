import React, { useEffect, useRef } from 'react';

/**
 * The brand mark starts large in the hero and docks into the header as the
 * page scrolls. Only one logo element ever exists - the header and hero both
 * render invisible slots that reserve layout, and this fixed element
 * interpolates between the two measured positions. That keeps the mark
 * perfectly aligned at both ends with no second copy cross-fading.
 */
export const HEADER_SLOT_ID = 'brand-slot-header';
export const HERO_SLOT_ID = 'brand-slot-hero';

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const BrandLogoDock: React.FC = () => {
  const dockRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Geometry is remeasured on resize, never per frame
    let header = { cx: 0, cy: 0, w: 1 };
    let hero = { cx: 0, docTop: 0, h: 0, w: 1 };
    let hasHero = false;
    let range = 1;
    let raf = 0;

    const measure = () => {
      const el = dockRef.current;
      const h = document.getElementById(HEADER_SLOT_ID);
      if (!el || !h) return false;

      const hr = h.getBoundingClientRect();
      header = { cx: hr.left + hr.width / 2, cy: hr.top + hr.height / 2, w: hr.width || 1 };

      // Park the element's own centre exactly over the header slot, so a
      // zeroed transform means "docked".
      el.style.left = `${header.cx}px`;
      el.style.top = `${header.cy}px`;

      const o = document.getElementById(HERO_SLOT_ID);
      hasHero = !!o;
      if (o) {
        const or = o.getBoundingClientRect();
        hero = {
          cx: or.left + or.width / 2,
          docTop: or.top + window.scrollY,
          h: or.height,
          w: or.width || 1,
        };
        // Dock across the distance the hero slot must travel to reach the header
        range = Math.max(140, hero.docTop + hero.h / 2 - header.cy);
      }
      return true;
    };

    const apply = () => {
      raf = 0;
      const el = dockRef.current;
      if (!el) return;

      const base = 'translate(-50%, -50%)';

      if (!hasHero || reduceMotion) {
        el.style.transform = `${base} scale(1)`;
        el.style.opacity = '1';
        return;
      }

      const p = easeInOutCubic(Math.min(1, Math.max(0, window.scrollY / range)));
      const heroCy = hero.docTop + hero.h / 2 - window.scrollY;
      const heroScale = hero.w / header.w;

      const dx = (hero.cx - header.cx) * (1 - p);
      const dy = (heroCy - header.cy) * (1 - p);
      const sc = heroScale + (1 - heroScale) * p;

      el.style.transform =
        `${base} translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) scale(${sc.toFixed(4)})`;
      el.style.opacity = '1';
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onResize = () => {
      measure();
      apply();
    };

    onResize();

    // The measured slot width is only final once the bitmap has loaded
    const img = dockRef.current?.querySelector('img');
    if (img && !img.complete) img.addEventListener('load', onResize, { once: true });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    const ro = new ResizeObserver(onResize);
    const headerEl = document.getElementById(HEADER_SLOT_ID);
    const heroEl = document.getElementById(HERO_SLOT_ID);
    if (headerEl) ro.observe(headerEl);
    if (heroEl) ro.observe(heroEl);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a
      ref={dockRef}
      href="#"
      aria-label="Adworks by Maheer - back to top"
      className="fixed opacity-0 will-change-transform"
      style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)', transformOrigin: 'center center' }}
    >
      <img
        src="/whitelogo-trimmed.png"
        alt="Adworks by Maheer"
        className="block h-9 sm:h-11 lg:h-12 w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]"
      />
    </a>
  );
};
