import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles, MessageSquare, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../lib/assets';

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      step: "01",
      title: "기본 신청서 작성",
      subtitle: "아주 간단하게 시작!",
      content: (
          <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed keep-all font-medium">
                  인스타 프로필 링크로 접수합니다.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <span className="text-[11px] font-black text-eum-accent uppercase tracking-wider block mb-4">[ 기입 항목 예시 ]</span>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-500 font-bold">
                    <div className="flex items-center gap-2">나이 / 직업 / 거주지</div>
                    <div className="flex items-center gap-2">키 / 결혼 희망시기 등</div>
                  </div>
              </div>
          </div>
      ),
      img: IMAGES.processStep1
    },
    {
      step: "02",
      title: "2차 설문지 작성",
      subtitle: "정밀한 매칭을 위한 준비",
      content: (
          <div className="space-y-5">
              <p className="text-gray-600 text-lg leading-relaxed keep-all font-medium">
                  카톡 상담 전, 더 정밀한 매칭을 위해 2차 설문지를 링크로 안내드립니다.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block">✍️ 항목 예시</span>
                  <ul className="space-y-2.5">
                    {[
                      "이상형 조건 (키, 나이, 성격, 연봉 등)",
                      "사진 4장 (얼굴 3장 + 전신 1장)",
                      "흡연 여부 / 종교 / 자녀 계획 등"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-[14px] text-gray-600 font-medium">
                        <div className="w-1 h-1 bg-eum-accent rounded-full"></div> {text}
                      </li>
                    ))}
                  </ul>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-gray-400 bg-gray-50 p-3 rounded-lg leading-relaxed">
                <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <p>이 정보는 상대에게 전달되는 프로필 카드에 일부 반영되며, 매니저가 더 정확한 매칭을 위해 참고합니다.</p>
              </div>
          </div>
      ),
      img: IMAGES.processStep2
    },
    {
      step: "03",
      title: "1:1 카톡 상담",
      subtitle: "진짜 원하는 사람을 파악해요",
      content: (
          <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed keep-all font-medium">
                  카톡으로 5~10분간 선택한 필수 조건들에 대해 상담합니다.
              </p>
              <div className="flex items-center gap-4 bg-eum-accent/5 p-5 rounded-2xl border border-eum-accent/10">
                  <MessageSquare className="w-5 h-5 text-eum-accent" />
                  <span className="text-sm font-bold text-eum-accent leading-snug">원하는 조건들을 하나씩 짚어보며 실제 매칭 가능성을 높이는 소통의 시간입니다.</span>
              </div>
          </div>
      ),
      img: IMAGES.processStep3
    },
    {
      step: "04",
      title: "지인 차단 및 매칭",
      subtitle: "안심할 수 있는 매칭의 시작",
      content: (
          <div className="space-y-5">
              <p className="text-gray-600 text-lg leading-relaxed keep-all font-medium">
                  1:1 상담이 끝나면 프로필 제공 전, <strong className="text-eum-dark">‘지인 차단 시스템’</strong>을 통해 지인 여부를 미리 확인하고 프로필 카드를 제공합니다.
              </p>
              <div className="bg-eum-dark text-white p-6 rounded-3xl shadow-inner relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 bg-eum-accent rounded-full"></div>
                    <span className="text-[10px] font-bold text-eum-accent tracking-widest uppercase">지인 차단 시스템 작동 방식</span>
                  </div>
                  <ul className="space-y-3 text-[13px] font-mono relative z-10">
                      <li className="flex justify-between items-center py-1 text-eum-accent font-black scale-105">
                          <span>ㄱㅁㅅ / 92 / 광양</span> <span className="text-[9px] bg-eum-accent text-white px-2 rounded">진짜 상대</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-white/10 opacity-40">
                          <span>ㅈㅇㅎ / 95 / 순천</span> <span className="text-[9px] border border-white/20 px-1.5 rounded">랜덤</span>
                      </li>
                      <li className="flex justify-between items-center pt-2 opacity-40">
                          <span>ㄱㅎㄴ / 93 / 여수</span> <span className="text-[9px] border border-white/20 px-1.5 rounded">랜덤</span>
                      </li>
                  </ul>
              </div>
              <p className="text-[14px] text-gray-500 font-bold leading-relaxed keep-all bg-gray-50 p-4 rounded-xl border border-gray-100">
                💡 프로필 제공 전, 상대방의 <span className="text-eum-dark font-black">‘초성/나이/지역’</span>을 통해 지인 여부를 미리 확인합니다. 지인이라면 즉시 새로운 매칭을 진행해 드립니다.
              </p>
          </div>
      ),
      img: IMAGES.processStep4
    },
    {
      step: "05",
      title: "프로필 카드 제공",
      subtitle: "수락 시 매칭 확정!",
      content: (
          <div className="space-y-5">
              <div className="space-y-4">
                  <p className="text-gray-600 text-base leading-relaxed keep-all font-medium">
                    ① 매니저가 꼭 맞는 1명의 프로필 카드를 5~7일마다 제공합니다.<br/>
                    ② 프로필 확인 후, 상호 수락 시 → 🎉 매칭 성공!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-eum-dark text-white text-[11px] font-bold px-3 py-1 rounded-full">[3개월] 동안</span>
                    <span className="bg-eum-dark text-white text-[11px] font-bold px-3 py-1 rounded-full">[최소 12회] 제공 보장</span>
                  </div>
              </div>
              <div className="p-5 bg-blue-50 text-blue-600 text-[13px] font-bold rounded-2xl border border-blue-100 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="keep-all font-bold text-sm">실제 커플이 될 때까지 3개월 내내 프로필 제공이 계속 진행됩니다.</span>
                  </div>
              </div>
              <p className="text-[11px] text-gray-400 font-bold">* 서로 수락 시 만남이 확정되며 매칭비는 별도입니다.</p>
          </div>
      ),
      img: IMAGES.processStep5
    },
    {
      step: "06",
      title: "소개팅 확정 & 진행",
      subtitle: "설레는 첫 만남",
      content: (
          <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.03)] text-center">
                <p className="text-gray-900 text-lg md:text-xl leading-relaxed keep-all font-bold">
                  서로 수락 시 매니저가 <strong className="text-eum-accent font-black">시간과 장소를 직접 조율</strong>하고 <strong className="text-eum-dark font-black">카톡방을 연결</strong>해 드립니다.
                </p>
              </div>
          </div>
      ),
      img: IMAGES.processStep6
    },
    {
      step: "07",
      title: "소개팅 후 피드백 제공",
      subtitle: "지속적인 성공률 UP",
      content: (
          <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed keep-all font-medium">
                  소개팅 종료 후, 상대방 피드백을 바탕으로 매니저가 개선 팁이나 조언을 전달드립니다.
              </p>
              <div className="bg-eum-bg/50 p-5 rounded-2xl border border-gray-200/50 flex items-center gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 italic leading-snug keep-all">💡 피드백은 다음 매칭 때 반영돼 성공률을 높이는 데 큰 도움이 됩니다.</span>
              </div>
          </div>
      ),
      img: IMAGES.processStep7
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.process-card');
      cards.forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 bg-eum-bg">
      <div className="max-w-2xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-eum-dark tracking-tighter leading-tight">
          이음로그 진행 방식
        </h2>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed keep-all font-medium max-w-lg mx-auto">
            이미지와 상세 설명을 통해<br/>
            이음로그만의 <span className="text-eum-accent font-bold">7단계 프리미엄 프로세스</span>를 확인해보세요.
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-20 relative">
        {/* Connecting Line (Background) */}
        <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent z-0 hidden md:block"></div>

        {steps.map((item, index) => (
          <div key={index} className="process-card relative z-10">
            
            {/* Step Number Badge */}
            <div className="hidden md:flex absolute -left-12 top-0 l-10 w-10 h-10 bg-eum-dark text-white rounded-full items-center justify-center font-bold text-sm shadow-xl border-4 border-eum-bg">
              {item.step}
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-white p-8 md:p-10 transition-all duration-500 group">
              
              {/* 1. TITLE AREA (Above Image) */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                   <div className="h-[2px] w-8 bg-eum-accent/30"></div>
                   <span className="text-eum-accent text-[11px] font-black tracking-[0.2em] uppercase">
                     {item.subtitle}
                   </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-eum-dark tracking-tight flex items-center gap-3">
                  <span className="md:hidden flex-shrink-0 w-8 h-8 bg-eum-dark text-white rounded-full flex items-center justify-center text-xs">{item.step}</span>
                  {item.title}
                </h3>
              </div>

              {/* 2. IMAGE AREA (Middle) */}
              <div className="w-full aspect-[4/3] md:aspect-video bg-gray-50 relative overflow-hidden rounded-[2rem] mb-10 shadow-sm border border-gray-100/50">
                 <img 
                   src={item.img} 
                   alt={item.title} 
                   className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* 3. CONTENT AREA (Bottom) */}
              <div className="text-gray-600">
                  {item.content}
              </div>
            </div>

            {/* Arrow Indicator (Mobile only) */}
            {index !== steps.length - 1 && (
              <div className="flex justify-center mt-12 md:hidden">
                 <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100">
                    <ArrowDown className="w-5 h-5 text-gray-300 animate-bounce" />
                 </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-32">
         <p className="text-gray-400 mb-8 font-black uppercase tracking-[0.3em] text-[10px]">Ready to meet someone new?</p>
         <Link to="/apply" className="group relative inline-flex items-center justify-center px-16 py-6 bg-eum-dark text-white font-black rounded-full shadow-2xl overflow-hidden transition-all hover:bg-black active:scale-95">
            <span className="relative z-10 flex items-center gap-3 text-lg">
                지금 바로 신청하기 <Sparkles className="w-6 h-6" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-eum-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
         </Link>
      </div>
    </section>
  );
};

export default ProcessSection;