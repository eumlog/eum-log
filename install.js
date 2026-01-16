
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to escape backticks in content if needed, though here we use template literals carefully.
// Note: We are embedding the file contents directly.

const files = {
  'package.json': `{
  "name": "eum-log",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.12.5",
    "lucide-react": "^0.344.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}`,

  'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["vite/client"]
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,

  'tsconfig.node.json': `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eum-bg': '#F0F0EB',
        'eum-dark': '#1C1C1C',
        'eum-accent': '#8E7F70',
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
        eng: ['"Syncopate"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}`,

  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

  'index.html': `<!DOCTYPE html>
<html lang="ko" class="scroll-pt-[100px]">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>E.UM LOG | 이음로그</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Syncopate:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <div class="noise-overlay"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>`,

  'src/vite-env.d.ts': `declare module '*.css';
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}`,

  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  background-color: #F0F0EB;
  color: #1C1C1C;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Noise Overlay */
.noise-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9000;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
}

/* Custom Word Break */
.keep-all {
  word-break: keep-all;
}`,

  'src/index.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

  'src/App.tsx': `import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import FloatingBanner from './components/layout/FloatingBanner';
import Preloader from './components/ui/Preloader';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import CriteriaPage from './components/pages/CriteriaPage';
import PricingPage from './components/pages/PricingPage';
import FaqPage from './components/pages/FaqPage';
import ContactPage from './components/pages/ContactPage';
import ApplyPage from './components/pages/ApplyPage';
import AdminPage from './components/pages/AdminPage';
import InstagramRegionsPage from './components/pages/InstagramRegionsPage';
import PolicyPage from './components/pages/PolicyPage';

gsap.registerPlugin(ScrollTrigger);

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
       // Simple fade in when loading is done
       if (wrapperRef.current) {
         gsap.to(wrapperRef.current, { 
           opacity: 1, 
           duration: 0.8, 
           ease: 'power2.out',
           onComplete: () => ScrollTrigger.refresh()
         });
       }
    }
  }, [loading]);

  // Hide FloatingBanner on Contact Page to avoid overlapping
  const showFloatingBanner = location.pathname !== '/contact';

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* We keep content rendered but hidden to ensure layout is ready */}
      <div 
        ref={wrapperRef} 
        className="min-h-screen flex flex-col justify-between transition-opacity duration-500" 
        style={{ opacity: loading ? 0 : 1 }}
      >
        <Navbar />
        {showFloatingBanner && <FloatingBanner />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/criteria" element={<CriteriaPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/instagram" element={<InstagramRegionsPage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;`,

  'src/components/ui/Preloader.tsx': `import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
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

export default Preloader;`,

  'src/components/layout/Navbar.tsx': `import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const navLinks = [
  { name: '소개', href: '/about' },
  { name: '멤버십 안내', href: '/pricing' },
  { name: '진행방식', href: '/service' },
  { name: '가입기준', href: '/criteria' },
  { name: '자주 묻는 질문', href: '/faq' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to('.mobile-menu', { x: 0, duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to('.mobile-menu', { x: '100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav className={\`fixed top-0 w-full z-50 transition-all duration-300 \${isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 text-black shadow-sm' : 'text-white mix-blend-difference'}\`}>
        <div className="max-w-[900px] mx-auto p-6 flex justify-between items-center">
          {/* Logo */}
          <div className="z-50 relative group">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="font-sans font-black text-2xl tracking-tight cursor-pointer block"
            >
              E.UM LOG
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className={\`hidden lg:flex gap-8 text-sm font-bold tracking-widest \${isScrolled ? 'text-gray-800' : 'text-gray-200'}\`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className={\`relative py-2 transition-colors duration-300 hover:text-eum-accent 
                  \${isActive(link.href) ? 'text-eum-accent' : ''}\`}
              >
                {link.name}
                <span className={\`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-eum-accent transition-all duration-300 
                  \${isActive(link.href) ? 'opacity-100' : 'opacity-0'}\`} 
                />
              </Link>
            ))}
          </div>
          
          {/* Right Side Buttons */}
          <div className={\`hidden md:flex items-center gap-6 \${isScrolled ? 'text-black' : 'text-white'}\`}>
            <Link 
              to="/contact"
              className="text-sm font-bold hover:text-eum-accent transition-colors flex items-center gap-1 group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" /> 상담문의
            </Link>
            <Link 
              to="/apply"
              className={\`px-5 py-2 border rounded-full text-sm font-bold transition-all duration-300 \${isScrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white/30 hover:bg-white hover:text-black'}\`}
            >
              신청하기
            </Link>
          </div>
          
          {/* Mobile Menu Icon */}
          <div className="lg:hidden z-50 cursor-pointer hover:text-eum-accent transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu fixed inset-0 bg-white z-40 transform translate-x-full flex flex-col justify-center items-center gap-8 text-xl font-bold text-eum-dark lg:hidden">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.href} 
            onClick={() => setMobileMenuOpen(false)}
            className={\`hover:text-eum-accent transition-colors \${isActive(link.href) ? 'text-eum-accent' : ''}\`}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex flex-col gap-4 mt-8 items-center">
             <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> 상담문의
              </Link>
              <Link 
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-3 bg-eum-dark text-white rounded-full text-sm font-bold"
              >
                매칭 신청하기
              </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;`,

  'src/components/ui/SplitText.tsx': `import React, { useEffect, useRef } from 'react';
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
    <div ref={containerRef} className={\`\${className} inline-block\`}>
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

export default SplitText;`,

  'src/components/sections/Hero.tsx': `import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { IMAGES } from '../../constants/assets';

const Hero: React.FC = () => {
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

export default Hero;`,

  'src/components/sections/Intro.tsx': `import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { X, Check } from 'lucide-react';

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".intro-fade", {
         y: 30,
         opacity: 0,
         duration: 1,
         stagger: 0.2,
         scrollTrigger: {
           trigger: containerRef.current,
           start: "top 70%",
         }
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 md:pt-32 pb-0 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Text Content */}
        <div className="text-center mb-16 intro-fade max-w-3xl mx-auto">
            <div className="font-eng text-base font-bold tracking-widest text-eum-accent uppercase mb-4">
                Our Method
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold leading-tight text-eum-dark keep-all">
                소개팅 앱 안 해요.<br className="hidden md:block" /> 결정사는 부담스럽고요.
            </h2>
            <p className="mt-6 text-xl text-gray-600 font-medium">
                알고 있습니다. 그래서 이렇게 합니다.
            </p>
        </div>

        {/* Comparison Table */}
        <div className="intro-fade grid md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-xl">
            {/* Left: Traditional Agencies */}
            <div className="bg-gray-50 p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-400 mb-10 text-left">결혼정보회사</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4 text-gray-400">
                        <X className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-xl font-bold mb-1">가입비 수백만원</span>
                            <span className="text-base">초기 비용 부담이 매우 큼</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-gray-400">
                        <X className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-xl font-bold mb-1">횟수 채우면 끝</span>
                            <span className="text-base">만남의 질보다 횟수 차감이 우선</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-gray-400">
                        <X className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-xl font-bold mb-1">기계적 매칭</span>
                            <span className="text-base">등급표에 따른 단순 조건 연결</span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Right: E.UM LOG */}
            <div className="bg-[#1C1C1C] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                <div>
                    <h3 className="text-2xl font-bold text-eum-accent mb-10 text-left">이음로그</h3>
                    <ul className="space-y-6 relative z-10">
                        <li className="flex items-start gap-4">
                            <div className="bg-eum-accent/20 p-1 rounded-full mt-1">
                                <Check className="w-5 h-5 text-eum-accent flex-shrink-0" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold mb-1">월 4~6만원대</span>
                                <span className="text-base text-gray-400 font-medium">3개월 멤버십으로 합리적인 시작</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-eum-accent/20 p-1 rounded-full mt-1">
                                <Check className="w-5 h-5 text-eum-accent flex-shrink-0" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold mb-1">무제한 소개</span>
                                <span className="text-base text-gray-400 font-medium">횟수 제한 없이, 맞는 사람 나올 때까지</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-eum-accent/20 p-1 rounded-full mt-1">
                                <Check className="w-5 h-5 text-eum-accent flex-shrink-0" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold mb-1">1:1 수동 매칭</span>
                                <span className="text-base text-gray-400 font-medium">지역 거점 기반, 매니저가 직접 상담 후 연결</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="intro-fade text-center mt-12 md:mt-16 mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-eum-dark leading-relaxed keep-all">
                우리는 넓게 연결하지 않습니다.<br />
                <span className="text-eum-accent">지금 이 지역에서, 실제로 만날 수 있는 사람만 연결합니다.</span>
            </h3>
        </div>

      </div>
    </section>
  );
};

export default Intro;`,

  'src/components/sections/CardStack.tsx': `import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MapPin, ShieldCheck, Users } from 'lucide-react';
import { IMAGES } from '../../constants/assets';

const CardStack: React.FC = () => {
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
                  className={\`w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 \${card.filter}\`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardStack;`,

  'src/components/sections/FinalMessage.tsx': `import React from 'react';
import SplitText from '../ui/SplitText';

const FinalMessage: React.FC = () => {
  return (
    <section className="py-40 bg-eum-bg text-center flex flex-col items-center justify-center relative z-10 px-6">
      <h2 className="font-sans text-3xl md:text-5xl mb-8 font-bold tracking-tight text-eum-dark">
        <SplitText>당신의 계절을 기다립니다</SplitText>
      </h2>
      
      <div className="max-w-xl text-gray-600 font-medium mb-12 leading-loose keep-all text-lg md:text-xl">
        이음로그는 단순한 소개팅 앱이 아닙니다.<br />
        당신의 가치를 알아봐 줄 단 한 사람을 위해<br />
        가장 정성스러운 방식으로 기록하고 연결합니다.
      </div>

      <div className="h-20 w-px bg-black/10"></div>
    </section>
  );
};

export default FinalMessage;`,

  'src/components/sections/Footer.tsx': `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/assets';

const Footer: React.FC = () => {
  return (
    <div id="contact" className="relative w-full h-full flex flex-col justify-center items-center footer-content py-20">
      <div className="relative z-10 text-center px-4 w-full">
        <div className="font-eng text-base md:text-lg font-bold tracking-[0.2em] mb-6 mt-8 text-gray-500 uppercase">
          만남을 시작하세요
        </div>
        
        <Link 
          to="/apply" 
          className="group relative inline-block"
        >
          <span className="block font-sans text-5xl md:text-7xl font-black leading-none text-white group-hover:text-gray-400 transition-colors tracking-tighter">
            매칭 신청하기
          </span>
          <span className="block text-sm md:text-lg font-medium text-gray-500 mt-6 group-hover:text-white transition-colors flex items-center justify-center gap-1">
            지금 바로 프로필 등록하기 <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-24 text-sm font-semibold tracking-wider text-gray-400">
          <Link to="/instagram" className="hover:text-white transition-colors">인스타그램</Link>
          <a href="https://pf.kakao.com/_Cxfxcxo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">카카오톡 문의</a>
          <Link to="/faq" className="hover:text-white transition-colors">자주 묻는 질문</Link>
        </div>
        
        <div className="mt-20 w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-[10px] md:text-xs text-gray-600 font-medium px-8 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
             <p>© 2025 E.UM LOG. All Rights Reserved.</p>
             <Link to="/admin" className="opacity-10 hover:opacity-100 hover:text-white transition-all duration-300 ml-4">
                Admin
             </Link>
          </div>
          <p className="text-center md:text-right leading-relaxed">
            이음로그 전남 순천시 충효로 15 | 사업자등록번호: 671-14-02393<br className="md:hidden"/> 
            대표자 : 임상현 | E-MAIL: mono5686@naver.com
          </p>
        </div>
      </div>
      
      <img 
        src={IMAGES.footerTexture}
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none grayscale"
        alt="Texture"
      />
    </div>
  );
};

export default Footer;`,

  'src/components/sections/Criteria.tsx': `import React from 'react';
import { X, Check } from 'lucide-react';

const Criteria: React.FC = () => {
  return (
    <section id="criteria" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6">
        
        <div className="relative z-10 space-y-20">

            {/* 1. Selection Priorities (우선 선정) */}
            <div className="text-center md:text-left">
                <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-10 text-eum-dark">
                    이런 분들을<br/> 우선으로 선정합니다
                </h2>
                <ul className="space-y-6 max-w-2xl">
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <div>
                             <span className="text-gray-900 text-xl font-bold block mb-1 keep-all">
                                현재 생활권이 분명하고
                             </span>
                             <span className="text-gray-500 text-lg keep-all">
                                지역 내 실제 만남이 가능한 분
                             </span>
                         </div>
                    </li>
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <span className="text-gray-900 text-xl font-bold pt-0.5 keep-all">
                            기본적인 외모·스타일 관리가 되어 있는 분
                         </span>
                    </li>
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <div>
                             <span className="text-gray-900 text-xl font-bold block mb-1 keep-all">
                                연애를 할 시간과 여유가 있는 분
                             </span>
                             <span className="text-gray-500 text-base keep-all">
                                (일정·생활·금전적으로 무리 없는 상태)
                             </span>
                         </div>
                    </li>
                    <li className="flex items-start gap-4">
                         <div className="mt-1.5 w-6 h-6 rounded-full bg-eum-accent flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                         </div>
                         <span className="text-gray-900 text-xl font-bold pt-0.5 keep-all">
                            본인의 조건을 객관적으로 이해하는 분
                         </span>
                    </li>
                </ul>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            {/* 2. Who Is This For (추천 대상) */}
            <div>
                <div className="font-eng text-[10px] font-bold tracking-widest mb-4 text-eum-accent uppercase text-center md:text-left">
                    Who Is This For
                </div>
                <h3 className="text-2xl font-bold mb-8 text-eum-dark text-center md:text-left">이런 분께 추천드립니다</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { num: "01", text: "지역에서 괜찮은 사람을 찾기 어렵다고 느끼는 분" },
                        { num: "02", text: "지인 소개나 앱이 부담스러운 분" },
                        { num: "03", text: "결정사 비용은 부담되지만, 진지한 만남은 원하는 분" },
                        { num: "04", text: "빠른 만남보다, 차분한 관계를 원하시는 분" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col justify-between bg-[#F9F9F9] p-6 rounded-2xl border border-gray-100 hover:border-eum-accent/30 hover:shadow-lg transition-all duration-300 group">
                            <span className="font-eng font-bold text-gray-300 group-hover:text-eum-accent transition-colors text-2xl mb-3">{item.num}</span>
                            <span className="text-gray-700 font-bold leading-relaxed keep-all text-lg">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Not a Good Fit (맞지 않는 대상) */}
            <div>
                <div className="font-eng text-[10px] font-bold tracking-widest mb-4 text-gray-400 uppercase text-center md:text-left">
                    Not a Good Fit
                </div>
                <h3 className="text-2xl font-bold mb-8 text-eum-dark text-center md:text-left">이음로그와 맞지 않을 수 있습니다</h3>
                <div className="space-y-4">
                     {[
                         "현실적인 조건을 고려하지 않고 특정 외모·스펙만을 강하게 고집하는 경우",
                         "만남에 대한 준비보다 기대치만 높은 상태인 경우",
                         "가벼운 호기심, 유흥 목적의 만남을 원하는 경우",
                         "신원 확인이 어렵거나 무례한 언행, 반복적인 노쇼 이력이 있는 경우"
                     ].map((text, i) => (
                        <div key={i} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:bg-white hover:shadow-sm transition-all">
                            <X className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5 opacity-80" />
                            <span className="text-gray-600 font-medium leading-relaxed keep-all">{text}</span>
                        </div>
                     ))}
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Criteria;`,

  'src/components/sections/Pricing.tsx': `import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-white">
      
      <div className="py-24 px-6 max-w-[900px] mx-auto">
        {/* 1. Header & Description */}
        <div className="text-center mb-12">
          <h2 className="font-eng text-4xl md:text-5xl font-bold text-eum-accent mb-4">
            Membership
          </h2>
          <h3 className="font-sans text-3xl font-bold text-gray-900 leading-tight">
            3개월 구독제<br />
            <span className="text-lg font-normal text-gray-500 block mt-2">【 최소 12명 프로필 제공 】</span>
          </h3>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            합리적인 비용으로 시작하는 1:1 매칭.<br />
            원하는 조건과 이상형에 맞춰, 검증된 인연을 소개해드립니다.
          </p>
        </div>

        {/* 2. Conditions Section (Dark) */}
        <div className="max-w-[800px] mx-auto mb-20">
          <div className="bg-[#1C1C1C] rounded-[2rem] p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-10">조건</h3>
                
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 text-gray-300 font-medium text-lg md:text-xl">
                    {['나이', '지역', '키', '흡연여부', '종교', '직업', '연봉', '학력', '자녀계획'].map((item, i) => (
                        <span key={i} className="hover:text-white transition-colors">{item}</span>
                    ))}
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-sm md:text-base text-gray-300 leading-relaxed border border-white/5">
                    위 조건들 중 <span className="text-eum-accent font-bold">가장 중요한 항목을 선택</span>하시면,<br className="hidden md:block" />
                    해당 조건을 중심으로 최적의 상대를 매칭해드립니다.
                </div>
             </div>
          </div>
        </div>

        {/* 3. Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-24">
          {/* Basic Plan */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex flex-col">
            <div className="mb-8">
                 <span className="inline-block bg-[#F0F0EB] text-[#8E7F70] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest mb-4 uppercase">
                    Most Popular
                 </span>
                 <h4 className="text-2xl font-bold text-gray-900">베이직</h4>
                 <p className="text-gray-500 text-sm mt-3 font-medium">가장 많은 분들이 선택한<br/>합리적 플랜</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-4 text-gray-700 text-sm">
                <Check className="w-4 h-4 text-gray-300" />
                <span>3개월 무제한 소개</span>
              </li>
               <li className="flex items-center gap-4 text-gray-900 font-bold text-sm bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-eum-accent" />
                <span>[조건 2개] 우선 보장</span>
              </li>
            </ul>

            <div className="mt-auto bg-gray-50 rounded-2xl p-6 space-y-3">
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm font