import React from 'react';
import { Briefcase, Lightbulb } from 'lucide-react';

const projects = [
  {
    name: 'NEXZE',
    image: '/project-images/nexze-signage.jpg',
    tag: 'Illuminated 3D Signage',
  },
  {
    name: 'MJ Mobile Communication',
    image: '/project-images/mj-mobile-signage.jpg',
    tag: 'Retail Storefront Branding',
  },
  {
    name: 'Kamal Mobile',
    image: '/project-images/kamal-mobile-signage.jpg',
    tag: 'Bilingual LED Signboard',
  },
  {
    name: 'Bester / Yosonda',
    image: '/project-images/bester-yosonda-signage.jpg',
    tag: 'Multi-Brand Directional Signage',
  },
  {
    name: "Hi Link's",
    image: '/project-images/hilinks-signage.jpg',
    tag: 'Custom-Shape Lightbox',
  },
  {
    name: 'G.Golden',
    image: '/project-images/ggolden-signage.jpg',
    tag: 'Backlit Emblem Signage',
  },
];

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#09080A] border-b border-white/5">
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
          {projects.map((project) => (
            <div key={project.name} className="card-base overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} signage project by Adworks by Maheer`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1">
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
