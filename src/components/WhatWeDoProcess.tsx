import React from 'react';
import { Search, Compass, PenTool, Rocket, BarChart3, RefreshCw } from 'lucide-react';

export const WhatWeDoProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      icon: <Search className="w-4 h-4" />,
      desc: 'Understand business goals, target audience, market landscape, and budget.'
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      icon: <Compass className="w-4 h-4" />,
      desc: 'Craft an integrated marketing mix combining digital performance and outdoor media.'
    },
    {
      num: '03',
      title: 'CREATE',
      icon: <PenTool className="w-4 h-4" />,
      desc: 'Develop high-converting brand assets, video content, websites, and signage.'
    },
    {
      num: '04',
      title: 'LAUNCH',
      icon: <Rocket className="w-4 h-4" />,
      desc: 'Deploy campaigns across Meta, Google, SEO, and street-level hoarding inventory.'
    },
    {
      num: '05',
      title: 'MEASURE',
      icon: <BarChart3 className="w-4 h-4" />,
      desc: 'Track clear business metrics: qualified leads, sales conversions, and ROI.'
    },
    {
      num: '06',
      title: 'OPTIMIZE',
      icon: <RefreshCw className="w-4 h-4" />,
      desc: 'Analyze performance data, refine ad targeting, and scale top-performing channels.'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="red-badge mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            How We Work: <span className="gradient-text-red">6-Step Growth System</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
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
            <div key={idx} className="card-base p-5 relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="font-heading font-bold text-xl text-zinc-600">{step.num}</span>
              </div>

              <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-0.5">
                Step {step.num}
              </div>

              <h3 className="font-heading font-bold text-base text-white mb-1.5">
                {step.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
