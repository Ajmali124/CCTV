import { ChevronRight, Flame, Radio, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-[#050505]">
      
      {/* ──── DESKTOP LAYOUT ──── */}
      <div className="hidden md:flex min-h-dvh">
        {/* Left Content — with top padding for fixed navbar */}
        <div className="relative z-10 flex flex-col justify-center w-[55%] pl-12 lg:pl-20 xl:pl-28 pr-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 backdrop-blur-md mb-8 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_10px_rgba(0,229,255,0.8)]"></span>
            <span className="text-xs font-semibold tracking-widest text-[#00E5FF] uppercase">Next-Gen Security</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-7xl xl:text-8xl font-display font-semibold tracking-tight leading-[1.05] mb-6"
          >
            Protecting<br />
            What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]/60">
              Matters
            </span>
            <br />Most
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-white/50 max-w-lg mb-10 leading-relaxed"
          >
            Premium surveillance, access control, and fire alarm solutions for homes and businesses across Pakistan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00E5FF] text-black font-semibold text-base overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,229,255,0.35)]">
              <span className="relative z-10">Get a Free Quote</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 text-white/80 font-medium text-base hover:bg-white/5 hover:border-white/30 transition-all">
              Our Services
            </a>
          </motion.div>

          {/* Mini stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 mt-14 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">500+</p>
                <p className="text-white/40 text-xs">Projects Done</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center">
                <Radio className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">24/7</p>
                <p className="text-white/40 text-xs">Monitoring</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">10+</p>
                <p className="text-white/40 text-xs">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative w-[45%]">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img 
              src="/images/hero-desktop.png" 
              alt="CCTV Security Camera" 
              className="w-full h-full object-cover"
            />
            {/* Soft left-edge blend only */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent w-[40%]"></div>
            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
            {/* Subtle teal glow */}
            <div className="absolute inset-0 bg-gradient-to-tl from-[#00E5FF]/5 via-transparent to-transparent"></div>
          </motion.div>
          {/* Decorative glow line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#00E5FF]/40 to-transparent"
          ></motion.div>
        </div>
      </div>

      {/* ──── MOBILE LAYOUT ──── */}
      <div className="flex md:hidden flex-col min-h-dvh relative">
        {/* Full-bleed background image covering entire section */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/images/hero-mobile.png" 
            alt="Security Camera" 
            className="w-full h-full object-cover object-top"
          />
          {/* Cinematic dark gradient from bottom — keeps image visible at top, text readable at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] from-30% via-[#050505]/85 via-55% to-[#050505]/20"></div>
          {/* Subtle teal ambient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/5 via-transparent to-transparent"></div>
          {/* Top fade for navbar blend */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#050505]/50 to-transparent"></div>
        </div>

        {/* Content — pinned to bottom half so image shows through top */}
        <div className="relative z-10 flex flex-col justify-end flex-1 px-6 pb-10 pt-20">
          {/* Spacer to push content to bottom portion */}
          <div className="flex-1 min-h-[30vh]"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 backdrop-blur-md mb-5 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.8)]"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00E5FF] uppercase">Next-Gen Security</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.75rem] leading-[1.05] font-display font-bold tracking-tight mb-4"
          >
            Protecting
            <br />
            What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]/50">
              Matters
            </span>
            <br />
            Most
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] text-white/50 mb-7 leading-relaxed max-w-[320px]"
          >
            Premium surveillance and security solutions for homes and businesses across Pakistan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00E5FF] text-black font-bold text-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
              <span className="relative z-10">Get a Free Quote</span>
              <ChevronRight className="w-4 h-4 relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 text-white/70 font-medium text-sm backdrop-blur-sm hover:bg-white/5 transition-all">
              Services
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex items-center gap-6 mt-8 pt-5 border-t border-white/8"
          >
            <div>
              <p className="text-[#00E5FF] font-bold text-lg leading-none mb-0.5">500+</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Projects</p>
            </div>
            <div className="w-px h-5 bg-white/10"></div>
            <div>
              <p className="text-[#00E5FF] font-bold text-lg leading-none mb-0.5">24/7</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Support</p>
            </div>
            <div className="w-px h-5 bg-white/10"></div>
            <div>
              <p className="text-[#00E5FF] font-bold text-lg leading-none mb-0.5">10+</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Years</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
