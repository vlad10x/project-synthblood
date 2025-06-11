import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const filmstripImages = [
    '1111.jpg',
    '2222.jpg', 
    '33333.jpg',
    '44444.jpg'
  ];

  return (
    <footer className="bg-black border-t border-cream/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow-glow">
            PROJECT: SYNTHBLOOD
          </h2>
          
          {/* Archive Identifiers */}
          <div className="flex justify-center space-x-8 mb-8 font-mono text-sm opacity-60">
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">
              ID: 77339-A
            </span>
            <span>•</span>
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">
              ID: 88914-K
            </span>
            <span>•</span>
            <span className="hover:text-neon-green cursor-crosshair transition-colors duration-300">
              ID: 92847-X
            </span>
          </div>

          {/* Recovered Footage Section */}
          <div className="mb-8">
            <h3 className="text-sm font-mono text-neon-green mb-4 tracking-wider">
              RECOVERED FOOTAGE
            </h3>
            <div className="relative overflow-hidden h-32 bg-black border border-cream/20">
              {/* Scanner Light Animation */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-32 h-full bg-gradient-to-r from-transparent via-neon-green/10 to-transparent animate-scanner-sweep"></div>
              </div>
              
              {/* Film Strip Container */}
              <div className="flex space-x-4 h-full animate-film-scroll">
                {/* First set of images */}
                {filmstripImages.map((image, index) => (
                  <div
                    key={`set1-${index}`}
                    className="flex-shrink-0 w-24 h-full bg-black border border-cream/10 overflow-hidden cursor-crosshair group animate-film-flicker"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <img 
                      src={`/assets/${image}`} 
                      alt={`Recovered footage ${index + 1}`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full flex items-center justify-center text-center opacity-60';
                        placeholder.innerHTML = `
                          <div>
                            <div class="text-2xl mb-1">📽️</div>
                            <div class="font-mono text-xs">${image}</div>
                          </div>
                        `;
                        target.parentElement!.appendChild(placeholder);
                      }}
                    />
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {filmstripImages.map((image, index) => (
                  <div
                    key={`set2-${index}`}
                    className="flex-shrink-0 w-24 h-full bg-black border border-cream/10 overflow-hidden cursor-crosshair group animate-film-flicker"
                    style={{ animationDelay: `${(index + 4) * 0.5}s` }}
                  >
                    <img 
                      src={`/assets/${image}`} 
                      alt={`Recovered footage ${index + 1}`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full flex items-center justify-center text-center opacity-60';
                        placeholder.innerHTML = `
                          <div>
                            <div class="text-2xl mb-1">📽️</div>
                            <div class="font-mono text-xs">${image}</div>
                          </div>
                        `;
                        target.parentElement!.appendChild(placeholder);
                      }}
                    />
                  </div>
                ))}
                
                {/* Third set for continuous loop */}
                {filmstripImages.map((image, index) => (
                  <div
                    key={`set3-${index}`}
                    className="flex-shrink-0 w-24 h-full bg-black border border-cream/10 overflow-hidden cursor-crosshair group animate-film-flicker"
                    style={{ animationDelay: `${(index + 8) * 0.5}s` }}
                  >
                    <img 
                      src={`/assets/${image}`} 
                      alt={`Recovered footage ${index + 1}`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full flex items-center justify-center text-center opacity-60';
                        placeholder.innerHTML = `
                          <div>
                            <div class="text-2xl mb-1">📽️</div>
                            <div class="font-mono text-xs">${image}</div>
                          </div>
                        `;
                        target.parentElement!.appendChild(placeholder);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden bg-muted-red/20 border border-muted-red/40 h-12">
          <div className="absolute whitespace-nowrap animate-marquee font-mono text-sm flex items-center h-full">
            <span className="inline-block px-8">Data Leak Recovered</span>
            <span className="inline-block px-8">//</span>
            <span className="inline-block px-8">External Transmission Active</span>
            <span className="inline-block px-8">//</span>
            <span className="inline-block px-8">Subject Loop Detected</span>
            <span className="inline-block px-8">//</span>
            <span className="inline-block px-8">Data Leak Recovered</span>
            <span className="inline-block px-8">//</span>
            <span className="inline-block px-8">External Transmission Active</span>
            <span className="inline-block px-8">//</span>
            <span className="inline-block px-8">Subject Loop Detected</span>
            <span className="inline-block px-8">//</span>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 text-center">
          <div className="text-xs font-mono opacity-40 space-y-2">
            <div>DECLASSIFIED UNDER EXECUTIVE ORDER 12958</div>
            <div>NATIONAL SECURITY ARCHIVE • DEPARTMENT OF DEFENSE</div>
            <div className="flex justify-center space-x-4">
              <span>EST. 1981</span>
              <span>•</span>
              <span>TERMINATED 1984</span>
              <span>•</span>
              <span>ARCHIVED 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;