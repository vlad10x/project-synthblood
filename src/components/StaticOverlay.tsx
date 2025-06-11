import React from 'react';

const StaticOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Subtle static noise */}
      <div className="absolute inset-0 opacity-5 bg-static-noise animate-static"></div>
      
      {/* CRT scan lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="crt-lines"></div>
      </div>
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent"></div>
    </div>
  );
};

export default StaticOverlay;