import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const directions = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { y: 0, x: -20 },
  right: { y: 0, x: 20 }
};

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, filter: 'blur(14px)', ...initial }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: '0px' }}
      transition={prefersReducedMotion
        ? { duration: 0.01 }
        : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
