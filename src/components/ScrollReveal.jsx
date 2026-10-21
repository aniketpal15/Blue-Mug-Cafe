import React from 'react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';

const directions = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { y: 0, x: -20 },
  right: { y: 0, x: 20 }
};

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const revealRef = React.useRef(null);
  const controls = useAnimation();
  const isInView = useInView(revealRef, { amount: 0.2, margin: '0px 0px -8% 0px' });
  const initial = directions[direction] || directions.up;
  const hiddenState = React.useMemo(
    () => ({ opacity: 0, ...initial, filter: 'blur(10px)' }),
    [initial]
  );

  React.useEffect(() => {
    if (prefersReducedMotion) {
      controls.set({ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' });
      return;
    }

    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }
      });
    } else {
      controls.start(hiddenState);
    }
  }, [controls, delay, hiddenState, isInView, prefersReducedMotion]);

  return (
    <motion.div
      ref={revealRef}
      initial={prefersReducedMotion ? false : hiddenState}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
