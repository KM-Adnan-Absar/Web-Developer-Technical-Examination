
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#25549c] text-white py-24 lg:py-36 min-h-[85vh] flex items-center">
      {/* Abstract Background Shapes as seen in image_6626e2.jpg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Top left subtle glow circle */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        

        
        {/* Bottom left small accent curve */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-400/20 rounded-full blur-xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
        >
          RemoteRecruit’s Difference
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-normal"
        >
          RemoteRecruit is connecting the world with an easy-to-use platform that lets 
          full-time, part-time, and freelance workers showcase their talents to 
          businesses that need them. With no paywalls, no fees, and no barriers, there’s 
          nothing but you, your talents, and the next step in your career.
        </motion.p>
      </div>
    </section>
  );
}