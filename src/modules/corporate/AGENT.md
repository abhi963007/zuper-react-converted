# AGENT.md — corporate

> Local context for this module. Read the root `/AGENT.md` too if you're touching anything that crosses module boundaries.

## Responsibility

Owns corporate identity, company history, R&D engineering, manufacturing facility highlights (Hyderabad, Telangana & Shenzhen FYT), leadership, certifications, and policies.

## Owns

- Data: `src/modules/corporate/data/companyData.js`
- Frontend: `src/modules/corporate/components/` (MilestoneTimeline, FacilityCards, StatsCounter, LeadershipGrid)
- Pages: `AboutPage.jsx`, `RDPage.jsx`, `PolicyPages.jsx`

## Structuring pattern

- Delivers corporate authority and authenticity as India's only OEM manufacturer.
- Features interactive timeline milestones and manufacturing metrics.

## Depends on

- Top-level shared layout components

## Local Context Log

| Date | Note |
|---|---|
| 2026-09-16 | Initial module creation with corporate history, facilities, and R&D specs. |

## Escalate to Root When...

- Updating legal policies or global company contact addresses.
