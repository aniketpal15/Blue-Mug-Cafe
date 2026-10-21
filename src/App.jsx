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

      {/* Main Website Structure */}
      {!loading && (
        <>
          {/* Top Sticky Navbar */}
          <Navbar onOpenSearch={() => setSearchOpen(true)} />

          <main id="main-content">
            {/* Core Section 2: Hero Section matching reference */}
            <HeroParallax />

            {/* Core Section 3: Menu Highlights Showcase */}
            <MenuShowcase />

            {/* Core Section 4: Order Online Delivery Integration */}
            <DeliverySection />

            {/* Core Experience: Real Cafe Ambience & Story */}
            <CafeAmbience />

            {/* Customer Reviews: Genuine Google reviews */}
            <CustomerReviews />
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
      )}
    </div>
  );
}
