import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, PhoneCall 
} from 'lucide-react';
import { companyData } from '../modules/corporate/data/companyData';
import './CorporatePages.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: 'DOOH Displays',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({ state: 'error', message: 'Please provide your full name, email, and phone number.' });
      return;
    }

    setFormStatus({ state: 'loading', message: '' });

    setTimeout(() => {
      setFormStatus({ 
        state: 'success', 
        message: 'Your inquiry has been received by our technical engineering desk. A Zuper LED representative will contact you within 2 business hours.' 
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        category: 'DOOH Displays',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="corporate-page contact-page">
      <div className="page-header container">
        <span className="heading-tag">
          <MessageSquare size={14} /> Direct OEM Contact Desk
        </span>
        <h1 className="page-title">Let’s Build the Next Big Display</h1>
        <p className="page-subtitle">
          Partner with India’s only OEM LED manufacturer for competitive direct pricing, structural blueprints, and fast project turnaround.
        </p>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div className="grid-2 contact-main-grid">
          {/* Contact Details & Office Addresses */}
          <div className="contact-info-col">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Headquarters & Manufacturing Facilities
            </h3>

            {companyData.offices.map((office, idx) => (
              <div key={idx} className="card-dark office-card">
                <span className="office-tag">{office.country}</span>
                <h4 className="office-city">{office.city}</h4>
                {office.name && <p className="office-entity">{office.name}</p>}
                
                <p className="office-street">
                  <MapPin size={16} className="contact-icon" />
                  {office.location}
                </p>

                <div className="office-contact-pills">
                  <a href={`tel:${office.phone}`} className="contact-pill">
                    <Phone size={14} /> {office.phone}
                  </a>
                  {office.whatsapp && (
                    <a 
                      href={`https://wa.me/${office.whatsapp.replace('+', '')}?text=Hi%20Zuper%20LED%20team%2C%20I%20have%20an%20inquiry.`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-pill whatsapp-pill"
                    >
                      <PhoneCall size={14} /> WhatsApp
                    </a>
                  )}
                  <a href={`mailto:${office.email}`} className="contact-pill">
                    <Mail size={14} /> {office.email}
                  </a>
                </div>

                {office.hours && (
                  <p className="office-hours">
                    <Clock size={13} /> {office.hours}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Contact Form */}
          <div className="card-dark contact-form-col">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send Us an Inquiry</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Fill out the details below and an OEM optical specialist will get back to you with product availability, spec sheets, and price estimates.
            </p>

            {formStatus.state === 'success' ? (
              <div className="contact-success-alert">
                <CheckCircle size={32} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                <h4>Inquiry Successfully Dispatched</h4>
                <p>{formStatus.message}</p>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setFormStatus({ state: 'idle', message: '' })}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="site-contact-form">
                {formStatus.state === 'error' && (
                  <div className="form-error-alert">{formStatus.message}</div>
                )}

                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    name="name" 
                    placeholder="e.g. Anand Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-grid" style={{ marginTop: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      name="email" 
                      placeholder="anand@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone / Mobile *</label>
                    <input 
                      id="contact-phone"
                      type="tel" 
                      name="phone" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-grid" style={{ marginTop: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="contact-company">Company / Organization</label>
                    <input 
                      id="contact-company"
                      type="text" 
                      name="company" 
                      placeholder="e.g. Media Billboard Agency"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-category">Interested Display Category</label>
                    <select 
                      id="contact-category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="DOOH Displays">DOOH Billboard Screens</option>
                      <option value="Indoor Displays">Indoor Fine-Pitch Displays</option>
                      <option value="Outdoor Displays">Outdoor Commercial Screens</option>
                      <option value="Rental Displays">Rental Staging Displays</option>
                      <option value="COB / GOB Displays">Special COB & GOB Displays</option>
                      <option value="Transparent Displays">Transparent Glass Displays</option>
                      <option value="Sports Displays">Stadium Sports Perimeters</option>
                      <option value="Datawall">Command Center Datawall</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <label htmlFor="contact-message">Project Requirements / Dimension Specifications</label>
                  <textarea 
                    id="contact-message"
                    name="message" 
                    rows="4" 
                    placeholder="Describe your screen sizing, viewing distance, location, or expected installation date..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '1.5rem' }}
                  disabled={formStatus.state === 'loading'}
                >
                  {formStatus.state === 'loading' ? (
                    <span>Sending Inquiry to Sales Desk...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
