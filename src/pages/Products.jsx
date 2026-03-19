import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ShoppingBag, Cpu, Utensils, Check } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Products = () => {
  const { t } = useLanguage();

  const productCategories = [
    {
      id: 'hygiene',
      icon: <ShieldCheck size={48} className="text-secondary" />,
      title: t('services.hygiene.title'),
      desc: t('services.hygiene.desc'),
      items: t('services.hygiene.items', { returnObjects: true }) || [],
      gradient: 'from-blue-500/20 to-secondary/20',
      shadow: 'hover:shadow-[0_0_40px_rgba(100,255,218,0.2)]',
    },
    {
      id: 'clothing',
      icon: <ShoppingBag size={48} className="text-[#ffcc33]" />,
      title: t('services.clothing.title'),
      desc: t('services.clothing.desc'),
      items: t('services.clothing.items', { returnObjects: true }) || [],
      gradient: 'from-[#ffcc33]/20 to-orange-500/20',
      shadow: 'hover:shadow-[0_0_40px_rgba(255,204,51,0.2)]',
    },
    {
      id: 'smart_devices',
      icon: <Cpu size={48} className="text-purple-400" />,
      title: t('services.smart_devices.title'),
      desc: t('services.smart_devices.desc'),
      items: t('services.smart_devices.items', { returnObjects: true }) || [],
      gradient: 'from-purple-500/20 to-pink-500/20',
      shadow: 'hover:shadow-[0_0_40px_rgba(192,132,252,0.2)]',
    },
    {
      id: 'food_essentials',
      icon: <Utensils size={48} className="text-green-400" />,
      title: t('services.food_essentials.title'),
      desc: t('services.food_essentials.desc'),
      items: t('services.food_essentials.items', { returnObjects: true }) || [],
      gradient: 'from-green-500/20 to-emerald-500/20',
      shadow: 'hover:shadow-[0_0_40px_rgba(74,222,128,0.2)]',
    }
  ];

  return (
    <div className="bg-[#0a192f] min-h-screen text-[#ccd6f6] overflow-hidden pt-24 pb-12">
      
      {/* Page Header */}
      <div className="relative py-20 lg:py-32 border-b border-white/5 isolate">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent -z-10" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-blue-500/20 border border-secondary/30 mb-8 mx-auto shadow-[0_0_30px_rgba(100,255,218,0.2)]"
          >
            <ShoppingBag size={40} className="text-secondary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ccd6f6] to-[#8892b0] mb-6 pb-2 leading-relaxed tracking-tight"
          >
            {t('nav.products')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#8892b0] max-w-2xl mx-auto leading-relaxed"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Categories Detailed Grid */}
      <section className="py-24 relative isolate">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {productCategories.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative group bg-[#112240]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-12 overflow-hidden transition-all duration-500 ${cat.shadow}`}
              >
                {/* Glow Effect */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${cat.gradient} blur-[80px] rounded-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
                  <div className="w-24 h-24 rounded-2xl bg-[#0a192f] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500">
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                      {cat.title}
                    </h2>
                    <p className="text-[#8892b0] text-lg leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pt-8 border-t border-white/5">
                  {cat.items && cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-secondary" />
                      </div>
                      <span className="text-[#ccd6f6] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240] to-[#0a192f] -z-10" />
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[150px] rounded-full -z-10" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-[#8892b0] mb-12">
            {t('contact.subtitle')}
          </p>
          <motion.a 
            href="/contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-gradient-to-r from-secondary to-blue-500 text-[#0a192f] font-extrabold text-lg rounded-xl shadow-[0_0_30px_rgba(100,255,218,0.4)] hover:shadow-[0_0_50px_rgba(100,255,218,0.6)] transition-all"
          >
            {t('hero.cta_secondary')}
          </motion.a>
        </div>
      </section>

    </div>
  );
};

export default Products;
