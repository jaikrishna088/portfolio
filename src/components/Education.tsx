import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    phase: 'University Education',
    institution: 'SNS College of Engineering',
    degree: 'B.E. Electronics and Communication Engineering',
    score: '7.75 CGPA',
    note: 'Up to 5th Semester',
    period: '2023–2027',
    accent: '#6366f1',
  },
  {
    phase: 'Class XII Secondary',
    institution: 'Holy Angels Mat. Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC)',
    score: '74 %',
    note: 'State Board Score',
    period: '2022–2023',
    accent: '#8b5cf6',
  },
  {
    phase: 'Class X Secondary',
    institution: 'Holy Angels Mat. Higher Secondary School',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    score: 'Pass',
    note: 'Board Result',
    period: '2020–2021',
    accent: '#06b6d4',
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
});

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative overflow-hidden" aria-label="Education Ledger">
      {/* Glow elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] rounded-full filter blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.02) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Title */}
        <div className="flex flex-col items-start gap-4 border-b border-white/5 pb-10 mb-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <span className="mono-label tracking-[0.3em] text-indigo-400">05 / Education</span>
            <h2 className="font-display text-white text-[clamp(2.5rem,5vw,5.5rem)] font-bold mt-2 leading-none">
              Academic Background.
            </h2>
          </motion.div>
        </div>

        {/* Academic Log Ledger - Clean Row Layout with horizontal dividers */}
        <div className="flex flex-col w-full">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(0.1 + idx * 0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="group flex flex-col md:grid md:grid-cols-[1.3fr_2fr_0.7fr] gap-8 items-start md:items-center justify-between py-12 border-b border-white/5 hover:bg-white/[0.01] transition-colors duration-500 pl-4 sm:pl-8 pr-4"
            >
              {/* Column 1: Phase & Period */}
              <div className="flex flex-col gap-1 items-start mb-6 md:mb-0">
                <span className="mono-label text-[10px] tracking-wider" style={{ color: edu.accent }}>
                  {edu.phase}
                </span>
                <span className="mono-label text-[10px] text-white/30 mt-1">{edu.period}</span>
              </div>

              {/* Column 2: Institution & Degree */}
              <div className="flex flex-col gap-2 mb-6 md:mb-0">
                <h3 className="font-display text-white text-lg sm:text-xl font-semibold leading-snug group-hover:text-indigo-300 transition-colors duration-300">
                  {edu.institution}
                </h3>
                <p className="text-white/45 text-sm font-light">
                  {edu.degree}
                </p>
              </div>

              {/* Column 3: Score & Note */}
              <div className="flex flex-col items-start md:items-end gap-1">
                <p className="font-display text-3xl font-bold tracking-tight text-white" style={{ color: edu.accent }}>
                  {edu.score}
                </p>
                <p className="text-[10px] mono-label text-white/20 uppercase tracking-widest">{edu.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
