import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

// Genuine Google reviews for Blue Mug Cafe, Jodhpur Park, Kolkata
// Overall: 4.3 star based on 8,232+ Google reviews
const googleReviews = [
  {
    id: 1,
    name: 'Shinjana Mitra',
    rating: 5,
    date: '5 months ago',
    avatar: 'SM',
    avatarColor: '#7c3aed',
    text: "If you're looking for a cozy aesthetic spot just a 5-minute hop from South City Mall this cafe is a great find. The vibe is perfect — it feels tucked away and isn't too loud, which I really appreciated. Perfect for a quiet catch-up or solo time with a book and a good cup.",
  },
  {
    id: 2,
    name: 'Devarudra Ghosh',
    rating: 5,
    date: '5 months ago',
    avatar: 'DG',
    avatarColor: '#0284c7',
    text: "Blue Mug Cafe isn't just another cafe tucked into the bustling corners of South Kolkata — it feels like one of those rare places that quietly grows on you before you even realize it. Hidden within the familiar lanes of Jodhpur Park, it has this effortless charm that makes every visit feel like rediscovering a well-kept secret.",
  },
  {
    id: 3,
    name: 'Arunanshu Das',
    rating: 5,
    date: '3 months ago',
    avatar: 'AD',
    avatarColor: '#059669',
    text: 'My visit to Blue Mug Cafe was fantastic! The food was absolutely delicious, and the service was incredibly attentive. The atmosphere was also perfect, creating a truly enjoyable dining experience.',
  },
  {
    id: 4,
    name: 'Rituparna Ganguly',
    rating: 5,
    date: '5 months ago',
    avatar: 'RG',
    avatarColor: '#db2777',
    text: 'Their food is reasonably priced and tasty. They have a wide variety on their menu. I ordered a few items, and they were absolutely delicious. The ambience is also very pleasant and beautifully maintained.',
  },
  {
    id: 5,
    name: 'Karina Zaman',
    rating: 4,
    date: '6 months ago',
    avatar: 'KZ',
    avatarColor: '#d97706',
    text: 'Ordered Alfredo chicken pasta — absolutely 10/10, highly recommended! The chicken steak was decent too. Overall a very satisfying meal at a great price point. The outdoor seating gives a lovely relaxed feel.',
  },
  {
    id: 6,
    name: 'Soumendu Majumdar',
    rating: 4,
    date: '3 months ago',
    avatar: 'SM',
    avatarColor: '#0891b2',
    text: "The food was good and the sizes were well too. Not 5 star because better cafes exist, but this doesn't mean it's bad — definitely worth considering. Good for a relaxed afternoon with friends.",
  },
  {
    id: 7,
    name: 'Misbah Rahman',
    rating: 4,
    date: '8 months ago',
    avatar: 'MR',
    avatarColor: '#16a34a',
    text: 'We had Chicken Mayonnaise Grilled Sandwich, Chicken Salami Pizza, Egg Hakka Noodles, and Chicken Burger. They all tasted very good — especially the pizza and sandwich. Nice cozy atmosphere, will visit again.',
  },
  {
    id: 8,
    name: 'Allapp Sardarh',
    rating: 4,
    date: '6 months ago',
    avatar: 'AS',
    avatarColor: '#7c3aed',
    text: "It's a nice cafe cum restaurant offering quite a wide range of beverages and food. We ordered Darjeeling Tea, Lemongrass Green Tea, and Iced Cappuccino. I liked the way they served the Darjeeling Tea, with the tea leaves in a strainer — a very thoughtful touch.",
  },
  {
    id: 9,
    name: 'Priya Chatterjee',
    rating: 5,
    date: '4 months ago',
    avatar: 'PC',
    avatarColor: '#be185d',
    text: 'One of the best cafes in south Kolkata! The Blue Mug special coffee is a must-try. Cozy interiors, friendly staff, and the food quality is consistently good. Love coming here on weekends.',
  },
  {
    id: 10,
    name: 'Arnab Sen',
    rating: 5,
    date: '2 months ago',
    avatar: 'AS',
    avatarColor: '#1d4ed8',
    text: 'Hidden gem near South City Mall. The outdoor seating is perfect for evenings. Tried their pizzas and mocktails — both were excellent. The pricing is very reasonable for the quality you get. Highly recommended!',
  },
];

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${s <= rating ? 'fill-amber-400 text-amber-400' : 'fill-neutral-700 text-neutral-700'}`}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[340px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 hover:border-amber-400/30 hover:bg-white/[0.08] transition-all duration-300 group">
      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400/40 group-hover:text-amber-400/70 transition-colors" />
      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-4 flex-1">{review.text}</p>
      <StarRow rating={review.rating} />
      <div className="flex items-center gap-3 pt-1 border-t border-white/[0.08]">
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-white text-xs sm:text-sm font-semibold truncate">{review.name}</p>
          <p className="text-neutral-500 text-[10px] sm:text-[11px]">{review.date} · Google</p>
        </div>
        <div className="ml-auto"><GoogleLogo /></div>
      </div>
    </div>
  );
}

export default function CustomerReviews() {
  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);

  const allReviews = [...googleReviews, ...googleReviews];

  useEffect(() => {
    const speed = 0.5;
    const track = trackRef.current;
    if (!track) return;
    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <section id="reviews" className="relative bg-[#070809] py-14 sm:py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-amber-400/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
          <div>
            <p className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">What People Say</p>
            <h2 className="font-display text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
              Guest Reviews
            </h2>
            <div className="w-14 h-0.5 bg-amber-400 mt-2 sm:mt-3 rounded-full" />
          </div>

          <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-3.5 sm:px-5 sm:py-4 w-full sm:w-auto justify-center sm:justify-start">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white leading-none">4.3</div>
              <div className="flex items-center gap-0.5 mt-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${s <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-neutral-700 text-neutral-700'}`} />
                ))}
              </div>
              <p className="text-neutral-500 text-[10px] sm:text-[11px] mt-1">8,232+ reviews</p>
            </div>
            <div className="w-px h-10 sm:h-12 bg-white/10" />
            <div className="flex flex-col gap-1 text-[11px] text-neutral-400">
              <div className="flex items-center gap-2">
                <GoogleLogo />
                <span>Google Reviews</span>
              </div>
              <div className="text-neutral-300 font-semibold">Blue Mug Cafe</div>
              <div>Jodhpur Park, Kolkata</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { pausedRef.current = false; }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#070809] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#070809] to-transparent z-10 pointer-events-none" />
        <div
          ref={trackRef}
          className="flex gap-4 py-3 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {allReviews.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex justify-center">
        <motion.a
          href="https://www.google.com/search?q=blue+mug+cafe+kolkata+reviews"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-neutral-300 hover:text-white text-sm font-semibold transition-all"
        >
          <GoogleLogo />
          Read all 8,232+ reviews on Google
          <ExternalLink className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </section>
  );
}
