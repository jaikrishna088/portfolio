import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const meetups = [
  { name: 'Microsoft 365 Community', color: '#60a5fa', dot: '#3b82f6' },
  { name: 'Databricks', color: '#fb7185', dot: '#f43f5e' },
  { name: 'Agent Camp', color: '#a78bfa', dot: '#8b5cf6' },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
});

export default function Meetups() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="meetups" className="relative overflow-hidden" aria-label="Community Engagement">
      <div className="container-wide relative z-10" ref={ref}>
        {/* Horizontal structure layout */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center border-t border-white/5 pt-16">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <span className="mono-label tracking-[0.25em] text-indigo-400">07 / Community</span>
            <h3 className="font-display text-white text-2xl font-bold mt-1">
              Engagements & Meetups
            </h3>
          </motion.div>

          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-wrap gap-4 lg:justify-end"
          >
            {meetups.map((meetup, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 rounded-full cursor-none group"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full group-hover:scale-125 transition-transform duration-300"
                  style={{
                    backgroundColor: meetup.dot,
                    boxShadow: `0 0 10px ${meetup.dot}`,
                  }}
                />
                <span className="text-[12px] font-display uppercase tracking-widest font-semibold" style={{ color: meetup.color }}>
                  {meetup.name}
                </span>
                <span className="mono-label text-[9px] text-white/20 ml-2">Attended</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
