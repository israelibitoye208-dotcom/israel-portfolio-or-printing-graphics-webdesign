import React from 'react';
import { ShieldCheck, ArrowRight, Layers, PhoneCall } from 'lucide-react';
import { VisualConfig } from '../types';

interface NavbarProps {
  currentTab: 'client' | 'admin';
  setView: (view: 'client' | 'admin') => void;
  visual: VisualConfig;
  onNavigateToBooking: () => void;
  phone: string;
}

export default function Navbar({ currentTab, setView, visual, onNavigateToBooking, phone }: NavbarProps) {
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  return (
    <nav className="sticky top-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Elegant Luxury Branding Logo */}
        <div className="flex flex-col cursor-pointer" onClick={() => setView('client')}>
          <h1 className={`${fontClass} text-xl sm:text-2xl font-bold tracking-widest text-[#FFFFFF] flex items-center gap-2`}>
            DOMINION CREATIVE <span style={{ color: goldColor }}>STUDIO</span>
          </h1>
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#B8B8B8] -mt-1 uppercase">
            Luxury Creative Systems
          </span>
        </div>

        {/* Navigation Menu Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-sans text-gray-300">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors duration-200">Case Portfolio</a>
          <a href="#process" className="hover:text-white transition-colors duration-200">Our Strategy</a>
          <a href="#faq" className="hover:text-white transition-colors duration-200">Insights & FAQ</a>
        </div>

        {/* CTA Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Phone Call icon for mobile */}
          <a
            href={`tel:${phone}`}
            className="flex sm:hidden p-2 rounded-full border border-white/10 hover:border-white/30 text-[#FFFFFF] transition-all"
            title="Call Israel Bitoye"
          >
            <PhoneCall size={16} />
          </a>

          {/* View switcher badge */}
          <button
            onClick={() => setView(currentTab === 'client' ? 'admin' : 'client')}
            className="relative overflow-hidden group flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-md border border-[#D4AF37]/40 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white hover:text-black transition-all bg-black hover:bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)] duration-300 cursor-pointer"
            id="nav-view-switcher"
          >
            {currentTab === 'client' ? (
              <>
                <ShieldCheck size={14} className="text-[#D4AF37] group-hover:text-black duration-300" />
                <span>Admin Studio</span>
              </>
            ) : (
              <>
                <Layers size={14} className="text-[#D4AF37] group-hover:text-black duration-300" />
                <span>Live Site</span>
              </>
            )}
          </button>

          {/* Premium Inquiry Button */}
          <button
            onClick={onNavigateToBooking}
            className="hidden sm:flex items-center gap-2 bg-[#D4AF37] text-black hover:bg-[#C9A227] px-4 py-2 text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 transform rounded-sm active:scale-95 cursor-pointer"
            id="nav-cta"
          >
            <span>Start a Project</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </nav>
  );
}
