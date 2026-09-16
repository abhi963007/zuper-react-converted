# AGENT.md — lead-capture

> Local context for this module. Read the root `/AGENT.md` too if you're touching anything that crosses module boundaries.

## Responsibility

Owns the lead generation components across the site, including Contact Us forms, Quotation Request popups, Brochure download triggers, WhatsApp click-to-chat, and form validation/submission handling.

## Owns

- Frontend: `src/modules/lead-capture/components/` (ContactForm, QuoteModal, WhatsAppWidget, BrochureDownloadModal)
- Business: `src/modules/lead-capture/business/` (formValidation.js, submitLeadHandler.js)
- Pages: `ContactPage.jsx`

## Structuring pattern

- All form fields validate client-side with clear visual error and success messaging.
- `submitLeadHandler.js` handles sending inquiries to a configured serverless webhook or mock endpoint with realistic success toast feedback.
- `QuoteModal` can be launched programmatically from any product or service card across the application.

## Depends on

- Can be triggered by `products` or `services` modules
- Top-level shared layout components

## Local Context Log

| Date | Note |
|---|---|
| 2026-09-16 | Initial module creation with full validation and modal triggers. |

## Escalate to Root When...

- Altering the global modal context provider or webhook endpoint configuration.
