import { motion } from 'motion/react';

// Inline SVG logo components for reliability — no external dependencies
function HikvisionLogo() {
  return (
    <svg viewBox="0 0 200 40" className="h-6 md:h-8 w-auto" fill="currentColor" aria-label="Hikvision">
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" letterSpacing="-0.5">
        <tspan fill="#E30613">HIK</tspan><tspan fill="currentColor">VISION</tspan>
      </text>
    </svg>
  );
}

function DahuaLogo() {
  return (
    <svg viewBox="0 0 180 40" className="h-6 md:h-8 w-auto" aria-label="Dahua Technology">
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" letterSpacing="1">
        <tspan fill="#E4002B">D</tspan><tspan fill="currentColor">AHUA</tspan>
      </text>
      <text x="0" y="39" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="8" fill="currentColor" opacity="0.5" letterSpacing="3.5">
        TECHNOLOGY
      </text>
    </svg>
  );
}

function ZktecoLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-6 md:h-8 w-auto" aria-label="ZKTeco">
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="28" letterSpacing="1">
        <tspan fill="#0072BC">ZK</tspan><tspan fill="currentColor">Teco</tspan>
      </text>
    </svg>
  );
}

function UniviewLogo() {
  return (
    <svg viewBox="0 0 180 40" className="h-6 md:h-8 w-auto" aria-label="Uniview">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill="currentColor" letterSpacing="2">
        UNIVIEW
      </text>
      <rect x="0" y="32" width="40" height="3" rx="1.5" fill="#00A0E9" />
    </svg>
  );
}

function EzvizLogo() {
  return (
    <svg viewBox="0 0 140 40" className="h-6 md:h-8 w-auto" aria-label="EZVIZ">
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="30" letterSpacing="2">
        <tspan fill="#FF6600">EZ</tspan><tspan fill="currentColor">VIZ</tspan>
      </text>
    </svg>
  );
}

const logos = [
  { id: 'hikvision', Component: HikvisionLogo },
  { id: 'dahua', Component: DahuaLogo },
  { id: 'zkteco', Component: ZktecoLogo },
  { id: 'uniview', Component: UniviewLogo },
  { id: 'ezviz', Component: EzvizLogo },
];

export default function TrustBar() {
  // Double the logos for seamless infinite scroll
  const scrollLogos = [...logos, ...logos];

  return (
    <section className="relative z-10 overflow-hidden" aria-label="Authorized partners">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080c10] to-[#050505]" />
      
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

      <div className="relative py-10 md:py-14">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8 px-6"
        >
          <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#00E5FF]/30" />
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/30 uppercase">
            Authorized Partners
          </h2>
          <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#00E5FF]/30" />
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#080c10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#080c10] to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {scrollLogos.map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center px-6 py-3 rounded-xl border border-white/[0.04] bg-white/[0.02] text-white/50 hover:text-white/80 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
              >
                <logo.Component />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

      {/* Marquee keyframe animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
