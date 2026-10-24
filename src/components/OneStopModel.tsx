import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const OneStopModel: React.FC = () => {
  return (
    <section id="model" className="py-16 sm:py-20 section-veil relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — architectural overline, no pill */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              Competitive Advantage
            </span>
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Our One-Stop <span className="gradient-text-red">Client Model</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            One client relationship. Multiple specialist capabilities. One coordinated outcome.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Traditional Model */}
          <div className="card-base p-6 bg-zinc-950/60">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/10">
              <XCircle className="w-5 h-5 text-zinc-500" />
              <div>
                <h3 className="font-heading font-bold text-base text-zinc-300">The Traditional Model</h3>
                <p className="text-xs text-zinc-400">Managing multiple disconnected vendors</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-zinc-400">
              {[
                { title: 'Fragmented Communication', body: 'Juggling separate freelancers for Facebook ads, SEO, video shoots, and outdoor hoardings.' },
                { title: 'Inconsistent Branding', body: "Digital design doesn't match physical hoardings; inconsistent brand messaging." },
                { title: 'Zero Single Accountability', body: 'Vendors blame each other for poor ROI ("Ad was fine, website failed", etc.).' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <span className="text-zinc-600 font-bold mt-0.5">×</span>
                  <div>
                    <strong className="text-zinc-200 block mb-0.5">{item.title}</strong>
                    {item.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Adworks Integrated Model */}
          <div className="card-base p-6 bg-[#0F0C12]/85 border-red-500/40">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-red-500/30">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <div>
                <h3 className="font-heading font-bold text-base text-white">Adworks 360° Partner Model</h3>
                <p className="text-xs text-red-400">One dedicated team owning full execution</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-zinc-300">
              {[
                { title: 'Single Dedicated Contact', body: 'One account team coordinates strategy, digital, content, and outdoor hoarding execution.' },
                { title: 'Physical + Digital Synergy', body: 'Combine street-level billboard presence with retargeted mobile social media & Google ads.' },
                { title: 'Full Quality Control & ROI', body: 'Adworks takes 100% responsibility for campaign timing, brand consistency, and revenue growth.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-red-950/30 border border-red-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">{item.title}</strong>
                    {item.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
