import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Camera, Coffee, BookOpen, Music, Users, X } from 'lucide-react';

export default function CafeAmbience() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const vibeHighlights = [
    {
      icon: Coffee,
      title: 'Artisanal Pour-Over Bar',
      desc: 'Manual V60, French Press, and custom espresso extractions.'
    },
    {
      icon: BookOpen,
      title: 'Book Lovers Corner',
      desc: 'Carefully curated shelves of classics, novels, and local literature.'
    },
    {
      icon: Music,
      title: 'Acoustic Soul Vibes',
      desc: 'Gentle indie jazz, lo-fi beats, and warm dim ambient lighting.'
    },
    {
      icon: Users,
      title: 'Community & Thoughts',
      desc: 'A welcoming space for creatives, remote work, and deep chats.'
    }
  ];

  const galleryItems = [
    { id: 1, src: '/gallery/blue_mug_cafe_0007.webp', title: 'Cozy Reading Nook & Library', tag: 'AMBIENCE' },
    { id: 2, src: '/gallery/blue_mug_cafe_0016.webp', title: 'Espresso Bar & Brewing Craft', tag: 'BARISTA' },
    { id: 3, src: '/gallery/blue_mug_cafe_0029.webp', title: 'Warm Evening Yellow Glow', tag: 'LIGHTS' },
    { id: 4, src: '/gallery/blue_mug_cafe_0081.webp', title: 'Artisan Coffee & Book Corner', tag: 'CULTURE' },
    { id: 5, src: '/gallery/blue_mug_cafe_0126.webp', title: 'Signature Cafe Table Spread', tag: 'EXPERIENCE' },
    { id: 6, src: '/gallery/blue_mug_cafe_0190.webp', title: 'Creative Corner & Art Wall', tag: 'AESTHETIC' },
    { id: 7, src: '/gallery/blue_mug_cafe_0196.webp', title: 'Intimate Seating & Conversations', tag: 'DINE-IN' },
    { id: 8, src: '/gallery/blue_mug_cafe_0200.webp', title: 'Warm Wooden Interiors', tag: 'VIBES' },
    { id: 9, src: '/gallery/blue_mug_cafe_0254.webp', title: 'Fresh Brew & Gourmet Bites', tag: 'CULINARY' },
    { id: 10, src: '/gallery/blue_mug_cafe_0320.webp', title: 'Outdoor Patio & Street Breeze', tag: 'SEATING' },
    { id: 11, src: '/gallery/blue_mug_cafe_0380.webp', title: 'Late Evening Coffee Sessions', tag: 'COMMUNITY' },
    { id: 12, src: '/gallery/blue_mug_cafe_0576.webp', title: 'Sweet Treats & Special Moments', tag: 'DESSERT' },
  ];

  return (
    <section id="ambience" className="relative py-16 sm:py-24 bg-[#090b0e] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-blue-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-blue-400">
                The Blue Mug Experience
              </span>
            </div>
            <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase">
              COFFEE, BOOKS &amp; <span className="text-amber-400">THOUGHTS</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-lg leading-relaxed">
              Tucked away in the serene residential lanes of Jodhpur Park, Kolkata, Blue Mug is more than just a cafe—it is an intimate space where creative minds meet over steaming brew.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
            <Camera className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Tag us <strong className="text-white">@bluemug_kolkata</strong> on Instagram</span>
          </div>
        </div>

        {/* 4 Vibe Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {vibeHighlights.map((vibe, idx) => {
            const Icon = vibe.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3.5 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-1">
                  {vibe.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {vibe.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Cafe Photography Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(item)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-neutral-900 border border-white/5"
              transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6, delay: (item.id % 4) * 0.05 }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 sm:p-4 flex flex-col justify-end">
                <span className="text-[9px] sm:text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  {item.tag}
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          >
            <div className="relative max-w-3xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 flex flex-col" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-neutral-800"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full max-h-[55vh] sm:max-h-[65vh] object-contain sm:object-cover bg-black"
              />
              
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 bg-neutral-950">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase block">
                    {selectedPhoto.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {selectedPhoto.title}
                  </h4>
                </div>
                <span className="text-[11px] sm:text-xs text-neutral-400">Blue Mug Cafe, Jodhpur Park, Kolkata</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
