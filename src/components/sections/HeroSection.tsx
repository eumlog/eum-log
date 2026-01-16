import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { IMAGES } from '../../constants/assets';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animations
      const tl = gsap.timeline({ delay: 0.5 });
      
      // 1. Top Label
      tl.to('.hero-label', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      })
      // 2. Main Title (Staggered)
      .to('.hero-text-reveal', {
        y: 0,
        stagger: 0.2,
        duration: 1.4,
        ease: 'power3.out'
      }, '-=0.5')
      // 3. Subtitle
      .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      // 4. Scroll Indicator
      .to('.hero-scroll', {
        opacity: 1,
        duration: 1
      }, '-=0.5');

      // Parallax Effect
      gsap.to(imgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen relative flex items-center justify-center overflow-hidden">
      <img 
        ref={imgRef}
        src={IMAGES.heroBackground}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-110 grayscale-[20%]" 
        alt="Hero Background"
      />
      
      <div ref={textRef} className="relative z-10 text-center text-white px-4 flex flex-col items-center">
        
        {/* Top Label */}
        <div className="hero-label opacity-0 translate-y-6 mb-8 md:mb-10">
           <span className="text-eum-accent font-bold tracking-[0.2em] text-sm md:text-lg uppercase border border-eum-accent/30 px-5 py-2 md:px-6 md:py-3 rounded-full bg-black/20 backdrop-blur-sm">
             수도권이 아닌 지역기반 소개팅
           </span>
        </div>
        
        {/* Main Title */}
        <h1 className="font-sans text-[15vw] md:text-[8.5vw] font-black leading-[1.25] tracking-tighter mb-8 md:mb-12 text-white">
          <div className="overflow-hidden">
            <span className="hero-text-reveal block translate-y-full">진심을</span>
          </div>
          <div className="overflow-hidden">
             <span className="hero-text-reveal block translate-y-full">잇다</span>
          </div>
        </h1>
        
        {/* Subtitle */}
        <div className="hero-subtitle opacity-0 translate-y-6 space-y-2 md:space-y-3">
           <p className="text-sm md:text-xl font-medium text-gray-200 tracking-wide break-keep">
             빠른 만남보다, 맞는 사람을 한 번 제대로 만나는 것.
           </p>
           <p className="text-sm md:text-xl font-medium text-gray-200 tracking-wide break-keep">
             성공할 때까지 책임지는 3개월의 동행.
           </p>
        </div>

      </div>
      
      <div className="hero-scroll absolute bottom-10 left-0 w-full flex justify-center opacity-0">
        <div className="animate-bounce">
          <ArrowDown className="text-white opacity-50 w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;