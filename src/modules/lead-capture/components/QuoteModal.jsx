import React, { useState } from 'react';
import { X, CheckCircle, Send, PhoneCall, Sparkles } from 'lucide-react';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, defaultProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: defaultProduct || 'DOOH LED Displays',
    pixelPitch: '',
    dimensions: '',
    message: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus({ state: 'error', message: 'Please fill in your name, email, and phone number.' });
      return;
    }

    setStatus({ state: 'loading', message: '' });

    // Simulate submission to serverless endpoint
    setTimeout(() => {
      setStatus({ 
        state: 'success', 
        message: 'Thank you! Your quotation request has been dispatched to Zuper LED technical sales team. An engineer will contact you within 2 hours.' 
      });
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content quote-modal" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {status.state === 'success' ? (
          <div className="quote-success-view">
            <div className="success-icon-wrap">
              <CheckCircle size={52} className="success-icon" />
            </div>
            <h3>Quotation Request Received</h3>
            <p>{status.message}</p>
            <div className="success-actions">
              <a 
                href={`https://wa.me/919100045619?text=Hi%20Zuper%20LED%20team%2C%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.product)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <PhoneCall size={16} /> Connect via WhatsApp Now
              </a>
              <button 
                type="button" 
                className="btn btn-outline" 
                onClick={onClose}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="modal-header">
              <span className="heading-tag">
                <Sparkles size={12} /> Direct Factory RFQ
              </span>
              <h3>Request Quotation & Engineering Datasheet</h3>
              <p>Get factory-direct pricing, custom dimension blueprints, and optical calculations.</p>
            </div>

            {status.state === 'error' && (
              <div className="form-error-alert">{status.message}</div>
            )}

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="quote-name">Full Name *</label>
                <input 
                  id="quote-name"
                  type="text" 
                  name="name" 
                  placeholder="e.g. Rajesh Kumar" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="quote-phone">Phone / WhatsApp *</label>
                <input 
                  id="quote-phone"
                  type="tel" 
                  name="phone" 
                  placeholder="+91 98765 43210" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="quote-email">Corporate Email *</label>
                <input 
                  id="quote-email"
                  type="email" 
                  name="email" 
                  placeholder="name@company.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="quote-company">Company / Location</label>
                <input 
                  id="quote-company"
                  type="text" 
                  name="company" 
                  placeholder="e.g. Media Agency / Hyderabad" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="quote-product">Display Category</label>
                <select 
                  id="quote-product"
                  name="product" 
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option value="DOOH LED Displays">DOOH LED Displays (Gold / Platinum)</option>
                  <option value="Indoor LED Displays">Indoor HD LED Displays</option>
                  <option value="Outdoor Commercial Displays">Outdoor Commercial Billboards</option>
                  <option value="Rental LED Displays">Rental LED Displays (500 / 576 Series)</option>
                  <option value="COB LED Displays">Special COB (Chip On Board)</option>
                  <option value="GOB LED Displays">Special GOB (Glue On Board)</option>
                  <option value="Transparent LED Displays">Transparent Mesh Glass Screens</option>
                  <option value="Zuper Sports Displays">Zuper Sports Perimeter Displays</option>
                  <option value="Zuper Datawall">Zuper Datawall Command Center</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quote-dimensions">Approx. Dimensions (WxH)</label>
                <input 
                  id="quote-dimensions"
                  type="text" 
                  name="dimensions" 
                  placeholder="e.g. 20ft x 10ft or 6m x 3m" 
                  value={formData.dimensions}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="quote-message">Project Notes / Pitch Preference</label>
              <textarea 
                id="quote-message"
                name="message" 
                rows="3" 
                placeholder="Tell us about the installation environment (viewing distance, indoor/outdoor, structural mounts)..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-submit-wrap">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status.state === 'loading'}
                style={{ width: '100%' }}
              >
                {status.state === 'loading' ? (
                  <span>Generating RFQ Request...</span>
                ) : (
                  <>
                    <span>Submit Quotation Request</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
