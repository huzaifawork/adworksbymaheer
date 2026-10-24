import React from 'react';
import { ArrowRight, MapPin, Layers, UserCheck, TrendingUp, type LucideIcon } from 'lucide-react';

const credentials: Array<{ icon: LucideIcon; label: string; value: string; title: string; desc: string }> = [
  { icon: MapPin, label: 'OOH Assets', value: '250+', title: 'Owned Outdoor Media', desc: 'Major highway corridors & prime urban hubs nationwide' },
  { icon: Layers, label: 'Capabilities', value: '360°', title: 'Unified Delivery', desc: 'Brand identity, digital ads, video shoots & retail signage' },
  { icon: UserCheck, label: 'Partner Model', value: '1 Direct', title: 'Accountable Contact', desc: 'One point of contact, no broker markups or vendor chaos' },
  { icon: TrendingUp, label: 'Client Growth', value: 'ROI First', title: 'Measurable Impact', desc: 'Accountable for qualified leads and sales growth' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative border-b border-white/5">

      {/* ─── Billboard stage ─── */}
      <div className="relative min-h-[92svh] lg:min-h-[86vh] flex items-end lg:items-center overflow-hidden">
        {/* The billboard carries the brand mark, so the hero needs no separate logo.
            The portrait crop matches the preload media queries in index.html. */}
        <picture>
          <source media="(max-aspect-ratio: 3/4)" srcSet="/bgimage/bgimage-portrait.webp" type="image/webp" />
          <source srcSet="/bgimage/bgimage.webp" type="image/webp" />
          <img
            src="/bgimage/bgimage-portrait.jpg"
            alt="Adworks by Maheer billboard lit at sunset above a mountain highway"
            // React 18 doesn't know fetchPriority yet; pass the raw attribute.
            {...{ fetchpriority: 'high' }}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[center_top] lg:object-[70%_center]"
          />
        </picture>

        {/* Legibility: dark from the bottom on phones, from the left on desktop,
            plus a light top band so the navbar reads over the sky. */}
        <div
          className="absolute inset-0 lg:hidden"
          aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, rgba(7,6,9,0.55) 0%, rgba(7,6,9,0) 18%, rgba(7,6,9,0) 32%, rgba(7,6,9,0.72) 48%, rgba(7,6,9,0.94) 60%, #070609 78%)' }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to right, rgba(7,6,9,0.94) 0%, rgba(7,6,9,0.82) 30%, rgba(7,6,9,0.25) 58%, rgba(7,6,9,0) 75%),' +
              'linear-gradient(to bottom, rgba(7,6,9,0.6) 0%, rgba(7,6,9,0) 22%, rgba(7,6,9,0) 72%, #070609 100%)',
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 lg:py-32">
          <div className="max-w-xl">
            {/* The eyebrow is part of the h1 so the page's main heading names
                what the business is and where, not just the slogan. */}
            <h1 className="text-white mb-5">
              <span className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 shrink-0 bg-red-500/70" aria-hidden="true" />
                <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
                  Marketing &amp; Billboard Agency in Pakistan
                </span>
              </span>{' '}
              <span className="block font-heading font-extrabold text-4xl sm:text-6xl tracking-tight leading-[1.05]">
                One Agency.{' '}<br />
                <span className="gradient-text-red">Every Channel.</span>
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-lg">
              Strategy, creative, performance ads, content and{' '}
              <strong className="text-white font-semibold">250+ owned hoardings</strong> across Pakistan, run by one
              accountable team.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto btn-luxury-action inline-flex items-center justify-center gap-2.5 text-white font-semibold text-sm px-7 py-3.5 rounded-xl active:scale-[0.98] transition-all"
              >
                <span className="relative z-10">Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-white/90 relative z-10" />
              </a>

              <a
                href="#hoardings"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-sm text-zinc-100 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/30 transition-all"
              >
                <span>Explore Our Hoardings</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Credibility strip ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20 pt-4 lg:pt-0 lg:-mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 text-left">
          {credentials.map(({ icon: Icon, label, value, title, desc }) => (
            <div
              key={label}
              className="card-base p-5 border border-white/5 bg-[#0D0B11]/90 hover:border-red-500/40 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest group-hover:text-red-400 transition-colors">
                  {label}
                </span>
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">{value}</div>
              <div className="text-xs font-semibold text-red-400 mt-1">{title}</div>
              <p className="text-xs text-zinc-400 mt-1.5 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
