import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroPreloaderProps {
  onComplete: () => void;
}

const IntroPreloader: React.FC<IntroPreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    gsap.set(containerRef.current, { opacity: 1 });

    tl.to(barRef.current, { 
      width: '100%', 
      duration: 1.5, 
      ease: 'power2.inOut' 
    })
    .to(textRef.current, { 
      y: -30, 
      opacity: 0, 
      duration: 0.5 
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut'
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#1a1a1a] flex flex-col items-center justify-center text-white">
      <div ref={textRef} className="font-sans font-bold text-2xl tracking-[0.2em] mb-8">
        E.UM LOG
      </div>
      <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden">
        <div ref={barRef} className="absolute left-0 top-0 h-full w-0 bg-white"></div>
      </div>
    </div>
  );
};

export default IntroPreloader;