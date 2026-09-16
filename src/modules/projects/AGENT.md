# AGENT.md — projects

> Local context for this module. Read the root `/AGENT.md` too if you're touching anything that crosses module boundaries.

## Responsibility

Owns the installation portfolio and case studies across 6 industry sectors (Advertising, Education, Government, Religious, Rental/Events, Sports), including project images, locations, screen specs, and client details.

## Owns

- Data: `src/modules/projects/data/projectsData.js`
- Frontend: `src/modules/projects/components/` (ProjectCard, SectorFilter, ProjectGallery)
- Pages: `src/modules/projects/pages/` (ProjectsIndexPage, SectorProjectsPage)

## Structuring pattern

- Sector filters allow instantaneous client-side filtering without page reloads.
- Case study cards link to high-resolution visual previews and corresponding product specs.

## Depends on

- `products` (product model references used in installations)
- Top-level shared layout components

## Local Context Log

| Date | Note |
|---|---|
| 2026-09-16 | Initial module creation with 6 sector categories and real-world case studies. |

## Escalate to Root When...

- Adding a new sector category that appears in the main navigation bar or footer.
