import React, { useState } from 'react';
import { CaseStudy, VisualConfig } from '../types';
import { Eye, Layers, ExternalLink, X, Maximize2, Sparkles, ShieldCheck, Compass, Info, ArrowLeft, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  caseStudies: CaseStudy[];
  visual: VisualConfig;
}

export default function Portfolio({ caseStudies, visual }: PortfolioProps) {
  // Master Category Filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Immersive Slide-Deck Modal
  const [activeProjectDetail, setActiveProjectDetail] = useState<CaseStudy | null>(null);
  
  // Slide deck state tracking
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [selectedSubItemId, setSelectedSubItemId] = useState<string | null>(null);
  const [selectedVariationId, setSelectedVariationId] = useState<string | null>(null);
  const [showLightboxUrl, setShowLightboxUrl] = useState<string | null>(null);

  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Active projects filtered out of Adelyn or estate ones
  const activeCaseStudies = caseStudies.filter(p => p.isActive && !p.id.toLowerCase().includes('adelyn'));

  // Define the 4 premium world-class categories
  const categories = [
    { id: 'all', name: 'Complete Exhibition' },
    { id: 'embroidery', name: 'Computerized Monogram Embroidery' },
    { id: 'web', name: 'High-Performance Web Applications' },
    { id: 'flyers', name: 'High-End Event & Program Flyers' },
    { id: 'framing', name: 'Bespoke Acrylic & Wood Framing' }
  ];

  // Helper to categorize case studies cleanly
  const getCategoryForCaseStudy = (study: CaseStudy): string => {
    const title = study.title.toLowerCase();
    const id = study.id.toLowerCase();
    
    if (id.includes('embroidery') || id.includes('monogram') || title.includes('embroidery') || title.includes('monogram')) {
      return 'embroidery';
    }
    if (id.includes('autocare') || id.includes('logistics') || id.includes('restaurant') || id.includes('grills') || id.includes('lounge') || id.includes('supermarket') || id.includes('hotel') || id.includes('resort') || id.includes('mall') || id.includes('web') || id.includes('auto') || study.projectUrl) {
      return 'web';
    }
    if (id.includes('sunday') || id.includes('church') || title.includes('flyer') || title.includes('campaign') || title.includes('poster')) {
      return 'flyers';
    }
    if (id.includes('framing') || id.includes('frame') || title.includes('frame') || title.includes('framing') || title.includes('acrylic')) {
      return 'framing';
    }
    return 'web'; // Default fallback
  };

  // Grouped active case studies
  const filteredProjects = selectedCategory === 'all'
    ? activeCaseStudies
    : activeCaseStudies.filter(p => getCategoryForCaseStudy(p) === selectedCategory);

  // Trigger Slide-Deck Modal
  const handleOpenProject = (project: CaseStudy) => {
    setActiveProjectDetail(project);
    setCurrentSlideIndex(0);
    
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

  // Get physical substrates or tech stack metadata for the project
  const getTechnicalSpecs = (study: CaseStudy) => {
    const cat = getCategoryForCaseStudy(study);
    if (cat === 'web') {
      return {
        label: 'TECH STACK SECRETS',
        items: ['HTML5 / CSS3 Layouts', 'React Single Page App', 'Tailwind Utility Framework', 'Wixsite Custom Core Node', 'Formspree API Endpoint']
      };
    } else if (cat === 'embroidery') {
      return {
        label: 'PRODUCTION SUBSTRATES',
        items: ['100% Long-Staple Cotton Thread', 'High-Density Digitized Stitch Matrices', 'Pre-Shrunk Heavyweight Cotton pique', 'Custom Tear-Away Stabilizers']
      };
    } else if (cat === 'framing') {
      return {
        label: 'MUSEUM-GRADE SUBSTRATES',
        items: ['Edge-Polished Organic Acrylic Glass', 'Precision CNC Wood Bevel Framing', 'Anodized Aluminum Standoff Studs', 'Archival Matte Cotton Pigment Prints']
      };
    } else {
      return {
        label: 'PRINT & PLOT BLUEPRINTS',
        items: ['High-DPI Archival Semi-Gloss Paper', 'UV-Resistant Dual Pigment Inks', 'Symmetric Mathematical Grid Layouts', 'Zero-Bleed Bleed-Line Safe Margins']
      };
    }
  };

  return (
    <section className="bg-black py-28 px-4 sm:px-8 relative border-t border-white/5 overflow-hidden" id="portfolio">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Header & Premium Filtering Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
              Digital Flagship Exhibition
            </span>
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
              Bespoke <span className="text-gradient-gold">Design Gallery</span>
            </h3>
          </div>
          
          {/* High-End Category Tabs */}
          <div className="flex flex-wrap gap-2.5 max-w-2xl bg-zinc-950 p-2 rounded border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 font-mono text-[9.5px] uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/10'
                    : 'bg-transparent text-gray-400 hover:text-white border border-transparent hover:border-white/5'
                }`}
              >
                {cat.name.replace('Computerized ', '').replace('High-Performance ', '').replace('High-End ', '').replace('Bespoke ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Masonry/Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center p-16 border border-white/5 rounded-sm bg-[#060606] text-gray-500 font-mono text-xs uppercase tracking-widest">
            No Artifacts Synchronized In This Collection
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const categoryKey = getCategoryForCaseStudy(project);
              return (
                <div
                  key={project.id}
                  onClick={() => handleOpenProject(project)}
                  className="bg-[#080808] border border-white/5 hover:border-[#D4AF37]/30 rounded-sm overflow-hidden group cursor-pointer transition-all duration-500 flex flex-col justify-between shadow-xl relative"
                >
                  {/* Subtle top gold wire */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Image wrapper */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.visualPresentation.heroImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-[1.02] brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
                    
                    {/* Floating premium badge */}
                    <div className="absolute top-4 right-4 flex gap-1.5 z-10">
                      {project.projectUrl && (
                        <div className="bg-[#D4AF37] text-black text-[8px] font-bold font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm shadow flex items-center gap-1">
                          <span>Live Site</span>
                          <ExternalLink size={8} />
                        </div>
                      )}
                      <span className="bg-black/80 backdrop-blur border border-white/10 text-[#D4AF37] text-[7.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Metadata and narrative */}
                  <div className="p-6 text-left flex flex-col gap-3 relative bg-gradient-to-b from-black/20 to-black">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white text-base font-bold group-hover:text-[#D4AF37] font-sans transition-colors tracking-wide leading-tight">
                        {project.title}
                      </h4>
                      <div className="w-6 h-6 rounded-full border border-white/5 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:scale-105 duration-300">
                        <Eye size={11} />
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-2 font-light">
                      {project.summary}
                    </p>
                    
                    {/* Fine layout horizontal wire */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5 mt-1">
                      {project.visualPresentation.deliverables.slice(0, 3).map((del, dIdx) => (
                        <span key={dIdx} className="text-[8.5px] font-mono uppercase tracking-wider bg-black text-gray-500 px-2 py-0.5 border border-white/5">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Immersive Full-Screen Slide-Deck Case Study Presentation */}
      {activeProjectDetail && (() => {
        const specs = getTechnicalSpecs(activeProjectDetail);
        const gallery = activeProjectDetail.visualPresentation.gallery || [];
        
        // Find current subitem
        const currentSubItem = gallery.length > 0 && selectedSubItemId 
          ? gallery.find(item => item.id === selectedSubItemId) 
          : gallery[0];

        // Variation details
        const activeVariation = currentSubItem?.variations && selectedVariationId
          ? currentSubItem.variations.find(v => v.id === selectedVariationId)
          : currentSubItem?.variations?.[0];

        // Display properties compiled safely
        const displayTitle = activeVariation ? activeVariation.title : (currentSubItem ? currentSubItem.title : activeProjectDetail.title);
        const displayClient = currentSubItem ? currentSubItem.clientName : activeProjectDetail.clientName;
        const displaySummary = activeVariation?.summary ? activeVariation.summary : (currentSubItem ? currentSubItem.summary : activeProjectDetail.summary);
        const displayDesignGoals = currentSubItem ? currentSubItem.designGoals : activeProjectDetail.designGoals;
        const displayImage = activeVariation ? activeVariation.image : (currentSubItem ? currentSubItem.image : activeProjectDetail.visualPresentation.heroImage);
        const displayDeliverables = currentSubItem ? currentSubItem.deliverables : (activeProjectDetail.visualPresentation.deliverables || []);

        return (
          <div className="fixed inset-0 bg-black/99 backdrop-blur-xl z-50 overflow-y-auto flex items-center justify-center py-10 px-4 sm:px-6">
            <div className="bg-[#0a0a0a] border border-[#D4AF37]/20 rounded-sm max-w-5xl w-full flex flex-col overflow-hidden shadow-2xl relative my-auto animate-fade-in">
              
              {/* Slide Deck Header Header Bar */}
              <div className="flex items-center justify-between p-5 border-b border-white/5 bg-zinc-950">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] bg-black">
                    <Compass size={14} className="animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-[#D4AF37] uppercase tracking-[0.25em]">Dominion Executive Exhibition Slide-Deck</span>
                    <span className="text-[10px] text-gray-400 font-sans tracking-wide">Study: {activeProjectDetail.title}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveProjectDetail(null)}
                  className="px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-white hover:text-black hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] rounded-sm transition-all duration-300 cursor-pointer"
                >
                  Close Deck
                </button>
              </div>

              {/* Core Presentation Content Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Area: Magnificent Interactive Imagery Frame */}
                <div className="lg:col-span-7 bg-black p-6 sm:p-8 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-white/5 relative">
                  
                  {/* Floating HD Zoom Trigger */}
                  <button 
                    onClick={() => setShowLightboxUrl(displayImage)}
                    className="absolute top-10 right-10 z-10 w-9 h-9 rounded bg-black/85 border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] hover:scale-115 hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
                    title="Zoom Full Definition HD"
                  >
                    <Maximize2 size={13} />
                  </button>

                  <div 
                    className="w-full aspect-[4/3] rounded overflow-hidden border border-white/5 bg-neutral-950 cursor-pointer group/slide relative shadow-lg"
                    onClick={() => setShowLightboxUrl(displayImage)}
                  >
                    <img
                      src={displayImage}
                      alt={displayTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover/slide:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Sub-Gallery Collection Row inside Deck */}
                  {gallery.length > 0 && (
                    <div className="w-full flex flex-col gap-2.5 mt-6 text-left">
                      <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.25em]">
                        Collection Items ({gallery.length}):
                      </span>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                        {gallery.map((gItem) => {
                          const isSel = gItem.id === selectedSubItemId;
                          return (
                            <button
                              key={gItem.id}
                              onClick={() => {
                                setSelectedSubItemId(gItem.id);
                                if (gItem.variations && gItem.variations.length > 0) {
                                  setSelectedVariationId(gItem.variations[0].id);
                                } else {
                                  setSelectedVariationId(null);
                                }
                              }}
                              className={`flex items-center gap-2 p-2 border rounded-sm shrink-0 transition-all cursor-pointer text-left ${
                                isSel ? 'bg-zinc-900 border-[#D4AF37]' : 'bg-[#060606] border-white/5 hover:border-white/10'
                              }`}
                            >
                              <img src={gItem.image} alt={gItem.title} className="w-8 h-8 object-cover rounded-sm border border-white/5" />
                              <div className="flex flex-col">
                                <span className="text-[8.5px] font-bold text-white truncate max-w-[80px]">{gItem.title.replace(' Embroidery', '')}</span>
                                <span className="text-[7.5px] font-mono text-gray-500 uppercase truncate max-w-[80px]">{gItem.clientName.replace(' Nur/Pry Sch, Ire Ekiti', '')}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Design Style Variations selector row */}
                  {currentSubItem?.variations && currentSubItem.variations.length > 0 && (
                    <div className="w-full flex flex-col gap-2 mt-2 text-left">
                      <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.25em]">
                        Design Style Model Variations:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentSubItem.variations.map((v) => {
                          const isVSel = v.id === selectedVariationId;
                          return (
                            <button
                              key={v.id}
                              onClick={() => setSelectedVariationId(v.id)}
                              className={`px-2.5 py-1 text-[8.5px] font-mono border rounded-sm transition-all cursor-pointer ${
                                isVSel ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-semibold' : 'bg-transparent text-gray-400 border-white/5 hover:border-white/15'
                              }`}
                            >
                              {v.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>

                {/* Right Area: Narrative Slide details */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left gap-8 bg-zinc-950/40">
                  
                  {/* Slide Content Description */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="text-[8.5px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] block mb-2">I. Case Narrative</span>
                      <h4 className={`${fontClass} text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug`}>
                        {displayTitle}
                      </h4>
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-1 block">
                        Client Coordinate: {displayClient}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">Concept & Core Brief:</span>
                      <p className="text-gray-300 font-sans text-xs leading-relaxed font-light">
                        {displaySummary}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">Design Strategics:</span>
                      <p className="text-gray-300 font-sans text-xs leading-relaxed font-light">
                        {displayDesignGoals}
                      </p>
                    </div>

                    {/* Deliverables tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {displayDeliverables.map((del, dIdx) => (
                        <span key={dIdx} className="text-[8px] font-mono bg-black text-[#D4AF37]/80 border border-white/5 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical details, Substrates, and Wix Live redirects */}
                  <div className="flex flex-col gap-4 border-t border-white/5 pt-6 mt-2">
                    <div className="flex flex-col gap-2 p-4 bg-black border border-white/5 rounded-sm">
                      <span className="text-[8px] font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                        <Info size={11} />
                        <span>{specs.label}</span>
                      </span>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {specs.items.map((it, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                            <span className="text-[9.5px] font-mono text-gray-400 truncate" title={it}>{it}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Wix Live Redirect Link */}
                    {activeProjectDetail.projectUrl && (
                      <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">Live Presentation Interface:</span>
                        <a
                          href={activeProjectDetail.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-bold font-mono text-[9.5px] uppercase tracking-widest rounded-sm transition-all duration-300 hover:shadow-lg active:scale-95 text-center"
                        >
                          <span>Connect Live Portfolio Interface</span>
                          <ExternalLink size={12} className="shrink-0" />
                        </a>
                      </div>
                    )}
                  </div>

                </div>

              </div>

              {/* Administrative Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center bg-zinc-950 p-4 border-t border-white/5 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#D4AF37]" />
                  <span>Sovereign Identity Protection Synchronized</span>
                </div>
                <span>Case Catalog Metric: DCS_SLD_DECK_PRO</span>
              </div>

            </div>
          </div>
        );
      })()}

      {/* Lightbox / HD zoom Modal */}
      {showLightboxUrl && (
        <div 
          className="fixed inset-0 bg-black/98 z-[100] flex flex-col items-center justify-between p-4"
          onClick={() => setShowLightboxUrl(null)}
        >
          <div className="w-full max-w-5xl flex justify-between items-center py-2 z-10">
            <div className="flex flex-col text-left">
              <span className="text-[8.5px] font-mono text-[#D4AF37] uppercase tracking-widest">DOMINION EXHIBITION ULTRA-HD</span>
              <span className="text-xs text-gray-400 font-sans">Full Substrate Resolution</span>
            </div>
            <button
              onClick={() => setShowLightboxUrl(null)}
              className="px-4 py-2 bg-zinc-900 text-white rounded border border-white/10 text-[9.5px] font-mono uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
            >
              <X size={12} />
              <span>Close HD</span>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center w-full max-h-[80vh] relative p-2 my-auto">
            <img 
              src={showLightboxUrl} 
              alt="High Definition Full Display"
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain border border-white/10 shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="w-full max-w-5xl text-center py-3 border-t border-white/5 text-gray-500 font-mono text-[8px] tracking-wider uppercase">
            Click backdrop or press close to return to exhibition deck
          </div>
        </div>
      )}

    </section>
  );
}
