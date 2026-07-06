import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certs = [
  { name: 'AWS Certified AI Practitioner', org: 'Amazon Web Services', year: '2026', accent: '#f59e0b', initial: 'AWS', span: 'col-span-12 md:col-span-7' },
  { name: 'SnowPro Associate', org: 'Snowflake', year: '2025', accent: '#38bdf8', initial: 'SF', span: 'col-span-12 md:col-span-5' },
  { name: 'Azure AI Fundamentals', org: 'Microsoft', year: '2025', accent: '#60a5fa', initial: 'AZ', span: 'col-span-12 md:col-span-4' },
  { name: 'Agentforce Specialist', org: 'Salesforce', year: '2025', accent: '#34d399', initial: 'SF', span: 'col-span-12 md:col-span-4' },
  { name: 'Oracle Cloud Certified Gen AI Professional', org: 'Oracle', year: '2025', accent: '#fb7185', initial: 'OCI', span: 'col-span-12 md:col-span-4' },
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

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative overflow-hidden" aria-label="Credentials Portfolio">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full filter blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.02) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Title */}
        <div className="flex flex-col items-start gap-4 border-b border-white/5 pb-10 mb-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <span className="mono-label tracking-[0.3em] text-indigo-400">06 / Credentials</span>
            <h2 className="font-display text-white text-[clamp(2.5rem,5vw,5.5rem)] font-bold mt-2 leading-none">
              Certifications.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-white/40 text-sm max-w-sm font-light mt-2"
          >
            Verified technical specializations across cloud, artificial intelligence, and database platforms.
          </motion.p>
        </div>

        {/* Mosaic Layout - Asymmetric Spans */}
        <div className="grid grid-cols-12 gap-6">
          {certs.map((cert, idx) => (
             <motion.div
              key={idx}
              variants={fadeUp(0.2 + idx * 0.08)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className={`${cert.span} glass-panel glass-panel-hover overflow-hidden relative group cursor-none flex flex-col`}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Highlight accent boundary top strip */}
              <div
                className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left flex-shrink-0"
                style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
              />

              <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-grow">
                <div className="flex items-center gap-6 min-w-0">
                  {/* Monogram graphic badge */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-bold font-display tracking-wider border flex-shrink-0"
                    style={{
                      background: cert.accent + '0c',
                      borderColor: cert.accent + '25',
                      color: cert.accent,
                    }}
                  >
                    {cert.initial}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-white text-base sm:text-lg font-semibold truncate group-hover:text-indigo-300 transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-white/45 text-sm font-light mt-1">
                      {cert.org}
                    </p>
                  </div>
                </div>

                {/* Year tag */}
                <div className="flex items-center gap-4 flex-shrink-0 self-end sm:self-center">
                  <span
                    className="px-4 py-1.5 rounded-full border text-[11px] font-display uppercase tracking-wider"
                    style={{
                      background: cert.accent + '0a',
                      borderColor: cert.accent + '20',
                      color: cert.accent,
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Dynamic spotlight shadow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(400px circle at center, ${cert.accent}08, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
