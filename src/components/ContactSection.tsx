import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { celebrate } from '../lib/celebrate';
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from '../lib/contact';
import { submitLead } from '../lib/submitLead';
import { WhatsAppIcon } from './WhatsAppIcon';

// 16px on phones: iOS zooms the page into any focused field smaller than that.
const inputClass =
  'w-full bg-[#18141F] border border-white/10 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-500 transition focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  company: '',
  service: 'All 360° Growth Services',
  message: '',
  website: ''
};

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);
    try {
      await submitLead({
        source: 'contact',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        services: [formData.service],
        message: formData.message,
        website: formData.website
      });
      setStatus('sent');
      void celebrate(90);
    } catch (err) {
      setStatus('idle');
      setError((err as Error).message);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 section-veil-strong relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              Direct Client Access
            </span>
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Get In Touch With <span className="gradient-text-red">Adworks</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Planning a campaign or looking for hoarding space? Talk directly to Maheer and the team.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <div className="card-base p-4 sm:p-6 bg-[#0F0C12]/85 border-red-500/20">
              <h3 className="font-heading font-bold text-lg text-white mb-1">
                Adworks Media & Growth Desk
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Single unified agency for strategy, digital performance, content, and outdoor media.
              </p>

              <div className="space-y-3 text-xs">

                {/* Phone - the whole row is the tap target, not just the number */}
                <a href={PHONE_HREF} className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-500/30 transition">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-zinc-400 font-semibold block">Phone</span>
                    <span className="font-bold text-white group-hover:text-red-400 text-sm block transition-colors">
                      {PHONE_DISPLAY}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a href={EMAIL_HREF} className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-500/30 transition">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-zinc-400 font-semibold block">Official Email</span>
                    <span className="font-bold text-white group-hover:text-red-400 text-[13px] sm:text-sm block truncate transition-colors">
                      {EMAIL}
                    </span>
                  </div>
                </a>

                {/* Footprint */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-semibold block">Outdoor Footprint</span>
                    <span className="font-bold text-white text-xs block">Pakistan (250+ Owned Hoardings)</span>
                  </div>
                </div>

              </div>

              {/* WhatsApp CTA */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-base p-6 sm:p-8 bg-[#0F0C12]/85 border-red-500/20">

              {status !== 'sent' ? (
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                    Send a Proposal Request
                  </h3>
                  <p className="text-xs text-zinc-400 mb-6">
                    Fill out the form to receive a personalized proposal covering strategy, digital execution, or outdoor hoardings.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1" htmlFor="contact-name">Full Name *</label>
                        <input
                          id="contact-name"
                          autoComplete="name"
                          type="text"
                          required
                          placeholder="e.g. Hassan Malik"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1" htmlFor="contact-phone">Phone / WhatsApp *</label>
                        <input
                          id="contact-phone"
                          autoComplete="tel"
                          type="tel"
                          required
                          placeholder="+92 3XX XXXXXXX"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1" htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          autoComplete="email"
                          type="email"
                          required
                          placeholder="yourname@domain.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1" htmlFor="contact-company">Company / Brand</label>
                        <input
                          id="contact-company"
                          autoComplete="organization"
                          type="text"
                          placeholder="e.g. Nexus Properties"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1" htmlFor="contact-service">Service Needed</label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className={inputClass}
                      >
                        <option value="All 360° Growth Services">Full 360° Integrated Growth Package</option>
                        <option value="250+ Outdoor Hoardings">250+ Outdoor Hoardings & OOH Media</option>
                        <option value="Meta & Google Ads">Meta Ads & Google Ads Performance</option>
                        <option value="Branding & Creative">Brand Strategy & Creative Identity</option>
                        <option value="Reels & Content">Reels, Video Production & UGC</option>
                        <option value="Website Development">Website Development</option>
                        <option value="3D Signs & Retail Branding">3D Signs & Retail Physical Branding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1" htmlFor="contact-message">Project Details *</label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        placeholder="Tell us about your brand goals or hoarding location requirements..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {/* Honeypot: hidden from people and screen readers, irresistible to bots. */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                      value={formData.website}
                      onChange={e => setFormData({ ...formData, website: e.target.value })}
                    />

                    {error && (
                      <div role="alert" className="flex items-start gap-2.5 p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-xs sm:text-sm text-red-200">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
                        <span>
                          {error}{' '}
                          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline underline-offset-2">
                            Message us on WhatsApp instead.
                          </a>
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-70 disabled:cursor-wait text-white font-bold text-sm py-3.5 rounded-lg transition flex items-center justify-center gap-2 shadow-md shadow-red-950/50"
                    >
                      {status === 'sending' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span>{status === 'sending' ? 'Sending…' : 'Send Proposal Request'}</span>
                    </button>

                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto" />
                  <h3 className="font-heading font-bold text-xl text-white">Message Received!</h3>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you <strong className="text-white">{formData.name}</strong>! Director Maheer and our team have received your message. We will reach out at <span className="text-red-400 font-semibold">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormData(emptyForm);
                      setStatus('idle');
                    }}
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
