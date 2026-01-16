import React, { useEffect, useState, useRef } from 'react';
import './index.css'; // Ensure global styles are loaded
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Renamed Imports to fix case-sensitivity issues
import MainNavbar from './components/layout/MainNavbar';
import FloatingMenu from './components/layout/FloatingMenu';
import IntroPreloader from './components/ui/IntroPreloader';

// Pages
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Service from './components/pages/Service';
import CriteriaPage from './components/pages/CriteriaPage';
import PricingPage from './components/pages/PricingPage';
import FaqPage from './components/pages/FaqPage';
import ContactPage from './components/pages/ContactPage';
import ApplyPage from './components/pages/ApplyPage';
import AdminPage from './components/pages/AdminPage';
import InstagramRegionsPage from './components/pages/InstagramRegionsPage';
import PolicyPage from './components/pages/PolicyPage';

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
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/criteria" element={<CriteriaPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/instagram" element={<InstagramRegionsPage />} />
          <Route path="/policy" element={<PolicyPage />} />
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