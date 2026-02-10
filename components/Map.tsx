import React from 'react';

const Map: React.FC = () => {
  const addressEncoded = encodeURIComponent("504 E Black Diamond Dr, Casa Grande, AZ 85122");
  
  return (
    <section id="map" className="py-0 relative h-96 w-full bg-gray-200">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        // Using the legacy output=embed format to display the map without needing a Google Cloud API Key
        src={`https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
        title="Map Location"
      >
      </iframe>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-gray-100 -z-10">
        <p className="text-gray-500 font-medium">Map Loading...</p>
      </div>
    </section>
  );
};

export default Map;