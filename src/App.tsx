import React from 'react';
import HeroSection from './components/HeroSection';
import ArchiveIntro from './components/ArchiveIntro';
import CaseSection from './components/CaseSection';
import WhyThisMatters from './components/WhyThisMatters';
import Footer from './components/Footer';
import StaticOverlay from './components/StaticOverlay';

function App() {
  return (
    <div className="min-h-screen bg-black text-cream font-serif relative overflow-x-hidden">
      <StaticOverlay />
      <HeroSection />
      <ArchiveIntro />
      <CaseSection />
      <WhyThisMatters />
      <Footer />
    </div>
  );
}

export default App;