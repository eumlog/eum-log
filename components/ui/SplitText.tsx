import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const SplitText: React.FC<SplitTextProps> = ({ children, className = "", delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.word-inner');
    
    gsap.fromTo(words, 
      { y: '110%' },
      {
        y: '0%',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.02,
        delay: delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
  }, [delay]);

  // Split logic: breaks string into words
  const words = children.split(' ');

  return (
    <div ref={containerRef} className={`${className} inline-block`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pb-[0.1em] mr-[0.3em]">
          <span className="word-inner inline-block transform translate-y-full">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

export default SplitText;