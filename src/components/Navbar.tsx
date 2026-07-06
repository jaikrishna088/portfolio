import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goto = (id: string) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 sm:px-12 py-4 ${
          scrolled ? 'top-2 sm:top-4' : 'top-0'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`max-w-[1500px] mx-auto flex items-center justify-between px-8 sm:px-10 h-16 sm:h-20 rounded-[32px] transition-all duration-700 ${
            scrolled
              ? 'glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-white/8 backdrop-blur-md'
              : 'border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group cursor-none"
            aria-label="Scroll to top"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm font-bold text-white tracking-wider shadow-[0_0_25px_rgba(99,102,241,0.5)] group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.8)] transition-all duration-500">
              J
            </div>
            <span className="text-sm font-semibold tracking-widest text-white uppercase font-display hidden sm:inline-block">
              JAIKRISHNA<span className="text-indigo-400"> R</span>
            </span>
          </button>

          {/* Desktop Nav Links - Luxurious Spacing */}
          <nav className="hidden md:flex items-center gap-1.5" role="menubar">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => goto(link.id)}
                role="menuitem"
                className={`relative px-4 py-2 text-[12px] uppercase tracking-[0.18em] font-medium font-display transition-colors duration-300 rounded-full cursor-none ${
                  active === link.id ? 'text-white' : 'text-white/45 hover:text-white/80'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                    transition={{ type: 'spring', bounce: 0.1, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => goto('contact')}
              className="hidden md:flex btn-premium text-[11px] uppercase tracking-wider py-2.5 px-6 rounded-full"
            >
              <span>Get In Touch</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden p-2 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 240 }}
              className="fixed right-0 top-0 bottom-0 z-40 w-80 glass-panel md:hidden flex flex-col pt-28 px-8 pb-10 gap-2 border-l border-white/10 rounded-l-[40px] rounded-r-none"
            >
              <p className="mono-label text-[9px] mb-4 opacity-50 px-4">Navigation</p>
              {links.map(link => (
                <button
                  key={link.id}
                  onClick={() => goto(link.id)}
                  className={`text-left px-5 py-4 rounded-2xl text-[13px] uppercase tracking-widest font-display transition-all duration-300 ${
                    active === link.id
                      ? 'text-white bg-white/10 border border-white/10 shadow-[0_10px_30px_rgba(255,255,255,0.03)]'
                      : 'text-white/50 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-8 px-4">
                <button
                  onClick={() => goto('contact')}
                  className="btn-premium btn-premium-accent w-full justify-center py-3.5 rounded-full"
                >
                  <span>Get In Touch</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
