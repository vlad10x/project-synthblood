import React, { useState, useRef } from 'react';

const WhyThisMatters: React.FC = () => {
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
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-glow">
            WHY THIS MATTERS
          </h2>
          <div className="w-24 h-1 bg-muted-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div
              ref={imageRef}
              className="relative w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cream/30 overflow-hidden cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
            >
              {/* Placeholder for biohazard-vial.png */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-center opacity-50">
                  <div className="text-6xl mb-4">☢️</div>
                  <div className="font-mono text-sm">biohazard-vial.png</div>
                </div>
              </div>

              {/* Magnifier */}
              {showMagnifier && (
                <div
                  className="absolute w-24 h-24 border-3 border-neon-green rounded-full pointer-events-none z-10"
                  style={{
                    left: magnifierPos.x - 48,
                    top: magnifierPos.y - 48,
                    background: `radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, transparent 70%)`,
                    boxShadow: '0 0 15px rgba(57, 255, 20, 0.6)'
                  }}
                >
                  <div className="w-full h-full rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-neon-green font-mono text-xs">SCAN</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group cursor-crosshair">
                <div className="w-2 h-2 bg-muted-red rounded-full animate-pulse"></div>
                <span className="text-lg group-hover:text-neon-green transition-colors duration-300">
                  Human DNA stitched with viral backbones
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-crosshair">
                <div className="w-2 h-2 bg-muted-red rounded-full animate-pulse"></div>
                <span className="text-lg group-hover:text-neon-green transition-colors duration-300">
                  Failed sterilization protocols
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-crosshair">
                <div className="w-2 h-2 bg-muted-red rounded-full animate-pulse"></div>
                <span className="text-lg group-hover:text-neon-green transition-colors duration-300">
                  Recovered memory anomalies
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-crosshair">
                <div className="w-2 h-2 bg-muted-red rounded-full animate-pulse"></div>
                <span className="text-lg group-hover:text-neon-green transition-colors duration-300">
                  Cross-contamination with known military blood banks
                </span>
              </div>
            </div>

            {/* Flickering Quote */}
            <div className="mt-12 p-6 border-l-4 border-muted-red bg-gray-900/50">
              <blockquote className="text-2xl italic font-light leading-relaxed flickering-text">
                "Not all samples stayed buried."
              </blockquote>
              <cite className="text-sm font-mono opacity-60 mt-4 block">
                — Recovered transmission, Site 9, 1984
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;