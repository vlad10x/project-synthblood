import React, { useState, useRef } from 'react';

const HeroSection: React.FC = () => {
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMagnifierPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      {/* CRT Flicker Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="crt-lines"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider text-shadow-glow">
          PROJECT: SYNTHBLOOD
        </h1>
        
        {/* Navigation */}
        <nav className="text-lg md:text-xl font-mono tracking-widest opacity-80">
          <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">PROJECT FILES</span>
          <span className="mx-4">•</span>
          <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">DNA INDEX</span>
          <span className="mx-4">•</span>
          <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">REDLIGHT TIES</span>
          <span className="mx-4">•</span>
          <span className="text-muted-red hover:text-red-400 cursor-crosshair transition-colors duration-300">[ X ]</span>
        </nav>
      </div>

      {/* Main Image with Magnifier */}
      <div className="relative mb-8 max-w-4xl w-full">
        <div
          ref={imageRef}
          className="relative w-full h-96 md:h-[500px] border-2 border-cream/30 overflow-hidden cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
        >
          {/* Actual hazmat-lab.png image */}
          <div className="w-full h-full">
            <img 
              src="/assets/image.png" 
              alt="Laboratory with hazmat suits" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center';
                placeholder.innerHTML = `
                  <div class="text-center opacity-50">
                    <div class="text-4xl mb-2">🧪</div>
                    <div class="font-mono text-sm">hazmat-lab.png</div>
                  </div>
                `;
                target.parentElement!.appendChild(placeholder);
              }}
            />
          </div>

          {/* Forensic Analysis Overlays */}
          <div className="absolute top-20 left-16 w-16 h-16 border-2 border-muted-red rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-24 w-20 h-12 border-2 border-neon-green animate-pulse"></div>
          <div className="absolute bottom-24 left-32 w-12 h-12 border-2 border-muted-red rounded-full animate-pulse"></div>

          {/* Magnifier */}
          {showMagnifier && (
            <div
              className="absolute w-32 h-32 border-4 border-neon-green rounded-full pointer-events-none z-10 magnifier-lens"
              style={{
                left: magnifierPos.x - 64,
                top: magnifierPos.y - 64,
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
        <div className="mt-4 text-center">
          <p className="font-mono text-sm opacity-80 tracking-wide">
            Recovered Photo, Site 9 – Montana, 1983
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs font-mono opacity-60">
            <span>CLASSIFIED</span>
            <span>•</span>
            <span>EYES ONLY</span>
            <span>•</span>
            <span>PROJECT: SYNTHBLOOD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;