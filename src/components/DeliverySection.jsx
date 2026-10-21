import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Bike, Clock, ShieldCheck, Sparkles, Phone, PhoneCall } from 'lucide-react';

export default function DeliverySection() {
  const deliveryPlatforms = [
    {
      name: 'Zomato',
      tagline: 'Order on Zomato • Live Tracking',
      url: 'https://www.zomato.com/kolkata/blue-mug-jodhpur-park/order',
      rating: '4.3 ★',
      deliveryTime: '25-35 mins',
      offer: 'Flat 20% OFF on select orders',
      brandColor: '#e23744',
      accentBg: 'from-red-950/40 via-[#151114] to-neutral-900',
      badgeBorder: 'border-red-500/30',
      btnBg: 'bg-[#e23744] hover:bg-[#d02835]',
      shadow: 'hover:shadow-[0_15px_40px_rgba(226,55,68,0.35)]',
      iconText: 'ZOMATO'
    },
    {
      name: 'Swiggy',
      tagline: 'Lightning Fast Doorstep Delivery',
      url: 'https://www.swiggy.com/city/kolkata/cafe-blue-mug-jodhpur-park-jadavpur-rest56983',
      rating: '4.4 ★',
      deliveryTime: '20-30 mins',
      offer: 'Free Delivery with Swiggy One',
      brandColor: '#fc8019',
      accentBg: 'from-orange-950/40 via-[#181310] to-neutral-900',
      badgeBorder: 'border-orange-500/30',
      btnBg: 'bg-[#fc8019] hover:bg-[#e46f0f]',
      shadow: 'hover:shadow-[0_15px_40px_rgba(252,128,25,0.35)]',
      iconText: 'SWIGGY'
    },
    {
      name: 'MagicPin',
      tagline: 'Earn Rewards & Exclusive Savings',
      url: 'https://magicpin.in/Kolkata/Jodhpur-Park/Restaurant/Blue-Mug/store/16a0734',
      rating: '4.5 ★',
      deliveryTime: 'Best Dine-in & Vouchers',
      offer: 'Up to 30% savings with magicpay',
      brandColor: '#7c3aed',
      accentBg: 'from-purple-950/40 via-[#15101a] to-neutral-900',
      badgeBorder: 'border-purple-500/30',
      btnBg: 'bg-[#7c3aed] hover:bg-[#6d28d9]',
      shadow: 'hover:shadow-[0_15px_40px_rgba(124,58,237,0.35)]',
      iconText: 'MAGICPIN'
    }
  ];

  return (
    <section id="order-online" className="relative py-16 sm:py-24 bg-[#07080a] text-white overflow-hidden scroll-mt-20">
      <div id="delivery" className="absolute -top-24 pointer-events-none" />
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Bike className="w-3.5 h-3.5" />
            Fast Home Delivery in Kolkata
          </div>

          <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase">
            ORDER <span className="text-amber-400">ONLINE</span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 sm:mt-3 leading-relaxed max-w-xl mx-auto">
            Craving our artisanal burgers, sizzling platters, or signature pour-overs at home? 
            Order directly through our verified delivery partners across Kolkata.
          </p>
        </div>

        {/* 3 Branded Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {deliveryPlatforms.map((platform) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 75, damping: 18, mass: 0.65, delay: deliveryPlatforms.indexOf(platform) * 0.08 }}
              className={`relative rounded-3xl bg-gradient-to-b ${platform.accentBg} border ${platform.badgeBorder} p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 ${platform.shadow}`}
            >
              <div>
                {/* Platform Top Header */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm tracking-tighter text-white shadow-lg shrink-0"
                      style={{ backgroundColor: platform.brandColor }}
                    >
                      {platform.iconText.slice(0, 3)}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                        {platform.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] text-neutral-400 block font-medium">
                        {platform.tagline}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-bold text-amber-400 flex items-center gap-1 shrink-0">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {platform.rating}
                  </span>
                </div>

                {/* Offer Highlight */}
                <div className="mb-5 sm:mb-6 p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 sm:gap-3">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-neutral-200">
                    {platform.offer}
                  </span>
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs text-neutral-400 mb-6 sm:mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{platform.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Hygiene Certified</span>
                  </div>
                </div>
              </div>

              {/* Direct Link CTA */}
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 sm:py-4 rounded-xl ${platform.btnBg} text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg group`}
              >
                <span>Order on {platform.name}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Direct Call for Online Booking & Queries */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-neutral-900/90 to-amber-950/30 border border-amber-400/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] shrink-0">
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-amber-400/20">
                Direct Cafe Helpline
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
                Online Booking &amp; Order Queries
              </h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-lg leading-relaxed">
                For table reservations, party bookings, or any queries regarding your food orders, call us directly.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:+916290441067"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2.5 transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-black text-black" />
              <span>Call: +91 62904 41067</span>
            </a>
          </div>
        </div>

        {/* Live Delivery Note */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-300">
              Kitchen is currently <strong className="text-emerald-400 font-semibold">ONLINE & ACCEPTING ORDERS</strong> for South Kolkata delivery.
            </p>
          </div>
          <span className="text-xs text-neutral-400 font-mono">
            Operating Hours: 11:00 AM – 10:30 PM
          </span>
        </div>

      </div>
    </section>
  );
}
