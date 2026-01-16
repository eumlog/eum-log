import React from 'react';
import PageHeader from '../ui/PageHeader';
import Footer from '../sections/Footer';
import { Instagram, ArrowRight, Lock, MapPin } from 'lucide-react';

const InstagramMain: React.FC = () => {
  const regions = [
    {
      id: 'gj',
      name: '광주 · 전남',
      status: 'active',
      desc: '공식 인스타그램으로 연결됩니다.',
      link: 'https://www.instagram.com/e.um_log/'
    },
    {
      id: 'dg',
      name: '대구 · 경북',
      status: 'preparing',
      desc: '채널 준비 중입니다.',
      link: '#'
    },
    {
      id: 'bs',
      name: '부산 · 경남',
      status: 'preparing',
      desc: '채널 준비 중입니다.',
      link: '#'
    },
    {
      id: 'dj',
      name: '대전 · 충청',
      status: 'preparing',
      desc: '채널 준비 중입니다.',
      link: '#'
    }
  ];

  return (
    <div className="bg-eum-bg min-h-screen">
      <PageHeader 
        title="인스타그램" 
        subtitle="Our Community" 
      />

      <section className="py-24 px-6 bg-eum-bg">
        <div className="max-w-[900px] mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-eum-dark mb-4">지역을 선택해주세요</h2>
            <p className="text-gray-600 text-base md:text-lg">
              각 지역별 소식과 매칭 후기를 확인하실 수 있습니다.
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
                  if (region.status !== 'active') e.preventDefault();
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-full ${region.status === 'active' ? 'bg-gradient-to-tr from-[#f09433] to-[#bc1888] text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <Instagram className="w-5 h-5" />
                  </div>
                  {region.status === 'active' ? (
                    <div className="bg-eum-accent/10 text-eum-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Active
                    </div>
                  ) : (
                     <div className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Soon
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

export default InstagramMain;