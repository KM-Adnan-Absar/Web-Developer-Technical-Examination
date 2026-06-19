

export default function GlobalReachFeature() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6 max-w-xl">
            {/* Pill Badge */}
            <div className="inline-block px-4 py-1.5 bg-[#d2f1ff] text-[#1e4e8c] text-sm font-semibold rounded-full tracking-wide">
              Global Reach
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1d3a] tracking-tight leading-tight">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
              RemoteRecruit connects candidates with opportunities around the world. With today's 
              remote-first workforce, you need to be able to find the best jobs and the best people for them, 
              wherever they may be.
            </p>
          </div>

          {/* Right Column: Visual Mockup Showcase */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Subtle Blue Floating Dot */}
            <div className="absolute top-4 left-4 md:left-12 w-5 h-5 rounded-full bg-[#2b72c4] animate-pulse" />

            {/* Main Mockup Card Container */}
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 rounded-[32px] border border-slate-200/60 shadow-2xl shadow-slate-200/80 max-w-[460px] w-full z-10">
              
              {/* Internal Mockup Image Placeholder / Layout */}
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm h-52 flex flex-col p-4 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Welcome Max</p>
                    <h4 className="text-sm font-bold text-slate-800">Let's Find Work</h4>
                  </div>
                  <div className="w-20 h-5 bg-slate-100 rounded-md" />
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-4 bg-blue-500/10 rounded-full" />
                  <div className="w-14 h-4 bg-slate-100 rounded-full" />
                  <div className="w-14 h-4 bg-slate-100 rounded-full" />
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between mt-auto">
                  <div className="space-y-1">
                    <div className="w-24 h-2.5 bg-slate-300 rounded" />
                    <div className="w-36 h-2 bg-slate-200 rounded" />
                  </div>
                  <div className="w-8 h-4 bg-blue-600/20 rounded" />
                </div>
              </div>
            </div>

            {/* Floating Talent Badge 1: Felonious Gru */}
            <div className="absolute left-[-20px] bottom-28 md:left-[-40px] bg-white/95 backdrop-blur-md py-3 px-5 rounded-full border border-slate-200/80 shadow-lg flex items-center gap-3 z-20 max-w-[240px] transition-transform duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
                  alt="Felonious Gru" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider truncate">Python Developer</p>
                <h5 className="text-sm font-bold text-slate-800 truncate">Felonious Gru</h5>
              </div>
            </div>

            {/* Floating Talent Badge 2: Mel Muselphiem */}
            <div className="absolute right-[-10px] bottom-4 bg-white/95 backdrop-blur-md py-3 px-5 rounded-full border border-slate-200/80 shadow-lg flex items-center gap-3 z-20 max-w-[240px] transition-transform duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" 
                  alt="Mel Muselphiem" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-sky-500 uppercase tracking-wider truncate">Front End Wizard</p>
                <h5 className="text-sm font-bold text-slate-800 truncate">Mel Muselphiem</h5>
              </div>
            </div>

            {/* RemoteRecruit Floating RR Logo Icon Block */}
            <div className="absolute right-[-20px] top-1/3 w-14 h-14 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] shadow-xl shadow-blue-500/30 flex items-center justify-center z-20 transition-transform duration-300 hover:scale-110">
              <span className="text-white font-extrabold text-lg tracking-tighter">RR</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}