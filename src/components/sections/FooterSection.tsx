import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../lib/assets';

const FooterSection: React.FC = () => {
  return (
    <div id="contact" className="relative w-full h-full flex flex-col justify-center items-center footer-content py-20">
      <div className="relative z-10 text-center px-4 w-full">
        <div className="font-eng text-base md:text-lg font-bold tracking-[0.2em] mb-6 mt-8 text-gray-500 uppercase">
          만남을 시작하세요
        </div>
        
        <Link 
          to="/apply" 
          className="group relative inline-block"
        >
          <span className="block font-sans text-5xl md:text-7xl font-black leading-none text-white group-hover:text-gray-400 transition-colors tracking-tighter">
            매칭 신청하기
          </span>
          <span className="block text-sm md:text-lg font-medium text-gray-500 mt-6 group-hover:text-white transition-colors flex items-center justify-center gap-1">
            지금 바로 프로필 등록하기 <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-24 text-sm font-semibold tracking-wider text-gray-400">
          <Link to="/instagram" className="hover:text-white transition-colors">인스타그램</Link>
          <a href="https://pf.kakao.com/_Cxfxcxon" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">카카오톡 문의</a>
          <Link to="/faq" className="hover:text-white transition-colors">자주 묻는 질문</Link>
        </div>
        
        <div className="mt-20 w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-[10px] md:text-xs text-gray-600 font-medium px-8 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
             <p>© 2025 E.UM LOG. All Rights Reserved.</p>
             <Link to="/admin" className="opacity-10 hover:opacity-100 hover:text-white transition-all duration-300 ml-4">
                Admin
             </Link>
          </div>
          <p className="text-center md:text-right leading-relaxed">
            이음로그 전남 순천시 충효로 15 | 사업자등록번호: 671-14-02393<br className="md:hidden"/> 
            대표자 : 임상현 | E-MAIL: mono5686@naver.com
          </p>
        </div>
      </div>
      
      <img 
        src={IMAGES.footerTexture}
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none grayscale"
        alt="Texture"
      />
    </div>
  );
};

export default FooterSection;