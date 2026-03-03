import { motion } from 'motion/react';
import { CircularGallery, GalleryItem } from './ui/circular-gallery';

const projects: GalleryItem[] = [
  {
    common: 'Corporate HQ',
    binomial: '32 Dome Cameras • Gulberg, Lahore',
    photo: {
      url: '/images/project-corporate.png',
      text: 'CCTV dome cameras installed at corporate office ceiling in Lahore',
      pos: '50% 30%',
      by: 'AegisTech'
    }
  },
  {
    common: 'Shopping Mall',
    binomial: 'PTZ Surveillance • Packages Mall',
    photo: {
      url: '/images/project-mall.png',
      text: 'PTZ CCTV camera monitoring shopping mall floor in Lahore',
      pos: '50% 40%',
      by: 'AegisTech'
    }
  },
  {
    common: 'Industrial Warehouse',
    binomial: '48 Bullet Cameras • Sundar Industrial',
    photo: {
      url: '/images/project-factory.png',
      text: 'Bullet cameras along warehouse wall in Lahore factory',
      pos: '60% 40%',
      by: 'AegisTech'
    }
  },
  {
    common: 'Luxury Residence',
    binomial: 'Smart Home Security • DHA Phase 5',
    photo: {
      url: '/images/project-residence.png',
      text: 'CCTV camera at luxury house entrance in DHA Lahore',
      pos: '50% 40%',
      by: 'AegisTech'
    }
  },
  {
    common: 'Hospital Command Center',
    binomial: '200-Bed Facility • Johar Town',
    photo: {
      url: '/images/project-hospital.png',
      text: 'CCTV monitoring control room at hospital in Lahore',
      pos: '50% 50%',
      by: 'AegisTech'
    }
  },
  {
    common: 'School Campus',
    binomial: 'Campus-Wide CCTV • Model Town',
    photo: {
      url: '/images/project-school.png',
      text: 'Bullet camera overlooking school playground in Lahore',
      pos: '50% 30%',
      by: 'AegisTech'
    }
  },
  {
    common: 'Access Control',
    binomial: 'Biometric + CCTV • Hafeez Center',
    photo: {
      url: '/images/project-access.png',
      text: 'Biometric access control and CCTV at Hafeez Center Lahore',
      pos: '50% 50%',
      by: 'AegisTech'
    }
  },
  {
    common: 'Parking Security',
    binomial: 'ANPR + Night Vision • Liberty Market',
    photo: {
      url: '/images/project-parking.png',
      text: 'CCTV cameras monitoring parking lot at night in Lahore',
      pos: '50% 40%',
      by: 'AegisTech'
    }
  }
];

function MobilePortfolio() {
  return (
    <div className="lg:hidden py-16 bg-[#050505]">
      <div className="px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Portfolio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl font-display font-semibold tracking-tight mb-3"
        >
          Crafted{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]/60">
            Installations
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/40 text-sm"
        >
          Swipe to explore our projects across Lahore.
        </motion.p>
      </div>

      {/* Horizontal scroll cards */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.photo.url}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative w-[260px] h-[340px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] flex-shrink-0 group"
            >
              <img
                src={project.photo.url}
                alt={project.photo.text}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: project.photo.pos || 'center' }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-display font-semibold mb-1">{project.common}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{project.binomial}</p>
              </div>

              {/* Index badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-[#00E5FF] tracking-wider">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center justify-center gap-2 mt-4 text-white/20 text-xs">
        <span>←</span>
        <span>Swipe to see all {projects.length} projects</span>
        <span>→</span>
      </div>
    </div>
  );
}

function DesktopPortfolio() {
  return (
    <div className="hidden lg:block">
      {/* This outer container provides the scrollable height for the gallery rotation */}
      <div style={{ height: '300vh' }}>
        <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
          {/* Section header */}
          <div className="text-center absolute top-20 z-10 px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-display font-medium tracking-tight mb-4"
            >
              Crafted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]/60">Installations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 max-w-xl mx-auto text-lg"
            >
              Scroll to explore our projects across Lahore — clean cabling, strategic placement, seamless integration.
            </motion.p>
          </div>

          {/* Gallery */}
          <div className="w-full h-full">
            <CircularGallery items={projects} radius={550} autoRotateSpeed={0.015} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 bg-[#050505]">
      <MobilePortfolio />
      <DesktopPortfolio />
    </section>
  );
}
