import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DatawallPage from './pages/DatawallPage';
import RDPage from './pages/RDPage';
import ProductsPage from './pages/ProductsPage';
import DOOHPage from './pages/DOOHPage';
import GoldSeriesPage from './pages/GoldSeriesPage';
import PlatinumSeriesPage from './pages/PlatinumSeriesPage';
import IndoorPage from './pages/IndoorPage';
import OutdoorPage from './pages/OutdoorPage';
import RentalPage from './pages/RentalPage';
import Rental500Page from './pages/Rental500Page';
import Rental576Page from './pages/Rental576Page';
import SplIndoorPage from './pages/SplIndoorPage';
import COBPage from './pages/COBPage';
import GOBPage from './pages/GOBPage';
import TransparentPage from './pages/TransparentPage';
import SportsPage from './pages/SportsPage';
import ServicesPage from './pages/ServicesPage';
import AdvertisingSolutionsPage from './pages/AdvertisingSolutionsPage';
import BroadcastingSolutionsPage from './pages/BroadcastingSolutionsPage';
import EducationSolutionsPage from './pages/EducationSolutionsPage';
import GovernmentSolutionsPage from './pages/GovernmentSolutionsPage';
import ReligiousInstallationsPage from './pages/ReligiousInstallationsPage';
import RentalStagingSolutionsPage from './pages/RentalStagingSolutionsPage';
import SportsInstallationsPage from './pages/SportsInstallationsPage';
import WorkProcessPage from './pages/WorkProcessPage';
import ProjectsPage from './pages/ProjectsPage';
import AdvertisingProjectsPage from './pages/AdvertisingProjectsPage';
import EducationProjectsPage from './pages/EducationProjectsPage';
import GovernmentProjectsPage from './pages/GovernmentProjectsPage';
import ReligiousProjectsPage from './pages/ReligiousProjectsPage';
import RentalEventsProjectsPage from './pages/RentalEventsProjectsPage';
import SportsProjectsPage from './pages/SportsProjectsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';
import useElementorEnhancer from './hooks/useElementorEnhancer';

function PageEnhancer() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useElementorEnhancer();
  return null;
}

export default function App() {
  return (
    <Router>
      <PageEnhancer />
      <div id="page" className="site">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/zuper-datawall" element={<DatawallPage />} />
          <Route path="/r-d" element={<RDPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/dooh-led-displays" element={<DOOHPage />} />
          <Route path="/products/dooh-led-displays/gold-series" element={<GoldSeriesPage />} />
          <Route path="/products/dooh-led-displays/platinum-series" element={<PlatinumSeriesPage />} />
          <Route path="/products/indoor-led-displays" element={<IndoorPage />} />
          <Route path="/products/outdoor-led-displays" element={<OutdoorPage />} />
          <Route path="/products/rental-led-displays" element={<RentalPage />} />
          <Route path="/products/rental-led-displays/rental-500-series" element={<Rental500Page />} />
          <Route path="/products/rental-led-displays/rental-576-series" element={<Rental576Page />} />
          <Route path="/products/spl-indoor-led-displays" element={<SplIndoorPage />} />
          <Route path="/products/spl-indoor-led-displays/cob" element={<COBPage />} />
          <Route path="/products/spl-indoor-led-displays/gob" element={<GOBPage />} />
          <Route path="/products/transparent-led-display" element={<TransparentPage />} />
          <Route path="/products/zuper-sports-led-displays" element={<SportsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/advertising-solutions" element={<AdvertisingSolutionsPage />} />
          <Route path="/services/brodcasting-solutions" element={<BroadcastingSolutionsPage />} />
          <Route path="/services/education-solutions" element={<EducationSolutionsPage />} />
          <Route path="/services/government-solutions" element={<GovernmentSolutionsPage />} />
          <Route path="/services/religious-installations" element={<ReligiousInstallationsPage />} />
          <Route path="/services/rental-staging-solutions" element={<RentalStagingSolutionsPage />} />
          <Route path="/services/sports-installations" element={<SportsInstallationsPage />} />
          <Route path="/services/work-process" element={<WorkProcessPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/advertising-projects" element={<AdvertisingProjectsPage />} />
          <Route path="/projects/education-projects" element={<EducationProjectsPage />} />
          <Route path="/projects/government-projects" element={<GovernmentProjectsPage />} />
          <Route path="/projects/religious-projects" element={<ReligiousProjectsPage />} />
          <Route path="/projects/rental-events-projects" element={<RentalEventsProjectsPage />} />
          <Route path="/projects/sports-projects" element={<SportsProjectsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
