import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyCalculatorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    services: [] as string[],
    message: ''
  });

  if (!isOpen) return null;

  const serviceOptions = [
    'Brand Identity & Strategy',
    'Meta & Google Ads Performance',
    '150+ Outdoor Hoarding Inventory',
    'Reels & UGC Video Content',
    'Website & Landing Page Development',
    '3D Signs & Retail Physical Branding'
  ];

  const toggleService = (srv: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter(s => s !== srv)
        : [...prev.services, srv]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-xl bg-[#0E0C11] border border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-950/80 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-1.5 text-red-500 font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Strategy Consultation</span>
            </div>

            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
              Book Strategy Call with <span className="gradient-text-red">Adworks</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-5">
              Get a customized 360° growth roadmap combining digital performance, branding, and outdoor hoarding availability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ali Ahmed"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +92 300 1234567"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Nexus Properties"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Select Capabilities Needed:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((srv, i) => {
                    const selected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => toggleService(srv)}
                        className={`p-2 rounded-lg text-left text-xs font-medium border transition flex items-center justify-between ${
                          selected 
                            ? 'bg-red-950/60 border-red-500 text-white' 
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className="truncate">{srv}</span>
                        {selected && <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Project Brief / Objectives</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your brand goals, target timeline, or hoarding location requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-3 rounded-lg shadow-lg shadow-red-950/50 transition flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Strategy Request</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto" />
            <h3 className="font-heading font-bold text-xl text-white">Strategy Call Requested!</h3>
            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Thank you <strong className="text-white">{formData.name}</strong>! Director Maheer and our team will contact you at <span className="text-red-400 font-semibold">{formData.phone}</span> shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-5 py-2 rounded-lg transition"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
