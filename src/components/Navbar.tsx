import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Palette,
  TrendingUp,
  Video,
  MapPin,
  Building2,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Zap,
  Download,
} from 'lucide-react';
import { PHONE_DISPLAY, WHATSAPP_URL } from '../lib/contact';
import { WhatsAppIcon } from './WhatsAppIcon';
import { HoardingMenu } from './HoardingMenu';

const DECK_HREF = '/adworks-agency-profile.pptx';
const DECK_FILENAME = 'Adworks-by-Maheer-Agency-Profile.pptx';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'ooh' | 'agency' | null>(null);

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (menu: 'services' | 'ooh' | 'agency') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // No backdrop blur while the drawer is open: a backdrop-filter makes the
        // header the containing block for its fixed children, which squashed the
        // full-screen drawer into the header's own 60px and hid it.
        mobileMenuOpen
          ? 'bg-[#08070A] border-b border-white/10 py-3 sm:py-3.5'
          : scrolled
            ? 'bg-[#08070A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3 sm:py-3.5'
            : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <a
            href="#"
            onClick={closeDropdowns}
            className="flex items-center gap-2 group shrink-0"
            aria-label="Adworks by Maheer - Home"
          >
            <img
              src="/whitelogo-trimmed.png"
              alt="Adworks by Maheer"
              width={160}
              height={42}
              className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-zinc-300">
            
            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'services'
                    ? 'text-white bg-white/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-red-500' : 'text-zinc-500'
                  }`}
                />
              </button>

              {activeDropdown === 'services' && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[720px] z-50 animate-fadeIn before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-['']"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#0C0A10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/90">
                    <div className="grid grid-cols-2 gap-3.5 mb-4">
                      
                      {/* Div 1 */}
                      <a
                        href="#services"
                        onClick={closeDropdowns}
                        className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition group flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold font-heading group-hover:text-red-400 transition flex items-center gap-1.5">
                            <span>Brand &amp; Creative</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                            Positioning, visual identity systems, campaign creatives &amp; packaging.
                          </p>
                        </div>
                      </a>

                      {/* Div 2 */}
                      <a
                        href="#services"
                        onClick={closeDropdowns}
                        className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition group flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold font-heading group-hover:text-red-400 transition flex items-center gap-1.5">
                            <span>Digital &amp; Performance Ads</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                            High-ROI Meta Ads, Google Ads, Technical SEO &amp; conversion funnels.
                          </p>
                        </div>
                      </a>

                      {/* Div 3 */}
                      <a
                        href="#services"
                        onClick={closeDropdowns}
                        className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition group flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition">
                          <Video className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold font-heading group-hover:text-red-400 transition flex items-center gap-1.5">
                            <span>Content &amp; Web Platforms</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                            Viral reels, UGC production, corporate shoots &amp; bespoke web platforms.
                          </p>
                        </div>
                      </a>

                      {/* Div 4 */}
                      <a
                        href="#services"
                        onClick={closeDropdowns}
                        className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition group flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold font-heading group-hover:text-red-400 transition flex items-center gap-1.5">
                            <span>Outdoor &amp; Physical Media</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                            250+ owned hoardings, 3D retail signages, illuminated lightboxes.
                          </p>
                        </div>
                      </a>

                    </div>

                    {/* Bottom Feature Strip */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <ShieldCheck className="w-4 h-4 text-red-500" />
                        <span>All 4 divisions delivered under <strong>1 single agency contract</strong></span>
                      </div>
                      <a
                        href="#services"
                        onClick={closeDropdowns}
                        className="text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-1 transition"
                      >
                        <span>View Full Ecosystem</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Outdoor Media (OOH) Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('ooh')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'ooh'
                    ? 'text-white bg-white/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'ooh' ? null : 'ooh')}
              >
                <span>Outdoor Media</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'ooh' ? 'rotate-180 text-red-500' : 'text-zinc-500'
                  }`}
                />
              </button>

              {activeDropdown === 'ooh' && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[460px] z-50 animate-fadeIn before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-['']"
                  onMouseEnter={() => handleMouseEnter('ooh')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#0C0A10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/90">
                    <div className="space-y-2 mb-4">
                      
                      <a
                        href="#hoardings"
                        onClick={closeDropdowns}
                        className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition group flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            250+ Owned Hoarding Inventory
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            Direct ownership across Pakistan with zero broker markups.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#hoardings"
                        onClick={closeDropdowns}
                        className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition group flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            Highways &amp; Urban Hub Corridors
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            High-speed approach corridors, major bridges &amp; high-footfall markets.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#projects"
                        onClick={closeDropdowns}
                        className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition group flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            3D Signs &amp; Illuminated Lightboxes
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            Precision storefront fascias, channel letters &amp; custom acrylic fabrication.
                          </p>
                        </div>
                      </a>

                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span>Available across all major provinces</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Agency Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('agency')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'agency'
                    ? 'text-white bg-white/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'agency' ? null : 'agency')}
              >
                <span>Agency</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'agency' ? 'rotate-180 text-red-500' : 'text-zinc-500'
                  }`}
                />
              </button>

              {activeDropdown === 'agency' && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[420px] z-50 animate-fadeIn before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-['']"
                  onMouseEnter={() => handleMouseEnter('agency')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#0C0A10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/90">
                    <div className="space-y-1.5">
                      
                      <a
                        href="#about"
                        onClick={closeDropdowns}
                        className="p-2.5 rounded-xl hover:bg-white/[0.06] transition flex items-center gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            About Director &amp; Vision
                          </div>
                          <p className="text-[11px] text-zinc-400">Leadership, values and our founding story.</p>
                        </div>
                      </a>

                      <a
                        href="#process"
                        onClick={closeDropdowns}
                        className="p-2.5 rounded-xl hover:bg-white/[0.06] transition flex items-center gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            6-Step Growth Methodology
                          </div>
                          <p className="text-[11px] text-zinc-400">Discover → Strategize → Create → Scale.</p>
                        </div>
                      </a>

                      <a
                        href="#model"
                        onClick={closeDropdowns}
                        className="p-2.5 rounded-xl hover:bg-white/[0.06] transition flex items-center gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <Briefcase className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            One-Stop Partner Model
                          </div>
                          <p className="text-[11px] text-zinc-400">Why top brands avoid fragmented vendors.</p>
                        </div>
                      </a>

                      <a
                        href="#industries"
                        onClick={closeDropdowns}
                        className="p-2.5 rounded-xl hover:bg-white/[0.06] transition flex items-center gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            Industries Served
                          </div>
                          <p className="text-[11px] text-zinc-400">Real estate, retail, FMCG, healthcare &amp; tech.</p>
                        </div>
                      </a>

                      <a
                        href={DECK_HREF}
                        download={DECK_FILENAME}
                        onClick={closeDropdowns}
                        className="p-2.5 rounded-xl hover:bg-white/[0.06] transition flex items-center gap-3 group border-t border-white/5 mt-1 pt-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                          <Download className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold group-hover:text-red-400 transition">
                            Download Agency Profile
                          </div>
                          <p className="text-[11px] text-zinc-400">Full capabilities deck (PowerPoint).</p>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Work Link */}
            <a
              href="#projects"
              onClick={closeDropdowns}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition"
            >
              Projects
            </a>

          </nav>

          {/* Right Action Elements */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            
            {/* WhatsApp Direct Action */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition group"
              aria-label={`Chat with Adworks on WhatsApp at ${PHONE_DISPLAY}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Direct</span>
            </a>

            {/* The site's one primary action; every "book a call" leads to the contact form. */}
            <a
              href="#contact"
              onClick={closeDropdowns}
              className="group btn-luxury-action inline-flex items-center gap-2.5 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span className="relative z-10">Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/90 relative z-10 transition-transform group-hover:translate-x-0.5" />
            </a>

          </div>

          {/* Mobile Right Controls: WhatsApp shortcut + Hamburger. The shortcut
              hides while the menu is open, which has its own WhatsApp button. */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`${mobileMenuOpen ? 'hidden' : 'inline-flex'} items-center gap-1.5 h-10 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-3 rounded-lg text-xs font-bold`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="text-xs">Chat</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile nav: trivision hoarding panels under a lamp gantry */}
      <HoardingMenu
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        whatsappUrl={WHATSAPP_URL}
        icon={<WhatsAppIcon className="w-4 h-4" />}
      />
    </header>
  );
};
