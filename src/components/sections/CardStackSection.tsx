import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MapPin, ShieldCheck, Users } from 'lucide-react';
import { IMAGES } from '../../lib/assets';

const CardStackSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Define data inside to catch latest IMAGES values
  const cardsData = [
    {
      id: 1,
      num: '01',
      title: '지역의 연결',
      subtitle: 'GWANGJU & JEONNAM FIRST',
      desc: '물리적 거리는 마음의 거리와도 같습니다. 이음로그는 광주와 전남 지역을 기반으로 시작하여, 실제로 만날 수 있는 현실적인 인연을 최우선으로 고려합니다. 막연한 장거리 매칭보다는 내 곁의 인연을 찾아드립니다.',
      icon: <MapPin className="w-3 h-3" />,
      action: '서비스 지역 확인',
      img: IMAGES.card1,
      filter: 'grayscale-[50%] brightness-[0.8]'
    },
    {
      id: 2,
      num: '02',
      title: '검증된 만남',
      subtitle: 'IDENTITY & TRUST',
      desc: '서류 인증을 통해 신원이 확실한 분들만 모십니다. 직업, 가치관, 라이프스타일 등 깊이 있는 인터뷰와 심사를 통과한 분들과의 만남. 단순 조건 매칭 그 이상의 결을 맞추는 데 집중합니다.',
      icon: <ShieldCheck className="w-3 h-3" />,
      action: '인증 절차 안내',
      img: IMAGES.card2,
      filter: 'grayscale-[30%]'
    },
    {
      id: 3,
      num: '03',
      title: '프라이빗 매칭',
      subtitle: 'PRIVATE 1:1 DATE',
      desc: '불특정 다수에게 프로필이 공개되지 않습니다. 매니저가 엄선한 단 한 사람에게만 당신의 이야기가 전달됩니다. 소개팅의 설렘과 프라이빗한 안정감을 동시에 제공하며, 지인 차단 시스템으로 안심할 수 있습니다.',
      icon: <Users className="w-3 h-3" />,
      action: '매칭 프로세스',
      img: IMAGES.card3,
      filter: 'brightness-[0.7]'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        const nextCard = cardsRef.current[i + 1];
        if (nextCard && card) {
          const inner = card.querySelector('.card-inner');
          
          gsap.to(inner, {
            scale: 0.92,
            opacity: 0.5,
            filter: 'blur(5px)',
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top bottom',
              end: 'top 10vh', 
              scrub: true
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[15vh] bg-white text-eum-dark relative">
      <div className="text-center mb-32 px-6">
        <div className="font-eng text-xs font-bold tracking-widest mb-4 opacity-50 text-eum-accent uppercase">
          E.UM LOG Philosophy
        </div>
        <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-eum-dark">
          우리가 잇는 방식
        </h2>
      </div>

      <div className="w-full max-w-[900px] mx-auto pb-[10vh] relative px-6">
        {cardsData.map((card, index) => (
          <div 
            key={card.id} 
            ref={el => { cardsRef.current[index] = el; }}
            className="sticky top-[12vh] h-[75vh] w-full flex items-center justify-center mb-[5vh]"
          >
            <div className="card-inner w-full h-full bg-white border border-gray-200 relative overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1fr] shadow-2xl group rounded-2xl">
              
              {/* Content Side */}
              <div className="p-10 md:p-12 flex flex-col justify-between bg-white z-10 order-2 md:order-1 relative">
                <div>
                  <div className="text-4xl font-eng mb-4 text-gray-100">{card.num}</div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-xs md:text-sm mt-2 text-eum-accent font-semibold tracking-wider uppercase">
                    {card.subtitle}
                  </p>
                </div>
                
                <div className="text-gray-600 font-normal leading-relaxed text-base md:text-lg keep-all mt-6 md:mt-0">
                  {card.desc}
                </div>
                
                <div className="mt-8 md:mt-0 flex items-center gap-2 text-xs font-bold border-b border-gray-200 pb-2 w-max text-gray-500 cursor-pointer hover:text-eum-dark transition-colors">
                  {card.icon}
                  {card.action}
                </div>
              </div>

              {/* Image Side */}
              <div className="relative w-full h-full overflow-hidden order-1 md:order-2 h-[35%] md:h-full border-b md:border-b-0 md:border-l border-gray-100">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className={`w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 ${card.filter}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardStackSection;