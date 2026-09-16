import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, ArrowUpRight, ArrowRight, ShieldCheck, Factory, Cpu, Zap, 
  HelpCircle, ChevronDown, CheckCircle 
} from 'lucide-react';
import { productsData } from '../modules/products/data/productsData';
import { servicesData } from '../modules/services/data/servicesData';
import { projectsData } from '../modules/projects/data/projectsData';
import { companyData } from '../modules/corporate/data/companyData';
import ProductCard from '../modules/products/components/ProductCard';
import ServiceCard from '../modules/services/components/ServiceCard';
import ProjectCard from '../modules/projects/components/ProjectCard';
import VideoModal from '../components/VideoModal/VideoModal';
import './HomePage.css';

export default function HomePage({ onOpenQuote }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSector, setActiveSector] = useState('All');

  const faqs = [
    {
      q: "What is the lifespan of Zuper LED displays?",
      a: "Our LED displays are engineered using tier-1 SMD and flip-chip diodes with an operating lifespan exceeding 100,000 hours (over 11 years of 24/7 continuous operation) under standard thermal dissipation."
    },
    {
      q: "Are Zuper LED displays energy efficient?",
      a: "Yes. Our Gold and Platinum series feature common cathode dynamic energy-saving ICs, consuming up to 35% to 45% less power compared to traditional LED screens, drastically reducing ongoing operational electricity bills."
    },
    {
      q: "Do you provide on-site installation and structural support?",
      a: "Absolutely. As a true OEM manufacturer, Zuper LED handles the entire lifecycle: initial structural engineering calculations, steel framing fabrication, on-site mechanical alignment, electrical wiring, and white-balance calibration."
    },
    {
      q: "Where are your manufacturing and R&D facilities located?",
      a: "Our primary manufacturing and assembly facility is located in Hyderabad, Telangana (35,000+ sq.ft), supported by our joint-venture optical design and LED packaging plant in Bao'an District, Shenzhen."
    }
  ];

  const allProjects = projectsData.flatMap(p => p.projects.map(item => ({ ...item, sector: p.sector })));
  const filteredProjects = activeSector === 'All' 
    ? allProjects.slice(0, 6) 
    : allProjects.filter(p => p.sector === activeSector);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-bg">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/assets/images/2026/07/Hero-temp-001.webp"
          >
            <source src="/assets/images/2026/08/zuperled_hero_720p_ultralight.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content container">
          <div className="hero-badge">
            <span className="dot"></span>
            <span>India’s Only OEM LED Display Manufacturer</span>
          </div>

          <h1 className="hero-title">
            Engineering Next-Gen <span className="text-gradient">LED Video Displays</span>
          </h1>

          <p className="hero-subtitle">
            From 10,000-nit highway DOOH billboards to sub-millimeter COB mission-critical command center walls. Direct factory engineering, 13+ years of excellence, zero middlemen.
          </p>

          <div className="hero-cta-group">
            <Link to="/products" className="btn btn-primary hero-btn">
              <span>Explore Products</span>
              <span className="btn-icon"><ArrowUpRight size={16} /></span>
            </Link>
            
            <button 
              type="button" 
              className="btn btn-outline hero-btn"
              onClick={() => onOpenQuote()}
            >
              <span>Request Factory Quotation</span>
            </button>

            <button 
              type="button" 
              className="hero-play-btn"
              onClick={() => setVideoOpen(true)}
              aria-label="Watch Showreel Film"
            >
              <span className="play-icon-wrap">
                <Play size={16} fill="currentColor" />
              </span>
              <span>Watch Reel</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {companyData.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products Showcase */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="heading-tag">
              <span></span> Product Range
            </span>
            <h2 className="section-title">The Complete World of LED Displays</h2>
            <p className="section-desc">
              Every display is built inside our certified OEM manufacturing facilities, customized to your exact aspect ratio, pixel pitch, and weather conditions.
            </p>
          </div>

          <div className="grid-3">
            {productsData.slice(0, 6).map((prod) => (
              <ProductCard 
                key={prod.id} 
                product={prod} 
                onOpenQuote={onOpenQuote} 
              />
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/products" className="btn btn-outline">
              <span>View Full Product Catalog ({productsData.length} Families)</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose OEM Direct Advantage */}
      <section className="section-padding oem-advantage-section">
        <div className="container">
          <div className="grid-2 align-center">
            <div>
              <span className="heading-tag">
                <span></span> The OEM Difference
              </span>
              <h2 className="section-title">Why Sourcing Directly from an OEM Manufacturer Matters</h2>
              <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                Most display vendors in India are traders who re-box unbranded third-party modules. Zuper LED is a true Original Equipment Manufacturer with full fabrication control.
              </p>

              <div className="advantage-list">
                <div className="advantage-item">
                  <div className="adv-icon"><Factory size={22} /></div>
                  <div>
                    <h4>Direct Factory Pricing</h4>
                    <p>Eliminate distributor markups and import agent commissions with direct factory invoicing.</p>
                  </div>
                </div>

                <div className="advantage-item">
                  <div className="adv-icon"><Cpu size={22} /></div>
                  <div>
                    <h4>True Batch Diode Uniformity</h4>
                    <p>Single-bin SMD LED sorting ensures 100% color consistency and eliminates unsightly patchwork screens.</p>
                  </div>
                </div>

                <div className="advantage-item">
                  <div className="adv-icon"><Zap size={22} /></div>
                  <div>
                    <h4>72-Hour Continuous Burn-in Testing</h4>
                    <p>Every cabinet undergoes 72 hours of high-temperature stress testing before shipping to the installation site.</p>
                  </div>
                </div>

                <div className="advantage-item">
                  <div className="adv-icon"><ShieldCheck size={22} /></div>
                  <div>
                    <h4>Guaranteed 5-Year Spare Parts Availability</h4>
                    <p>We stock identical batch modules, IC drivers, and power supplies for rapid next-day maintenance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="oem-visual-card">
              <img 
                src="/assets/images/2026/08/DW-DS-Combined.pdf" 
                alt="Zuper Factory Manufacturing"
                onError={(e) => { e.target.src = "/assets/images/2026/08/1-1.webp"; }}
              />
              <div className="visual-badge-overlay">
                <span className="badge-highlight">35,000+ SQFT</span>
                <span>Hyderabad Manufacturing Plant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Solutions & Services */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="heading-tag">
              <span></span> Tailored Solutions
            </span>
            <h2 className="section-title">Powering Every Pixel Across Industries</h2>
            <p className="section-desc">
              From stadium perimeters and high-speed highway unipoles to command control centers and spiritual sanctuaries.
            </p>
          </div>

          <div className="grid-3">
            {servicesData.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/services" className="btn btn-outline">
              <span>Explore All Industry Solutions</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Real Installations / Projects Portfolio */}
      <section className="section-padding projects-home-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="heading-tag">
              <span></span> Proven Excellence
            </span>
            <h2 className="section-title">Installed Across Key Indian Cities</h2>
            <p className="section-desc">
              Browse our real-world commercial, government, sports, and educational display installations.
            </p>

            {/* Sector Filter Tabs */}
            <div className="sector-tabs">
              {['All', 'Advertising', 'Education', 'Government', 'Religious', 'Rental & Events', 'Sports'].map((sec) => (
                <button 
                  key={sec}
                  type="button"
                  className={`tab-btn ${activeSector === sec ? 'active' : ''}`}
                  onClick={() => setActiveSector(sec)}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-3">
            {filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/projects" className="btn btn-primary">
              <span>View Complete Projects Gallery</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding faq-section">
        <div className="container-narrow">
          <div className="section-header text-center">
            <span className="heading-tag">
              <HelpCircle size={14} /> Answers Behind Every Pixel
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about procuring, manufacturing, and maintaining your LED display systems.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`faq-item ${activeFaq === i ? 'is-open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`faq-arrow ${activeFaq === i ? 'rotate' : ''}`} />
                </div>
                {activeFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={videoOpen} 
        onClose={() => setVideoOpen(false)}
        videoSrc="/assets/images/2026/08/zuperled_hero_720p_ultralight.mp4"
        title="Zuper LED - India’s Only OEM LED Display Manufacturer"
      />
    </div>
  );
}
