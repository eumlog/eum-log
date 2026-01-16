import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ClipboardList, PenLine, UserCheck } from 'lucide-react';

const FloatingBanner: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 flex flex-col bg-[#1C1C1C]/85 backdrop-blur-2xl rounded-l-xl md:rounded-l-2xl shadow-[0_10px_50px_rgba(0,0,0,0.4)] border-l border-y border-white/10 overflow-hidden transition-all duration-300 hover:bg-[#1C1C1C]/95">
      
      {/* 1. 멤버십 안내 */}
      <Link 
        to="/pricing" 
        className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] border-b border-white/5 hover:bg-eum-accent transition-all duration-300"
      >
        <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" />
        <span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">
          멤버십<br className="md:hidden"/> 안내
        </span>
      </Link>

      {/* 2. 진행방식 */}
      <Link 
        to="/service" 
        className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] border-b border-white/5 hover:bg-eum-accent transition-all duration-300"
      >
        <ClipboardList className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" />
        <span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">
          진행방식
        </span>
      </Link>

      {/* 3. 가입기준 */}
      <Link 
        to="/criteria" 
        className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] border-b border-white/5 hover:bg-eum-accent transition-all duration-300"
      >
        <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" />
        <span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">
          가입기준
        </span>
      </Link>

      {/* 4. 신청하기 */}
      <Link 
        to="/apply" 
        className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] hover:bg-eum-accent transition-all duration-300"
      >
        <PenLine className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" />
        <span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">
          신청하기
        </span>
      </Link>

    </div>
  );
};

export default FloatingBanner;