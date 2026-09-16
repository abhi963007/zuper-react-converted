import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, ShieldAlert, Cpu, Eye, CheckCircle2, Download, ArrowUpRight, Zap 
} from 'lucide-react';
import SpecTable from '../modules/products/components/SpecTable';
import './CorporatePages.css';

export default function DatawallPage({ onOpenQuote }) {
  const datawallPitches = [
    { pitch: "P0.9 Micro-COB", resolution: "666x375 dots", density: "1,234,567 dots/m²", idealViewing: "0.8m - 4m" },
    { pitch: "P1.25 Fine-Pitch", resolution: "480x270 dots", density: "640,000 dots/m²", idealViewing: "1.2m - 6m" },
    { pitch: "P1.53 Ultra HD", resolution: "392x220 dots", density: "426,800 dots/m²", idealViewing: "1.5m - 10m" },
    { pitch: "P1.86 High Res", resolution: "322x181 dots", density: "288,900 dots/m²", idealViewing: "1.8m - 14m" }
  ];

  const features = [
    "Native 16:9 cabinet ratio perfectly displays standard Full HD, 4K, and 8K operator consoles",
    "Dual redundant hot-swappable power supplies ensure 24/7/365 uninterrupted mission-critical operation",
    "Sub-millimeter CNC aluminum cabinet machining guarantees zero visible seam lines across vast video walls",
    "Anti-fatigue optical coatings allow operators to monitor data streams for 8+ hour shifts without eye strain",
    "Direct compatibility with all major SCADA, GIS mapping, VMS, and Milestone/Genetec IP camera software",
    "Zero-latency hardware video processing with multi-windowing, roaming, and picture-in-picture presets"
  ];

  return (
    <div className="corporate-page datawall-page">
      <div className="page-header container">
        <span className="heading-tag">
          <Monitor size={14} /> Mission-Critical Visual Infrastructure
        </span>
        <h1 className="page-title">Zuper Datawall</h1>
        <p className="page-subtitle">
          Bezel-less, zero-latency 24/7 command & control video walls designed for Smart City NOCs, power grid monitoring, traffic police headquarters, and security hubs.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => onOpenQuote("Zuper Datawall")}
          >
            <span>Request Command Center Specs</span>
            <ArrowUpRight size={16} />
          </button>
          <a 
            href="/assets/images/2026/08/Zuper-Datawall-Brochure-26R1.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            <Download size={16} /> Download Datawall Brochure (PDF)
          </a>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        {/* Visual Showcase */}
        <div className="card-dark datawall-hero-card">
          <img 
            src="/assets/images/2026/08/2-1.webp" 
            alt="Zuper Datawall Command Center Installation" 
          />
          <div className="datawall-specs-bar">
            <div className="spec-stat">
              <span className="val">100,000h</span>
              <span className="lbl">MTBF Operating Lifespan</span>
            </div>
            <div className="spec-stat">
              <span className="val">0.01mm</span>
              <span className="lbl">Cabinet Alignment Tolerance</span>
            </div>
            <div className="spec-stat">
              <span className="val">16:9</span>
              <span className="lbl">Native Pixel Aspect Ratio</span>
            </div>
            <div className="spec-stat">
              <span className="val">24/7/365</span>
              <span className="lbl">Uninterrupted Operation Rating</span>
            </div>
          </div>
        </div>

        {/* Technical Pitch Matrix */}
        <SpecTable pitches={datawallPitches} title="Zuper Datawall Pitch Specifications" />

        {/* Core Architecture Capabilities */}
        <div className="card-dark" style={{ padding: '2.5rem', margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
            Built for Zero-Downtime Control Rooms
          </h3>
          <div className="grid-2">
            {features.map((feat, idx) => (
              <div key={idx} className="feat-item">
                <CheckCircle2 size={20} className="feat-icon" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="datawall-sectors">
          <h3 className="section-title text-center" style={{ marginBottom: '2rem' }}>
            Deployed in Critical Operations Centers
          </h3>
          <div className="grid-4">
            <div className="card-dark sector-tile">
              <h4>Smart City NOCs</h4>
              <p>Integrated civic traffic, weather, and waste management monitoring walls.</p>
            </div>
            <div className="card-dark sector-tile">
              <h4>Police Control Centers</h4>
              <p>High-density multi-feed IP camera video surveillance with sub-second switching.</p>
            </div>
            <div className="card-dark sector-tile">
              <h4>Power & Utilities Grids</h4>
              <p>Real-time SCADA telemetry display for electrical sub-stations and pipelines.</p>
            </div>
            <div className="card-dark sector-tile">
              <h4>Defense & Aerospace</h4>
              <p>Secure, air-gapped visualization systems with hardware-level redundancy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
