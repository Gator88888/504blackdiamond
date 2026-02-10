import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Map from './components/Map';
import { HOASection, SolarSection } from './components/InfoSections';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import { SHOW_COMING_SOON } from './constants';

function App() {
  const [isBypassed, setIsBypassed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('listing_bypass_active') === 'true';
    }
    return false;
  });

  // State for runtime configuration
  const [showComingSoon, setShowComingSoon] = useState(SHOW_COMING_SOON);
  const [configLoaded, setConfigLoaded] = useState(false);

  useEffect(() => {
    // Fetch external config file to allow toggling without recompilation
    // We add a timestamp to prevent browser caching when you update the file
    fetch('/config.json?t=' + new Date().getTime())
      .then(res => res.json())
      .then(config => {
        if (typeof config.showComingSoon === 'boolean') {
          setShowComingSoon(config.showComingSoon);
        }
      })
      .catch(err => {
        console.warn('Config load failed, using default:', err);
      })
      .finally(() => {
        setConfigLoaded(true);
      });
  }, []);

  const handleBypass = () => {
    sessionStorage.setItem('listing_bypass_active', 'true');
    setIsBypassed(true);
  };

  useEffect(() => {
    // Scroll reveal logic
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Only look for elements if we aren't showing the splash screen
    if (!showComingSoon || isBypassed) {
        // Small delay to ensure DOM is rendered
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }, 100);
    }
    
    return () => observer.disconnect();
  }, [isBypassed, showComingSoon, configLoaded]);

  // Prevent rendering until we know the config state to avoid flashing the wrong UI
  if (!configLoaded) {
     return <div className="min-h-screen bg-navy-900"></div>; 
  }

  if (showComingSoon && !isBypassed) {
    return <ComingSoon onBypass={handleBypass} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Details />
        <Gallery />
        <SolarSection />
        <HOASection />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;