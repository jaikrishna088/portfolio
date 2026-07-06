import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '7.75', label: 'CGPA Score', sub: 'Up to 5th Semester' },
  { value: '3', label: 'Internships', sub: 'IoT · ServiceNow · VOIS' },
  { value: '5', label: 'Certifications', sub: 'AWS · Azure · Oracle · more' },
  { value: '2', label: 'Core Projects', sub: 'IoT & Embedded Systems' },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative overflow-hidden" aria-label="About Jaikrishna R">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-[10%] w-[500px] h-[500px] rounded-full filter blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Editorial Split Grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr_1.8fr] gap-12 lg:gap-16 items-start mb-32">
          {/* Left Column: Big visual section header */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="mono-label tracking-[0.3em] text-indigo-400">01 / Profile</span>
            </div>
            <h2 className="font-display text-white leading-none tracking-tight text-[clamp(2.5rem,6vw,5.5rem)] font-bold">
              Engineering<br />
              <span className="text-gradient-indigo">meets</span><br />
              innovation.
            </h2>
            <div className="h-[1px] w-20 bg-indigo-500/30 mt-6" />
            <p className="mono-label text-[11px] text-white/40 mt-3">
              SNS College of Engineering · Namakkal
            </p>
          </motion.div>

          {/* Middle Column: Framed Headshot */}
          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="w-full max-w-[280px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 relative group bg-white/2 shadow-[0_0_50px_rgba(255,255,255,0.02)] self-center"
          >
            <img
              src="/profile.jpg"
              alt="Jaikrishna R"
              className="w-full h-full object-cover scale-102 group-hover:scale-106 transition-transform duration-700 ease-out"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03030c]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Statement with plenty of whitespace */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col items-start gap-12 lg:pt-16"
          >
            <p className="mono-label text-indigo-300 tracking-[0.25em] text-[10px]">Career Objective</p>
            
            <p className="font-display font-light text-white/70 text-[clamp(1.5rem,2.8vw,2.5rem)] leading-relaxed max-w-3xl">
              As an <span className="text-white font-normal">Electronics and Communication Engineering</span> student, I possess knowledge in{' '}
              <span className="text-gradient-indigo font-normal">Embedded Systems, IoT, and AI</span>, with hands-on experience in developing smart automation and parking solutions focused on{' '}
              <span className="text-white font-normal">real-world applications</span>.
            </p>
          </motion.div>
        </div>

        {/* Stats Row - Large raw typography figures without borders, spacious and elegant */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-white/5 pt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start gap-3 group">
              <div className="flex items-baseline gap-2">
                <span
                  className="font-display text-6xl sm:text-7xl font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors duration-500"
                >
                  {stat.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-indigo-500/50" />
              </div>
              <div>
                <p className="mono-label text-[10px] tracking-[0.2em] font-semibold text-white/80">{stat.label}</p>
                <p className="text-[11px] text-white/35 mt-1 font-light tracking-wide">{stat.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
