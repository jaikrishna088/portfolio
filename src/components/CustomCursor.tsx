import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const isHovering = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);

  const springX = useSpring(cursorX, { damping: 28, stiffness: 300, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    // Only show custom cursor on desktop
    const hasHover = !window.matchMedia('(hover: none)').matches;
    setIsMobile(!hasHover);
    if (!hasHover) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = () => {
      isHovering.current = true;
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.8)';
        ringRef.current.style.opacity = '0.6';
        ringRef.current.style.borderColor = 'rgba(99,102,241,0.8)';
      }
    };

    const onLeave = () => {
      isHovering.current = false;
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        ringRef.current.style.opacity = '1';
        ringRef.current.style.borderColor = 'rgba(255,255,255,0.4)';
      }
    };

    const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label, [tabindex]');

    window.addEventListener('mousemove', onMove);
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (isMobile) return null;

  return (
    <>
      {/* Ring (smooth/lagged) */}
      <motion.div
        ref={ringRef as any}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.4)',
          transition: 'transform 0.3s ease, opacity 0.3s ease, border-color 0.3s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Dot (instant) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
          borderRadius: '50%',
          backgroundColor: '#fff',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
