import React from 'react';
import { MapPin, Sparkles, Building, Zap, Shield } from 'lucide-react';

interface HoardingsShowcaseProps {
  onOpenModal: () => void;
}

export const HoardingsShowcase: React.FC<HoardingsShowcaseProps> = ({ onOpenModal }) => {
  return (
    <section id="hoardings" className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="red-badge mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Owned Physical Assets</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            150+ Owned <span className="gradient-text-red">Outdoor Hoardings</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Nationwide physical-media footprint bringing brands from screens to streets.
          </p>
        </div>

        {/* Showcase Banner */}
        <div className="card-base p-6 sm:p-10 bg-gradient-to-r from-[#140B10] via-[#0F0C12] to-[#140B10] border-red-500/30 mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-red-400 text-xs font-bold uppercase tracking-wider block">
                Nationwide Outdoor Footprint
              </span>

              <h3 className="font-heading font-bold text-xl sm:text-3xl text-white leading-snug">
                Combining Street-Level Impact with Digital Performance Ads
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Adworks owns a significant inventory of over <strong className="text-white">150+ hoardings and billboard sites</strong> across major highways, commercial hubs, and urban centers in Pakistan.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="font-heading font-bold text-xl text-red-500">150+</div>
                  <div className="text-[10px] text-zinc-400">Owned Hoardings</div>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="font-heading font-bold text-xl text-white">High</div>
                  <div className="text-[10px] text-zinc-400">Traffic Visibility</div>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="font-heading font-bold text-xl text-red-500">3D</div>
                  <div className="text-[10px] text-zinc-400">Retail Signage</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-3 rounded-lg transition"
                >
                  Request Hoarding Availability & Locations
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/agency_showcase.png" 
                  alt="Outdoor Hoardings Pakistan" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/80 backdrop-blur-md rounded-lg border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-red-500" />
                    <span>Outdoor + Digital Retargeting</span>
                  </div>
                  <p className="text-[10px] text-zinc-300">Target audiences on the street and on mobile screens simultaneously.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-base p-4">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-3">
              <Building className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-white mb-1">Prime City Hubs</h4>
            <p className="text-xs text-zinc-400">Strategic locations across high-density commercial corridors.</p>
          </div>

          <div className="card-base p-4">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-white mb-1">3D Shop Signage</h4>
            <p className="text-xs text-zinc-400">Illuminated letters, retail shop fascias & acrylic lightboxes.</p>
          </div>

          <div className="card-base p-4">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-white mb-1">End-to-End Handling</h4>
            <p className="text-xs text-zinc-400">Artwork printing, mounting, and maintenance handled 100% by Adworks.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
