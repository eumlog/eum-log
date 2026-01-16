import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MainPageHeaderProps {
  title: string;
  subtitle: string;
}

const MainPageHeader: React.FC<MainPageHeaderProps> = ({ title, subtitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.header-reveal', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-40 pb-20 px-6 bg-eum-dark text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-white/5 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[900px] mx-auto relative z-10">
        <div className="header-reveal font-eng text-[10px] font-bold tracking-[0.2em] text-eum-accent uppercase mb-6">
          {subtitle}
        </div>
        <h1 className="header-reveal font-sans text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default MainPageHeader;