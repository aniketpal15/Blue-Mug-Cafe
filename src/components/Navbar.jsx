import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, Menu, X, Flame, Download, Coffee, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'PROMOTIONS', href: '#hero', isPromo: true },
    { name: 'Menu', href: '#menu' },
    { name: 'Ambience', href: '#ambience' },
    { name: 'Contact', href: '#contact' },
  ];

  const rightNavLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Ambience', href: '#ambience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090a]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Logo & Promotions Badge */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Cafe Logo */}
              <a
                href="#hero"
                className="flex items-center gap-2 sm:gap-2.5 group"
                onClick={(e) => handleNavClick(e, '#hero')}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/30 group-hover:scale-105 transition-transform shrink-0">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg sm:text-xl tracking-tight text-white leading-none">
                    BLUE MUG
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-blue-400 font-semibold uppercase">
                    KOLKATA
                  </span>
                </div>
              </a>

              {/* Promotions Badge */}
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="hidden lg:flex items-center gap-1.5 text-xs font-bold tracking-wider px-3 py-1 bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/30 hover:bg-amber-400/20 shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all"
              >
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
                <span>PROMOTIONS</span>
              </a>
            </div>

            {/* Right: Actions (Search, Menu Links, Phone Number, PDF Menu) */}
            <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-5">
              
              {/* Search Icon */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search Menu"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Menu, Ambience, Contact Links right before the number */}
              <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                {rightNavLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-neutral-300 hover:text-white font-medium hover:tracking-wide transition-all duration-200 relative py-1"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Direct Phone Link */}
              <a
                href="tel:+916290441067"
                className="hidden sm:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/60 transition-all hover:border-neutral-500 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden lg:inline">+91 62904 41067</span>
                <span className="lg:hidden">Call</span>
              </a>

              {/* Order Now Button */}
              <a
                href="#order-online"
                onClick={(e) => handleNavClick(e, '#order-online')}
                className="flex items-center gap-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
              >
                <span>Order Now</span>
              </a>

              {/* Download Menu Button */}
              <a
                href="/blue-mug-menu.pdf"
                download="Blue-Mug-Cafe-Menu.pdf"
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all transform hover:-translate-y-0.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Menu</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
                className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white shrink-0"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[56px] sm:top-[65px] z-30 bg-[#0c0d10]/98 backdrop-blur-xl border-b border-white/10 p-5 sm:p-6 md:hidden shadow-2xl max-h-[calc(100dvh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg py-2 border-b border-white/5 flex items-center justify-between ${
                    item.isPromo ? 'text-amber-400 font-bold' : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.isPromo && <Flame className="w-4 h-4 text-amber-400" />}
                    {item.name}
                  </span>
                  <span className="text-xs text-neutral-500">→</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#order-online"
                  onClick={(e) => handleNavClick(e, '#order-online')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20"
                >
                  Order Now
                </a>

                <a
                  href="/blue-mug-menu.pdf"
                  download="Blue-Mug-Cafe-Menu.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30"
                >
                  <Download className="w-4 h-4" />
                  Download Full Menu (PDF)
                </a>

                <a
                  href="tel:+916290441067"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call: +91 62904 41067
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
