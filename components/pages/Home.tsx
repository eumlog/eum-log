
import React from 'react';
import Hero from '../sections/Hero';
import Philosophy from '../sections/Philosophy';
import Intro from '../sections/Intro';
import SystemFeatures from '../sections/SystemFeatures';
import Footer from '../sections/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Intro />
      <SystemFeatures />
      
      {/* Quick FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-[900px] mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-2xl md:text-3xl font-bold text-eum-dark">자주 묻는 질문</h2>
             </div>
             
             <div className="grid gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-eum-accent/30 transition-colors">
                    <h3 className="text-lg font-bold text-eum-dark mb-2">Q. 지인이 나올 가능성은 정말 없나요?</h3>
                    <p className="text-base text-gray-600 leading-relaxed font-medium">
                        프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인하여 지인을 사전에 차단합니다.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-eum-accent/30 transition-colors">
                    <h3 className="text-lg font-bold text-eum-dark mb-2">Q. 3개월 동안 정말 계속 소개해주나요?</h3>
                    <p className="text-base text-gray-600 leading-relaxed font-medium">
                        네. 구독 기간 동안 매칭은 계속 진행됩니다. 다만, 연인이 생긴 경우에는 소개가 중단됩니다.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-eum-accent/30 transition-colors">
                    <h3 className="text-lg font-bold text-eum-dark mb-2">Q. 소개는 얼마나 자주 오나요?</h3>
                    <p className="text-base text-gray-600 leading-relaxed font-medium">
                        보통 5~7일 간격으로 1명을 기본으로 제안합니다. 상황에 따라 간격은 달라질 수 있습니다.
                    </p>
                </div>
             </div>
        </div>
      </section>

      <div className="relative bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </>
  );
};

export default Home;
