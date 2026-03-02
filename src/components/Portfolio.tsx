import { motion } from 'motion/react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    title: "Corporate Headquarters",
    category: "Access Control & CCTV"
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    title: "Luxury Residence",
    category: "Smart Home Security"
  },
  {
    image: "https://images.unsplash.com/photo-1565610222536-ce1278f5a79c?q=80&w=2070&auto=format&fit=crop",
    title: "Industrial Warehouse",
    category: "Perimeter Defense"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
    title: "Retail Complex",
    category: "Comprehensive Surveillance"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6"
            >
              Crafted Installations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 max-w-xl text-lg"
            >
              We treat every installation like a work of art. Clean wiring, strategic placement, and seamless integration.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-medium"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-[#111111]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#00E5FF] text-sm font-medium mb-2 tracking-wide">{project.category}</p>
                <h3 className="text-2xl font-display font-medium text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
