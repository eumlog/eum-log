
import React from 'react';
import { X, Check } from 'lucide-react';

const Criteria: React.FC = () => {
  return (
    <section id="criteria" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6">
        
        <div className="relative z-10 space-y-20">

            {/* 1. Selection Priorities (우선 선정) */}
            <div className="text-center md:text-left">
                <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-10 text-eum-dark">
                    이런 분들을<br/> 우선으로 선정합니다
                </h2>
                <ul className="space-y-6 max-w-2xl">
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <div>
                             <span className="text-gray-900 text-xl font-bold block mb-1 keep-all">
                                현재 생활권이 분명하고
                             </span>
                             <span className="text-gray-500 text-lg keep-all">
                                지역 내 실제 만남이 가능한 분
                             </span>
                         </div>
                    </li>
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <span className="text-gray-900 text-xl font-bold pt-0.5 keep-all">
                            기본적인 외모·스타일 관리가 되어 있는 분
                         </span>
                    </li>
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <div>
                             <span className="text-gray-900 text-xl font-bold block mb-1 keep-all">
                                연애를 할 시간과 여유가 있는 분
                             </span>
                             <span className="text-gray-500 text-base keep-all">
                                (일정·생활·금전적으로 무리 없는 상태)
                             </span>
                         </div>
                    </li>
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <span className="text-gray-900 text-xl font-bold pt-0.5 keep-all">
                            본인의 조건을 객관적으로 이해하는 분
                         </span>
                    </li>
                </ul>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            {/* 2. Who Is This For (추천 대상) */}
            <div>
                <div className="font-eng text-[10px] font-bold tracking-widest mb-4 text-eum-accent uppercase text-center md:text-left">
                    Who Is This For
                </div>
                <h3 className="text-2xl font-bold mb-8 text-eum-dark text-center md:text-left">이런 분께 추천드립니다</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { num: "01", text: "지역에서 괜찮은 사람을 찾기 어렵다고 느끼는 분" },
                        { num: "02", text: "지인 소개나 앱이 부담스러운 분" },
                        { num: "03", text: "결정사 비용은 부담되지만, 진지한 만남은 원하는 분" },
                        { num: "04", text: "빠른 만남보다, 차분한 관계를 원하시는 분" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col justify-between bg-[#F9F9F9] p-6 rounded-2xl border border-gray-100 hover:border-eum-accent/30 hover:shadow-lg transition-all duration-300 group">
                            <span className="font-eng font-bold text-gray-300 group-hover:text-eum-accent transition-colors text-2xl mb-3">{item.num}</span>
                            <span className="text-gray-700 font-bold leading-relaxed keep-all text-lg">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Not a Good Fit (맞지 않는 대상) */}
            <div>
                <div className="font-eng text-[10px] font-bold tracking-widest mb-4 text-gray-400 uppercase text-center md:text-left">
                    Not a Good Fit
                </div>
                <h3 className="text-2xl font-bold mb-8 text-eum-dark text-center md:text-left">이음로그와 맞지 않을 수 있습니다</h3>
                <div className="space-y-4">
                     {[
                         "현실적인 조건을 고려하지 않고 특정 외모·스펙만을 강하게 고집하는 경우",
                         "만남에 대한 준비보다 기대치만 높은 상태인 경우",
                         "가벼운 호기심, 유흥 목적의 만남을 원하는 경우",
                         "신원 확인이 어렵거나 무례한 언행, 반복적인 노쇼 이력이 있는 경우"
                     ].map((text, i) => (
                        <div key={i} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:bg-white hover:shadow-sm transition-all">
                            <X className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5 opacity-80" />
                            <span className="text-gray-600 font-medium leading-relaxed keep-all">{text}</span>
                        </div>
                     ))}
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Criteria;
