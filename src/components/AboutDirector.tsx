import React from 'react';
import { UserCheck, Award, CheckCircle2, Quote } from 'lucide-react';

export const AboutDirector: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative bg-[#09080A] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="red-badge mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Single Point Partner. <span className="gradient-text-red">Global Standard.</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Bringing strategy, creativity, digital execution, and physical media under one unified leadership.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Director Photo */}
          <div className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full">
            <div className="card-base p-2.5 bg-[#0F0C12] border-red-500/20">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src="/maheer_director.png"
                  alt="Maheer - Director, Founder & Owner of Adworks"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/80 backdrop-blur-md rounded-lg border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">Maheer</h3>
                      <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider">
                        Director / Founder & Owner
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-4">
            
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
              "We built Adworks so brands stop running around looking for different marketing vendors."
            </h3>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              <strong className="text-white">Adworks by Maheer</strong> is a 360° marketing and advertising company built to bring the major capabilities a business needs to build its brand, reach its audience and drive growth under one roof.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Our approach is simple: understand the business first, identify the real marketing objective, build the right mix of services, execute through the right channels, measure performance and continuously improve.
            </p>

            {/* Director Vision Quote */}
            <div className="card-base p-4 border-l-4 border-l-red-600 bg-red-950/20 my-2">
              <p className="text-zinc-200 italic text-xs sm:text-sm leading-relaxed">
                “To build a globally recognized 360° marketing company that connects brands with their audiences through integrated, creative and performance-driven marketing solutions.”
              </p>
              <div className="mt-2 text-[11px] font-semibold text-red-400">
                Director's Vision: Pakistan → Regional → Global
              </div>
            </div>

            {/* Core Values 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ONE PARTNER</span>
                </div>
                <p className="text-[11px] text-zinc-400">One primary relationship instead of managing multiple vendors.</p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>360° CAPABILITY</span>
                </div>
                <p className="text-[11px] text-zinc-400">Branding, digital, content, performance & outdoor media.</p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>OUTCOME FOCUSED</span>
                </div>
                <p className="text-[11px] text-zinc-400">We focus on business objectives—not simply producing activity.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
