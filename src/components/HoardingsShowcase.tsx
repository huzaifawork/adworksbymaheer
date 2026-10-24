import React, { useState } from 'react';
import { MapPin, ArrowUpRight, BadgePercent, Lightbulb, Route, Signpost, Building2, Hammer, type LucideIcon } from 'lucide-react';
import { waLink } from '../lib/contact';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Lightbox } from './Lightbox';

// Photos are re-graded copies (-v2) of the originals, with the baked-in
// vignette lifted. `focus` keeps each board in frame when a tile crops.
const sites = [
  {
    src: '/hoardings/hoarding-main-v2',
    title: 'City Centre Landmark',
    location: 'City Centre',
    meta: 'National brand campaign · elevated sightline',
    alt: 'Large Coca-Cola campaign on an elevated city-centre hoarding above a busy street',
    focus: 'center 22%',
  },
  {
    src: '/hoardings/hoarding-01-v2',
    title: 'Commercial Hub Junction',
    location: 'Urban Commercial',
    meta: 'Multi-board cluster · high dwell time',
    alt: 'Large-format hoarding cluster overlooking a busy commercial junction',
    focus: 'center 18%',
  },
  {
    src: '/hoardings/hoarding-02-v2',
    title: 'Highway Gateway Site',
    location: 'Highway Corridor',
    meta: 'Dual-carriageway approach · long sightline',
    alt: 'Roadside hoarding on a wide highway gateway framed by mountains',
    focus: 'center 52%',
  },
  {
    src: '/hoardings/hoarding-03-v2',
    title: 'Motorway Corridor',
    location: 'Motorway OOH',
    meta: 'High-speed corridor · unobstructed view',
    alt: 'Hoarding beside a motorway corridor with clear unobstructed sightlines',
    focus: 'center 28%',
  },
  {
    src: '/hoardings/hoarding-04-v2',
    title: 'High-Footfall Market Road',
    location: 'Retail Strip',
    meta: 'Dense retail strip · pedestrian + vehicle',
    alt: 'Elevated hoarding above a dense market road with heavy vehicle and foot traffic',
    focus: 'center 32%',
  },
  {
    src: '/hoardings/hoarding-05-v2',
    title: 'Bridge Approach Site',
    location: 'Flyover Approach',
    meta: 'Captive slow-moving traffic · high frequency',
    alt: 'Hoarding positioned at a bridge approach with captive slow-moving traffic',
    focus: 'center 40%',
  },
];

// Grid placement per tile. Phones get a swipe row; from sm up it is a grid,
// and on lg the first site leads as a 4x2 feature with the rest around it.
const tileLayout = [
  'sm:col-span-2 sm:row-span-2 lg:col-span-4',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'sm:col-span-2 lg:col-span-2',
];

const networkStats: Array<{ value: string; label: string; sub: string; icon: LucideIcon }> = [
  { value: '250+', label: 'Owned Sites', sub: 'Zero broker markup', icon: MapPin },
  { value: 'PKR 0', label: 'Commission', sub: 'Direct-owned inventory', icon: BadgePercent },
  { value: '24/7', label: 'Illuminated', sub: 'LED night lighting', icon: Lightbulb },
  { value: 'Pan-PK', label: 'Coverage', sub: 'Highways to city hubs', icon: Route },
];

const RATES_URL = waLink('Hi Director Maheer, I would like to inquire about hoarding locations and rates.');

export const HoardingsShowcase: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="hoardings" className="py-16 sm:py-24 relative border-b border-white/5 overflow-hidden" style={{ background: '#080609' }}>

      {/* Rich ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 85% 10%, rgba(220,38,38,0.18) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 40% at 15% 90%, rgba(220,38,38,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ─── Section Header ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-red-500/60" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
                Owned Physical Assets
              </span>
              <span className="h-px w-8 bg-red-500/60" aria-hidden="true" />
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              250+ Owned Outdoor<br />
              <span className="gradient-text-red">Hoardings Network</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-sm leading-relaxed max-w-lg">
              A direct-owned inventory across Pakistan's major highways, commercial corridors and urban hubs — with zero broker markups and full turnkey execution.
            </p>
          </div>

          <a
            href={RATES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-red-950/60 hover:shadow-red-900/80 active:scale-[0.98] group shrink-0 btn-luxury-action"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Inquire About Hoarding Rates</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* ─── Network Stats Bar ─── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-10"
          style={{
            background: 'rgba(220,38,38,0.12)',
            boxShadow: '0 0 0 1px rgba(220,38,38,0.18), 0 4px 32px rgba(220,38,38,0.08)',
          }}
        >
          {networkStats.map((stat, i) => (
            <div
              key={i}
              className="px-6 py-6 flex flex-col gap-0.5 transition-colors"
              style={{ background: 'rgba(14,9,16,0.95)' }}
            >
              <stat.icon className="w-5 h-5 text-red-500 mb-3" strokeWidth={1.75} aria-hidden="true" />
              <span
                className="font-heading font-extrabold text-2xl sm:text-3xl leading-none"
                style={{ color: '#fff' }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-bold text-red-400 mt-2">{stat.label}</span>
              <span className="text-xs text-zinc-400 mt-0.5">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* ─── Photo Gallery ─── */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-heading font-bold text-sm text-white tracking-wide">
              Selected Sites From The Network
            </h3>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
              <span className="sm:hidden">Swipe →</span>
              <span className="hidden sm:inline">{sites.length} of 250+</span>
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-4 -mx-4 px-4 no-scrollbar sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-6 lg:auto-rows-[200px]">
            {sites.map((site, i) => (
              <figure
                key={site.src}
                className={`group relative shrink-0 w-[85%] snap-start aspect-[4/3] sm:w-auto sm:aspect-auto overflow-hidden rounded-xl border border-white/10 hover:border-red-500/60 transition-colors duration-500 ${tileLayout[i]}`}
                style={{ boxShadow: '0 4px 28px rgba(0,0,0,0.6)' }}
              >
                <picture>
                  <source srcSet={`${site.src}.webp`} type="image/webp" />
                  <img
                    src={`${site.src}.jpg`}
                    alt={site.alt}
                    width={i === 0 ? 1100 : 900}
                    height={i === 0 ? 825 : 600}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    style={{ objectPosition: site.focus }}
                  />
                </picture>

                {/* Shade only behind the caption, so the photo itself stays bright */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.14) 36%, transparent 58%)' }}
                />

                {/* Red bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-white/15">
                    <MapPin className="w-2.5 h-2.5 text-red-400" />
                    {site.location}
                  </span>
                </div>

                <span className="absolute top-2.5 right-2.5 font-mono text-[10px] font-bold text-zinc-300 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <figcaption className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4">
                  <p className={`font-heading font-bold text-white leading-snug drop-shadow-lg ${i === 0 ? 'text-base sm:text-xl' : 'text-sm'}`}>
                    {site.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-zinc-300 mt-0.5">{site.meta}</p>
                </figcaption>

                {/* Whole tile opens the full-size viewer */}
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`View ${site.title} full size`}
                  className="absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 rounded-xl"
                />
              </figure>
            ))}
          </div>
        </div>

        <Lightbox
          items={sites.map(site => ({ image: site.src, title: site.title, caption: site.meta, alt: site.alt }))}
          index={open}
          onChange={setOpen}
        />

        {/* ─── Three Pillars ─── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
          }}
        >
          {[
            {
              icon: Signpost,
              code: '01 // HIGHWAY & MOTORWAY',
              title: 'Prime Road Corridors',
              body: 'Strategic positions on major highway approaches and motorway corridors with unobstructed long sightlines and high-speed traffic flow.',
            },
            {
              icon: Building2,
              code: '02 // URBAN COMMERCIAL',
              title: 'City Hubs & Junctions',
              body: 'High-density commercial arteries, captive junction points and retail strips with dual pedestrian and vehicle audience coverage.',
            },
            {
              icon: Hammer,
              code: '03 // TURNKEY EXECUTION',
              title: 'Print · Mount · Maintain',
              body: 'Large-format vinyl printing, certified structural mounting, 24/7 LED illumination and continuous maintenance — all handled directly.',
            },
          ].map((p, i) => (
            <div
              key={i}
              className="p-6 group transition-colors duration-300"
              style={{ background: 'rgba(11,9,16,0.98)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(60,10,10,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(11,9,16,0.98)')}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                  <p.icon className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[10px] font-mono text-red-500/80 font-bold uppercase tracking-widest">
                  {p.code}
                </span>
              </div>
              <h4 className="font-heading font-bold text-sm text-white mb-2 group-hover:text-red-400 transition-colors">
                {p.title}
              </h4>
              <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
