import { Menu, Shield, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#00E5FF]" />
          <span className="font-display font-semibold text-xl tracking-tight">Aegis<span className="text-white/50">Tech</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-[#00E5FF] transition-colors duration-300">Services</a>
          <a href="#process" className="hover:text-[#00E5FF] transition-colors duration-300">Process</a>
          <a href="#portfolio" className="hover:text-[#00E5FF] transition-colors duration-300">Portfolio</a>
          <a href="#testimonials" className="hover:text-[#00E5FF] transition-colors duration-300">Reviews</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:block px-5 py-2.5 rounded-full bg-[#00E5FF] text-black text-sm font-semibold hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:scale-105 transition-all duration-300">
            Get a Quote
          </a>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.nav
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-0 top-[64px] z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#services" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium py-2 hover:text-[#00E5FF] transition-colors">Services</a>
          <a href="#process" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium py-2 hover:text-[#00E5FF] transition-colors">Process</a>
          <a href="#portfolio" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium py-2 hover:text-[#00E5FF] transition-colors">Portfolio</a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium py-2 hover:text-[#00E5FF] transition-colors">Reviews</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 w-full block text-center px-5 py-3 rounded-full bg-[#00E5FF] text-black text-sm font-semibold">Get a Quote</a>
        </motion.nav>
      )}
    </>
  );
}
