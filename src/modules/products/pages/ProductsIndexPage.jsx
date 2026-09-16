import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import './ProductsPages.css';

export default function ProductsIndexPage({ onOpenQuote }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Outdoor & DOOH', 'Indoor & Enterprise', 'Rental & Staging', 'Specialty'];

  const filtered = productsData.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Outdoor & DOOH') return p.id.includes('dooh') || p.id.includes('outdoor');
    if (filter === 'Indoor & Enterprise') return p.id.includes('indoor') || p.id.includes('datawall');
    if (filter === 'Rental & Staging') return p.id.includes('rental') || p.id.includes('sports');
    if (filter === 'Specialty') return p.id.includes('spl') || p.id.includes('transparent');
    return true;
  });

  return (
    <div className="products-page">
      <div className="page-header container">
        <span className="heading-tag">
          <Sparkles size={13} /> Complete Product Catalog
        </span>
        <h1 className="page-title">The Complete World of LED Displays</h1>
        <p className="page-subtitle">
          Direct OEM factory-certified video screens engineered for extreme brightness, color fidelity, and 24/7 reliability.
        </p>

        {/* Filter Pills */}
        <div className="category-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pill-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div className="grid-3">
          {filtered.map((prod) => (
            <ProductCard 
              key={prod.id} 
              product={prod} 
              onOpenQuote={onOpenQuote} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
