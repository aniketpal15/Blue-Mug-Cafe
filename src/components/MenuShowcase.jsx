import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Star, Clock, Sparkles, Filter, Search, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { menuItems, menuCategories } from '../data/menuItems';

const DESKTOP_ITEMS_PER_PAGE = 12;
const TABLET_2COL_ITEMS_PER_PAGE = 6;
const MOBILE_ITEMS_PER_PAGE = 5;

const getItemsPerPage = (width) => {
  if (width < 640) return MOBILE_ITEMS_PER_PAGE;        // 1 column: 5 items
  if (width < 1024) return TABLET_2COL_ITEMS_PER_PAGE;  // 2 columns: 6 items
  return DESKTOP_ITEMS_PER_PAGE;                         // 3/4 columns: 12 items
};

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState('Bestseller');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return getItemsPerPage(window.innerWidth);
    }
    return DESKTOP_ITEMS_PER_PAGE;
  });

  // Dynamically update items per page division when screen size changes
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage(window.innerWidth));
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset to page 1 whenever category, search query, or itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, itemsPerPage]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Special tag-based categories
      let matchesCategory;
      if (activeCategory === 'All') {
        matchesCategory = true;
      } else if (activeCategory === 'Bestseller') {
        matchesCategory = item.tags?.includes('Bestseller');
      } else if (activeCategory === 'Chef Special') {
        matchesCategory = item.tags?.includes('Chef Special');
      } else {
        matchesCategory = item.category === activeCategory;
      }
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedItems = useMemo(() => {
    const startIdx = (safePage - 1) * itemsPerPage;
    return filteredItems.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredItems, safePage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadMenu = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#f59e0b', '#ffffff']
    });
  };

  const handleOrderNow = (e) => {
    if (e) e.preventDefault();
    const orderSec = document.getElementById('order-online') || document.getElementById('delivery');
    if (orderSec) {
      orderSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="menu" className="relative py-16 sm:py-24 bg-[#090b0e] text-white overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400">
                Culinary Highlights
              </span>
            </div>
            <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase">
              FULL <span className="text-blue-500">MENU</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-lg">
              All 150+ items from our official menu — handcrafted with fresh, quality ingredients across 27 categories.
            </p>
          </div>

          {/* HIGHLY VISIBLE "DOWNLOAD FULL MENU" BUTTON (Crucial Requirement) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="/blue-mug-menu.pdf"
              download="blue-mug-menu.pdf"
              onClick={handleDownloadMenu}
              className="group relative inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:shadow-[0_0_45px_rgba(245,158,11,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <div className="w-8 h-8 rounded-xl bg-black/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Download className="w-4 h-4 text-black stroke-[2.5]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-black/70 tracking-widest leading-none">OFFICIAL MENU</div>
                <div className="text-xs sm:text-sm font-black text-black leading-tight">DOWNLOAD FULL MENU (PDF)</div>
              </div>
            </a>
          </div>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-white/10">
          
          {/* Categories Pills — horizontally scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-nowrap" style={{ WebkitOverflowScrolling: 'touch' }}>
            {menuCategories.map((category) => {
              const isSpecial = category === 'Bestseller' || category === 'Chef Special';
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? category === 'Bestseller'
                        ? 'bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                        : category === 'Chef Special'
                        ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]'
                        : 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                      : isSpecial
                      ? category === 'Bestseller'
                        ? 'bg-amber-400/10 text-amber-400 border border-amber-400/40 hover:bg-amber-400 hover:text-black'
                        : 'bg-blue-600/10 text-blue-400 border border-blue-500/40 hover:bg-blue-600 hover:text-white'
                      : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {category === 'Bestseller' ? '🏆 ' + category : category === 'Chef Special' ? '👨‍🍳 ' + category : category}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search burger, pizza, pasta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-900/80 border border-neutral-800 rounded-full text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Active Category & Page Info */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6">
          <div>
            Showing <span className="font-bold text-white">{(safePage - 1) * itemsPerPage + 1}</span> – <span className="font-bold text-white">{Math.min(safePage * itemsPerPage, filteredItems.length)}</span> of <span className="font-bold text-white">{filteredItems.length}</span> items
            {activeCategory !== 'All' && <span className="text-amber-400 ml-1.5 font-medium">({activeCategory})</span>}
          </div>
          {totalPages > 1 && (
            <div className="text-neutral-500 font-mono">
              Page <span className="text-white font-bold">{safePage}</span> of <span className="text-white font-bold">{totalPages}</span>
            </div>
          )}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          <AnimatePresence mode="wait">
            {paginatedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-[#111317] border border-white/5 hover:border-amber-400/30 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] hover:-translate-y-1"
              >
                {/* Food Image preview */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl bg-gradient-to-b from-[#181a20] to-[#0d0e12] overflow-hidden mb-4 flex items-center justify-center p-2 border border-white/5">
                  <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover rounded-lg filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 flex gap-1.5 z-10">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          tag === 'Bestseller'
                            ? 'bg-amber-400 text-black shadow-md'
                            : tag === 'Chef Special'
                            ? 'bg-blue-600 text-white shadow-md'
                            : tag === 'Veg'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-red-950 text-red-400 border border-red-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Prep Time */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-[10px] text-neutral-400 flex items-center gap-1 font-mono z-10">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{item.prepTime}</span>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-neutral-500 text-[10px]">({item.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono block leading-none">PRICE</span>
                    <span className="font-mono font-bold text-xl text-white">
                      ₹{item.price}
                    </span>
                  </div>

                  <a
                    href="#order-online"
                    onClick={handleOrderNow}
                    className="px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_20px_rgba(245,158,11,0.45)] transition-all flex items-center gap-1.5 transform hover:scale-105 active:scale-95"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state if search has no results */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-neutral-400">No dishes found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-white/10 text-center sm:text-left">
            <div className="text-xs text-neutral-400">
              Showing page <span className="font-bold text-white">{safePage}</span> of <span className="font-bold text-white">{totalPages}</span> ({filteredItems.length} items total)
            </div>

            <div className="flex items-center flex-wrap justify-center gap-1.5 sm:gap-2">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safePage - 1)}
                disabled={safePage === 1}
                className="px-3 sm:px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-semibold flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 hover:border-white/20 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden xs:inline sm:inline">Prev</span>
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  // Only show numbers if within window of active page or first/last
                  const isFirst = pageNum === 1;
                  const isLast = pageNum === totalPages;
                  const isNear = Math.abs(pageNum - safePage) <= 1;

                  if (!isFirst && !isLast && !isNear) {
                    if (pageNum === safePage - 2 || pageNum === safePage + 2) {
                      return <span key={pageNum} className="text-neutral-600 px-1 text-xs">...</span>;
                    }
                    return null;
                  }

                  const isActive = pageNum === safePage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`min-w-[32px] sm:min-w-[36px] h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105'
                          : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(safePage + 1)}
                disabled={safePage === totalPages}
                className="px-3 sm:px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-semibold flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 hover:border-white/20 transition-all"
              >
                <span className="hidden xs:inline sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Menu Banner */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-blue-950/60 via-[#101524] to-amber-950/40 border border-blue-500/20 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Complete 2026 Cafe Edition
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-tight">
              Browse the Complete 150+ Item Menu
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
              Explore our full selection across 27 categories — coffees, teas, shakes, snacks, pizzas, pasta, sizzlers, fish, meat, desserts, and more in our official PDF.
            </p>
          </div>

          <a
            href="/blue-mug-menu.pdf"
            download="blue-mug-menu.pdf"
            onClick={handleDownloadMenu}
            className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white text-black hover:bg-amber-400 font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 whitespace-nowrap transform hover:scale-105"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            Download PDF (60MB)
          </a>
        </div>

      </div>
    </section>
  );
}
