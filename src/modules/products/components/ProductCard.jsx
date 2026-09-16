import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Check, Eye } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product, onOpenQuote }) {
  return (
    <div className="product-card">
      <div className="product-card-media">
        <img 
          src={product.cardImage || "/assets/images/2026/08/1-1.webp"} 
          alt={product.name} 
          loading="lazy" 
        />
        <span className="product-badge">OEM Built</span>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-title">{product.title}</p>
        
        {product.brightness && (
          <div className="product-spec-pill">
            <Zap size={14} className="pill-icon" />
            <span>Brightness: {product.brightness}</span>
          </div>
        )}

        <div className="product-card-actions">
          <Link to={`/products/${product.slug}`} className="btn btn-outline product-btn">
            <span>Explore Specs</span>
            <Eye size={16} />
          </Link>
          <button 
            type="button" 
            className="btn btn-primary product-btn"
            onClick={() => onOpenQuote(product.name)}
          >
            <span>Quote</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
