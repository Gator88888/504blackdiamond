import React from 'react';
import { PROPERTY_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-10 md:py-14 border-b border-gray-100" id="home">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left">
          
          {/* Main Address Block */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <div className="mb-6">
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-navy-900 font-medium tracking-tight mb-2 leading-tight">
                {PROPERTY_INFO.address}
              </h1>
              <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide">{PROPERTY_INFO.cityStateZip}</p>
            </div>
            
            {/* Key Property Stats - Clean Row */}
            {/* Mobile: Horizontal layout with smaller text/spacing. Desktop: Larger. */}
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
          
          {/* Price & Status Block */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-end border-t md:border-t-0 border-gray-100 pt-6 md:pt-0 mt-2 md:mt-0">
            <div className="text-3xl md:text-5xl font-serif text-navy-900 mb-3">{PROPERTY_INFO.price}</div>
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