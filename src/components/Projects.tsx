import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { QrCode, Radio, Cpu, Wifi } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
});

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTabP1, setActiveTabP1] = useState<'details' | 'architecture'>('details');
  const [activeTabP2, setActiveTabP2] = useState<'details' | 'architecture'>('details');

  return (
    <section id="projects" className="relative overflow-hidden" aria-label="Project Showcase">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full filter blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full filter blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.02) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-wide relative z-10 animate-fade-in" ref={ref}>
        {/* Title */}
        <div className="flex flex-col items-start gap-4 border-b border-white/5 pb-10 mb-24">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <span className="mono-label tracking-[0.3em] text-indigo-400">04 / Projects</span>
            <h2 className="font-display text-white text-[clamp(2.5rem,5vw,5.5rem)] font-bold mt-2 leading-none">
              Featured Works.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-white/40 text-sm max-w-sm font-light mt-2"
          >
            Engineering physical prototypes integrated with smart communication protocols and cloud logic.
          </motion.p>
        </div>

        {/* Project 1: Alternating Layout (Details Left, Visual Right) */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center mb-40">
          {/* Details */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col items-start gap-6 order-1 lg:order-1"
          >
            <div className="flex items-center gap-4">
              <span className="font-display font-bold text-5xl text-indigo-500/20">01</span>
              <span className="mono-label text-[10px] text-white/30">2023–2024</span>
            </div>

            <h3 className="font-display text-white text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight">
              IoT Based Smart Shopping System
            </h3>

            {/* Toggle bar */}
            <div className="flex gap-2 p-1 border border-white/5 bg-white/2 rounded-full">
              <button
                onClick={() => setActiveTabP1('details')}
                className={`px-4 py-1.5 rounded-full text-[11px] font-display uppercase tracking-wider transition-all duration-300 ${
                  activeTabP1 === 'details' ? 'bg-white/10 text-white' : 'text-white/40'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTabP1('architecture')}
                className={`px-4 py-1.5 rounded-full text-[11px] font-display uppercase tracking-wider transition-all duration-300 ${
                  activeTabP1 === 'architecture' ? 'bg-white/10 text-white' : 'text-white/40'
                }`}
              >
                Specs & Hardware
              </button>
            </div>

            {/* Content Tabs */}
            {activeTabP1 === 'details' ? (
              <div className="flex flex-col gap-6">
                <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                  An IoT-driven intelligent shopping ecosystem featuring QR code payment integration designed to bypass traditional queue systems, enabling automated billing straight from the cart.
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3 text-white/40 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Developed using embedded architecture modules, real-time sensor polling, and microcontrollers.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/40 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Implemented a secure payment gateway mockup using QR code scans for instant validation.</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-indigo-400">Microcontroller</p>
                    <p className="text-white text-sm font-semibold mt-1">ESP32 / Arduino Core</p>
                  </div>
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-indigo-400">Sensing Nodes</p>
                    <p className="text-white text-sm font-semibold mt-1">Ultrasonic & IR Matrix</p>
                  </div>
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-indigo-400">Communication</p>
                    <p className="text-white text-sm font-semibold mt-1">HTTP Web Sockets / Wi-Fi</p>
                  </div>
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-indigo-400">Payment Protocol</p>
                    <p className="text-white text-sm font-semibold mt-1">Dynamic UPI QR Codes</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['IoT', 'Embedded Systems', 'Sensors', 'Microcontrollers', 'QR Code Payment'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/5 bg-white/2 text-white/50 text-[11px] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual Showcase (Interactive Mockup Block) */}
          <motion.div
            variants={fadeUp(0.35)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="w-full aspect-square max-w-[480px] bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border border-indigo-500/10 rounded-[40px] flex items-center justify-center p-8 relative overflow-hidden group shadow-[0_0_80px_rgba(99,102,241,0.08)] order-2 lg:order-2"
          >
            {/* Custom SVG schematics representation for Smart Shopping System */}
            <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-500/30">
              <rect x="50" y="40" width="100" height="120" rx="16" fill="rgba(255,255,255,0.01)" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-indigo-400 transition-colors duration-500" />
              {/* Cart wireframes */}
              <line x1="50" y1="70" x2="150" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="100" x2="150" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="130" x2="150" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Scanner beams */}
              <path d="M70,30 L130,30" stroke="#f43f5e" strokeWidth="2" className="animate-pulse" />
              <line x1="70" y1="30" x2="90" y2="70" stroke="rgba(244,63,94,0.15)" strokeWidth="1.5" />
              <line x1="130" y1="30" x2="110" y2="70" stroke="rgba(244,63,94,0.15)" strokeWidth="1.5" />

              {/* Central microcontroller core */}
              <circle cx="100" cy="100" r="16" fill="rgba(99,102,241,0.1)" stroke="#6366f1" strokeWidth="1.5" />
              <path d="M100,80 L100,90 M100,110 L100,120 M80,100 L90,100 M110,100 L120,100" stroke="#6366f1" strokeWidth="1" />
            </svg>

            {/* Float tags */}
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
              <Cpu size={12} />
              <span className="text-[10px] mono-label tracking-wider text-indigo-300">Active Circuit</span>
            </div>
            
            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full border border-rose-400/20 bg-rose-500/10 text-rose-300">
              <QrCode size={12} />
              <span className="text-[10px] mono-label tracking-wider text-rose-300">UPI Dynamic Link</span>
            </div>
          </motion.div>
        </div>

        {/* Project 2: Alternating Layout (Visual Left, Details Right) */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          {/* Visual Showcase (Interactive Mockup Block) */}
          <motion.div
            variants={fadeUp(0.35)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="w-full aspect-square max-w-[480px] bg-gradient-to-br from-violet-500/10 to-cyan-500/5 border border-violet-500/10 rounded-[40px] flex items-center justify-center p-8 relative overflow-hidden group shadow-[0_0_80px_rgba(168,85,247,0.08)] order-2 lg:order-1"
          >
            {/* Custom SVG schematics representation for Smart Parking System */}
            <svg viewBox="0 0 200 200" className="w-full h-full text-violet-500/30">
              {/* Parking spaces */}
              <rect x="30" y="30" width="50" height="40" rx="6" fill="rgba(255,255,255,0.01)" stroke="currentColor" strokeWidth="1" />
              <rect x="30" y="80" width="50" height="40" rx="6" fill="rgba(255,255,255,0.01)" stroke="currentColor" strokeWidth="1" />
              <rect x="30" y="130" width="50" height="40" rx="6" fill="rgba(255,255,255,0.01)" stroke="currentColor" strokeWidth="1" />
              
              {/* Road lane separator */}
              <line x1="110" y1="20" x2="110" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />

              {/* Status indicators */}
              <circle cx="55" cy="50" r="4" fill="#10b981" /> {/* Free slot */}
              <circle cx="55" cy="100" r="4" fill="#f43f5e" /> {/* Occupied */}
              <circle cx="55" cy="150" r="4" fill="#10b981" /> {/* Free slot */}

              {/* RFID gate core */}
              <rect x="140" y="90" width="30" height="40" rx="8" fill="rgba(168,85,247,0.05)" stroke="#a855f7" strokeWidth="1.5" />
              <line x1="120" y1="110" x2="140" y2="110" stroke="#a855f7" strokeWidth="2.5" className="origin-right group-hover:rotate-[-60deg] transition-transform duration-700" />
              
              {/* Radio beacon signal */}
              <circle cx="155" cy="110" r="22" stroke="rgba(6,182,212,0.15)" strokeWidth="1" fill="none" className="animate-pulse" />
            </svg>

            {/* Float tags */}
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Radio size={12} />
              <span className="text-[10px] mono-label tracking-wider text-violet-300">RFID Node</span>
            </div>
            
            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
              <Wifi size={12} />
              <span className="text-[10px] mono-label tracking-wider text-cyan-300">Wireless Loop</span>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col items-start gap-6 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4">
              <span className="font-display font-bold text-5xl text-violet-500/20">02</span>
              <span className="mono-label text-[10px] text-white/30">2024–2025</span>
            </div>

            <h3 className="font-display text-white text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight">
              Smart Parking System
            </h3>

            {/* Toggle bar */}
            <div className="flex gap-2 p-1 border border-white/5 bg-white/2 rounded-full">
              <button
                onClick={() => setActiveTabP2('details')}
                className={`px-4 py-1.5 rounded-full text-[11px] font-display uppercase tracking-wider transition-all duration-300 ${
                  activeTabP2 === 'details' ? 'bg-white/10 text-white' : 'text-white/40'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTabP2('architecture')}
                className={`px-4 py-1.5 rounded-full text-[11px] font-display uppercase tracking-wider transition-all duration-300 ${
                  activeTabP2 === 'architecture' ? 'bg-white/10 text-white' : 'text-white/40'
                }`}
              >
                Specs & Hardware
              </button>
            </div>

            {/* Content Tabs */}
            {activeTabP2 === 'details' ? (
              <div className="flex flex-col gap-6">
                <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                  An automated parking workspace utilizing RFID card validation for entry gate authentication and short-range wireless nodes to track real-time slot vacancies and coordinates.
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3 text-white/40 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0" />
                    <span>Built an RFID authentication loop connected to stepper motor servo controls for parking gates.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/40 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0" />
                    <span>Integrated transceiver hardware nodes to route slot occupancy coordinates to a dashboard.</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-violet-400">Card Reader</p>
                    <p className="text-white text-sm font-semibold mt-1">RC522 RFID Module</p>
                  </div>
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-violet-400">Wireless Node</p>
                    <p className="text-white text-sm font-semibold mt-1">HC-12 / NRF24L01 Protocol</p>
                  </div>
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-violet-400">Gate Actuator</p>
                    <p className="text-white text-sm font-semibold mt-1">SG90 Servo Controls</p>
                  </div>
                  <div className="p-5 border border-white/5 bg-white/2 rounded-2xl">
                    <p className="mono-label text-[9px] text-violet-400">Dashboard Link</p>
                    <p className="text-white text-sm font-semibold mt-1">IoT Node / UART Interface</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['RFID', 'Wireless Communication', 'Embedded Systems', 'IoT'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/5 bg-white/2 text-white/50 text-[11px] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
