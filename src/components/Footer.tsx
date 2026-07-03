import React, { useState } from 'react';
import { Mail, Phone, Clock, ArrowRight, Instagram, Facebook, Linkedin, Calendar, CheckSquare } from 'lucide-react';
import { ContactInfo, VisualConfig } from '../types';

interface FooterProps {
  contact: ContactInfo;
  visual: VisualConfig;
  onSubscribeNewsletter: (email: string) => void;
}

export default function Footer({ contact, visual, onSubscribeNewsletter }: FooterProps) {
  const [emailValue, setEmailValue] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<boolean>(false);

  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue) return;

    onSubscribeNewsletter(emailValue);
    setSubscribeStatus(true);
    setEmailValue('');
    
    setTimeout(() => {
      setSubscribeStatus(false);
    }, 5000);
  };

  return (
    <footer className="bg-black text-[#FFFFFF] border-t border-white/10 pt-20 pb-10 px-4 sm:px-8 text-left relative overflow-hidden">
      {/* Decorative vertical golden accents */}
      <div 
        className="absolute top-0 left-0 w-1.5 h-16" 
        style={{ backgroundColor: goldColor }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Left Side: Editorial description of Dominion Creative Studio */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="flex flex-col">
            <h4 className={`${fontClass} text-2xl font-bold tracking-widest text-white`}>
              DOMINION CREATIVE <span style={{ color: goldColor }}>STUDIO</span>
            </h4>
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-500 mt-1">
              Screen & Substrate Artistry
            </span>
          </div>

          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
            Positioning corporate divisions, restaurants, schools, and entrepreneurs with paramount authority. Merging bespoke React software development with heavy tactile print masterclasses.
          </p>

          {/* Social Icons Placeholders */}
          <div className="flex items-center gap-3 mt-2">
            <a href="#instagram" className="w-8 h-8 rounded border border-white/10 hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] flex items-center justify-center transition-all" title="Future Instagram Placeholder">
              <Instagram size={14} />
            </a>
            <a href="#facebook" className="w-8 h-8 rounded border border-white/10 hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] flex items-center justify-center transition-all" title="Future Facebook Placeholder">
              <Facebook size={14} />
            </a>
            <a href="#linkedin" className="w-8 h-8 rounded border border-white/10 hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] flex items-center justify-center transition-all" title="Future LinkedIn Placeholder">
              <Linkedin size={14} />
            </a>
            {/* Custom TikTok Placeholder using Lucide icon representation or simply styled custom tag */}
            <a href="#tiktok" className="w-8 h-8 rounded border border-white/10 hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] flex items-center justify-center transition-all text-xs font-mono font-bold" title="Future TikTok Placeholder">
              TK
            </a>
          </div>
        </div>

        {/* Center: Real Contact Coordinates */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h5 className="text-xs uppercase font-mono tracking-widest text-[#D4AF37]">
            Core Contact Coordinates
          </h5>

          <div className="flex flex-col gap-4">
            
            <div className="flex gap-3 items-start">
              <Phone size={14} className="text-[#D4AF37] mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-gray-500 uppercase">Phone & WhatsApp</span>
                <a href={`tel:${contact.phone}`} className="text-xs text-white font-mono hover:text-[#D4AF37] transition-all">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Mail size={14} className="text-[#D4AF37] mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-gray-500 uppercase">Strategic Email Inbox</span>
                <a href={`mailto:${contact.email}`} className="text-xs text-white font-mono hover:text-[#D4AF37] transition-all">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Clock size={14} className="text-[#D4AF37] mt-0.5" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-mono text-gray-500 uppercase">Available Hours</span>
                <span className="text-xs text-gray-400 font-sans font-light">
                  {contact.officeHours}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Newsletter signup */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h5 className="text-xs uppercase font-mono tracking-widest text-[#D4AF37]">
            VIP Bulletins
          </h5>

          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
            Register your enterprise email to receive premium branding insights, pricing catalogs, and priority printing availability.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="vip.client@gmail.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="bg-black/60 border border-white/10 rounded-sm text-xs px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] w-full transition-all"
            />
            <button
              type="submit"
              className="px-4 bg-[#D4AF37] hover:bg-[#C9A227] text-black rounded-sm flex items-center justify-center transition-all cursor-pointer"
              title="Subscribe"
            >
              <ArrowRight size={14} />
            </button>
          </form>

          {subscribeStatus && (
            <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-[10px] uppercase tracking-wider animate-pulse">
              <CheckSquare size={12} />
              <span>Direct-to-VIP Stream Configured!</span>
            </div>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs font-sans">
        
        <p className="font-light tracking-wide">
          © {new Date().getFullYear()} Dominion Creative Studio. Designed by Israel Bitoye. All structural rights secured worldwide.
        </p>

        <p className="font-mono text-[9px] text-[#D4AF37]/40 uppercase tracking-widest select-none">
          Nigeria Dispatch • Worldwide Integrity
        </p>

      </div>
    </footer>
  );
}
