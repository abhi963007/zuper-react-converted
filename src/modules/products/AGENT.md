# AGENT.md — products

> Local context for this module. Read the root `/AGENT.md` too if you're touching anything that crosses module boundaries.

## Responsibility

Owns the display of all LED product families (DOOH, Indoor, Outdoor, Rental, COB/GOB, Sports, Transparent, Datawall), technical specifications, pixel pitch comparison tables, series breakdowns, and downloadable datasheet triggers.

## Owns

- Data: `src/modules/products/data/productsData.js`
- Frontend: `src/modules/products/components/` (ProductCard, SpecTable, SeriesShowcase, CategoryFilter)
- Pages: `src/modules/products/pages/` (ProductsIndexPage, ProductDetailPage, SeriesDetailPage)

## Structuring pattern

- Component logic remains modular and focused purely on product presentation and filtering.
- Reusable UI elements consume `productsData.js` for single-source-of-truth updates.
- Datasheet download and quote buttons trigger the `lead-capture` quotation modal.

## Depends on

- `lead-capture` (for inquiry and quote requests triggered from product cards)
- Top-level shared layout components

## Local Context Log

| Date | Note |
|---|---|
| 2026-09-16 | Initial module creation with complete product catalog models. |

## Escalate to Root When...

- Adding a brand-new top-level product category that alters the site Header/MegaMenu navigation.
- Changing the schema of product identifiers used across case studies in the `projects` module.
