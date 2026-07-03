import React, { useState } from 'react';
import { ServiceItem, VisualConfig } from '../types';
import LucideIcon from './LucideIcon';
import { ArrowRight, Sparkles, X, CheckSquare } from 'lucide-react';

interface ServicesProps {
  services: ServiceItem[];
  visual: VisualConfig;
  onSelectService: (serviceId: string) => void;
}

export default function Services({ services, visual, onSelectService }: ServicesProps) {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  
  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Filter to show active ones
  const activeServices = services.filter(s => s.isActive);

  return (
    <section className="bg-[#111111] py-24 px-4 sm:px-8 border-t border-white/5 relative" id="services">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              Signature Offerings
            </span>
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
              Bespoke Agency <span style={{ color: goldColor }}>Services</span>
            </h3>
          </div>
          <p className="text-gray-400 font-sans text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Meticulously engineered brand solutions tailored to command market authority, synchronize physical and digital layers, and skyrocket customer conversion rates.
          </p>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className="bg-black/60 border border-white/5 hover:border-[#D4AF37]/50 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle visual hover gold ray */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex flex-col gap-4 text-left">
                {/* Custom Icon Representation */}
                <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center bg-[#111111] text-[#D4AF37] group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/5 transition-all duration-300">
                  <LucideIcon name={service.icon} size={18} />
                </div>

                <div className="flex flex-col">
                  <h4 className="text-white text-base font-semibold group-hover:text-[#D4AF37] transition-colors font-sans">
                    {service.title}
                  </h4>
                  <span className="text-[9px] font-mono text-[#D4AF37]/80 uppercase tracking-widest mt-0.5">
                    {service.category}
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Buttons */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                {service.priceEstimate && (
                  <span className="text-[10px] font-mono text-gray-400">
                    {service.priceEstimate}
                  </span>
                )}
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="text-[10px] font-mono uppercase text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-7 h-7 rounded border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] transition-all cursor-pointer"
                    title={`Retain ${service.title}`}
                  >
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bespoke Detailed Specifications Sheet Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111111] border border-[#D4AF37]/35 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl shadow-black/80">
            <button 
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X size={15} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm border border-[#D4AF37]/10 bg-black flex items-center justify-center text-[#D4AF37]">
                <LucideIcon name={selectedServiceDetail.icon} size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-[0.25em]">
                  {selectedServiceDetail.category} Specification
                </span>
                <h4 className="text-white text-lg font-bold font-sans">
                  {selectedServiceDetail.title}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed text-left mb-6">
              {selectedServiceDetail.description}
            </p>

            <div className="flex flex-col gap-3.5 text-left mb-6">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">
                Deliverables & Standards:
              </span>
              <div className="flex flex-col gap-2.5">
                {selectedServiceDetail.detailedBenefits.map((benefit, bId) => (
                  <div key={bId} className="flex gap-2.5 items-start">
                    <CheckSquare size={13} className="text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-400 font-sans leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 flex items-center justify-between">
              {selectedServiceDetail.priceEstimate && (
                <div className="flex flex-col items-start">
                  <span className="text-[8px] font-mono text-gray-500 uppercase">Est. Retainer:</span>
                  <span className="text-xs font-mono text-white tracking-widest uppercase">
                    {selectedServiceDetail.priceEstimate}
                  </span>
                </div>
              )}
              <button
                onClick={() => {
                  onSelectService(selectedServiceDetail.id);
                  setSelectedServiceDetail(null);
                }}
                className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-mono text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer"
              >
                Inquire & Book
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
