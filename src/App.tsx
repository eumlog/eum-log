import React, { useEffect, useState, useRef } from 'react';
import './index.css'; // Ensure global styles are loaded
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Renamed Imports to fix case-sensitivity issues
import MainNavbar from './components/layout/MainNavbar';
import FloatingMenu from './components/layout/FloatingMenu';
import IntroPreloader from './components/ui/IntroPreloader';

// Pages - Renamed all to '...Main.tsx' to force git/netlify file refresh
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicePage from './components/pages/ServicePage';
import CriteriaMain from './components/pages/CriteriaMain';
import PricingMain from './components/pages/PricingMain';
import FaqMain from './components/pages/FaqMain';
import ContactMain from './components/pages/ContactMain';
import ApplyMain from './components/pages/ApplyMain';
import AdminMain from './components/pages/AdminMain';
import InstagramMain from './components/pages/InstagramMain';
import PolicyMain from './components/pages/PolicyMain';

gsap.registerPlugin(ScrollTrigger);

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
       // Simple fade in when loading is done
       if (wrapperRef.current) {
         gsap.to(wrapperRef.current, { 
           opacity: 1, 
           duration: 0.8, 
           ease: 'power2.out',
           onComplete: () => ScrollTrigger.refresh()
         });
       }
    }
  }, [loading]);

  // Hide FloatingMenu on Contact Page to avoid overlapping
  const showFloatingBanner = location.pathname !== '/contact';

  return (
    <>
      {loading && <IntroPreloader onComplete={() => setLoading(false)} />}
      
      {/* We keep content rendered but hidden to ensure layout is ready */}
      <div 
        ref={wrapperRef} 
        className="min-h-screen flex flex-col justify-between transition-opacity duration-500" 
        style={{ opacity: loading ? 0 : 1 }}
      >
        <MainNavbar />
        {showFloatingBanner && <FloatingMenu />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/criteria" element={<CriteriaMain />} />
          <Route path="/pricing" element={<PricingMain />} />
          <Route path="/faq" element={<FaqMain />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/apply" element={<ApplyMain />} />
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/instagram" element={<InstagramMain />} />
          <Route path="/policy" element={<PolicyMain />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;