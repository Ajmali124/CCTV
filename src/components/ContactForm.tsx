import { CheckCircle, Clock, MapPin, Phone, Send, Shield, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

const guarantees = [
  { icon: Zap, text: 'Response within 2 hours' },
  { icon: Shield, text: 'Free site survey included' },
  { icon: CheckCircle, text: 'No obligation quote' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 lg:py-32 relative z-10 bg-[#050505]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,229,255,0.03)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-semibold tracking-tight mb-4"
            >
              Get a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]/60">
                Free Quote
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/40 text-base lg:text-lg mb-8 lg:mb-10 max-w-md"
            >
              Tell us about your security needs and we'll design a custom solution with transparent pricing.
            </motion.p>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8 lg:mb-12"
            >
              {guarantees.map((g) => (
                <div
                  key={g.text}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#00E5FF]/5 border border-[#00E5FF]/10 text-[#00E5FF]/80 text-xs font-medium"
                >
                  <g.icon className="w-3.5 h-3.5" />
                  {g.text}
                </div>
              ))}
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-5"
            >
              {[
                { icon: Phone, label: 'Call Us 24/7', value: '+92 300 000 0000', href: 'tel:+923000000000' },
                { icon: MapPin, label: 'Office', value: 'The Mall Road, Lahore, Pakistan' },
                { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 10:00 AM - 8:00 PM' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/15 transition-all duration-300">
                    <item.icon className="w-4.5 h-4.5 text-white/40 group-hover:text-[#00E5FF] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[11px] uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-[#00E5FF] transition-colors font-medium text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#00E5FF]/10 via-transparent to-[#00E5FF]/5 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <form
                onSubmit={handleSubmit}
                className="relative p-6 lg:p-8 rounded-3xl bg-[#0a0a0a] border border-white/[0.06] space-y-4 lg:space-y-5 backdrop-blur-xl"
              >
                {/* Form header */}
                <div className="pb-4 border-b border-white/[0.06]">
                  <h3 className="text-white font-display font-semibold text-lg">Request a Quote</h3>
                  <p className="text-white/30 text-xs mt-1">Fill in the details and we'll get back to you shortly.</p>
                </div>

                {/* Name & Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-white/50 text-xs mb-1.5 font-medium tracking-wide uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Ahmed Raza"
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-all duration-300 ${
                        focused === 'name'
                          ? 'border-[#00E5FF]/40 shadow-[0_0_0_3px_rgba(0,229,255,0.08)]'
                          : 'border-white/[0.08] hover:border-white/15'
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="phone" className="block text-white/50 text-xs mb-1.5 font-medium tracking-wide uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+92 300 000 0000"
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-all duration-300 ${
                        focused === 'phone'
                          ? 'border-[#00E5FF]/40 shadow-[0_0_0_3px_rgba(0,229,255,0.08)]'
                          : 'border-white/[0.08] hover:border-white/15'
                      }`}
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div className="relative">
                  <label htmlFor="service" className="block text-white/50 text-xs mb-1.5 font-medium tracking-wide uppercase">
                    Service Needed
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      required
                      onFocus={() => setFocused('service')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                        focused === 'service'
                          ? 'border-[#00E5FF]/40 shadow-[0_0_0_3px_rgba(0,229,255,0.08)]'
                          : 'border-white/[0.08] hover:border-white/15'
                      }`}
                    >
                      <option value="" className="bg-[#0a0a0a] text-white/40">Select a service</option>
                      <option value="cctv" className="bg-[#0a0a0a]">CCTV Surveillance</option>
                      <option value="access" className="bg-[#0a0a0a]">Access Control & Biometrics</option>
                      <option value="fire" className="bg-[#0a0a0a]">Fire Alarm System</option>
                      <option value="networking" className="bg-[#0a0a0a]">Networking Solutions</option>
                      <option value="complete" className="bg-[#0a0a0a]">Complete Security Package</option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white/30">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-white/50 text-xs mb-1.5 font-medium tracking-wide uppercase">
                    Tell Us More <span className="text-white/20 normal-case tracking-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. I need 8 cameras for a warehouse in DHA Phase 5..."
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-all duration-300 resize-none ${
                      focused === 'message'
                        ? 'border-[#00E5FF]/40 shadow-[0_0_0_3px_rgba(0,229,255,0.08)]'
                        : 'border-white/[0.08] hover:border-white/15'
                    }`}
                  ></textarea>
                </div>

                {/* Submit */}
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="py-4 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-center"
                      role="alert"
                    >
                      <div className="flex items-center justify-center gap-2 text-[#00E5FF] font-semibold text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Thank you! We'll call you within 2 hours.
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00d4ee] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-shadow duration-300"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Request Free Quote
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Privacy note */}
                <p className="text-white/20 text-[11px] text-center pt-1">
                  🔒 Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
