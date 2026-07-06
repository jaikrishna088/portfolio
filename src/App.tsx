import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Meetups from './components/Meetups';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);

  return (
    <div className="relative min-h-screen" style={{ background: '#05050f' }}>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" onComplete={done} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Global UI chrome */}
          <CustomCursor />
          <ScrollProgress />
          <ParticleBackground />

          {/* Subtle global top radial glow */}
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Page content */}
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Certifications />
              <Meetups />
              <Contact />
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  );
}
