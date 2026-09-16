import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import './Header.css';

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="Zuper LED Home">
          <span className="brand-badge">OEM</span>
          <span className="brand-text">ZUPER<span className="brand-accent">LED</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>

            {/* Products Mega Dropdown */}
            <li 
              className="has-dropdown"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/products" className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`}>
                Products <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'products' && (
                <div className="dropdown-menu mega-products">
                  <div className="dropdown-grid">
                    <div className="dropdown-col">
                      <span className="col-title">Outdoor & DOOH</span>
                      <Link to="/products/dooh-led-displays" className="dropdown-item">
                        <strong>DOOH LED Displays</strong>
                        <span>Highway & billboard screens</span>
                      </Link>
                      <Link to="/products/dooh-led-displays/gold-series" className="dropdown-sub-item">
                        ↳ Gold Series (Energy Saving)
                      </Link>
                      <Link to="/products/dooh-led-displays/platinum-series" className="dropdown-sub-item">
                        ↳ Platinum Series (10k Nits)
                      </Link>
                      <Link to="/products/outdoor-led-displays" className="dropdown-item">
                        <strong>Outdoor Commercial Displays</strong>
                        <span>All-weather IP65 facades</span>
                      </Link>
                    </div>

                    <div className="dropdown-col">
                      <span className="col-title">Indoor & Enterprise</span>
                      <Link to="/products/indoor-led-displays" className="dropdown-item">
                        <strong>Indoor HD Displays</strong>
                        <span>Fine pitch 16:9 boardrooms</span>
                      </Link>
                      <Link to="/products/spl-indoor-led-displays" className="dropdown-item">
                        <strong>Special Indoor (COB & GOB)</strong>
                        <span>Impact-resistant micro-pitch</span>
                      </Link>
                      <Link to="/zuper-datawall" className="dropdown-item">
                        <strong>Zuper Datawall</strong>
                        <span>24/7 Command Center NOC walls</span>
                      </Link>
                    </div>

                    <div className="dropdown-col">
                      <span className="col-title">Rental & Specialty</span>
                      <Link to="/products/rental-led-displays" className="dropdown-item">
                        <strong>Rental LED Displays</strong>
                        <span>Concert & event quick-rigging</span>
                      </Link>
                      <Link to="/products/rental-led-displays/rental-500-series" className="dropdown-sub-item">
                        ↳ 500 Series Modular Panels
                      </Link>
                      <Link to="/products/rental-led-displays/rental-576-series" className="dropdown-sub-item">
                        ↳ 576 Series Stage Cabinets
                      </Link>
                      <Link to="/products/transparent-led-display" className="dropdown-item">
                        <strong>Transparent Mesh LED</strong>
                        <span>Glass facade 75% see-through</span>
                      </Link>
                      <Link to="/products/zuper-sports-led-displays" className="dropdown-item">
                        <strong>Zuper Sports Displays</strong>
                        <span>Stadium perimeter & cubes</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Services Dropdown */}
            <li 
              className="has-dropdown"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/services" className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
                Services <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu compact-menu">
                  <Link to="/services/advertising-solutions" className="dropdown-item">Advertising Solutions</Link>
                  <Link to="/services/brodcasting-solutions" className="dropdown-item">Broadcasting Solutions</Link>
                  <Link to="/services/education-solutions" className="dropdown-item">Education Solutions</Link>
                  <Link to="/services/government-solutions" className="dropdown-item">Government Solutions</Link>
                  <Link to="/services/rental-staging-solutions" className="dropdown-item">Rental & Staging Solutions</Link>
                  <Link to="/services/sports-installations" className="dropdown-item">Sports Installations</Link>
                  <Link to="/services/religious-installations" className="dropdown-item">Religious Installations</Link>
                  <Link to="/services/work-process" className="dropdown-item highlight">Our 4-Step Work Process</Link>
                </div>
              )}
            </li>

            {/* Projects Dropdown */}
            <li 
              className="has-dropdown"
              onMouseEnter={() => setActiveDropdown('projects')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/projects" className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}>
                Projects <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'projects' && (
                <div className="dropdown-menu compact-menu">
                  <Link to="/projects/advertising-projects" className="dropdown-item">Advertising Projects</Link>
                  <Link to="/projects/education-projects" className="dropdown-item">Education Projects</Link>
                  <Link to="/projects/government-projects" className="dropdown-item">Government Projects</Link>
                  <Link to="/projects/religious-projects" className="dropdown-item">Religious Projects</Link>
                  <Link to="/projects/rental-events-projects" className="dropdown-item">Rental & Events Projects</Link>
                  <Link to="/projects/sports-projects" className="dropdown-item">Sports Projects</Link>
                </div>
              )}
            </li>

            <li>
              <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/r-d" className={`nav-link ${location.pathname === '/r-d' ? 'active' : ''}`}>
                R&D
              </Link>
            </li>

            <li>
              <Link to="/contact-us" className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="header-actions">
          <button 
            type="button" 
            className="btn btn-primary header-cta" 
            onClick={onOpenQuote}
            aria-label="Request quotation"
          >
            <span>Get a Quote</span>
            <span className="btn-icon">
              <ArrowUpRight size={16} />
            </span>
          </button>

          <button 
            type="button" 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <div className="drawer-links">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            
            <div className="drawer-group">
              <button 
                className="drawer-group-title"
                onClick={() => toggleDropdown('mob-products')}
              >
                <span>Products</span>
                <ChevronDown size={16} className={activeDropdown === 'mob-products' ? 'rotate' : ''} />
              </button>
              {activeDropdown === 'mob-products' && (
                <div className="drawer-sublinks">
                  <Link to="/products" onClick={() => setMobileOpen(false)}>All Products</Link>
                  <Link to="/products/dooh-led-displays" onClick={() => setMobileOpen(false)}>DOOH LED Displays</Link>
                  <Link to="/products/dooh-led-displays/gold-series" onClick={() => setMobileOpen(false)}>Gold Series DOOH</Link>
                  <Link to="/products/dooh-led-displays/platinum-series" onClick={() => setMobileOpen(false)}>Platinum Series DOOH</Link>
                  <Link to="/products/indoor-led-displays" onClick={() => setMobileOpen(false)}>Indoor LED Displays</Link>
                  <Link to="/products/outdoor-led-displays" onClick={() => setMobileOpen(false)}>Outdoor LED Displays</Link>
                  <Link to="/products/rental-led-displays" onClick={() => setMobileOpen(false)}>Rental LED Displays</Link>
                  <Link to="/products/spl-indoor-led-displays" onClick={() => setMobileOpen(false)}>Special COB / GOB Displays</Link>
                  <Link to="/products/transparent-led-display" onClick={() => setMobileOpen(false)}>Transparent LED Displays</Link>
                  <Link to="/products/zuper-sports-led-displays" onClick={() => setMobileOpen(false)}>Zuper Sports Displays</Link>
                  <Link to="/zuper-datawall" onClick={() => setMobileOpen(false)}>Zuper Datawall</Link>
                </div>
              )}
            </div>

            <div className="drawer-group">
              <button 
                className="drawer-group-title"
                onClick={() => toggleDropdown('mob-services')}
              >
                <span>Services</span>
                <ChevronDown size={16} className={activeDropdown === 'mob-services' ? 'rotate' : ''} />
              </button>
              {activeDropdown === 'mob-services' && (
                <div className="drawer-sublinks">
                  <Link to="/services" onClick={() => setMobileOpen(false)}>All Services</Link>
                  <Link to="/services/advertising-solutions" onClick={() => setMobileOpen(false)}>Advertising Solutions</Link>
                  <Link to="/services/brodcasting-solutions" onClick={() => setMobileOpen(false)}>Broadcasting Solutions</Link>
                  <Link to="/services/education-solutions" onClick={() => setMobileOpen(false)}>Education Solutions</Link>
                  <Link to="/services/government-solutions" onClick={() => setMobileOpen(false)}>Government Solutions</Link>
                  <Link to="/services/rental-staging-solutions" onClick={() => setMobileOpen(false)}>Rental & Staging</Link>
                  <Link to="/services/sports-installations" onClick={() => setMobileOpen(false)}>Sports Installations</Link>
                  <Link to="/services/religious-installations" onClick={() => setMobileOpen(false)}>Religious Installations</Link>
                  <Link to="/services/work-process" onClick={() => setMobileOpen(false)}>Our Work Process</Link>
                </div>
              )}
            </div>

            <div className="drawer-group">
              <button 
                className="drawer-group-title"
                onClick={() => toggleDropdown('mob-projects')}
              >
                <span>Projects</span>
                <ChevronDown size={16} className={activeDropdown === 'mob-projects' ? 'rotate' : ''} />
              </button>
              {activeDropdown === 'mob-projects' && (
                <div className="drawer-sublinks">
                  <Link to="/projects" onClick={() => setMobileOpen(false)}>All Projects</Link>
                  <Link to="/projects/advertising-projects" onClick={() => setMobileOpen(false)}>Advertising Projects</Link>
                  <Link to="/projects/education-projects" onClick={() => setMobileOpen(false)}>Education Projects</Link>
                  <Link to="/projects/government-projects" onClick={() => setMobileOpen(false)}>Government Projects</Link>
                  <Link to="/projects/religious-projects" onClick={() => setMobileOpen(false)}>Religious Projects</Link>
                  <Link to="/projects/rental-events-projects" onClick={() => setMobileOpen(false)}>Rental & Events</Link>
                  <Link to="/projects/sports-projects" onClick={() => setMobileOpen(false)}>Sports Projects</Link>
                </div>
              )}
            </div>

            <Link to="/about-us" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link to="/r-d" onClick={() => setMobileOpen(false)}>R&D Facilities</Link>
            <Link to="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</Link>

            <div className="drawer-cta-wrap">
              <button 
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
