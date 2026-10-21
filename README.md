# ☕ Blue Mug Cafe — Official Website

> ### *Where Artisanal Brews Meet Gourmet Bites & Thoughts*
> **Jodhpur Park, Kolkata — Est. 2018**

---

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)

---

## 🌟 Overview

The **Blue Mug Cafe** website is a premium, cinematic, fully responsive single-page web application built for one of Kolkata's most beloved independent cafes. Located in Jodhpur Park, Blue Mug is celebrated for its artisanal coffee, gourmet bistro bites, and a warm reading-room ambience.

This website captures that personality — blending a **dark premium aesthetic**, **fluid physics-based animations**, and a **world-class UI** that feels as cozy and exciting as walking into the cafe itself.

> *"The goal was simple: build a digital experience as good as the espresso."*

The website is deployed on **Vercel**: [🌐 Visit the live Blue Mug Cafe website](https://blue-mug-cafe.vercel.app/).

---

## ✨ Features & Sections

### 🎬 Cinematic Loading Screen
The site greets every visitor with a custom animated loader:
- A glowing cobalt-blue ceramic coffee mug SVG with rising amber+blue steam vapour
- Dynamic gold-and-blue gradient progress bar
- Brewing status messages — *"Heating Brewhead…"*, *"Extracting Single Origin…"*, *"Frothing Velvet Milk…"*, *"Serving Perfection…"*
- Full-viewport cinematic fade-out blur exit animation
- Entire experience completes in under **1.6 seconds**

---

### 🦸 Hero Parallax Showcase
A full-viewport interactive hero featuring **5 stunning food & drink slides**:
- **Signature Blue Brew** (Arabica Coffee), **Classic Burger**, **Electric Blue Lagoon** Mocktail, **Woodfired Pizza**, **Chicken Steak Sizzler**
- Giant 3D-tilting food image responds fluidly to **mouse movement** (physics spring model)
- Glassmorphism info panels — price, description, badge rating, calories, prep time, serving size
- Smooth **slide-in / slide-out** transitions with directional awareness
- **Keyboard navigation** (← →) and dot indicator navigation
- **Share button** with clipboard copy + confetti celebration burst
- Auto-cycling slideshow

---

### 📋 Full Menu Showcase — 150+ Items
A sophisticated, fully explorable menu section:
- **27+ smart category pills** — All, Bestseller, Chef Special, Hot Coffee, Cold Coffee, Tea, Milkshake, Cold Coffee, Mocktail, Burger, Pizza, Pasta, Sizzlers, Fish, Soups, Salads, Desserts, and more
- **Live instant search** — filters by item name and description simultaneously
- **Responsive smart pagination**:
  - 📱 Mobile (< 640px): 5 items per page
  - 📲 Tablet 2-col (640px–1023px): 6 items per page
  - 🖥 Desktop (1024px+): 12 items per page
- Each food card includes: real photo, tags (🏆 Bestseller, 👨‍🍳 Chef Special, VEG/NON-VEG), rating, prep time, calorie count, and price
- **Official 60MB PDF Menu** download — triggers a confetti burst on click

---

### 🛵 Order Online Section
Smooth animated delivery integration:
- Direct deep-link cards for **Zomato**, **Swiggy**, and **Magicpin**
- **Phone call button** (`+91 62904 41067`) for walk-in bookings and queries
- Staggered card reveal animations on scroll

---

### 🖼 Cafe Ambience Gallery
A 12-photo real-image gallery with authentic cafe interior shots:
- Hover reveals overlay with title and category label
- Categories: Ambience, Barista, Lights, Culture, Experience, Aesthetic, Dine-In, Vibes, Culinary, Seating, Community, Dessert
- Cinematic dark backdrop with ambient glow orbs

---

### ⭐ Customer Reviews
Genuine Google-sourced reviews in premium styled cards:
- Star ratings, reviewer name, date, review text
- Google rating summary badge — **4.3★ average**
- Smooth horizontal scroll on mobile

---

### 🔻 Footer & Contact Info
A comprehensive, richly designed footer:
- Clickable address linking directly to Google Maps
- Operating hours, phone, email
- Social links: Instagram, Facebook, LinkedIn
- All delivery platform shortcuts

---

### 🔍 Global Instant Search
A full-screen keyboard-accessible search modal:
- Opens via the 🔍 navbar icon
- Searches across all 150+ menu items live
- Auto-focuses on open, closes on Escape key

---

### 📱 Fully Responsive Design
Every layout carefully adapted for all devices:

| Screen | Layout | Menu Items/Page |
|---|---|---|
| Mobile (< 640px) | 1-column, hamburger menu | 5 |
| Tablet (640–1023px) | 2-column grid | 6 |
| Desktop (1024px+) | 3–4 column grid, full navbar | 12 |

---

## 🏗 Project Architecture

```
Blue Mug Cafe/
│
├── src/
│   ├── components/
│   │   ├── Loader.jsx              ← Cinematic loading screen with steam animation
│   │   ├── Navbar.jsx              ← Sticky glassmorphism navbar with mobile menu
│   │   ├── HeroParallax.jsx        ← 3D parallax hero slider with 5 food slides
│   │   ├── MenuShowcase.jsx        ← Full 150+ item menu, filters, search, pagination
│   │   ├── DeliverySection.jsx     ← Zomato / Swiggy / Magicpin order cards
│   │   ├── CafeAmbience.jsx        ← 12-photo real ambience gallery
│   │   ├── CustomerReviews.jsx     ← Google reviews carousel
│   │   ├── Footer.jsx              ← Contact, socials, links, branding
│   │   └── SearchAndCartModals.jsx ← Global live search modal
│   │
│   ├── data/
│   │   ├── menuItems.js            ← 150+ menu items: name, price, tags, image, info
│   │   └── heroSlides.js           ← Hero section 5 slide definitions & metadata
│   │
│   ├── App.jsx                     ← Root app layout, loader state, search state
│   ├── main.jsx                    ← React entry point
│   └── index.css                   ← Global styles, custom fonts, scrollbar, utils
│
├── public/
│   ├── images/
│   │   ├── hero-coffee.webp/.jpg  ← Optimized WebP hero image with JPG fallback
│   │   ├── hero-burger.webp/.jpg
│   │   ├── hero-mocktail.webp/.jpg
│   │   ├── hero-pizza.webp/.jpg
│   │   ├── hero-sizzler.webp/.jpg
│   │   └── menu/                   ← 177 individual menu item photos
│   ├── gallery/                    ← 12 curated real cafe ambience photos
│   └── blue-mug-menu.pdf           ← Official ~58MB full menu PDF
│
├── index.html                      ← Vite app entry HTML
├── vite.config.js                  ← Build configuration
├── tailwind.config.js              ← Custom design tokens and theme
├── postcss.config.js               ← CSS processing pipeline
├── package.json                    ← Manifest and npm scripts
├── server.js                       ← Express.js server for production deployment
├── .gitignore
└── README.md
```

---

## 🛠 Tech Stack

| Technology | Version | Role |
|---|---|---|
| **React** | 19 | Core UI component framework |
| **Vite** | 6 | Lightning-fast dev server and bundler |
| **Tailwind CSS** | 3 | Utility-first responsive design system |
| **Framer Motion** | 12 | Physics-based animations and page transitions |
| **Lucide React** | 1.16 | Consistent, minimal SVG icon set |
| **Canvas Confetti** | 1.9 | Celebration particle burst |
| **Express.js** | 4.21 | Node.js HTTP server for production |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or newer
- **npm** v9 or newer

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173). Hot Module Replacement is active — any code change reflects instantly without a full reload.

### 3. Build for Production
```bash
npm run build
```
Outputs an optimized bundle to `dist/`:
- ~500KB JS (gzipped: ~151KB)
- ~56KB CSS (gzipped: ~9KB)

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Run Full Express Server
```bash
npm start
```
Starts at [http://localhost:3001](http://localhost:3001) — serves the React SPA, menu PDF API, and cafe info API.

---

## 🌐 Hosting & Deployment

### Vercel — Recommended (Free)
**Live deployment:** [blue-mug-cafe.vercel.app](https://blue-mug-cafe.vercel.app/)

1. Push to a GitHub repository
2. Import at [vercel.com/new](https://vercel.com/new)
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. Click **Deploy** — done in 30 seconds ✅

### Netlify (Free)
Option A: Drag & drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop)

Option B: Connect your GitHub repo:
- Build command: `npm run build`
- Publish directory: `dist`

### Railway / Render / VPS (Full Node.js Hosting)
```bash
npm run build    # Build the React frontend
npm start        # Launch the Express server
```
Set `PORT` environment variable as needed.

---

## 📞 Cafe Contact

| | |
|---|---|
| 📍 Address | 1/243 Jodhpur Park, Kolkata — 700068 |
| 📞 Phone | +91 62904 41067 |
| 🕐 Hours | 11:00 AM – 10:30 PM (All 7 Days) |
| 🛵 Zomato | [Order on Zomato](https://www.zomato.com/kolkata/blue-mug-jodhpur-park/order) |
| 🛵 Swiggy | [Order on Swiggy](https://www.swiggy.com/city/kolkata/cafe-blue-mug-jodhpur-park-jadavpur-rest56983) |
| 📸 Instagram | [@bluemug_kolkata](https://www.instagram.com/bluemug_kolkata/) |
| 📘 Facebook | [Blue Mug Kolkata](https://www.facebook.com/bluemugkolkata/) |
| 💼 LinkedIn | [Blue Mug Coffee & Thoughts](https://www.linkedin.com/company/blue-mug-coffee-thoughts/) |

---

*Built with ☕ and 💙 for Blue Mug Cafe, Kolkata*

*Artisanal Brews • Gourmet Bites • Thoughts*
