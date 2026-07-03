import React, { useState } from 'react';
import { BlogPost, VisualConfig } from '../types';
import { BookOpen, Calendar, Clock, X, ArrowRight } from 'lucide-react';

interface BlogGridProps {
  posts: BlogPost[];
  visual: VisualConfig;
}

export default function BlogGrid({ posts, visual }: BlogGridProps) {
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const fontClass = visual.fontHeadingStyle === 'serif' ? 'font-serif' : 'font-sans';
  const goldColor = visual.accentGold;

  // Filter only published articles
  const publishedPosts = posts.filter(p => p.status === 'published');

  return (
    <section className="bg-black py-24 px-4 sm:px-8 border-t border-white/5 relative" id="blog">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              Strategic Editorial
            </span>
            <h3 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white`}>
              Branding & Design <span style={{ color: goldColor }}>Insights</span>
            </h3>
          </div>
          <p className="text-gray-400 font-sans text-xs sm:text-sm max-w-md font-light leading-relaxed">
            In-depth strategic blueprints, design philosophies, and prepress layout rules authored specifically to elevate corporate and lifestyle brands.
          </p>
        </div>

        {/* Blog Post Cards Grid list */}
        {publishedPosts.length === 0 ? (
          <div className="text-center p-12 border border-white/5 rounded-lg bg-[#111] text-gray-500 font-mono text-xs uppercase tracking-widest">
            No Published Insights Currently Active
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publishedPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setReadingPost(post)}
                className="bg-gradient-to-br from-[#111] to-black border border-white/5 hover:border-[#D4AF37]/30 rounded-lg overflow-hidden flex flex-col sm:flex-row cursor-pointer transition-all duration-300 group"
              >
                {/* Featured image layout */}
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 border border-white/15 text-[8px] font-mono uppercase tracking-widest text-[#D4AF37] px-2.5 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Content description layout */}
                <div className="sm:w-3/5 p-6 text-left flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono text-gray-500 flex items-center gap-1.5 uppercase">
                      <Calendar size={10} className="text-[#D4AF37]" />
                      <span>{post.publishedAt}</span>
                      <span className="text-[#D4AF37] font-sans">•</span>
                      <Clock size={10} className="text-[#D4AF37]" />
                      <span>{post.readTime}</span>
                    </span>

                    <h4 className="text-white text-base sm:text-lg font-semibold group-hover:text-[#D4AF37] transition-colors leading-snug font-sans">
                      {post.title}
                    </h4>
                    
                    <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 duration-300" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Complete Fullscreen Overlay Reading Modal */}
      {readingPost && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-md z-50 overflow-y-auto py-12 px-4 flex justify-center">
          <div className="bg-[#111111] border border-white/10 rounded-lg max-w-3xl w-full flex flex-col overflow-hidden shadow-2xl relative self-start my-auto">
            
            {/* Direct Close Button */}
            <button
              onClick={() => setReadingPost(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-white hover:text-[#D4AF37] border border-white/10 rounded bg-black/80 hover:border-white/30 transition-all cursor-pointer"
            >
              Close Article
            </button>

            {/* Header Featured image */}
            <div className="h-[200px] sm:h-[300px] relative">
              <img
                src={readingPost.featuredImage}
                alt={readingPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-black/60" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                  {readingPost.category} Blueprint
                </span>
                <h3 className={`${fontClass} text-xl sm:text-3xl font-bold text-white tracking-tight`}>
                  {readingPost.title}
                </h3>
              </div>
            </div>

            {/* Read Body layout */}
            <div className="p-6 sm:p-8 bg-[#111111] text-left">
              {/* Meta details row under header */}
              <div className="flex flex-wrap gap-4 items-center border-b border-white/5 pb-4 mb-6 text-[10px] font-mono text-gray-400 uppercase">
                <span>Published: {readingPost.publishedAt}</span>
                <span className="text-[#D4AF37] font-sans">•</span>
                <span>Length: {readingPost.readTime}</span>
                <span className="text-[#D4AF37] font-sans">•</span>
                <span>By: Internal Brand Strategist</span>
              </div>

              {/* Parsed content mimicking paragraphs inside markdown */}
              <div className="prose text-gray-300 text-xs sm:text-sm font-sans leading-relaxed flex flex-col gap-5 font-light">
                {readingPost.content.split('\n\n').map((para, pIdx) => {
                  if (para.startsWith('### ')) {
                    return (
                      <h4 key={pIdx} className="text-white text-sm sm:text-base font-semibold tracking-wide uppercase pt-4 border-t border-white/5 font-mono text-[#D4AF37]">
                        {para.replace('### ', '')}
                      </h4>
                    );
                  }
                  if (para.startsWith('- ')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-5 flex flex-col gap-1 text-gray-400">
                        {para.split('\n').map((li, lIdx) => (
                          <li key={lIdx}>{li.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={pIdx} className="whitespace-pre-wrap leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Tag badges */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
                {readingPost.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[9px] font-mono text-gray-400 bg-black/60 border border-white/5 px-2.5 py-1 rounded-sm uppercase">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
