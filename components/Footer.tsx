import React from 'react';
import { AGENT_INFO } from '../constants';

const Footer: React.FC = () => {
  const cleanPhone = AGENT_INFO.phone.replace(/\D/g, '');

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-8 font-serif tracking-wide">Contact For More Information</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 flex-wrap">
          
          {/* Agent Name */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium text-lg">{AGENT_INFO.name}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${cleanPhone}`} className="font-medium text-lg hover:text-accent-gold transition-colors">{AGENT_INFO.phone}</a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${AGENT_INFO.email}`} className="font-medium text-lg hover:text-accent-gold transition-colors">{AGENT_INFO.email}</a>
          </div>

          {/* Website */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-9 3-9m-9 10c-1.657 0-3-9-3-9m2.81 18.232c-.11.25-.213.504-.308.76M3 12a9 9 0 019-9m-9 9c0 1.657 9 3 9 3m0-13a9 9 0 019 9" />
            </svg>
            <a href={`https://${AGENT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-lg hover:text-accent-gold transition-colors">
              {AGENT_INFO.website}
            </a>
          </div>

        </div>
        <div className="mt-10 pt-8 border-t border-navy-800 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;