import React, { useState } from 'react';
import { FAQItem, VisualConfig } from '../types';
import { CircleHelp, Plus, Minus } from 'lucide-react';

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
    <section className="bg-[#111111] py-24 px-4 sm:px-8 border-y border-white/5 relative" id="faq">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D4AF37]/2 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-center items-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
            Insights & Strategy
          </span>
          <h3 className={`${fontClass} text-3xl sm:text-4.5xl font-bold tracking-tight text-white`}>
            Frequently Asked <span style={{ color: goldColor }}>Questions</span>
          </h3>
          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light mt-1 max-w-lg leading-relaxed">
            Transparent explanations concerning our design sprints, substrate manufacturing rules, logistics dispatch, and executive guidelines.
          </p>
        </div>

        {/* Dynamic Accordion list */}
        <div className="flex flex-col gap-4 mt-4 w-full">
          {activeFaqs.map((faq) => {
            const isOpen = openFAQId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-black/60 border border-white/5 rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Header toggle button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <CircleHelp size={14} className="text-[#D4AF37] shrink-0" />
                    <span className="text-white text-xs sm:text-sm font-semibold font-sans tracking-wide">
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon toggle indicator */}
                  <div className="w-5 h-5 rounded border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-all shrink-0">
                    {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out text-left ${
                    isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <p className="p-6 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed font-light bg-black/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
