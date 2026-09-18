import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogoDock, HEADER_SLOT_ID } from './BrandLogoDock';
import { HoardingMenu } from './HoardingMenu';
import { PHONE_DISPLAY as WHATSAPP_DISPLAY, WHATSAPP_URL } from '../lib/contact';


/* lucide-react ships no brand glyphs, so the WhatsApp mark is inlined */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.966 1.164-.198.199-.396.223-.693.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.116-.198.058-.371-.03-.52-.086-.148-.663-1.6-.909-2.19-.239-.575-.482-.497-.66-.505-.172-.008-.37-.01-.568-.01a1.09 1.09 0 0 0-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
    <path d="M20.52 3.449A11.9 11.9 0 0 0 12.05 0C5.495 0 .16 5.334.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.88 11.88 0 0 0 5.741 1.463h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.422-8.467zM12.05 21.786h-.004a9.87 9.87 0 0 1-5.032-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.437-9.884 9.889-9.884a9.82 9.82 0 0 1 6.988 2.898 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.438 9.885-9.885 9.885z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Passive so the listener can never block scrolling, and the state is
    // only touched when the flag actually flips rather than on every event.
    let last = window.scrollY > 20;
    const handleScroll = () => {
      const next = window.scrollY > 20;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      /* Solid while the menu is open too: at the top of the page the bar is
         transparent, and the menu's scrolling panels would otherwise show
         through behind the logo and the X. */
      scrolled || mobileMenuOpen
        ? 'bg-[#09080A]/95 border-b border-white/10 h-16 sm:h-20 shadow-lg shadow-black/50'
        : 'bg-transparent h-16 sm:h-20'
    }`}>
      {/* z-50 keeps the toolbar - and its X toggle - above the menu
          overlay, which is a child of this same header at z-40. */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Brand slot - reserves the logo's exact box. The visible mark is
              rendered by <BrandLogoDock/>, which docks it here on scroll. */}
          <div
            id={HEADER_SLOT_ID}
            aria-hidden="true"
            className="h-9 sm:h-11 lg:h-12 aspect-[313/76] shrink-0"
          />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-zinc-300 whitespace-nowrap">
            <a href="#about" className="hover:text-red-400 transition-colors">About Us</a>
            <a href="#services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="#hoardings" className="hover:text-red-400 transition-colors flex items-center gap-1">
              <span>150+ Hoardings</span>
              <span className="bg-red-600/20 text-red-400 text-[9px] font-bold px-1.5 py-0.5 rounded">OOH</span>
            </a>
            <a href="#projects" className="hover:text-red-400 transition-colors">Projects</a>
            <a href="#process" className="hover:text-red-400 transition-colors">Process</a>
            <a href="#model" className="hover:text-red-400 transition-colors">Model</a>
            <a href="#industries" className="hover:text-red-400 transition-colors">Industries</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </nav>

          {/* Action Buttons - single WhatsApp CTA carrying the number */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1FBE5A] text-[#062611] text-xs font-bold px-4 py-2 rounded-lg transition shadow-md shadow-emerald-950/40 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Us</span>
              <span className="w-px h-3 bg-[#062611]/25" aria-hidden="true"></span>
              <span className="font-semibold tracking-tight">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile/Tablet Hamburger Toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat with Adworks on WhatsApp at ${WHATSAPP_DISPLAY}`}
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1FBE5A] text-[#062611] text-xs font-bold px-3 py-1.5 rounded-md transition whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-1.5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Single brand mark: large in the hero, docked here once scrolled */}
      <BrandLogoDock forceDocked={mobileMenuOpen} />

      {/* Mobile nav: trivision hoarding panels */}
      <HoardingMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        whatsappUrl={WHATSAPP_URL}
        whatsappDisplay={WHATSAPP_DISPLAY}
        icon={<WhatsAppIcon className="w-4 h-4" />}
      />

    </header>
  );
};
