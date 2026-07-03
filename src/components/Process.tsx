import React from 'react';
import { motion } from 'motion/react';
import { Eye, FileText, Palette, Hammer, Box, TrendingUp } from 'lucide-react';
import { VisualConfig } from '../types';

interface ProcessProps {
  visual: VisualConfig;
}

export default function Process({ visual }: ProcessProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Process workflow array
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      icon: Eye,
      desc: 'We map out your business objectives, target audience profile, content goals, and offline print expectations to secure absolute alignment in strategy.'
    },
    {
      num: '02',
      title: 'Strategy',
      icon: FileText,
      desc: 'Formulating pristine layout hierarchies, high-converting copywriting scopes, and structural pre-press design matrices.'
    },
    {
      num: '03',
      title: 'Design',
      icon: Palette,
      desc: 'Constructing custom UI wireframes using luxurious gold accents and sleek custom typography standards, delivering unmatched screen and brand authority.'
    },
    {
      num: '04',
      title: 'Production',
      icon: Hammer,
      desc: 'Developing lightning-fast clean react codebases and executing high-resolution, weather-resistant physical print preps (contour stickers, shirt monogram lines).'
    },
    {
      num: '05',
      title: 'Delivery',
      icon: Box,
      desc: 'Deploying robust cloud assets with optimized SEO schema, and shipping flawless bound catalogs, custom notebooks, and merchandise direct to clients.'
    },
    {
      num: '06',
      title: 'Optimization',
      icon: TrendingUp,
      desc: 'Analyzing user behavior, loading speed benchmarks, search discoverability, and strategic expansion paths for maximal digital conversion rate returns.'
    }
  ];

  return (
    <section className="bg-[#111111] py-24 px-4 sm:px-8 border-t border-white/5 relative" id="process">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-left max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
            Tactical Execution
          </span>
          <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
            Our Strategic <span style={{ color: goldColor }}>Six-Step Process</span>
          </h3>
          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light mt-1 leading-relaxed">
            From strategic discovery to global physical delivery, we control the entire pipeline of premium visual and code excellence. No guesswork, just precision execution.
          </p>
        </div>

        {/* Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx}
                className="bg-black/40 border border-white/5 hover:border-[#D4AF37]/30 rounded-lg p-6 flex flex-col items-start gap-4 text-left transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Numeric Top Header */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-3xl font-mono font-bold text-white/5 group-hover:text-[#D4AF37]/15 transition-all duration-500">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-[#111111] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-300">
                    <IconComponent size={15} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-white text-base font-semibold group-hover:text-[#D4AF37] font-sans transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans font-light">
                    {step.desc}
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
