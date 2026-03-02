import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#00E5FF]" />
          <span className="font-display font-medium text-lg tracking-tight">Aegis<span className="text-white/50">Tech</span></span>
        </div>
        <div className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} AegisTech Security Pakistan. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
