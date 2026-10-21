import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, ArrowRight, Check, Sparkles, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { heroSlides } from '../data/heroSlides';

export default function HeroParallax() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const containerRef = useRef(null);

  const currentSlide = heroSlides[currentIndex];

  // Mouse coordinates for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, physics-based movement - gentle & subtle
  const springConfig = { damping: 30, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations for the foreground food item - gentle subtle tilt
  const foodRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);
  const foodRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4, -4]);
  const foodTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const foodTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [-6, 6]);

  // Gentle subtle parallax shift for the giant background typography
  const textTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const textTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    heroSlides.slice(1).forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  const handleShare = async () => {
    setShareError(false);
    const shareData = {
      title: `Blue Mug Cafe - ${currentSlide.title}`,
      text: `Check out ${currentSlide.title} at Blue Mug Cafe, Kolkata!`,
      url: window.location.href,
    };

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2500);
      } else {
        setShareError(true);
      }
    } catch (error) {
      if (error?.name !== 'AbortError') {
        console.error('Unable to share Blue Mug Cafe', error);
        setShareError(true);
      }
    }
  };

  const handleOrderClick = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#f59e0b', '#ffffff']
    });
    const deliverySec = document.getElementById('delivery');
    if (deliverySec) {
      deliverySec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] lg:h-screen lg:max-h-screen w-full flex flex-col justify-between bg-[#070809] overflow-hidden select-none pt-16 sm:pt-20 pb-3 sm:pb-4 lg:pb-5 px-3 sm:px-6 lg:px-12 perspective-1200"
    >
      {/* Background ambient lighting and vignette */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial ambient glow colored by current item */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-25 transition-all duration-700"
          style={{ background: currentSlide.accentColor }}
        />
        {/* Vignette border */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-transparent to-[#070809]/80" />
      </div>

      {/* LEFT SIDEBAR: Social Icons (as seen in reference image) */}
      <div className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-neutral-700" />
        
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform"
        >
          <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href="https://www.facebook.com/bluemugkolkata/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform"
        >
          <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/bluemug_kolkata/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform"
        >
          <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-neutral-700" />
      </div>

      {/* CENTER STAGE: Giant Layered Typography Behind Food Item (Fills available space) */}
      <div className="relative w-full max-w-[1440px] mx-auto flex-1 flex items-center justify-center min-h-0 py-2 sm:py-4">
        
        {/* 1. GIANT OVERLAPPING BACKGROUND TEXT ( Anton/Oswald Font ) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
          <motion.div
            style={{ x: textTranslateX, y: textTranslateY }}
            className="w-full flex items-center justify-center -translate-y-3 sm:translate-y-0"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide.category}
                initial={{ opacity: 0, scale: 0.88, y: direction * 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.08, y: direction * -40 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(5.4rem,23vw,7.8rem)] sm:text-[9.5rem] md:text-[12rem] lg:text-[15rem] xl:text-[17.5rem] leading-none font-black text-white/95 uppercase tracking-normal sm:tracking-wider text-center select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              >
                {currentSlide.category}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 2. FOREGROUND FLOATING 3D FOOD IMAGE ( Overlapping the Typography ) */}
        <div className="relative z-20 flex items-center justify-center w-full max-w-xl lg:max-w-2xl px-2 xs:px-4 sm:px-6 preserve-3d">
          
          {/* Left Arrow Button (Matching reference circular yellow button) */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous item"
            className="absolute left-0 xs:left-1 sm:left-4 md:-left-8 lg:-left-16 z-30 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center shadow-[0_10px_25px_rgba(245,158,11,0.5)] transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* 3D Tilted Food Image Container */}
          <motion.div
            style={{
              rotateX: foodRotateX,
              rotateY: foodRotateY,
              x: foodTranslateX,
              y: foodTranslateY,
              transformStyle: 'preserve-3d'
            }}
            className="relative w-[210px] xs:w-[250px] sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[480px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.75, rotate: direction * -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.75, rotate: direction * 12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Ambient back shadow for authentic physical depth */}
                <div className="absolute inset-4 rounded-full bg-black/60 blur-3xl pointer-events-none transform translate-y-10" />

                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  draggable="false"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallbackApplied) {
                      e.currentTarget.dataset.fallbackApplied = 'true';
                      e.target.src = currentSlide.fallbackImage;
                    }
                  }}
                  className={`w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] pointer-events-none select-none transition-transform ${
                    currentSlide.imageClassName || ''
                  }`}
                />

                {/* Floating Tag Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-1 right-1 sm:top-4 sm:right-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-xl"
                >
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                  <span>{currentSlide.tag}</span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Arrow Button (Matching reference circular yellow button) */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next item"
            className="absolute right-0 xs:right-1 sm:right-4 md:-right-8 lg:-right-16 z-30 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center shadow-[0_10px_25px_rgba(245,158,11,0.5)] transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* 3. BOTTOM ROW: Order Now / Explore Menu CTA, Dots & Food Details Callout (Fully Visible in Viewport) */}
      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-end justify-between z-20 gap-3 sm:gap-4 pt-1 pb-1">
        
        {/* Quick CTA Pill Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={handleOrderClick}
            className="px-5 sm:px-7 py-2 sm:py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center gap-1.5 sm:gap-2 transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            <span>Order Now</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </button>

          <a
            href="#menu"
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/15 transition-all hover:border-white/30 whitespace-nowrap"
          >
            Explore Menu
          </a>
        </div>

        {/* Slide item counter indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2 my-1 sm:my-2 md:my-0">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-7 sm:w-8 bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                  : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Dish Details Card (Matching reference right callout) */}
        <div className="w-full max-w-xs sm:max-w-sm text-center md:text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title & Underline */}
              <h2 className="font-heading font-bold text-base sm:text-xl lg:text-2xl text-amber-400 uppercase tracking-wide flex items-center justify-center md:justify-end gap-2">
                <span>{currentSlide.title}</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-amber-400 my-1 sm:my-1.5 mx-auto md:ml-auto md:mr-0 rounded-full" />

              {/* Appetizing culinary description */}
              <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed font-normal mb-1.5 sm:mb-2 line-clamp-2 md:line-clamp-3 max-w-xs sm:max-w-sm mx-auto md:ml-auto md:mr-0">
                {currentSlide.description}
              </p>

              {/* Share, Price & Language Switcher info */}
              <div className="flex items-center justify-center md:justify-end gap-2.5 sm:gap-4 text-xs flex-wrap">
                <span className="font-mono font-bold text-sm sm:text-lg text-white">
                  {currentSlide.price}
                </span>
                
                <span className="text-neutral-600">•</span>

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label={shareError ? 'Sharing unavailable' : 'Share this item'}
                  className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors py-0.5 px-2 rounded-md hover:bg-white/5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400 font-medium text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span className="capitalize text-[11px] sm:text-xs">share</span>
                    </>
                  )}
                </button>
                {shareError && (
                  <span className="text-[10px] text-red-300" role="status">
                    Copy sharing is unavailable
                  </span>
                )}

                <span className="text-neutral-600">•</span>

                {/* Language Switcher integrated right here */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400">
                  {['EN', 'BN', 'HI'].map((lang, index) => (
                    <React.Fragment key={lang}>
                      <button
                        onClick={() => setSelectedLang(lang)}
                        className={`transition-colors ${
                          selectedLang === lang
                            ? 'text-amber-400 font-bold'
                            : 'hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                      {index < 2 && <span className="text-neutral-700">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
