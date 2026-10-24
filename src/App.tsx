import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDirector } from './components/AboutDirector';
import { ServiceEcosystem } from './components/ServiceEcosystem';
import { HoardingsShowcase } from './components/HoardingsShowcase';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { WhatWeDoProcess } from './components/WhatWeDoProcess';
import { OneStopModel } from './components/OneStopModel';
import { IndustriesServed } from './components/IndustriesServed';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SiteBackground } from './components/SiteBackground';

export function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-red-600 selection:text-white">
      {/* Sticky full-site brand backdrop */}
      <SiteBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Director & Agency */}
        <AboutDirector />

        {/* Service Ecosystem (4 Divisions) */}
        <ServiceEcosystem />

        {/* 250+ Outdoor Hoardings Asset Feature */}
        <HoardingsShowcase />

        {/* Featured Signage & Branding Projects */}
        <ProjectsShowcase />

        {/* 6-Step Growth Work Process */}
        <WhatWeDoProcess />

        {/* One-Stop Client Model */}
        <OneStopModel />

        {/* Industries Served */}
        <IndustriesServed />

        {/* Dedicated Contact Us Section */}
        <ContactSection />
      </main>

      {/* Agency Footer */}
      <Footer />
    </div>
  );
}

export default App;
