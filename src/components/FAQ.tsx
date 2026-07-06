import React, { useState } from 'react';
import { FAQItem, VisualConfig } from '../types';
import { CircleHelp, Plus, Minus, ShieldAlert, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface FAQProps {
  faqs: FAQItem[];
  visual: VisualConfig;
}

export default function FAQ({ faqs, visual }: FAQProps) {
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Filter only active FAQs
  const activeFaqs = faqs.filter(f => f.isActive);

  // Toggle open
  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  return (
    <section className="bg-[#090909] py-28 px-4 sm:px-8 border-y border-white/5 relative overflow-hidden" id="faq">
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/2 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-center items-center max-w-2xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] flex items-center gap-1.5">
            <Sparkles size={11} className="text-[#D4AF37] animate-pulse" />
            <span>EXECUTIVE DISCLOSURES</span>
          </span>
          <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
            Frequently Asked <span style={{ color: goldColor }}>Questions</span>
          </h3>
          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light mt-1 max-w-lg leading-relaxed">
            Transparent operational metrics regarding our design sprints, substrate prepress rules, logistics dispatch, and executive guidelines.
          </p>
        </div>

        {/* Dynamic Accordion list */}
        <div className="flex flex-col gap-4 w-full">
          {activeFaqs.map((faq) => {
            const isOpen = openFAQId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-black/80 border border-white/10 hover:border-[#D4AF37]/30 rounded-sm overflow-hidden transition-all duration-300 shadow-lg"
              >
                {/* Header toggle button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-white/5 bg-zinc-950 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/45 transition-colors">
                      <CircleHelp size={12} />
                    </div>
                    <span className="text-white text-xs sm:text-sm font-bold font-sans tracking-wide">
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon toggle indicator */}
                  <div className="w-6 h-6 rounded-sm border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all shrink-0 bg-zinc-950">
                    {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-500 ease-in-out text-left ${
                    isOpen ? 'max-h-[350px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <p className="p-6 sm:px-14 text-xs sm:text-[12.5px] text-gray-400 font-sans leading-relaxed font-light bg-[#050505]/40">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent VIP Support Guarantee notice block */}
        <div className="border border-[#D4AF37]/25 bg-gradient-to-r from-black to-[#070707] rounded-sm p-6 sm:p-10 text-left relative overflow-hidden shadow-2xl mt-4">
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/3 rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            
            <div className="flex flex-col gap-3 max-w-xl">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <span className="text-[9.5px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                  VIP Strategic Concierge Guarantee
                </span>
              </div>
              
              <h4 className={`${fontClass} text-lg sm:text-xl font-bold text-white tracking-wide`}>
                Require Tailored Substrates or Custom Code Sprints?
              </h4>
              
              <p className="text-xs text-gray-400 font-sans leading-relaxed font-light">
                Should your commission involve complex integrations, specialized multi-head monogram stitching density, or custom business program layout publishing, our executive desk is directly active. <strong>Israel Ibitoye</strong> monitors this email stream personally.
              </p>
            </div>

            {/* VIP Direct Coordinate Card */}
            <div className="bg-zinc-950/80 border border-white/5 p-5 rounded-sm flex flex-col gap-3 w-full md:w-auto shrink-0 text-left md:min-w-[280px]">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#D4AF37]" />
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">EXECUTIVE EMAIL PATH:</span>
              </div>
              
              <a 
                href="mailto:israelibitoye208@gmail.com" 
                className="text-xs sm:text-sm text-white font-mono hover:text-[#D4AF37] hover:underline break-all"
              >
                israelibitoye208@gmail.com
              </a>

              <div className="flex items-center gap-2 pt-2.5 border-t border-white/5 text-[9px] font-mono text-gray-400 uppercase">
                <Clock size={11} className="text-green-500 shrink-0" />
                <span>Guaranteed Direct Reply &lt; 12 Hours</span>
              </div>
            </div>

          </div>

          {/* Structural layout lines */}
          <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-white/5" />
        </div>

      </div>
    </section>
  );
}
