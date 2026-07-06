import React, { useState } from 'react';
import { ServiceItem, VisualConfig } from '../types';
import LucideIcon from './LucideIcon';
import { ArrowRight, Sparkles, X, CheckCircle2, ShieldCheck, Clock, Layers } from 'lucide-react';

interface ServicesProps {
  services: ServiceItem[];
  visual: VisualConfig;
  onSelectService: (serviceId: string) => void;
}

const SERVICE_MODELS_DATA: Record<string, {
  packages: { name: string; price: string; features: string[] }[];
  workflow: string[];
  duration: string;
}> = {
  'web-design': {
    packages: [
      { name: 'Launch Expedition', price: 'Contact for Quote', features: ['Custom React & Tailwind Architecture', 'Speed-Optimized Front-End Layouts', 'SEO Metadata Blueprinting', 'Mobile Responsive Excellence'] },
      { name: 'Digital Sovereignty', price: 'Request Custom Engagement', features: ['All Launch Features included', 'Premium Animation Integrations (Framer)', 'Formspree Secure CRM Pipelines', 'Admin Console & Local Storage Database'] }
    ],
    workflow: ['1. Discovery & Sitemap Mapping', '2. UI Wireframe Proofing', '3. Tailored React Code Engineering', '4. Performance Optimization & Live Container Deployment'],
    duration: '3 - 6 Weeks'
  },
  'brand-identity': {
    packages: [
      { name: 'Core Identity Kit', price: 'Contact for Quote', features: ['Bespoke Logo emblem design', 'Official Identity Palette Mapping', 'Primary Typography curation'] },
      { name: 'Royal Brand Manual', price: 'Request Quote', features: ['All Core Features included', 'Comprehensive Brand Book Guideline PDF', 'Business Card Grid Blueprint', 'Prepress Stationery Master Templates'] }
    ],
    workflow: ['1. Conceptual Moodboarding', '2. Premium Emblem Sketching', '3. Typography Matching & Sizing', '4. Complete Brand Asset Kit Export'],
    duration: '2 - 4 Weeks'
  },
  'printing-solutions': {
    packages: [
      { name: 'Corporate Publication Run', price: 'Varies on Volume', features: ['Hardcover & Softcover Custom Notebooks', 'Corporate Custom Branded Jotters', 'Offset Programmatic Booklet Prints', 'High-Density Matte Cover Finishes'] }
    ],
    workflow: ['1. Prepress File Structural Inspection', '2. Solid Substrate Weight Selection', '3. High-Density Ink calibration', '4. Perfect Binding or Wire-O-Bound finishing'],
    duration: '5 - 10 Business Days'
  },
  'large-format': {
    packages: [
      { name: 'Exhibition Backing Pack', price: 'Varies on Scale', features: ['High-resistance weather vinyl banners', 'Launch backdrop stands & brackets', 'Sleek custom contour decals', 'Massive resolution canvas layouts'] }
    ],
    workflow: ['1. Vector Scale Aspect Review', '2. Weather-Proof Ink Calibration', '3. High-Fidelity Plot Printing Run', '4. Precision Plotter Contour Cutting & Hemming'],
    duration: '3 - 5 Business Days'
  },
  'book-publishing': {
    packages: [
      { name: 'Editorial Master Series', price: 'Request Quote', features: ['Beautiful Inner Grid Typesetting Layouts', 'Premium Matte or Spot-UV Cover Wraps', 'Perfect-Bind Archival Spine Construction', 'Custom publication volume coordination'] }
    ],
    workflow: ['1. Manuscript review & page layout sizing', '2. Front/Back cover prepress blueprinting', '3. Test batch proof printing', '4. Complete bulk production offset run'],
    duration: '2 - 3 Weeks'
  },
  'event-flyers': {
    packages: [
      { name: 'Prestige Launch Pack', price: 'Request Quote', features: ['Prestige digital program invites', 'Staggered typographic flyers & posters', 'Social media flyers (1:1 & 9:16 layouts)'] }
    ],
    workflow: ['1. Campaign Coordinate Mapping', '2. Dynamic Typographic Proof Layout', '3. Screen Color Contrast optimization', '4. Direct PNG & PDF Vector Deliveries'],
    duration: '2 - 4 Business Days'
  },
  'merchandise-branding': {
    packages: [
      { name: 'Computerized Embroidery Program', price: 'Request Quote', features: ['Tight long-lasting monograms', 'Polo, hoodie, or corporate shirt stitching', 'Custom printed brand ambassador packs'] }
    ],
    workflow: ['1. Stitch vector digitization mapping', '2. Thread count & color matching', '3. Machine swatch test layout', '4. Full computerized multi-head embroidery run'],
    duration: '7 - 12 Business Days'
  },
  'bespoke-framing': {
    packages: [
      { name: 'Archival Portrait Display', price: 'Request Quote', features: ['Edge-polished solid glass sheets', 'Precision organic wood or gold floating frames', 'Melt-free acrylic layouts', 'Aluminum mounting bolts'] }
    ],
    workflow: ['1. Archival pigment print processing', '2. Solid wood/glass cutting & polished edges', '3. Laser mounting drilling', '4. Heavy-crate secure shipping packing'],
    duration: '4 - 7 Business Days'
  }
};

export default function Services({ services, visual, onSelectService }: ServicesProps) {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Filter to show active ones and exclude old 'graphic-design'
  const activeServices = services.filter(s => s.isActive && s.id !== 'graphic-design');

  // Helper to determine custom layout proportions for our exquisite bento-grid
  const getBentoSpanClass = (serviceId: string) => {
    switch (serviceId) {
      case 'web-design':
        return 'md:col-span-2 md:row-span-1 lg:col-span-2';
      case 'brand-identity':
        return 'md:col-span-1 md:row-span-2 lg:row-span-2';
      case 'printing-solutions':
        return 'md:col-span-2 md:row-span-1 lg:col-span-1';
      case 'large-format':
        return 'md:col-span-1 md:row-span-1 lg:col-span-1';
      default:
        return 'md:col-span-1';
    }
  };

  const getBentoAspectClass = (serviceId: string) => {
    switch (serviceId) {
      case 'brand-identity':
        return 'aspect-auto min-h-[360px] md:min-h-full';
      case 'web-design':
        return 'aspect-auto min-h-[200px]';
      default:
        return 'aspect-auto min-h-[220px]';
    }
  };

  return (
    <section className="bg-[#090909] py-28 px-4 sm:px-8 border-t border-white/5 relative" id="services">
      {/* Decorative vertical lines and ambient lighting */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/[0.02] hidden xl:block" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37]">
              Strategic Solutions
            </span>
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
              Bespoke Phygital <span style={{ color: goldColor }}>Capabilities</span>
            </h3>
          </div>
          <p className="text-gray-400 font-sans text-xs sm:text-sm max-w-lg font-light leading-relaxed">
            Meticulously engineered service models designed to command sovereign authority, unify physical print with speed-optimized code, and accelerate qualified lead conversions.
          </p>
        </div>

        {/* Editorial Bento-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className={`bg-black/80 border border-white/10 hover:border-[#D4AF37]/50 rounded-sm p-8 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden shadow-xl ${getBentoSpanClass(service.id)} ${getBentoAspectClass(service.id)}`}
            >
              {/* Subtle top gold wire */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Premium substrate glare effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-[#D4AF37]/3 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/4 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col gap-5 text-left relative z-10">
                
                {/* Monogram Badge */}
                <div className="w-11 h-11 rounded border border-white/10 flex items-center justify-center bg-[#0e0e0e] text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/5 transition-all duration-500 shadow-inner">
                  <LucideIcon name={service.icon} size={18} />
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white text-base sm:text-lg font-bold group-hover:text-[#D4AF37] transition-colors font-sans tracking-wide">
                    {service.title}
                  </h4>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-semibold">
                    {service.category}
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-sans font-light">
                  {service.description}
                </p>
              </div>

              {/* Bento Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="text-[9px] font-mono text-gray-500 group-hover:text-[#D4AF37]/80 uppercase tracking-wider duration-300">
                  {service.priceEstimate || 'Contact for Estimate'}
                </span>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="text-[10px] font-mono uppercase text-gray-400 hover:text-[#D4AF37] border border-white/5 hover:border-[#D4AF37]/30 bg-white/[0.01] px-3.5 py-1.5 rounded transition-all cursor-pointer"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-8 h-8 rounded border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] transition-all cursor-pointer shadow-md active:scale-90"
                    title={`Retain ${service.title}`}
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Exquisite Meticulous Service Blueprint Modal */}
      {selectedServiceDetail && (() => {
        const detail = SERVICE_MODELS_DATA[selectedServiceDetail.id] || {
          packages: [{ name: 'Custom Engagement', price: 'Varies on Specifications', features: selectedServiceDetail.detailedBenefits }],
          workflow: ['1. Blueprint Mapping', '2. Production & Assembly', '3. QA Review', '4. Secure Client Handoff'],
          duration: 'Contact Coordinator'
        };

        return (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#0b0b0b] border border-[#D4AF37]/30 rounded-sm max-w-2xl w-full p-6 sm:p-10 relative shadow-2xl my-auto text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/2 rounded-bl-full pointer-events-none" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-5 right-5 p-2 rounded-sm border border-white/10 hover:border-[#D4AF37] text-gray-400 hover:text-white bg-black/60 transition-all cursor-pointer"
              >
                <X size={15} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded border border-[#D4AF37]/25 bg-black flex items-center justify-center text-[#D4AF37] shadow">
                  <LucideIcon name={selectedServiceDetail.icon} size={22} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-[0.25em]">
                    SYSTEM SPECIFICATION BLUEPRINT
                  </span>
                  <h4 className={`${fontClass} text-xl sm:text-2xl font-bold text-white tracking-tight`}>
                    {selectedServiceDetail.title}
                  </h4>
                </div>
              </div>

              {/* 3-Column Bento Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left block: Packages & Pricing */}
                <div className="flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block border-b border-white/5 pb-2">
                    I. SERVICE ESTIMATE MODELS
                  </span>
                  
                  <div className="flex flex-col gap-4">
                    {detail.packages.map((pack, pIdx) => (
                      <div key={pIdx} className="bg-black/60 border border-white/10 rounded-sm p-4.5 flex flex-col gap-2.5">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-white text-xs font-mono uppercase font-bold tracking-wide">{pack.name}</span>
                          <span className="text-[10px] font-mono text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full">{pack.price}</span>
                        </div>
                        <div className="flex flex-col gap-1.5 mt-1">
                          {pack.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex gap-2 items-start">
                              <span className="text-[#D4AF37] text-xs font-mono mt-0.5">•</span>
                              <span className="text-[11px] text-gray-400 font-sans leading-tight">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right block: Workflows & Durations */}
                <div className="flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block border-b border-white/5 pb-2">
                    II. STEPS & EXPECTED TIMELINE
                  </span>

                  <div className="flex flex-col gap-4">
                    {/* Expected Duration info card */}
                    <div className="flex items-center gap-3 p-3.5 bg-black/40 border border-white/5 rounded-sm">
                      <Clock size={15} className="text-[#D4AF37] shrink-0" />
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] font-mono text-gray-500 uppercase">Standard Delivery Duration:</span>
                        <span className="text-xs text-white font-mono tracking-wide">{detail.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 text-left pl-1">
                      {detail.workflow.map((flow, fIdx) => (
                        <div key={fIdx} className="flex gap-3 items-center group">
                          <div className="w-5 h-5 rounded-full bg-black border border-white/10 flex items-center justify-center text-[9px] font-mono text-gray-500 group-hover:border-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-all shrink-0">
                            {fIdx + 1}
                          </div>
                          <span className="text-xs text-gray-300 font-sans leading-relaxed group-hover:text-white transition-colors">
                            {flow.replace(/^\d+\.\s*/, '')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-black/40 -mx-6 -mb-6 p-6 sm:-mx-10 sm:-mb-10 sm:p-10">
                <div className="flex items-center gap-2.5 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-[#D4AF37]" />
                  <span>Administrative Verification ID: DCS_MDL_LXS</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedServiceDetail(null)}
                    className="px-5 py-3 border border-white/10 hover:border-white/30 text-white font-mono text-[10px] uppercase tracking-widest rounded-sm transition-all cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      onSelectService(selectedServiceDetail.id);
                      setSelectedServiceDetail(null);
                    }}
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold font-mono text-[10px] uppercase tracking-widest rounded-sm transition-all cursor-pointer shadow-lg hover:shadow-[#D4AF37]/15 text-center shrink-0"
                  >
                    Retain Spec Scope
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })()}

    </section>
  );
}
