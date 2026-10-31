import React from 'react';
import portraitWebp from '../assets/maheer-about.webp';
import portraitJpg from '../assets/maheer-about.jpg';

export const AboutDirector: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 relative border-b border-white/5 bg-[#070609]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          {/* Architectural Editorial Overline (No Capsule Pill) */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              About Adworks
            </span>
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            One Partner. <span className="gradient-text-red">Full Accountability.</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Brand strategy, digital performance and nationwide outdoor media, led by one team.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Director Executive Portrait */}
          <div className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full">
            <div className="relative p-2 rounded-2xl bg-[#0D0B11] border border-white/10 shadow-2xl shadow-black/80 group">
              
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                <picture className="contents">
                  <source srcSet={portraitWebp} type="image/webp" />
                  <img
                    src={portraitJpg}
                    alt="Maheer - Founder & Managing Director of Adworks"
                    width={900}
                    height={1125}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </picture>

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Director ID Plate */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-[#09080C]/90 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-extrabold text-base text-white tracking-tight">
                        Maheer
                      </h3>
                      <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                        Founder &amp; Managing Director
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-red-500 font-semibold block">
                        Executive Desk
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Executive Principles */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="border-l-2 border-red-600 pl-4 py-1">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                "We built Adworks so growing brands never have to juggle fragmented vendors again."
              </h3>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              Most brands juggle a creative studio, social media freelancers and outdoor media brokers. <strong className="text-white">Adworks by Maheer</strong> was founded on a simple idea: businesses grow faster when strategy, creative, digital ads and outdoor media are planned and run by one team.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              We start with your numbers: the economics of your business and the targets that matter. Then we choose the right mix of digital and outdoor channels, and we stay accountable for the results.
            </p>

            {/* 3 Executive Commitments (Architectural Numbering - No Toy Icon Boxes) */}
            <div className="space-y-3 pt-2">
              
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition flex items-start gap-4 group">
                <span className="font-mono text-sm font-bold text-red-500 shrink-0 mt-0.5">
                  01.
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition">
                    Strategy Led by the Founder
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Every brand engagement and media plan is shaped directly by Maheer, never handed down to junior staff.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition flex items-start gap-4 group">
                <span className="font-mono text-sm font-bold text-red-500 shrink-0 mt-0.5">
                  02.
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition">
                    250+ Sites We Own
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    We own our hoarding structures across Pakistan, so clients get priority positions and transparent rates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition flex items-start gap-4 group">
                <span className="font-mono text-sm font-bold text-red-500 shrink-0 mt-0.5">
                  03.
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition">
                    Commercial Accountability
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    No vanity metrics. Every rupee across digital and outdoor is measured against qualified leads, footfall and sales.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
