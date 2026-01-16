import React from 'react';
import MainPageHeader from '../ui/MainPageHeader';
import Pricing from '../sections/Pricing';
import Footer from '../sections/Footer';

const PricingMain: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <MainPageHeader 
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

export default PricingMain;