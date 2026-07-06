import React from 'react';
import { Check, Sparkles, Printer, Mail, Award } from 'lucide-react';
import { VisualConfig } from '../types';

interface AboutProps {
  visual: VisualConfig;
}

export default function About({ visual }: AboutProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Exact real production capabilities listed in user request
  const printCapabilities = [
    'Banner & Backdrop Printing',
    'Large Format Displays',
    'High-Resistance Contour Stickers',
    'Corporate ID Cards & Lanyards',
    'Bespoke Monogram Embroidery',
    'Book Publishing & Cover Finishes',
    'Customized Corporate Apparel',
    'Personalized Business Jotters & Notebooks',
    'Event Flyer & Program Layouts',
    'Executive Typography Layouts',
    'Branded Throw Pillows & Lounge Linens',
    'Custom Educational Exercise Books',
    'Bespoke Framing & Display Plates'
  ];

  return (
    <section className="bg-black py-24 px-4 sm:px-8 relative border-t border-white/5" id="about">
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[#D4AF37]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-[#D4AF37]/3 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Tier 1: Narrative & Founder Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Agency Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              The Visionary Leader
            </span>
            
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight`}>
              Bridging High-Concept <br />
              <span style={{ color: goldColor }}>Digital Craft With Real-World</span> <br />
              Production Mastery.
            </h3>
            
            <p className="text-gray-400 font-sans text-sm sm:text-base font-light leading-relaxed font-sans">
              Dominion Creative Studio is a premium digital and physical branding agency built and directed by <strong>Israel Ibitoye</strong>. We do not just lay out high-performance, responsive web portals; we mathematically orchestrate how designs translate to solid physical materials.
            </p>
            
            <p className="text-gray-400 font-sans text-sm sm:text-base font-light leading-relaxed font-sans">
              Every system we deliver—whether a luxurious booking engine or brand monogram system—comes under Israel’s personal pre-press expertise. This guarantees that your typography standards, color parameters, and layout ratios stay pristine across both digital screens and physical products.
            </p>

            {/* Quick core values badge row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
              <div className="p-4 border border-white/5 bg-[#111111]/40 rounded-sm text-left">
                <span className="text-[#D4AF37] font-mono text-xs font-bold block mb-1">01 / EXECUTIVE COMMAND</span>
                <span className="text-[11px] text-gray-400 font-sans leading-relaxed">
                  Personally led architecture ensuring pixel perfection and strategic conversion in every digital asset.
                </span>
              </div>
              <div className="p-4 border border-white/5 bg-[#111111]/40 rounded-sm text-left">
                <span className="text-[#D4AF37] font-mono text-xs font-bold block mb-1">02 / END-TO-END FIDELITY</span>
                <span className="text-[11px] text-gray-400 font-sans leading-relaxed">
                  Design layouts formatted to eliminate registration errors, blurriness, or low fidelity in physical outcomes.
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Founder Portrait Card (Describing Israel Ibitoye) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] border border-white/10 rounded-lg p-6 bg-gradient-to-br from-[#111111] to-[#0a0a0a] shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />
              
              {/* Core Director Status Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Lead Executive Status</span>
                <div className="px-2.5 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[8px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold animate-pulse">
                  Active Director
                </div>
              </div>

              {/* Bio & Details */}
              <div className="text-left flex flex-col gap-4">
                <div>
                  <h4 className={`${fontClass} text-2xl font-bold text-white tracking-tight`}>
                    Israel Ibitoye
                  </h4>
                  <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mt-0.5">
                    Founder, Lead Strategic Developer & Print Artisan
                  </p>
                </div>

                <p className="text-xs text-gray-400 font-sans leading-relaxed font-sans">
                  Israel oversees the holistic execution of the agency’s physical and digital creative pipelines. By combining senior software development with physical publishing standards, Israel ensures standard-defining executive authority is injected into every client asset.
                </p>

                <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Award size={13} className="text-[#D4AF37]" />
                    <span className="text-[10px] font-mono text-gray-300">Dominion Brand Curator & Software Architect</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={13} className="text-[#D4AF37]" />
                    <a href="mailto:israelibitoye208@gmail.com" className="text-[10px] font-mono text-gray-300 hover:text-[#D4AF37] transition-all">israelibitoye208@gmail.com</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Tier 2: Hands-on Print Capabilities Presentation (Premium Checklist Layout) */}
        <div className="border border-white/10 rounded-lg p-6 sm:p-10 bg-gradient-to-r from-[#111111] via-[#0d0d0d] to-[#070707] shadow-xl text-left">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5 mb-8">
            <Printer size={20} className="text-[#D4AF37]" />
            <div>
              <h4 className="text-white text-lg font-mono tracking-wider uppercase font-semibold">
                Hands-On Production Suite
              </h4>
              <p className="text-xs text-gray-400 font-sans mt-1">
                Unlike standard agencies that stop at visual files, we direct the physical production of enterprise merchandise and layout systems:
              </p>
            </div>
          </div>

          {/* Divided double grid of real items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {printCapabilities.map((cap, cId) => (
              <div key={cId} className="flex items-start gap-3 group">
                <div className="w-4 h-4 rounded bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/30 mt-0.5 shrink-0">
                  <Check size={10} className="text-[#D4AF37]" />
                </div>
                <span className="text-gray-300 font-sans text-xs sm:text-sm group-hover:text-white transition-colors">
                  {cap}
                </span>
              </div>
            ))}
          </div>

          {/* Quick CTA snippet or advice to potential clients */}
          <div className="mt-8 p-4 bg-black/60 border border-[#D4AF37]/20 rounded-md flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-[#D4AF37] shrink-0" />
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider leading-relaxed">
                Looking for corporate gifts, apparel, or customized event layouts? We handle direct shipping and delivery worldwide.
              </span>
            </div>
            <a href="#booking" className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest font-bold rounded-sm transition-all text-center shrink-0">
              Get Custom Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
