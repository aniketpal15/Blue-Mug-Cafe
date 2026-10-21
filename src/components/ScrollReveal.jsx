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
      initial={prefersReducedMotion ? false : { opacity: 1, filter: 'blur(14px)', ...initial }}
      whileInView={prefersReducedMotion ? undefined : {
        filter: ['blur(14px)', 'blur(10px)', 'blur(5px)', 'blur(0px)'],
        x: [initial.x, initial.x * 0.7, initial.x * 0.35, 0],
        y: [initial.y, initial.y * 0.7, initial.y * 0.35, 0]
      }}
      viewport={{ once: false, amount: 0.01, margin: '0px' }}
      transition={prefersReducedMotion
        ? { duration: 0.01 }
        : {
            duration: 0.9,
            delay,
            times: [0, 0.3, 0.65, 1],
            ease: [0.22, 1, 0.36, 1]
          }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
