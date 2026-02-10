import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[85vh] relative overflow-hidden bg-navy-950" id="home">
      <img 
        src="images/6981779_1_0.jpg" 
        alt="504 E Black Diamond Dr" 
        className="w-full h-full object-cover animate-ken-burns opacity-70"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/20 to-transparent"></div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center p-6">
        <div className="max-w-5xl mx-auto reveal">
          <p className="font-sans font-bold text-xs md:text-sm lg:text-lg uppercase tracking-[0.3em] text-gold-light mb-6 md:mb-8 drop-shadow-md">
            Expansive Single-Level Living
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight shadow-black drop-shadow-lg">
            Welcome to Your <br className="hidden md:block" /> Forever Home
          </h2>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;