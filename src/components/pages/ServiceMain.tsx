import React from 'react';
import MainPageHeader from '../ui/MainPageHeader';
import ProcessSection from '../sections/ProcessSection';
import FooterSection from '../sections/FooterSection';

const ServiceMain: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <MainPageHeader 
        title="이음로그 진행 방식" 
        subtitle="Process" 
      />
      
      {/* Detailed 7-Step Process */}
      <ProcessSection />
      
      <div className="bg-[#0f0f0f] text-white">
        <FooterSection />
      </div>
    </div>
  );
};

export default ServiceMain;