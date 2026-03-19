import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#0a192f] min-h-screen text-[#ccd6f6] overflow-hidden pt-24 pb-12">
      
      {/* Page Header */}
      <div className="relative py-20 lg:py-32 border-b border-white/5 bg-[#060D1A] isolate">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-[#0a192f] to-[#0a192f] -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6 uppercase tracking-widest"
          >
            Let's Talk
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ccd6f6] to-[#8892b0] mb-6 pb-2 leading-relaxed tracking-tight"
          >
            {t('nav.contact')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#8892b0] max-w-2xl mx-auto leading-relaxed"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-24 relative isolate bg-[#0a192f]">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent -z-10" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#112240]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#8892b0] ml-1">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    required 
                    placeholder={t('contact.placeholders.name')}
                    className="w-full bg-[#0a192f] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-secondary transition-colors focus:ring-1 focus:ring-secondary/50" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#8892b0] ml-1">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    required 
                    placeholder={t('contact.placeholders.email')}
                    className="w-full bg-[#0a192f] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-secondary transition-colors focus:ring-1 focus:ring-secondary/50" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#8892b0] ml-1">{t('contact.subject')}</label>
                <input 
                  type="text" 
                  required 
                  placeholder={t('contact.placeholders.subject')}
                  className="w-full bg-[#0a192f] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-secondary transition-colors focus:ring-1 focus:ring-secondary/50" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#8892b0] ml-1">{t('contact.message')}</label>
                <textarea 
                  rows="5" 
                  required 
                  placeholder={t('contact.placeholders.message')}
                  className="w-full bg-[#0a192f] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-secondary transition-colors focus:ring-1 focus:ring-secondary/50 resize-y"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className="w-full mt-8 bg-gradient-to-r from-secondary to-[#4ade80] text-[#0a192f] font-bold text-lg rounded-xl px-8 py-5 flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-[#0a192f] border-t-transparent rounded-full animate-spin" />
                ) : submitted ? (
                  <>Message Sent! <CheckCircle2 size={24} /></>
                ) : (
                  <>{t('contact.send')} <Send size={20} className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('contact.info_title')}</h2>
              <div className="h-1 w-20 bg-secondary rounded-full mb-8" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#112240] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all shadow-lg">
                  <MapPin size={28} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t('about.address_label')}</h4>
                  <p className="text-[#8892b0] leading-relaxed max-w-xs">{t('contact.address')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#112240] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all shadow-lg">
                  <Phone size={28} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t('about.phone_label')}</h4>
                  <p className="text-[#8892b0] leading-relaxed max-w-xs" dir="ltr">{t('contact.phone')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#112240] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/10 group-hover:border-pink-500/30 transition-all shadow-lg">
                  <Mail size={28} className="text-pink-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t('about.email_label')}</h4>
                  <p className="text-[#8892b0] leading-relaxed max-w-xs">{t('contact.email_address')}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-[#112240] to-[#0a192f] border border-[rgba(37,211,102,0.3)] relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <MessageSquare size={160} color="#25D366" />
              </div>
              
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <MessageSquare size={32} className="text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{t('contact.whatsapp_title')}</h4>
                  <p className="text-[#8892b0] text-sm">{t('contact.whatsapp_subtitle')}</p>
                </div>
              </div>
              
              <a href="#" className="flex items-center justify-between w-full px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-colors relative z-10 shadow-[0_10px_20px_rgba(37,211,102,0.3)]">
                <span>Start Conversation</span>
                <ArrowRight size={20} className="rtl:rotate-180" />
              </a>
            </div>
            
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
