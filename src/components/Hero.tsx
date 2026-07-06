import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowDown, Volume2, VolumeX } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: 'blur(15px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const socials = [
  { icon: GithubIcon, href: 'https://github.com/jaikrishna088', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/jaikrishna-r', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:jaikrishna.r.ece.2023@snsce.ac.in', label: 'Email' },
  { icon: Phone, href: 'tel:+916380830395', label: 'Phone' },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  
  // Parallax transformations for that high-end depth feel
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-8 sm:px-16 xl:px-24 py-32 md:py-0"
      aria-label="Introduction Section"
    >
      {/* Premium Cinematic Backgrounds */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        {/* Background video overlay */}
        <video
          ref={videoRef}
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.2] mix-blend-screen pointer-events-auto"
        />
        {/* Deep background glow mesh */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full filter blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full filter blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)' }}
        />
        
        {/* Fine grid structure that matches premium SaaS landings */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </motion.div>

      {/* Main Container - Maximum Width & Spacious Column */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-[1400px] flex flex-col items-start gap-12"
      >
        {/* Status indicator row */}
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-indigo-500/15 bg-indigo-500/5 text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="mono-label text-[10px] tracking-[0.2em] font-semibold text-indigo-300">
              Available for Internships · 2026
            </span>
          </div>
        </motion.div>

        {/* Large Cinematic Title */}
        <motion.div variants={fadeUp} className="w-full">
          <h1 className="font-display font-bold text-white leading-[0.85] tracking-tighter text-[clamp(3.5rem,10vw,8.5rem)]">
            Jaikrishna<br />
            <span className="text-gradient-indigo">R.</span>
          </h1>
        </motion.div>

        {/* Tagline & Subheading Section - Spacious and structured */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-end w-full border-t border-white/5 pt-10">
          <motion.div variants={fadeUp}>
            <p className="font-display font-light text-white/50 text-[clamp(1.25rem,2.5vw,2rem)] leading-snug max-w-2xl">
              Building real-world solutions at the intersection of{' '}
              <span className="text-white font-medium">Embedded Systems</span>,{' '}
              <span className="text-indigo-400 font-medium">IoT</span>, and{' '}
              <span className="text-cyan-400 font-medium">AI</span>.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-start lg:items-end gap-5">
            <div className="flex items-center gap-3 text-white/40">
              <MapPin size={15} className="text-indigo-400" />
              <span className="mono-label text-[11px] tracking-wider text-white/60">Namakkal, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-display font-medium">
                Electronics & Communication Engineering
              </span>
            </div>
          </motion.div>
        </div>

        {/* Actions & Social Links - Completely Spacious */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-8 w-full border-t border-white/5 pt-10">
          <div className="flex items-center gap-6">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-premium btn-premium-accent"
            >
              <span>Explore Projects</span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-premium"
            >
              <span>Get in Touch</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-4 rounded-full border border-white/5 bg-white/2 text-white/40 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 cursor-none"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic scroll down hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/35 cursor-none"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <span className="mono-label text-[9px] tracking-[0.25em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-indigo-400"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
      {/* Audio toggle overlay */}
      <button
        onClick={toggleMute}
        className="absolute bottom-10 right-10 z-20 flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-none"
      >
        {isMuted ? (
          <>
            <VolumeX size={14} className="text-indigo-400" />
            <span className="text-[10px] mono-label tracking-wider text-white">Unmute Intro</span>
          </>
        ) : (
          <>
            <Volume2 size={14} className="text-emerald-400 animate-pulse" />
            <span className="text-[10px] mono-label tracking-wider text-white">Mute Intro</span>
          </>
        )}
      </button>
    </section>
  );
}
