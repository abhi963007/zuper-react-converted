# AGENT.md — services

> Local context for this module. Read the root `/AGENT.md` too if you're touching anything that crosses module boundaries.

## Responsibility

Owns the 8 enterprise industry solution verticals (Advertising, Broadcasting, Education, Government, Religious, Rental/Staging, Sports, Work Process) and the 4-step turnkey engineering lifecycle (Consultation, Custom Engineering, Factory Calibration & Installation, 24/7 AMC Support).

## Owns

- Data: `src/modules/services/data/servicesData.js`
- Frontend: `src/modules/services/components/` (ServiceCard, WorkflowSteps, SolutionsGrid)
- Pages: `src/modules/services/pages/` (ServicesIndexPage, ServiceDetailPage, WorkProcessPage)

## Structuring pattern

- Presents consultative value propositions tailored to enterprise decision-makers.
- Highlights OEM end-to-end integration and custom fabrication capabilities.

## Depends on

- `lead-capture` (for "Consult an Engineer" and RFQ CTAs)
- Top-level shared layout components

## Local Context Log

| Date | Note |
|---|---|
| 2026-09-16 | Initial module creation covering all 8 enterprise service solutions. |

## Escalate to Root When...

- Updating services navigation hierarchy or primary CTAs.
