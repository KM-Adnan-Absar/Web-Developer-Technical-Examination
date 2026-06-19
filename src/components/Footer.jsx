
import { Check, X } from 'lucide-react';

export default function PricingAndFooter() {
  return (
    <section className="relative py-10 bg-white">
      {/* Wave Blue Background for Footer area */}
      <div className="absolute bottom-0 inset-x-0 h-[460px] bg-[#25549c] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1d3a]">
            Help Is One Click Away
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          
          {/* Card 1: Free Basic */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[360px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div className="bg-[#eff5ff] rounded-2xl p-6 text-center w-32 flex-shrink-0">
                <h3 className="text-2xl font-bold text-[#2b72c4]">Free</h3>
                <p className="text-xs text-slate-400 font-semibold mt-1">Basic</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-[#2b72c4]" strokeWidth={3} />
                  <span>1 Active Job</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-[#2b72c4]" strokeWidth={3} />
                  <span>Basic List Placement</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-400">
                  <X className="w-4 h-4 text-slate-400" strokeWidth={3} />
                  <span>Unlimited Job Applicants</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-400">
                  <X className="w-4 h-4 text-slate-400" strokeWidth={3} />
                  <span>Invite Anyone to Apply to Your Jobs</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3.5 border-2 border-[#1e4e8c] text-[#1e4e8c] font-bold rounded-2xl hover:bg-slate-50 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Card 2: Premium */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_20px_50px_rgba(37,84,156,0.1)] flex flex-col justify-between min-h-[360px] relative">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div className="bg-[#eff5ff] rounded-2xl p-6 text-center w-32 flex-shrink-0 relative">
                {/* Premium Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d2f1ff] text-[#1e4e8c] text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Premium
                </div>
                <h3 className="text-2xl font-bold text-[#2b72c4] mt-1">$79.99</h3>
                <p className="text-xs text-slate-400 font-semibold mt-1">Per Month</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-[#2b72c4]" strokeWidth={3} />
                  <span>Unlimited Job Posts</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-[#2b72c4]" strokeWidth={3} />
                  <span>Instant Job Post Approval</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-[#2b72c4]" strokeWidth={3} />
                  <span>Premium List Placement</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-[#2b72c4]" strokeWidth={3} />
                  <span>Unlimited Job Applicants</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-4 bg-[#1e4e8c] text-white font-bold rounded-2xl hover:bg-[#153a6b] transition-colors duration-200 shadow-md shadow-blue-900/20">
              Get Started
            </button>
          </div>

        </div>

        {/* Footer Area */}
        <div className="border-t border-white/10 pt-12 pb-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-white font-bold text-2xl tracking-tight text-left">
            Remote<span className="block text-sm -mt-1 opacity-90">Recruit</span>
          </div>

          {/* Social Icons - Pure SVG (Never Crashes Vite!) */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-4 1.5-4 4v2z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" h="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}