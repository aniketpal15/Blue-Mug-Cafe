import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const directions = {
  up: { y: 28, x: 0 },
  left: { y: 18, x: -28 },
  right: { y: 18, x: 28 }
};

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, ...initial, scale: 0.985, filter: 'blur(4px)' }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -12% 0px' }}
      transition={prefersReducedMotion
        ? { duration: 0.01 }
        : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
