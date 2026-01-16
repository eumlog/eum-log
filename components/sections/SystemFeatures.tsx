
import React, { useEffect, useRef } from 'react';
/* Fix: Added Coins and removed unused Calendar from lucide-react imports */
import { Shield, MessageCircle, Coins } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IMAGES } from '../../constants/assets';

const SystemFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade In Content
      gsap.fromTo('.feature-content', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );

      // Stagger List Items
      gsap.from('.feature-item', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-12 pb-24 md:pt-20 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6">
        
        <div className="feature-content grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left: Clean Image */}
            <div className="relative h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.systemFeatures} 
                alt="E.UM LOG Promise" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              
              <div className="absolute bottom-10 left-10 text-white">
                 <p className="font-eng text-base font-bold tracking-widest uppercase mb-3 text-eum-accent">Private & Premium</p>
                 <p className="font-sans text-2xl font-bold leading-snug">3개월 동안,<br/>괜찮은 인연이 나타날 때까지 소개합니다.</p>
              </div>
            </div>

            {/* Right: Clean List (3 Promises) */}
            <div className="lg:pl-6">
               <div className="mb-10">
                  <h2 className="font-eng text-base font-bold tracking-widest text-eum-accent uppercase mb-4">Why E.UM LOG?</h2>
                  <h3 className="font-sans text-3xl md:text-4xl font-bold text-eum-dark leading-tight">
                    이음로그만의 <br/>
                    <span className="text-eum-accent">특별한 3가지 약속</span>
                  </h3>
               </div>

               <div className="space-y-10">
                   {/* Promise 1 */}
                   <div className="feature-item flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300">
                         <Shield className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-gray-900 mb-2">철저한 지인 차단</h4>
                         <p className="text-gray-600 leading-relaxed font-medium text-base break-keep">
                            프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인합니다.
                         </p>
                      </div>
                   </div>

                   {/* Promise 2 */}
                   <div className="feature-item flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300">
                         <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-gray-900 mb-2">1:1 카톡 상담</h4>
                         <p className="text-gray-600 leading-relaxed font-medium text-base break-keep">
                            카톡으로 5~10분간 선택한 필수 조건들에 대해 상담합니다.
                         </p>
                      </div>
                   </div>

                   {/* Promise 3 */}
                   <div className="feature-item flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300">
                         <Coins className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-gray-900 mb-2">3개월 구독제</h4>
                         <p className="text-gray-600 leading-relaxed font-medium text-base break-keep">
                            단순히 횟수만 채우는 만남이 아닙니다. 인연이 나타날 때까지 지속적으로 소개합니다.
                         </p>
                      </div>
                   </div>
               </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default SystemFeatures;
