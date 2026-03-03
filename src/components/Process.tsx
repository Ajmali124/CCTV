import { motion } from 'motion/react';

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We visit your site, assess every vulnerability, and design a custom security plan tailored to your needs — completely free, no obligations.",
    detail: "Site survey • Risk assessment • Custom blueprint",
    image: "/images/process-consultation.png",
  },
  {
    step: "02",
    title: "Professional Installation",
    description: "Our certified engineers install your system with clean cabling, strategic camera placement, and thorough testing of every single component.",
    detail: "Clean cabling • Strategic placement • Full testing",
    image: "/images/process-installation.png",
  },
  {
    step: "03",
    title: "24/7 Support & Monitoring",
    description: "We monitor, maintain, and support your system around the clock from our command center. If something goes wrong, we're there within hours.",
    detail: "Remote monitoring • On-site response • Lifetime support",
    image: "/images/process-support.png",
  }
];

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-32 relative z-10 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-4 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Our Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6"
          >
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]/50">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-lg mx-auto text-base"
          >
            A seamless three-step journey trusted by 500+ clients across Pakistan.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dotted line — center on desktop, left on mobile */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px flex flex-col items-center" aria-hidden="true">
            <div className="w-px h-full" style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, rgba(0,229,255,0.3) 0px, rgba(0,229,255,0.3) 6px, transparent 6px, transparent 16px)'
            }} />
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.step} className="relative mb-10 lg:mb-24 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 top-8 -translate-x-1/2 z-10" aria-hidden="true">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#050505] border-2 border-[#00E5FF]/40 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#00E5FF]">{step.step}</span>
                    </div>
                    {/* Ping animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#00E5FF]/20 animate-ping" />
                  </motion.div>
                </div>

                {/* Card — slides from right on mobile, alternates on desktop */}
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                    isEven ? 'lg:mr-auto' : 'lg:ml-auto'
                  }`}
                >
                  <div className="group rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                    {/* Image */}
                    <div className="relative h-52 lg:h-64 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />

                      {/* Step title overlay */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-[#00E5FF] tracking-wider uppercase">
                        Step {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 -mt-4 relative">
                      <h3 className="text-xl lg:text-2xl font-display font-semibold mb-3">{step.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-5">{step.description}</p>
                      
                      {/* Detail chips */}
                      <div className="flex flex-wrap gap-2">
                        {step.detail.split(' • ').map(d => (
                          <span key={d} className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.03] border border-white/[0.06] text-white/30">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dashed connector arrow to timeline (desktop only) */}
                  <div
                    className={`hidden lg:block absolute top-12 w-8 h-px ${
                      isEven ? 'right-[calc(50%-3rem)]' : 'left-[calc(50%-3rem)]'
                    }`}
                    aria-hidden="true"
                    style={{
                      top: '2.5rem',
                      backgroundImage: 'repeating-linear-gradient(to right, rgba(0,229,255,0.3) 0px, rgba(0,229,255,0.3) 4px, transparent 4px, transparent 10px)'
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
