import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Lightbulb } from 'lucide-react';

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

export const ProjectsShowcase: React.FC = () => {
  // Every board starts unlit and strikes on as it comes into view, the way a
  // row of shopfront signs does at dusk. These people build lightboxes - the
  // work should arrive switched on, not as a flat photograph of one.
  const [lit, setLit] = useState<boolean[]>(() => projects.map(() => false));
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLit(projects.map(() => true));
      return;
    }

    const timers: Array<ReturnType<typeof setTimeout>> = [];

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const i = Number(el.dataset.idx);
          // A board only ever strikes once.
          io.unobserve(el);
          // Boards that arrive together light left-to-right along the row
          // instead of all snapping on at the same instant.
          timers.push(
            setTimeout(() => {
              setLit((prev) => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, (i % 3) * 110)
          );
        }
      },
      { threshold: 0.28 }
    );

    cardRefs.current.forEach((el) => el && io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-20 section-veil relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="red-badge mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Our Work</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Featured <span className="gradient-text-red">Signage Projects</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            A look at real illuminated signboards and branding installations delivered for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-idx={i}
              data-lit={lit[i] ? '' : undefined}
              className="signboard card-base overflow-hidden group"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-black/40 flex items-center justify-center">
                <picture className="contents">
                  <source srcSet={`${project.image}.webp`} type="image/webp" />
                  <img
                    src={`${project.image}.jpg`}
                    alt={`${project.name} signage project by Adworks by Maheer`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>

                {/* Power off - the board sits dark until it strikes. */}
                <span className="sign-dim pointer-events-none absolute inset-0" aria-hidden="true" />

                {/* The light inside the box once it is running. */}
                <span className="sign-glow pointer-events-none absolute inset-0" aria-hidden="true" />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="sign-tag flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Lightbulb className="w-3 h-3" />
                    <span>{project.tag}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
