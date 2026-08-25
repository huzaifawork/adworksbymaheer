import React from 'react';
import { ArrowRight, Flame, ShieldCheck, Sparkles, Building2, TrendingUp, Compass } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern border-b border-white/5">
      
      {/* Background Subtle Red Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-[11px] font-semibold mb-6">
          <Flame className="w-3.5 h-3.5 text-red-500" />
          <span className="uppercase tracking-wider">360° Integrated Growth Agency</span>
          <span className="w-1 h-1 rounded-full bg-red-500"></span>
          <span className="text-zinc-300">Pakistan & Beyond</span>
        </div>

        {/* Scaled & Balanced Center Headline */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white mb-5">
          YOUR <span className="gradient-text-red">ONE-STOP</span> MARKETING SOLUTION
        </h1>

        {/* Clean Sub-headline */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-300 font-normal mb-8 leading-relaxed">
          <strong className="text-white font-semibold">One Partner. Every Marketing Need Delivered.</strong> We unite Strategy, Branding, Digital Ads, Content Creation, and <span className="text-red-400 font-semibold">150+ Owned Outdoor Hoardings</span> under one roof for sustainable brand growth.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow-lg shadow-red-950/50"
          >
            <Sparkles className="w-4 h-4 text-red-200" />
            <span>Request Agency Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-white/10 transition"
          >
            <span>Explore 4 Ecosystem Divisions</span>
          </a>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 text-left">
          
          <div className="card-base p-4">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-2.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-white">150+</div>
            <p className="text-[11px] text-zinc-400 mt-0.5">Owned Outdoor Hoardings across Pakistan</p>
          </div>

          <div className="card-base p-4">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-2.5">
              <Compass className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-white">360°</div>
            <p className="text-[11px] text-zinc-400 mt-0.5">Brand, Digital, Content & Outdoor Media</p>
          </div>

          <div className="card-base p-4">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-white">1 Partner</div>
            <p className="text-[11px] text-zinc-400 mt-0.5">Zero Vendor Fragmentation & Single Point Contact</p>
          </div>

          <div className="card-base p-4">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-2.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-white">ROI First</div>
            <p className="text-[11px] text-zinc-400 mt-0.5">Business Outcome Driven (Not just activity)</p>
          </div>

        </div>

      </div>
    </section>
  );
};
