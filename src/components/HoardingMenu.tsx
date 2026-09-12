import React, { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

/**
 * Mobile navigation styled and animated as a trivision hoarding - the
 * rotating-prism billboard used in real outdoor media. Each nav item is a
 * board that flips down under a gantry of lamps, so the menu is made of the
 * medium the agency actually sells.
 */

export interface MenuItem {
  href: string;
  label: string;
  sub: string;
  tag?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { href: '#about', label: 'About Us', sub: 'Who we are' },
  { href: '#services', label: 'Services Ecosystem', sub: 'Four divisions' },
  { href: '#hoardings', label: '150+ Outdoor Hoardings', sub: 'Owned OOH network', tag: 'OOH' },
  { href: '#projects', label: 'Featured Projects', sub: 'Recent work' },
  { href: '#process', label: 'How We Work', sub: 'Six-step process' },
  { href: '#model', label: 'One-Stop Model', sub: 'A single partner' },
  { href: '#industries', label: 'Industries Served', sub: 'Sectors we know' },
  { href: '#contact', label: 'Contact Us', sub: 'Start a project' },
];

interface HoardingMenuProps {
  open: boolean;
  onClose: () => void;
  whatsappUrl: string;
  whatsappDisplay: string;
  icon: React.ReactNode;
}

const LAMP_COUNT = 6;

export const HoardingMenu: React.FC<HoardingMenuProps> = ({
  open,
  onClose,
  whatsappUrl,
  whatsappDisplay,
  icon,
}) => {
  // Lock the page behind the menu and close on Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="xl:hidden fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Menu">
      {/* Night ground behind the gantry */}
      <div
        className="menu-veil absolute inset-0 bg-[#070608]/98"
        onClick={onClose}
      />

      <div className="relative h-full overflow-y-auto overscroll-contain pt-16 sm:pt-20 pb-8 px-4">
        {/* Close - the header toggle sits beneath this overlay, so the menu
            carries its own control */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="menu-plate absolute right-4 top-[4.5rem] sm:top-[5.5rem] z-10 inline-flex items-center gap-1.5 rounded-md border border-red-500/40 bg-black/70 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-red-400 active:bg-red-600 active:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
          <span>Close</span>
        </button>

        {/* ---- Lamp gantry: strikes on, then lights the boards below ---- */}
        <div className="relative mx-auto mt-9 max-w-md" aria-hidden="true">
          <div className="flex items-end justify-between px-3">
            {Array.from({ length: LAMP_COUNT }).map((_, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* housing */}
                <span className="block w-3.5 h-1.5 rounded-t-sm bg-zinc-700" />
                <span className="block w-5 h-2 rounded-b-[3px] bg-gradient-to-b from-zinc-700 to-zinc-900 border-b border-red-400/50" />
                {/* Light cone. No negative z-index: this sits inside the
                    overlay's z-40 stacking context, where -z would drop it
                    behind the backdrop and vanish. It paints over the boards
                    instead, which is the spill we want. */}
                <span
                  className="lamp-glow pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 w-16 h-20 blur-md"
                  style={{
                    animationDelay: `${90 + i * 45}ms`,
                    background:
                      'radial-gradient(50% 60% at 50% 0%, rgba(255,70,70,0.55) 0%, rgba(230,0,0,0.18) 45%, transparent 75%)',
                  }}
                />
              </div>
            ))}
          </div>
          {/* gantry rail */}
          <div className="mt-1 h-px bg-gradient-to-r from-transparent via-red-500/35 to-transparent" />
        </div>

        {/* ---- The boards ---- */}
        <nav className="hoarding-stack mx-auto mt-3 max-w-md space-y-2.5">
          {MENU_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="hoarding-panel group relative block overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-[#17141b] to-[#100e14] active:border-red-500/60 transition-colors"
              style={{ animationDelay: `${170 + i * 55}ms` }}
            >
              {/* warm spill from the lamps above */}
              <span className="panel-spill pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden="true" />

              <span className="relative flex items-center gap-3 px-3.5 py-3">
                {/* site code, the way hoarding inventory is numbered */}
                <span className="shrink-0 w-8 text-[10px] font-bold tabular-nums text-red-500/90 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-heading font-bold text-[15px] text-white truncate">
                      {item.label}
                    </span>
                    {item.tag && (
                      <span className="shrink-0 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        {item.tag}
                      </span>
                    )}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mt-0.5">
                    {item.sub}
                  </span>
                </span>

                <ArrowUpRight className="w-4 h-4 shrink-0 text-zinc-600 group-active:text-red-400 transition-colors" />
              </span>

              {/* board's bottom frame edge */}
              <span className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />
            </a>
          ))}
        </nav>

        {/* ---- Booking plate ---- */}
        <div
          className="menu-plate mx-auto mt-5 max-w-md"
          style={{ animationDelay: `${170 + MENU_ITEMS.length * 55 + 60}ms` }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-[#062611] text-xs font-bold active:bg-[#1FBE5A] transition-colors"
          >
            {icon}
            <span>WhatsApp {whatsappDisplay}</span>
          </a>

          {/* gantry legs, to seat the stack on something */}
          <div className="mt-4 flex justify-center gap-24" aria-hidden="true">
            <span className="block w-1.5 h-10 rounded-b bg-gradient-to-b from-zinc-700/70 to-transparent" />
            <span className="block w-1.5 h-10 rounded-b bg-gradient-to-b from-zinc-700/70 to-transparent" />
          </div>

          <p className="mt-1 text-center text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            Your brand. Everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};
