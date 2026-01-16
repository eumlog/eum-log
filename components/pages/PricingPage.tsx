import React from 'react';
import PageHeader from '../ui/PageHeader';
import Pricing from '../sections/Pricing';
import Footer from '../sections/Footer';

const PricingPage: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <PageHeader 
        title="멤버십 안내" 
        subtitle="Pricing Plan" 
      />
      
      <Pricing />
      
      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default PricingPage;