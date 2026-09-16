# PRD: Zuper LED Web Platform

> This is a living document. Update it as scope changes across iterations — don't treat it as written-once-and-frozen.

## Summary

Zuper LED (`zuper-react`) is a high-performance web application representing India's leading OEM LED display manufacturer. It serves B2B enterprises, architects, DOOH advertisers, sports stadium operators, and rental staging partners by providing deep interactive technical specifications, product catalogs, industry case studies, and responsive lead-generation workflows.

## Goals

- Present a high-impact, premium dark/neon visual experience highlighting Zuper LED's 13+ years of OEM manufacturing excellence and Indian/Shenzhen production infrastructure.
- Deliver an interactive, searchable, and responsive product catalog covering DOOH, Indoor, Outdoor, Rental, COB/GOB, Transparent, Sports, and Datawall systems.
- Showcase case studies across 6 core industry verticals (Advertising, Education, Government, Religious, Rental/Events, Sports).
- Provide streamlined lead capture through quotation request modals, technical datasheet downloads, contact forms, and instant WhatsApp communication.
- Achieve sub-second page transitions, fast first contentful paint, and clean component modularity.

## Non-Goals

- E-commerce cart and online payment processing (products are high-value custom B2B enterprise installations handled via direct quotation and engineering consultations).
- Full user authentication or client customer portal (handled through separate enterprise ERP/CRM).

## Feature Areas

| Feature Area | Description | Owns which data | Depends on |
|---|---|---|---|
| **Products** | Interactive catalog with series breakdowns, pitch specs, and technical datasheets | Product models, pixel pitches, cabinet dimensions, brightness ratings | UI components, Lead Capture |
| **Projects** | Real-world installation portfolio across 6 sectors with high-res photo showcases | Case studies, client names, locations, screen specs | Products |
| **Services** | Turnkey LED solutions and 4-step engineering and deployment workflow | Solution descriptions, workflow milestones | Products |
| **Corporate & R&D** | Company history, Hyderabad & Shenzhen manufacturing specs, certifications | Milestones, facility metrics, team profiles | UI components |
| **Lead Capture** | Contact inquiries, brochure downloads, quotation requests, WhatsApp link | Inquiries, contact details, quote payloads | External webhook/API |

## Users & Scale

- **Expected users**: Enterprise buyers, event production managers, billboard advertisers, government procurement officers, and system integrators.
- **Expected traffic**: Public marketing web traffic across India and international OEM partners (~20,000+ monthly visits).
- **Team size building this**: Pair-programming with AI agent.

## Stack

- **Frontend**: React 18+ with React Router v6
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with comprehensive Design Tokens (`#090D16`, `#DBFB04`, `#B9FB6A`)
- **Icons**: Lucide React + custom SVG icons
- **Data**: Modular client-side JS data stores (`productsData.js`, `projectsData.js`, `servicesData.js`, `companyData.js`)

## Constraints

- Visual fidelity must match or exceed the original `zuper-static` site while eliminating legacy bloat and WordPress technical debt.
- Must be fully responsive across mobile (320px+), tablet (768px+), desktop (1024px+), and ultra-wide displays (1440px+).
- Background showreel video and images must load fast without bandwidth freezes (no 148MB uncompressed files).

## Open Questions

- Integration preference for contact form notifications (Web3Forms, Formspree, or custom webhook endpoint).
