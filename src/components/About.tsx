import React from 'react';
import { Check, Sparkles, Printer, Mail, Award, Compass } from 'lucide-react';
import { VisualConfig } from '../types';

interface AboutProps {
  visual: VisualConfig;
}

export default function About({ visual }: AboutProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Real production capabilities
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
    <section className="bg-black py-28 px-4 sm:px-8 relative border-t border-white/10 overflow-hidden" id="about">
      {/* Editorial background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/2 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Split-Screen Editorial Magazine Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Israel Ibitoye Professional Narrative & Signature */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37]">
                FOUNDER & LEAD EXECUTIVE
              </span>
              <h2 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]`}>
                Bridging High-Concept <br />
                <span className="text-gradient-gold">Digital Design</span> With Absolute <br />
                Production Mastery.
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-gray-400 font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl">
              <p>
                Dominion Creative Studio is a luxury digital flagship and high-fidelity physical branding agency directed by <strong>Israel Ibitoye</strong>. We believe true brand authority cannot exist solely on screens—it must translate perfectly to solid substrates.
              </p>
              <p>
                Every asset we design, from an ultra-fast React web system to bespoke computerized monogram embroidery, is personally overseen by Israel. By integrating high-level software development with rigorous pre-press standards, we eliminate file distortion, color shifting, or low-density outputs.
              </p>
              <p>
                When a premium client partners with us, they do not receive cookie-cutter templates. They receive customized digital architecture and luxurious printed merchandise engineered to command maximum market retainer fees and customer conversion rates.
              </p>
            </div>

            {/* Founder Digital Card & Signature Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-8 border-t border-white/5 w-full">
              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[9px] font-mono text-gray-500 uppercase">Strategic Director</span>
                <span className={`${fontClass} text-lg font-bold text-white tracking-wide`}>Israel Ibitoye</span>
                <div className="flex items-center gap-1.5 text-xs text-[#D4AF37]">
                  <Mail size={12} />
                  <a href="mailto:israelibitoye208@gmail.com" className="font-mono text-[10px] hover:underline">
                    israelibitoye208@gmail.com
                  </a>
                </div>
              </div>

              {/* Digital Elegant Signature */}
              <div className="flex flex-col items-start gap-1 sm:border-l sm:border-white/10 sm:pl-8">
                <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">AUTHENTIC SEAL</span>
                <p className="font-serif italic text-[#D4AF37] text-2xl sm:text-3xl tracking-wider select-none font-medium">
                  Israel Ibitoye
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Hands-On Printing Catalog Checklist */}
          <div className="lg:col-span-5 bg-[#080808] border border-white/10 rounded-sm p-8 sm:p-10 flex flex-col gap-8 text-left relative shadow-2xl">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]/3 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-4 pb-6 border-b border-white/5">
              <div className="w-10 h-10 rounded bg-[#111111] border border-white/10 flex items-center justify-center text-[#D4AF37]">
                <Printer size={18} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-sm font-mono tracking-wider uppercase font-semibold">
                  PRODUCTION LAB SUITE
                </h3>
                <span className="text-[9.5px] text-gray-500 font-mono uppercase tracking-widest mt-1">
                  TACTILE SUBSTRATE CAPABILITIES
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
              Unlike traditional agencies that stop at visual file exports, we direct the physical production of enterprise portfolios and premium coordinates:
            </p>

            {/* Checklist Grid */}
            <div className="flex flex-col gap-3">
              {printCapabilities.map((capability, idx) => (
                <div key={idx} className="flex items-center gap-3.5 group">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors duration-300 shrink-0">
                    <Check size={9} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-gray-300 font-sans text-[11.5px] sm:text-xs tracking-wide group-hover:text-white transition-colors duration-300">
                    {capability}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Consultation Badge */}
            <div className="mt-4 p-4.5 bg-black/60 border border-[#D4AF37]/15 rounded-sm flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                <Sparkles size={14} className="text-[#D4AF37] shrink-0 animate-pulse" />
                <span className="text-[9.5px] font-mono text-[#D4AF37] uppercase tracking-wider leading-relaxed">
                  Enterprise cargo dispatch and direct worldwide shipping is fully active.
                </span>
              </div>
              <a 
                href="#booking" 
                className="w-full py-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-mono text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all duration-300 text-center"
              >
                Inquire Cargo Specs
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
