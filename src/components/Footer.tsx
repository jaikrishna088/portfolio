import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12" aria-label="Footer Navigation">
      {/* Top shimmer accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-[1px] premium-shimmer-line" aria-hidden="true" />

      <div className="container-wide px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Brand details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="font-display font-bold text-white text-base tracking-wider uppercase">
            Jaikrishna <span className="text-gradient-indigo">R</span>
          </p>
          <p className="mono-label text-[10px] text-white/30 tracking-wide mt-1">
            ECE Student · Embedded Systems & IoT
          </p>
        </div>

        {/* Centre Column: Socials */}
        <div className="flex items-center gap-3">
          {[
            { Icon: GithubIcon, href: 'https://github.com/jaikrishna088', label: 'GitHub' },
            { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/jaikrishna-r', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:jaikrishna.r.ece.2023@snsce.ac.in', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/5 hover:border-white/15 bg-white/[0.01] hover:bg-white/[0.03] text-white/30 hover:text-white transition-all duration-300 cursor-none"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Right Column: Copy & To-Top */}
        <div className="flex items-center gap-6">
          <p className="mono-label text-[9px] tracking-widest text-white/20">
            © {new Date().getFullYear()} Jaikrishna R
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] text-white/35 hover:text-white transition-all duration-300 cursor-none"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
