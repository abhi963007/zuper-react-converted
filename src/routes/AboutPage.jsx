import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Award, Factory, Users, Target, Compass, ArrowUpRight 
} from 'lucide-react';
import { companyData } from '../modules/corporate/data/companyData';
import MilestoneTimeline from '../modules/corporate/components/MilestoneTimeline';
import './CorporatePages.css';

export default function AboutPage({ onOpenQuote }) {
  return (
    <div className="corporate-page">
      <div className="page-header container">
        <span className="heading-tag">
          <span></span> Corporate Legacy
        </span>
        <h1 className="page-title">Reimagining the World of LED Displays</h1>
        <p className="page-subtitle">
          Over 13 years of precision engineering, direct OEM manufacturing, and groundbreaking visual installations across India and international markets.
        </p>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        {/* Story Section */}
        <div className="grid-2 align-center story-section">
          <div>
            <span className="heading-tag">
              <span></span> The Story Behind Zuper LED
            </span>
            <h2>From Engineering Spark to National OEM Leadership</h2>
            <p className="story-p">
              Founded in 2013, Zuper LED began with a simple yet ambitious premise: why should Indian enterprises, billboard owners, and sports venues depend on low-grade unbranded imports with no local warranty or component-level support?
            </p>
            <p className="story-p">
              We invested in building real manufacturing capability — from precision automated SMT pick-and-place lines and die-cast cabinet CNC machines to our joint-venture optical research laboratory in Bao'an, Shenzhen.
            </p>
            <p className="story-p">
              Today, Zuper LED stands as India's only true OEM display manufacturer, trusted for over 150 enterprise installations across municipal smart cities, highway DOOH networks, international sports stadiums, and mission-critical command centers.
            </p>
          </div>

          <div className="story-media-card card-dark">
            <img 
              src="/assets/images/2026/08/2-1.webp" 
              alt="Zuper LED Manufacturing Facility" 
            />
            <div className="story-stat-float">
              <h3>13+</h3>
              <p>Years of OEM Excellence</p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid-3" style={{ margin: '4rem 0' }}>
          <div className="card-dark value-card">
            <div className="value-icon"><Target size={24} /></div>
            <h3>Company Mission</h3>
            <p>
              To democratize world-class LED display technology in India through direct OEM manufacturing, rigorous quality testing, and transparent pricing.
            </p>
          </div>

          <div className="card-dark value-card">
            <div className="value-icon"><Compass size={24} /></div>
            <h3>Company Vision</h3>
            <p>
              To be the definitive global benchmark for high-reliability, energy-efficient digital-out-of-home and fine-pitch indoor video solutions.
            </p>
          </div>

          <div className="card-dark value-card">
            <div className="value-icon"><Award size={24} /></div>
            <h3>Quality Promise</h3>
            <p>
              100% single-bin diode uniformity, 72-hour burn-in stress tests, and guaranteed 5-year identical-batch spare parts availability.
            </p>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="timeline-section">
          <div className="section-header text-center">
            <span className="heading-tag">
              <span></span> 13-Year Journey
            </span>
            <h2 className="section-title">Milestones That Defined Our Growth</h2>
            <p className="section-desc">
              A decade of pioneering LED milestones in India and international display markets.
            </p>
          </div>

          <MilestoneTimeline milestones={companyData.milestones} />
        </div>

        {/* Certifications Row */}
        <div className="cert-section card-dark">
          <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
            <span className="heading-tag">
              <ShieldCheck size={14} /> Certified Standards
            </span>
            <h3>Government & Global Compliance</h3>
          </div>

          <div className="grid-4">
            {companyData.certifications.map((cert, idx) => (
              <div key={idx} className="cert-box">
                <ShieldCheck size={28} className="cert-icon" />
                <h4>{cert.name}</h4>
                <p>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className="about-cta text-center">
          <h3>Partner with India's Only OEM LED Display Manufacturer</h3>
          <p>Schedule a visit to our Hyderabad plant or request a technical presentation from our engineers.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenQuote()}
            >
              <span>Request Factory Consultation</span>
              <ArrowUpRight size={16} />
            </button>
            <Link to="/contact-us" className="btn btn-outline">
              View Office Locations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
