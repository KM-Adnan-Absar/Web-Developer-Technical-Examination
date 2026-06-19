


export default function ShowcaseTalentFeature() {
  const tags = ["Python Dev", "Javascript", "Front End", "Back End", "IOS Development", "+12"];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6 max-w-xl">
            {/* Pill Badge */}
            <div className="inline-block px-4 py-1.5 bg-[#d2f1ff] text-[#1e4e8c] text-sm font-semibold rounded-full tracking-wide">
              Custom Profile
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1d3a] tracking-tight leading-tight">
              Showcase Your Talents
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
              Personalize your profile with everything that makes you unique. Add an introductory video and other 
              media for a personal touch that stands out to employers and candidates.
            </p>
          </div>

          {/* Right Column: Profile Showcase Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Blue Floating Accent Dot */}
            <div className="absolute top-4 left-6 md:left-14 w-5 h-5 rounded-full bg-[#2b72c4]" />

            {/* Main Outer Mockup Dashboard Frame */}
            <div className="relative bg-gradient-to-b from-slate-50 to-white p-6 rounded-[32px] border border-slate-200/60 shadow-2xl shadow-slate-100 max-w-[440px] w-full z-10 flex flex-col space-y-5">
              
              {/* Profile Card Inside Frame */}
              <div className="bg-[#102a54] text-white rounded-2xl p-5 relative overflow-hidden h-40 flex flex-col justify-between shadow-inner">
                {/* Background Abstract Shape */}
                <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-pink-500/20 rounded-full blur-xl" />
                
                <div>
                  <h4 className="text-base font-bold tracking-wide">102 Jobs Completed!</h4>
                  <p className="text-[10px] text-slate-300">$150,000 Earned over 12 Months</p>
                </div>

                {/* Internal User Profile Stripe */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between text-slate-800 shadow-md">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex-shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Dylan M...</h5>
                      <p className="text-[9px] text-slate-400">Front End Developer</p>
                    </div>
                  </div>
                  <div className="w-14 h-5 bg-sky-500 rounded-md text-[9px] text-white font-bold flex items-center justify-center">
                    See Profile
                  </div>
                </div>
              </div>

           

              {/* Skill Tags Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      tag.startsWith('+') 
                        ? 'bg-slate-100 text-slate-600' 
                        : 'bg-[#eef2ff] text-[#2b72c4]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Floating Feedback Badge */}
            <div className="absolute left-[-15px] bottom-24 md:left-[-35px] bg-white/95 backdrop-blur-md py-3.5 px-5 rounded-full border border-slate-200/80 shadow-lg flex items-center gap-3.5 z-20 max-w-[260px] transition-transform duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
                  alt="Client Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Past Client Feedback</p>
                <h5 className="text-sm font-bold text-slate-800 truncate">Best Developer Ever!</h5>
              </div>
            </div>

            {/* Overlapping Avatar Circle on the right edge */}
            <div className="absolute right-[-15px] top-1/3 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-slate-300/60 z-20">
              <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" 
                alt="Developer Profile" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}