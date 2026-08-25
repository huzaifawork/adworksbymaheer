import React, { useState } from 'react';
import { Palette, TrendingUp, Video, MapPin, CheckCircle, ArrowRight, Layers } from 'lucide-react';

export const ServiceEcosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('brand');

  const divisions = [
    {
      id: 'brand',
      number: '01',
      title: 'Brand & Creative',
      tagline: 'Establish a clear identity and turn strategy into creative communication.',
      icon: <Palette className="w-5 h-5" />,
      subdivisions: [
        {
          name: 'BRAND STRATEGY',
          items: ['Brand Positioning', 'Target Audience Definition', 'Brand Messaging', 'Market Positioning']
        },
        {
          name: 'BRAND IDENTITY',
          items: ['Logo Design', 'Visual Identity Systems', 'Typography & Color', 'Brand Guidelines']
        },
        {
          name: 'CREATIVE DESIGN',
          items: ['Advertising Creatives', 'Social Media Design', 'Campaign Artwork', 'Brochures & Catalogues']
        },
        {
          name: 'CAMPAIGN CREATIVE',
          items: ['Campaign Concepts', 'Creative Direction', 'Cross-Channel Adaptation', 'Digital + Outdoor Artwork']
        }
      ]
    },
    {
      id: 'digital',
      number: '02',
      title: 'Digital & Performance',
      tagline: 'Put brands in front of target audiences and measure conversion outcomes.',
      icon: <TrendingUp className="w-5 h-5" />,
      subdivisions: [
        {
          name: 'META ADS',
          items: ['Facebook & Instagram Ads', 'Brand Awareness', 'Lead Generation', 'Retargeting Funnels']
        },
        {
          name: 'GOOGLE ADS',
          items: ['Search Campaigns', 'Display Network', 'YouTube Ads', 'Performance Max']
        },
        {
          name: 'SEO SERVICES',
          items: ['Technical SEO', 'On-Page Optimization', 'Keyword Strategy', 'Local SEO & Maps']
        },
        {
          name: 'SOCIAL MEDIA',
          items: ['Social Strategy', 'Content Calendars', 'Community Management', 'Growth Analytics']
        }
      ]
    },
    {
      id: 'content',
      number: '03',
      title: 'Content & Web Presence',
      tagline: 'High-converting digital homes and engaging visual content.',
      icon: <Video className="w-5 h-5" />,
      subdivisions: [
        {
          name: 'CONTENT CREATION',
          items: ['Reels & Short Video', 'Product & Corporate Shoots', 'Photography & Video', 'Motion Graphics']
        },
        {
          name: 'UGC & CREATOR',
          items: ['UGC Ad Videos', 'Product Demonstrations', 'Testimonial Content', 'Creator Collaborations']
        },
        {
          name: 'WEBSITES & LANDING PAGES',
          items: ['Custom Website Design', 'Full-Stack Development', 'Landing Pages', 'Conversion Optimization']
        },
        {
          name: 'EMAIL MARKETING',
          items: ['Email Campaigns', 'Newsletter Design', 'Promotional Sequences', 'Retention Nurturing']
        }
      ]
    },
    {
      id: 'outdoor',
      number: '04',
      title: 'Outdoor & Physical Media',
      tagline: 'Nationwide physical-media inventory with 150+ owned hoardings.',
      icon: <MapPin className="w-5 h-5" />,
      subdivisions: [
        {
          name: 'OUTDOOR ADVERTISING',
          items: ['150+ Owned Hoarding Sites', 'Highway Billboards', 'Nationwide OOH Campaigns', 'Event Launches']
        },
        {
          name: 'PHYSICAL BRANDING',
          items: ['Shop & Retail Branding', 'Corporate Signage', '3D Signs & Channel Letters', 'Large-Format Printing']
        }
      ]
    }
  ];

  const activeDivision = divisions.find(d => d.id === activeTab) || divisions[0];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="red-badge mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Integrated Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Our Service <span className="gradient-text-red">Ecosystem</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Four connected divisions covering all marketing needs of a modern brand under one roof.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {divisions.map((div) => {
            const isActive = activeTab === div.id;
            return (
              <button
                key={div.id}
                onClick={() => setActiveTab(div.id)}
                className={`p-4 rounded-xl text-left transition border ${
                  isActive
                    ? 'bg-red-950/40 border-red-500 text-white'
                    : 'bg-[#121015] border-white/10 text-zinc-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-red-600 text-white' : 'bg-white/5 text-zinc-400'}`}>
                    {div.icon}
                  </div>
                  <span className={`font-heading font-bold text-lg ${isActive ? 'text-red-500' : 'text-zinc-600'}`}>
                    {div.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm text-white mb-0.5">{div.title}</h3>
                <p className="text-[11px] text-zinc-400 line-clamp-1">{div.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Division Details */}
        <div className="card-base p-6 sm:p-8 bg-[#0F0C12] border-red-500/30">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-heading font-bold text-xl">{activeDivision.number}</span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">{activeDivision.title}</h3>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm mt-1">{activeDivision.tagline}</p>
            </div>

            <a 
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition self-start sm:self-center shrink-0"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Subdivisions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {activeDivision.subdivisions.map((sub, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5">
                <h4 className="font-heading font-bold text-xs text-red-400 uppercase mb-3 border-b border-white/10 pb-1.5">
                  {sub.name}
                </h4>
                <ul className="space-y-2">
                  {sub.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
