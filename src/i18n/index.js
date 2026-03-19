import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "company_name": "Al Alamya",
      "full_company_name": "Al Alamya for General Supplies",
      "nav": {
        "home": "Home",
        "about": "About Us",
        "products": "Products & Services",
        "contact": "Contact Us"
      },
      "hero": {
        "title": "Empowering Charities & Businesses with Quality Supplies",
        "subtitle": "Al Alamya for General Supplies is your trusted partner in Egypt, providing essential goods for charitable organizations, local businesses, and international partners.",
        "cta_primary": "Our Services",
        "cta_secondary": "Contact Us"
      },
      "services": {
        "title": "What We Provide",
        "subtitle": "Comprehensive supply solutions tailored for charitable organizations and businesses.",
        "hygiene": {
          "title": "Hygiene & Cleaning",
          "desc": "High-quality industrial and domestic cleaning supplies and personal hygiene products.",
          "items": ["Industrial & Home Detergents", "Complete Cleaning Tools", "Personal Care Products", "Disinfection Supplies"]
        },
        "clothing": {
          "title": "Clothes & Uniforms",
          "desc": "Durable and professional uniforms, workwear, and general clothing for all needs.",
          "items": ["School & Work Uniforms", "Charity Drive Clothing", "Blankets & Bedding", "Footwear & Accessories"]
        },
        "smart_devices": {
          "title": "Smart Devices",
          "desc": "Modern technology solutions and smart devices to enhance operational efficiency.",
          "items": ["Tablets & Laptops", "Smartphones", "Tech Accessories", "Smart Home Appliances"]
        },
        "food_essentials": {
          "title": "Food & Life Essentials",
          "desc": "Reliable sourcing of essential food items and daily life necessities.",
          "items": ["Basic Food Commodities", "Canned & Dry Foods", "Charity Food Box Packs", "Tableware & Essentials"]
        }
      },
      "about": {
        "title": "About Al Alamya",
        "subtitle": "Discover who we are",
        "p1": "Established in Egypt, Al Alamya for General Supplies has grown to become a leading provider of various goods, specializing in supporting charitable organizations, local businesses, and international companies with their supply needs.",
        "p2": "We believe in the power of giving and strive to provide the best quality products at competitive prices to help our partners maximize their impact.",
        "mission": "Our Mission",
        "vision": "Our Vision",
        "values": "Our Values",
        "address_label": "Address",
        "phone_label": "Phone",
        "email_label": "Email"
      },
      "stats": {
        "clients": "Trusted Partners",
        "products": "Product Categories",
        "years": "Years of Excellence"
      },
      "testimonials": {
        "title": "What Our Partners Say",
        "placeholder_name": "Organization Representative",
        "placeholder_text": "Al Alamya has been instrumental in our donation drives. Their quality and reliability are unmatched."
      },
      "contact": {
        "title": "Get In Touch",
        "subtitle": "Have a specific requirement? Send us an email and we'll get back to you with a quote.",
        "name": "Name",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
        "send": "Send Message",
        "placeholders": {
          "name": "John Doe",
          "email": "john@example.com",
          "subject": "Inquiry about hygiene supplies...",
          "message": "Please provide details about your requirements..."
        },
        "info_title": "Contact Information",
        "address": "Cairo, Egypt",
        "phone": "+20 XXX XXX XXXX",
        "email_address": "info@alalamya.com",
        "whatsapp_title": "Quick Chat on WhatsApp",
        "whatsapp_subtitle": "We are available to answer your queries"
      },
      "footer": {
        "rights": "All rights reserved",
        "slogan": "Your partner in growth and giving."
      }
    }
  },
  ar: {
    translation: {
      "company_name": "العالمية",
      "full_company_name": "العالمية للتوريدات العمومية",
      "nav": {
        "home": "الرئيسية",
        "about": "من نحن",
        "products": "المنتجات والخدمات",
        "contact": "اتصل بنا"
      },
      "hero": {
        "title": "تمكين الجمعيات الخيرية والشركات بأجود التوريدات",
        "subtitle": "العالمية للتوريدات العمومية هي شريكك الموثوق في مصر، نوفر السلع الأساسية للجمعيات الخيرية، الشركات المحلية، والشركاء الدوليين.",
        "cta_primary": "خدماتنا",
        "cta_secondary": "اتصل بنا"
      },
      "services": {
        "title": "ماذا نقدم",
        "subtitle": "حلول توريد شاملة مصممة خصيصاً للمؤسسات الخيرية والشركات.",
        "hygiene": {
          "title": "أدوات النظافة والطهي",
          "desc": "توريدات نظافة عالية الجودة للاستخدام الصناعي والمنزلي ومنتجات العناية الشخصية.",
          "items": ["منظفات صناعية ومنزلية", "أدوات نظافة متكاملة", "منتجات عناية شخصية", "مستلزمات تعقيم"]
        },
        "clothing": {
          "title": "الملابس والزي الرسمي",
          "desc": "زي رسمي متين واحترافي، ملابس عمل، وملابس عامة لجميع الاحتياجات.",
          "items": ["زي مدرسي وموحد", "ملابس حملات خيرية", "بطاطين ومفروشات", "أحذية ومستلزمات"]
        },
        "smart_devices": {
          "title": "الأجهزة الذكية",
          "desc": "حلول تكنولوجية حديثة وأجهزة ذكية لتعزيز الكفاءة التشغيلية.",
          "items": ["أجهزة تابلت ولابتوب", "هواتف ذكية", "ملحقات تكنولوجية", "أجهزة منزلية ذكية"]
        },
        "food_essentials": {
          "title": "المواد الغذائية والأساسيات",
          "desc": "توفير موثوق للمواد الغذائية الأساسية واحتياجات الحياة اليومية.",
          "items": ["سلع غذائية أساسية", "معلبات ومواد جافة", "كراتين رمضان والخير", "مستلزمات مائدة"]
        }
      },
      "about": {
        "title": "عن العالمية",
        "subtitle": "اكتشف من نحن",
        "p1": "تأسست العالمية للتوريدات العمومية في مصر، وكبرت لتصبح مزوداً رائداً لمختلف السلع، متخصصة في دعم الجمعيات الخيرية، الشركات المحلية، والمؤسسات الدولية باحتياجاتها من التوريدات.",
        "p2": "نؤمن بقوة العطاء ونسعى جاهدين لتقديم أفضل المنتجات جودة وبأسعار تنافسية لمساعدة شركائنا على تعظيم أثرهم.",
        "mission": "رسالتنا",
        "vision": "رؤيتنا",
        "values": "قيمنا",
        "address_label": "العنوان",
        "phone_label": "الهاتف",
        "email_label": "البريد الإلكتروني"
      },
      "stats": {
        "clients": "شريك موثوق",
        "products": "فئة منتجات",
        "years": "سنوات من التميز"
      },
      "testimonials": {
        "title": "ماذا يقول شركاؤنا",
        "placeholder_name": "ممثل مؤسسة",
        "placeholder_text": "لقد كانت العالمية شريكاً أساسياً في حملات التبرع الخاصة بنا. جودتهم وموثوقيتهم لا يعلى عليها."
      },
      "contact": {
        "title": "تواصل معنا",
        "subtitle": "هل لديك متطلبات خاصة؟ أرسل لنا بريداً إلكترونياً وسنعاود الاتصال بك مع عرض سعر.",
        "name": "الاسم",
        "email": "البريد الإلكتروني",
        "subject": "الموضوع",
        "message": "الرسالة",
        "send": "إرسال الرسالة",
        "placeholders": {
          "name": "أحمد محمد",
          "email": "ahmed@example.com",
          "subject": "استفسار بخصوص أدوات النظافة...",
          "message": "يرجى تقديم تفاصيل حول متطلباتك..."
        },
        "info_title": "معلومات الاتصال",
        "address": "القاهرة، مصر",
        "phone": "+20 XXX XXX XXXX",
        "email_address": "info@alalamya.com",
        "whatsapp_title": "تواصل سريع عبر واتساب",
        "whatsapp_subtitle": "نحن متاحون للرد على استفساراتكم"
      },
      "footer": {
        "rights": "جميع الحقوق محفوظة",
        "slogan": "شريكك في النمو والعطاء."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    detection: {
      order: ['localStorage', 'sessionStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
