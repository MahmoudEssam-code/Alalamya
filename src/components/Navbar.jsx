import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage, currentLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0a192f]/80 backdrop-blur-md border-[rgba(100,255,218,0.1)] py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Modern Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(100,255,218,0.4)] group-hover:shadow-[0_0_25px_rgba(100,255,218,0.6)] transition-all duration-300">
            <Layers size={22} className="text-[#0a192f]" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ccd6f6] tracking-tight">
            {t('company_name')}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-secondary ${location.pathname === link.path ? 'text-secondary' : 'text-[#ccd6f6]'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary rounded-full"
                />
              )}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(100,255,218,0.2)] bg-white/5 hover:bg-[rgba(100,255,218,0.1)] transition-all text-sm font-medium text-white shadow-lg"
          >
            <Globe size={16} className={currentLanguage === 'ar' ? 'text-secondary' : 'text-[#ffcc33]'} />
            {currentLanguage === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>

        {/* Mobile Toggle Icons (Visible only on mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2.5 rounded-full bg-white/5 border border-[rgba(100,255,218,0.2)] text-white shadow-lg"
            title={currentLanguage === 'ar' ? 'English' : 'عربي'}
          >
            <Globe size={18} className={currentLanguage === 'ar' ? 'text-secondary' : 'text-[#ffcc33]'} />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a192f] border-t border-[rgba(100,255,218,0.1)] overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium tracking-wide ${location.pathname === link.path ? 'text-secondary' : 'text-[#ccd6f6]'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
