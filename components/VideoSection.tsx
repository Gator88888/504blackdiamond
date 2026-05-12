import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 md:py-32 bg-navy-950 text-white border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12 reveal">
           <p className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-3">Cinematic Tour</p>
           <h2 className="text-3xl md:text-4xl font-serif text-white">Experience the Property</h2>
        </div>
        
        <div className="max-w-5xl mx-auto reveal active flex flex-col items-center">
          {/* Video Container */}
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-black mb-8">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/K3Onk5zLBjs?rel=0&modestbranding=1" 
              title="504 E Black Diamond Dr Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Fallback Link for Embed Restrictions */}
          <a 
            href="https://www.youtube.com/watch?v=K3Onk5zLBjs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-xs md:text-sm font-bold uppercase tracking-widest group"
          >
            <span>Watch on YouTube</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;