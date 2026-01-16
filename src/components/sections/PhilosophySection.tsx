import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../../constants/assets';

const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-0 bg-[#F5F5F0] overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="md:w-1/2 px-6 md:pl-6 lg:pl-0">
              <div className="mb-8">
                  <span className="font-eng text-xs font-bold text-eum-accent tracking-widest uppercase mb-2 block">
                      Brand Philosophy
                  </span>
                  <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-[1.2] tracking-tight">
                      우리 지역에서,<br />
                      실제로 만날 수 있는 사람
                  </h2>
              </div>

              <p className="font-sans text-lg text-gray-700 leading-relaxed font-medium keep-all mb-10">
                  수도권 중심 매칭이 아닙니다.<br />
                  이음로그는 지역 거점 기준으로<br />
                  지금 이 생활권 안에서 만날 수 있는 person만 연결합니다.<br /><br />
                  알고리즘이 아닌,<br />
                  <span className="text-[#1C1C1C] font-bold">지역을 아는 매니저가 직접 1:1로 잇습니다.</span>
              </p>

              <div className="flex gap-8 border-t border-gray-300 pt-8">
                  <div>
                  <div className="font-eng text-xs font-bold text-gray-400 tracking-widest mb-1 uppercase">Base</div>
                  <div className="font-eng text-lg font-bold text-[#1C1C1C] tracking-wide uppercase">Local Regions</div>
                  </div>
                  <div>
                  <div className="font-eng text-xs font-bold text-gray-400 tracking-widest mb-1 uppercase">Service</div>
                  <div className="font-eng text-lg font-bold text-[#1C1C1C] tracking-wide uppercase">Private 1:1</div>
                  </div>
              </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 w-full h-[400px] md:h-[600px] relative">
              <div className="absolute inset-0 bg-gray-200 md:rounded-l-[3rem] overflow-hidden shadow-2xl">
                  <img 
                      src={IMAGES.philosophy} 
                      alt="Brand Philosophy" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  />
              </div>
          </div>
        </div>

        {/* Call to Action: 자세히보기 */}
        <div className="mt-16 md:mt-20 text-center md:text-left md:pl-6 lg:pl-0">
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-3 text-eum-dark hover:text-eum-accent transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-bold border-b-2 border-eum-dark/10 group-hover:border-eum-accent pb-1">
                이음로그 자세히보기
              </span>
              <div className="w-10 h-10 rounded-full border border-eum-dark/10 flex items-center justify-center group-hover:border-eum-accent group-hover:bg-eum-accent group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;