import React from 'react';
import { Search, Compass, PenTool, Rocket, BarChart3, RefreshCw } from 'lucide-react';

export const WhatWeDoProcess: React.FC = () => {
  const steps = [
    { num: '01', icon: Search,    title: 'DISCOVER',   desc: 'Understand business goals, target audience, market landscape, and budget.' },
    { num: '02', icon: Compass,   title: 'STRATEGIZE', desc: 'Craft an integrated marketing mix combining digital performance and outdoor media.' },
    { num: '03', icon: PenTool,   title: 'CREATE',     desc: 'Develop high-converting brand assets, video content, websites, and signage.' },
    { num: '04', icon: Rocket,    title: 'LAUNCH',     desc: 'Deploy campaigns across Meta, Google, SEO, and street-level hoarding inventory.' },
    { num: '05', icon: BarChart3, title: 'MEASURE',    desc: 'Track clear business metrics: qualified leads, sales conversions, and ROI.' },
    { num: '06', icon: RefreshCw, title: 'OPTIMIZE',   desc: 'Analyze performance data, refine ad targeting, and scale top-performing channels.' },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 section-veil relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              Structured Methodology
            </span>
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            How We Work: <span className="gradient-text-red">6-Step Growth System</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Strategy, execution, and accountability connected end-to-end.
          </p>
        </div>

        {/* Growth Philosophy Banner */}
        <div className="card-base p-5 sm:p-6 border-l-4 border-l-red-600 bg-red-950/20 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-red-400 text-[10px] font-bold uppercase tracking-wider block mb-0.5">Growth Philosophy</span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                "Marketing should move from activity to measurable business outcomes."
              </h3>
              <p className="text-zinc-300 text-xs mt-1">
                A campaign going live is not the finish line. We focus on leads, sales conversions, and business growth.
              </p>
            </div>
            <div className="shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-semibold block text-center">
                BUILD → REACH → CONVERT → GROW
              </span>
            </div>
          </div>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="card-base p-5 relative group hover:border-red-500/30 transition-colors">
              {/* Large typographic number — architectural, not AI */}
              <span className="font-heading font-extrabold text-5xl text-white/[0.04] select-none absolute top-3 right-4 leading-none">
                {step.num}
              </span>

              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                  <step.icon className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[10px] font-bold text-red-500/80 uppercase tracking-[0.18em]">
                  Step {step.num}
                </span>
              </div>

              <h3 className="font-heading font-bold text-base text-white mb-2">
                {step.title}
              </h3>

              <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
