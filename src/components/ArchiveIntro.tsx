import React from 'react';

const ArchiveIntro: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Confidential Text */}
          <div className="space-y-6">
            <div className="inline-block bg-black border border-cream px-3 py-1 text-xs font-mono tracking-wider">
              CONFIDENTIAL
            </div>
            <blockquote className="text-xl md:text-2xl leading-relaxed italic border-l-4 border-muted-red pl-6">
              "Subject 6 never made it out of the basement.<br/>
              But the tissue kept growing."
            </blockquote>
            <div className="text-sm font-mono opacity-60">
              — Dr. Helena Morrison, Site 9 Director<br/>
              PROJECT: SYNTHBLOOD, Final Report
            </div>
          </div>

          {/* Center Column - Log Block */}
          <div className="bg-black border border-neon-green/30 p-6 font-mono text-sm">
            <div className="text-neon-green mb-4 font-bold tracking-wider">
              &gt; ACCESSING ARCHIVE...
            </div>
            <div className="space-y-2 leading-relaxed">
              <div className="text-neon-green/80">
                Scrubbed entries from PROJECT: SYNTHBLOOD logs, 1981–84.
              </div>
              <div className="text-muted-red/80">
                Unauthorized genome amplification observed at Sites 4, 7, and 9.
              </div>
              <div className="text-cream/80">
                Subject memory loops detected.
              </div>
              <div className="mt-4 pt-4 border-t border-neon-green/20">
                <span className="text-neon-green animate-pulse">█</span>
                <span className="opacity-60"> PROCESSING...</span>
              </div>
            </div>
          </div>

          {/* Right Column - ID Badge */}
          <div className="flex justify-center">
            <div className="relative cursor-crosshair group">
              <div className="w-48 h-64 bg-gradient-to-b from-gray-700 to-gray-800 border border-cream/40 p-4 transform group-hover:scale-105 transition-transform duration-300">
                {/* Placeholder for idcard.png */}
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex flex-col items-center justify-center">
                  <div className="text-4xl mb-4">🆔</div>
                  <div className="font-mono text-xs text-center opacity-60">
                    idcard.png<br/>
                    ID: 6A92-THX
                  </div>
                </div>
                
                {/* Glitch Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-static-noise transition-opacity duration-300"></div>
              </div>
              
              {/* Security Stamp */}
              <div className="absolute -top-2 -right-2 bg-muted-red text-white px-2 py-1 text-xs font-mono transform rotate-12">
                VOID
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveIntro;