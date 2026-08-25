import React from 'react';
import { Rocket, Bot, Globe, Zap } from 'lucide-react';

export const GrowthRoadmap: React.FC = () => {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'Integrated Marketing',
      status: 'Current Core Capability',
      active: true,
      icon: <Zap className="w-4 h-4" />,
      items: ['Branding & Identity', 'Meta & Google Ads', 'Content & UGC Video', '150+ Outdoor Hoardings']
    },
    {
      phase: 'PHASE 2',
      title: 'Growth Marketing',
      status: 'Active Expansion',
      active: true,
      icon: <Rocket className="w-4 h-4" />,
      items: ['Performance Scaling', 'Conversion Optimization', 'Lead Qualification', 'Analytics Attribution']
    },
    {
      phase: 'PHASE 3',
      title: 'Marketing Technology',
      status: 'In Deployment',
      active: false,
      icon: <Bot className="w-4 h-4" />,
      items: ['AI Chatbots & Agents', 'AI Voice Assistants', 'WhatsApp CRM Automations', 'Workflow Automation']
    },
    {
      phase: 'PHASE 4',
      title: 'Global Ecosystem',
      status: 'Vision & Trajectory',
      active: false,
      icon: <Globe className="w-4 h-4" />,
      items: ['Global Brand Strategy', 'Regional Media', 'Enterprise Tech', 'Full Ecosystem Growth']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="red-badge mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Company Trajectory</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Where We Are <span className="gradient-text-red">Going</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            "Building capability first, scale second."
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((p, idx) => (
            <div 
              key={idx}
              className={`card-base p-4 relative ${
                p.active ? 'border-red-500/40 bg-[#0F0C12]' : 'bg-[#121015] opacity-75'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  p.active ? 'bg-red-600 text-white' : 'bg-white/10 text-zinc-400'
                }`}>
                  {p.phase}
                </span>
                <div className={`p-1.5 rounded ${p.active ? 'bg-red-600/20 text-red-400' : 'bg-white/5 text-zinc-500'}`}>
                  {p.icon}
                </div>
              </div>

              <h3 className="font-heading font-bold text-base text-white mb-0.5">{p.title}</h3>
              <p className="text-[10px] text-red-400 font-semibold mb-3">{p.status}</p>

              <ul className="space-y-1.5 border-t border-white/10 pt-3">
                {p.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs text-zinc-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
