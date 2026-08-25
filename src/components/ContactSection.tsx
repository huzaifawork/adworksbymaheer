import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'All 360° Growth Services',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 90, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="red-badge mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Client Access</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Get In Touch With <span className="gradient-text-red">Adworks</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Have a project or need 150+ outdoor hoardings? Connect directly with Director Maheer and our growth team.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="card-base p-6 bg-[#0F0C12] border-red-500/20">
              <h3 className="font-heading font-bold text-lg text-white mb-1">
                Adworks Media & Growth Desk
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Single unified agency for strategy, digital performance, content, and outdoor media.
              </p>

              <div className="space-y-3.5 text-xs">
                
                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-semibold block">Phone / WhatsApp</span>
                    <a href="tel:+923177272777" className="font-bold text-white hover:text-red-400 text-xs sm:text-sm block">
                      +92 317 7272777
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-semibold block">Official Email</span>
                    <a href="mailto:adworksbymaheer@gmail.com" className="font-bold text-white hover:text-red-400 text-xs sm:text-sm block">
                      adworksbymaheer@gmail.com
                    </a>
                  </div>
                </div>

                {/* Portfolio */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-semibold block">Director Portfolio</span>
                    <a 
                      href="https://maheer-s-portfolio.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-red-400 hover:underline text-xs block"
                    >
                      maheer-s-portfolio.vercel.app
                    </a>
                  </div>
                </div>

                {/* Footprint */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-semibold block">Outdoor Footprint</span>
                    <span className="font-bold text-white text-xs block">Pakistan (150+ Owned Hoardings)</span>
                  </div>
                </div>

              </div>

              {/* WhatsApp Action Button */}
              <div className="mt-5 pt-3 border-t border-white/10">
                <a
                  href="https://wa.me/923177272777?text=Hi%20Adworks%20Team,%20I%20would%20like%20to%20discuss%20marketing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Instantly on WhatsApp (+92 317 7272777)</span>
                </a>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <Clock className="w-4 h-4 text-red-500 mb-1" />
                <h4 className="font-bold text-white text-xs">Fast Response</h4>
                <p className="text-[10px] text-zinc-400">Proposals within 24 hours.</p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <ShieldCheck className="w-4 h-4 text-red-500 mb-1" />
                <h4 className="font-bold text-white text-xs">Quality Guaranteed</h4>
                <p className="text-[10px] text-zinc-400">Single partner delivery.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form without Price/Budget dropdown */}
          <div className="lg:col-span-7">
            <div className="card-base p-6 sm:p-8 bg-[#0F0C12] border-red-500/20">
              
              {!submitted ? (
                <div>
                  <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Send Agency Inquiry</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                    Let's Build Your Growth Strategy
                  </h3>
                  <p className="text-xs text-zinc-400 mb-6">
                    Fill out the form below to receive a personalized proposal covering strategy, digital execution, or outdoor hoardings.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hassan Malik"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+92 3XX XXXXXXX"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="yourname@domain.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">Primary Service Needed</label>
                        <select
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#18141F] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="All 360° Growth Services">Full 360° Integrated Growth Package</option>
                          <option value="150+ Outdoor Hoardings">150+ Outdoor Hoardings & OOH Media</option>
                          <option value="Meta & Google Ads">Meta Ads & Google Ads Performance</option>
                          <option value="Branding & Creative">Brand Strategy & Creative Identity</option>
                          <option value="Reels & Content">Reels, Video Production & UGC</option>
                          <option value="Website Development">Website Development</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Project Details / Message *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your brand goals or hoarding location requirements..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-3.5 rounded-lg transition flex items-center justify-center gap-2 shadow-md shadow-red-950/50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Proposal Request</span>
                    </button>

                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto" />
                  <h3 className="font-heading font-bold text-xl text-white">Message Received!</h3>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you <strong className="text-white">{formData.name}</strong>! Director Maheer and our team have received your message. We will reach out to you shortly at <span className="text-red-400 font-semibold">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-5 py-2 rounded-lg transition"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
