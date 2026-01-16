import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-white">
      
      <div className="py-24 px-6 max-w-[900px] mx-auto">
        {/* 1. Header & Description */}
        <div className="text-center mb-12">
          <h2 className="font-eng text-4xl md:text-5xl font-bold text-eum-accent mb-4">
            Membership
          </h2>
          <h3 className="font-sans text-3xl font-bold text-gray-900 leading-tight">
            3개월 구독제<br />
            <span className="text-lg font-normal text-gray-500 block mt-2">【 최소 12명 프로필 제공 】</span>
          </h3>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            합리적인 비용으로 시작하는 1:1 매칭.<br />
            원하는 조건과 이상형에 맞춰, 검증된 인연을 소개해드립니다.
          </p>
        </div>

        {/* 2. Conditions Section (Dark) */}
        <div className="max-w-[800px] mx-auto mb-20">
          <div className="bg-[#1C1C1C] rounded-[2rem] p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-10">조건</h3>
                
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 text-gray-300 font-medium text-lg md:text-xl">
                    {['나이', '지역', '키', '흡연여부', '종교', '직업', '연봉', '학력', '자녀계획'].map((item, i) => (
                        <span key={i} className="hover:text-white transition-colors">{item}</span>
                    ))}
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-sm md:text-base text-gray-300 leading-relaxed border border-white/5">
                    위 조건들 중 <span className="text-eum-accent font-bold">가장 중요한 항목을 선택</span>하시면,<br className="hidden md:block" />
                    해당 조건을 중심으로 최적의 상대를 매칭해드립니다.
                </div>
             </div>
          </div>
        </div>

        {/* 3. Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-24">
          {/* Basic Plan */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex flex-col">
            <div className="mb-8">
                 <span className="inline-block bg-[#F0F0EB] text-[#8E7F70] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest mb-4 uppercase">
                    Most Popular
                 </span>
                 <h4 className="text-2xl font-bold text-gray-900">베이직</h4>
                 <p className="text-gray-500 text-sm mt-3 font-medium">가장 많은 분들이 선택한<br/>합리적 플랜</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-4 text-gray-700 text-sm">
                <Check className="w-4 h-4 text-gray-300" />
                <span>3개월 무제한 소개</span>
              </li>
               <li className="flex items-center gap-4 text-gray-900 font-bold text-sm bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-eum-accent" />
                <span>[조건 2개] 우선 보장</span>
              </li>
            </ul>

            <div className="mt-auto bg-gray-50 rounded-2xl p-6 space-y-3">
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm font-bold">남성</span>
                  <span className="text-lg font-bold text-gray-900">180,000원</span>
               </div>
               <div className="w-full h-px bg-gray-200"></div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm font-bold">여성</span>
                  <span className="text-lg font-bold text-gray-900">120,000원</span>
               </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-eum-accent/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex flex-col">
             <div className="mb-8">
                 <span className="inline-block bg-eum-accent text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest mb-4 uppercase">
                    Premium
                 </span>
                 <h4 className="text-2xl font-bold text-eum-accent">프리미엄</h4>
                 <p className="text-gray-500 text-sm mt-3 font-medium">조건을 좁혀 선별하는<br/>매칭 플랜</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-4 text-gray-700 text-sm">
                <Check className="w-4 h-4 text-gray-300" />
                <span>3개월 무제한 소개</span>
              </li>
               <li className="flex items-center gap-4 text-eum-accent font-bold text-sm bg-eum-accent/5 p-3 rounded-lg">
                <Check className="w-4 h-4 text-eum-accent" />
                <span>[조건 5개] 완벽 보장</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700 text-[13px]">
                 <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                 <span className="font-medium">실패 시, 6:6 소개팅 참가권 증정</span>
              </li>
            </ul>

            <div className="mt-auto bg-eum-accent/5 rounded-2xl p-6 space-y-3 border border-eum-accent/10">
               <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm font-bold">남성</span>
                  <span className="text-lg font-bold text-eum-accent">360,000원</span>
               </div>
               <div className="w-full h-px bg-eum-accent/10"></div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm font-bold">여성</span>
                  <span className="text-lg font-bold text-eum-accent">240,000원</span>
               </div>
            </div>
          </div>
        </div>

        {/* 4. Matching Fee Table Section */}
        <div className="max-w-[900px] mx-auto">
          <div className="bg-gray-100 rounded-[2rem] p-10 md:p-12 text-gray-800 shadow-inner">
                <h3 className="text-xl font-bold text-center mb-3">매칭 성사비</h3>
                <p className="text-center text-gray-500 text-sm mb-12">만남을 수락했을 때만 발생합니다.</p>
                
                <div className="grid md:grid-cols-2 gap-10 md:divide-x md:divide-gray-300">
                   <div>
                      <h4 className="text-center text-base font-bold text-eum-accent mb-6 pb-2 border-b border-gray-300 inline-block w-full">남성 매칭비</h4>
                      <div className="space-y-4 text-sm px-2 md:px-8">
                         <div className="flex justify-between items-center"><span className="text-gray-500">25세 이하</span><span className="font-bold">20,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">26-30세</span><span className="font-bold">30,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">31-34세</span><span className="font-bold">40,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">35-38세</span><span className="font-bold">50,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">38세 이상</span><span className="font-bold">60,000원</span></div>
                      </div>
                   </div>
                   <div className="md:pl-10">
                      <h4 className="text-center text-base font-bold text-[#FF6B6B] mb-6 pb-2 border-b border-gray-300 inline-block w-full">여성 매칭비</h4>
                      <div className="space-y-4 text-sm px-2 md:px-8">
                         <div className="flex justify-between items-center"><span className="text-gray-500">25세 이하</span><span className="font-bold">20,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">26-28세</span><span className="font-bold">30,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">29-31세</span><span className="font-bold">40,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">32-34세</span><span className="font-bold">50,000원</span></div>
                         <div className="flex justify-between items-center"><span className="text-gray-500">35세 이상</span><span className="font-bold">60,000원</span></div>
                      </div>
                   </div>
                </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;