import React from 'react';
import PageHeader from '../ui/PageHeader';
import Footer from '../sections/Footer';
import { MessageCircle, Instagram, ExternalLink, Headset } from 'lucide-react';

const ContactMain: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <PageHeader 
        title="만남을 시작하세요" 
        subtitle="Contact Us" 
      />
      
      <div className="py-24 px-6 max-w-2xl mx-auto">
        {/* Customer Center Info Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-eum-dark text-white rounded-2xl mb-6 shadow-lg">
                <Headset className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-bold text-eum-dark mb-4">고객센터 안내</h3>
            <p className="text-gray-500 leading-relaxed keep-all font-medium text-lg">
                가장 편하신 방법으로 말을 걸어주세요.<br />
                매니저가 확인 후 상세히 안내해 드립니다.
            </p>
        </div>

        {/* Contact Cards Section */}
        <div className="space-y-5">
            {/* Kakao Card */}
            <a 
              href="https://pf.kakao.com/_Cxfxcxon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white hover:border-yellow-400/30 transition-all duration-500 relative overflow-hidden"
            >
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-[#FEE500] rounded-2xl flex items-center justify-center text-eum-dark shadow-sm group-hover:scale-110 transition-transform duration-500">
                            <MessageCircle className="w-8 h-8 fill-eum-dark" />
                        </div>
                        <div>
                            <span className="block text-xs font-black text-gray-400 mb-1 uppercase tracking-widest">KakaoTalk Channel</span>
                            <span className="block text-xl md:text-2xl font-black text-eum-dark">이음로그 상담톡</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-yellow-500 transition-colors">
                        <span className="text-xs font-bold hidden sm:block">바로 연결</span>
                        <ExternalLink className="w-5 h-5" />
                    </div>
                </div>
                {/* Subtle background decoration */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 group-hover:rotate-12">
                    <MessageCircle className="w-32 h-32" />
                </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://instagram.com/e.um_log" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white hover:border-pink-400/30 transition-all duration-500 relative overflow-hidden"
            >
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-500">
                            <Instagram className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="block text-xs font-black text-gray-400 mb-1 uppercase tracking-widest">Instagram</span>
                            <span className="block text-xl md:text-2xl font-black text-eum-dark">@e.um_log</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-pink-500 transition-colors">
                        <span className="text-xs font-bold hidden sm:block">바로 연결</span>
                        <ExternalLink className="w-5 h-5" />
                    </div>
                </div>
                <div className="absolute -right-6 -bottom-6 opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 group-hover:rotate-12">
                    <Instagram className="w-32 h-32" />
                </div>
            </a>
        </div>

        {/* Operating Hours Info */}
        <div className="mt-16 text-center bg-white/40 p-8 rounded-[2rem] border border-white/50">
            <div className="text-[11px] font-black text-eum-accent uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
                <div className="w-1 h-1 bg-eum-accent rounded-full"></div> 
                Business Hours
                <div className="w-1 h-1 bg-eum-accent rounded-full"></div>
            </div>
            <p className="text-lg font-bold text-gray-700">평일 10:00 - 19:00</p>
            <p className="text-sm text-gray-400 mt-2 font-medium">주말 및 공휴일 제외</p>
            <div className="mt-6 pt-6 border-t border-gray-200/50">
                <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
                    상담톡은 24시간 열려있으며,<br />
                    영업일 기준 매니저가 순차적으로 답변을 도와드립니다.
                </p>
            </div>
        </div>
      </div>
      
      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default ContactMain;