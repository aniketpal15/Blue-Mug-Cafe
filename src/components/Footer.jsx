import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Download, Heart, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#050607] text-white pt-14 sm:pt-20 pb-10 sm:pb-12 border-t border-white/10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/30">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl tracking-tight text-white block leading-none">
                  BLUE MUG
                </span>
                <span className="text-[10px] tracking-[0.25em] text-blue-400 font-semibold uppercase">
                  COFFEE &amp; THOUGHTS
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              Kolkata&apos;s beloved artisanal coffee refuge and gourmet bistro in Jodhpur Park. 
              Celebrating handcrafted manual brews, juicy burgers, and heartfelt community conversations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/bluemug_kolkata/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-pink-950/60 border border-pink-500/40 flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-600 hover:border-pink-400 hover:shadow-[0_0_14px_rgba(236,72,153,0.5)] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/bluemugkolkata/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-400 hover:shadow-[0_0_14px_rgba(59,130,246,0.5)] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/blue-mug-coffee-thoughts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-sky-950/60 border border-sky-500/40 flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-600 hover:border-sky-400 hover:shadow-[0_0_14px_rgba(14,165,233,0.5)] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-amber-400 mb-5">
              Explore Blue Mug
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-neutral-600">›</span> Promotions &amp; Hero Showcase
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-neutral-600">›</span> Artisanal Menu Highlights
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-neutral-600">›</span> Order Online (Zomato / Swiggy)
                </a>
              </li>
              <li>
                <a href="#ambience" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-neutral-600">›</span> Cafe Ambience &amp; Story
                </a>
              </li>
              <li>
                <a 
                  href="/blue-mug-menu.pdf" 
                  download="blue-mug-menu.pdf" 
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download Full Menu (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit Us & Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-amber-400 mb-5">
              Visit &amp; Contact
            </h4>
            <div className="space-y-4 text-xs text-neutral-300">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Blue Mug Cafe</strong>
                  <span>1/243 Jodhpur Park, Kolkata - 700068, West Bengal</span>
                  <a
                    href="https://www.google.com/search?q=Blue+Mug+Cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 mt-1 font-semibold"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Table Booking &amp; Orders</span>
                  <a
                    href="tel:+916290441067"
                    className="text-white hover:text-amber-400 font-mono font-bold transition-colors"
                  >
                    +91 62904 41067
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Hours of Operation</span>
                  <span className="text-white font-medium">11:00 AM – 10:30 PM (All 7 Days)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Col 4: Google Maps & Directions */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-amber-400 mb-5">
              Location in Kolkata
            </h4>
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">Neighborhood</span>
                <span className="text-white font-semibold">Jodhpur Park</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">Nearest Metro</span>
                <span className="text-white font-semibold">Rabindra Sarobar / Kalighat</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">Atmosphere</span>
                <span className="text-blue-400 font-semibold">Cozy &amp; Creative</span>
              </div>

              <a
                href="https://www.google.com/search?q=Blue+Mug+Cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Kolkata Pride */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p>
            © {currentYear} Blue Mug Cafe. All rights reserved. Handcrafted with passion in Kolkata.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2.5 sm:gap-4 text-neutral-400">
            <span>FSSAI Lic. Certified</span>
            <span>•</span>
            <span>Free Wi-Fi</span>
            <span>•</span>
            <span>Pet Friendly Patio</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
