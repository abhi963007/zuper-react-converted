import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import './CorporatePages.css';

export default function PolicyPages() {
  const location = useLocation();

  const getPolicyDetails = () => {
    switch (location.pathname) {
      case '/terms-and-conditions':
        return {
          title: "Terms & Conditions",
          subtitle: "Commercial & Engineering Warranty Terms",
          content: [
            "1. Contractual OEM Scope: Zuper LED Media Pvt. Ltd. provides commercial LED screen manufacturing, structural mounting consultations, and turnkey commissioning under mutual SLA agreements.",
            "2. Warranty Coverage: All displays are covered by our standard 2-year to 5-year OEM factory warranty covering LED module replacement, receiving cards, and power supplies from the date of handover.",
            "3. Operational Guidelines: To preserve warranty integrity, display installations must maintain electrical surge protection and adhere to specified operating temperature guidelines.",
            "4. Intellectual Property: All engineering blueprints, cabinet designs, and firmware trademarks belong exclusively to Zuper LED Media Pvt. Ltd."
          ]
        };
      case '/cookie-policy':
        return {
          title: "Cookie Policy",
          subtitle: "Information We Collect & Experience Optimization",
          content: [
            "1. Purpose: We use essential session cookies to remember product configuration inquiries, quotation modal forms, and UI theme preferences.",
            "2. Analytics: Anonymous telemetry cookies help us evaluate page load performance and optimize high-resolution visual rendering across mobile and desktop devices.",
            "3. Control: Visitors may disable non-essential cookies via browser settings at any time without impacting site readability."
          ]
        };
      case '/disclaimer':
        return {
          title: "Disclaimer",
          subtitle: "Technical Specifications & Product Blueprints",
          content: [
            "1. Product Evolution: Zuper LED continuously innovates its semiconductor packaging and IC driver architectures. Specifications such as brightness ratings, power consumption, and cabinet weights may be updated without prior notice.",
            "2. Environmental Sizing: Recommended viewing distances and optical lux requirements depend on actual ambient site conditions and should be verified via a custom engineering survey.",
            "3. Third-Party Trademarks: Client logos and sector brand trademarks displayed on installation case studies remain the property of their respective owners."
          ]
        };
      case '/privacy-policy':
      default:
        return {
          title: "Privacy Policy",
          subtitle: "Our Commitment to Protecting Enterprise Client Data",
          content: [
            "1. Information Collection: We collect corporate contact details (name, email, phone number, organization) submitted solely via our contact and quotation request forms.",
            "2. Data Utilization: Your contact information is used strictly by our internal engineering and technical sales teams to provide formal quotations, datasheets, and delivery schedules.",
            "3. Non-Disclosure: We never sell, lease, or distribute client contact records, project dimensions, or tender blueprints to external third-party advertisers or brokers.",
            "4. Contact Rights: Clients may request deletion or verification of their contact records at any time by emailing sales@zuperled.com."
          ]
        };
    }
  };

  const policy = getPolicyDetails();

  return (
    <div className="corporate-page policy-page">
      <div className="page-header container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <span className="heading-tag">
          <ShieldCheck size={14} /> Legal & Compliance
        </span>
        <h1 className="page-title">{policy.title}</h1>
        <p className="page-subtitle">{policy.subtitle}</p>
      </div>

      <div className="container-narrow" style={{ paddingBottom: '6rem' }}>
        <div className="card-dark" style={{ padding: '3rem' }}>
          {policy.content.map((para, idx) => (
            <p key={idx} style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '0.98rem' }}>
              {para}
            </p>
          ))}
          <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              Last revised: September 2026. For inquiries regarding our policies, contact sales@zuperled.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
