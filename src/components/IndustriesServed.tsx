import React from 'react';
import {
  Building,
  ShoppingBag,
  Package,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Car,
  ShoppingCart,
  Cpu,
  Briefcase,
  Wrench,
  Rocket,
} from 'lucide-react';

export const IndustriesServed: React.FC = () => {
  const industries = [
    { icon: Building, name: 'Real Estate', desc: 'Property launches & outdoor hoardings' },
    { icon: ShoppingBag, name: 'Retail & Fashion', desc: 'Store footfall & shop fascias' },
    { icon: Package, name: 'FMCG Brands', desc: 'Mass reach outdoor & brand campaigns' },
    { icon: HeartPulse, name: 'Healthcare', desc: 'Patient trust & local SEO' },
    { icon: GraduationCap, name: 'Education', desc: 'Admissions & social lead generation' },
    { icon: UtensilsCrossed, name: 'Hospitality', desc: 'Restaurant branding & UGC video' },
    { icon: Car, name: 'Automotive', desc: 'Showroom branding & digital funnels' },
    { icon: ShoppingCart, name: 'E-Commerce', desc: 'Meta/Google Ads & landing pages' },
    { icon: Cpu, name: 'Technology', desc: 'B2B lead gen & positioning' },
    { icon: Briefcase, name: 'Corporate', desc: 'Corporate identity & PR' },
    { icon: Wrench, name: 'Services', desc: 'Local search & customer acquisition' },
    { icon: Rocket, name: 'Startups & SMEs', desc: 'Brand foundation & MVP launch' },
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 section-veil relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — editorial overline, no pill */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              Target Verticals
            </span>
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Industries We <span className="gradient-text-red">Serve</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            "The client's size or industry does not determine the solution. The business objective does."
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="card-base p-4 flex flex-col sm:flex-row items-start gap-3 group cursor-default"
            >
              <div className="shrink-0 w-9 h-9 rounded-lg bg-red-950/60 border border-red-500/20 flex items-center justify-center group-hover:bg-red-600/20 group-hover:border-red-500/40 transition-colors">
                <ind.icon className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white mb-0.5 leading-snug">
                  {ind.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-snug">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
