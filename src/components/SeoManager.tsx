import React, { useEffect } from 'react';
import { CMSAppState } from '../types';

interface SeoManagerProps {
  state: CMSAppState;
  currentTab: 'client' | 'admin';
}

export default function SeoManager({ state, currentTab }: SeoManagerProps) {
  const seo = state.seo;
  const contact = state.contact;
  const services = state.services;
  const faqs = state.faqs;
  const blogPosts = state.blogPosts;

  useEffect(() => {
    // 1. Dynamic Meta Title & Description updates
    let finalTitle = seo.metaTitle;
    let finalDesc = seo.metaDescription;

    if (currentTab === 'admin') {
      finalTitle = `Administrative Sovereign Console | ${state.seo.organizationSchemaName}`;
      finalDesc = 'Secure administrative control center for content synchronization, lead vetting, and aesthetic management.';
    }

    document.title = finalTitle;

    // Helper to get or create head tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.head.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setLinkTag = (rel: string, href: string) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', finalDesc);
    setMetaTag('name', 'keywords', seo.focusKeywords.join(', '));
    setMetaTag('name', 'robots', 'index, follow');

    // Canonical link
    setLinkTag('canonical', seo.canonicalUrl);

    // Open Graph / Facebook Preview Metadata
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDesc);
    setMetaTag('property', 'og:url', seo.canonicalUrl);
    setMetaTag('property', 'og:site_name', seo.organizationSchemaName);
    setMetaTag('property', 'og:image', seo.organizationSchemaLogo);

    // Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDesc);
    setMetaTag('name', 'twitter:image', seo.organizationSchemaLogo);

    // Search Console verification tag
    if (seo.searchConsoleId) {
      setMetaTag('name', 'google-site-verification', seo.searchConsoleId);
    }

    // 2. Structured Data (Schema.org) injection
    const removeExistingSchema = (id: string) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };

    const injectSchema = (id: string, schemaObj: object) => {
      removeExistingSchema(id);
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    // I. Website Schema
    injectSchema('schema-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': seo.organizationSchemaName,
      'url': seo.canonicalUrl,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${seo.canonicalUrl}/#portfolio?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });

    // II. Organization Schema
    injectSchema('schema-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': seo.organizationSchemaName,
      'url': seo.canonicalUrl,
      'logo': seo.organizationSchemaLogo,
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': seo.localBusinessPhone || contact.phone,
        'contactType': 'customer support',
        'email': contact.email,
        'areaServed': 'NG',
        'availableLanguage': ['English']
      },
      'founder': {
        '@type': 'Person',
        'name': 'Israel Ibitoye',
        'jobTitle': 'Creative Director & Full-Stack Developer'
      }
    });

    // III. Local Business & Professional Service Schema
    const activeServicesList = services.filter(s => s.isActive).map(s => s.title);
    injectSchema('schema-localbusiness', {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': seo.organizationSchemaName,
      'url': seo.canonicalUrl,
      'logo': seo.organizationSchemaLogo,
      'image': seo.organizationSchemaLogo,
      'telephone': seo.localBusinessPhone || contact.phone,
      'email': contact.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': contact.addressPlaceholder,
        'addressLocality': 'Lagos',
        'addressCountry': 'NG'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        'opens': '08:00',
        'closes': '18:00'
      },
      'priceRange': '$$$',
      'servicesProvided': activeServicesList
    });

    // IV. Breadcrumb Schema
    injectSchema('schema-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Exhibition Suite',
          'item': `${seo.canonicalUrl}/`
        },
        currentTab === 'admin' ? {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Sovereign Control',
          'item': `${seo.canonicalUrl}/#admin`
        } : {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Strategic Services',
          'item': `${seo.canonicalUrl}/#services`
        }
      ]
    });

    // V. FAQ Schema (Mapped from active FAQs)
    const activeFaqs = faqs.filter(f => f.isActive);
    if (activeFaqs.length > 0) {
      injectSchema('schema-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': activeFaqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    // VI. Blog Articles Schema (Mapped from published blog posts)
    const publishedBlogs = blogPosts.filter(b => b.status === 'published');
    if (publishedBlogs.length > 0) {
      injectSchema('schema-articles', {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': `${seo.organizationSchemaName} Insights`,
        'description': `Strategic insight publications by ${seo.organizationSchemaName}.`,
        'blogPost': publishedBlogs.map(blog => ({
          '@type': 'BlogPosting',
          'headline': blog.title,
          'alternativeHeadline': blog.excerpt,
          'genre': blog.category,
          'keywords': blog.tags.join(' '),
          'wordcount': '1200',
          'publisher': seo.organizationSchemaName,
          'url': `${seo.canonicalUrl}/#blog/${blog.slug}`,
          'datePublished': blog.publishedAt,
          'description': blog.metaDescription,
          'articleBody': blog.content
        }))
      });
    }

    // 3. Analytics Integration Scripts Injection
    // Google Analytics 4 Injection
    if (seo.googleAnalyticsId && seo.googleAnalyticsId !== 'G-XXXXXXX') {
      removeExistingSchema('script-google-analytics-lib');
      removeExistingSchema('script-google-analytics-init');

      const gaLib = document.createElement('script');
      gaLib.id = 'script-google-analytics-lib';
      gaLib.async = true;
      gaLib.src = `https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalyticsId}`;
      document.head.appendChild(gaLib);

      const gaInit = document.createElement('script');
      gaInit.id = 'script-google-analytics-init';
      gaInit.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${seo.googleAnalyticsId}', { page_path: window.location.pathname });
      `;
      document.head.appendChild(gaInit);
    }

    // Microsoft Clarity Support Injection
    if (seo.clarityId && seo.clarityId !== 'clarity-project-id') {
      removeExistingSchema('script-microsoft-clarity');
      const clarityScript = document.createElement('script');
      clarityScript.id = 'script-microsoft-clarity';
      clarityScript.text = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${seo.clarityId}");
      `;
      document.head.appendChild(clarityScript);
    }

    // Cleanup schemas and tags on unmount
    return () => {
      removeExistingSchema('schema-website');
      removeExistingSchema('schema-organization');
      removeExistingSchema('schema-localbusiness');
      removeExistingSchema('schema-breadcrumb');
      removeExistingSchema('schema-faq');
      removeExistingSchema('schema-articles');
    };
  }, [seo, contact, services, faqs, blogPosts, currentTab]);

  return null; // Side-effect only head-manager, renders no visual element
}
