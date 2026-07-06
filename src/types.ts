/**
 * Dominion Creative Studio - Core TypeScript Schemas for CMS and Client UI
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedBenefits: string[];
  icon: string; // Lucide icon name
  priceEstimate?: string;
  isActive: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  summary: string;
  designGoals: string;
  visualPresentation: {
    heroImage: string;
    brandColor: string;
    deliverables: string[];
    gallery?: {
      id: string;
      title: string;
      clientName: string;
      summary: string;
      designGoals: string;
      image: string;
      deliverables: string[];
      brandColor: string;
      variations?: {
        id: string;
        title: string;
        image: string;
        summary?: string;
      }[];
    }[];
  };
  isActive: boolean;
  projectUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  metaDescription: string;
  publishedAt: string;
  status: 'draft' | 'published';
  featuredImage: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl?: string;
  isActive: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
}

export interface LeadBooking {
  id: string;
  type: 'consultation' | 'quote' | 'contact';
  name: string;
  email: string;
  phone: string;
  whatsappConsent: boolean;
  serviceId?: string;
  customService?: string;
  date?: string;
  time?: string;
  budget?: string;
  message: string;
  status: 'pending' | 'reviewed' | 'contacted' | 'completed';
  createdAt: string;
}

export interface SectionConfig {
  id: string;
  label: string;
  enabled: boolean;
  order: number;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  officeHours: string;
  addressPlaceholder: string;
}

export interface VisualConfig {
  primaryBg: string; // Primary background color
  secondaryBg: string; // Secondary background color
  accentGold: string; // Accent color hex
  softGold: string; // Soft accent color hex
  textWhite: string;
  softGray: string;
  fontHeadingStyle: 'serif' | 'sans' | 'mono';
  cinematicVibe: 'minimal' | 'executive' | 'noir' | 'modern';
  founderPortraitUrl?: string;
  portraitMode?: 'photo' | '3d-sculpture' | 'geometric-gold' | 'cinematic';
}

export interface SEOConfig {
  metaTitle: string;
  metaDescription: string;
  focusKeywords: string[];
  canonicalUrl: string;
  googleAnalyticsId: string;
  searchConsoleId: string;
  clarityId: string;
  organizationSchemaName: string;
  organizationSchemaLogo: string;
  localBusinessAddress: string;
  localBusinessPhone: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

// Complete Core CMS App State
export interface CMSAppState {
  services: ServiceItem[];
  caseStudies: CaseStudy[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  leads: LeadBooking[];
  subscribers: NewsletterSubscriber[];
  sections: SectionConfig[];
  contact: ContactInfo;
  visual: VisualConfig;
  seo: SEOConfig;
}
