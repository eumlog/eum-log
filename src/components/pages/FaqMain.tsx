import React from 'react';
import MainPageHeader from '../ui/MainPageHeader';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const FaqMain: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <MainPageHeader 
        title="무엇이든 물어보세요" 
        subtitle="F.A.Q" 
      />
      
      <div className="py-20">
          <FAQ />

          {/* Contact Link Section */}
          <div className="max-w-2xl mx-auto px-6 mt-16 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-eum-dark mb-2">찾으시는 질문이 없나요?</h3>
                  <p className="text-gray-500 mb-6">담당 매니저에게 직접 문의하시면 빠르게 답변해 드립니다.</p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-eum-dark text-white font-bold rounded-full hover:bg-black transition-colors"
                  >
                      <MessageCircle className="w-4 h-4" />
                      1:1 상담 문의하기
                  </Link>
              </div>
          </div>
      </div>
      
      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default FaqMain;