import React from 'react';
import { PROPERTY_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-10 md:py-14 border-b border-gray-100" id="home">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left">
          
          {/* Main Address Block */}
          {/* Mobile: Stacked (col), Centered items. Desktop: Row, Left aligned, Logo left of text. */}
          <div className="w-full md:w-auto mb-8 md:mb-0 flex flex-col md:flex-row items-center md:items-center md:gap-8">
            
            {/* Agency Logo */}
            <div className="flex justify-center md:justify-start mb-6 md:mb-0 shrink-0">
              <img 
                src="images/Elite%20Logo.svg" 
                alt="Elite Real Estate Pros" 
                className="h-16 md:h-24 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }} 
              />
            </div>

            {/* Address & Stats Wrapper */}
            <div className="w-full md:w-auto">
                <div className="mb-6">
                   <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-navy-900 font-medium tracking-tight mb-2 leading-tight">
                    {PROPERTY_INFO.address}
                  </h1>
                  <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide">{PROPERTY_INFO.cityStateZip}</p>
                </div>
                
                {/* Key Property Stats - Clean Row */}
                <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-8 text-gray-600">
                  
                  <div className="flex items-baseline group">
                    <span className="text-xl md:text-2xl font-serif text-navy-900 mr-1 md:mr-2 group-hover:text-navy-700 transition-colors">{PROPERTY_INFO.beds}</span> 
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-gray-400">Beds</span>
                  </div>
                  
                  <div className="w-px h-6 bg-gray-200 block"></div>
                  
                  <div className="flex items-baseline group">
                    <span className="text-xl md:text-2xl font-serif text-navy-900 mr-1 md:mr-2 group-hover:text-navy-700 transition-colors">{PROPERTY_INFO.baths}</span> 
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-gray-400">Baths</span>
                  </div>
                  
                  <div className="w-px h-6 bg-gray-200 block"></div>
                  
                  <div className="flex items-baseline group">
                    <span className="text-xl md:text-2xl font-serif text-navy-900 mr-1 md:mr-2 group-hover:text-navy-700 transition-colors">{PROPERTY_INFO.sqft.toLocaleString()}</span> 
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-gray-400">Sq Ft</span>
                  </div>
                </div>
            </div>
          </div>
          
          {/* Price & Status Block */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-end border-t md:border-t-0 border-gray-100 pt-6 md:pt-0 mt-2 md:mt-0">
            {PROPERTY_INFO.originalPrice && (
              <span className="text-lg md:text-xl text-gray-400 line-through mb-1">{PROPERTY_INFO.originalPrice}</span>
            )}
            <div className="text-3xl md:text-5xl font-serif text-navy-900 mb-3 flex items-center gap-3">
              {PROPERTY_INFO.originalPrice && (
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {PROPERTY_INFO.price}
            </div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-800 text-xs font-bold uppercase tracking-widest border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              {PROPERTY_INFO.status}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;