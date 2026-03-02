import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#050505]/40 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-[#00E5FF]" />
        <span className="font-display font-semibold text-xl tracking-tight">Aegis<span className="text-white/50">Tech</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>
      <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium backdrop-blur-md transition-all">
        Get a Quote
      </button>
    </motion.nav>
  );
}
