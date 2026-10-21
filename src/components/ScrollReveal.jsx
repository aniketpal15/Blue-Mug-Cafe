import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const directions = {
  up: { y: 18, x: 0 },
  left: { y: 0, x: -20 },
  right: { y: 0, x: 20 }
};

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, ...initial }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.28, margin: '0px 0px -6% 0px' }}
      transition={prefersReducedMotion
        ? { duration: 0.01 }
        : { type: 'spring', stiffness: 70, damping: 18, mass: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
