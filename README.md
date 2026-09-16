# Zuper LED — High-Performance React Web Platform

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#license)

> Modern, high-performance React web application for **Zuper LED**, India's premier OEM LED display manufacturer. Converted from Elementor/WordPress into a clean, lightning-fast modular React architecture with interactive widgets, technical spec catalogs, sector case studies, and responsive B2B lead capture.

---

## 🌟 Highlights & Key Features

- **⚡ Blazing Fast Architecture**: Built on Vite + React 18 with sub-second page transitions, fast First Contentful Paint (FCP), and zero legacy WordPress bloat.
- **🎨 Premium Dark & Neon Visual Aesthetic**:
  - Deep dark surfaces (`#090D16`, `#0E1421`).
  - High-impact neon lime accents (`#DBFB04`, `#B9FB6A`).
  - Fluid typography and glassmorphic micro-animations.
- **🧩 Custom Elementor Enhancement Runtime (`useElementorEnhancer.js`)**:
  - **IntersectionObserver Animations**: Smooth, hardware-accelerated viewport entrance animations (`fadeInUp`, `animate-general`).
  - **Swiper & Prime Slider Tango**: Fully interactive hero and product image carousels with custom navigation controls, autoplay, and responsive breakpoints.
  - **Owl Carousel**: Integrated ticker and partner logos with touch swipe and responsive item counts.
  - **Interactive Hotspots**: Explorable technical feature badges with hover and click state tooltips.
  - **Portfolio Isotope & Filter System**: Real-time masonry layout filtering across 6 vertical categories.
  - **Universal Accordions**: Smooth animated accordion widgets across all 18 pages with default-open handling, auto-collapse siblings, and toggle-to-close behavior.
  - **Interactive Milestone Timeline**: Scroll-driven animated progress line tracking company milestones.
  - **Interactive Particle Canvas**: NextParticle GPU-accelerated logo canvas.
- **📱 Fully Responsive Design**: Mobile-first responsive layouts optimized for mobile devices (320px+), tablets (768px+), laptops (1024px+), and ultra-wide desktop monitors (1440px+).
- **💼 B2B Lead Generation Workflows**: Integrated quotation modal, technical datasheet downloads, contact inquiries, and instant WhatsApp communication.

---

## 🏗️ Architecture & Project Structure

The project follows a **Modular Monolith** architecture:

```
zuper-react/
├── docs/                                # Architecture & scoping specifications
│   ├── ARCHITECTURE.md                  # Tier & structural design decisions
│   ├── PROJECT_OVERVIEW.md              # PRD and functional requirements
│   └── QUICK_REFERENCE.md               # Cheatsheet & convention guides
├── public/                              # Static media assets & libraries
│   ├── assets/                          # Images, logos, fonts, CSS bundles
│   └── wp-content/                      # Original media uploads & vendor JS
├── src/
│   ├── components/                      # Global UI components
│   │   ├── Header/                      # Responsive header, mega-menu, mobile drawer
│   │   ├── Footer/                      # Global footer, links, and copyright
│   │   ├── VideoModal/                  # High-definition video popup modal
│   │   ├── WhatsAppFloat/               # Floating instant-chat widget
│   │   └── BackToTop.jsx                # Scroll-to-top button
│   ├── hooks/
│   │   └── useElementorEnhancer.js      # Universal interactive runtime hook
│   ├── modules/                         # Domain-scoped feature modules
│   │   ├── corporate/                   # Company story, R&D labs, milestone timeline
│   │   ├── lead-capture/                # Inquiry forms & quotation modals
│   │   ├── products/                    # Catalogs, spec tables & series details
│   │   ├── projects/                    # Case studies portfolio & category filters
│   │   └── services/                    # Turnkey solutions & engineering process
│   ├── pages/                           # Full-page React views & routes
│   │   ├── HomePage.jsx                 # Flagship landing page
│   │   ├── AboutPage.jsx                # Company profile & timeline
│   │   ├── RDPage.jsx                   # R&D facilities & technical innovation
│   │   ├── ContactPage.jsx              # Direct inquiries & office addresses
│   │   ├── ProductsPage.jsx             # All products overview
│   │   ├── ServicesPage.jsx             # All services overview
│   │   ├── ProjectsPage.jsx             # Portfolio gallery with category filters
│   │   └── ...                          # Product series & vertical solution pages
│   ├── App.jsx                          # Route provider & layout orchestration
│   ├── main.jsx                         # Application entry point
│   └── index.css                        # Design tokens & core styling
├── package.json                         # Project dependencies & scripts
├── vite.config.js                       # Vite build configuration
└── README.md                            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhi963007/zuper-react-converted.git
   cd zuper-react-converted
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server at `http://localhost:3000` |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory |
| `npm run preview` | Locally previews the production build from `dist/` |

---

## 🗺️ Page Routes & Verticals

### Core Pages
- `/` — Homepage (Hero, Prime Slider Tango, Features, Hotspot, FAQs, Showreel)
- `/about-us` — Corporate Profile, Leadership & Interactive Timeline
- `/r-d` — Research & Development Facilities (Hyderabad & Shenzhen)
- `/contact` — Inquiries, Office Locations & Contact Form

### Product Lines
- `/products` — Full Product Catalog
- `/products/outdoor-led-displays` — Outdoor Displays (Gold & Platinum Series)
- `/products/indoor-led-displays` — High-Definition Indoor Displays
- `/products/cob-led-displays` — Chip-on-Board (COB) Series
- `/products/gob-led-displays` — Glue-on-Board (GOB) Impact-Resistant Screens
- `/products/rental-led-displays` — Rental & Event Staging Screens (500 & 576 Series)
- `/products/transparent-led-displays` — Architectural Transparent Displays
- `/products/sports-led-displays` — Stadium Perimeter & Jumbotron Displays
- `/products/datawall-led-displays` — Mission-Critical Control Room Displays

### Solutions & Services
- `/services` — Turnkey Engineering Solutions Overview
- `/services/work-process` — 4-Step Engineering & Deployment Workflow
- `/services/advertising-solutions` — DOOH & Digital Billboard Solutions
- `/services/brodcasting-solutions` — Television Studio & Broadcast Sets
- `/services/education-solutions` — Universities & Auditorium Screens
- `/services/government-solutions` — Public Infrastructure & Command Centers
- `/services/religious-installations` — Places of Worship Video Displays
- `/services/rental-staging-solutions` — Concert & Event Touring Solutions
- `/services/sports-installations` — Arenas, Scoreboards & Perimeter Banners

### Sector Case Studies
- `/projects` — Real-World Projects Gallery with Sector Filtering
- `/projects/advertising-projects` — DOOH Case Studies
- `/projects/education-projects` — University Installations
- `/projects/government-projects` — Command Center Installations
- `/projects/religious-projects` — Worship Center Installations
- `/projects/rental-events-projects` — Live Event & Stage Productions
- `/projects/sports-projects` — Stadium & Arena Installations

---

## 🧪 Quality & Verification

Every component and page has been verified:
- **Site-wide Accordions**: Automated headless verification across all 18 pages with 100% test pass rate.
- **Masonry Filtering**: Tested dynamic Isotope and DOM fallback filtering on `/projects`.
- **Swiper & Sliders**: Verified interactive navigation controls, touch swipe, and auto-play behaviors.
- **Zero Build Errors**: Clean compilation with `npm run build`.

---

## 🤝 Contributing & Maintenance

When adding or modifying components:
1. Follow domain modularity under `src/modules/<module-name>/`.
2. Keep design tokens aligned with `#090D16` (background) and `#DBFB04` (neon accent).
3. Update relevant `AGENT.md` files when crossing module boundaries.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
