import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const languages = ['C', 'Python', 'Java', 'HTML', 'SQL'];
const tools = ['Excel', 'Canva', 'Figma', 'GitHub', 'VS Code', 'MySQL'];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
});

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Responsive dimensions tracker
  const boardRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    if (!boardRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });
    resizeObserver.observe(boardRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const totalLanguages = languages.length;
  const totalTools = tools.length;

  // Calculate dynamic radius to prevent clipping on mobile/tablet viewports
  const innerRadius = Math.max(Math.min(dimensions.width * 0.18, 160), 90);
  const outerRadius = Math.max(Math.min(dimensions.width * 0.33, 280), 160);

  return (
    <section id="skills" className="relative overflow-hidden" aria-label="Technical Skills Workspace">
      {/* Dynamic background lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 right-[15%] w-[600px] h-[600px] rounded-full filter blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] rounded-full filter blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Title / Description */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-b border-white/5 pb-10 mb-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <span className="mono-label tracking-[0.3em] text-indigo-400">02 / Technical Skills</span>
            <h2 className="font-display text-white text-[clamp(2.5rem,5vw,5rem)] font-bold mt-2 leading-none">
              The Engine Room.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-white/40 text-sm max-w-sm font-light leading-relaxed"
          >
            An interactive representation of tools, paradigms, and platforms. Hover over any node to highlight connections to the core system.
          </motion.p>
        </div>

        {/* Large Connected Network Visualization Board */}
        <motion.div
          ref={boardRef}
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="relative w-full aspect-video min-h-[500px] max-h-[750px] border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent rounded-[40px] overflow-hidden flex items-center justify-center"
        >
          {/* Subtle grid lines overlay inside board */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          {/* SVG Connection Lines overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Center core connection logic */}
            {languages.map((lang, idx) => {
              const angle = (idx / totalLanguages) * 2 * Math.PI - Math.PI / 2;
              const x2 = `calc(50% + ${Math.cos(angle) * innerRadius}px)`;
              const y2 = `calc(50% + ${Math.sin(angle) * innerRadius}px)`;
              const isHighlighted = hoveredNode === lang;

              return (
                <motion.line
                  key={lang}
                  x1="50%"
                  y1="50%"
                  x2={x2}
                  y2={y2}
                  stroke={isHighlighted ? 'url(#indigoGrad)' : 'rgba(255, 255, 255, 0.05)'}
                  strokeWidth={isHighlighted ? 2.5 : 1}
                  className="transition-all duration-300"
                  strokeDasharray={isHighlighted ? 'none' : '4 6'}
                />
              );
            })}

            {tools.map((tool, idx) => {
              const angle = (idx / totalTools) * 2 * Math.PI;
              const x2 = `calc(50% + ${Math.cos(angle) * outerRadius}px)`;
              const y2 = `calc(50% + ${Math.sin(angle) * outerRadius}px)`;
              const isHighlighted = hoveredNode === tool;

              return (
                <motion.line
                  key={tool}
                  x1="50%"
                  y1="50%"
                  x2={x2}
                  y2={y2}
                  stroke={isHighlighted ? 'url(#cyanGrad)' : 'rgba(255, 255, 255, 0.03)'}
                  strokeWidth={isHighlighted ? 2.5 : 1}
                  className="transition-all duration-300"
                  strokeDasharray={isHighlighted ? 'none' : '6 8'}
                />
              );
            })}

            <defs>
              <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central System Core */}
          <div className="absolute z-10 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.25)] relative group-hover:scale-105 transition-all duration-500">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-25" style={{ animationDuration: '3s' }} />
            </div>
            <p className="mono-label text-[10px] mt-4 tracking-[0.25em] text-white">SYSTEM CORE</p>
            <p className="text-white/40 text-[9px] mt-1 uppercase font-light">Embedded · IoT · AI</p>
          </div>

          {/* Languages Nodes (Inner Orbit) */}
          {languages.map((lang, idx) => {
            const angle = (idx / totalLanguages) * 2 * Math.PI - Math.PI / 2;
            const x = `calc(50% + ${Math.cos(angle) * innerRadius}px)`;
            const y = `calc(50% + ${Math.sin(angle) * innerRadius}px)`;
            const isHovered = hoveredNode === lang;

            return (
              <motion.div
                key={lang}
                onMouseEnter={() => setHoveredNode(lang)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ left: x, top: y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-none"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + idx,
                  ease: 'easeInOut',
                  delay: idx * 0.1,
                }}
              >
                <div
                  className={`px-4 py-2 rounded-2xl border text-[12px] font-semibold transition-all duration-500 select-none ${
                    isHovered
                      ? 'bg-indigo-500/10 border-indigo-400/50 text-white shadow-[0_0_25px_rgba(99,102,241,0.3)] scale-110'
                      : 'bg-white/[0.02] border-white/5 text-white/55 hover:text-white hover:border-white/20'
                  }`}
                >
                  {lang}
                </div>
              </motion.div>
            );
          })}

          {/* Tools Nodes (Outer Orbit) */}
          {tools.map((tool, idx) => {
            const angle = (idx / totalTools) * 2 * Math.PI;
            const x = `calc(50% + ${Math.cos(angle) * outerRadius}px)`;
            const y = `calc(50% + ${Math.sin(angle) * outerRadius}px)`;
            const isHovered = hoveredNode === tool;

            return (
              <motion.div
                key={tool}
                onMouseEnter={() => setHoveredNode(tool)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ left: x, top: y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-none"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5 + idx,
                  ease: 'easeInOut',
                  delay: idx * 0.15,
                }}
              >
                <div
                  className={`px-4 py-2 rounded-2xl border text-[12px] font-semibold transition-all duration-500 select-none ${
                    isHovered
                      ? 'bg-cyan-500/10 border-cyan-400/50 text-white shadow-[0_0_25px_rgba(34,211,238,0.3)] scale-110'
                      : 'bg-white/[0.01] border-white/5 text-white/45 hover:text-white hover:border-white/15'
                  }`}
                >
                  {tool}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
