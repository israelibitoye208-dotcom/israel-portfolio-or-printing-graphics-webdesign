import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Compass, Clock, ShieldCheck } from 'lucide-react';
import { VisualConfig } from '../types';
import israelPortrait from '../1780671094703.png';

interface HeroProps {
  onStartProject: () => void;
  onViewPortfolio: () => void;
  visual: VisualConfig;
}

const TITLES = [
  "Creative Director",
  "Brand Strategist",
  "Print Specialist",
  "Full-Stack Architect",
  "Prepress Expert",
  "Design Technologist"
];

export default function Hero({ onStartProject, onViewPortfolio, visual }: HeroProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Typewriter implementation
  const [titleIdx, setTitleIdx] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  // UTC clock implementation
  const [utcTime, setUtcTime] = React.useState('');

  // 3D tilt coordinates
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = React.useState({ x: 50, y: 50 });

  // Portrait load error state & configuration tracking
  const [imageError, setImageError] = React.useState(false);
  const portraitUrl = visual.founderPortraitUrl || israelPortrait;
  const portraitMode = visual.portraitMode || 'photo';

  const renderLuxuryFallback = () => {
    if (portraitMode === 'geometric-gold') {
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-900 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
          {/* Concentric high-contrast orbital vector graphics */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none" />
          
          <motion.div 
            className="w-48 h-48 rounded-full border border-[#D4AF37]/15 flex items-center justify-center relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] top-0 shadow-[0_0_10px_#D4AF37]" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-white/40 bottom-0" />
            
            <motion.div 
              className="w-36 h-36 rounded-full border border-white/5 flex items-center justify-center"
              animate={{ rotate: -720 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37]/80 right-0" />
            </motion.div>
          </motion.div>

          {/* Golden Monogram Sigil */}
          <div className="absolute w-20 h-20 flex items-center justify-center z-10">
            <svg className="w-12 h-12 text-[#D4AF37]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="50,15 85,80 15,80" />
              <circle cx="50" cy="50" r="14" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M50,15 L50,80" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="absolute bottom-4 flex flex-col items-center">
            <span className="text-[7.5px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold animate-pulse">Sovereign Emblem State</span>
            <span className="text-[6.5px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">GEOMETRIC_GOLD_MODE</span>
          </div>
        </div>
      );
    }

    if (portraitMode === 'cinematic') {
      return (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
          {/* Moving particles or waves representing digital code & craft */}
          <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
          
          <motion.div 
            className="w-40 h-40 rounded bg-gradient-to-tr from-[#D4AF37]/5 to-transparent border border-white/10 flex items-center justify-center"
            animate={{
              borderRadius: ["20% 30% 10% 40%", "30% 20% 40% 10%", "20% 30% 10% 40%"],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Compass size={40} className="text-[#D4AF37] opacity-60 animate-spin" style={{ animationDuration: '30s' }} />
          </motion.div>

          <div className="absolute bottom-4 flex flex-col items-center">
            <span className="text-[7.5px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold animate-pulse">Cinematic Synthesis Active</span>
            <span className="text-[6.5px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">CINEMATIC_VIBE_MODE</span>
          </div>
        </div>
      );
    }

    // Default '3d-sculpture' luxury artwork
    return (
      <div className="absolute inset-0 bg-[#060606] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        
        {/* Glowing Ambient Core Orb */}
        <motion.div 
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent border border-[#D4AF37]/20 flex items-center justify-center relative shadow-[0_0_50px_rgba(212,175,55,0.05)]"
          animate={{
            scale: [1, 1.08, 1],
            rotate: 360
          }}
          transition={{
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" }
          }}
        >
          {/* Orbital Satellite */}
          <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#D4AF37]" />
          
          {/* Nested Gold Rings */}
          <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-[#D4AF37]/10 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 blur-xs" />
            </div>
          </div>
        </motion.div>

        {/* Outer Kinetic Ring */}
        <motion.div 
          className="absolute w-44 h-44 rounded-full border border-white/5 border-dashed"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute bottom-4 flex flex-col items-center">
          <span className="text-[7.5px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold animate-pulse">Kinetic Masterpiece Fallback</span>
          <span className="text-[6.5px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">TACTILE_3D_SCULPTURE</span>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TITLES[titleIdx];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
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

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toUTCString().replace('GMT', 'UTC');
      setUtcTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - box.top) / box.height - 0.5; // -0.5 to 0.5
    
    // Tilt angle max 12 deg
    setTilt({ x: x * 12, y: y * -12 });
    
    // Glare positioning inside the glass container
    const glowX = ((e.clientX - box.left) / box.width) * 100;
    const glowY = ((e.clientY - box.top) / box.height) * 100;
    setGlowPos({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-8 bg-black vintage-overlay">
      
      {/* Luxury alignment borders */}
      <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-8 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent hidden xl:block" />

      {/* Cinematic grid overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_40%,#000_80%,transparent_100%)] opacity-80 pointer-events-none" />

      {/* Ambient gold spotlight behind */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Creative Agency Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[#D4AF37]/20 bg-gradient-to-r from-black to-[#111111] text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]"
            >
              <Sparkles size={11} className="text-[#D4AF37]" />
              <span>DOMINION // DIGITAL EXHIBITION</span>
            </motion.div>

            {/* Dynamic UTC Clock */}
            {utcTime && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-[10px] font-mono text-gray-500 border border-white/5 bg-black/60 px-3 py-2 rounded-sm"
              >
                <Clock size={11} className="text-[#D4AF37]" />
                <span className="tracking-wider">{utcTime}</span>
              </motion.div>
            )}
          </div>

          {/* Elevated Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`${fontClass} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]`}
          >
            Sculpting Elite <br />
            <span className="text-gradient-gold">Visual Masterpieces</span> <br />
            with Absolute Authority
          </motion.h1>

          {/* Luxury Editorial Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans"
          >
            Where senior software development converges with heavy-gauge physical print mastery. We engineer high-converting digital flagships and bespoke, tactile brand merchandise for distinguished enterprises globally.
          </motion.p>

          {/* Call to Actions with Slide Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
          >
            <button
              onClick={onStartProject}
              className="relative overflow-hidden px-8 py-4.5 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-[#D4AF37]/10 cursor-pointer"
              id="hero-start-cta"
            >
              Start an Inquiry
            </button>
            <button
              onClick={onViewPortfolio}
              className="px-8 py-4.5 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-mono text-xs font-semibold uppercase tracking-widest bg-black/40 hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-sm cursor-pointer"
              id="hero-portfolio-cta"
            >
              Explore Collection
            </button>
          </motion.div>

          {/* Technical Luxury Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-10 mt-4 pt-8 border-t border-white/5 w-full text-left"
          >
            <div>
              <p className="text-2xl font-bold text-white font-mono tracking-tight">100%</p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-gray-500 mt-1">Sovereign Craft</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-mono tracking-tight">Phygital</p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-gray-500 mt-1">Screen & Substrate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D4AF37] font-mono tracking-tight">VIP</p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-gray-500 mt-1">Executive Delivery</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Executive Identity Card */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[390px] aspect-[4/5] relative rounded-lg p-5 bg-gradient-to-b from-[#111] to-[#040404] border border-white/10 shadow-2xl hover:border-[#D4AF37]/35 transition-all duration-300 group overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Cursor light glare interaction overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
              style={{
                background: `radial-gradient(circle 120px at ${glowPos.x}% ${glowPos.y}%, rgba(212, 175, 55, 0.12), transparent 80%)`
              }}
            />

            {/* Solid gold fine margin borders */}
            <div className="absolute inset-3 border border-white/5 group-hover:border-[#D4AF37]/15 rounded pointer-events-none transition-colors duration-500" />

            {/* Inner dynamic card layout */}
            <div className="h-full flex flex-col justify-between relative z-20">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">Lead Director & Software Architect</span>
                </div>
                <Compass size={13} className="text-[#D4AF37] animate-spin" style={{ animationDuration: '24s' }} />
              </div>

              {/* CGI 3D Premium Portrait Wrapper with Breathing and Spot Light Glows */}
              <div className="flex-1 my-4 overflow-hidden rounded relative border border-white/5 bg-black flex items-center justify-center group-hover:border-white/10 transition-colors min-h-[220px]">
                
                {portraitMode === 'photo' && portraitUrl && !imageError ? (
                  <>
                    {/* Spotlight glare backdrop inside portrait */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

                    {/* Founder actual portrait imported dynamically, styled with subtle breathing */}
                    <motion.img 
                      src={portraitUrl} 
                      alt="Israel Ibitoye portrait" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                      onError={() => setImageError(true)}
                      animate={{
                        scale: [1, 1.025, 1],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Elegant overlay shadow on bottom of portrait */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </>
                ) : (
                  renderLuxuryFallback()
                )}
              </div>

              {/* Founder Identity & Dynamic Subtitles */}
              <div className="bg-black/80 backdrop-blur-md p-3.5 rounded border border-white/5 text-left">
                <div className="flex justify-between items-center">
                  <h4 className={`${fontClass} text-xl font-bold text-white tracking-tight`}>
                    Israel Ibitoye
                  </h4>
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={11} className="text-[#D4AF37]" />
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">VERIFIED</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 mt-1 min-h-[16px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 animate-pulse" />
                  <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                    {currentText}
                    <span className="inline-block w-[2px] h-[10px] bg-[#D4AF37] ml-1 align-baseline animate-pulse" />
                  </p>
                </div>
              </div>

              {/* Technical ID details footer */}
              <div className="border-t border-white/5 pt-3.5 flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-mono text-gray-500">SYSTEM METRIC ID:</span>
                  <span className="text-[10px] font-mono text-white tracking-widest uppercase">CEO_ISRAEL_2026</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[9px] font-mono text-green-500 uppercase font-bold tracking-wider">Active Stream</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Slide-Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 cursor-pointer text-[9px] uppercase font-mono tracking-[0.25em] hover:text-white transition-colors duration-300">
        <ArrowDown size={14} className="animate-bounce text-[#D4AF37]" />
      </div>

    </section>
  );
}
