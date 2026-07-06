import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const internships = [
  {
    index: '01',
    title: 'Embedded Systems & IoT Intern',
    org: 'Emglitz Technology',
    duration: '3 Weeks',
    period: '2023–2024',
    accent: '#6366f1',
    responsibilities: [
      'Developed Embedded Systems, IoT, and AI-based projects using sensors and microcontrollers.',
      'Designed and tested electronic circuits using Proteus simulation software.',
    ],
  },
  {
    index: '02',
    title: 'ServiceNow Virtual Intern',
    org: 'ServiceNow',
    duration: '8 Weeks',
    period: '2024–2025',
    accent: '#8b5cf6',
    responsibilities: [
      'Learned fundamentals of ServiceNow workspace configuration, flows, and analytical reports.',
      'Understood basic platform administration and CSA exam blueprints.',
    ],
  },
  {
    index: '03',
    title: 'VOIS Virtual Intern',
    org: 'VOIS',
    duration: '3 Weeks',
    period: '2024–2025',
    accent: '#06b6d4',
    responsibilities: [
      'Analyzed and processed conversational logs using Large Language Models (LLMs) and NLP.',
      'Applied prompt engineering methodologies and data analytics techniques.',
    ],
  },
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

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative overflow-hidden" aria-label="Internship Journey Section">
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full filter blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.02) 0%, transparent 75%)' }}
        />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Sticky Split Grid */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          {/* Left Column: Sticky Section Header */}
          <div className="lg:sticky lg:top-32 flex flex-col items-start gap-4">
            <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <span className="mono-label tracking-[0.3em] text-indigo-400">03 / Experience</span>
              <h2 className="font-display text-white text-[clamp(2.5rem,5vw,5.5rem)] font-bold mt-2 leading-none">
                Internship<br />Journey.
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-white/40 text-sm max-w-sm mt-4 font-light leading-relaxed"
            >
              Working with real-world constraints, cloud platforms, and engineering guidelines.
            </motion.p>
          </div>

          {/* Right Column: Spacious Experience Blocks */}
          <div className="flex flex-col gap-24 sm:gap-32">
            {internships.map((job, idx) => (
              <motion.div
                key={job.index}
                variants={fadeUp(0.2 + idx * 0.15)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="flex flex-col items-start gap-6 relative border-l border-white/5 pl-8 sm:pl-12"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-0 -translate-x-1/2 top-[11px] w-4 h-4 rounded-full border bg-[#03030c] z-10 flex items-center justify-center"
                  style={{ borderColor: job.accent }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping absolute" style={{ animationDuration: '2s' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Subheader indices */}
                <div className="flex items-center gap-4">
                  <span className="mono-label text-[10px]" style={{ color: job.accent }}>
                    {job.period}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span className="mono-label text-[9px] text-white/30">{job.duration}</span>
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-white text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight">
                    {job.title}
                  </h3>
                  <p className="text-white/60 font-medium text-sm sm:text-base">
                    at <span className="text-white">{job.org}</span>
                  </p>
                </div>

                {/* Bullet Points with Generous Space */}
                <ul className="flex flex-col gap-3 max-w-2xl mt-4">
                  {job.responsibilities.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3 text-white/45 text-sm sm:text-base font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mt-2.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
