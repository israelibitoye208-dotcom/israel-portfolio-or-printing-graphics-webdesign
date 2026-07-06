import React from 'react';
import { motion } from 'motion/react';
import { Compass, Cpu, Printer, ShieldCheck, Zap, Server, Settings, CheckCircle2 } from 'lucide-react';
import { VisualConfig } from '../types';

interface ProcessProps {
  visual: VisualConfig;
}

export default function Process({ visual }: ProcessProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // The 4 exquisite strategic process phases
  const phases = [
    {
      num: '01',
      title: 'Deep Assessment & Blueprinting',
      icon: Compass,
      status: 'VERIFIED',
      metric: 'PREPRESS SWATCHES: OK',
      desc: 'We map raw brand coordinates, document sitemaps, analyze substrate thickness, and establish exact physical color swatches before writing any code.',
      details: ['Sitemap Mapping', 'Substrate Weight Choice', 'Color Swatch Check', 'Form Objective Outline']
    },
    {
      num: '02',
      title: 'Screen-Fidelity Engineering',
      icon: Cpu,
      status: 'COMPILED',
      metric: 'REACT CORE INTEGRITY: 100%',
      desc: 'Coding bespoke, speed-optimized React environments, styling pixel-perfect custom typography configurations, and wire-up secure Formspree API layers.',
      details: ['React & Tailwind Code', 'Formspree Secure setup', 'SEO Metadata Blueprint', 'Speed Performance Checks']
    },
    {
      num: '03',
      title: 'Physical Substrate Fabrication',
      icon: Printer,
      status: 'RICH_DENSITY',
      metric: 'STITCH MATRIX: PASS',
      desc: 'Powering high-density computerized embroidery swatches, plotting weather-proof contour stickers, and running offset presses for custom books.',
      details: ['Computerized Monogram Run', 'Contour Sticker Plotting', 'Book Offset Binding', 'High-Density Ink Setting']
    },
    {
      num: '04',
      title: 'Elite Client Handover',
      icon: ShieldCheck,
      status: 'DISPATCHED',
      metric: 'SHIPPING CONTAINER: READY',
      desc: 'Deploying the digital flagship to production servers and securely crating tactile custom notebooks, apparel, and framing displays for direct VIP courier shipping.',
      details: ['Flagship Site Launch', 'Crated Courier Packaging', 'Enterprise Cargo Dispatch', 'Sovereign Right Transfer']
    }
  ];

  return (
    <section className="bg-[#0b0b0b] py-28 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden" id="process">
      {/* Subtle tech background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#D4AF37]/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] flex items-center gap-1.5">
              <Zap size={10} className="animate-pulse" />
              <span>Sovereign Quality Protocol</span>
            </span>
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
              Our Horizontal <span style={{ color: goldColor }}>Workflow</span> Timeline
            </h3>
          </div>
          <p className="text-gray-400 font-sans text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Every step we execute undergoes strict administrative prepress controls to ensure complete, uncompromised continuity between screen and solid substrate.
          </p>
        </div>

        {/* Linear Workflow Cards Grid */}
        <div className="relative">
          
          {/* Continuous connecting horizontal track line on desktop */}
          <div className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent top-[165px] left-0 right-0 z-0 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="bg-black/90 border border-white/10 hover:border-[#D4AF37]/45 rounded-sm p-6 sm:p-7 flex flex-col justify-between text-left transition-all duration-500 group relative overflow-hidden shadow-2xl hover:-translate-y-1.5"
                >
                  {/* Subtle packaging top wire */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Upper machine-like coordinate details */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                    <span className="text-2xl font-mono font-black text-[#D4AF37]/40 group-hover:text-[#D4AF37] duration-500 tracking-wider">
                      {phase.num}
                    </span>
                    
                    {/* Status Badge styled like technical readout */}
                    <div className="flex flex-col items-end text-right">
                      <span className="text-[7.5px] font-mono text-gray-500 uppercase tracking-widest leading-none">PREPRESS CHECK:</span>
                      <span className="text-[9px] font-mono text-green-500 font-bold uppercase tracking-widest mt-1.5 bg-green-500/5 px-2 py-0.5 rounded-sm border border-green-500/10">
                        ● {phase.status}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Icon Box */}
                  <div className="w-12 h-12 rounded border border-white/10 flex items-center justify-center bg-[#070707] text-[#D4AF37] group-hover:border-[#D4AF37]/35 group-hover:bg-[#D4AF37]/5 transition-all duration-500 shadow-md mb-5">
                    <Icon size={18} className="text-[#D4AF37]" />
                  </div>

                  {/* Core copy */}
                  <div className="flex flex-col gap-3 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-white text-base font-bold font-sans tracking-wide leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {phase.title}
                      </h4>
                      <p className="text-[11.5px] text-gray-400 font-sans leading-relaxed font-light">
                        {phase.desc}
                      </p>
                    </div>

                    {/* Prepress Checklist list tags */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-2">
                      <span className="text-[7.5px] font-mono text-gray-500 uppercase tracking-wider block">
                        {phase.metric}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {phase.details.map((det, dIdx) => (
                          <div key={dIdx} className="flex gap-2 items-center">
                            <span className="w-1 h-1 rounded-full bg-green-500" />
                            <span className="text-[10px] text-gray-400 font-mono tracking-wide truncate">{det}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic corner brackets representing technical layout controls */}
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-white/5 group-hover:border-[#D4AF37]/30 transition-colors" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
