import React, { useState } from 'react';
import { CMSAppState, ServiceItem, CaseStudy, BlogPost, FAQItem, Testimonial, LeadBooking } from '../types';
import LucideIcon from './LucideIcon';
import { 
  ShieldCheck, Lock, CheckCircle2, TrendingUp, Users, Inbox, HelpCircle, 
  Settings, Image, Plus, Trash2, Edit2, Check, FileText, Layout, Eye, Save, Layers 
} from 'lucide-react';

interface AdminPanelProps {
  state: CMSAppState;
  updateState: (newState: CMSAppState) => void;
  onClose: () => void;
}

export default function AdminPanel({ state, updateState, onClose }: AdminPanelProps) {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdminEmail, setIsAdminEmail] = useState<string>('israelibitoye208@gmail.com');
  const [adminPassword, setAdminPassword] = useState<string>('israelexecutive');
  const [authError, setAuthError] = useState<string>('');

  // Active Admin Menus: 'overview' | 'services' | 'portfolio' | 'blog' | 'leads' | 'faqs' | 'design' | 'seo'
  const [activeMenu, setActiveMenu] = useState<'overview' | 'services' | 'portfolio' | 'blog' | 'leads' | 'faqs' | 'design' | 'seo'>('overview');

  // Multi-CRUD Temporary States
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceFormTemp, setServiceFormTemp] = useState<Partial<ServiceItem>>({});

  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectFormTemp, setProjectFormTemp] = useState<Partial<CaseStudy>>({});

  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [postFormTemp, setPostFormTemp] = useState<Partial<BlogPost>>({});

  const [editingFaqId, setEditingFaqId] = useState<string | null>(null);
  const [faqFormTemp, setFAQFormTemp] = useState<Partial<FAQItem>>({});

  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [testimonialFormTemp, setTestimonialFormTemp] = useState<Partial<Testimonial>>({});

  // Dynamic feedback notices
  const [dashboardNotice, setDashboardNotice] = useState<string>('');

  // Auto-login pre-fill helper
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'israelexecutive') {
      setIsAuthenticated(true);
      setAuthError('');
      triggerNotice('Secure Terminal Session Established.');
    } else {
      setAuthError('Unauthorized Key Coordinate. Please retry.');
    }
  };

  const triggerNotice = (msg: string) => {
    setDashboardNotice(msg);
    setTimeout(() => {
      setDashboardNotice('');
    }, 4500);
  };

  // State Updates Dispatch helper
  const dispatchStateChange = (updatedContext: Partial<CMSAppState>) => {
    const fresh = { ...state, ...updatedContext };
    updateState(fresh);
    // save to local storage
    localStorage.setItem('dominion_creative_studio_cms_state', JSON.stringify(fresh));
  };

  // --- CRUD DISPATCH METHODS ---
  // Services CRUD
  const saveService = () => {
    if (!serviceFormTemp.title) return;
    
    let updated: ServiceItem[];
    if (editingServiceId === 'new') {
      const fresh: ServiceItem = {
        id: 'serv-' + Date.now(),
        title: serviceFormTemp.title || '',
        category: serviceFormTemp.category || 'Strategic Offering',
        description: serviceFormTemp.description || '',
        detailedBenefits: serviceFormTemp.detailedBenefits || ['Bespoke execution framework'],
        icon: serviceFormTemp.icon || 'Sparkles',
        priceEstimate: serviceFormTemp.priceEstimate || 'Custom Quote',
        isActive: true
      };
      updated = [...state.services, fresh];
    } else {
      updated = state.services.map(s => s.id === editingServiceId ? { ...s, ...serviceFormTemp } as ServiceItem : s);
    }

    dispatchStateChange({ services: updated });
    setEditingServiceId(null);
    setServiceFormTemp({});
    triggerNotice('Service standards updated successfully.');
  };

  const deleteService = (id: string) => {
    if (confirm('Verify file purge target?')) {
      const updated = state.services.filter(s => s.id !== id);
      dispatchStateChange({ services: updated });
      triggerNotice('Service record permanently detached.');
    }
  };

  // Case Studies CRUD
  const saveProject = () => {
    if (!projectFormTemp.title) return;

    let updated: CaseStudy[];
    if (editingProjectId === 'new') {
      const fresh: CaseStudy = {
        id: 'proj-' + Date.now(),
        title: projectFormTemp.title || '',
        clientName: projectFormTemp.clientName || '',
        industry: projectFormTemp.industry || 'Bespoke Sector',
        summary: projectFormTemp.summary || '',
        designGoals: projectFormTemp.designGoals || '',
        visualPresentation: {
          heroImage: projectFormTemp.visualPresentation?.heroImage || 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600',
          brandColor: projectFormTemp.visualPresentation?.brandColor || '#D4AF37',
          deliverables: projectFormTemp.visualPresentation?.deliverables || ['Brand Deliverables Suite']
        },
        isActive: true
      };
      updated = [...state.caseStudies, fresh];
    } else {
      updated = state.caseStudies.map(p => p.id === editingProjectId ? { ...p, ...projectFormTemp } as CaseStudy : p);
    }

    dispatchStateChange({ caseStudies: updated });
    setEditingProjectId(null);
    setProjectFormTemp({});
    triggerNotice('Portfolio project schema synced successfully.');
  };

  const deleteProject = (id: string) => {
    if (confirm('Purge project artifact file?')) {
      const updated = state.caseStudies.filter(p => p.id !== id);
      dispatchStateChange({ caseStudies: updated });
      triggerNotice('Portfolio piece detached.');
    }
  };

  // Blog Posts CRUD
  const saveBlogPost = () => {
    if (!postFormTemp.title) return;

    let updated: BlogPost[];
    if (editingPostId === 'new') {
      const fresh: BlogPost = {
        id: 'post-' + Date.now(),
        title: postFormTemp.title || '',
        slug: (postFormTemp.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        excerpt: postFormTemp.excerpt || '',
        content: postFormTemp.content || '',
        category: postFormTemp.category || 'Insights',
        tags: postFormTemp.tags || ['Branding'],
        metaDescription: postFormTemp.metaDescription || '',
        publishedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        status: postFormTemp.status || 'draft',
        featuredImage: postFormTemp.featuredImage || 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600',
        readTime: postFormTemp.readTime || '3 min read'
      };
      updated = [...state.blogPosts, fresh];
    } else {
      updated = state.blogPosts.map(bp => bp.id === editingPostId ? { ...bp, ...postFormTemp } as BlogPost : bp);
    }

    dispatchStateChange({ blogPosts: updated });
    setEditingPostId(null);
    setPostFormTemp({});
    triggerNotice('Editorial blueprint synced successfully.');
  };

  const deleteBlogPost = (id: string) => {
    if (confirm('Verify editorial file purge?')) {
      const updated = state.blogPosts.filter(bp => bp.id !== id);
      dispatchStateChange({ blogPosts: updated });
      triggerNotice('Editorial article detached.');
    }
  };

  // FAQs CRUD
  const saveFAQ = () => {
    if (!faqFormTemp.question) return;

    let updated: FAQItem[];
    if (editingFaqId === 'new') {
      const fresh: FAQItem = {
        id: 'faq-' + Date.now(),
        question: faqFormTemp.question || '',
        answer: faqFormTemp.answer || '',
        category: faqFormTemp.category || 'Strategic Insight',
        isActive: true
      };
      updated = [...state.faqs, fresh];
    } else {
      updated = state.faqs.map(f => f.id === editingFaqId ? { ...f, ...faqFormTemp } as FAQItem : f);
    }

    dispatchStateChange({ faqs: updated });
    setEditingFaqId(null);
    setFAQFormTemp({});
    triggerNotice('Accordions layout synchronized.');
  };

  const deleteFAQ = (id: string) => {
    const updated = state.faqs.filter(f => f.id !== id);
    dispatchStateChange({ faqs: updated });
    triggerNotice('FAQ node purged.');
  };

  // Testimonials CRUD
  const saveTestimonial = () => {
    if (!testimonialFormTemp.name) return;

    let updated: Testimonial[];
    if (editingTestimonialId === 'new') {
      const fresh: Testimonial = {
        id: 'test-' + Date.now(),
        name: testimonialFormTemp.name || '',
        role: testimonialFormTemp.role || 'Partner',
        company: testimonialFormTemp.company || 'Enterprise',
        content: testimonialFormTemp.content || '',
        rating: testimonialFormTemp.rating || 5,
        isActive: true
      };
      updated = [...state.testimonials, fresh];
    } else {
      updated = state.testimonials.map(t => t.id === editingTestimonialId ? { ...t, ...testimonialFormTemp } as Testimonial : t);
    }

    dispatchStateChange({ testimonials: updated });
    setEditingTestimonialId(null);
    setTestimonialFormTemp({});
    triggerNotice('Client quote matrix saved.');
  };

  const deleteTestimonial = (id: string) => {
    const updated = state.testimonials.filter(t => t.id !== id);
    dispatchStateChange({ testimonials: updated });
    triggerNotice('Client feedback record detached.');
  };

  // Update Lead status
  const updateLeadStatus = (leadId: string, status: LeadBooking['status']) => {
    const updated = state.leads.map(l => l.id === leadId ? { ...l, status } : l);
    dispatchStateChange({ leads: updated });
    triggerNotice('Lead tracking coordinates updated.');
  };

  const deleteLeadRecord = (id: string) => {
    if (confirm('Permanently purge lead client records?')) {
      const updated = state.leads.filter(l => l.id !== id);
      dispatchStateChange({ leads: updated });
      triggerNotice('Lead coordinate detached.');
    }
  };

  // Section order customized re-arrangement
  const toggleSection = (secId: string) => {
    const updated = state.sections.map(sec => sec.id === secId ? { ...sec, enabled: !sec.enabled } : sec);
    dispatchStateChange({ sections: updated });
    triggerNotice('Core section visibility toggled.');
  };

  const raiseSectionOrder = (index: number) => {
    if (index === 0) return;
    const cloned = [...state.sections];
    // swap
    const temp = cloned[index];
    cloned[index] = cloned[index - 1];
    cloned[index - 1] = temp;
    
    // rewrite orders based on simple indices
    const updated = cloned.map((sec, i) => ({ ...sec, order: i }));
    dispatchStateChange({ sections: updated });
    triggerNotice('Homepage sections catalog reordered.');
  };

  // Simple unauthenticated view
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] bg-black vintage-overlay flex items-center justify-center py-20 px-4 text-left">
        <div className="bg-[#111111] border border-[#D4AF37]/35 rounded-lg max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
          
          <div className="flex flex-col items-center justify-center text-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-black flex items-center justify-center text-[#D4AF37]">
              <Lock size={20} />
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-widest">
                STUDIO WORKSPACE ACCESS
              </h3>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Dominion CM System • israelibitoye208@gmail.com
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono uppercase tracking-widest text-[#D4AF37]">Admin Email:</label>
              <input
                type="email"
                required
                disabled
                value={isAdminEmail}
                className="bg-black/90 border border-white/10 rounded-sm text-xs px-3.5 py-2.5 text-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5 font-sans">
              <label className="text-[9px] font-mono uppercase tracking-widest text-[#D4AF37]">Terminal Keycode:</label>
              <input
                type="password"
                required
                placeholder="Keycode"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="bg-black border border-white/20 rounded-sm text-xs px-3.5 py-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#D4AF37] transition-all"
              />
              <span className="text-[9px] font-mono text-gray-500 uppercase">Pre-filled default: israelexecutive</span>
            </div>

            {authError && (
              <span className="text-[10px] font-mono text-red-500 uppercase text-center mt-1">
                {authError}
              </span>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold font-mono text-xs uppercase tracking-widest rounded-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/5 mt-2"
            >
              <ShieldCheck size={14} />
              <span>Unlock Admin Console</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="w-full text-center text-gray-500 hover:text-white transition-colors text-[10px] font-mono uppercase mt-2"
            >
              Return to Website Live Preview
            </button>

          </form>

        </div>
      </div>
    );
  }

  // --- Real Authenticated Dashboard layout ---
  
  // JSON-LD Schema.org Generator Preview
  const schemaJsonLD = {
    "@context": "https://schema.org",
    "@type": "CreativeAgency",
    "name": "Dominion Creative Studio",
    "url": "https://dominioncreativestudio.com",
    "telephone": state.contact.phone,
    "email": state.contact.email,
    "image": state.caseStudies[0]?.visualPresentation.heroImage || "",
    "description": "Luxury boutique website development, typography rules systems and printed merchandise layout design.",
    "brand": "Dominion Creative Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Creative services Booklet",
      "itemListElement": state.services.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  // XML Sitemap Preview Mockup
  const xmlSitemapPreview = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dominioncreativestudio.com/</loc>
    <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${state.blogPosts.map(bp => `  <url>
    <loc>https://dominioncreativestudio.com/blog/${bp.slug}</loc>
    <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n  ')}
</urlset>
  `;

  return (
    <div className="min-h-[85vh] bg-black text-white py-12 px-4 sm:px-8 text-left">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Banner header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-black/60 flex items-center justify-center text-[#D4AF37]">
              <Settings size={18} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] font-semibold">
                Protected CMS Studio Terminal
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-wider text-white">
                Israel Bitoye's Workspace
              </h3>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setAdminPassword('');
              }}
              className="px-4 py-2 border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-red-500 font-mono text-[10px] uppercase tracking-wider rounded transition-all cursor-pointer"
            >
              Lock Terminal
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#D4AF37] text-black font-semibold font-mono text-[10px] uppercase tracking-wider rounded transition-all cursor-pointer hover:bg-[#C9A227]"
            >
              Publish & Exit
            </button>
          </div>
        </div>

        {/* Notices box if active */}
        {dashboardNotice && (
          <div className="p-3 border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37] font-mono text-[10px] uppercase tracking-wider rounded animate-pulse">
            {dashboardNotice}
          </div>
        )}

        {/* Workspace Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Admin Nav Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-1 bg-[#111111] p-4 rounded-lg border border-white/5 h-max font-mono text-xs uppercase tracking-widest text-[#B8B8B8]">
            <span className="text-[10px] text-gray-500 px-3 pb-2 block border-b border-white/5 font-bold mb-2">Core Ledger Modules</span>
            
            <button
              onClick={() => setActiveMenu('overview')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center gap-2 cursor-pointer ${
                activeMenu === 'overview' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <TrendingUp size={13} />
              <span>Desk Summary</span>
            </button>

            <button
              onClick={() => setActiveMenu('leads')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center justify-between cursor-pointer ${
                activeMenu === 'leads' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Inbox size={13} />
                <span>Leads & Bookings</span>
              </span>
              <span className="text-[10px] bg-[#D4AF37] text-black rounded px-1.5 font-bold">
                {state.leads.filter(l => l.status === 'pending').length}
              </span>
            </button>

            <button
              onClick={() => setActiveMenu('services')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center gap-2 cursor-pointer ${
                activeMenu === 'services' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <Layers size={13} />
              <span>Services Bento</span>
            </button>

            <button
              onClick={() => setActiveMenu('portfolio')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center gap-2 cursor-pointer ${
                activeMenu === 'portfolio' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <Image size={13} />
              <span>Case Showcase</span>
            </button>

            <button
              onClick={() => setActiveMenu('blog')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center gap-2 cursor-pointer ${
                activeMenu === 'blog' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <FileText size={13} />
              <span>Editorial Blog</span>
            </button>

            <button
              onClick={() => setActiveMenu('faqs')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center gap-2 cursor-pointer ${
                activeMenu === 'faqs' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <HelpCircle size={13} />
              <span>Testimonials & FAQ</span>
            </button>

            <span className="text-[10px] text-gray-500 px-3 pt-4 pb-2 block border-y border-white/5 font-bold my-2">Workspace layout</span>

            <button
              onClick={() => setActiveMenu('design')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center gap-2 cursor-pointer ${
                activeMenu === 'design' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <Layout size={13} />
              <span>Themes & Ordering</span>
            </button>

            <button
              onClick={() => setActiveMenu('seo')}
              className={`w-full py-2.5 px-3 rounded text-left transition-all flex items-center gap-2 cursor-pointer ${
                activeMenu === 'seo' ? 'bg-[#D4AF37]/10 text-white border-l-2 border-[#D4AF37]' : 'hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <Eye size={13} />
              <span>SEO, Schema & Sitemaps</span>
            </button>

          </div>

          {/* Active Workspace Panel content (lg:col-span-9) */}
          <div className="lg:col-span-9 bg-[#111111] p-6 rounded-lg border border-white/5 min-h-[500px]">
            
            {/* OVERVIEW MODULE */}
            {activeMenu === 'overview' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex flex-col">
                  <h4 className="text-white text-base font-semibold font-sans">Strategic desk Statistics</h4>
                  <p className="text-xs text-gray-400 mt-1">Real-time status updates from stored lead databases and search compliance.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="bg-black p-4 rounded border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">TOTAL LEADS LOADED</span>
                    <span className="text-3xl font-mono text-[#D4AF37] font-bold">{state.leads.length}</span>
                    <span className="text-[8px] font-mono text-gray-600 block mt-1">From Dynamic Forms</span>
                  </div>

                  <div className="bg-black p-4 rounded border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">PENDING CONSULTATIONS</span>
                    <span className="text-3xl font-mono text-white font-bold">
                      {state.leads.filter(l => l.status === 'pending').length}
                    </span>
                    <span className="text-[8px] font-mono text-[#D4AF37] block mt-1">Needs Israel's Attention</span>
                  </div>

                  <div className="bg-black p-4 rounded border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">ACTIVE SYSTEM SERVICES</span>
                    <span className="text-3xl font-mono text-[#D4AF37] font-bold">
                      {state.services.filter(s => s.isActive).length}
                    </span>
                    <span className="text-[8px] font-mono text-gray-600 block mt-1">Rendered on Frontend</span>
                  </div>

                  <div className="bg-black p-4 rounded border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">SUBSCRIBERS COUNT</span>
                    <span className="text-3xl font-mono text-white font-bold">{state.subscribers.length}</span>
                    <span className="text-[8px] font-mono text-gray-600 block mt-1">Registered VIP Emails</span>
                  </div>
                </div>

                <div className="border border-white/5 bg-black p-4 rounded flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Active Workspace System Monitor</span>
                  <div className="flex flex-col gap-2 font-mono text-[10px] text-gray-500">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>Database Engine Synchronized (Client-Side Local Storage persistent)</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>Prereq checklist matching structural rules: Standard-Green</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <span>API Endpoints Listening on local loop (Dev Server Port: 3000)</span>
                    </p>
                  </div>
                </div>

                {/* Listing Subscribers list directly in desk view */}
                <div className="flex flex-col gap-3 mt-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37]">Newsletter VIP subscribers list:</span>
                  {state.subscribers.length === 0 ? (
                    <span className="text-xs text-gray-500 font-mono">No VIP emails logged yet.</span>
                  ) : (
                    <div className="flex flex-col gap-2 bg-black/40 p-3 rounded text-xs text-gray-300 font-mono">
                      {state.subscribers.map((s, idx) => (
                        <div key={s.id} className="flex justify-between items-center border-b border-white/5 pb-1">
                          <span>{idx + 1}. {s.email}</span>
                          <span className="text-[9px] text-gray-600">Subscribed: {new Date(s.subscribedAt).toLocaleDateString()}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* LEADS & BOOKINGS MANAGER */}
            {activeMenu === 'leads' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <h4 className="text-white text-base font-semibold font-sans">Form Submissions Ledger</h4>
                  <span className="font-mono text-[10px] text-gray-500 bg-black py-1 px-2.5 rounded border border-white/5 uppercase">
                    ACTIVE CONTROL PANEL
                  </span>
                </div>

                {state.leads.length === 0 ? (
                  <div className="text-center p-12 border border-white/5 rounded bg-black text-gray-500 font-mono text-xs uppercase tracking-widest">
                    No booking inquiries on record.
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {state.leads.map((lead) => (
                      <div key={lead.id} className="bg-black/80 rounded border border-white/10 p-4 flex flex-col gap-3 text-xs">
                        
                        {/* Title raw */}
                        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-white/5 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] px-2 py-0.5 rounded text-[10px] uppercase">
                              {lead.type}
                            </span>
                            <span className="text-white font-semibold text-sm">{lead.name}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono text-gray-500">Status:</span>
                            <select
                              value={lead.status}
                              onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                              className="bg-black border border-white/20 rounded-sm text-[10px] font-mono px-2 py-0.5 text-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
                            >
                              <option value="pending">PENDING ACTION</option>
                              <option value="reviewed">REVIEWED BRIEF</option>
                              <option value="contacted">CONTACTED PROSPECT</option>
                              <option value="completed">COMPLETED CONTRACT</option>
                            </select>
                          </div>
                        </div>

                        {/* Customer contact coordinates */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-gray-400 font-mono text-[10px] uppercase">
                          <span>Email: <a href={`mailto:${lead.email}`} className="text-white hover:underline">{lead.email}</a></span>
                          <span>Phone: <a href={`tel:${lead.phone}`} className="text-white hover:underline">{lead.phone}</a></span>
                          <span>Fast Sync: {lead.whatsappConsent ? 'WhatsApp Allowed' : 'Strict Call-Only'}</span>
                        </div>

                        {/* Booking specifics details */}
                        {(lead.date || lead.serviceId || lead.budget) && (
                          <div className="bg-white/[0.02] border border-white/5 rounded p-2 text-[10px] font-mono grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {lead.serviceId && (
                              <span>SERVICE SPEC: <strong className="text-white">{state.services.find(s => s.id === lead.serviceId)?.title || lead.serviceId}</strong></span>
                            )}
                            {lead.date && (
                              <span>APPOINTMENT: <strong className="text-white">{lead.date} & {lead.time}</strong></span>
                            )}
                            {lead.budget && (
                              <span>EST. BUDGET: <strong className="text-white">{lead.budget}</strong></span>
                            )}
                          </div>
                        )}

                        <div className="text-left py-1 text-gray-300">
                          <span className="text-[9px] font-mono text-gray-500 uppercase block mb-1">Discussion Brief Scope:</span>
                          <p className="font-sans font-light whitespace-pre-wrap">{lead.message || 'No description provided.'}</p>
                        </div>

                        <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                          <span className="text-[9px] font-mono text-gray-600 uppercase">
                            Dispatched: {new Date(lead.createdAt).toLocaleDateString()} at {new Date(lead.createdAt).toLocaleTimeString()}
                          </span>
                          
                          <button
                            onClick={() => deleteLeadRecord(lead.id)}
                            className="text-red-500/80 hover:text-red-500 transition-colors flex items-center gap-1 font-mono text-[9px] uppercase cursor-pointer"
                          >
                            <Trash2 size={10} />
                            <span>Purge record</span>
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SERVICES ENGINES CRUD */}
            {activeMenu === 'services' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white text-base font-semibold font-sans">Signature offerings CRUD Matrix</h4>
                    <p className="text-xs text-gray-400 mt-1">Configure bento boxes, spec sheets, and price metrics.</p>
                  </div>
                  
                  {!editingServiceId && (
                    <button
                      onClick={() => {
                        setEditingServiceId('new');
                        setServiceFormTemp({
                          title: '',
                          category: 'Print Production',
                          description: '',
                          icon: 'Sparkles',
                          priceEstimate: 'Custom Quote',
                          detailedBenefits: ['First premium deliverable catalog line']
                        });
                      }}
                      className="px-4 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-black rounded font-mono text-[10px] uppercase font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus size={11} />
                      <span>Create Custom Spec</span>
                    </button>
                  )}
                </div>

                {editingServiceId ? (
                  /* Editor Form */
                  <div className="bg-black/40 border border-white/10 rounded p-6 flex flex-col gap-4 text-xs font-sans">
                    <span className="text-xs uppercase font-mono text-[#D4AF37]">
                      {editingServiceId === 'new' ? 'Initialize Spec catalog' : 'Refine Service configuration'}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Spec Title: *</label>
                        <input
                          type="text"
                          value={serviceFormTemp.title || ''}
                          onChange={(e) => setServiceFormTemp({ ...serviceFormTemp, title: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Icon ID (Lucide library):</label>
                        <select
                          value={serviceFormTemp.icon || 'Sparkles'}
                          onChange={(e) => setServiceFormTemp({ ...serviceFormTemp, icon: e.target.value })}
                          className="bg-black border border-[#D4AF37]/30 text-white rounded px-3 py-2"
                        >
                          <option value="Monitor">Monitor (Luxury Web)</option>
                          <option value="Sparkles">Sparkles (Luxury Brand ID)</option>
                          <option value="Printer">Printer (Corporate Solutions)</option>
                          <option value="Maximize">Maximize (Large Format)</option>
                          <option value="BookOpen">BookOpen (Publishing)</option>
                          <option value="Shirt">Shirt (Embroidery Merchandise)</option>
                          <option value="Palette">Palette (Graphic Masterclass)</option>
                          <option value="Calendar">Calendar (Flyer Displays)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Category Label:</label>
                        <input
                          type="text"
                          value={serviceFormTemp.category || ''}
                          onChange={(e) => setServiceFormTemp({ ...serviceFormTemp, category: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Retainer Frame:</label>
                        <input
                          type="text"
                          value={serviceFormTemp.priceEstimate || ''}
                          onChange={(e) => setServiceFormTemp({ ...serviceFormTemp, priceEstimate: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400">Short description (for bento cards limits):</label>
                      <textarea
                        rows={3}
                        value={serviceFormTemp.description || ''}
                        onChange={(e) => setServiceFormTemp({ ...serviceFormTemp, description: e.target.value })}
                        className="bg-black border border-white/10 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex gap-3 justify-end border-t border-white/5 pt-4">
                      <button
                        onClick={() => { setEditingServiceId(null); setServiceFormTemp({}); }}
                        className="px-4 py-2 border border-white/10 text-gray-400 hover:text-white rounded text-[10px] font-mono uppercase cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveService}
                        className="px-5 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold rounded text-[10px] font-mono uppercase cursor-pointer"
                      >
                        Save Configuration
                      </button>
                    </div>

                  </div>
                ) : (
                  /* Standard Lists view */
                  <div className="flex flex-col gap-3">
                    {state.services.map((serv) => (
                      <div key={serv.id} className="bg-black p-4 rounded border border-white/5 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-[#111] flex items-center justify-center text-[#D4AF37]">
                            <LucideIcon name={serv.icon} size={15} />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-white">{serv.title}</span>
                            <span className="text-[9px] font-mono text-gray-500 uppercase">{serv.category} • {serv.priceEstimate}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingServiceId(serv.id);
                              setServiceFormTemp(serv);
                            }}
                            className="p-2 border border-white/10 hover:border-white/30 text-gray-400 hover:text-white rounded cursor-pointer"
                            title="Edit Spec parameters"
                          >
                            <Edit2 size={12} />
                          </button>
                          <button
                            onClick={() => deleteService(serv.id)}
                            className="p-2 border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-red-500 rounded cursor-pointer"
                            title="Purge spec"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* CASE STUDIES MANAGER */}
            {activeMenu === 'portfolio' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white text-base font-semibold font-sans">Interactive Portfolio Case manager</h4>
                    <p className="text-xs text-gray-400 mt-1">Refine customer showcases, goals screenshots, industry scopes.</p>
                  </div>

                  {!editingProjectId && (
                    <button
                      onClick={() => {
                        setEditingProjectId('new');
                        setProjectFormTemp({
                          title: '',
                          clientName: '',
                          industry: 'Branding Concept',
                          summary: '',
                          designGoals: '',
                          visualPresentation: {
                            heroImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600',
                            brandColor: '#D4AF37',
                            deliverables: ['First luxury layout', 'Tactile branding embroidery']
                          }
                        });
                      }}
                      className="px-4 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-black rounded font-mono text-[10px] uppercase font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus size={11} />
                      <span>Add Case Showcase</span>
                    </button>
                  )}
                </div>

                {editingProjectId ? (
                  <div className="bg-black/40 border border-white/10 rounded p-6 flex flex-col gap-4 text-xs font-sans">
                    <span className="text-xs uppercase font-mono text-[#D4AF37]">
                      {editingProjectId === 'new' ? 'Add Creative Showcase' : 'Edit Showcase Parameters'}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Showcase Title: *</label>
                        <input
                          type="text"
                          value={projectFormTemp.title || ''}
                          onChange={(e) => setProjectFormTemp({ ...projectFormTemp, title: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Industry: *</label>
                        <input
                          type="text"
                          value={projectFormTemp.industry || ''}
                          onChange={(e) => setProjectFormTemp({ ...projectFormTemp, industry: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Client Name: *</label>
                        <input
                          type="text"
                          value={projectFormTemp.clientName || ''}
                          onChange={(e) => setProjectFormTemp({ ...projectFormTemp, clientName: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Unsplash Hero Image URL:</label>
                        <input
                          type="text"
                          value={projectFormTemp.visualPresentation?.heroImage || ''}
                          onChange={(e) => {
                            const rootVis = projectFormTemp.visualPresentation || { heroImage: '', brandColor: '#D4AF37', deliverables: [] };
                            setProjectFormTemp({
                              ...projectFormTemp,
                              visualPresentation: { ...rootVis, heroImage: e.target.value }
                            });
                          }}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400">Live Showcase or Google Drive Link:</label>
                      <input
                        type="text"
                        placeholder="e.g., https://drive.google.com/drive/... or website link"
                        value={projectFormTemp.projectUrl || ''}
                        onChange={(e) => setProjectFormTemp({ ...projectFormTemp, projectUrl: e.target.value })}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400">Brief Overview Summary:</label>
                      <textarea
                        rows={3}
                        value={projectFormTemp.summary || ''}
                        onChange={(e) => setProjectFormTemp({ ...projectFormTemp, summary: e.target.value })}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400">Strategic Design Goals & Output:</label>
                      <textarea
                        rows={3}
                        value={projectFormTemp.designGoals || ''}
                        onChange={(e) => setProjectFormTemp({ ...projectFormTemp, designGoals: e.target.value })}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                      />
                    </div>

                    <div className="flex gap-3 justify-end border-t border-white/5 pt-4">
                      <button
                        onClick={() => { setEditingProjectId(null); setProjectFormTemp({}); }}
                        className="px-4 py-2 border border-white/10 text-gray-400 hover:text-white rounded text-[10px] font-mono uppercase cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveProject}
                        className="px-5 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold rounded text-[10px] font-mono uppercase cursor-pointer"
                      >
                        Save Showcase
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {state.caseStudies.map((project) => (
                      <div key={project.id} className="bg-black p-4 rounded border border-white/5 flex items-center justify-between text-xs">
                        <div className="flex gap-3 items-center">
                          <img
                            src={project.visualPresentation.heroImage}
                            alt=""
                            className="w-12 h-8 rounded object-cover"
                          />
                          <div className="flex flex-col">
                            <span className="font-semibold text-white">{project.title}</span>
                            <span className="text-[9px] font-mono text-gray-500 uppercase">{project.industry} • Client: {project.clientName}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingProjectId(project.id);
                              setProjectFormTemp(project);
                            }}
                            className="p-2 border border-white/10 hover:border-white/30 text-gray-400 hover:text-white rounded cursor-pointer"
                          >
                            <Edit2 size={12} />
                          </button>
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="p-2 border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-red-500 rounded cursor-pointer"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* EDITORIAL BLOG POSTS CRUD */}
            {activeMenu === 'blog' && (
              <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white text-base font-semibold font-sans">Insights editorial writer</h4>
                    <p className="text-xs text-gray-400 mt-1">Create blog guides with SEO fields, draft controls, categories.</p>
                  </div>

                  {!editingPostId && (
                    <button
                      onClick={() => {
                        setEditingPostId('new');
                        setPostFormTemp({
                          title: '',
                          excerpt: '',
                          content: '',
                          category: 'Brand Strategy',
                          tags: ['Branding', 'Luxury'],
                          metaDescription: '',
                          status: 'draft',
                          featuredImage: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600',
                          readTime: '3 min read'
                        });
                      }}
                      className="px-4 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-black rounded font-mono text-[10px] uppercase font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus size={11} />
                      <span>Write Article</span>
                    </button>
                  )}
                </div>

                {editingPostId ? (
                  <div className="bg-black/40 border border-white/10 rounded p-6 flex flex-col gap-4 text-xs font-sans">
                    <span className="text-xs uppercase font-mono text-[#D4AF37]">
                      {editingPostId === 'new' ? 'Compose brand insight' : 'Edit Article structure'}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Article Title: *</label>
                        <input
                          type="text"
                          value={postFormTemp.title || ''}
                          onChange={(e) => setPostFormTemp({ ...postFormTemp, title: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Status Workflow:</label>
                        <select
                          value={postFormTemp.status || 'draft'}
                          onChange={(e) => setPostFormTemp({ ...postFormTemp, status: e.target.value as any })}
                          className="bg-black border border-white/10 text-[#D4AF37] rounded px-3 py-2"
                        >
                          <option value="draft">STILL DRAFTING</option>
                          <option value="published">LIVE & COMPLIANT PUBLISHED</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Category Tag:</label>
                        <input
                          type="text"
                          value={postFormTemp.category || ''}
                          onChange={(e) => setPostFormTemp({ ...postFormTemp, category: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Featured Image url:</label>
                        <input
                          type="text"
                          value={postFormTemp.featuredImage || ''}
                          onChange={(e) => setPostFormTemp({ ...postFormTemp, featuredImage: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 font-mono">
                      <label className="text-[10px] text-gray-400">Meta Google SEO Description: *</label>
                      <input
                        type="text"
                        value={postFormTemp.metaDescription || ''}
                        onChange={(e) => setPostFormTemp({ ...postFormTemp, metaDescription: e.target.value })}
                        className="bg-black border border-white/20 rounded px-3 py-2 text-white text-xs"
                        maxLength={160}
                        placeholder="Google desktop search snippet preview (max 160 characters)"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400">Excerpt / Intro:</label>
                      <textarea
                        rows={2}
                        value={postFormTemp.excerpt || ''}
                        onChange={(e) => setPostFormTemp({ ...postFormTemp, excerpt: e.target.value })}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400">Article Markdown Content (Use ### headers or double spacing):</label>
                      <textarea
                        rows={8}
                        value={postFormTemp.content || ''}
                        onChange={(e) => setPostFormTemp({ ...postFormTemp, content: e.target.value })}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white font-mono text-xs leading-relaxed"
                      />
                    </div>

                    <div className="flex gap-3 justify-end border-t border-white/5 pt-4">
                      <button
                        onClick={() => { setEditingPostId(null); setPostFormTemp({}); }}
                        className="px-4 py-2 border border-white/10 text-gray-400 hover:text-white rounded text-[10px] font-mono uppercase cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveBlogPost}
                        className="px-5 py-2 bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold rounded text-[10px] font-mono uppercase cursor-pointer"
                      >
                        Save Article
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {state.blogPosts.map((post) => (
                      <div key={post.id} className="bg-black p-4 rounded border border-white/5 flex items-center justify-between text-xs">
                        <div className="flex gap-3 items-center">
                          <img
                            src={post.featuredImage}
                            alt=""
                            className="w-12 h-8 rounded object-cover"
                          />
                          <div className="flex flex-col">
                            <span className="font-semibold text-white">{post.title}</span>
                            <span className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-2">
                              <span>Tags: #{post.tags.join(', #')}</span>
                              <span className="text-[#D4AF37]">/</span>
                              <span className={post.status === 'published' ? 'text-green-500' : 'text-yellow-600'}>
                                {post.status.toUpperCase()}
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingPostId(post.id);
                              setPostFormTemp(post);
                            }}
                            className="p-2 border border-white/10 hover:border-white/30 text-gray-400 hover:text-white rounded cursor-pointer"
                          >
                            <Edit2 size={12} />
                          </button>
                          <button
                            onClick={() => deleteBlogPost(post.id)}
                            className="p-2 border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-red-500 rounded cursor-pointer"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TESTIMONIALS & FAQS MANAGERS */}
            {activeMenu === 'faqs' && (
              <div className="flex flex-col gap-10 text-left">
                
                {/* FAQs Submodule */}
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div>
                      <h4 className="text-white text-base font-semibold font-sans">Frequently Asked Questions Ledger</h4>
                      <p className="text-xs text-gray-400">Configure questions, category indexes, answer guidelines.</p>
                    </div>

                    {!editingFaqId && (
                      <button
                        onClick={() => {
                          setEditingFaqId('new');
                          setFAQFormTemp({ question: '', answer: '', category: 'General' });
                        }}
                        className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#C9A227] text-black rounded font-mono text-[9px] uppercase font-bold cursor-pointer"
                      >
                        Add FAQ node
                      </button>
                    )}
                  </div>

                  {editingFaqId ? (
                    <div className="bg-black/40 border border-white/10 rounded p-4 flex flex-col gap-3 text-xs">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">FAQ Question: *</label>
                        <input
                          type="text"
                          value={faqFormTemp.question || ''}
                          onChange={(e) => setFAQFormTemp({ ...faqFormTemp, question: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">FAQ Category Group:</label>
                        <input
                          type="text"
                          value={faqFormTemp.category || ''}
                          onChange={(e) => setFAQFormTemp({ ...faqFormTemp, category: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Strategic Answer: *</label>
                        <textarea
                          rows={3}
                          value={faqFormTemp.answer || ''}
                          onChange={(e) => setFAQFormTemp({ ...faqFormTemp, answer: e.target.value })}
                          className="bg-black border border-white/10 rounded px-3 py-2 text-white"
                        />
                      </div>

                      <div className="flex gap-2 justify-end">
                        <button onClick={() => { setEditingFaqId(null); setFAQFormTemp({}); }} className="px-3 py-1.5 text-gray-400 font-mono text-[9px] uppercase cursor-pointer">Cancel</button>
                        <button onClick={saveFAQ} className="px-4 py-1.5 bg-[#D4AF37] text-black font-semibold font-mono text-[9px] uppercase cursor-pointer">Sync FAQ</button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2">
                      {state.faqs.map(faq => (
                        <div key={faq.id} className="bg-black p-3 rounded border border-white/5 flex items-center justify-between text-xs">
                          <div className="flex flex-col">
                            <span className="font-semibold text-white">{faq.question}</span>
                            <span className="text-[9px] font-mono text-gray-500 uppercase">CATEGORY: {faq.category}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button onClick={() => { setEditingFaqId(faq.id); setFAQFormTemp(faq); }} className="p-1.5 border border-white/10 text-gray-400 hover:text-white rounded cursor-pointer"><Edit2 size={11} /></button>
                            <button onClick={() => deleteFAQ(faq.id)} className="p-1.5 border border-white/10 text-gray-400 hover:text-red-500 rounded cursor-pointer"><Trash2 size={11} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Testimonials Submodule */}
                <div className="flex flex-col gap-5 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white text-base font-semibold font-sans">Corporate client reviews</h4>
                      <p className="text-xs text-gray-400">Manage accolades, star rankings, brand metadata.</p>
                    </div>

                    {!editingTestimonialId && (
                      <button
                        onClick={() => {
                          setEditingTestimonialId('new');
                          setTestimonialFormTemp({ name: '', role: 'CEO', company: '', content: '', rating: 5 });
                        }}
                        className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#C9A227] text-black rounded font-mono text-[9px] uppercase font-bold cursor-pointer"
                      >
                        Add review
                      </button>
                    )}
                  </div>

                  {editingTestimonialId ? (
                    <div className="bg-black/40 border border-white/10 rounded p-4 flex flex-col gap-3 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-gray-400 font-bold">Client Name: *</label>
                          <input
                            type="text"
                            value={testimonialFormTemp.name || ''}
                            onChange={(e) => setTestimonialFormTemp({ ...testimonialFormTemp, name: e.target.value })}
                            className="bg-black border border-white/10 rounded px-2.5 py-1.5 text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-gray-400">Position / Company:</label>
                          <input
                            type="text"
                            value={`${testimonialFormTemp.role || ''} @ ${testimonialFormTemp.company || ''}`}
                            onChange={(e) => {
                              const bits = e.target.value.split(' @ ');
                              setTestimonialFormTemp({
                                ...testimonialFormTemp,
                                role: bits[0] || 'Executive',
                                company: bits[1] || 'Luxe Group'
                              });
                            }}
                            className="bg-black border border-white/10 rounded px-2.5 py-1.5 text-white"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400">Review Quote: *</label>
                        <textarea
                          rows={3}
                          value={testimonialFormTemp.content || ''}
                          onChange={(e) => setTestimonialFormTemp({ ...testimonialFormTemp, content: e.target.value })}
                          className="bg-black border border-white/10 rounded px-2.5 py-1.5 text-white"
                        />
                      </div>

                      <div className="flex gap-2 justify-end">
                        <button onClick={() => { setEditingTestimonialId(null); setTestimonialFormTemp({}); }} className="px-3 py-1.5 text-gray-400 font-mono text-[9px] uppercase cursor-pointer">Cancel</button>
                        <button onClick={saveTestimonial} className="px-4 py-1.5 bg-[#D4AF37] text-black font-semibold font-mono text-[9px] uppercase cursor-pointer">Sync Review</button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2">
                      {state.testimonials.map(t => (
                        <div key={t.id} className="bg-black p-3 rounded border border-white/5 flex items-center justify-between text-xs">
                          <div className="flex flex-col">
                            <span className="font-semibold text-white">{t.name}</span>
                            <span className="text-[9px] font-mono text-gray-500 uppercase">{t.role} at {t.company}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button onClick={() => { setEditingTestimonialId(t.id); setTestimonialFormTemp(t); }} className="p-1.5 border border-white/10 text-gray-400 hover:text-white rounded cursor-pointer"><Edit2 size={11} /></button>
                            <button onClick={() => deleteTestimonial(t.id)} className="p-1.5 border border-white/10 text-gray-400 hover:text-red-500 rounded cursor-pointer"><Trash2 size={11} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* DESIGN CUSTOMIZER & SECTIONS ORDERING */}
            {activeMenu === 'design' && (
              <div className="flex flex-col gap-6 text-left text-xs font-sans">
                
                {/* Visual Settings */}
                <div className="flex flex-col gap-4 border-b border-white/5 pb-6">
                  <div>
                    <h4 className="text-white text-base font-semibold">Luxury Brand Themes & Colors</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Update official agency branding colors, details, and layout headings dynamically.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 font-mono">
                      <label className="text-gray-400 uppercase text-[9px]">Gold Accent Color Code HEX:</label>
                      <input
                        type="text"
                        value={state.visual.accentGold}
                        onChange={(e) => {
                          const vis = { ...state.visual, accentGold: e.target.value };
                          dispatchStateChange({ visual: vis });
                        }}
                        className="bg-black border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 font-mono">
                      <label className="text-gray-400 uppercase text-[9px]">Core Heading Font:</label>
                      <select
                        value={state.visual.fontHeadingStyle}
                        onChange={(e) => {
                          const vis = { ...state.visual, fontHeadingStyle: e.target.value as any };
                          dispatchStateChange({ visual: vis });
                        }}
                        className="bg-black border border-white/15 text-white rounded px-3 py-2 focus:outline-none"
                      >
                        <option value="serif">Playfair Display (Luxury Editorial Serif)</option>
                        <option value="sans">Inter / Montserrat (High Contrast Sans)</option>
                        <option value="mono">JetBrains Mono (Technical Brutalist)</option>
                      </select>
                    </div>
                  </div>

                  {/* Executive Identity Portrait Fallbacks */}
                  <div className="border-t border-white/5 pt-4 mt-2">
                    <h5 className="text-white text-xs font-semibold mb-2 font-sans">Executive Identity Portrait & 3D Fallback System</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5 font-mono">
                        <label className="text-gray-400 uppercase text-[9px]">Custom Founder Portrait URL:</label>
                        <input
                          type="text"
                          placeholder="Paste image URL (Leave blank to trigger 3D Art Fallback)"
                          value={state.visual.founderPortraitUrl || ''}
                          onChange={(e) => {
                            const vis = { ...state.visual, founderPortraitUrl: e.target.value };
                            dispatchStateChange({ visual: vis });
                          }}
                          className="bg-black border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                        <span className="text-[8px] text-gray-500 mt-0.5">Allows pasting custom portraits from CMS or dynamic links.</span>
                      </div>

                      <div className="flex flex-col gap-1.5 font-mono">
                        <label className="text-gray-400 uppercase text-[9px]">Active Artwork / Fallback Mode:</label>
                        <select
                          value={state.visual.portraitMode || 'photo'}
                          onChange={(e) => {
                            const vis = { ...state.visual, portraitMode: e.target.value as any };
                            dispatchStateChange({ visual: vis });
                          }}
                          className="bg-black border border-white/15 text-white rounded px-3 py-2 focus:outline-none"
                        >
                          <option value="photo">Photorealistic Photo (Or Fallback if empty/broken)</option>
                          <option value="3d-sculpture">Tactile 3D Sculpture Placeholder</option>
                          <option value="geometric-gold">Geometric Gold Artwork</option>
                          <option value="cinematic">Cinematic Creative Wave</option>
                        </select>
                        <span className="text-[8px] text-gray-500 mt-0.5">Choose active aesthetic artwork mode or standard photo.</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-500 text-[9px] font-mono">OFFICIAL INBOX EMAIL:</label>
                      <input
                        type="email"
                        value={state.contact.email}
                        onChange={(e) => {
                          const freshContact = { ...state.contact, email: e.target.value };
                          dispatchStateChange({ contact: freshContact });
                        }}
                        className="bg-black border border-white/10 rounded px-2.5 py-1.5 text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-500 text-[9px] font-mono">SUPPORT PHONE COORDINATE:</label>
                      <input
                        type="text"
                        value={state.contact.phone}
                        onChange={(e) => {
                          const freshContact = { ...state.contact, phone: e.target.value, whatsapp: e.target.value };
                          dispatchStateChange({ contact: freshContact });
                        }}
                        className="bg-black border border-white/10 rounded px-2.5 py-1.5 text-white font-mono"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-500 text-[9px] font-mono">OFFICE HOURS:</label>
                      <input
                        type="text"
                        value={state.contact.officeHours}
                        onChange={(e) => {
                          const freshContact = { ...state.contact, officeHours: e.target.value };
                          dispatchStateChange({ contact: freshContact });
                        }}
                        className="bg-black border border-white/10 rounded px-2.5 py-1.5 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Homepage sections Ordering & Toggle layout */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-white text-base font-semibold">Homepage Section ordering & visibility</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Toggle section renders or click Up arrow to modify high-converting hierarchy sequences.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xl font-mono text-[11px] uppercase">
                    {state.sections.map((sec, sIdx) => (
                      <div key={sec.id} className="bg-black p-3 rounded border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-[#D4AF37] font-bold">#{sIdx + 1}</span>
                          <span className={sec.enabled ? 'text-white' : 'text-gray-600 line-through'}>{sec.label}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleSection(sec.id)}
                            className={`px-2 py-1 rounded text-[9px] uppercase font-bold cursor-pointer ${
                              sec.enabled ? 'bg-green-900/30 text-green-500 border border-green-500/20' : 'bg-red-900/10 text-red-500 border border-red-500/10'
                            }`}
                          >
                            {sec.enabled ? 'Visible' : 'Hidden'}
                          </button>

                          <button
                            disabled={sIdx === 0}
                            onClick={() => raiseSectionOrder(sIdx)}
                            className="p-1 px-2 border border-white/10 hover:border-white/30 text-gray-400 hover:text-white rounded disabled:opacity-30 cursor-pointer"
                            title="Reorder up"
                          >
                            ▲
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            )}

            {/* SEO & SEARCH SCHEMA / SITEMAPS MODULE */}
            {activeMenu === 'seo' && (
              <div className="flex flex-col gap-6 text-left font-sans text-xs">
                
                {/* Search Meta Customizer */}
                <div className="flex flex-col gap-4 border-b border-white/5 pb-6">
                  <div className="flex flex-col gap-1 font-sans">
                    <h4 className="text-white text-base font-semibold">SEO Meta Parameters Configuration</h4>
                    <span className="text-xs text-gray-400">Tailor Google crawler and OpenGraph attributes dynamically for extreme discoverability.</span>
                  </div>

                  {/* Interactive Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-950 p-5 rounded border border-white/5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono text-gray-400 uppercase">Search Page Title (Meta Title):</label>
                      <input
                        type="text"
                        value={state.seo.metaTitle}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, metaTitle: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 font-mono">
                      <label className="text-[9px] text-gray-400 uppercase">Canonical Site URL:</label>
                      <input
                        type="text"
                        value={state.seo.canonicalUrl}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, canonicalUrl: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="text-[9px] font-mono text-gray-400 uppercase">Search Snippet Description (Meta Description):</label>
                      <textarea
                        rows={2}
                        value={state.seo.metaDescription}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, metaDescription: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="text-[9px] font-mono text-gray-400 uppercase">Focus Keywords (Comma Separated):</label>
                      <input
                        type="text"
                        value={state.seo.focusKeywords.join(', ')}
                        onChange={(e) => {
                          const kws = e.target.value.split(',').map(k => k.trim()).filter(Boolean);
                          const freshSeo = { ...state.seo, focusKeywords: kws };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Analytics & Search Console Integrations */}
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="text-white text-xs font-semibold">Integrations & Crawler Verification Keys</h5>
                    <span className="text-[10px] text-gray-400">Deploy verification and conversion pixels safely across the head layout.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-zinc-950 p-5 rounded border border-white/5 font-sans">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono text-gray-400 uppercase font-bold">Google Analytics ID:</label>
                      <input
                        type="text"
                        placeholder="G-XXXXXXX"
                        value={state.seo.googleAnalyticsId}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, googleAnalyticsId: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white font-mono focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono text-gray-400 uppercase font-bold">Google Search Console Key:</label>
                      <input
                        type="text"
                        placeholder="sc-verification-code"
                        value={state.seo.searchConsoleId}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, searchConsoleId: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white font-mono focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono text-gray-400 uppercase font-bold">Microsoft Clarity ID:</label>
                      <input
                        type="text"
                        placeholder="clarity-project-id"
                        value={state.seo.clarityId}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, clarityId: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white font-mono focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Schema Org values */}
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="text-white text-xs font-semibold">Structured Schema.org Values</h5>
                    <span className="text-[10px] text-gray-400">Configure organizational coordinates served natively to crawlers.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-950 p-5 rounded border border-white/5 font-sans">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-mono text-gray-400 uppercase font-bold">Organization Name:</label>
                      <input
                        type="text"
                        value={state.seo.organizationSchemaName}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, organizationSchemaName: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 font-mono">
                      <label className="text-[9px] text-gray-400 uppercase">Organization Logo Link:</label>
                      <input
                        type="text"
                        value={state.seo.organizationSchemaLogo}
                        onChange={(e) => {
                          const freshSeo = { ...state.seo, organizationSchemaLogo: e.target.value };
                          dispatchStateChange({ seo: freshSeo });
                        }}
                        className="bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Live mockup presentation */}
                  <div className="p-4 border border-white/5 bg-black rounded flex flex-col gap-3 font-sans">
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block font-bold">Live Desktop Search Engine Mockup:</span>
                    <div className="bg-white p-5 rounded text-black text-left flex flex-col gap-1 text-sm max-w-xl shadow-md">
                      <span className="text-gray-500 text-[11px] flex items-center gap-1">
                        {state.seo.canonicalUrl} <span className="text-[9px]">▼</span>
                      </span>
                      <a href="#mock-search" className="text-blue-800 text-lg hover:underline font-semibold leading-tight block">
                        {state.seo.metaTitle}
                      </a>
                      <p className="text-gray-700 text-xs font-light leading-relaxed">
                        {state.seo.metaDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* JSON-LD Schema.org Panel */}
                <div className="flex flex-col gap-3 font-mono">
                  <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-widest block font-sans">Live Search Schema.org JSON-LD (LD+JSON) Script:</span>
                  <pre className="text-[9.5px] bg-black p-4 rounded border border-white/5 overflow-x-auto text-gray-400 whitespace-pre font-mono leading-normal">
                    {JSON.stringify(schemaJsonLD, null, 2)}
                  </pre>
                </div>

                {/* XML Sitemap panel */}
                <div className="flex flex-col gap-3 pt-6 border-t border-white/5 font-mono">
                  <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-widest block font-sans">Dynamic SEO Compliant xml Sitemap markup:</span>
                  <pre className="text-[9.5px] bg-black p-4 rounded border border-white/5 overflow-x-auto text-gray-400 whitespace-pre font-mono leading-normal">
                    {xmlSitemapPreview}
                  </pre>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
