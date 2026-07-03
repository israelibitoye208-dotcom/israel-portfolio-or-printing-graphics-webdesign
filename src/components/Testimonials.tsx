import React from 'react';
import { Testimonial, VisualConfig } from '../types';
import { Star, MessageSquare } from 'lucide-react';

interface TestimonialProps {
  testimonials: Testimonial[];
  visual: VisualConfig;
}

export default function Testimonials({ testimonials, visual }: TestimonialProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Render only active ones
  const activeTestimonials = testimonials.filter(t => t.isActive);

  return (
    <section className="bg-black py-24 px-4 sm:px-8 relative" id="testimonials">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#D4AF37]/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-left max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
            Acclaim of Excellence
          </span>
          <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
            Client <span style={{ color: goldColor }}>Testimonials</span>
          </h3>
          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light mt-1 leading-relaxed">
            Real feedback from growing premium businesses, hospitality leaders, entrepreneurs, and institutions that built high-converting brand platforms with Dominion Creative Studio.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-[#111111] to-black border border-white/5 hover:border-[#D4AF37]/30 rounded-lg p-6 sm:p-8 flex flex-col justify-between text-left transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Gold Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, sVal) => (
                    <Star
                      key={sVal}
                      size={13}
                      className={
                        sVal < testimonial.rating
                          ? 'text-[#D4AF37] fill-[#D4AF37]'
                          : 'text-gray-700'
                      }
                    />
                  ))}
                </div>

                {/* Main Quote Content */}
                <p className="text-gray-300 font-sans text-xs sm:text-sm font-light leading-relaxed italic relative">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-sans text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {testimonial.name}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                    {testimonial.role} <span className="text-[#D4AF37] font-sans">•</span> {testimonial.company}
                  </span>
                </div>
                
                {/* Soft icon decoration */}
                <div className="w-8 h-8 rounded-full bg-black/60 border border-white/5 flex items-center justify-center text-[#D4AF37]/30">
                  <MessageSquare size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
