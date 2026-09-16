import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/productsData';
import SpecTable from '../components/SpecTable';
import { 
  ArrowLeft, ArrowUpRight, Zap, Shield, Eye, Layers, Download, CheckCircle 
} from 'lucide-react';
import './ProductsPages.css';

export default function ProductDetailPage({ onOpenQuote }) {
  const { category, subSeries } = useParams();

  const product = productsData.find((p) => p.slug === category);

  if (!product) {
    return (
      <div className="container" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
        <h2>Product Family Not Found</h2>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
          The requested product family could not be found.
        </p>
        <Link to="/products" className="btn btn-primary">
          Back to Products Catalog
        </Link>
      </div>
    );
  }

  // If a subSeries is specified (e.g. gold-series, platinum-series, cob, gob)
  const activeSub = subSeries && product.subSeries 
    ? product.subSeries.find((s) => s.slug === subSeries) 
    : null;

  const currentTitle = activeSub ? activeSub.name : product.name;
  const currentSubtitle = activeSub ? activeSub.tagline : product.subtitle;
  const currentDescription = activeSub ? activeSub.tagline : product.description;
  const currentPitches = activeSub ? activeSub.pitches : product.pitches;
  const currentFeatures = activeSub ? activeSub.features : product.features;

  return (
    <div className="product-detail-page">
      {/* Breadcrumb & Top Bar */}
      <div className="detail-hero">
        <div className="container">
          <Link to="/products" className="back-link">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>

          <div className="detail-hero-grid">
            <div>
              <span className="heading-tag">
                <span></span> OEM Series
              </span>
              <h1 className="detail-h1">{currentTitle}</h1>
              <p className="detail-sub">{currentSubtitle}</p>
              <p className="detail-desc">{product.description}</p>

              <div className="detail-cta-bar">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onOpenQuote(currentTitle)}
                >
                  <span>Request Custom Quote</span>
                  <span className="btn-icon"><ArrowUpRight size={16} /></span>
                </button>

                <a 
                  href="/assets/images/2026/08/DW-DS-Combined.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  <Download size={16} /> Download Datasheet (PDF)
                </a>
              </div>
            </div>

            <div className="detail-media-card">
              <img 
                src={product.cardImage || "/assets/images/2026/08/1-1.png"} 
                alt={currentTitle} 
              />
              {product.brightness && (
                <div className="detail-bright-badge">
                  <Zap size={14} /> Max Brightness: {activeSub?.brightness || product.brightness}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Series Navigation Bar if available */}
      {product.subSeries && product.subSeries.length > 0 && (
        <div className="subseries-bar">
          <div className="container">
            <span className="subseries-label">Available Series:</span>
            <div className="subseries-nav-links">
              <Link 
                to={`/products/${product.slug}`} 
                className={`subseries-tab ${!subSeries ? 'active' : ''}`}
              >
                Overview
              </Link>
              {product.subSeries.map((sub) => (
                <Link 
                  key={sub.id} 
                  to={`/products/${product.slug}/${sub.slug}`}
                  className={`subseries-tab ${subSeries === sub.slug ? 'active' : ''}`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Key Specifications & Features */}
      <div className="container detail-content-body">
        {/* Specification Matrix Table */}
        {currentPitches && (
          <SpecTable pitches={currentPitches} title={`${currentTitle} Pitch Specifications`} />
        )}

        {/* Feature Highlights Grid */}
        {currentFeatures && (
          <div className="features-highlight-box card-dark">
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.3rem' }}>
              Engineered Capabilities & OEM Highlights
            </h3>
            <div className="grid-2">
              {currentFeatures.map((feat, i) => (
                <div key={i} className="feat-item">
                  <CheckCircle size={18} className="feat-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SubSeries Cards if on main overview page */}
        {!subSeries && product.subSeries && (
          <div className="subseries-overview-section">
            <h3 className="section-title text-center" style={{ margin: '3rem 0 1.5rem' }}>
              Explore Specialized Series Configurations
            </h3>
            <div className="grid-2">
              {product.subSeries.map((sub) => (
                <div key={sub.id} className="card-dark subseries-card">
                  <h4>{sub.name}</h4>
                  <p className="sub-tagline">{sub.tagline}</p>
                  <div className="sub-specs-row">
                    {sub.brightness && <span><strong>Brightness:</strong> {sub.brightness}</span>}
                    {sub.refreshRate && <span><strong>Refresh:</strong> {sub.refreshRate}</span>}
                  </div>
                  <Link 
                    to={`/products/${product.slug}/${sub.slug}`} 
                    className="btn btn-outline"
                    style={{ marginTop: '1.25rem' }}
                  >
                    <span>View {sub.name} Technical Specs</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
