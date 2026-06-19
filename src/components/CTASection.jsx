
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#f5f7ff] to-[#e0e7ff] py-20 lg:py-28 min-h-[70vh] flex items-center">
      
      {/* Background Abstract Circles & Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Large top-right soft curve overlay */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white rounded-full opacity-60 mix-blend-screen" />
        
        {/* Floating elements mimicking the design dots */}
        <div className="absolute top-12 left-1/4 w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-md animate-bounce duration-[3000ms]" />
        <div className="absolute bottom-12 right-1/4 w-6 h-6 rounded-full bg-gradient-to-b from-[#2b72c4] to-[#1e4e8c]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Dashboard Preview Frame (Takes 7 cols on desktop) */}
          <div className="lg:col-span-7 relative hidden sm:block">
            {/* The Outer Main Frame Wrapper mimicking the split container */}
            <div className="bg-white rounded-l-[32px] border border-slate-200/50 shadow-2xl overflow-hidden flex h-[480px] w-[110%] translate-x-[-5%]">
              
              {/* Sidebar Component Mimic */}
              <div className="w-1/4 bg-[#102a54] p-4 flex flex-col space-y-4">
                <div className="text-white font-bold text-xs tracking-tight mb-6">RemoteRecruit</div>
                <div className="h-7 bg-white/10 rounded-lg w-full" />
                <div className="h-7 bg-transparent rounded-lg w-full" />
                <div className="h-7 bg-transparent rounded-lg w-full" />
              </div>

              {/* Main Feed Content Mimic */}
              <div className="w-3/4 bg-slate-50/50 p-6 flex flex-col space-y-4 overflow-hidden">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">Welcome Max</span>
                    <h4 className="text-base font-bold text-slate-800">Let's Find Work</h4>
                  </div>
                  <div className="w-24 h-6 bg-slate-200/60 rounded-full" />
                </div>

                {/* Job Cards Mimic Feed */}
                <div className="space-y-3 opacity-90">
                  {/* Card 1 */}
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-2">
                    <div className="w-20 h-3 bg-blue-100 rounded" />
                    <h5 className="text-xs font-bold text-slate-800">Senior UI/UX Designer needed for ongoing support</h5>
                    <div className="w-full h-2 bg-slate-100 rounded" />
                  </div>
                  {/* Card 2 (Active/Highlighted state as seen in blueprint) */}
                  <div className="bg-[#1a365d] text-white p-4 rounded-xl shadow-md space-y-2">
                    <div className="w-16 h-3 bg-white/20 rounded" />
                    <h5 className="text-xs font-bold">Senior UI/UX Designer needed for ongoing support</h5>
                    <div className="w-full h-2 bg-white/10 rounded" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: CTA Texts and Buttons (Takes 5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left lg:pl-6">
            <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase block">
              Are you ready?
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f1d3a] tracking-tight leading-[1.15]">
              Help is only a few clicks away!
            </h2>
            
            <p className="text-base sm:text-lg text-slate-500 max-w-md font-normal leading-relaxed">
              Click Below to get set up super quickly and find help now!
            </p>

            {/* Action Trigger Elements */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-3 bg-[#acd7ff]/80 hover:bg-[#99cbff] text-[#1e4e8c] font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none">
                {/* Arrow Icon circle wrapper */}
                <div className="w-6 h-6 rounded-full bg-[#1e4e8c] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <span className="text-base tracking-wide">Get Started</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}