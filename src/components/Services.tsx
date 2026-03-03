import { motion } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    title: "CCTV Surveillance",
    description: "High-definition 4K IP cameras with AI-powered analytics, night vision, and remote mobile viewing. Complete 24/7 coverage for your premises.",
    image: "/images/service-cctv.png",
    brands: ["Hikvision", "Dahua", "EZVIZ"],
    stat: "4K Ultra HD",
  },
  {
    title: "Access Control",
    description: "Biometric fingerprint, RFID card, and facial recognition systems to secure entry points and manage employee attendance seamlessly.",
    image: "/images/service-access.png",
    brands: ["ZKTeco", "Suprema"],
    stat: "3s Verify",
  },
  {
    title: "Fire Alarms",
    description: "Advanced smoke detection and fire suppression systems compliant with international safety standards. Complete fire safety audits included.",
    image: "/images/service-fire.png",
    brands: ["Notifier", "GST"],
    stat: "0.5s Detection",
  },
  {
    title: "Networking",
    description: "Structured cabling, fiber optic, LAN/WAN setup, and enterprise WiFi networks for seamless connectivity across your organization.",
    image: "/images/service-network.png",
    brands: ["Ubiquiti", "TP-Link"],
    stat: "10 Gbps",
  }
];

interface ServiceCardProps {
  key: string;
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="sticky top-10 mb-8 lg:mb-0 lg:static"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06] group"
      >
        {/* Image + Content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px] lg:min-h-[420px]">
          {/* Image side */}
          <div className="relative h-56 lg:h-full overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Overlay gradient bottom (mobile) / right (desktop) */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]" />
            
            {/* Stat badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-[#00E5FF] tracking-wider">
              {service.stat}
            </div>
          </div>

          {/* Content side */}
          <div className="relative p-8 lg:p-10 flex flex-col justify-center">
            {/* Number */}
            <span className="text-7xl lg:text-8xl font-display font-black text-white/[0.03] absolute top-2 right-6 select-none" aria-hidden="true">
              0{index + 1}
            </span>

            <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-4 relative">{service.title}</h3>
            <p className="text-white/40 text-sm lg:text-base leading-relaxed mb-6 relative">{service.description}</p>

            {/* Brand tags */}
            <div className="flex flex-wrap gap-2 relative">
              {service.brands.map(brand => (
                <span
                  key={brand}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.03] border border-white/[0.06] text-white/30 group-hover:text-[#00E5FF]/70 group-hover:border-[#00E5FF]/15 group-hover:bg-[#00E5FF]/5 transition-all duration-500"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-32 relative z-10 bg-[#050505]">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.02)_0%,transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6"
          >
            Uncompromising
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]/50">Security</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-lg mx-auto text-base"
          >
            Enterprise-grade infrastructure — from single-camera homes to 200+ camera commercial sites.
          </motion.p>
        </div>

        {/* Cards — stack on mobile via sticky, grid on desktop */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
