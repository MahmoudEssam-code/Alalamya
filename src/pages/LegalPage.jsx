import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Cookie } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';

const LegalPage = ({ type }) => {
  const { currentLanguage } = useLanguage();
  
  const content = {
    privacy: {
      icon: <ShieldCheck size={40} className="text-blue-400" />,
      titleEn: "Privacy Policy",
      titleAr: "سياسة الخصوصية",
      textEn: "We value your privacy. This policy outlines how we collect, use, and protect your personal information when you use our website and services. We implement strict security measures to ensure your data is safe and never shared with unauthorized third parties.",
      textAr: "نحن نقدر خصوصيتك. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا وخدماتنا. نحن نطبق تدابير أمنية صارمة لضمان أمان بياناتك وعدم مشاركتها مع أطراف ثالثة غير مصرح لها."
    },
    terms: {
      icon: <FileText size={40} className="text-secondary" />,
      titleEn: "Terms of Service",
      titleAr: "شروط الخدمة",
      textEn: "By using our website, you agree to these terms and conditions. Al Alamya reserves the right to modify these terms at any time. Our supplies and services are provided strictly under the agreements made with our partners and charitable organizations.",
      textAr: "باستخدامك لموقعنا، فإنك توافق على هذه الشروط والأحكام. تحتفظ العالمية بالحق في تعديل هذه الشروط في أي وقت. يتم توفير توريداتنا وخدماتنا بشكل صارم بموجب الاتفاقيات المبرمة مع شركائنا والمنظمات الخيرية."
    },
    cookies: {
      icon: <Cookie size={40} className="text-[#ffcc33]" />,
      titleEn: "Cookie Policy",
      titleAr: "سياسة ملفات تعريف الارتباط",
      textEn: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and serve tailored content. By continuing to use our site, you consent to our use of cookies. You can manage your cookie preferences in your browser settings.",
      textAr: "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتحليل حركة المرور على الموقع، وتقديم محتوى مخصص. من خلال الاستمرار في استخدام موقعنا، فإنك توافق على استخدامنا لملفات تعريف الارتباط. يمكنك إدارة تفضيلاتك في إعدادات المتصفح الخاص بك."
    }
  };

  const currentContent = content[type];
  const title = currentLanguage === 'ar' ? currentContent.titleAr : currentContent.titleEn;
  const text = currentLanguage === 'ar' ? currentContent.textAr : currentContent.textEn;

  return (
    <div className="bg-[#0a192f] min-h-screen text-[#ccd6f6] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#112240]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full -z-10" />
          
          <div className="w-20 h-20 rounded-2xl bg-[#0a192f] border border-white/10 flex items-center justify-center mb-8 shadow-inner">
            {currentContent.icon}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 pb-2">
            {title}
          </h1>
          
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-blue-500 rounded-full mb-10" />
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#8892b0] leading-relaxed mb-8">
              {text}
            </p>
            
            <p className="text-[#8892b0]/70 leading-relaxed">
              {currentLanguage === 'ar' 
                ? "هذا النص هو نموذج مؤقت. سيتم تحديث الوثيقة القانونية الكاملة قريباً من قبل الإدارة." 
                : "This text is a temporary placeholder. The full legal documentation will be updated soon by management."}
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link to="/" className="text-secondary hover:text-white transition-colors flex items-center gap-2 group w-fit">
              {currentLanguage === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Return to Home'}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
