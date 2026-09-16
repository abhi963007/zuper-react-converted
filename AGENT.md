# AGENT.md — Zuper LED Web Platform (root)

> This file is a living document. Update it as the project evolves — don't let it drift from reality.

## What this project is

Zuper LED is a high-performance web application representing India's premier OEM LED display manufacturer. It provides interactive product catalogs, technical specs, sector installation galleries, and B2B lead capture.

## Tier

Modular Monolith — see `/docs/ARCHITECTURE.md` for full reasoning.

## Structuring pattern (read this before touching any layer)

Frontend uses domain-scoped modules with shared layout shells — there is no `/ui` folder.
- **Top-level `/src/components`**: App-wide layout (Header, MegaMenu, MobileDrawer, Footer, VideoModal).
- **Domain Modules (`/src/modules/<name>`)**: Scoped components, data definitions, and local `AGENT.md`.
- **Routes (`/src/routes`)**: Thin page containers coordinating module components with React Router.

## Folder map

```
zuper-react/
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   └── QUICK_REFERENCE.md
├── public/
├── src/
│   ├── components/              (Shared Layout: Header, Footer, MegaMenu, MobileDrawer, VideoModal)
│   ├── modules/                 (Domain Modules: products, projects, services, corporate, lead-capture)
│   ├── routes/                  (Page Route definitions)
│   ├── index.css                (Design Tokens: #090D16, #DBFB04, #B9FB6A)
│   ├── App.jsx                  (Router setup)
│   └── main.jsx                 (Entry point)
├── package.json
└── AGENT.md
```

## Modules

| Module | Responsibility | AGENT.md |
|---|---|---|
| `products` | LED Display catalogs (DOOH, Indoor, Outdoor, Rental, COB/GOB, Sports, Datawall), specs, series | `/src/modules/products/AGENT.md` |
| `projects` | Case study portfolio across 6 sectors (Advertising, Gov, Sports, Education, Religious, Rental) | `/src/modules/projects/AGENT.md` |
| `services` | Turnkey LED solutions and 4-step engineering workflow | `/src/modules/services/AGENT.md` |
| `corporate` | Company background, R&D facilities (Hyderabad & Shenzhen), leadership, certifications | `/src/modules/corporate/AGENT.md` |
| `lead-capture` | Inquiry forms, quotation modals, technical datasheet downloads, WhatsApp CTA | `/src/modules/lead-capture/AGENT.md` |

When working inside a module, read that module's own `AGENT.md` first — it has the local context. Come back here only when a change crosses module boundaries.

## Cross-Module Impact Log

Log any change here that touches more than one module.

| Date | Change | Modules affected | Notes |
|---|---|---|---|
| 2026-09-16 | Initial scaffolding of React modular monolith | All modules | Project initial setup from static export |

## Conventions

- Filename for agent context: `AGENT.md`.
- Theme & Design Tokens: Primary background `#090D16`, Card surfaces `#0E1421` / `#0D1422`, Neon Primary `#DBFB04`, Lime Secondary `#B9FB6A`, White `#FFFFFF`, Muted text `#FFFFFFA6`.
- Routing: All routes match clean URLs without `.html` extension (e.g. `/products/dooh-led-displays/gold-series`).
- Responsive: Mobile-first responsive styling with desktop mega-menus and mobile slide drawers.

## Where things live

- PRD: `/docs/PROJECT_OVERVIEW.md`
- Full architecture + reasoning: `/docs/ARCHITECTURE.md`
- Quick reference: `/docs/QUICK_REFERENCE.md`
