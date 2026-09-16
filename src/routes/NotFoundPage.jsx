import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import './CorporatePages.css';

export default function NotFoundPage() {
  return (
    <div className="corporate-page" style={{ textAlign: 'center', padding: '12rem 1rem 8rem' }}>
      <div className="container-narrow">
        <span className="heading-tag">
          <Sparkles size={14} /> 404 Error
        </span>
        <h1 style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Display Pixel Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          The page or product specification you are looking for has been updated or moved in our new platform.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Return to Homepage
          </Link>
          <Link to="/products" className="btn btn-outline">
            Browse Product Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
