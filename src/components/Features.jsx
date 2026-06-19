
import { Check } from 'lucide-react';

export default function Features() {
  const featureList = [
    "Up to 25 active job posts",
    "Premium Placement & Visibility",
    "Messaging anyone, unlimited",
    "Unlimited invites",
    "View all applicants",
    "Unlimited invites to jobseekers"
  ];

  return (
    <section className="py-16  lg:py-10 bg-white overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Visual Mockup Showcase (Recreated from image) */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 " >
            
            {/* Background Dot Decorative element */}
            <div className="absolute top-0 left-12 w-6 h-6 rounded-full bg-blue-600/90" />

            {/* Main Membership Tier Card */}
            <div className="relative bg-white rounded-[32px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 md:p-10 max-w-[380px] w-full z-10 ">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Your Membership Tier
              </span>
              <h3 className="text-2xl font-bold text-[#2b72c4] mb-6">Premium</h3>
              
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Features
              </span>
              
              {/* Feature List with exact spacing */}
              <ul className="space-y-4">
                {featureList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#e3f2fd] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#2b72c4]" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RemoteRecruit Floating Circle (Overlapping on the right) */}
            <div className="absolute right-4 md:right-12 top-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] shadow-xl shadow-blue-500/20 flex items-center justify-center z-20 transition-transform duration-300 hover:scale-110">
              <span className="text-white font-extrabold text-xl tracking-tighter">RR</span>
            </div>

            {/* Upcoming Payment Floating Pill Card (Overlapping at the bottom-left) */}
            <div className="absolute -bottom-6 left-[-10px] md:left-[-20px] bg-white/95 backdrop-blur-md py-2 px-5 rounded-full border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center gap-4 z-20 w-72 transition-transform duration-300 hover:-translate-y-1 ">
              {/* PayPal Blue Icon Style Rounded Wrapper */}
              <div className="w-11 h-11 rounded-full bg-[#e8f0fe] flex items-center justify-center flex-shrink-0 ">
                <span className="text-[#253b80] font-black text-lg italic">P</span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-[#1a365d] tracking-wide truncate">Upcoming Payment In...</p>
                <h4 className="text-base font-bold text-slate-800">14 Days - $79.99</h4>
              </div>
            </div>

          </div>

          {/* Right Column: Content */}
          <div className="space-y-6 max-w-xl order-1 lg:order-2">
            {/* Pill Badge */}
            <div className="inline-block px-4 py-1.5 bg-[#d2f1ff] text-[#1e4e8c] text-sm font-semibold rounded-full tracking-wide">
              Actually Fee Free
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1d3a] tracking-tight leading-tight">
              Fee-Free Forever
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
              We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects 
              job opportunities with the best candidates, with no middleman involved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}