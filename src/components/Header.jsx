import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [productsSubmenuOpen, setProductsSubmenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/';
  const isAbout = path === '/about-us';
  const isProducts = path.startsWith('/products') || path === '/zuper-datawall';
  const isServices = path.startsWith('/services');
  const isProjects = path.startsWith('/projects');
  const isRD = path === '/r-d';
  const isContact = path === '/contact-us';

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mmenu-active');
    } else {
      document.body.classList.remove('mmenu-active');
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (searchOpen) {
      document.body.classList.add('search-active');
    } else {
      document.body.classList.remove('search-active');
    }
  }, [searchOpen]);

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchOpen(false);
    if (searchQuery.trim()) {
      navigate('/products');
    }
  };

  return (
    <header id="site-header" className={`site-header header-transparent ${isSticky ? 'is-stuck' : ''}`}>
      <div className="header-desktop">
        <div data-elementor-type="wp-post" data-elementor-id="4374" className="elementor elementor-4374" data-elementor-post-type="ot_header_builders">
          <div className="elementor-element elementor-element-f9ef3b5 e-con-full e-flex e-con e-parent" data-id="f9ef3b5" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-6068144 e-con-full e-flex e-con e-child" data-id="6068144" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-1b584d9 elementor-widget elementor-widget-sasico-logo" data-id="1b584d9" data-element_type="widget" data-e-type="widget" data-settings={"{\"sticky\":\"top\",\"sticky_offset\":45,\"sticky_effects_offset\":1,\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_anchor_link_offset\":0}"} data-widget_type="sasico-logo.default">
                <div className="elementor-widget-container">
                  <div className="the-logo">
                    <Link to="/" onClick={closeMobile}>
                      <img src="/assets/images/2025/09/Main-Logo-Zuper-Transparent-scaled.webp" alt="Zuper LED" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a8e53c2 e-con-full e-flex e-con e-child" data-id="a8e53c2" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-18ab3b1 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-sasico-menu" data-id="18ab3b1" data-element_type="widget" data-e-type="widget" data-settings={"{\"sticky\":\"top\",\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_offset\":0,\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"} data-widget_type="sasico-menu.default">
                <div className="elementor-widget-container">
                  <nav id="site-navigation" className="main-navigation">
                    <ul id="primary-menu" className="menu">
                      <li id="menu-item-6635" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home ${isHome ? 'current-menu-item page_item page-item-686 current_page_item' : ''} menu-item-6635`}>
                        <Link to="/" aria-current={isHome ? 'page' : undefined}>Home</Link>
                      </li>
                      <li id="menu-item-6637" className={`menu-item menu-item-type-post_type menu-item-object-page ${isAbout ? 'current-menu-item page_item current_page_item' : ''} menu-item-6637`}>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li id="menu-item-6638" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${isProducts ? 'current-menu-item current-menu-ancestor' : ''} menu-item-6638`}>
                        <Link to="/products">Products</Link>
                        <ul className="sub-menu">
                          <li id="menu-item-6639" className="menu-item"><Link to="/products/indoor-led-displays">Indoor LED Displays</Link></li>
                          <li id="menu-item-10112" className="menu-item"><Link to="/zuper-datawall">Zuper Datawall</Link></li>
                          <li id="menu-item-8987" className="menu-item menu-item-has-children">
                            <Link to="/products/spl-indoor-led-displays">Spl. Indoor LED Displays</Link>
                            <ul className="sub-menu">
                              <li id="menu-item-9511" className="menu-item"><Link to="/products/spl-indoor-led-displays/cob">COB</Link></li>
                              <li id="menu-item-9510" className="menu-item"><Link to="/products/spl-indoor-led-displays/gob">GOB</Link></li>
                            </ul>
                          </li>
                          <li id="menu-item-8986" className="menu-item"><Link to="/products/outdoor-led-displays">Outdoor LED Displays</Link></li>
                          <li id="menu-item-8982" className="menu-item menu-item-has-children">
                            <Link to="/products/dooh-led-displays">DOOH LED Displays</Link>
                            <ul className="sub-menu">
                              <li id="menu-item-9509" className="menu-item"><Link to="/products/dooh-led-displays/gold-series">Gold Series</Link></li>
                              <li id="menu-item-9508" className="menu-item"><Link to="/products/dooh-led-displays/platinum-series">Platinum Series</Link></li>
                            </ul>
                          </li>
                          <li id="menu-item-8985" className="menu-item menu-item-has-children">
                            <Link to="/products/rental-led-displays">Rental LED Displays</Link>
                            <ul className="sub-menu">
                              <li id="menu-item-9507" className="menu-item"><Link to="/products/rental-led-displays/rental-500-series">Rental 500 Series</Link></li>
                              <li id="menu-item-9506" className="menu-item"><Link to="/products/rental-led-displays/rental-576-series">Rental 576 Series</Link></li>
                            </ul>
                          </li>
                          <li id="menu-item-8984" className="menu-item"><Link to="/products/zuper-sports-led-displays">Zuper Sports LED Displays</Link></li>
                          <li id="menu-item-8983" className="menu-item"><Link to="/products/transparent-led-display">Transparent LED Display</Link></li>
                        </ul>
                      </li>
                      <li id="menu-item-6805" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${isServices ? 'current-menu-item current-menu-ancestor' : ''} menu-item-6805`}>
                        <Link to="/services">Services</Link>
                        <ul className="sub-menu">
                          <li id="menu-item-7421" className="menu-item"><Link to="/services/advertising-solutions">Advertising Solutions</Link></li>
                          <li id="menu-item-7420" className="menu-item"><Link to="/services/education-solutions">Education Solutions</Link></li>
                          <li id="menu-item-7419" className="menu-item"><Link to="/services/brodcasting-solutions">Brodcasting Solutions</Link></li>
                          <li id="menu-item-7418" className="menu-item"><Link to="/services/government-solutions">Government Solutions</Link></li>
                          <li id="menu-item-7417" className="menu-item"><Link to="/services/rental-staging-solutions">Rental &amp; Staging Solutions</Link></li>
                          <li id="menu-item-7416" className="menu-item"><Link to="/services/religious-installations">Religious Installations</Link></li>
                          <li id="menu-item-7415" className="menu-item"><Link to="/services/sports-installations">Sports Installations</Link></li>
                          <li id="menu-item-7414" className="menu-item"><Link to="/services/work-process">Work Process</Link></li>
                        </ul>
                      </li>
                      <li id="menu-item-6911" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${isProjects ? 'current-menu-item current-menu-ancestor' : ''} menu-item-6911`}>
                        <Link to="/projects">Projects</Link>
                        <ul className="sub-menu">
                          <li id="menu-item-7549" className="menu-item"><Link to="/projects/advertising-projects">Advertising Projects</Link></li>
                          <li id="menu-item-9192" className="menu-item"><Link to="/projects/education-projects">Education Projects</Link></li>
                          <li id="menu-item-9191" className="menu-item"><Link to="/projects/government-projects">Government Projects</Link></li>
                          <li id="menu-item-9190" className="menu-item"><Link to="/projects/rental-events-projects">Rental &amp; Events Projects</Link></li>
                          <li id="menu-item-9189" className="menu-item"><Link to="/projects/religious-projects">Religious Projects</Link></li>
                          <li id="menu-item-9188" className="menu-item"><Link to="/projects/sports-projects">Sports Projects</Link></li>
                        </ul>
                      </li>
                      <li id="menu-item-6978" className={`menu-item menu-item-type-post_type menu-item-object-page ${isRD ? 'current-menu-item page_item current_page_item' : ''} menu-item-6978`}>
                        <Link to="/r-d">R &amp; D</Link>
                      </li>
                      <li id="menu-item-7561" className={`menu-item menu-item-type-post_type menu-item-object-page ${isContact ? 'current-menu-item page_item current_page_item' : ''} menu-item-7561`}>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Tablet/Mobile Hamburger Trigger in Desktop Bar */}
              <div className="elementor-element elementor-element-948ccb3 elementor-hidden-desktop elementor-widget elementor-widget-sasico-menu-mobile" data-id="948ccb3" data-element_type="widget" data-e-type="widget" data-widget_type="sasico-menu-mobile.default">
                <div className="elementor-widget-container">
                  <div className="sasi-menu-mobile sasi-cta-header">
                    <div id="mmenu-toggle" className={`mmenu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                      <button type="button" aria-label="menu mobile" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}>
                        {mobileMenuOpen ? (
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        ) : (
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-5af0d97 e-con-full e-flex e-con e-child" data-id="5af0d97" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-233001c elementor-widget elementor-widget-sasi-button" data-id="233001c" data-element_type="widget" data-e-type="widget" data-widget_type="sasi-button.default">
                <div className="elementor-widget-container">
                  <Link to="/contact-us" className="sasi-btn sasi-btn-primary sasi-btn-icon sasi-btn-icon__right">
                    <span className="sasi-text">Contact Us</span>
                    <span className="sasi-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M6.84375 13.8125C6.96875 13.9688 7.21875 13.9688 7.375 13.8125L13.9062 7.28125C14.0625 7.125 14.0625 6.90625 13.9062 6.75L7.375 0.21875C7.21875 0.0625 6.96875 0.0625 6.84375 0.21875L6.21875 0.8125C6.0625 0.96875 6.0625 1.21875 6.21875 1.34375L11.0625 6.1875H0.375C0.1875 6.1875 0 6.375 0 6.5625V7.4375C0 7.65625 0.1875 7.8125 0.375 7.8125H11.0625L6.21875 12.6875C6.0625 12.8125 6.0625 13.0625 6.21875 13.2188L6.84375 13.8125Z" fill="#0E0E0E"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header Bar */}
      <div className="header-mobile">
        <div data-elementor-type="wp-post" data-elementor-id="4378" className="elementor elementor-4378" data-elementor-post-type="ot_header_builders">
          <div className="elementor-element elementor-element-790cfc7 e-con-full sticky-header e-flex e-con e-parent" data-id="790cfc7" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
            <div className="elementor-element elementor-element-82fcf64 e-con-full e-flex e-con e-child" data-id="82fcf64" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-6a93d1b elementor-widget elementor-widget-sasico-logo" data-id="6a93d1b" data-element_type="widget" data-e-type="widget" data-widget_type="sasico-logo.default">
                <div className="elementor-widget-container">
                  <div className="the-logo">
                    <Link to="/" onClick={closeMobile}>
                      <img src="/assets/images/2025/09/Main-Logo-Zuper-Transparent-scaled.webp" alt="Zuper LED" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-908d6f4 e-con-full e-flex e-con e-child" data-id="908d6f4" data-element_type="container" data-e-type="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '18px' }}>
              {/* Search Widget */}
              <div className="elementor-element elementor-element-447b0f8 elementor-widget elementor-widget-sasico-search" data-id="447b0f8" data-element_type="widget" data-e-type="widget" data-widget_type="sasico-search.default">
                <div className="elementor-widget-container">
                  <div className="sasi-search sasi-cta-header">
                    <div className={`toggle-search sasi-cta-icons ${searchOpen ? 'active' : ''}`} onClick={() => setSearchOpen(!searchOpen)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hamburger Button */}
              <div className="elementor-element elementor-element-ac8166a elementor-widget elementor-widget-sasico-menu-mobile" data-id="ac8166a" data-element_type="widget" data-e-type="widget" data-widget_type="sasico-menu-mobile.default">
                <div className="elementor-widget-container">
                  <div className="sasi-menu-mobile sasi-cta-header">
                    <div id="mmenu-toggle" className={`mmenu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                      <button type="button" aria-label="menu mobile" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}>
                        {mobileMenuOpen ? (
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        ) : (
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Search Overlay */}
      <div className={`site-overlay search-overlay ${searchOpen ? 'search-open overlay-open' : ''}`} onClick={() => setSearchOpen(false)}>
        <a className="ss-search-close btn-close" href="#close" onClick={(e) => { e.preventDefault(); setSearchOpen(false); }} aria-label="Close">
          <svg aria-hidden="true" role="img" focusable="false" width="16" height="16" viewBox="0 0 16 16">
            <path d="M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z"></path>
          </svg>
        </a>
        <div className="sasi-form-inner" onClick={(e) => e.stopPropagation()}>
          <form method="get" className="search-form" onSubmit={handleSearchSubmit}>
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Enter keywords…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                name="s"
                autoFocus={searchOpen}
              />
            </label>
            <button aria-label="Search" className="wp-block-search__button wp-element-button" type="submit"></button>
          </form>
        </div>
      </div>

      {/* Global Mobile Menu Drawer & Overlay */}
      <div
        className={`site-overlay mmenu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        style={{ display: mobileMenuOpen ? 'block' : 'none' }}
        onClick={closeMobile}
      ></div>
      <div id="mmenu-wrapper" className={`mmenu-wrapper ${mobileMenuOpen ? 'mmenu-open' : ''}`}>
        <div className="mmenu-inner">
          <a className="mmenu-close btn-close" href="#close" onClick={(e) => { e.preventDefault(); closeMobile(); }} aria-label="Close">
            <svg aria-hidden="true" role="img" focusable="false" width="16" height="16" viewBox="0 0 16 16">
              <path d="M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z"></path>
            </svg>
          </a>
          <div className="mobile-nav">
            <ul id="menu-mobile-menu" className="mobile_mainmenu none-style">
              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home ${isHome ? 'current-menu-item page_item current_page_item' : ''}`}>
                <Link to="/" aria-current={isHome ? 'page' : undefined} onClick={closeMobile}>Home</Link>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isAbout ? 'current-menu-item page_item current_page_item' : ''}`}>
                <Link to="/about-us" onClick={closeMobile}>About Us</Link>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${isProducts ? 'current-menu-item' : ''} ${productsSubmenuOpen ? 'active' : ''}`}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link to="/products" onClick={closeMobile} style={{ flexGrow: 1 }}>Products</Link>
                  <span
                    className="arrow"
                    style={{ padding: '8px 16px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', color: '#fff' }}
                    onClick={(e) => { e.preventDefault(); setProductsSubmenuOpen(!productsSubmenuOpen); }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: productsSubmenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
                <ul className="sub-menu" style={{ display: productsSubmenuOpen ? 'block' : 'none' }}>
                  <li className="menu-item"><Link to="/products/indoor-led-displays" onClick={closeMobile}>Indoor LED Displays</Link></li>
                  <li className="menu-item"><Link to="/zuper-datawall" onClick={closeMobile}>Zuper Datawall</Link></li>
                  <li className="menu-item"><Link to="/products/spl-indoor-led-displays" onClick={closeMobile}>Spl. Indoor LED Displays</Link></li>
                  <li className="menu-item"><Link to="/products/outdoor-led-displays" onClick={closeMobile}>Outdoor LED Displays</Link></li>
                  <li className="menu-item"><Link to="/products/dooh-led-displays" onClick={closeMobile}>DOOH LED Displays</Link></li>
                  <li className="menu-item"><Link to="/products/rental-led-displays" onClick={closeMobile}>Rental LED Displays</Link></li>
                  <li className="menu-item"><Link to="/products/zuper-sports-led-displays" onClick={closeMobile}>Zuper Sports LED Displays</Link></li>
                  <li className="menu-item"><Link to="/products/transparent-led-display" onClick={closeMobile}>Transparent LED Display</Link></li>
                </ul>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isServices ? 'current-menu-item page_item current_page_item' : ''}`}>
                <Link to="/services" onClick={closeMobile}>Services</Link>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isProjects ? 'current-menu-item page_item current_page_item' : ''}`}>
                <Link to="/projects" onClick={closeMobile}>Projects</Link>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isRD ? 'current-menu-item page_item current_page_item' : ''}`}>
                <Link to="/r-d" onClick={closeMobile}>R &amp; D</Link>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isContact ? 'current-menu-item page_item current_page_item' : ''}`}>
                <Link to="/contact-us" onClick={closeMobile}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
