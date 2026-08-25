import React from 'react';
import { Phone, Mail, Globe, ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050405] text-white pt-14 pb-10 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Logo sits flush on the dark footer - no card, no backing plate */}
            <img 
              src="/whitelogo-trimmed.png" 
              alt="Adworks by Maheer Logo" 
              className="h-11 sm:h-14 w-auto object-contain" 
            />

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              360° Marketing & Advertising Company. Bringing strategy, creative design, digital performance, content creation, and 150+ owned outdoor hoardings under one unified roof.
            </p>

            <div className="text-xs font-semibold text-zinc-300">
              <span className="text-red-500">•</span> Pakistan → Regional → Global Ecosystem
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-heading font-bold text-xs text-red-400 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition">About Director & Vision</a></li>
              <li><a href="#services" className="hover:text-white transition">4 Service Divisions</a></li>
              <li><a href="#hoardings" className="hover:text-white transition">150+ Outdoor Hoardings</a></li>
              <li><a href="#process" className="hover:text-white transition">How We Work (6 Steps)</a></li>
              <li><a href="#model" className="hover:text-white transition">One-Stop Client Model</a></li>
              <li><a href="#industries" className="hover:text-white transition">Industries We Serve</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Portfolio */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-heading font-bold text-xs text-red-400 uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Call / WhatsApp:</span>
                <a href="tel:+923177272777" className="font-bold text-white hover:text-red-400">+92 317 7272777</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Email:</span>
                <a href="mailto:adworksbymaheer@gmail.com" className="font-bold text-white hover:text-red-400">adworksbymaheer@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 pt-0.5">
                <Globe className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Director Portfolio:</span>
                <a 
                  href="https://maheer-s-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-red-400 hover:underline flex items-center gap-1"
                >
                  <span>maheer-s-portfolio.vercel.app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} ADWORKS BY MAHEER. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400 font-medium">Follow: <strong className="text-white">@adworksbymaheer</strong></span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
