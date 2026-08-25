import React from 'react';
import { XCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export const OneStopModel: React.FC = () => {
  return (
    <section id="model" className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="red-badge mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Our One-Stop <span className="gradient-text-red">Client Model</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            One client relationship. Multiple specialist capabilities. One coordinated outcome.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Traditional Model */}
          <div className="card-base p-6 bg-zinc-950/60">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/10">
              <XCircle className="w-5 h-5 text-zinc-500" />
              <div>
                <h3 className="font-heading font-bold text-base text-zinc-300">The Traditional Model</h3>
                <p className="text-[11px] text-zinc-500">Managing multiple disconnected vendors</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5">
                <span className="text-zinc-500 font-bold">•</span>
                <div>
                  <strong className="text-zinc-200 block mb-0.5">Fragmented Communication</strong>
                  Juggling separate freelancers for Facebook ads, SEO, video shoots, and outdoor hoardings.
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5">
                <span className="text-zinc-500 font-bold">•</span>
                <div>
                  <strong className="text-zinc-200 block mb-0.5">Inconsistent Branding</strong>
                  Digital design doesn't match physical hoardings; inconsistent brand messaging.
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5">
                <span className="text-zinc-500 font-bold">•</span>
                <div>
                  <strong className="text-zinc-200 block mb-0.5">Zero Single Accountability</strong>
                  Vendors blame each other for poor ROI ("Ad was fine, website failed", etc.).
                </div>
              </li>
            </ul>
          </div>

          {/* Adworks Integrated Model */}
          <div className="card-base p-6 bg-[#0F0C12] border-red-500/40">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-red-500/30">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <div>
                <h3 className="font-heading font-bold text-base text-white">Adworks 360° Partner Model</h3>
                <p className="text-[11px] text-red-400">One dedicated team owning full execution</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-start gap-2.5 p-2.5 rounded-lg bg-red-950/30 border border-red-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Single Dedicated Contact</strong>
                  One account team coordinates strategy, digital, content, and outdoor hoarding execution.
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-lg bg-red-950/30 border border-red-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Physical + Digital Synergy</strong>
                  Combine street-level billboard presence with retargeted mobile social media & Google ads.
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-lg bg-red-950/30 border border-red-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Full Quality Control & ROI</strong>
                  Adworks takes 100% responsibility for campaign timing, brand consistency, and revenue growth.
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* 6 Quick Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs">
          <div className="card-base p-3 font-semibold text-zinc-300">ONE PARTNER</div>
          <div className="card-base p-3 font-semibold text-red-400">360° CAPABILITY</div>
          <div className="card-base p-3 font-semibold text-zinc-300">150+ HOARDINGS</div>
          <div className="card-base p-3 font-semibold text-red-400">PHYSICAL + DIGITAL</div>
          <div className="card-base p-3 font-semibold text-zinc-300">STRATEGY FIRST</div>
          <div className="card-base p-3 font-semibold text-red-400">SCALABLE MIX</div>
        </div>

      </div>
    </section>
  );
};
