import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      id: 'mission',
      icon: <Target size={36} className="text-secondary" />,
      title: t('about.mission'),
      desc: t('about.p2'),
      color: 'from-blue-500/20 to-secondary/20',
      border: 'hover:border-secondary/50',
    },
    {
      id: 'vision',
      icon: <Eye size={36} className="text-[#ffcc33]" />,
      title: t('about.vision'),
      desc: t('about.p1'),
      color: 'from-[#ffcc33]/20 to-orange-500/20',
      border: 'hover:border-[#ffcc33]/50',
    },
    {
      id: 'values',
      icon: <Heart size={36} className="text-pink-400" />,
      title: t('about.values'),
      desc: t('footer.slogan'),
      color: 'from-pink-500/20 to-rose-500/20',
      border: 'hover:border-pink-500/50',
    },
  ];

  return (
    <div className="bg-[#0a192f] min-h-screen text-[#ccd6f6] overflow-hidden pt-24 pb-12">
      
      {/* Page Header */}
      <div className="relative py-20 lg:py-32 border-b border-white/5 isolate">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-blue-500/10 -z-10" />
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#8892b0] text-sm font-medium mb-6 uppercase tracking-widest"
          >
            {t('about.subtitle')}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ccd6f6] to-[#8892b0] pb-4 pt-2 inline-block">
              {t('about.title')}
            </span>
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 relative isolate">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-secondary/5 to-transparent -z-10" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t('full_company_name')}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-blue-500 rounded-full" />
            
            <p className="text-lg text-[#8892b0] leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-[#8892b0] leading-relaxed">
              {t('about.p2')}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {[t('services.hygiene.title'), t('services.clothing.title'), t('services.smart_devices.title'), t('services.food_essentials.title')].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#112240]/50 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 size={20} className="text-secondary shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113565694-c6a6552ef41a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-secondary/30 flex items-center justify-center bg-[#0a192f]/80 backdrop-blur-md shadow-[0_0_30px_rgba(100,255,218,0.2)]">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-blue-400">Al Alamya</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-[#112240] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-[#0a192f] p-10 rounded-3xl border border-white/5 transition-all duration-300 shadow-xl overflow-hidden group ${v.border}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${v.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="w-20 h-20 rounded-2xl bg-[#112240] border border-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {v.title}
                </h3>
                <p className="text-[#8892b0] leading-relaxed text-lg">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
