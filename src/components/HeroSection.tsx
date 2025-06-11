import React, { useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      setMagnifierPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 relative">
      {/* CRT Flicker Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="crt-lines"></div>
      </div>

      {/* Title - Mobile Optimized */}
      <div className="text-center mb-6 md:mb-8 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-4 tracking-wider text-shadow-glow leading-tight">
          PROJECT: SYNTHBLOOD
        </h1>
        
        {/* X Account Link */}
        <div className="mb-4 md:mb-6">
          <a 
            href="https://x.com/synthbloodfiles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-neon-green hover:text-cream transition-colors duration-300 font-mono text-sm md:text-base"
          >
            <span>@synthbloodfiles</span>
            <ExternalLink size={16} />
          </a>
        </div>
        
        {/* Navigation - Mobile Optimized */}
        <nav className="text-sm sm:text-base md:text-lg lg:text-xl font-mono tracking-widest opacity-80">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">PROJECT FILES</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">DNA INDEX</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">REDLIGHT TIES</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-muted-red hover:text-red-400 cursor-crosshair transition-colors duration-300">[ X ]</span>
          </div>
        </nav>
      </div>

      {/* Video Embed with Magnifier */}
      <div className="relative mb-6 md:mb-8 max-w-4xl w-full">
        <div
          ref={videoRef}
          className="relative w-full border-2 border-cream/30 overflow-hidden cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
        >
          {/* Video Embed */}
          <div style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}>
            <figure style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%', marginBlockEnd: 0, marginBlockStart: 0, marginInlineStart: 0, marginInlineEnd: 0 }}>
              <iframe 
                src="https://api.vadoo.tv/iframe_test?id=7Qc59Zuk4pC9wTtMXWpyaPAhTgDYbc0x" 
                scrolling="no" 
                style={{ border: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', overflow: 'hidden', borderRadius: '5px' }} 
                allowFullScreen={true}
                allow="autoplay"
              />
            </figure>
          </div>

          {/* Forensic Analysis Overlays */}
          <div className="absolute top-4 md:top-20 left-4 md:left-16 w-8 h-8 md:w-16 md:h-16 border-2 border-muted-red rounded-full animate-pulse"></div>
          <div className="absolute top-8 md:top-32 right-6 md:right-24 w-10 h-6 md:w-20 md:h-12 border-2 border-neon-green animate-pulse"></div>
          <div className="absolute bottom-6 md:bottom-24 left-8 md:left-32 w-6 h-6 md:w-12 md:h-12 border-2 border-muted-red rounded-full animate-pulse"></div>

          {/* Magnifier */}
          {showMagnifier && (
            <div
              className="absolute w-16 h-16 md:w-32 md:h-32 border-4 border-neon-green rounded-full pointer-events-none z-10 magnifier-lens"
              style={{
                left: magnifierPos.x - (window.innerWidth < 768 ? 32 : 64),
                top: magnifierPos.y - (window.innerWidth < 768 ? 32 : 64),
                background: `radial-gradient(circle, rgba(57, 255, 20, 0.1) 0%, transparent 70%)`,
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.5), inset 0 0 20px rgba(57, 255, 20, 0.2)'
              }}
            >
              <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-neon-green font-mono text-xs">SCAN</div>
              </div>
            </div>
          )}

          {/* Hover Glitch Effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 bg-static-noise pointer-events-none"></div>
        </div>

        {/* Caption */}
        <div className="mt-3 md:mt-4 text-center">
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