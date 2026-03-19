import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ShieldCheck, Cpu, Utensils, ArrowRight, Star, Users, Award, Briefcase } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'hygiene',
      icon: <ShieldCheck size={36} className="text-secondary group-hover:text-white transition-colors" />,
      title: t('services.hygiene.title'),
      desc: t('services.hygiene.desc'),
      gradient: 'from-blue-500/20 to-secondary/20',
    },
    {
      id: 'clothing',
      icon: <ShoppingBag size={36} className="text-accent group-hover:text-white transition-colors" />,
      title: t('services.clothing.title'),
      desc: t('services.clothing.desc'),
      gradient: 'from-accent/20 to-orange-500/20',
    },
    {
      id: 'smart_devices',
      icon: <Cpu size={36} className="text-purple-400 group-hover:text-white transition-colors" />,
      title: t('services.smart_devices.title'),
      desc: t('services.smart_devices.desc'),
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 'food_essentials',
      icon: <Utensils size={36} className="text-green-400 group-hover:text-white transition-colors" />,
      title: t('services.food_essentials.title'),
      desc: t('services.food_essentials.desc'),
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  const stats = [
    { id: 1, label: t('stats.clients'), value: '50+', icon: <Users size={28} className="text-[#ffcc33]" /> },
    { id: 2, label: t('stats.products'), value: '1000+', icon: <Briefcase size={28} className="text-secondary" /> },
    { id: 3, label: t('stats.years'), value: '10+', icon: <Award size={28} className="text-blue-400" /> },
  ];

  return (
    <div className="bg-[#0a192f] min-h-screen text-[#ccd6f6] overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden isolate">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] -z-10" />
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6">
                <Star size={14} className="fill-secondary" />
                Premium General Supplies
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                {t('hero.title').split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "bg-clip-text text-transparent bg-gradient-to-r from-secondary to-[#ffcc33]" : ""}>
                    {word}{` `}
                  </span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-[#8892b0] mb-10 max-w-2xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="group relative px-8 py-4 bg-secondary text-[#0a192f] font-bold rounded-lg overflow-hidden flex items-center gap-2 shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] transition-all">
                  <span className="relative z-10">{t('hero.cta_primary')}</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>
                
                <Link to="/contact" className="px-8 py-4 border border-[rgba(100,255,218,0.3)] text-secondary font-bold rounded-lg hover:bg-[rgba(100,255,218,0.05)] transition-all flex items-center gap-2">
                  {t('hero.cta_secondary')}
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            {/* Abstract 3D-like representation for HERO instead of generic image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-blue-500/20 backdrop-blur-3xl rounded-3xl border border-white/10 m-8 flex items-center justify-center overflow-hidden shadow-2xl">
               <div className="absolute w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30 animate-[spin_120s_linear_infinite]" />
               <motion.div 
                 animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="relative z-10 w-48 h-48 bg-gradient-to-br from-secondary to-[#0a192f] rounded-2xl shadow-[0_0_50px_rgba(100,255,218,0.3)] border border-secondary/30 flex items-center justify-center"
               >
                 <ShieldCheck size={80} className="text-[#0a192f] drop-shadow-lg" />
               </motion.div>
               
               {/* Floating elements */}
               <motion.div
                 animate={{ y: [10, -15, 10], x: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-accent to-[#0a192f] rounded-xl shadow-lg border border-accent/30 flex items-center justify-center backdrop-blur-md"
               >
                 <ShoppingBag size={32} className="text-[#0a192f]" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 border-y border-white/5 bg-[#112240]/50 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-24">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center gap-5">
                <div className="p-4 bg-[#0a192f] rounded-xl border border-white/5 shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-sm text-[#8892b0] font-medium tracking-wide uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative isolate">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-secondary/5 blur-[100px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('services.title')}
            </h2>
            <p className="text-xl text-[#8892b0]">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#112240]/60 backdrop-blur-lg border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-secondary/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(100,255,218,0.15)] focus-within:ring focus-within:ring-secondary/50"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-[#0a192f] border border-white/5 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#8892b0] mb-8 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-widest mt-auto group/link">
                    Explore <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform rtl:group-hover/link:-translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a192f] border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent blur-3xl -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {t('testimonials.title')}
              </h2>
              <div className="h-1 w-20 bg-secondary rounded-full" />
            </div>
            <Link to="/contact" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-white font-medium flex items-center gap-2">
              Start a Partnership <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#112240] p-8 rounded-2xl border border-white/5 relative"
              >
                <div className="absolute top-8 right-8 text-secondary/20 font-serif text-6xl">"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} className="fill-[#ffcc33] text-[#ffcc33]" />)}
                </div>
                <p className="text-[#ccd6f6] text-lg leading-relaxed mb-8 italic relative z-10">
                  {t('testimonials.placeholder_text')}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-secondary to-blue-500 p-0.5">
                    <div className="w-full h-full bg-[#0a192f] rounded-full flex items-center justify-center font-bold text-white">
                      R{i}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t('testimonials.placeholder_name')} {i}</h4>
                    <span className="text-secondary text-sm">{t('stats.clients')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
