import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, Instagram, Linkedin, Facebook, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactFooterProps {
  onOpenModal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenModal }) => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
  };

  return (
    <footer id="contact" className="relative bg-[#050405] text-white pt-24 pb-12 border-t border-red-900/30 overflow-hidden">
      
      {/* Background Red Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Big Call to Action Banner */}
        <div className="glass-panel border-red-500/40 bg-gradient-to-r from-[#1A0A0F] via-[#0E0C10] to-[#1F080D] p-8 sm:p-14 rounded-3xl mb-20 text-center relative overflow-hidden">
          
          <div className="red-badge mb-4 mx-auto">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span>Ready To Scale Your Brand?</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4">
            LET'S BUILD WHAT YOUR BRAND <br className="hidden sm:block" />
            <span className="gradient-text-red">NEEDS NEXT.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-300 text-sm sm:text-base mb-8">
            Stop managing multiple disconnected vendors. Partner with Adworks for end-to-end strategy, digital performance, content, and 150+ outdoor hoarding inventory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-8 py-4 rounded-full transition shadow-xl shadow-red-600/40 hover:scale-105"
            >
              Request Custom Proposal
            </button>
            <a
              href="tel:+923177272777"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full border border-white/10 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call +92 317 7272777</span>
            </a>
          </div>

        </div>

        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/whitelogo.png" alt="Adworks by Maheer Logo" className="h-12 w-auto" />
              <div>
                <span className="font-heading font-black text-xl tracking-wider text-white block">ADWORKS</span>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-red-500 uppercase block">BY MAHEER</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
              Adworks by Maheer is a premier 360° marketing and advertising company bringing strategy, creative, digital performance, content creation, and 150+ owned outdoor hoardings under one unified roof across Pakistan.
            </p>

            <div className="space-y-3 text-xs text-zinc-300 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Phone / WhatsApp</span>
                  <a href="tel:+923177272777" className="font-bold text-white hover:text-red-400 transition">+92 317 7272777</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Official Email</span>
                  <a href="mailto:adworksbymaheer@gmail.com" className="font-bold text-white hover:text-red-400 transition">adworksbymaheer@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block font-semibold">Director Portfolio</span>
                  <a href="https://maheer-s-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-red-400 hover:underline flex items-center gap-1">
                    <span>maheer-s-portfolio.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-red-500">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition">About Director & Vision</a></li>
              <li><a href="#services" className="hover:text-white transition">Brand & Creative Division</a></li>
              <li><a href="#services" className="hover:text-white transition">Digital & Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition">Content & Website Creation</a></li>
              <li><a href="#hoardings" className="hover:text-white transition">150+ Owned Hoardings</a></li>
              <li><a href="#process" className="hover:text-white transition">How We Work (6 Steps)</a></li>
              <li><a href="#model" className="hover:text-white transition">One-Stop Client Model</a></li>
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/5">
            <h4 className="font-heading font-bold text-sm text-white mb-2">Send Quick Inquiry</h4>
            <p className="text-xs text-zinc-400 mb-4">Direct message to Adworks strategy team.</p>

            {!formSent ? (
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                />
                <textarea
                  rows={2}
                  required
                  placeholder="How can we help?"
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-3 rounded-xl transition shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6 text-xs space-y-2">
                <CheckCircle2 className="w-8 h-8 text-red-500 mx-auto" />
                <p className="text-white font-bold">Inquiry Sent Successfully!</p>
                <p className="text-zinc-400">We will reach out to you shortly.</p>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-300">ADWORKS BY MAHEER</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400 font-semibold">Social: @adworksbymaheer</span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-600/30 hover:text-red-400 text-zinc-400 flex items-center justify-center transition">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
