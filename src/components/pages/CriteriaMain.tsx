import React from 'react';
import MainPageHeader from '../ui/MainPageHeader';
import Criteria from '../sections/Criteria';
import Footer from '../sections/Footer';
import { Link } from 'react-router-dom';

const CriteriaMain: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <MainPageHeader 
        title="엄격한 가입 기준" 
        subtitle="Membership Criteria" 
      />
      
      {/* Background changed to white to match the light theme Criteria component */}
      <div className="bg-white">
          <Criteria />
      </div>

      <div className="py-32 text-center bg-white border-t border-gray-100">
        <h3 className="text-2xl font-bold text-eum-dark mb-8">준비가 되셨나요?</h3>
        <Link to="/apply" className="inline-block px-10 py-4 bg-eum-accent text-white font-bold rounded-full hover:bg-[#7d6f60] transition-colors shadow-lg">
            심사 신청하기
        </Link>
      </div>
      
      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default CriteriaMain;