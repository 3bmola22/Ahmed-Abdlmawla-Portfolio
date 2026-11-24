// =============================================================
//  بيانات البورتفوليو — يا أحمد عدّل من هنا
// =============================================================

export const personal = {
  name: "Ahmed Salamah",
  nameAr: "احمد سلامه",
  role: "Junior Front-End Developer",
  location: "Cairo, Egypt",
  email: "3bmola22@gmail.com",
  phone: "+201515397160",
  phoneDisplay: "01515397160",
  github: "https://github.com/3bmola22",
  whatsapp: "https://wa.me/201515397160",
  cvPath: "/Ahmed_Abdlmawla_Junior Front-End Developer (React.js Developer).pdf", // يا أحمد: ضع ملف cv.pdf داخل مجلد public
  profileImage: "/images/profile.jpg",
};

export const skills = [
  "React 19",
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS v4",
  "TanStack Query v5",
  "React Hook Form",
  "Zod",
  "Framer Motion 12",
  "Vite",
  "Axios",
  "JWT Auth",
  "REST APIs",
  "Git & GitHub",
  "Responsive Design",
  "SEO",
  "Web Performance",
];

export type Project = {
  title: string;
  description: { en: string; ar: string };
  tags: string[];
  live: string;
  github?: string;
  accent: string; // Tailwind gradient classes
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: {
      en: "An e-commerce web app built with Next.js and React, with credentials sign-in through NextAuth and a focus on performance and clean code.",
      ar: "تطبيق ويب لمتجر إلكتروني مبني بـ Next.js و React، مع تسجيل دخول عبر NextAuth وتركيز على الأداء ونظافة الكود.",
    },
    tags: ["Next.js", "React", "NextAuth"],
    live: "https://e-commerce-app-alpha-olive.vercel.app/",
    accent: "from-emerald-400/20 via-teal-400/10 to-cyan-500/20",
  },
  {
    title: "Social Media App",
    description: {
      en: "A modern social media app with a content feed, user interactions, protected routes and JWT authentication. Smooth, snappy and responsive across devices.",
      ar: "تطبيق تواصل اجتماعي حديث يحتوي على عرض المنشورات وتفاعلات بين المستخدمين ومسارات محميّة ومصادقة بـ JWT. تجربة سلسة وسريعة على جميع الأجهزة.",
    },
    tags: ["React 19", "Vite", "Tailwind v4", "TanStack Query", "React Router", "HeroUI", "Framer Motion", "JWT Auth"],
    live: "https://social-media-app-one-mu.vercel.app/",
    accent: "from-indigo-400/20 via-violet-400/10 to-fuchsia-500/20",
  },
  {
    title: "Architect Portfolio — Ahmed Sayed Galal",
    description: {
      en: "A bilingual (Arabic/English) portfolio website for architect Ahmed Sayed Galal. It presents seven projects in four categories, each with a photo slider and full-screen gallery, plus skills, education, CV download and contact, in dark and light themes.",
      ar: "موقع بورتفوليو ثنائي اللغة (عربي/إنجليزي) للمهندس المعماري أحمد سيد جلال. يعرض سبعة مشاريع في أربعة تصنيفات، لكل مشروع سلايدر صور وعرض بملء الشاشة، مع المهارات والتعليم وتحميل السيرة الذاتية والتواصل، ويدعم الوضع الداكن والفاتح.",
    },
    tags: ["React 19", "TypeScript", "Vite", "Tailwind v4", "Vercel"],
    live: "https://eng-ahmed-sayed-portfolio.vercel.app/",
    accent: "from-amber-400/20 via-orange-400/10 to-yellow-500/20",
  },
  {
    title: "Legal Aid Office Website",
    description: {
      en: "A website for a legal aid office in Helwan, Cairo, with Arabic and English pages (some English content is still being translated). It presents the office's services, team and contact details, and publishes simplified legal articles managed from an admin dashboard. Built with Next.js and TypeScript, deployed on Vercel, code on GitHub, with content and images stored in Supabase.",
      ar: "موقع لمكتب المساعدة القانونية بحلوان، القاهرة، بصفحات عربية وإنجليزية (جزء من المحتوى الإنجليزي ما زال قيد الترجمة). يعرض خدمات المكتب وفريقه وبيانات التواصل، وينشر شروحات قانونية مبسطة تُدار من لوحة إدارة. مبني بـ Next.js و TypeScript ومنشور على Vercel والكود على GitHub، والمحتوى والصور مخزنة في Supabase.",
    },
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "Supabase", "Vercel", "GitHub"],
    live: "https://tarek-khater-lawyer.vercel.app/ar",
    accent: "from-sky-400/20 via-blue-400/10 to-indigo-500/20",
  },
];
