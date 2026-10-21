import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroParallax from './components/HeroParallax';
import MenuShowcase from './components/MenuShowcase';
import DeliverySection from './components/DeliverySection';
import CafeAmbience from './components/CafeAmbience';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import { SearchModal } from './components/SearchAndCartModals';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
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
            <ScrollReveal>
              <MenuShowcase />
            </ScrollReveal>

            {/* Core Section 4: Order Online Delivery Integration */}
            <ScrollReveal direction="left">
              <DeliverySection />
            </ScrollReveal>

            {/* Core Experience: Real Cafe Ambience & Story */}
            <ScrollReveal direction="right">
              <CafeAmbience />
            </ScrollReveal>

            {/* Customer Reviews: Genuine Google reviews */}
            <ScrollReveal direction="down">
              <CustomerReviews />
            </ScrollReveal>
          </main>

          {/* Core Section 5: Footer & Contact */}
          <ScrollReveal direction="up">
            <Footer />
          </ScrollReveal>

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
