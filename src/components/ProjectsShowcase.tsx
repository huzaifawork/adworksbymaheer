import React, { useState } from 'react';
import { Expand } from 'lucide-react';
import { Lightbox } from './Lightbox';

const projects = [
  {
    name: 'NEXZE',
    image: '/project-images/nexze-signage',
    tag: 'Illuminated 3D Signage',
  },
  {
    name: 'MJ Mobile Communication',
    image: '/project-images/mj-mobile-signage',
    tag: 'Retail Storefront Branding',
  },
  {
    name: 'Kamal Mobile',
    image: '/project-images/kamal-mobile-signage',
    tag: 'Bilingual LED Signboard',
  },
  {
    name: 'Bester / Yosonda',
    image: '/project-images/bester-yosonda-signage',
    tag: 'Multi-Brand Directional Signage',
    // The only landscape shot; cropping it to the portrait frame would cut
    // the sign itself, so it is letterboxed over a blurred copy instead.
    landscape: true,
  },
  {
    name: "Hi Link's",
    image: '/project-images/hilinks-signage',
    tag: 'Custom-Shape Lightbox',
  },
  {
    name: 'G.Golden',
    image: '/project-images/ggolden-signage',
    tag: 'Backlit Emblem Signage',
  },
];

const pad = (n: number) => String(n + 1).padStart(2, '0');

export const ProjectsShowcase: React.FC = () => {
  // Index of the project open in the full-size viewer, or null when closed.
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 section-veil relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-red-600/50" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
                Our Work
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
              Featured <span className="gradient-text-red">Signage Projects</span>
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Illuminated signboards and storefront branding, designed, fabricated and installed by our team.
            </p>
          </div>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 shrink-0">
            {projects.length} recent installations
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10">
          {projects.map((project, i) => (
            <figure key={project.name} className="group">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`View ${project.name} signage full size`}
                className="relative block w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-white/10 group-hover:border-red-500/40 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {'landscape' in project && (
                  <img
                    src={`${project.image}.webp`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover scale-125 blur-xl"
                  />
                )}
                <picture className="contents">
                  <source srcSet={`${project.image}.webp`} type="image/webp" />
                  <img
                    src={`${project.image}.jpg`}
                    alt={`${project.name} signage project by Adworks by Maheer`}
                    loading="lazy"
                    decoding="async"
                    className={`relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                      'landscape' in project ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </picture>

                <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 rounded-md bg-black/60 text-[10px] font-mono font-bold text-zinc-300 tracking-wider">
                  {pad(i)}
                </span>
                <span
                  className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 rounded-lg bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  <Expand className="w-3.5 h-3.5" />
                </span>
              </button>

              <figcaption className="mt-3 sm:mt-4">
                <h3 className="font-heading font-bold text-sm sm:text-lg text-white leading-tight group-hover:text-red-400 transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 text-[11px] sm:text-xs text-zinc-400">{project.tag}</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>

      <Lightbox
        items={projects.map(p => ({
          image: p.image,
          title: p.name,
          caption: p.tag,
          alt: `${p.name} signage project by Adworks by Maheer`,
        }))}
        index={open}
        onChange={setOpen}
      />
    </section>
  );
};
