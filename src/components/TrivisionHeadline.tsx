import React, { useEffect, useRef, useState } from 'react';

/**
 * The hero headline, built as a trivision board.
 *
 * A trivision is the billboard made of triangular slats that rotate in unison
 * to show three different ads on one site - so a headline that turns between
 * three messages is not decoration here, it is the product demonstrating
 * itself. The turn reuses the same prism vocabulary as the mobile menu.
 *
 * The faces are stacked in one grid cell rather than positioned absolutely, so
 * the block is always as tall as its tallest message and the turn costs
 * nothing in layout shift. Only transform and opacity animate.
 */

type Segment = { text: string; accent?: boolean };

const FACES: Segment[][] = [
  [{ text: 'YOUR ' }, { text: 'ONE-STOP', accent: true }, { text: ' MARKETING SOLUTION' }],
  [{ text: '150+ OWNED ' }, { text: 'HOARDINGS', accent: true }, { text: ' ACROSS PAKISTAN' }],
  [{ text: 'ONE PARTNER. ' }, { text: 'EVERY CHANNEL.', accent: true }],
];

/** How long each message is held before the slats turn. */
const HOLD_MS = 3000;
/** Must match the transform transition in .trivision-face. */
const TURN_MS = 760;

const faceText = (segs: Segment[]) => segs.map((s) => s.text).join('');

export const TrivisionHeadline: React.FC = () => {
  const [active, setActive] = useState(0);
  const [turning, setTurning] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let hold: ReturnType<typeof setTimeout>;
    let settle: ReturnType<typeof setTimeout>;
    // Only turn while the board is actually on screen and the tab is in front:
    // a hero rotating behind the reader is wasted battery and a distraction.
    let onScreen = true;

    const tick = () => {
      hold = setTimeout(() => {
        if (onScreen && !document.hidden) {
          setTurning(true);
          setActive((i) => (i + 1) % FACES.length);
          settle = setTimeout(() => setTurning(false), TURN_MS);
        }
        tick();
      }, HOLD_MS);
    };
    tick();

    const io = new IntersectionObserver(
      ([e]) => {
        onScreen = e.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (hostRef.current) io.observe(hostRef.current);

    return () => {
      clearTimeout(hold);
      clearTimeout(settle);
      io.disconnect();
    };
  }, []);

  const prev = (active - 1 + FACES.length) % FACES.length;

  return (
    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white mb-5">
      {/* Screen readers and crawlers get one stable headline rather than text
          that rewrites itself underneath them. */}
      <span className="sr-only">{faceText(FACES[0])}</span>

      <div ref={hostRef} className="trivision" aria-hidden="true">
        {FACES.map((segs, i) => (
          <span
            key={i}
            className="trivision-face"
            data-state={i === active ? 'active' : i === prev ? 'leaving' : 'parked'}
          >
            {segs.map((s, j) =>
              s.accent ? (
                <span key={j} className="gradient-text-red">
                  {s.text}
                </span>
              ) : (
                <React.Fragment key={j}>{s.text}</React.Fragment>
              )
            )}
          </span>
        ))}

        {/* The slat seams only show while the board is mid-turn - at rest the
            type stays clean, and the structure reveals itself as it moves. */}
        <span className="trivision-seams" data-turning={turning || undefined} />
      </div>
    </h1>
  );
};
