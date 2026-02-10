import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Generated list based on the provided file sequence 1-72
  const images = Array.from({ length: 72 }, (_, i) => {
    const num = i + 1;
    return {
      id: num,
      url: `images/6981779_${num}_0.jpg`,
      alt: `Property View ${num}`
    };
  });

  // Number of images to show initially to save space
  const INITIAL_COUNT = 12;
  const visibleImages = showAll ? images : images.slice(0, INITIAL_COUNT);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev! + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex, images.length]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  };
  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  };

  const toggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      // Scroll back to top of gallery when collapsing
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">Visual Tour</p>
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900">Gallery</h2>
        </div>
        
        {/* Masonry Layout */}
        <div className="columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4 mb-12">
          {visibleImages.map((img, index) => (
            <div 
              key={img.id} 
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100', 'h-32', 'md:h-64');
                    e.currentTarget.parentElement!.innerHTML = `<div class="text-center p-2"><span class="block text-gray-400 text-[10px] mb-1">Missing Image</span></div>`;
                }}
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300"></div>
              
              {/* Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="bg-white/90 p-2 md:p-3 rounded-full backdrop-blur-sm shadow-lg">
                   <svg className="w-5 h-5 md:w-6 md:h-6 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                   </svg>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        <div className="text-center">
            <button 
                onClick={toggleShowAll}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-navy-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                <span>{showAll ? 'Show Less' : `View All ${images.length} Photos`}</span>
                <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-50"
              onClick={prevImage}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-50"
              onClick={nextImage}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div 
              className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <img 
                src={images[selectedIndex].url} 
                alt={images[selectedIndex].alt} 
                className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full">
                <p className="text-white text-lg font-serif tracking-wide">{images[selectedIndex].alt}</p>
                <p className="text-gray-400 text-sm mt-1">{selectedIndex + 1} / {images.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;