import React, { useState } from 'react';
import { CaseStudy, VisualConfig } from '../types';
import { Eye, Layers, ExternalLink, RefreshCw, X, Maximize2 } from 'lucide-react';

interface PortfolioProps {
  caseStudies: CaseStudy[];
  visual: VisualConfig;
}

export default function Portfolio({ caseStudies, visual }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeProjectDetail, setActiveProjectDetail] = useState<CaseStudy | null>(null);
  const [selectedSubItemId, setSelectedSubItemId] = useState<string | null>(null);
  const [selectedVariationId, setSelectedVariationId] = useState<string | null>(null);
  const [showLightboxUrl, setShowLightboxUrl] = useState<string | null>(null);

  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  const handleOpenProject = (project: CaseStudy) => {
    setActiveProjectDetail(project);
    if (project.visualPresentation.gallery && project.visualPresentation.gallery.length > 0) {
      const firstItem = project.visualPresentation.gallery[0];
      setSelectedSubItemId(firstItem.id);
      if (firstItem.variations && firstItem.variations.length > 0) {
        setSelectedVariationId(firstItem.variations[0].id);
      } else {
        setSelectedVariationId(null);
      }
    } else {
      setSelectedSubItemId(null);
      setSelectedVariationId(null);
    }
  };

  // Filter to only show active projects
  const activeCaseStudies = caseStudies.filter(p => p.isActive);

  // Extract unique industries for filtering
  const industries = ['all', ...Array.from(new Set(activeCaseStudies.map(p => p.industry)))];

  const filteredProjects = activeFilter === 'all'
    ? activeCaseStudies
    : activeCaseStudies.filter(p => p.industry === activeFilter);

  return (
    <section className="bg-black py-24 px-4 sm:px-8 relative" id="portfolio">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              Pristine Artifacts
            </span>
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
              Executive <span style={{ color: goldColor }}>Design Portfolio</span>
            </h3>
          </div>
          
          {/* Industry Filter Buttons */}
          <div className="flex flex-wrap gap-2 md:max-w-md my-2">
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(ind)}
                className={`px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest rounded transition-all cursor-pointer ${
                  activeFilter === ind
                    ? 'bg-[#D4AF37] text-black border border-[#D4AF37]'
                    : 'bg-transparent text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {ind.replace(' Concept', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="bg-gradient-to-br from-[#111111] to-black border border-white/5 hover:border-[#D4AF37]/30 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cinematic visual with dark overlays */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.visualPresentation.heroImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 pointer-events-none"
                />
                
                {/* Dark luxury visual card borders */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Left vertical border color of brand */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1" 
                  style={{ backgroundColor: project.visualPresentation.brandColor || goldColor }}
                />

                {/* Floating badge */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.projectUrl && (
                    <div className="bg-[#D4AF37] text-black border border-[#D4AF37] px-2 py-0.5 text-[8.5px] font-bold font-mono uppercase tracking-widest flex items-center gap-1 shadow-lg rounded-sm">
                      <span>Live Showcase</span>
                      <ExternalLink size={8} />
                    </div>
                  )}
                  <div className="bg-black/80 backdrop-blur border border-white/10 px-2.5 py-1 text-[8px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    {project.industry}
                  </div>
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-6 text-left flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-lg font-bold group-hover:text-[#D4AF37] font-sans transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-[10px] font-mono text-[#D4AF37] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Inspect</span>
                    <Eye size={12} />
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                {/* Compact sub attributes list */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 mt-1">
                  {project.visualPresentation.deliverables.slice(0, 3).map((del, dIdx) => (
                    <span key={dIdx} className="text-[9px] font-mono uppercase tracking-wider bg-[#0a0a0a] text-gray-400 px-2 py-0.5 rounded border border-white/5">
                      {del}
                    </span>
                  ))}
                  {project.visualPresentation.deliverables.length > 3 && (
                    <span className="text-[9px] font-mono text-gray-600 px-2 py-0.5">
                      +{project.visualPresentation.deliverables.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Complete Project Detailed Presentation Modal */}
      {(() => {
        if (!activeProjectDetail) return null;

        const gallery = activeProjectDetail.visualPresentation.gallery;
        const currentSubItem = gallery && selectedSubItemId 
          ? gallery.find(item => item.id === selectedSubItemId) 
          : gallery?.[0]; // Default to first item if gallery exists

        const activeVariation = currentSubItem?.variations && selectedVariationId
          ? currentSubItem.variations.find(v => v.id === selectedVariationId)
          : currentSubItem?.variations?.[0];

        const displayTitle = activeVariation ? activeVariation.title : (currentSubItem ? currentSubItem.title : activeProjectDetail.title);
        const displayClient = currentSubItem ? currentSubItem.clientName : activeProjectDetail.clientName;
        const displaySummary = activeVariation && activeVariation.summary 
          ? activeVariation.summary 
          : (currentSubItem ? currentSubItem.summary : activeProjectDetail.summary);
        const displayDesignGoals = currentSubItem ? currentSubItem.designGoals : activeProjectDetail.designGoals;
        const displayHeroImage = activeVariation ? activeVariation.image : (currentSubItem ? currentSubItem.image : activeProjectDetail.visualPresentation.heroImage);
        const displayBrandColor = currentSubItem ? currentSubItem.brandColor : (activeProjectDetail.visualPresentation.brandColor || goldColor);
        const displayDeliverables = currentSubItem ? currentSubItem.deliverables : (activeProjectDetail.visualPresentation.deliverables || []);

        return (
          <div className="fixed inset-0 bg-black/95 backdrop-blur z-50 overflow-y-auto py-12 px-4 flex justify-center">
            <div className="bg-[#111] border border-white/10 rounded-lg max-w-4xl w-full flex flex-col overflow-hidden shadow-2xl relative self-start my-auto">
              
              {/* Top Close trigger */}
              <button
                onClick={() => setActiveProjectDetail(null)}
                className="absolute top-4 right-4 z-20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-white hover:text-[#D4AF37] border border-white/10 rounded bg-black/80 hover:border-white/30 transition-all cursor-pointer"
              >
                Close Showcase
              </button>

              {/* Immersive visual header */}
              <div 
                className="h-[280px] sm:h-[420px] relative group/header cursor-zoom-in overflow-hidden"
                onClick={() => setShowLightboxUrl(displayHeroImage)}
                title="Click to view image in full definition"
              >
                <img
                  src={displayHeroImage}
                  alt={displayTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/header:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-black/50" />
                
                {/* Eye overlay for full screen hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/header:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
                  <div className="flex flex-col items-center gap-1.5 px-4 py-2.5 border border-[#D4AF37]/30 bg-black/85 rounded">
                    <Maximize2 className="text-[#D4AF37] animate-pulse" size={18} />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                      View Full Image HD
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-left flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                    {activeProjectDetail.industry} Case Study
                  </span>
                  <h3 className={`${fontClass} text-2xl sm:text-3.5xl font-bold text-white tracking-tight`}>
                    {displayTitle}
                  </h3>
                </div>
              </div>

              {/* Gallery collection selector bar inside modal */}
              {gallery && gallery.length > 0 && (
                <div className="bg-black/60 border-b border-white/5 p-4 sm:p-5 flex flex-col gap-3 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[10.5px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] font-bold flex items-center gap-1.5 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Explore {activeProjectDetail.title} Collection ({gallery.length} Designs)
                    </span>
                    <span className="text-[9px] text-gray-500 font-mono uppercase">
                      Select design to view details and full size image
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {gallery.map((item) => {
                      const isSelected = item.id === selectedSubItemId;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSubItemId(item.id);
                            if (item.variations && item.variations.length > 0) {
                              setSelectedVariationId(item.variations[0].id);
                            } else {
                              setSelectedVariationId(null);
                            }
                          }}
                          className={`group/thumb flex items-center gap-3 p-2.5 border rounded transition-all text-left cursor-pointer ${
                            isSelected 
                              ? 'bg-[#18181b] border-[#D4AF37] ring-1 ring-[#D4AF37]/40' 
                              : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-[#18181b]'
                          }`}
                        >
                          <div className="w-10 h-10 rounded overflow-hidden shrink-0 border border-white/10 relative">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover" 
                            />
                            {isSelected && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Eye size={12} className="text-[#D4AF37]" />
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className={`text-[9.5px] font-bold leading-tight truncate ${isSelected ? 'text-[#D4AF37]' : 'text-gray-300 group-hover/thumb:text-white'}`}>
                              {item.title.replace(' Custom Embroidery', '').replace(' Embroidery', '')}
                            </span>
                            <span className="text-[8px] font-mono text-gray-400 truncate opacity-80">
                              {item.clientName.replace(' Nur/Pry Sch, Ire Ekiti', '').replace(' Ltd', '')}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Variations Selector Bar */}
              {currentSubItem?.variations && currentSubItem.variations.length > 0 && (
                <div className="bg-[#18181b] p-5 sm:px-8 border-b border-white/10 flex flex-col gap-4 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] font-bold flex items-center gap-1.5 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Design Style Variations Inside This Commission
                    </span>
                    <span className="text-[9px] text-gray-400 font-mono uppercase">
                      Select a model variation below to view spec & HD representation
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {currentSubItem.variations.map((v) => {
                      const isVarSelected = v.id === selectedVariationId;
                      return (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariationId(v.id)}
                          className={`flex items-center gap-4 p-3.5 border rounded-lg transition-all text-left cursor-pointer ${
                            isVarSelected
                              ? 'bg-black border-[#D4AF37] ring-1 ring-[#D4AF37]/50'
                              : 'bg-black/30 border-white/5 hover:border-white/10 hover:bg-black/50'
                          }`}
                        >
                           <div className="w-14 h-14 rounded overflow-hidden shrink-0 border border-white/10 relative">
                            <img
                              src={v.image}
                              alt={v.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                            {isVarSelected && (
                              <div className="absolute inset-0 bg-[#D4AF37]/10 flex items-center justify-center">
                                <span className="absolute bottom-0 w-full text-[7.5px] bg-[#D4AF37] text-black font-mono font-bold uppercase text-center tracking-wider py-0.5">Active</span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className={`text-[11px] font-semibold tracking-tight ${isVarSelected ? 'text-[#D4AF37]' : 'text-gray-300'}`}>
                              {v.title}
                            </span>
                            <p className="text-[9.5px] text-gray-400 leading-normal line-clamp-2 mt-0.5 font-light font-sans">
                              {v.summary}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Content Layout Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#111111]">
                
                {/* Left strategic side */}
                <div className="md:col-span-8 flex flex-col text-left gap-6">
                  <div>
                    <h5 className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest mb-2">Project Brief & Concept</h5>
                    <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      {displaySummary}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest mb-2">Strategic Design Goals</h5>
                    <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      {displayDesignGoals}
                    </p>
                  </div>
                </div>

                {/* Right technical deliverables side */}
                <div className="md:col-span-4 flex flex-col text-left gap-4 p-4 border border-white/5 bg-black/40 rounded">
                  <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-widest">
                    Key Deliverables
                  </span>
                  <div className="flex flex-col gap-3">
                    {displayDeliverables.map((del, dId) => (
                      <div key={dId} className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: displayBrandColor }} />
                        <span className="text-xs text-gray-300 font-mono tracking-wide">{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-3 mt-1 flex flex-col gap-2">
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest">Image Access</span>
                    <button
                      onClick={() => setShowLightboxUrl(displayHeroImage)}
                      className="w-full inline-flex items-center justify-between px-3 py-1.5 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-white font-semibold rounded text-[9px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
                    >
                      <span>View Full Image</span>
                      <Maximize2 size={11} className="text-[#D4AF37]" />
                    </button>
                  </div>

                  <div className="border-t border-white/5 pt-3">
                    <span className="text-[8px] font-mono text-gray-500 uppercase block">Client Name</span>
                    <span className="text-xs text-white font-sans">{displayClient}</span>
                  </div>

                  {activeProjectDetail.projectUrl && (
                    <div className="border-t border-white/5 pt-2 mt-1 flex flex-col gap-2">
                      <span className="text-[8px] font-mono text-gray-500 uppercase block">Live Design / Website Showcase</span>
                      <a
                        href={activeProjectDetail.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-3.5 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold rounded text-[10px] font-mono tracking-wider uppercase transition-all duration-300"
                      >
                        <span>Showcase Website</span>
                        <ExternalLink size={12} className="shrink-0" />
                      </a>
                    </div>
                  )}
                </div>

              </div>

              {/* Inquire CTA link inside Showcase */}
              <div className="border-t border-white/5 p-6 bg-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
                <div className="flex flex-col">
                  <span className="text-xs text-white font-medium">Inspired by this visual structure?</span>
                  <span className="text-[11px] text-gray-400">Let us sculpt a matching masterpiece for your brand.</span>
                </div>
                <button
                  onClick={() => {
                    setActiveProjectDetail(null);
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-mono text-xs uppercase tracking-widest rounded-sm transition-all self-start sm:self-center cursor-pointer"
                >
                  Start a Similar Project
                </button>
              </div>
              
            </div>
          </div>
        );
      })()}

      {/* Lightbox / High-Definition Full Image Modal */}
      {showLightboxUrl && (
        <div 
          className="fixed inset-0 bg-black/98 z-[100] flex flex-col items-center justify-between p-4 transition-all duration-300 animate-fade-in"
          onClick={() => setShowLightboxUrl(null)}
        >
          {/* Top Panel */}
          <div className="w-full max-w-5xl flex justify-between items-center py-2 z-10">
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest">Dominion Studio High-Resolution View</span>
              <span className="text-xs text-gray-400 font-sans">Full Dimension Uncropped Asset</span>
            </div>
            <button
              onClick={() => setShowLightboxUrl(null)}
              className="px-3.5 py-2 bg-[#111] hover:bg-zinc-800 text-white rounded border border-white/10 hover:border-white/30 text-[10px] font-mono uppercase tracking-widest transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <X size={12} />
              <span>Close View</span>
            </button>
          </div>

          {/* Interactive Image Frame */}
          <div className="flex-1 flex items-center justify-center w-full max-h-[80vh] relative p-2 my-auto">
            <img 
              src={showLightboxUrl} 
              alt="High Definition Full Display"
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain border border-white/10 shadow-2xl rounded-sm animate-zoom-in"
              onClick={(e) => e.stopPropagation()} // stop close on image tap
            />
          </div>

          {/* Bottom Panel Info */}
          <div className="w-full max-w-5xl text-center py-3 border-t border-white/5 text-gray-500 font-mono text-[9px] tracking-wider uppercase">
            Click anywhere on the background or tap 'Close View' to return
          </div>
        </div>
      )}

    </section>
  );
}
