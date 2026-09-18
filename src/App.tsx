import React, { Suspense, lazy, useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDirector } from './components/AboutDirector';
import { ServiceEcosystem } from './components/ServiceEcosystem';
import { HoardingsShowcase } from './components/HoardingsShowcase';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { WhatWeDoProcess } from './components/WhatWeDoProcess';
import { OneStopModel } from './components/OneStopModel';
import { IndustriesServed } from './components/IndustriesServed';
import { GrowthRoadmap } from './components/GrowthRoadmap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SiteBackground } from './components/SiteBackground';

// The lead-capture dialog is a few kB of form state nobody needs until they
// actually ask for it, so it is split into its own chunk fetched on first open.
const StrategyCalculatorModal = lazy(() =>
  import('./components/StrategyCalculatorModal').then(m => ({ default: m.StrategyCalculatorModal }))
);

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Stable identities so toggling the modal doesn't hand every section a
  // brand-new prop, keeping the door open for React.memo on any of them.
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <div className="relative min-h-screen text-white selection:bg-red-600 selection:text-white">
      {/* Sticky full-site brand backdrop */}
      <SiteBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenModal={openModal} />

        {/* About Director & Agency */}
        <AboutDirector />

        {/* Service Ecosystem (4 Divisions) */}
        <ServiceEcosystem />

        {/* 150+ Outdoor Hoardings Asset Feature */}
        <HoardingsShowcase onOpenModal={openModal} />

        {/* Featured Signage & Branding Projects */}
        <ProjectsShowcase />

        {/* 6-Step Growth Work Process */}
        <WhatWeDoProcess />

        {/* One-Stop Client Model */}
        <OneStopModel />

        {/* Industries Served */}
        <IndustriesServed />

        {/* Growth Roadmap */}
        <GrowthRoadmap />

        {/* Dedicated Contact Us Section */}
        <ContactSection onOpenModal={openModal} />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Strategy Calculator Lead Modal - mounted only once requested */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <StrategyCalculatorModal isOpen onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
