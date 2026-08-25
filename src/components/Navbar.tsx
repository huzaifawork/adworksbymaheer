import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#09080A]/95 backdrop-blur-md border-b border-white/10 h-16 sm:h-20 shadow-lg shadow-black/50' : 'bg-transparent h-16 sm:h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Brand Logo - Trimmed asset scales the mark up without changing header height */}
          <a href="#" className="flex items-center h-full shrink-0">
            <img 
              src="/whitelogo-trimmed.png" 
              alt="Adworks by Maheer Logo" 
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
            <a href="#about" className="hover:text-red-400 transition-colors">About Us</a>
            <a href="#services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="#hoardings" className="hover:text-red-400 transition-colors flex items-center gap-1">
              <span>150+ Hoardings</span>
              <span className="bg-red-600/20 text-red-400 text-[9px] font-bold px-1.5 py-0.5 rounded">OOH</span>
            </a>
            <a href="#process" className="hover:text-red-400 transition-colors">Process</a>
            <a href="#model" className="hover:text-red-400 transition-colors">Model</a>
            <a href="#industries" className="hover:text-red-400 transition-colors">Industries</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://wa.me/923177272777?text=Hi%20Adworks%20Team,%20I%20would%20like%20to%20discuss%20marketing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 transition"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>+92 317 7272777</span>
            </a>

            <button
              onClick={onOpenConsultationModal}
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-md shadow-red-950/50"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsultationModal}
              className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-md md:hidden"
            >
              Strategy Call
            </button>
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09080A] border-b border-white/10 px-6 py-5 mt-0 animate-fadeIn">
          <div className="flex flex-col gap-3 font-medium text-sm text-zinc-200">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1.5 border-b border-white/5">About Us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1.5 border-b border-white/5">Services Ecosystem</a>
            <a href="#hoardings" onClick={() => setMobileMenuOpen(false)} className="py-1.5 border-b border-white/5 flex items-center justify-between">
              <span>150+ Outdoor Hoardings</span>
              <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">OOH</span>
            </a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-1.5 border-b border-white/5">How We Work</a>
            <a href="#model" onClick={() => setMobileMenuOpen(false)} className="py-1.5 border-b border-white/5">One-Stop Model</a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="py-1.5 border-b border-white/5">Industries Served</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1.5 border-b border-white/5">Contact Us</a>
            
            <div className="pt-3 flex flex-col gap-2">
              <a 
                href="https://wa.me/923177272777?text=Hi%20Adworks%20Team,%20I%20would%20like%20to%20discuss%20marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg text-xs font-semibold transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp +92 317 7272777</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full bg-red-600 text-white py-2.5 rounded-lg text-xs font-bold"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
