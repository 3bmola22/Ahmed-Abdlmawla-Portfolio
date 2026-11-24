// =============================================================
//  ملف الترجمات — EN (افتراضي) و AR (فصحى احترافية)
//  يا أحمد: عدّل أي نص من هنا مباشرة.
// =============================================================

export type Lang = "en" | "ar";

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
}

export interface Dict {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    downloadCV: string;
    toggleTheme: string;
    toggleLang: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    scroll: string;
    role: string;
    location: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraph: string;
    educationTitle: string;
    skillsTitle: string;
    certificatesTitle: string;
    downloadCV: string;
    education: EducationItem[];
    certificates: CertificateItem[];
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    live: string;
    code: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    validation: {
      nameMin: string;
      emailInvalid: string;
      messageMin: string;
    };
    direct: string;
  };
  footer: {
    rights: string;
    built: string;
  };
}

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "Download CV",
      toggleTheme: "Toggle theme",
      toggleLang: "العربية",
    },
    hero: {
      eyebrow: "Available for new opportunities",
      title1: "Hi, I'm Ahmed.",
      title2: "I build fast,",
      title3: "modern web experiences.",
      subtitle:
        "React.js Developer skilled in HTML, CSS, JavaScript, React 19, Next.js, TypeScript & Tailwind CSS. Built an e-commerce platform focused on performance. Focused on front-end development, responsive web applications & user interface design.",
      cta1: "View Projects",
      cta2: "Get in Touch",
      scroll: "Scroll",
      role: "Junior Front-End Developer",
      location: "Cairo, Egypt",
    },
    about: {
      kicker: "About me",
      title: "Crafting interfaces with intent.",
      paragraph:
        "I'm a Front-End Developer based in Cairo, focused on building accessible, responsive and performant web applications. I love turning complex requirements into clean, intuitive interfaces — and shipping them fast.",
      educationTitle: "Education",
      skillsTitle: "Skills & Tools",
      certificatesTitle: "Certificates",
      downloadCV: "Download my CV",
      education: [
        {
          school: "Route Academy, Cairo",
          degree: "Front-End Web Development Professional Diploma",
          period: "Sep 2025 — Apr 2026",
        },
        {
          school: "Helwan University, Cairo",
          degree: "Bachelor of Law — Grade: Good",
          period: "Sep 2020 — Jul 2024",
        },
      ],
      certificates: [
        { name: "Front-End Developer", issuer: "Route Academy", date: "April 2026" },
      ],
    },
    projects: {
      kicker: "Selected work",
      title: "Projects I'm proud of.",
      subtitle:
        "A small selection of recent builds focused on performance, UX and clean code.",
      live: "Live Preview",
      code: "Source",
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something great.",
      subtitle:
        "Have a project in mind, a role to fill, or just want to say hi? My inbox is always open.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully — I'll get back to you soon!",
      error: "Something went wrong. Please try again.",
      validation: {
        nameMin: "Name must be at least 2 characters",
        emailInvalid: "Please enter a valid email",
        messageMin: "Message must be at least 10 characters",
      },
      direct: "Or reach me directly",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with React, Tailwind CSS & Framer Motion.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      projects: "أعمالي",
      contact: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      toggleTheme: "تبديل المظهر",
      toggleLang: "English",
    },
    hero: {
      eyebrow: "متاح لفرص عمل جديدة",
      title1: "أهلاً، أنا أحمد.",
      title2: "أبني تجارب ويب",
      title3: "حديثة وسريعة الأداء.",
      subtitle:
        "مطوّر واجهات أمامية متخصص في React.js، أمتلك خبرة بـ HTML و CSS و JavaScript و React 19 و Next.js و TypeScript و Tailwind CSS. طوّرت متجراً إلكترونياً مع تركيز على الأداء. تركيزي الأساسي على تطوير الواجهات الأمامية وتصميم تطبيقات ويب متجاوبة وتجربة مستخدم متميزة.",
      cta1: "استعرض الأعمال",
      cta2: "تواصل معي",
      scroll: "اسحب للأسفل",
      role: "مطوّر واجهات أمامية مبتدئ",
      location: "القاهرة، مصر",
    },
    about: {
      kicker: "نبذة عني",
      title: "أصنع واجهات بنيّة واضحة وهدف محدد.",
      paragraph:
        "مطوّر واجهات أمامية مقيم في القاهرة، أركّز على بناء تطبيقات ويب متجاوبة وسهلة الوصول وعالية الأداء. أحبّ تحويل المتطلبات المعقّدة إلى واجهات نظيفة وبديهية، وتسليمها بسرعة وكفاءة.",
      educationTitle: "التعليم",
      skillsTitle: "المهارات والأدوات",
      certificatesTitle: "الشهادات",
      downloadCV: "حمّل سيرتي الذاتية",
      education: [
        {
          school: "أكاديمية روت، القاهرة",
          degree: "دبلومة احترافية في تطوير الواجهات الأمامية",
          period: "سبتمبر 2025 — أبريل 2026",
        },
        {
          school: "جامعة حلوان، القاهرة",
          degree: "بكالوريوس الحقوق — تقدير: جيد",
          period: "سبتمبر 2020 — يوليو 2024",
        },
      ],
      certificates: [
        { name: "مطوّر واجهات أمامية", issuer: "أكاديمية روت", date: "أبريل 2026" },
      ],
    },
    projects: {
      kicker: "أعمال مختارة",
      title: "مشاريع أعتزّ بها.",
      subtitle: "مجموعة من أحدث أعمالي مع تركيز على الأداء وتجربة المستخدم وجودة الكود.",
      live: "معاينة مباشرة",
      code: "الكود المصدري",
    },
    contact: {
      kicker: "تواصل معي",
      title: "هيّا نبني شيئاً عظيماً معاً.",
      subtitle: "لديك مشروع أو وظيفة أو حتى مجرّد سلام؟ بريدي مفتوح دائماً.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      success: "تمّ إرسال رسالتك بنجاح — سأردّ عليك قريباً!",
      error: "حدث خطأ ما، حاول مرة أخرى.",
      validation: {
        nameMin: "الاسم يجب أن يكون حرفين على الأقل",
        emailInvalid: "أدخل بريداً إلكترونياً صحيحاً",
        messageMin: "الرسالة يجب أن تكون 10 أحرف على الأقل",
      },
      direct: "أو تواصل معي مباشرة",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      built: "بُني باستخدام React و Tailwind CSS و Framer Motion.",
    },
  },
};
