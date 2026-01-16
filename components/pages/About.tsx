
import React from 'react';
import PageHeader from '../ui/PageHeader';
import Footer from '../sections/Footer';
import { Shield, Heart, Coins, MapPin, UserCheck, MessageCircle, Infinity as InfinityIcon } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="이음로그 이야기" 
        subtitle="About Us" 
      />
      
      {/* 1. Intro Section */}
      <section className="py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-eum-bg text-eum-accent text-xs font-bold tracking-widest uppercase mb-6">
                Identity
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-eum-dark mb-8 leading-tight keep-all">
                수도권이 아닌<br />
                <span className="text-eum-accent">지역 기반 1:1 매칭</span>
            </h2>
            <div className="w-12 h-1 bg-eum-dark mx-auto mb-10"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-loose keep-all font-medium">
                앱처럼 가볍지도,<br />
                결혼정보회사처럼 부담스럽지도 않은 방식.<br /><br />
                지역 안에서,<br />
                진지하게 만날 사람을 찾는 분들을 위한 서비스입니다.<br /><br />
                <span className="bg-eum-bg px-2 py-1 rounded-lg text-eum-dark font-bold">월 4~6만 원대의 비용</span>으로<br className="md:hidden" />
                3개월 동안 횟수 제한 없이 매칭을 진행합니다.
            </p>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-eum-dark">왜 이음로그를 선택하나요?</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">지인 걱정 없는 만남</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed keep-all">
                        매칭 전 지인 차단을 먼저 진행합니다.<br/>
                        아는 사람을 만날 가능성을 최대한 줄였습니다.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-400">
                        <MapPin className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">지역에 맞는 만남</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed keep-all">
                        같은 생활권 안에서 만날 수 있는 분들 위주로 연결합니다.<br/>
                        거리 때문에 흐지부지되는 만남을 줄였습니다.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-eum-accent text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">Best</div>
                    <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-500">
                        <Coins className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">부담 없는 비용</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed keep-all">
                        결정사처럼 수백만원을 내지 않아도 됩니다.<br/>
                        월 4~6만원으로 3개월간 인연이 나타날 때까지 계속 소개받습니다.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Process Summary */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-16">
                 <span className="font-eng text-eum-accent font-bold tracking-widest text-xs uppercase block mb-2">Process</span>
                 <h3 className="text-2xl md:text-3xl font-bold text-eum-dark">이렇게 진행됩니다</h3>
            </div>

            <div className="space-y-12 relative">
                <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-100 hidden md:block"></div>

                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-eum-dark text-white flex items-center justify-center font-bold text-lg shadow-lg">01</div>
                    <div className="flex-1 text-left pl-4 md:pl-0">
                        <div className="flex items-center justify-start gap-2 mb-2">
                             <UserCheck className="w-5 h-5 text-eum-accent" />
                             <h4 className="text-xl font-bold text-gray-900">신원 확인 및 카톡 상담</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed keep-all">
                            기본적인 신원을 확인한 후, <br />
                            카톡으로 5~10분간 선택한 필수 조건들에 대해 상담합니다.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-eum-dark text-eum-dark flex items-center justify-center font-bold text-lg shadow-lg">02</div>
                    <div className="flex-1 text-left pl-4 md:pl-0">
                        <div className="flex items-center justify-start gap-2 mb-2">
                             <Shield className="w-5 h-5 text-eum-accent" />
                             <h4 className="text-xl font-bold text-gray-900">지인 차단 및 매칭</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed keep-all">
                            프로필 제공 전, 상대방의 <strong className="text-eum-dark font-bold">‘초성/나이/지역’</strong>을 통해 <br />
                            지인 여부를 미리 확인하고 맞춤 이상형 매칭을 시작합니다.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-eum-dark text-eum-dark flex items-center justify-center font-bold text-lg shadow-lg">03</div>
                    <div className="flex-1 text-left pl-4 md:pl-0">
                        <div className="flex items-center justify-start gap-2 mb-2">
                             <InfinityIcon className="w-5 h-5 text-eum-accent" />
                             <h4 className="text-xl font-bold text-gray-900">무제한 프로필 제공</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed keep-all">
                            3개월 동안 횟수 제한 없이 <br />
                            인연이 나타날 때까지 계속 함께합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Honest Truth (Dark Section) */}
      <section className="py-24 px-6 bg-[#1C1C1C] text-white text-center">
        <div className="max-w-[800px] mx-auto">
            <Heart className="w-10 h-10 text-eum-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-8">솔직하게 말씀드리면</h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-medium keep-all text-base md:text-lg">
                <p>
                    이음로그는 빠른 만남을 원하는 분들보다는<br/>
                    조금 느리더라도 진지한 인연을 찾는 분들께 더 잘 맞습니다.
                </p>
                <p>
                    서로를 알아갈 준비가 되어 있고,<br/>
                    현실적인 기준으로 만남을 생각하신다면<br/>
                    저희가 옆에서 함께하겠습니다.
                </p>
                <p className="pt-6 border-t border-white/10 text-white font-bold">
                    "3개월이라는 시간 동안,<br/>
                    한 번의 가벼운 만남이 아닌 의미 있는 인연을 목표로 합니다."
                </p>
            </div>
        </div>
      </section>

      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default About;
