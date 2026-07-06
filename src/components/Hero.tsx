import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';
import { VisualConfig } from '../types';

interface HeroProps {
  onStartProject: () => void;
  onViewPortfolio: () => void;
  visual: VisualConfig;
}

const TITLES = [
  "Graphic Designer",
  "Brand Strategist",
  "Print Specialist",
  "Logo Designer",
  "Social Media Designer",
  "Creative Director"
];

export default function Hero({ onStartProject, onViewPortfolio, visual }: HeroProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Typewriter implementation
  const [titleIdx, setTitleIdx] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TITLES[titleIdx];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % TITLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting 
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx]);
  
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-8 bg-black vintage-overlay">
      
      {/* Refined golden accent vertical lines on left and right borders */}
      <div className="absolute top-0 bottom-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/15 to-transparent hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-6 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/15 to-transparent hidden xl:block" />

      {/* Absolute Cinematic grid overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />

      {/* Floating subtle gold particle or light ray */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content layout */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] max-w-max"
          >
            <Sparkles size={11} className="text-[#D4AF37]" />
            <span>Digital Systems & Print Artistry</span>
          </motion.div>

          {/* Primary High-converting Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${fontClass} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]`}
          >
            Building Premium <br />
            <span className="text-gradient-gold">Brands With Precision</span> <br />
            & Creativity
          </motion.h2>

          {/* Luxury Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg font-sans text-gray-400 font-light max-w-xl leading-relaxed"
          >
            Luxury Websites <span className="mx-2 text-[#D4AF37]">•</span> Executive Branding <span className="mx-2 text-[#D4AF37]">•</span> Professional Printing Solutions. Crafted dynamically for corporate and premium lifestyle enterprises globally.
          </motion.p>

          {/* CTA Buttons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4"
          >
            <button
              onClick={onStartProject}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#D4AF37]/10 cursor-pointer"
              id="hero-start-cta"
            >
              Start a Project
            </button>
            <button
              onClick={onViewPortfolio}
              className="px-8 py-4 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-mono text-xs font-semibold uppercase tracking-widest bg-black/20 hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-sm active:translate-y-0 cursor-pointer"
              id="hero-portfolio-cta"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Extra mini statistics or luxury markers to reinforce real craftsmanship */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center gap-8 mt-4 pt-8 border-t border-white/5 w-full text-left"
          >
            <div>
              <p className="text-xl font-bold text-white font-mono">100%</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Craftsmanship Focus</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white font-mono">Phygital</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Screen & Substrate</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white font-mono">Executive</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Authority Delivery</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side Luxury Showcase Panel featuring Israel Ibitoye's original portrait at the start of the portfolio */}
        <div className="lg:col-span-5 h-auto lg:h-[550px] relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-[360px] h-auto border border-white/10 rounded-lg p-5 bg-gradient-to-br from-[#111] to-[#050505] shadow-2xl shadow-[#D4AF37]/5 overflow-hidden flex flex-col justify-between gap-4 group"
          >
            {/* Absolute background card overlays to depict deep luxury layers */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />

            {/* Header part with active spec title */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex gap-1.5 animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">Lead Director & Architect</span>
              </div>
              <Compass size={14} className="text-[#D4AF37] animate-spin" style={{ animationDuration: '20s' }} />
            </div>

            {/* Bottom text details below photo - Enhanced with glassmorphism, gold accents, and the typewriter system */}
            <div className="relative p-3 bg-black/90 backdrop-blur-md rounded border border-white/10 text-left">
              <p className={`${fontClass} text-lg font-bold text-white tracking-tight`}>
                Israel Ibitoye
              </p>
              <div className="flex items-center gap-1.5 mt-1 min-h-[16px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping shrink-0" />
                <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-semibold transition-all duration-300">
                  {currentText}
                  <span className="inline-block w-[2px] h-[10px] bg-[#D4AF37] ml-0.5 align-baseline animate-pulse" />
                </p>
              </div>
            </div>

            {/* Bottom active spec details */}
            <div className="border-t border-white/10 pt-3.5 flex items-center justify-between">
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-mono text-gray-500">AUTHORITY ID FILE:</span>
                <span className="text-[10px] font-mono text-white tracking-widest uppercase">CEO_ISRAEL_2026</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[9px] font-mono text-[#D4AF37] uppercase font-bold tracking-wider">Active</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bounce-Down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 cursor-pointer text-xs uppercase font-mono tracking-widest hover:text-white transition-colors duration-300">
        <ArrowDown size={14} className="animate-bounce" />
      </div>

    </section>
  );
}
