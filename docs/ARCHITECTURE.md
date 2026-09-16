# Architecture: Zuper LED Web Platform

> This is a living document. Update it whenever the tier, module boundaries, or layer responsibilities change.

## Tier

**Chosen tier:** Modular Monolith

**Reasoning:** The application serves distinct domains with separable data requirements:
- Product catalogs (spec tables, pitches, cabinet types, datasheets)
- Projects showcase (case studies by sector with media assets)
- Services and engineering workflows (consulting, custom fab, installation, AMC)
- Corporate identity and manufacturing infrastructure (Hyderabad & Shenzhen facilities)
- Lead generation and sales inquiry flows

Structuring the codebase as a Modular Monolith allows each domain to own its structured data, components, and local agent context without cluttering the global scope, while sharing a unified visual design system.

## Structuring Pattern

Frontend follows framework-native React modular conventions — there is no generic `/ui` folder.
- **Top-level `/components`:** Global shared layout shells (Header, MegaMenu, MobileDrawer, Footer, VideoModal, Seo).
- **Domain Modules (`/modules/<domain>`):** Domain-scoped components, structured data stores, and local `AGENT.md`.
- **Pages / Routes (`/routes`):** Thin page shells mapping URL routes to assembled module components.

## Folder Layout

```
zuper-react/
├── public/
│   └── assets/                  (Images, PDF brochures, video showreel)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                (Design tokens & utility classes)
│   ├── components/              (Shared layout components)
│   │   ├── Header/
│   │   ├── MegaMenu/
│   │   ├── MobileDrawer/
│   │   ├── Footer/
│   │   ├── VideoModal/
│   │   └── Seo/
│   ├── routes/                  (Route entry components)
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── RDPage.jsx
│   │   ├── DatawallPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── PolicyPages.jsx
│   └── modules/
│       ├── products/
│       │   ├── components/
│       │   ├── data/
│       │   └── AGENT.md
│       ├── projects/
│       │   ├── components/
│       │   ├── data/
│       │   └── AGENT.md
│       ├── services/
│       │   ├── components/
│       │   ├── data/
│       │   └── AGENT.md
│       ├── corporate/
│       │   ├── components/
│       │   ├── data/
│       │   └── AGENT.md
│       └── lead-capture/
│           ├── components/
│           ├── business/
│           └── AGENT.md
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   └── QUICK_REFERENCE.md
└── AGENT.md
```

## Module Boundaries

| Module | Responsibility | Owns which data | Frontend location |
|---|---|---|---|
| **products** | Displays LED screen series, pitch specs, cabinet dimensions, and downloadable datasheets | `productsData.js` | `/modules/products/components/` |
| **projects** | Displays installation case studies filtered by sector (DOOH, Government, Sports, etc.) | `projectsData.js` | `/modules/projects/components/` |
| **services** | Details engineering capabilities and 4-step execution lifecycle | `servicesData.js` | `/modules/services/components/` |
| **corporate** | Highlights R&D, manufacturing facilities, leadership, milestones, and certifications | `companyData.js` | `/modules/corporate/components/` |
| **lead-capture** | Collects quote requests, inquiry forms, and WhatsApp connections | Form state, validation | `/modules/lead-capture/components/` |

## Cross-Module Rules

- Shared layout primitives (Header, Footer, Modals) live in top-level `/components/` and are not duplicated in modules.
- A module may import another module's public data or components when necessary (e.g. Lead Capture modal triggered from Product cards), but internal helper functions remain private to the module.
- Any change affecting shared types, navigation structure, or cross-cutting tokens must be logged in root `AGENT.md`.

## Revision Log

| Date | Change | Reason |
|---|---|---|
| 2026-09-16 | Initial modular monolith architecture | Project kickoff & static-to-React migration |
