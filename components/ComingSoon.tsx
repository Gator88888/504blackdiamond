import React, { useState, useEffect } from 'react';
import { PROPERTY_INFO, AGENT_INFO } from '../constants';

interface ComingSoonProps {
  onBypass?: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ onBypass }) => {
  const cleanPhone = AGENT_INFO.phone.replace(/\D/g, '');
  const [clickCount, setClickCount] = useState(0);

  // Hidden Keyboard Command: Type "unlock" anywhere
  useEffect(() => {
    let buffer = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      buffer += e.key.toLowerCase();
      if (buffer.endsWith('unlock')) {
        onBypass?.();
      }
      // Keep buffer short
      if (buffer.length > 20) buffer = buffer.substring(buffer.length - 10);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBypass]);

  // Hidden Click Command: Click the badge 5 times
  const handleBadgeClick = () => {
    const nextCount = clickCount + 1;
    if (nextCount >= 5) {
      onBypass?.();
    } else {
      setClickCount(nextCount);
      // Reset if they stop clicking for 2 seconds
      const timer = setTimeout(() => setClickCount(0), 2000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/6981779_1_0.jpg" 
          alt="Coming Soon Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
          onError={(e) => {
             // Fallback if local image missing
             e.currentTarget.src = "https://images.unsplash.com/photo-1600596542815-6ad4c10c4d28?q=80&w=2000&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        
        {/* Sneaky Trigger Badge */}
        <div 
          className="inline-block mb-8 cursor-default select-none group" 
          onClick={handleBadgeClick}
          title="Residence Status"
        >
          <span className="py-2 px-6 border border-accent-gold text-accent-gold text-sm font-bold uppercase tracking-[0.3em] rounded-sm transition-all group-active:scale-95">
            Coming Soon
          </span>
        </div>

        {/* Main Address */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-tight">
          {PROPERTY_INFO.address}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-12">
          {PROPERTY_INFO.cityStateZip}
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-accent-gold mx-auto mb-12 opacity-50"></div>

        {/* Property Teaser Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-200 mb-16">
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-serif text-white mb-1">{PROPERTY_INFO.beds}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Bedrooms</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-serif text-white mb-1">{PROPERTY_INFO.baths}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Bathrooms</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-serif text-white mb-1">{PROPERTY_INFO.sqft.toLocaleString()}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Sq Ft</span>
          </div>
        </div>

        {/* Footer / Contact */}
        <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Interested? Contact Listing Agent</p>
          <div className="space-y-3">
            <p className="text-xl font-serif font-bold text-white">{AGENT_INFO.name}</p>
            
            <a href={`tel:${cleanPhone}`} className="block text-xl md:text-2xl font-bold hover:text-accent-gold transition-colors">
              {AGENT_INFO.phone}
            </a>
            
            <a href={`mailto:${AGENT_INFO.email}`} className="block text-gray-400 hover:text-white transition-colors">
              {AGENT_INFO.email}
            </a>
            
            <a href={`https://${AGENT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-accent-gold hover:text-white mt-2 transition-colors uppercase tracking-widest">
              {AGENT_INFO.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;