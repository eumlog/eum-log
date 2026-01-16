
import React, { useState, useEffect } from 'react';
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 text-black shadow-sm' : 'text-white mix-blend-difference'}`}>
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
          <div className={`hidden lg:flex gap-8 text-sm font-bold tracking-widest ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className={`relative py-2 transition-colors duration-300 hover:text-eum-accent 
                  ${isActive(link.href) ? 'text-eum-accent' : ''}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-eum-accent transition-all duration-300 
                  ${isActive(link.href) ? 'opacity-100' : 'opacity-0'}`} 
                />
              </Link>
            ))}
          </div>
          
          {/* Right Side Buttons */}
          <div className={`hidden md:flex items-center gap-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Link 
              to="/contact"
              className="text-sm font-bold hover:text-eum-accent transition-colors flex items-center gap-1 group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" /> 상담문의
            </Link>
            <Link 
              to="/apply"
              className={`px-5 py-2 border rounded-full text-sm font-bold transition-all duration-300 ${isScrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white/30 hover:bg-white hover:text-black'}`}
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
            className={`hover:text-eum-accent transition-colors ${isActive(link.href) ? 'text-eum-accent' : ''}`}
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

export default Navbar;
