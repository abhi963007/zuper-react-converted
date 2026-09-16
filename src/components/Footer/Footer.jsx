import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../../modules/corporate/data/companyData';
import './Footer.css';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="site-footer">
      {/* Pre-Footer CTA Banner */}
      <div className="footer-cta-banner container">
        <div className="cta-inner">
          <div>
            <span className="heading-tag">
              <span></span> Ready to Light Up Your Vision?
            </span>
            <h2 className="cta-title">Direct OEM Manufacturing & Engineering Excellence</h2>
            <p className="cta-desc">
              Consult with our display engineers for custom architectural LED screens, high-brightness DOOH billboards, and turnkey video walls.
            </p>
          </div>
          <div className="cta-actions">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={onOpenQuote}
            >
              <span>Request Custom Quotation</span>
              <span className="btn-icon">
                <ArrowUpRight size={16} />
              </span>
            </button>
            <a 
              href={`https://wa.me/${companyData.offices[0].whatsapp.replace('+', '')}?text=Hello%20Zuper%20LED%2C%20I%20would%20like%20to%20inquire%20about%20your%20LED%20displays.`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      <div className="footer-main container">
        <div className="footer-grid">
          {/* Col 1: Brand Info & Manufacturing */}
          <div className="footer-col brand-col">
            <Link to="/" className="brand-logo" style={{ marginBottom: '1rem' }}>
              <span className="brand-badge">OEM</span>
              <span className="brand-text">ZUPER<span className="brand-accent">LED</span></span>
            </Link>
            <p className="brand-bio">
              India’s only true OEM LED display manufacturer with state-of-the-art production in Hyderabad and dedicated optical R&D in Bao'an Shenzhen. 13+ years of innovation.
            </p>
            <div className="cert-badges">
              {companyData.certifications.map((c, i) => (
                <span key={i} className="cert-pill">
                  <ShieldCheck size={14} /> {c.name}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Products Catalog */}
          <div className="footer-col">
            <h4 className="footer-title">LED Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/dooh-led-displays">DOOH LED Displays</Link></li>
              <li><Link to="/products/dooh-led-displays/gold-series">Gold Series DOOH</Link></li>
              <li><Link to="/products/dooh-led-displays/platinum-series">Platinum Series DOOH</Link></li>
              <li><Link to="/products/indoor-led-displays">Indoor HD Displays</Link></li>
              <li><Link to="/products/outdoor-led-displays">Outdoor LED Billboards</Link></li>
              <li><Link to="/products/rental-led-displays">Rental Stage Displays</Link></li>
              <li><Link to="/products/spl-indoor-led-displays">Special COB & GOB Displays</Link></li>
              <li><Link to="/products/transparent-led-display">Transparent Glass Screens</Link></li>
              <li><Link to="/products/zuper-sports-led-displays">Stadium Sports LED</Link></li>
              <li><Link to="/zuper-datawall">Zuper Datawall (Command Center)</Link></li>
            </ul>
          </div>

          {/* Col 3: Industry Solutions */}
          <div className="footer-col">
            <h4 className="footer-title">Solutions & Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/advertising-solutions">Advertising Solutions</Link></li>
              <li><Link to="/services/brodcasting-solutions">Broadcasting Newsrooms</Link></li>
              <li><Link to="/services/education-solutions">Education & Auditoriums</Link></li>
              <li><Link to="/services/government-solutions">Smart City & Government</Link></li>
              <li><Link to="/services/rental-staging-solutions">Concerts & Staging</Link></li>
              <li><Link to="/services/sports-installations">Stadium Installations</Link></li>
              <li><Link to="/services/religious-installations">Religious Sanctuaries</Link></li>
              <li><Link to="/services/work-process">Our 4-Step Turnkey Process</Link></li>
              <li><Link to="/projects">Case Studies Portfolio</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices */}
          <div className="footer-col office-col">
            <h4 className="footer-title">Offices & Plant</h4>
            
            <div className="office-item">
              <span className="office-tag">India Plant & HQ</span>
              <p className="office-addr">
                <MapPin size={15} className="addr-icon" />
                {companyData.offices[0].location}
              </p>
              <div className="office-contact">
                <a href={`tel:${companyData.offices[0].phone}`}><Phone size={14} /> {companyData.offices[0].phone}</a>
                <a href={`mailto:${companyData.offices[0].email}`}><Mail size={14} /> {companyData.offices[0].email}</a>
              </div>
            </div>

            <div className="office-item">
              <span className="office-tag">Shenzhen R&D Plant</span>
              <p className="office-addr">
                <MapPin size={15} className="addr-icon" />
                {companyData.offices[1].location}
              </p>
              <div className="office-contact">
                <a href={`tel:${companyData.offices[1].phone}`}><Phone size={14} /> {companyData.offices[1].phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Zuper LED Media Pvt. Ltd. All rights reserved. India's Only OEM LED Display Manufacturer.
          </p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
