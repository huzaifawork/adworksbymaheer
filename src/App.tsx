import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDirector } from './components/AboutDirector';
import { ServiceEcosystem } from './components/ServiceEcosystem';
import { HoardingsShowcase } from './components/HoardingsShowcase';
import { WhatWeDoProcess } from './components/WhatWeDoProcess';
import { OneStopModel } from './components/OneStopModel';
import { IndustriesServed } from './components/IndustriesServed';
import { GrowthRoadmap } from './components/GrowthRoadmap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StrategyCalculatorModal } from './components/StrategyCalculatorModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080708] text-white selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenConsultationModal={() => setIsModalOpen(true)} />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenModal={() => setIsModalOpen(true)} />

        {/* About Director & Agency */}
        <AboutDirector />

        {/* Service Ecosystem (4 Divisions) */}
        <ServiceEcosystem />

        {/* 150+ Outdoor Hoardings Asset Feature */}
        <HoardingsShowcase onOpenModal={() => setIsModalOpen(true)} />

        {/* 6-Step Growth Work Process */}
        <WhatWeDoProcess />

        {/* One-Stop Client Model */}
        <OneStopModel />

        {/* Industries Served */}
        <IndustriesServed />

        {/* Growth Roadmap */}
        <GrowthRoadmap />

        {/* Dedicated Contact Us Section */}
        <ContactSection onOpenModal={() => setIsModalOpen(true)} />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Strategy Calculator Lead Modal */}
      <StrategyCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;
