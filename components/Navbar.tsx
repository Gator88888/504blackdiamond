import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, DROPDOWN_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Adjust for sticky header height + breathing room
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-xl bg-navy-900/95 backdrop-blur-md' : 'bg-navy-900 shadow-none'} text-white`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Branding - Now shows Address */}
          <div className="md:hidden text-md font-serif font-bold tracking-wide truncate pr-4">
            504 E Black Diamond
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-start space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Desktop More Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center py-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-white transition-colors focus:outline-none"
                aria-haspopup="true"
              >
                More
                <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-4 w-56 bg-white shadow-2xl rounded-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border-t-2 border-navy-900">
                <div className="py-2">
                  {DROPDOWN_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy-900 tracking-wide font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col pb-6 pt-2 space-y-1 bg-navy-900 border-t border-navy-800">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 hover:bg-navy-800 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="flex w-full items-center justify-between px-4 py-3 hover:bg-navy-800 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white focus:outline-none"
              >
                More
                <svg className={`ml-1 h-4 w-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`bg-navy-950 transition-all duration-200 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                {DROPDOWN_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block pl-8 pr-4 py-3 text-sm text-gray-400 hover:text-white font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;