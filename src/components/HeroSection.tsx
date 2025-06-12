import React from 'react';
import { ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-0 md:py-20 relative">
      {/* CRT Flicker Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="crt-lines"></div>
      </div>

      {/* Title - Mobile Optimized with NO vertical spacing */}
      <div className="text-center mb-1 md:mb-8 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-1 md:mb-4 tracking-wider text-shadow-glow leading-tight">
          PROJECT: SYNTHBLOOD
        </h1>
        
        {/* Navigation with X Account Link - Mobile Optimized */}
        <nav className="text-sm sm:text-base md:text-lg lg:text-xl font-mono tracking-widest opacity-80">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">PROJECT FILES</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">DNA INDEX</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">REDLIGHT TIES</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="https://x.com/synthbloodfiles" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-muted-red hover:text-neon-green cursor-crosshair transition-colors duration-300"
              title="Follow @synthbloodfiles on X"
            >
              <span>[ X ]</span>
              <ExternalLink size={12} className="opacity-60" />
            </a>
          </div>
        </nav>
      </div>

      {/* Clean Video Embed - NO vertical margin on mobile */}
      <div className="relative mb-1 md:mb-8 max-w-4xl w-full">
        <div className="relative w-full border-2 border-cream/30 overflow-hidden">
          {/* Video Embed - Clean without effects */}
          <div style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}>
            <figure style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%', marginBlockEnd: 0, marginBlockStart: 0, marginInlineStart: 0, marginInlineEnd: 0 }}>
              <iframe 
                src="https://api.vadoo.tv/iframe_test?id=7Qc59Zuk4pC9wTtMXWpyaPAhTgDYbc0x" 
                scrolling="no" 
                style={{ border: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', overflow: 'hidden', borderRadius: '5px' }} 
                allowFullScreen={true}
                allow="autoplay"
                title="PROJECT: SYNTHBLOOD - Recovered Footage"
              />
            </figure>
          </div>
        </div>

        {/* Caption - NO vertical margin on mobile */}
        <div className="mt-1 md:mt-4 text-center">
          <p className="font-mono text-xs md:text-sm opacity-80 tracking-wide">
            Recovered Footage, Site 9 – Montana, 1983
          </p>
          <div className="mt-1 md:mt-2 flex flex-wrap justify-center gap-2 md:gap-4 text-xs font-mono opacity-60">
            <span>CLASSIFIED</span>
            <span className="hidden sm:inline">•</span>
            <span>EYES ONLY</span>
            <span className="hidden sm:inline">•</span>
            <span>PROJECT: SYNTHBLOOD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;