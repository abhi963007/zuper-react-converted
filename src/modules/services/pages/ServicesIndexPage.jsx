import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import './ServicesPages.css';

export default function ServicesIndexPage({ onOpenQuote }) {
  return (
    <div className="services-page">
      <div className="page-header container">
        <span className="heading-tag">
          <Sparkles size={13} /> Comprehensive LED Solutions
        </span>
        <h1 className="page-title">Powering Every Pixel of Your Vision</h1>
        <p className="page-subtitle">
          Turnkey engineering, manufacturing, optical calibration, and lifecycle support across 8 specialized industry domains.
        </p>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div className="grid-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Work Process Highlight Section */}
        <div className="services-work-banner card-dark">
          <div className="work-banner-text">
            <span className="heading-tag">
              <span></span> Turnkey Lifecycle
            </span>
            <h3>How Zuper LED Executes OEM Projects</h3>
            <p>
              From initial structural and optical surveys to cleanroom module fabrication and on-site cabinet alignment with 0.01mm tolerance.
            </p>
          </div>
          <Link to="/services/work-process" className="btn btn-primary">
            <span>Explore 4-Step Work Process</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
