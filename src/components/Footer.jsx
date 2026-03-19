import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <footer className="relative bg-[#060d1a] pt-20 overflow-hidden border-t border-white/5">
      {/* Massive Brand Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="text-[15rem] md:text-[25rem] font-black whitespace-nowrap leading-none tracking-tighter">
          {currentLanguage === 'ar' ? 'العالمية' : 'AL ALAMYA'}
        </span>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group inline-block w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(100,255,218,0.3)]">
                <Layers size={20} className="text-[#0a192f]" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ccd6f6] tracking-tight">
                {t('company_name')}
              </span>
            </Link>
            <p className="text-[#8892b0] text-base leading-relaxed max-w-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-secondary hover:text-[#0a192f] hover:border-secondary transition-all duration-300 shadow-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-secondary hover:text-[#0a192f] hover:border-secondary transition-all duration-300 shadow-lg">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-secondary hover:text-[#0a192f] hover:border-secondary transition-all duration-300 shadow-lg">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {t('nav.home')}
            </h4>
            <ul className="flex flex-col gap-4 pl-0">
              <li><Link to="/about" className="text-[#8892b0] hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="text-[#8892b0] hover:text-white transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/contact" className="text-[#8892b0] hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {t('contact.info_title')}
            </h4>
            <ul className="flex flex-col gap-5 pl-0">
              <li className="flex items-center gap-3 text-[#8892b0]">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-[#8892b0]">
                <Phone size={18} className="text-secondary shrink-0" />
                <span dir="ltr">{t('contact.phone')}</span>
              </li>
              <li className="flex items-center gap-3 text-[#8892b0]">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>{t('contact.email_address')}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#040812] relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#8892b0] text-sm">
          <p>&copy; {new Date().getFullYear()} {t('full_company_name')}. {t('footer.rights')}.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
