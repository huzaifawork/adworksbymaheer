import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import {
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  TIKTOK_URL,
} from '../lib/contact';

/* lucide-react ships no brand glyphs, so the TikTok mark is inlined - the
   same approach the navbar takes for WhatsApp. */
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .52.04.76.12v-3.2a5.86 5.86 0 0 0-.76-.05A5.72 5.72 0 0 0 4.14 15.3a5.72 5.72 0 0 0 5.72 5.7 5.72 5.72 0 0 0 5.72-5.7V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.28 4.28 0 0 1-3.26-1.48z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050405]/85 text-white pt-14 pb-10 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Logo sits flush on the dark footer - no card, no backing plate */}
            <img 
              src="/whitelogo-trimmed.png" 
              alt="Adworks by Maheer Logo" 
              width={313}
              height={76}
              loading="lazy"
              decoding="async"
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

          {/* Col 3: Direct Contacts */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-heading font-bold text-xs text-red-400 uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Call / WhatsApp:</span>
                <a href={PHONE_HREF} className="font-bold text-white hover:text-red-400">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Email:</span>
                <a href={EMAIL_HREF} className="font-bold text-white hover:text-red-400">{EMAIL}</a>
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
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition"
                aria-label="Adworks by Maheer on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition"
                aria-label="Adworks by Maheer on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition"
                aria-label="Adworks by Maheer on TikTok"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
