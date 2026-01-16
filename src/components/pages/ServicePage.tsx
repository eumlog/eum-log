import React from 'react';
import MainPageHeader from '../ui/MainPageHeader';
import Process from '../sections/Process';
import Footer from '../sections/Footer';

const ServicePage: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <MainPageHeader 
        title="이음로그 진행 방식" 
        subtitle="Process" 
      />
      
      {/* Detailed 7-Step Process */}
      <Process />
      
      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default ServicePage;