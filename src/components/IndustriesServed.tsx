import React from 'react';
import { Building2, ShoppingBag, Box, Activity, GraduationCap, Utensils, Car, ShoppingCart, Cpu, Briefcase, Wrench, Rocket } from 'lucide-react';

export const IndustriesServed: React.FC = () => {
  const industries = [
    { name: 'REAL ESTATE', icon: <Building2 className="w-4 h-4" />, desc: 'Property launches & outdoor hoardings' },
    { name: 'RETAIL & FASHION', icon: <ShoppingBag className="w-4 h-4" />, desc: 'Store footfall & shop fascias' },
    { name: 'FMCG BRANDS', icon: <Box className="w-4 h-4" />, desc: 'Mass reach outdoor & brand campaigns' },
    { name: 'HEALTHCARE', icon: <Activity className="w-4 h-4" />, desc: 'Patient trust & local SEO' },
    { name: 'EDUCATION', icon: <GraduationCap className="w-4 h-4" />, desc: 'Admissions & social lead generation' },
    { name: 'HOSPITALITY', icon: <Utensils className="w-4 h-4" />, desc: 'Restaurant branding & UGC video' },
    { name: 'AUTOMOTIVE', icon: <Car className="w-4 h-4" />, desc: 'Showroom branding & digital funnels' },
    { name: 'E-COMMERCE', icon: <ShoppingCart className="w-4 h-4" />, desc: 'Meta/Google Ads & landing pages' },
    { name: 'TECHNOLOGY', icon: <Cpu className="w-4 h-4" />, desc: 'B2B lead gen & positioning' },
    { name: 'CORPORATE', icon: <Briefcase className="w-4 h-4" />, desc: 'Corporate identity & PR' },
    { name: 'SERVICES', icon: <Wrench className="w-4 h-4" />, desc: 'Local search & customer acquisition' },
    { name: 'STARTUPS & SMEs', icon: <Rocket className="w-4 h-4" />, desc: 'Brand foundation & MVP launch' }
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="red-badge mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Target Verticals</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Industries We <span className="gradient-text-red">Serve</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            "The client's size or industry does not determine the solution. The business objective does."
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind, idx) => (
            <div key={idx} className="card-base p-3.5 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-2">
                  {ind.icon}
                </div>
                <h3 className="font-heading font-bold text-xs text-white mb-0.5">
                  {ind.name}
                </h3>
                <p className="text-[10px] text-zinc-400 leading-tight">
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
