import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Zap, Shield, Microscope, Layers, Gauge, ThermometerSnowflake, CheckCircle2, ArrowUpRight 
} from 'lucide-react';
import './CorporatePages.css';

export default function RDPage({ onOpenQuote }) {
  const rdHighlights = [
    {
      icon: Cpu,
      title: "Common Cathode Dynamic IC Architecture",
      desc: "Our proprietary power routing supplies dedicated voltages to Red (2.8V) and Green/Blue (3.8V) diodes, eliminating excess heat and trimming power consumption by up to 35% compared to conventional common anode screens."
    },
    {
      icon: Microscope,
      title: "Flip-Chip COB Surface Bonding",
      desc: "Sub-1.0mm micro-pitch displays manufactured via automated cleanroom flip-chip die attach directly onto multilayer high-thermal-conductivity PCBs, achieving true black levels and 178° panoramic viewing."
    },
    {
      icon: ThermometerSnowflake,
      title: "Fanless Natural Convection Cooling",
      desc: "Aerodynamically contoured aluminum backplates dissipate thermal loads silently without mechanical fans, eliminating mechanical failure points and dust intake into the cabinet interior."
    },
    {
      icon: Gauge,
      title: "Optical Anti-Glare Mask Engineering",
      desc: "Custom micro-ribbed silicone and polycarbonate louvers absorb ambient sunlight reflections while preserving full off-axis viewing brightness."
    }
  ];

  const testingStages = [
    "72-Hour Continuous Thermal Aging at 45°C ambient",
    "IP66 High-Pressure Water Jet & Dust Ingress Chamber Validation",
    "Vibration & Drop Testing simulating harsh highway transport",
    "Spectroradiometer Chromaticity & White-Balance Uniformity Calibration"
  ];

  return (
    <div className="corporate-page">
      <div className="page-header container">
        <span className="heading-tag">
          <span></span> Advanced Engineering
        </span>
        <h1 className="page-title">Inside the Future of LED Displays</h1>
        <p className="page-subtitle">
          How our dual Hyderabad and Shenzhen optical laboratories push the boundaries of energy efficiency, micro-pitch precision, and all-weather durability.
        </p>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        {/* R&D Overview Grid */}
        <div className="grid-2 align-center story-section">
          <div>
            <span className="heading-tag">
              <span></span> Joint-Ventures & Capabilities
            </span>
            <h2>Integrated Optical Design & Precision Tooling</h2>
            <p className="story-p">
              Zuper LED's R&D department bridges cutting-edge semiconductor packaging research from Bao'an, Shenzhen with specialized Indian environmental engineering in Hyderabad.
            </p>
            <p className="story-p">
              Every panel is designed to endure extreme Indian climates: 48°C summer heat in Northern plains, coastal salt corrosion in Mumbai and Chennai, and heavy monsoon downpours across Kerala.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenQuote("Custom R&D Engineering")}
              >
                <span>Request Custom Optical Consultation</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="story-media-card card-dark">
            <img 
              src="/assets/images/2026/08/3-2.webp" 
              alt="Zuper Optical Laboratory" 
            />
            <div className="story-stat-float">
              <h3>72h</h3>
              <p>Continuous Aging Stress Test</p>
            </div>
          </div>
        </div>

        {/* Breakthrough Technologies Grid */}
        <div style={{ margin: '5rem 0' }}>
          <div className="section-header text-center">
            <span className="heading-tag">
              <span></span> Proprietary Innovations
            </span>
            <h2 className="section-title">Optical & Electronic Engineering Breakthroughs</h2>
          </div>

          <div className="grid-2">
            {rdHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card-dark rd-card">
                  <div className="rd-icon-wrap">
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testing Protocols Box */}
        <div className="card-dark testing-box">
          <div className="grid-2 align-center">
            <div>
              <span className="heading-tag">
                <span></span> Quality Assurance
              </span>
              <h3>Zero-Tolerance Factory Testing Protocols</h3>
              <p style={{ color: 'var(--text-muted)', margin: '1rem 0 1.5rem', lineHeight: '1.6' }}>
                Before any batch leaves our assembly floor, it must pass a battery of rigorous stress tests simulating over five years of harsh field conditions.
              </p>
              <ul className="testing-list">
                {testingStages.map((stage, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="feat-icon" />
                    <span>{stage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="testing-visual">
              <img 
                src="/assets/images/2026/08/1-1.webp" 
                alt="Environmental Testing Chamber" 
                style={{ borderRadius: 'var(--radius-md)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
