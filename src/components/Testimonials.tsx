import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Factory Owner, Lahore",
    text: "AegisTech installed 32 cameras across our manufacturing unit. The AI analytics have cut theft incidents to zero. Their team was professional from day one.",
    rating: 5
  },
  {
    name: "Dr. Fatima Khan",
    role: "Hospital Administrator",
    text: "We needed a comprehensive security overhaul for our 200-bed hospital. AegisTech delivered fire alarms, access control, and CCTV — all integrated seamlessly.",
    rating: 5
  },
  {
    name: "Bilal Mahmood",
    role: "Retail Chain Manager",
    text: "Their 24/7 monitoring gives me complete peace of mind. I can check any of our 5 store locations from my phone anytime. Best investment we've made.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-32 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Trusted by homes, hospitals, factories, and retail chains across Pakistan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#00E5FF]/20 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00E5FF] text-[#00E5FF]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-6 text-[15px]">"{t.text}"</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] font-bold text-sm" aria-hidden="true">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <cite className="not-italic text-white font-medium text-sm block">{t.name}</cite>
                  <span className="text-white/40 text-xs">{t.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
