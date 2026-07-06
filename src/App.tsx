/**
 * Dominion Creative Studio - Premium Full-Stack Agency Website with Embedded CM System
 * israelibitoye208@gmail.com • Lead Strategic Developer
 */

import React, { useState, useEffect } from 'react';
import { CMSAppState, LeadBooking, NewsletterSubscriber } from './types';
import { INITIAL_CMS_STATE } from './data/defaultData';

// Component Core Layouts
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustAuthority from './components/TrustAuthority';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import SeoManager from './components/SeoManager';
import { Cookie, X } from 'lucide-react';

export default function App() {
  // Primary persistent core state container
  const [cmsState, setCmsState] = useState<CMSAppState>(() => {
    const filteredCaseStudies = (INITIAL_CMS_STATE.caseStudies || []).filter(
      (c: any) => {
        if (c.id === 'uniform-embroidery-series') return true;
        if (c.id === 'royal-monogram-embroidery') return true;
        const isFatima = 
          c.id === 'school-unis-fatima' || 
          (c.title && c.title.toLowerCase().includes('fatima')) ||
          (c.clientName && c.clientName.toLowerCase().includes('fatima'));
        const isLearnGrow = 
          c.id === 'learn-grow-daycare' || 
          (c.title && c.title.toLowerCase().includes('learn & grow')) ||
          (c.title && c.title.toLowerCase().includes('learn and grow')) ||
          (c.clientName && c.clientName.toLowerCase().includes('learn & grow')) ||
          (c.clientName && c.clientName.toLowerCase().includes('learn and grow'));
        const isAcademy = 
          c.id === 'academy-athletic' || 
          (c.title && c.title.toLowerCase().includes('one dream one team')) ||
          (c.title && c.title.toLowerCase().includes('one dream, one team')) ||
          (c.clientName && c.clientName.toLowerCase().includes('one dream one team')) ||
          (c.clientName && c.clientName.toLowerCase().includes('one dream, one team'));
        return !isFatima && !isLearnGrow && !isAcademy;
      }
    );
    return {
      ...INITIAL_CMS_STATE,
      caseStudies: filteredCaseStudies
    };
  });
  const [activeTab, setActiveTab] = useState<'client' | 'admin'>('client');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('dominion_cookie_consent') === 'accepted';
    } catch {
      return false;
    }
  });

  // Initial persistent recovery from local storage client-side
  useEffect(() => {
    try {
      let saved = localStorage.getItem('dominion_creative_studio_cms_state');
      let migrated = false;
      
      // Fallback fallback and migrate from previous key if existing
      if (!saved) {
        const oldSaved = localStorage.getItem('jesutoff_studio_cms_state');
        if (oldSaved) {
          saved = oldSaved;
          migrated = true;
        }
      }

      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure that new variables have default values if absent, filtering out graphic-design
        const loadedServices = (parsed.services || INITIAL_CMS_STATE.services).filter(
          (s: any) => s.id !== 'graphic-design'
        );
        INITIAL_CMS_STATE.services.forEach((service) => {
          if (service.id !== 'graphic-design' && !loadedServices.some((s: any) => s.id === service.id)) {
            loadedServices.push(service);
          }
        });
        let rawCaseStudies = parsed.caseStudies || INITIAL_CMS_STATE.caseStudies;
        
        // Strictly filter out any items from local storage that are outdated or contain Adelyn
        rawCaseStudies = rawCaseStudies.filter((c: any) => {
          if (!c) return false;
          const containsAdelyn = 
            (c.title && c.title.toLowerCase().includes('adelyn')) ||
            (c.clientName && c.clientName.toLowerCase().includes('adelyn')) ||
            (c.summary && c.summary.toLowerCase().includes('adelyn'));
          return !containsAdelyn;
        });

        // Ensure no duplicate custom monogram sections exist
        let seenMonogram = false;
        rawCaseStudies = rawCaseStudies.filter((c: any) => {
          if (!c) return false;
          const isMonogram = 
            c.id === 'royal-monogram-embroidery' || 
            (c.title && c.title.toLowerCase().includes('royal monogram embroidery')) ||
            (c.title && c.title.toLowerCase().includes('bespoke royal monogram'));
          if (isMonogram) {
            if (seenMonogram) return false;
            seenMonogram = true;
          }
          return true;
        });

        // Make sure "New Model Autocare", "GF Logistics", and "Indeego Restaurant" are recovered if missing from localStorage saved items
        const hasAutocare = rawCaseStudies.some((c: any) => c.id === 'new-model-autocare');
        if (!hasAutocare) {
          const originalAutocare = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'new-model-autocare');
          if (originalAutocare) {
            rawCaseStudies = [originalAutocare, ...rawCaseStudies];
          }
        }
        const hasLogistics = rawCaseStudies.some((c: any) => c.id === 'gf-logistics');
        if (!hasLogistics) {
          const originalLogistics = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'gf-logistics');
          if (originalLogistics) {
            rawCaseStudies = [originalLogistics, ...rawCaseStudies];
          }
        }
        const hasIndeego = rawCaseStudies.some((c: any) => c.id === 'indeego-restaurant');
        if (!hasIndeego) {
          const originalIndeego = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'indeego-restaurant');
          if (originalIndeego) {
            rawCaseStudies = [originalIndeego, ...rawCaseStudies];
          }
        }
        const hasIvoryBites = rawCaseStudies.some((c: any) => c.id === 'ivory-bites-restaurant');
        if (!hasIvoryBites) {
          const originalIvoryBites = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'ivory-bites-restaurant');
          if (originalIvoryBites) {
            rawCaseStudies = [originalIvoryBites, ...rawCaseStudies];
          }
        }
        const hasOrente = rawCaseStudies.some((c: any) => c.id === 'orente-grills');
        if (!hasOrente) {
          const originalOrente = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'orente-grills');
          if (originalOrente) {
            rawCaseStudies = [originalOrente, ...rawCaseStudies];
          }
        }
        const hasZeus = rawCaseStudies.some((c: any) => c.id === 'zeus-club-lounge');
        if (!hasZeus) {
          const originalZeus = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'zeus-club-lounge');
          if (originalZeus) {
            rawCaseStudies = [originalZeus, ...rawCaseStudies];
          }
        }
        const hasImperial = rawCaseStudies.some((c: any) => c.id === 'imperial-supermarket');
        if (!hasImperial) {
          const originalImperial = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'imperial-supermarket');
          if (originalImperial) {
            rawCaseStudies = [originalImperial, ...rawCaseStudies];
          }
        }
        const hasHotelDeTreasure = rawCaseStudies.some((c: any) => c.id === 'hotel-de-treasure');
        if (!hasHotelDeTreasure) {
          const originalHotelDeTreasure = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'hotel-de-treasure');
          if (originalHotelDeTreasure) {
            rawCaseStudies = [originalHotelDeTreasure, ...rawCaseStudies];
          }
        }
        const hasIfeGrandResort = rawCaseStudies.some((c: any) => c.id === 'ife-grand-resort');
        if (!hasIfeGrandResort) {
          const originalIfeGrandResort = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'ife-grand-resort');
          if (originalIfeGrandResort) {
            rawCaseStudies = [originalIfeGrandResort, ...rawCaseStudies];
          }
        }
        const hasValuMall = rawCaseStudies.some((c: any) => c.id === 'valu-mall');
        if (!hasValuMall) {
          const originalValuMall = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'valu-mall');
          if (originalValuMall) {
            rawCaseStudies = [originalValuMall, ...rawCaseStudies];
          }
        }
        const hasUsedAutoLagos = rawCaseStudies.some((c: any) => c.id === 'used-auto-lagos');
        if (!hasUsedAutoLagos) {
          const originalUsedAutoLagos = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'used-auto-lagos');
          if (originalUsedAutoLagos) {
            rawCaseStudies = [originalUsedAutoLagos, ...rawCaseStudies];
          }
        }
        
        // Always sync key campaign and series collections from INITIAL_CMS_STATE to ensure edits and new entries are fully updated
        rawCaseStudies = rawCaseStudies.map((c: any) => {
          if (c.id === 'uniform-embroidery-series') {
            const originalUniform = INITIAL_CMS_STATE.caseStudies.find((orig: any) => orig.id === 'uniform-embroidery-series');
            return originalUniform || c;
          }
          if (c.id === 'royal-monogram-embroidery') {
            const originalRoyal = INITIAL_CMS_STATE.caseStudies.find((orig: any) => orig.id === 'royal-monogram-embroidery');
            return originalRoyal || c;
          }
          if (c.id === 'church-sunday-service') {
            const originalChurch = INITIAL_CMS_STATE.caseStudies.find((orig: any) => orig.id === 'church-sunday-service');
            return originalChurch || c;
          }
          if (c.id === 'bespoke-framing-series') {
            const originalFraming = INITIAL_CMS_STATE.caseStudies.find((orig: any) => orig.id === 'bespoke-framing-series');
            return originalFraming || c;
          }
          return c;
        });

        // Force-insert custom uniform embroidery series, royal monogram, Sunday Service, and Bespoke Framing series
        const hasUniformSeries = rawCaseStudies.some((c: any) => c.id === 'uniform-embroidery-series');
        if (!hasUniformSeries) {
          const originalUniform = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'uniform-embroidery-series');
          if (originalUniform) {
            rawCaseStudies = [originalUniform, ...rawCaseStudies];
          }
        }

        const hasRoyalSeries = rawCaseStudies.some((c: any) => c.id === 'royal-monogram-embroidery');
        if (!hasRoyalSeries) {
          const originalRoyal = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'royal-monogram-embroidery');
          if (originalRoyal) {
            rawCaseStudies = [originalRoyal, ...rawCaseStudies];
          }
        }

        const hasChurchService = rawCaseStudies.some((c: any) => c.id === 'church-sunday-service');
        if (!hasChurchService) {
          const originalChurch = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'church-sunday-service');
          if (originalChurch) {
            rawCaseStudies = [originalChurch, ...rawCaseStudies];
          }
        }

        const hasFramingSeries = rawCaseStudies.some((c: any) => c.id === 'bespoke-framing-series');
        if (!hasFramingSeries) {
          const originalFraming = INITIAL_CMS_STATE.caseStudies.find((c: any) => c.id === 'bespoke-framing-series');
          if (originalFraming) {
            rawCaseStudies = [originalFraming, ...rawCaseStudies];
          }
        }

        // Lift items to first, second, third, and fourth positions
        const uniformItem = rawCaseStudies.find((c: any) => c.id === 'uniform-embroidery-series');
        const royalItem = rawCaseStudies.find((c: any) => c.id === 'royal-monogram-embroidery');
        const churchItem = rawCaseStudies.find((c: any) => c.id === 'church-sunday-service');
        const framingItem = rawCaseStudies.find((c: any) => c.id === 'bespoke-framing-series');
        
        rawCaseStudies = rawCaseStudies.filter(
          (c: any) => {
            return c.id !== 'uniform-embroidery-series' && 
                   c.id !== 'royal-monogram-embroidery' && 
                   c.id !== 'church-sunday-service' &&
                   c.id !== 'bespoke-framing-series';
          }
        );
        
        if (framingItem) {
          rawCaseStudies = [framingItem, ...rawCaseStudies];
        }
        if (churchItem) {
          rawCaseStudies = [churchItem, ...rawCaseStudies];
        }
        if (royalItem) {
          rawCaseStudies = [royalItem, ...rawCaseStudies];
        }
        if (uniformItem) {
          rawCaseStudies = [uniformItem, ...rawCaseStudies];
        }
        // Force-update URLs if they use old placeholders or need syncing with new legit domains
        rawCaseStudies = rawCaseStudies.map((c: any) => {
          if (c.id === 'indeego-restaurant') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/indeego' };
          }
          if (c.id === 'new-model-autocare') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/new-model-autocare' };
          }
          if (c.id === 'ivory-bites-restaurant') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/ivory-bites-restaura' };
          }
          if (c.id === 'orente-grills') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/orente-grills' };
          }
          if (c.id === 'zeus-club-lounge') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/zeus-club-lounge' };
          }
          if (c.id === 'imperial-supermarket') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/imperial-supermarket' };
          }
          if (c.id === 'hotel-de-treasure') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/hotel-de-treasure' };
          }
          if (c.id === 'ife-grand-resort') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/ife-grand-resort#Booking%20Information' };
          }
          if (c.id === 'valu-mall') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/valu-mall' };
          }
          if (c.id === 'used-auto-lagos') {
            return { ...c, projectUrl: 'https://israelibitoye208.wixsite.com/used-auto-lagos' };
          }
          return c;
        });
        const loadedCaseStudies = rawCaseStudies.filter(
          (c: any) => {
            if (c.id === 'uniform-embroidery-series') return true;
            if (c.id === 'royal-monogram-embroidery') return true;
            
            const isFatima = 
              c.id === 'school-unis-fatima' || 
              (c.title && c.title.toLowerCase().includes('fatima')) ||
              (c.clientName && c.clientName.toLowerCase().includes('fatima'));
              
            const isLearnGrow = 
              c.id === 'learn-grow-daycare' || 
              (c.title && c.title.toLowerCase().includes('learn & grow')) ||
              (c.title && c.title.toLowerCase().includes('learn and grow')) ||
              (c.clientName && c.clientName.toLowerCase().includes('learn & grow')) ||
              (c.clientName && c.clientName.toLowerCase().includes('learn and grow'));
              
            const isAcademy = 
              c.id === 'academy-athletic' || 
              (c.title && c.title.toLowerCase().includes('one dream one team')) ||
              (c.title && c.title.toLowerCase().includes('one dream, one team')) ||
              (c.clientName && c.clientName.toLowerCase().includes('one dream one team')) ||
              (c.clientName && c.clientName.toLowerCase().includes('one dream, one team'));
              
            const isHospitalityOrLuxury = 
              c.id === 'hospitality-concept' || 
              c.id === 'luxury-business-concept';

            return !isFatima && !isLearnGrow && !isAcademy && !isHospitalityOrLuxury;
          }
        );
        let rawTestimonials = parsed.testimonials || INITIAL_CMS_STATE.testimonials;
        // Ensure "t2" has been updated to GF Logistics if we loaded an older version from localStorage
        const hasT2Logistics = rawTestimonials.some((t: any) => t.id === 't2' && t.company.includes('GF Logistics'));
        if (!hasT2Logistics) {
          rawTestimonials = rawTestimonials.filter((t: any) => t.id !== 't2');
          const originalT2 = INITIAL_CMS_STATE.testimonials.find((t: any) => t.id === 't2');
          if (originalT2) {
            rawTestimonials = [originalT2, ...rawTestimonials];
          }
        }
        const hasIndeegoT = rawTestimonials.some((t: any) => t.id === 't-indeego');
        if (!hasIndeegoT) {
          const originalIndeegoT = INITIAL_CMS_STATE.testimonials.find((t: any) => t.id === 't-indeego');
          if (originalIndeegoT) {
            rawTestimonials = [originalIndeegoT, ...rawTestimonials];
          }
        }
        const loadedTestimonials = rawTestimonials.filter(
          (t: any) => t.id !== 't3'
        ).map((t: any) => {
          const regexJesutof = /jesutof(f)?(?:\s+creative)?(?:\s+studio)?/gi;
          const regexDoubleStudio = /Dominion\s+Creative\s+Studio(?:\s+Studio)+/gi;
          
          let content = t.content ? t.content.replace(regexJesutof, 'Dominion Creative Studio') : '';
          content = content.replace(regexDoubleStudio, 'Dominion Creative Studio');
          
          let company = t.company ? t.company.replace(regexJesutof, 'Dominion Creative Studio') : '';
          company = company.replace(regexDoubleStudio, 'Dominion Creative Studio');
          
          let name = t.name ? t.name.replace(regexJesutof, 'Dominion Creative Studio') : '';
          name = name.replace(regexDoubleStudio, 'Dominion Creative Studio');
          
          return { ...t, content, company, name };
        });
        const loadedState = {
          ...INITIAL_CMS_STATE,
          ...parsed,
          services: loadedServices,
          caseStudies: loadedCaseStudies,
          blogPosts: parsed.blogPosts || INITIAL_CMS_STATE.blogPosts,
          testimonials: loadedTestimonials,
          faqs: parsed.faqs || INITIAL_CMS_STATE.faqs,
          leads: parsed.leads || INITIAL_CMS_STATE.leads,
          subscribers: parsed.subscribers || INITIAL_CMS_STATE.subscribers,
          sections: parsed.sections || INITIAL_CMS_STATE.sections,
          contact: { ...INITIAL_CMS_STATE.contact, ...parsed.contact },
          visual: { ...INITIAL_CMS_STATE.visual, ...parsed.visual },
          seo: parsed.seo ? { ...INITIAL_CMS_STATE.seo, ...parsed.seo } : INITIAL_CMS_STATE.seo
        };
        setCmsState(loadedState);
        // Persist with the new key name
        localStorage.setItem('dominion_creative_studio_cms_state', JSON.stringify(loadedState));
        if (migrated) {
          localStorage.removeItem('jesutoff_studio_cms_state');
        }
      }
    } catch (e) {
      console.warn('LocalStorage synchronization offline.', e);
    }
  }, []);

  // Dispatch state edits back to persistence rules
  const handleUpdateCmsState = (freshState: CMSAppState) => {
    const filteredCaseStudies = (freshState.caseStudies || []).filter(
      (c: any) => {
        if (c.id === 'uniform-embroidery-series') return true;
        if (c.id === 'royal-monogram-embroidery') return true;
        
        const isFatima = 
          c.id === 'school-unis-fatima' || 
          (c.title && c.title.toLowerCase().includes('fatima')) ||
          (c.clientName && c.clientName.toLowerCase().includes('fatima'));
          
        const isLearnGrow = 
          c.id === 'learn-grow-daycare' || 
          (c.title && c.title.toLowerCase().includes('learn & grow')) ||
          (c.title && c.title.toLowerCase().includes('learn and grow')) ||
          (c.clientName && c.clientName.toLowerCase().includes('learn & grow')) ||
          (c.clientName && c.clientName.toLowerCase().includes('learn and grow'));
          
        const isAcademy = 
          c.id === 'academy-athletic' || 
          (c.title && c.title.toLowerCase().includes('one dream one team')) ||
          (c.title && c.title.toLowerCase().includes('one dream, one team')) ||
          (c.clientName && c.clientName.toLowerCase().includes('one dream one team')) ||
          (c.clientName && c.clientName.toLowerCase().includes('one dream, one team'));
          
        const isHospitalityOrLuxury = 
          c.id === 'hospitality-concept' || 
          (c.id === 'luxury-business-concept');

        return !isFatima && !isLearnGrow && !isAcademy && !isHospitalityOrLuxury;
      }
    );
    const cleanedState = {
      ...freshState,
      caseStudies: filteredCaseStudies
    };
    setCmsState(cleanedState);
    localStorage.setItem('dominion_creative_studio_cms_state', JSON.stringify(cleanedState));
  };

  // Capture incoming Lead booking or contact from client wizards
  const handleAddIncomingLead = (newLead: Omit<LeadBooking, 'id' | 'createdAt'>) => {
    const fresh: LeadBooking = {
      ...newLead,
      id: 'lead-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    
    const updatedLeads = [fresh, ...cmsState.leads];
    handleUpdateCmsState({
      ...cmsState,
      leads: updatedLeads
    });
  };

  // Capture newsletter entries
  const handleAddSubscriber = (email: string) => {
    // avoid duplicates
    if (cmsState.subscribers.some(s => s.email.toLowerCase() === email.toLowerCase())) {
      return;
    }
    const fresh: NewsletterSubscriber = {
      id: 'sub-' + Date.now(),
      email: email,
      subscribedAt: new Date().toISOString()
    };

    const updatedSubs = [fresh, ...cmsState.subscribers];
    handleUpdateCmsState({
      ...cmsState,
      subscribers: updatedSubs
    });
  };

  // Auto-scroller utility for fluid luxury journey feel
  const handleScrollToBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBookingDirect = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Extract sections matching order configuration rules
  const orderedSections = [...cmsState.sections].sort((a, b) => a.order - b.order);

  // Render individual homepage sections safely
  const renderHomepageSection = (secId: string) => {
    switch (secId) {
      case 'hero':
        return (
          <div key={secId}>
            <Hero 
              onStartProject={handleScrollToBookingDirect}
              onViewPortfolio={handleScrollToPortfolio}
              visual={cmsState.visual}
            />
          </div>
        );
      case 'trust':
        return (
          <div key={secId}>
            <TrustAuthority visual={cmsState.visual} />
          </div>
        );
      case 'about':
        return (
          <div key={secId}>
            <About visual={cmsState.visual} />
          </div>
        );
      case 'services':
        return (
          <div key={secId}>
            <Services 
              services={cmsState.services} 
              visual={cmsState.visual} 
              onSelectService={handleScrollToBookingWithService}
            />
          </div>
        );
      case 'portfolio':
        return (
          <div key={secId}>
            <Portfolio 
              caseStudies={cmsState.caseStudies} 
              visual={cmsState.visual} 
            />
          </div>
        );
      case 'process':
        return (
          <div key={secId}>
            <Process visual={cmsState.visual} />
          </div>
        );
      case 'testimonials':
        return (
          <div key={secId}>
            <Testimonials 
              testimonials={cmsState.testimonials} 
              visual={cmsState.visual} 
            />
          </div>
        );
      case 'faq':
        return (
          <div key={secId}>
            <FAQ faqs={cmsState.faqs} visual={cmsState.visual} />
          </div>
        );
      case 'booking':
        return (
          <div key={secId}>
            <BookingForm 
              services={cmsState.services} 
              defaultSelectedServiceId={selectedServiceId} 
              visual={cmsState.visual} 
              onSubmitLead={handleAddIncomingLead}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen text-white font-sans transition-all duration-300 relative selection:bg-[#D4AF37] selection:text-black"
      style={{ 
        backgroundColor: cmsState.visual.primaryBg,
        color: cmsState.visual.textWhite 
      }}
    >
      
      {/* Dynamic SEO Tag & Structured Schema.org Injection Manager */}
      <SeoManager state={cmsState} currentTab={activeTab} />
      
      {/* Sticky Premium Header / Navbar switcher */}
      <Navbar 
        currentTab={activeTab} 
        setView={setActiveTab} 
        visual={cmsState.visual}
        onNavigateToBooking={handleScrollToBookingDirect}
        phone={cmsState.contact.phone}
      />

      <main className="relative">
        {activeTab === 'admin' ? (
          /* Protected Admin view console */
          <AdminPanel 
            state={cmsState} 
            updateState={handleUpdateCmsState} 
            onClose={() => setActiveTab('client')} 
          />
        ) : (
          /* Dynamic customer-facing agency screen */
          <>
            {orderedSections.map((sec) => {
              if (sec.enabled) {
                return renderHomepageSection(sec.id);
              }
              return null;
            })}

            {/* In-depth insights educational blog grid (rendered as native footer block) */}
            <BlogGrid posts={cmsState.blogPosts} visual={cmsState.visual} />
          </>
        )}
      </main>

      {/* Customer footer (always rendered to ensure direct newsletter and coordinate access) */}
      <Footer 
        contact={cmsState.contact} 
        visual={cmsState.visual} 
        onSubscribeNewsletter={handleAddSubscriber}
      />

      {/* Floating fast support WhatsApp indicator widget on client screens */}
      {activeTab === 'client' && (
        <a
          href={`https://wa.me/${cmsState.contact.whatsapp.replace(/\+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all text-xs flex items-center gap-2 font-mono group"
          title="Direct Sync Israel Bitoye"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 whitespace-nowrap text-[10px] uppercase tracking-wider font-bold">
            Chat on WhatsApp
          </span>
          {/* Custom SVG path representation for WhatsApp icon */}
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.424 5.429 0 12.085 0c3.225.001 6.258 1.258 8.537 3.541 2.279 2.284 3.534 5.32 3.531 8.545-.004 6.661-5.43 12.085-12.088 12.085-2.007-.001-3.982-.5-5.816-1.45L0 24zm6.59-4.846c1.785 1.058 3.507 1.62 5.513 1.621 5.311 0 9.63-4.316 9.634-9.627.002-2.571-.998-4.992-2.82-6.812-1.819-1.818-4.237-2.818-6.814-2.819-5.319 0-9.638 4.318-9.642 9.628-.001 2.038.533 4.027 1.545 5.793L1.816 22.25l4.831-1.266z" />
          </svg>
        </a>
      )}

      {/* Dynamic Privacy & Cookie Consent Banner for SEO Best Practice Compliance */}
      {!cookieConsentAccepted && activeTab === 'client' && (
        <div className="fixed bottom-6 left-6 right-6 md:left-12 md:max-w-md bg-[#0F0F0F] border border-[#D4AF37]/25 p-5 rounded shadow-2xl z-50 text-left font-sans backdrop-blur-md">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
              <Cookie size={18} />
            </div>
            <div className="flex-1">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Sovereign Cookie Consent
              </h5>
              <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                Dominion Creative Studio utilizes cookies to analyze web traffic, enhance search indexing alignment, and optimize our luxury presentation matrix.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  id="btn-accept-cookie"
                  onClick={() => {
                    try {
                      localStorage.setItem('dominion_cookie_consent', 'accepted');
                    } catch {}
                    setCookieConsentAccepted(true);
                  }}
                  className="bg-[#D4AF37] hover:bg-[#C9A227] text-black font-mono text-[9px] font-bold uppercase tracking-wider px-4 py-1.5 rounded transition-colors"
                >
                  Accept Core Settings
                </button>
                <button
                  id="btn-close-cookie"
                  onClick={() => {
                    try {
                      localStorage.setItem('dominion_cookie_consent', 'declined');
                    } catch {}
                    setCookieConsentAccepted(true);
                  }}
                  className="text-gray-500 hover:text-white font-mono text-[9px] uppercase tracking-wider transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
