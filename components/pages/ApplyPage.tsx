
import React from 'react';
import PageHeader from '../ui/PageHeader';
import Footer from '../sections/Footer';
import { MapPin, ArrowRight, Lock } from 'lucide-react';

const ApplyPage: React.FC = () => {
  const regions = [
    {
      id: 'gj',
      name: '광주 · 전남',
      status: 'active',
      desc: '지금 바로 신청 가능합니다.',
      link: 'https://link.inpock.co.kr/e.um_log'
    },
    {
      id: 'dg',
      name: '대구 · 경북',
      status: 'preparing',
      desc: '오픈 준비 중입니다.',
      link: '#'
    },
    {
      id: 'bs',
      name: '부산 · 경남',
      status: 'preparing',
      desc: '오픈 준비 중입니다.',
      link: '#'
    },
    {
      id: 'dj',
      name: '대전 · 충청',
      status: 'preparing',
      desc: '오픈 준비 중입니다.',
      link: '#'
    }
  ];

  return (
    <div className="bg-eum-bg min-h-screen">
      <PageHeader 
        title="매칭 신청하기" 
        subtitle="Apply for Match" 
      />

      <section className="py-24 px-6 bg-eum-bg">
        <div className="max-w-[900px] mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-eum-dark mb-4">어디에 거주하시나요?</h2>
            <p className="text-gray-600 text-base md:text-lg">
              이음로그는 수도권이 아닌, <span className="text-eum-accent font-bold">지방 거점</span>을 중심으로 운영됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <a 
                key={region.id}
                href={region.status === 'active' ? region.link : undefined}
                target={region.status === 'active' ? "_blank" : undefined}
                rel={region.status === 'active' ? "noopener noreferrer" : undefined}
                className={`relative group p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[180px]
                  ${region.status === 'active' 
                    ? 'bg-white border-eum-dark hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                    : 'bg-gray-100 border-transparent cursor-not-allowed opacity-70'
                  }`}
                onClick={(e) => {
                  if (region.status !== 'active') {
                    e.preventDefault();
                  }
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-full ${region.status === 'active' ? 'bg-eum-dark text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  {region.status === 'active' ? (
                    <div className="bg-eum-accent/10 text-eum-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Open
                    </div>
                  ) : (
                     <div className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Coming Soon
                    </div>
                  )}
                </div>

                <div>
                  <h3 className={`text-xl font-bold mb-2 ${region.status === 'active' ? 'text-eum-dark' : 'text-gray-400'}`}>
                    {region.name}
                  </h3>
                  <p className={`text-xs font-medium ${region.status === 'active' ? 'text-eum-accent' : 'text-gray-400'}`}>
                    {region.desc}
                  </p>
                </div>

                {region.status === 'active' && (
                  <div className="absolute bottom-6 right-8 bg-eum-dark text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </a>
            ))}
          </div>

        </div>
      </section>

      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default ApplyPage;
