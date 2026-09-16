# Architecture Essentials: Zuper LED Web Platform

> One-page quick reference. Keep this short — full detail lives in ARCHITECTURE.md.

**Tier:** Modular Monolith

**Stack:** React 18+ + Vite + React Router v6 + Vanilla CSS Tokens

**Golden rule:** Frontend-only modular structure — no generic `/ui` folder.
- Thin route pages in `/src/routes/` compose domain components from `/src/modules/`.
- Shared layout elements (Header, Footer, Navbar) live in `/src/components/`.

**Layout at a glance:**
```
/src/
  /components/     → Shared layout (Header, MegaMenu, Footer, VideoModal)
  /routes/         → Route page definitions (HomePage, Products, Contact, etc.)
  /modules/        → Domain modules (products, projects, services, corporate, lead-capture)
  /assets/         → Static media (images, icons)
```

**Modules:** `products`, `projects`, `services`, `corporate`, `lead-capture`

**Where does new code go?**
- New Product or Spec Field → `/src/modules/products/data/productsData.js`
- New Case Study → `/src/modules/projects/data/projectsData.js`
- New Service Offering → `/src/modules/services/data/servicesData.js`
- New Layout Header/Footer item → `/src/components/Header/` or `/src/components/Footer/`
- Lead form logic or integration → `/src/modules/lead-capture/`
