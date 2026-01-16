
import React from 'react';
import SplitText from '../ui/SplitText';

const FinalMessage: React.FC = () => {
  return (
    <section className="py-40 bg-eum-bg text-center flex flex-col items-center justify-center relative z-10 px-6">
      <h2 className="font-sans text-3xl md:text-5xl mb-8 font-bold tracking-tight text-eum-dark">
        <SplitText>당신의 계절을 기다립니다</SplitText>
      </h2>
      
      <div className="max-w-xl text-gray-600 font-medium mb-12 leading-loose keep-all text-lg md:text-xl">
        이음로그는 단순한 소개팅 앱이 아닙니다.<br />
        당신의 가치를 알아봐 줄 단 한 사람을 위해<br />
        가장 정성스러운 방식으로 기록하고 연결합니다.
      </div>

      <div className="h-20 w-px bg-black/10"></div>
    </section>
  );
};

export default FinalMessage;
