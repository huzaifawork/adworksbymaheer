import React, { useState } from 'react';
import { Palette, TrendingUp, Video, MapPin, Layers, ArrowUpRight } from 'lucide-react';

export const ServiceEcosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('brand');

  const divisions = [
    {
      id: 'brand',
      number: '01',
      title: 'Brand & Creative',
      tagline: 'Establish an authoritative identity and turn business strategy into compelling creative direction.',
      icon: <Palette className="w-5 h-5" />,
      subdivisions: [
        {
          name: 'BRAND STRATEGY',
          items: ['Brand Positioning & Moat', 'Target Audience Architecture', 'Core Brand Messaging', 'Competitive Differentiation']
        },
        {
          name: 'VISUAL IDENTITY',
          items: ['Logo Design Systems', 'Color Palettes & Typography', 'Brand Guidelines & Manuals', 'Stationery & Digital Assets']
        },
        {
          name: 'CREATIVE DESIGN',
          items: ['Multi-Format Ad Creatives', 'Social Media Identity Systems', 'Brochures & Annual Reports', 'Packaging & Print Art']
        },
        {
          name: 'CAMPAIGN CONCEPTS',
          items: ['Hero Creative Direction', 'Cross-Channel Ad Copywriting', 'Digital + OOH Adaptation', 'High-Converting Hooks']
        }
      ]
    },
    {
      id: 'digital',
      number: '02',
      title: 'Digital & Performance',
      tagline: 'Put brands in front of high-intent audiences and engineer measurable sales conversion funnels.',
      icon: <TrendingUp className="w-5 h-5" />,
      subdivisions: [
        {
          name: 'META ADS (FB & IG)',
          items: ['Full-Funnel Retargeting', 'High-ROAS Lead Generation', 'Custom & Lookalike Audiences', 'Meta Conversion API Tracking']
        },
        {
          name: 'GOOGLE ADS',
          items: ['High-Intent Search Ads', 'YouTube Pre-Roll Campaigns', 'Google Display Network', 'Performance Max Scaling']
        },
        {
          name: 'TECHNICAL SEO',
          items: ['Core Web Vitals Optimization', 'Strategic Keyword Mapping', 'Technical & On-Page SEO', 'Local Search & Google Maps']
        },
        {
          name: 'GROWTH ANALYTICS',
          items: ['Full Attribution Modeling', 'A/B Creative Split Testing', 'Conversion Rate Optimization', 'Transparent Weekly Reporting']
        }
      ]
    },
    {
      id: 'content',
      number: '03',
      title: 'Content & Web Presence',
      tagline: 'High-converting digital destinations and viral visual storytelling that commands customer attention.',
      icon: <Video className="w-5 h-5" />,
      subdivisions: [
        {
          name: 'VIDEO PRODUCTION',
          items: ['Viral Reels & TikTok Content', 'High-End Product Shoots', 'Corporate Documentary Films', 'Dynamic Motion Graphics']
        },
        {
          name: 'UGC & CREATOR ADS',
          items: ['Direct-Response UGC Ads', 'Product Demonstrations', 'Customer Testimonial Shoots', 'Hook-Rate Optimization']
        },
        {
          name: 'BESPOKE WEBSITES',
          items: ['Custom Landing Pages', 'Full-Stack Web Platforms', 'Mobile-First Responsive UX', 'Ultra-Fast Page Load Speed']
        },
        {
          name: 'RETENTION & CRM',
          items: ['Automated WhatsApp Sequences', 'Email Funnel Workflows', 'Customer Lifetime Value Nurture', 'B2B Lead Follow-Up Systems']
        }
      ]
    },
    {
      id: 'outdoor',
      number: '04',
      title: 'Outdoor & Physical Media',
      tagline: 'Direct nationwide physical footprint with 250+ owned hoardings and premier retail signage fabrication.',
      icon: <MapPin className="w-5 h-5" />,
      subdivisions: [
        {
          name: '250+ OWNED HOARDINGS',
          items: ['Major Highway Approaches', 'High-Speed Motorway Corridors', 'Nationwide OOH Campaigns', 'Zero Broker Markups']
        },
        {
          name: 'URBAN COMMERCIAL HUBS',
          items: ['High-Footfall City Centers', 'Captive Traffic Junctions', 'Prime Visibility Sightlines', 'Long Dwell-Time Belts']
        },
        {
          name: '3D SIGNAGE FABRICATION',
          items: ['3D Channel Letters & Acrylics', 'Illuminated Retail Fascias', 'Storefront Transformations', 'Architectural Lightboxes']
        },
        {
          name: 'END-TO-END HANDLING',
          items: ['Large-Format Vinyl Printing', 'Certified On-Site Mounting', '24/7 Night LED Illumination', 'Continuous Maintenance Audits']
        }
      ]
    }
  ];

  const activeDivision = divisions.find(d => d.id === activeTab) || divisions[0];

  return (
    <section id="services" className="py-20 sm:py-24 relative border-b border-white/5 bg-[#08070B]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Architectural Editorial Overline (No Capsule Pill) */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              360° Integrated Capabilities
            </span>
            <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Our Service <span className="gradient-text-red">Ecosystem</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Four specialist divisions working as one team, from brand identity to performance ads to outdoor media.
          </p>
        </div>

        {/* Division Tab Switcher */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {divisions.map((div) => {
            const isActive = activeTab === div.id;
            return (
              <button
                key={div.id}
                onClick={() => setActiveTab(div.id)}
                className={`relative p-4 rounded-xl text-left transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#140E14] border-red-500/60 shadow-lg shadow-red-950/40'
                    : 'bg-[#0E0C11]/80 border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.04] hover:border-white/15'
                }`}
              >
                {/* Active indicator top bar */}
                {isActive && (
                  <span className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
                )}

                <div className="flex items-center justify-between mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-red-600 text-white shadow-md shadow-red-950/50' : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    {div.icon}
                  </div>
                  <span
                    className={`font-heading font-extrabold text-lg transition-colors ${
                      isActive ? 'text-red-500' : 'text-zinc-600'
                    }`}
                  >
                    {div.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-sm text-white mb-1">
                  {div.title}
                </h3>
                <p className="hidden sm:block text-xs text-zinc-400 line-clamp-1 leading-snug">
                  {div.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Division Panel */}
        <div className="card-base p-6 sm:p-8 bg-[#0D0B11]/90 border border-white/10 shadow-2xl shadow-black/80 rounded-2xl animate-fadeIn">
          
          {/* Active Division Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-red-500 font-heading font-extrabold text-xl">{activeDivision.number}</span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  {activeDivision.title}
                </h3>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                {activeDivision.tagline}
              </p>
            </div>
          </div>

          {/* Subdivisions Grid (Clean 4-column balanced layout for ALL divisions) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {activeDivision.subdivisions.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] hover:bg-white/[0.04] rounded-xl p-4 border border-white/5 hover:border-red-500/30 transition-all duration-200 group"
              >
                <h4 className="font-heading font-bold text-xs text-red-400 uppercase mb-3.5 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>{sub.name}</span>
                  <span className="text-[10px] text-zinc-600 font-mono">0{idx + 1}</span>
                </h4>

                <ul className="space-y-2.5">
                  {sub.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0 mt-1.5 group-hover:bg-red-400 transition-colors" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Single-Partner Guarantee Banner */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Need a custom mix? All 4 divisions are fully interoperable under a <strong>single monthly retainer</strong> or campaign contract.</span>
            </span>

            <a
              href="#model"
              className="text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-1 transition shrink-0 py-2"
            >
              <span>Why 1 Partner Beats 4 Vendors</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
