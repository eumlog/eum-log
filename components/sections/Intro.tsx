
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { X, Check } from 'lucide-react';

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".intro-fade", {
         y: 30,
         opacity: 0,
         duration: 1,
         stagger: 0.2,
         scrollTrigger: {
           trigger: containerRef.current,
           start: "top 70%",
         }
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 md:pt-32 pb-0 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Text Content */}
        <div className="text-center mb-16 intro-fade max-w-3xl mx-auto">
            <div className="font-eng text-base font-bold tracking-widest text-eum-accent uppercase mb-4">
                Our Method
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold leading-tight text-eum-dark keep-all">
                소개팅 앱 안 해요.<br className="hidden md:block" /> 결정사는 부담스럽고요.
            </h2>
            <p className="mt-6 text-xl text-gray-600 font-medium">
                알고 있습니다. 그래서 이렇게 합니다.
            </p>
        </div>

        {/* Comparison Table */}
        <div className="intro-fade grid md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-xl">
            {/* Left: Traditional Agencies */}
            <div className="bg-gray-50 p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-400 mb-10 text-left">결혼정보회사</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4 text-gray-400">
                        <X className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-xl font-bold mb-1">가입비 수백만원</span>
                            <span className="text-base">초기 비용 부담이 매우 큼</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-gray-400">
                        <X className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-xl font-bold mb-1">횟수 채우면 끝</span>
                            <span className="text-base">만남의 질보다 횟수 차감이 우선</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-gray-400">
                        <X className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-xl font-bold mb-1">기계적 매칭</span>
                            <span className="text-base">등급표에 따른 단순 조건 연결</span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Right: E.UM LOG */}
            <div className="bg-[#1C1C1C] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                <div>
                    <h3 className="text-2xl font-bold text-eum-accent mb-10 text-left">이음로그</h3>
                    <ul className="space-y-6 relative z-10">
                        <li className="flex items-start gap-4">
                            <div className="bg-eum-accent/20 p-1 rounded-full mt-1">
                                <Check className="w-5 h-5 text-eum-accent flex-shrink-0" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold mb-1">월 4~6만원대</span>
                                <span className="text-base text-gray-400 font-medium">3개월 멤버십으로 합리적인 시작</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-eum-accent/20 p-1 rounded-full mt-1">
                                <Check className="w-5 h-5 text-eum-accent flex-shrink-0" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold mb-1">무제한 소개</span>
                                <span className="text-base text-gray-400 font-medium">횟수 제한 없이, 맞는 사람 나올 때까지</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-eum-accent/20 p-1 rounded-full mt-1">
                                <Check className="w-5 h-5 text-eum-accent flex-shrink-0" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold mb-1">1:1 수동 매칭</span>
                                <span className="text-base text-gray-400 font-medium">지역 거점 기반, 매니저가 직접 상담 후 연결</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="intro-fade text-center mt-12 md:mt-16 mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-eum-dark leading-relaxed keep-all">
                우리는 넓게 연결하지 않습니다.<br />
                <span className="text-eum-accent">지금 이 지역에서, 실제로 만날 수 있는 사람만 연결합니다.</span>
            </h3>
        </div>

      </div>
    </section>
  );
};

export default Intro;
