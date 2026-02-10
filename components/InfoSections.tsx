import React from 'react';

export const SolarSection: React.FC = () => {
  return (
    <section id="solar" className="py-20 md:py-32 bg-navy-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 reveal">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8">Solar ROI</h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Energy <span className="italic text-gold-light">Grandfathered.</span></h3>
            <p className="text-lg md:text-xl text-white/80 font-medium mb-6">
              Protected Power Rate Transferable to Buyer!
            </p>
            <p className="text-white/50 font-light leading-relaxed mb-10 max-w-xl">
              This home features a premium 8.5kW SunPower system with a fixed, grandfathered rate from 2013. Buyer assumes only the remaining ~7 years of the term, gaining inflation-proof power without the long-term commitment of a new contract.
            </p>
            
            <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:gap-x-12 border-t border-white/10 pt-10">
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold">$143</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Fixed Monthly Rate</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold">~7 Yrs</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Remaining Term</span>
              </div>
              <div>
                 <span className="block text-3xl md:text-4xl font-serif text-gold">8.5kW</span>
                 <span className="text-[10px] uppercase tracking-widest text-white/40">System Capacity</span>
              </div>
               <div>
                 <span className="block text-3xl md:text-4xl font-serif text-gold">~$0.12</span>
                 <span className="text-[10px] uppercase tracking-widest text-white/40">Per kWh Est.</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[480px] bg-white/[0.03] border border-white/10 p-8 md:p-12 backdrop-blur-xl reveal rounded-sm">
            <h4 className="font-serif text-2xl mb-8 italic text-white">Hassle-Free Terms</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Zero Maintenance</h5>
                  <p className="text-white/50 text-sm font-light leading-relaxed">Full bumper-to-bumper warranty and insurance included.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                   <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Guaranteed Production</h5>
                  <p className="text-white/50 text-sm font-light leading-relaxed">Annual output is contractually guaranteed by SunPower.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                   <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-1">End of Term Flexibility</h5>
                  <p className="text-white/50 text-sm font-light leading-relaxed">At Year 20 (approx. 2033), you have control: Remove it, Buy it, or Upgrade it.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HOASection: React.FC = () => {
  return (
    <section id="hoa" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 reveal">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-slate-200 pb-8">
          <div className="max-w-2xl w-full">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-4">Community</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-navy-900 leading-tight mb-4">Ghost Ranch <span className="italic text-gray-400">Lifestyle</span></h3>
            <p className="text-gray-500 font-light text-lg">A master-planned community designed for quiet living and long-term value.</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 shadow-sm border border-slate-100 group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold transition-colors">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-serif text-xl text-navy-900 mb-3">Value Preservation</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Strict architectural guidelines and immaculate maintenance of common areas protect your investment and ensure the neighborhood retains its premium appeal year after year.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 shadow-sm border border-slate-100 group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold transition-colors">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-serif text-xl text-navy-900 mb-3">Scenic Environment</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Embrace the serenity of the Sonoran Desert. The community is thoughtfully landscaped to blend with nature, offering peaceful walking paths and mountain views.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 shadow-sm border border-slate-100 group hover:-translate-y-1 transition-transform duration-300">
             <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold transition-colors">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h4 className="font-serif text-xl text-navy-900 mb-3">Parks & Recreation</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ideal for active lifestyles, the neighborhood features well-maintained parks, children's playgrounds, and green belts—perfect for morning jogs or evening strolls.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};