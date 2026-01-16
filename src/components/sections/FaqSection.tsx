import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    q: "소개는 얼마나 자주 오나요?",
    a: "보통 5~7일 간격으로 1명을 기본으로 제안합니다. 상황에 따라 간격은 달라질 수 있습니다."
  },
  {
    q: "3개월 동안 정말 계속 소개해주나요?",
    a: "네. 구독 기간 동안 매칭은 계속 진행됩니다. 다만, 연인이 생긴 경우에는 소개가 중단됩니다."
  },
  {
    q: "상대도 저를 선택한 건가요?",
    a: "아닙니다. 이음로그는 상호 수락 구조입니다. 프로필은 동시에 공개되며, 한쪽만 원한다고 만남이 확정되지는 않습니다."
  },
  {
    q: "매칭이 아예 안 될 수도 있나요?",
    a: "가능성은 있습니다. 조건이 매우 제한적이거나, 사진·프로필 경쟁력이 낮은 경우 매칭까지 시간이 오래 걸릴 수 있습니다."
  },
  {
    q: "지인이 나올 가능성은 정말 없나요?",
    a: "프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인하여 지인을 사전에 차단합니다."
  },
  {
    q: "이런 분들은 맞지 않을 수 있습니다.",
    a: "빠른 만남을 원하시는 분\n\n많은 소개 자체를 기대하시는 분\n\n조건표 중심의 매칭을 원하시는 분\n\n이음로그는 속도보다 정확도를 우선합니다."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 bg-eum-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-eng text-xs font-bold tracking-widest mb-4 opacity-50 text-eum-accent uppercase">
            Q&A
          </div>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-eum-dark">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-300 pb-4"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-eum-dark' : 'text-gray-500 group-hover:text-eum-dark'}`}>
                    Q. {item.q}
                </span>
                <div className="text-gray-400">
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pb-6 text-gray-600 font-medium leading-relaxed keep-all text-base md:text-lg whitespace-pre-line">
                    {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;