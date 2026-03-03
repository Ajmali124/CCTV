import { Mail, MapPin, Phone, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-12 lg:pt-20 pb-8 border-t border-white/5 bg-[#050505] relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-10 lg:mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[#00E5FF]" aria-hidden="true" />
              <span className="font-display font-semibold text-xl tracking-tight">Aegis<span className="text-white/50">Tech</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Pakistan's trusted provider of CCTV, access control, fire alarm, and networking solutions since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <nav aria-label="Footer quick links" className="flex flex-col gap-3 text-sm text-white/40">
              <a href="#services" className="hover:text-[#00E5FF] transition-colors">Services</a>
              <a href="#process" className="hover:text-[#00E5FF] transition-colors">Our Process</a>
              <a href="#portfolio" className="hover:text-[#00E5FF] transition-colors">Portfolio</a>
              <a href="#testimonials" className="hover:text-[#00E5FF] transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-[#00E5FF] transition-colors">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-widest mb-4">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/40">
              <li>CCTV Surveillance</li>
              <li>Access Control & Biometrics</li>
              <li>Fire Alarm Systems</li>
              <li>Networking Solutions</li>
              <li>Complete Security Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-widest mb-4">Contact</h3>
            <div className="flex flex-col gap-4 text-sm text-white/40">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+923000000000" className="hover:text-[#00E5FF] transition-colors">+92 300 000 0000</a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@aegistech.pk" className="hover:text-[#00E5FF] transition-colors">info@aegistech.pk</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>The Mall Road, Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} AegisTech Security Pakistan. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
