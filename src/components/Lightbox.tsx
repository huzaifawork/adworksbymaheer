import React, { useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxItem {
  /** Path without extension; `.webp` and `.jpg` versions must both exist. */
  image: string;
  title: string;
  caption: string;
  alt: string;
}

interface LightboxProps {
  items: LightboxItem[];
  /** Index of the open item, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
}

const pad = (n: number) => String(n + 1).padStart(2, '0');

/** Full-screen photo viewer with previous/next, shared by the gallery sections. */
export const Lightbox: React.FC<LightboxProps> = ({ items, index, onChange }) => {
  const close = useCallback(() => onChange(null), [onChange]);
  const step = useCallback(
    (dir: 1 | -1) => {
      if (index !== null) onChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onChange]
  );

  useEffect(() => {
    if (index === null) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={e => { e.stopPropagation(); step(-1); }}
        aria-label="Previous photo"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={e => { e.stopPropagation(); step(1); }}
        aria-label="Next photo"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <figure className="flex flex-col items-center max-h-full" onClick={e => e.stopPropagation()}>
        <picture>
          <source srcSet={`${item.image}.webp`} type="image/webp" />
          <img
            key={item.image}
            src={`${item.image}.jpg`}
            alt={item.alt}
            className="max-h-[78vh] max-w-[84vw] sm:max-w-[80vw] object-contain rounded-xl animate-modalIn"
          />
        </picture>
        <figcaption className="mt-4 text-center">
          <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
            {pad(index)} / {pad(items.length - 1)}
          </span>
          <h3 className="font-heading font-bold text-lg text-white">{item.title}</h3>
          <p className="text-xs text-zinc-400">{item.caption}</p>
        </figcaption>
      </figure>
    </div>
  );
};
