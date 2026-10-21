import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroParallax from './components/HeroParallax';
import MenuShowcase from './components/MenuShowcase';
import DeliverySection from './components/DeliverySection';
import CafeAmbience from './components/CafeAmbience';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import { SearchModal } from './components/SearchAndCartModals';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const revealTransition = prefersReducedMotion
    ? { duration: 0.01 }
    : { duration: 0.75, ease: [0.16, 1, 0.3, 1] };

  const revealProps = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12, margin: '0px 0px -8% 0px' },
    transition: revealTransition
  };

  return (
    <div className="min-h-screen bg-[#070809] text-white selection:bg-blue-600 selection:text-white">
      {/* Cinematic Custom Initial Loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Website Structure mounts immediately so critical images fetch while the intro plays. */}
      <>
          {/* Top Sticky Navbar */}
          <Navbar onOpenSearch={() => setSearchOpen(true)} />

          <main id="main-content">
            {/* Core Section 2: Hero Section matching reference */}
            <HeroParallax />

            {/* Core Section 3: Menu Highlights Showcase */}
            <motion.div {...revealProps}>
              <MenuShowcase />
            </motion.div>

            {/* Core Section 4: Order Online Delivery Integration */}
            <motion.div {...revealProps}>
              <DeliverySection />
            </motion.div>

            {/* Core Experience: Real Cafe Ambience & Story */}
            <motion.div {...revealProps}>
              <CafeAmbience />
            </motion.div>

            {/* Customer Reviews: Genuine Google reviews */}
            <motion.div {...revealProps}>
              <CustomerReviews />
            </motion.div>
          </main>

          {/* Core Section 5: Footer & Contact */}
          <Footer />

          {/* Search Modal */}
          <SearchModal
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
            onSelectItem={(item) => {
              setSearchOpen(false);
              const orderSec = document.getElementById('order-online') || document.getElementById('delivery');
              if (orderSec) {
                orderSec.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
      </>
    </div>
  );
}
