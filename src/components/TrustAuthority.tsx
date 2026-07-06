import React from 'react';
import { motion } from 'motion/react';
import { Award, Layers, CheckCircle2, Compass, Sparkles } from 'lucide-react';
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

  const trustCards = [
    {
      num: 'I',
      title: 'Strategic Quality',
      icon: Award,
      desc: 'We design with real-world production constraints in mind, producing pristine digital systems and error-free printing collateral that commands absolute authority.'
    },
    {
      num: 'II',
      title: 'Full Phygital Continuity',
      icon: Layers,
      desc: 'Synchronizing your digital flagship website seamlessly with customized polo embroidery, custom executive notebooks, and heavy pigment large-format layouts.'
    },
    {
      num: 'III',
      title: 'Uncompromising Fidelity',
      icon: CheckCircle2,
      desc: 'Strict adherence to mathematical layout grids, premium typography proportions, rich ink density targets, and complete user-journey conversion optimization.'
    }
  ];

  return (
    <section className="bg-black py-24 px-4 sm:px-8 border-y border-white/10 relative overflow-hidden" id="trust">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D4AF37]/2 blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Upper Grid: Luxury packaging trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-[#0b0b0b] border border-white/5 hover:border-[#D4AF37]/30 rounded-sm p-8 flex flex-col justify-between text-left transition-all duration-500 relative group overflow-hidden shadow-xl"
              >
                {/* Thin gold ribbon at top hover effect */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Soft packaging texture glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
                
                <div className="flex flex-col gap-6 relative z-10">
                  {/* Card Header: Monogram-style Badge and Numbering */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-500">
                      SYS // {card.num}
                    </span>
                    
                    {/* Bespoke Monogram Icon */}
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/5 group-hover:scale-105 duration-500 shadow-[0_0_12px_rgba(212,175,55,0.02)] group-hover:shadow-[#D4AF37]/10 transition-all">
                      <Icon size={16} className="text-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col gap-2">
                    <h4 className={`${fontClass} text-lg font-bold text-white tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300`}>
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Aesthetic corner bracket */}
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-r border-b border-white/5 group-hover:border-[#D4AF37]/20 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Lower row: Industries served */}
        <div className="flex flex-col gap-8 text-left border-t border-white/5 pt-12">
          <div className="flex items-center gap-3">
            <Sparkles size={12} className="text-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              PREMIUM INDUSTRIES & AUDIENCES SERVED
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {industries.map((ind, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.02, borderColor: 'rgba(212,175,55,0.3)' }}
                className="px-5 py-3 border border-white/5 rounded bg-[#070707]/60 text-xs text-gray-300 font-sans tracking-wide hover:text-white transition-all duration-300 pointer-events-none cursor-default shadow-sm"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
