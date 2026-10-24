import React from 'react';
import { Phone, Mail, Instagram, Facebook, Download } from 'lucide-react';
import {
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  TIKTOK_URL,
} from '../lib/contact';

/* lucide-react ships no brand glyphs, so the TikTok mark is inlined. */
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .52.04.76.12v-3.2a5.86 5.86 0 0 0-.76-.05A5.72 5.72 0 0 0 4.14 15.3a5.72 5.72 0 0 0 5.72 5.7 5.72 5.72 0 0 0 5.72-5.7V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.28 4.28 0 0 1-3.26-1.48z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050405] text-white pt-14 pb-8 border-t border-white/10 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/[0.08]">

          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <img
              src="/whitelogo-trimmed.png"
              alt="Adworks by Maheer Logo"
              width={313}
              height={76}
              loading="lazy"
              decoding="async"
              className="h-11 sm:h-14 w-auto object-contain"
            />

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              360° Marketing & Advertising Company. Strategy, creative design, digital performance, content creation, and 250+ owned outdoor hoardings under one unified roof.
            </p>

            <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-wider">
              Strategy · Creative · Digital · Outdoor
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-heading font-bold text-[10px] text-zinc-500 uppercase tracking-[0.18em]">
              Quick Navigation
            </h4>
            <ul className="space-y-0.5 text-sm text-zinc-400">
              <li><a href="#about" className="inline-block py-1.5 hover:text-white transition">About Director & Vision</a></li>
              <li><a href="#services" className="inline-block py-1.5 hover:text-white transition">4 Service Divisions</a></li>
              <li><a href="#hoardings" className="inline-block py-1.5 hover:text-white transition">250+ Outdoor Hoardings</a></li>
              <li><a href="#process" className="inline-block py-1.5 hover:text-white transition">How We Work (6 Steps)</a></li>
              <li><a href="#model" className="inline-block py-1.5 hover:text-white transition">One-Stop Client Model</a></li>
              <li><a href="#industries" className="inline-block py-1.5 hover:text-white transition">Industries We Serve</a></li>
              <li className="pt-1.5">
                <a
                  href="/adworks-agency-profile.pptx"
                  download="Adworks-by-Maheer-Agency-Profile.pptx"
                  className="inline-flex items-center gap-1.5 py-1.5 text-red-400 hover:text-red-300 font-semibold transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Agency Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-heading font-bold text-[10px] text-zinc-500 uppercase tracking-[0.18em]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                <span>Phone:</span>
                <a href={PHONE_HREF} className="inline-block py-1.5 font-bold text-white hover:text-red-400 transition">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                <span>Email:</span>
                <a href={EMAIL_HREF} className="inline-block py-1.5 font-bold text-white hover:text-red-400 transition">{EMAIL}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          {/* Year is baked in at build time; the browser may disagree across New Year. */}
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} ADWORKS BY MAHEER. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">Follow: <strong className="text-zinc-400">@adworksbymaheer</strong></span>
            <div className="flex items-center gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-500 flex items-center justify-center transition"
                aria-label="Adworks by Maheer on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-500 flex items-center justify-center transition"
                aria-label="Adworks by Maheer on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-500 flex items-center justify-center transition"
                aria-label="Adworks by Maheer on TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
