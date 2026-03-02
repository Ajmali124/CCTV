import { motion } from 'motion/react';

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#050505]/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-white/40 uppercase tracking-widest mb-8">Authorized Partners & Equipment</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-display font-bold tracking-tighter">HIKVISION</div>
          <div className="text-2xl font-display font-bold tracking-tighter">alhua</div>
          <div className="text-2xl font-display font-bold tracking-tighter text-[#00E5FF]">ZKTECO</div>
          <div className="text-2xl font-display font-bold tracking-tighter">uniview</div>
        </div>
      </div>
    </section>
  );
}
