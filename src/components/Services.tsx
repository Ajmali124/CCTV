import { motion } from 'motion/react';
import { Camera, Flame, Fingerprint } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description: "High-definition 4K IP cameras with AI-powered analytics, night vision, and remote mobile viewing."
  },
  {
    icon: Fingerprint,
    title: "Access Control",
    description: "Biometric, RFID, and facial recognition systems to secure your premises and manage employee attendance."
  },
  {
    icon: Flame,
    title: "Fire Alarms",
    description: "Advanced smoke detection and fire suppression systems compliant with international safety standards."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6"
          >
            Uncompromising Security
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            We design, install, and maintain enterprise-grade security infrastructure tailored to your specific vulnerabilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group p-8 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#00E5FF]/30 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#00E5FF]/10 transition-all duration-500">
                <service.icon className="w-7 h-7 text-white group-hover:text-[#00E5FF] transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-medium mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
