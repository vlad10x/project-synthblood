import React, { useState } from 'react';

interface CaseFile {
  id: string;
  title: string;
  location: string;
  date: string;
  source: string;
  summary: string;
  keyDetails: string[];
  imagePlaceholder: string;
  quote?: string;
}

const caseFiles: CaseFile[] = [
  {
    id: '013',
    title: 'Patient 6 Reversal',
    location: 'Helena, Montana',
    date: 'March 12, 1983',
    source: 'Declassified DARPA Memorandum, PROJECT: SYNTHBLOOD',
    summary: 'Patient 6, originally selected for CRISPR-adjacent genome threading, began retro-mutating at a cellular level, exhibiting biological memory reversal — recalling memories they had not lived. Tissue samples regenerated after incineration. Containment failed on Day 4.',
    keyDetails: [
      'Subject ID: 6A92-THX',
      'Symptom: Accelerated neuro-tissue regeneration',
      'Field Note: "Claims to remember death that hasn\'t occurred."',
      'Official Explanation: Psychogenic fugue, denied link to test protocol'
    ],
    imagePlaceholder: 'patient6.png'
  },
  {
    id: '404',
    title: 'K-Sequence Spill',
    location: 'Wright-Patterson Research Annex, Ohio',
    date: 'June 3, 1982',
    source: 'Project Memo Intercept, PROJECT: SYNTHBLOOD',
    summary: 'Sequence K overflowed into secondary samples after a refrigeration malfunction. Lab personnel reported rapid-onset migraines, bleeding gums, and "audio shadows." DNA threading logs show recursive strand duplication with no source file. 3 researchers hospitalized.',
    keyDetails: [
      'Anomaly: K-Sequence viral structure self-replicated',
      'Phenomenon: Digital DNA logs duplicated despite being offline',
      'Quote: "Code growing code."',
      'Response: Site 3 locked down, blamed on refrigerant leak'
    ],
    imagePlaceholder: 'kspill.png'
  },
  {
    id: '077',
    title: 'Montana Growth Anomaly',
    location: 'Missoula Forest Outpost, Montana',
    date: 'July 19, 1984',
    source: 'Synthblood Internal Recon, REDACTED FILE 077',
    summary: 'After Subject 77 escaped quarantine, satellite imagery showed unexplained biomass growth spreading radially 1.2km overnight. Field team recovered a camera with 38 blank photos — only the final image displayed a blurry silhouette.',
    keyDetails: [
      'Subject 77 Status: Unknown',
      'Anomaly: Fungal-collagen hybrid root system found in nearby stream',
      'Civilian Explanation: Lightning strike ignited forest mold bloom',
      'Case never closed, REDACTED from 1985 congressional inquiry'
    ],
    imagePlaceholder: 'growth-anomaly.png'
  }
];

const CaseCard: React.FC<{ caseFile: CaseFile }> = ({ caseFile }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="bg-gray-900 border border-cream/20 p-6 relative overflow-hidden group cursor-crosshair">
      {/* Case Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-red font-mono text-sm tracking-wider">
            CASE #{caseFile.id}
          </span>
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-green transition-colors duration-300">
          {caseFile.title}
        </h3>
        <div className="space-y-1 font-mono text-sm opacity-80">
          <div><span className="text-neon-green">Location:</span> {caseFile.location}</div>
          <div><span className="text-neon-green">Date:</span> {caseFile.date}</div>
          <div><span className="text-neon-green">Source:</span> {caseFile.source}</div>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 border border-cream/20 mb-6 flex items-center justify-center group-hover:border-neon-green/40 transition-colors duration-300">
        <div className="text-center opacity-50">
          <div className="text-3xl mb-2">📸</div>
          <div className="font-mono text-xs">{caseFile.imagePlaceholder}</div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h4 className="text-neon-green font-mono text-sm mb-2 tracking-wider">SUMMARY:</h4>
        <p className="text-sm leading-relaxed opacity-90">{caseFile.summary}</p>
      </div>

      {/* Reveal Button */}
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className="w-full bg-black border border-neon-green text-neon-green font-mono py-3 px-6 hover:bg-neon-green hover:text-black transition-all duration-300 relative overflow-hidden group/btn"
      >
        <span className="relative z-10">
          {isRevealed ? 'CONCEAL' : 'REVEAL'}
        </span>
        <div className="absolute inset-0 bg-neon-green transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
      </button>

      {/* Hidden Content */}
      <div className={`mt-6 transition-all duration-500 overflow-hidden ${isRevealed ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-muted-red/30 pt-6">
          <h4 className="text-muted-red font-mono text-sm mb-4 tracking-wider">KEY DETAILS:</h4>
          <ul className="space-y-2">
            {caseFile.keyDetails.map((detail, index) => (
              <li key={index} className="text-sm opacity-90 hover:text-neon-green hover:opacity-100 transition-all duration-300 cursor-crosshair">
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Static Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-static-noise pointer-events-none transition-opacity duration-300"></div>
    </div>
  );
};

const CaseSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-glow">
            CLASSIFIED FILES
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-8"></div>
          <p className="font-mono text-sm opacity-60 tracking-wider">
            DECLASSIFIED UNDER EXECUTIVE ORDER 12958
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseFiles.map((caseFile) => (
            <CaseCard key={caseFile.id} caseFile={caseFile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseSection;