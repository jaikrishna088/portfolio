import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const contacts = [
  {
    key: 'email',
    Icon: Mail,
    label: 'Direct Email',
    value: 'jaikrishna.r.ece.2023@snsce.ac.in',
    href: 'mailto:jaikrishna.r.ece.2023@snsce.ac.in',
    canCopy: true,
    accent: '#6366f1',
  },
  {
    key: 'phone',
    Icon: Phone,
    label: 'Call Direct',
    value: '+91 6380830395',
    href: 'tel:+916380830395',
    canCopy: true,
    accent: '#10b981',
  },
  {
    key: 'github',
    Icon: GithubIcon,
    label: 'GitHub Profile',
    value: 'github.com/jaikrishna088',
    href: 'https://github.com/jaikrishna088',
    canCopy: false,
    accent: '#ffffff',
  },
  {
    key: 'linkedin',
    Icon: LinkedinIcon,
    label: 'LinkedIn Connect',
    value: 'linkedin.com/in/jaikrishna-r',
    href: 'https://www.linkedin.com/in/jaikrishna-r',
    canCopy: false,
    accent: '#38bdf8',
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
});

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden min-h-screen flex items-center" aria-label="Contact Section">
      {/* Immersive background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full filter blur-[150px]"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 75%)',
          }}
        />
        {/* Fine bottom accent divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }}
        />
      </div>

      <div className="container-wide relative z-10 py-20" ref={ref}>
        {/* Two-column layout grid */}
        <div className="grid lg:grid-cols-[1.2fr_1.5fr] gap-16 lg:gap-24 items-center">
          
          {/* Column 1: Title & Location */}
          <div className="flex flex-col items-start gap-6">
            <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <span className="mono-label tracking-[0.3em] text-indigo-400">08 / Contact</span>
              <h2 className="font-display text-white text-[clamp(2.5rem,5.5vw,6rem)] font-bold mt-2 leading-none">
                Let's build<br />
                <span className="text-gradient-indigo">together.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-white/40 text-sm sm:text-base font-light max-w-sm leading-relaxed mt-4"
            >
              Open to internship opportunities and collaborations in Embedded Systems, IoT, and AI.
            </motion.p>

            <motion.div
              variants={fadeUp(0.22)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="flex items-center gap-3 text-white/30 mt-6 border-t border-white/5 pt-6 w-full max-w-xs"
            >
              <MapPin size={15} className="text-indigo-400" />
              <span className="text-xs uppercase tracking-widest font-display text-white/60">
                Namakkal, Tamil Nadu, India
              </span>
            </motion.div>
          </div>

          {/* Column 2: Elegant Channels List */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col gap-4 w-full"
          >
            {contacts.map((c) => (
              <div
                key={c.key}
                className="group flex items-center justify-between p-6 border border-white/5 hover:border-white/12 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-400 rounded-3xl cursor-none relative overflow-hidden"
              >
                <div className="flex items-center gap-6 min-w-0 z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                    style={{
                      background: c.accent + '0a',
                      borderColor: c.accent + '15',
                    }}
                  >
                    <c.Icon size={16} style={{ color: c.accent }} />
                  </div>

                  <div className="min-w-0">
                    <p className="mono-label text-[9px] text-white/30">{c.label}</p>
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white text-base sm:text-lg font-display font-medium hover:text-indigo-400 transition-colors duration-300 truncate block mt-0.5"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {c.canCopy && (
                    <button
                      onClick={() => copy(c.value, c.key)}
                      aria-label={`Copy ${c.label}`}
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/5 text-white/40 hover:text-white transition-all duration-300 cursor-none"
                    >
                      {copied === c.key ? (
                        <Check size={14} className="text-emerald-400 animate-bounce" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  )}
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={`Open ${c.label}`}
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/5 text-white/40 hover:text-white transition-all duration-300 cursor-none"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Dynamic hover backdrop spotlight */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(300px circle at center, ${c.accent}04, transparent 70%)`,
                  }}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
