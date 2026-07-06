import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial, VisualConfig } from '../types';
import { Star, Quote, ArrowLeft, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface TestimonialProps {
  testimonials: Testimonial[];
  visual: VisualConfig;
}

export default function Testimonials({ testimonials, visual }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Render only active ones
  const activeTestimonials = testimonials.filter(t => t.isActive);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? activeTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === activeTestimonials.length - 1 ? 0 : prev + 1));
  };

  if (activeTestimonials.length === 0) {
    return null;
  }

  const currentTestimonial = activeTestimonials[currentIndex];

  return (
    <section className="bg-black py-28 px-4 sm:px-8 border-t border-white/5 relative overflow-hidden" id="testimonials">
      {/* Editorial lights */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/2 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-48 h-48 rounded-full bg-[#D4AF37]/1 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-white/5 pb-8">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#D4AF37] animate-pulse" />
              <span>Sovereign Endorsements</span>
            </span>
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
              Client <span style={{ color: goldColor }}>Acclaim</span>
            </h3>
          </div>
          <p className="text-gray-400 font-sans text-xs sm:text-sm max-w-sm font-light leading-relaxed">
            Direct, unedited praise from global divisions, schools, restaurants, and leading corporate enterprises.
          </p>
        </div>

        {/* Catalog Page Slide Carousel */}
        <div className="relative min-h-[350px] sm:min-h-[300px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-[#080808] border border-white/10 rounded-sm p-8 sm:p-14 text-left flex flex-col justify-between gap-8 relative shadow-2xl overflow-hidden"
            >
              {/* Giant elegant background quotation marks */}
              <div className="absolute top-8 right-10 text-white/[0.02] select-none pointer-events-none">
                <Quote size={180} style={{ color: 'rgba(212,175,55,0.025)' }} />
              </div>

              {/* Top Row: Ratings and Status */}
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starId) => (
                    <Star
                      key={starId}
                      size={13}
                      className={
                        starId < currentTestimonial.rating
                          ? 'text-[#D4AF37] fill-[#D4AF37]'
                          : 'text-zinc-800'
                      }
                    />
                  ))}
                </div>

                <span className="text-[8.5px] font-mono text-gray-500 uppercase tracking-widest bg-black/60 px-3 py-1 border border-white/5">
                  PAGE {currentIndex + 1} OF {activeTestimonials.length}
                </span>
              </div>

              {/* Middle Row: Immersive Editorial Quote block */}
              <div className="relative z-10 my-2">
                <p className={`${fontClass} text-lg sm:text-2xl md:text-3xl text-gray-100 font-light leading-relaxed italic`}>
                  "{currentTestimonial.content}"
                </p>
              </div>

              {/* Bottom Row: Executive Identity and Signature Badge */}
              <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div className="flex flex-col text-left">
                  <span className="font-sans text-sm sm:text-base font-bold text-white tracking-wide">
                    {currentTestimonial.name}
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mt-1">
                    <span className="text-[9.5px] font-mono text-gray-500 uppercase tracking-wider">{currentTestimonial.role}</span>
                    <span className="text-[#D4AF37] text-xs font-mono select-none">•</span>
                    <span className="text-[10px] font-mono text-[#D4AF37] font-semibold uppercase tracking-widest">{currentTestimonial.company}</span>
                  </div>
                </div>

                {/* Secure Sync Seal */}
                <div className="flex items-center gap-3 bg-black border border-white/5 px-4.5 py-2.5 rounded-sm shrink-0">
                  <MessageCircle size={14} className="text-[#D4AF37] animate-pulse" />
                  <div className="flex flex-col text-left">
                    <span className="text-[7.5px] font-mono text-gray-500 leading-none">VERIFIED SEASONS:</span>
                    <span className="text-[9px] font-mono text-white font-bold uppercase tracking-wider mt-1">VERIFIED CLIENT</span>
                  </div>
                </div>
              </div>

              {/* Aesthetic Corner Details */}
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-white/10" />
              <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-white/10" />
            </motion.div>
          </AnimatePresence>

          {/* Controls Bar */}
          <div className="flex items-center justify-between mt-8">
            {/* Left/Right controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 border border-white/10 hover:border-[#D4AF37] rounded-full flex items-center justify-center text-gray-400 hover:text-[#D4AF37] bg-black/60 hover:bg-[#D4AF37]/5 transition-all cursor-pointer active:scale-90"
                title="Previous Endorsement"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 border border-white/10 hover:border-[#D4AF37] rounded-full flex items-center justify-center text-gray-400 hover:text-[#D4AF37] bg-black/60 hover:bg-[#D4AF37]/5 transition-all cursor-pointer active:scale-90"
                title="Next Endorsement"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Navigation Indicators */}
            <div className="flex items-center gap-2">
              {activeTestimonials.map((_, dotId) => (
                <button
                  key={dotId}
                  onClick={() => setCurrentIndex(dotId)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === dotId 
                      ? 'w-7 bg-[#D4AF37]' 
                      : 'w-1.5 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                  title={`Page ${dotId + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
