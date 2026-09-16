import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { 
  ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, PhoneCall, Layers 
} from 'lucide-react';
import './ServicesPages.css';

export default function ServiceDetailPage({ onOpenQuote }) {
  const { serviceSlug } = useParams();

  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="container" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
        <h2>Service Offering Not Found</h2>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
          The requested service solution could not be located.
        </p>
        <Link to="/services" className="btn btn-primary">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-hero">
        <div className="container">
          <Link to="/services" className="back-link">
            <ArrowLeft size={16} /> Back to All Solutions
          </Link>

          <span className="heading-tag">
            <span></span> Enterprise LED Solution
          </span>
          <h1 className="service-detail-h1">{service.h1 || service.title}</h1>
          <p className="service-detail-sub">{service.subtitle}</p>
          <p className="service-detail-desc">{service.description}</p>

          <div className="service-hero-actions">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenQuote(service.title)}
            >
              <span>Consult an OEM Engineer</span>
              <span className="btn-icon"><ArrowUpRight size={16} /></span>
            </button>
            <Link to="/contact-us" className="btn btn-outline">
              Speak with Solution Specialist
            </Link>
          </div>
        </div>
      </div>

      <div className="container service-detail-body">
        {/* Key Engineering Benefits */}
        {service.keyBenefits && (
          <div className="benefits-section card-dark">
            <h3>Key Technical Advantages & Engineering Benchmarks</h3>
            <div className="grid-2" style={{ marginTop: '1.5rem' }}>
              {service.keyBenefits.map((b, idx) => (
                <div key={idx} className="benefit-box">
                  <CheckCircle2 size={20} className="benefit-icon" />
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industry Applications */}
        {service.applications && (
          <div className="applications-section">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>
              Primary Installation Applications
            </h3>
            <div className="app-pills-wrap">
              {service.applications.map((app, idx) => (
                <div key={idx} className="app-pill card-dark">
                  <Layers size={18} className="app-icon" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Turnkey Work Process Steps if on work-process page */}
        {service.steps && (
          <div className="work-steps-list">
            <h3 style={{ marginBottom: '2rem', fontSize: '1.6rem', textAlign: 'center' }}>
              The 4-Step Engineering & Delivery Lifecycle
            </h3>
            <div className="grid-2">
              {service.steps.map((st, idx) => (
                <div key={idx} className="step-card card-dark">
                  <div className="step-number">{st.step}</div>
                  <h4 className="step-title">{st.title}</h4>
                  <p className="step-desc">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="service-bottom-cta card-dark text-center">
          <h3>Ready to deploy your {service.title}?</h3>
          <p>
            Connect directly with our Hyderabad engineering headquarters for customized screen sizing, power load calculations, and turnkey quotes.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenQuote(service.title)}
            >
              <span>Get Custom Proposal</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
