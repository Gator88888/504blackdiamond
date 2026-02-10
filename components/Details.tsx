import React from 'react';
import { PROPERTY_INFO } from '../constants';

const Details: React.FC = () => {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-gray-100 pb-12 reveal">
            <div className="text-center group cursor-default">
              <span className="block text-4xl md:text-5xl font-serif text-navy-900 mb-2 group-hover:scale-110 transition-transform duration-300">{PROPERTY_INFO.beds}</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Bedrooms</span>
            </div>
            <div className="text-center group cursor-default">
              <span className="block text-4xl md:text-5xl font-serif text-navy-900 mb-2 group-hover:scale-110 transition-transform duration-300">{PROPERTY_INFO.baths}</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Bathrooms</span>
            </div>
            <div className="text-center group cursor-default">
              <span className="block text-4xl md:text-5xl font-serif text-navy-900 mb-2 group-hover:scale-110 transition-transform duration-300">{PROPERTY_INFO.garage}</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Car Garage</span>
            </div>
            <div className="text-center group cursor-default">
              <span className="block text-4xl md:text-5xl font-serif text-navy-900 mb-2 group-hover:scale-110 transition-transform duration-300">{PROPERTY_INFO.sqft.toLocaleString()}</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Sq Ft</span>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start mb-24">
            <div className="md:col-span-7 reveal">
               <h2 className="text-1xl font-bold uppercase tracking-widest text-gold mb-4">The Residence</h2>
               <h3 className="text-3xl md:text-4xl font-serif text-navy-900 mb-8 leading-tight">Immaculate Single-Level Living in Casa Grande</h3>
               
               <div className="text-gray-500 font-light leading-relaxed text-lg space-y-6">
                 <p className="font-serif text-xl md:text-2xl text-navy-800 italic leading-relaxed border-l-4 border-gold pl-6 mb-8 text-left">
                   "Welcome to this immaculate single-level residence that perfectly blends modern comfort with desert elegance."
                 </p>
                 <p>
                   Situated in a sought-after Casa Grande neighborhood, this 4-bedroom home offers an expansive open-concept layout designed for effortless living and entertaining. The gourmet kitchen features ample counter space and modern appliances, flowing seamlessly into a light-filled great room.
                 </p>
                 <p>
                   Outside, discover your private retreat with a covered patio and professionally designed low-maintenance landscaping—ideal for enjoying Arizona's beautiful sunsets. With a spacious 3-car garage and significant energy savings from the installed solar system, this home checks every box for luxury and practicality.
                 </p>
               </div>
            </div>
            
            <div className="md:col-span-5 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-navy-50 p-8 rounded-sm sticky top-32">
                <h3 className="font-serif text-xl text-navy-900 mb-6 border-b border-navy-200 pb-2">Residence Features</h3>
                <ul className="space-y-4">
                  {PROPERTY_INFO.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-navy-700 rounded-full mr-4"></span>
                      <span className="text-sm font-medium tracking-wide uppercase text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Updated Status/Price Section for better mobile display */}
                <div className="mt-8 pt-6 border-t border-navy-200 grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Status</p>
                        <p className="text-navy-900 font-bold">{PROPERTY_INFO.status}</p>
                    </div>
                    <div>
                         <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Asking Price</p>
                         <p className="text-xl md:text-2xl font-serif text-navy-900">{PROPERTY_INFO.price}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Location Highlights Section */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center mb-16 max-w-3xl mx-auto reveal">
                <h3 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-3">Location Highlights</h3>
                <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">Small Town Price, Big City Access</h2>
                <p className="text-gray-500 font-light text-lg">Strategic living in the heart of the Arizona Innovation Corridor.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {/* Item 1 */}
                <div className="flex gap-5 items-start group reveal">
                    <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-900 transition-colors duration-300">
                        <svg className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    </div>
                    <div>
                        <h4 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-gold transition-colors">Strategic "Hub" Location</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">Enjoy the affordability of Casa Grande without sacrificing access. You are perfectly positioned midway between Phoenix and Tucson, with fast access to the I-10 & I-8 interchange for seamless commuting.</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-5 items-start group reveal" style={{ transitionDelay: '100ms' }}>
                    <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-900 transition-colors duration-300">
                        <svg className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                     <div>
                        <h4 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-gold transition-colors">Massive Industrial Growth</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">Invest where the jobs are. Casa Grande is booming with major industrial expansion, including Lucid Motors and the semiconductor supply chain, making this home a smart long-term investment.</p>
                     </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-5 items-start group reveal">
                    <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-900 transition-colors duration-300">
                        <svg className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </div>
                     <div>
                        <h4 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-gold transition-colors">Minutes to The Promenade</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">Everything you need is just down the street. Enjoy premier shopping, dining, and movies at the Promenade at Casa Grande, featuring Dillard's, Harkins Theatres, and diverse dining options.</p>
                     </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-5 items-start group reveal" style={{ transitionDelay: '100ms' }}>
                     <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-900 transition-colors duration-300">
                        <svg className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                     <div>
                        <h4 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-gold transition-colors">Outdoor Recreation & Golf</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">Live where you play. You are minutes from the Dave White Municipal Golf Course and extensive hiking/biking trails at Casa Grande Mountain.</p>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;