import React from 'react';
import { motion } from 'motion/react';
import { Award, Layers, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { VisualConfig } from '../types';

interface TrustAuthorityProps {
  visual: VisualConfig;
}

export default function TrustAuthority({ visual }: TrustAuthorityProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Real, beautiful industries served list
  const industries = [
    'Hospitality & Lounges',
    'Churches & Assemblies',
    'Schools & Colleges',
    'Corporate Headquarters',
    'Startups & Innovators',
    'Premium Service Brands'
  ];

  // Simulated premium client logos or names in horizontal list
  const brandPlaceholders = [
    { name: 'NEW MODEL AUTOCARE', sub: 'Automotive Luxe' },
    { name: 'INDEEGO DINE & LOUNGE', sub: 'Culinary Club' },
  ];

  return (
    <section className="bg-[#111111] py-16 px-4 sm:px-8 border-y border-white/5 relative overflow-hidden" id="trust">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Upper horizontal: Authoritative stats & attributes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/5">
          
          <div className="flex gap-4 items-start text-left">
            <div className="p-3 bg-black border border-[#D4AF37]/30 rounded-sm text-[#D4AF37]">
              <Award size={20} />
            </div>
            <div className="flex flex-col">
              <h4 className="text-white text-base font-semibold tracking-wide font-sans">Strategic Quality</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                We design with real-world production constraints in mind, producing pristine digital systems and error-free printing collateral.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start text-left">
            <div className="p-3 bg-black border border-[#D4AF37]/30 rounded-sm text-[#D4AF37]">
              <Layers size={20} />
            </div>
            <div className="flex flex-col">
              <h4 className="text-white text-base font-semibold tracking-wide font-sans">Full phygital Continuity</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Synchronizing your digital flagship website seamlessly with customized polo embroidery, custom jotters, and contour stickers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start text-left">
            <div className="p-3 bg-black border border-[#D4AF37]/30 rounded-sm text-[#D4AF37]">
              <CheckCircle2 size={20} />
            </div>
            <div className="flex flex-col">
              <h4 className="text-white text-base font-semibold tracking-wide font-sans">Uncompromising Fidelity</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Strict adherence to executive layouts, typography grids, rich pigment counts, and flawless user-journey optimization.
              </p>
            </div>
          </div>

        </div>

        {/* Middle part: Industries we support */}
        <div className="flex flex-col gap-6 text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">Premium Industries & Audiences Served</span>
          <div className="flex flex-wrap gap-3">
            {industries.map((ind, i) => (
              <span 
                key={i}
                className="px-4 py-2 border border-white/5 hover:border-[#D4AF37]/30 rounded bg-black/60 text-xs text-gray-300 font-sans tracking-wide hover:text-white transition-all duration-300 pointer-events-none"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
