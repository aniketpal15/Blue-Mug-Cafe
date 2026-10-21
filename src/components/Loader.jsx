import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 900;
    let completionTimer;

    const update = (now) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      const val = Math.min(Math.round(eased * 100), 100);
      setProgress(val);

      if (rawProgress < 1) {
        requestAnimationFrame(update);
      } else {
        completionTimer = setTimeout(() => {
          if (onComplete) onComplete();
        }, 200);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: 'blur(8px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070809] overflow-hidden select-none"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Coffee Mug Icon with Rising Steam */}
        <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
          {/* Animated Steam lines floating above coffee mug rim */}
          <div 
            className="absolute z-20 flex items-end gap-2 pointer-events-none"
            style={{ top: '8px', left: '52px', transform: 'translateX(-50%)' }}
          >
            {[
              { height: 'h-5', delay: 0, xOffset: -1.5 },
              { height: 'h-6', delay: 0.3, xOffset: 0 },
              { height: 'h-5', delay: 0.6, xOffset: 1.5 }
            ].map((steam, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, -20],
                  x: [0, steam.xOffset, 0],
                  opacity: [0.1, 0.9, 0],
                  scaleX: [0.9, 1.25, 1.5]
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  delay: steam.delay,
                  ease: "easeInOut"
                }}
                className={`w-1.5 ${steam.height} rounded-full bg-gradient-to-t from-amber-300 via-blue-400 to-transparent blur-[0.4px] shadow-[0_0_8px_rgba(245,158,11,0.6)]`}
              />
            ))}
          </div>

          {/* Glowing Ceramic Blue Mug SVG */}
          <svg className="w-20 h-20 drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Mug Body */}
            <rect x="14" y="22" width="30" height="30" rx="6" fill="#1e40af" stroke="#60a5fa" strokeWidth="2.5" />
            {/* Coffee Liquid Top */}
            <ellipse cx="29" cy="22" rx="15" ry="3.5" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
            <ellipse cx="29" cy="22" rx="10" ry="2" fill="#78350f" />
            {/* Mug Handle */}
            <path d="M44 26 C 52 26, 54 38, 44 42" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Steam Highlight on mug body */}
            <path d="M20 28 L20 44" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Star accent */}
            <circle cx="34" cy="35" r="1.5" fill="#fbbf24" />
          </svg>
        </div>

        {/* Brand Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-amber-400">
              Kolkata • Jodhpur Park
            </span>
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          
          <h1 className="font-display text-4xl tracking-tight text-white mb-2">
            BLUE MUG <span className="text-blue-500">CAFE</span>
          </h1>
          
          <p className="text-xs text-neutral-400 tracking-wider uppercase font-medium">
            Artisanal Brews • Gourmet Bites • Thoughts
          </p>
        </motion.div>

        {/* Progress Bar & Percentage */}
        <div className="w-full mt-8">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-neutral-400 text-[11px] font-mono tracking-wider">
              {progress < 30 ? 'Heating Brewhead...' : progress < 70 ? 'Extracting Single Origin...' : progress < 99 ? 'Frothing Velvet Milk...' : 'Serving Perfection...'}
            </span>
            <span className="font-mono text-amber-400 font-bold text-sm">
              {progress}%
            </span>
          </div>

          <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
