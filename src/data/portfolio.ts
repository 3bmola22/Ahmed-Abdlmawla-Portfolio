// =============================================================
//  بيانات البورتفوليو — يا أحمد عدّل من هنا
// =============================================================

export const personal = {
  name: "Ahmed Abdlmawla",
  nameAr: "أحمد عبد المولى",
  role: "Junior Front-End Developer",
  location: "Cairo, Egypt",
  email: "3bmola22@gmail.com",
  phone: "+201017633101",
  phoneDisplay: "+20 101 763 3101",
  github: "https://github.com/3bmola22",
  whatsapp: "https://wa.me/201017633101",
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
      en: "A high-performance front-end e-commerce app built with React 19, Vite, Tailwind CSS v4, TanStack Query v5 and Framer Motion 12. Achieved 98–100 Lighthouse scores across the board.",
      ar: "تطبيق متجر إلكتروني عالي الأداء مبنيّ بـ React 19 و Vite و Tailwind CSS v4 و TanStack Query v5 و Framer Motion 12. حقّق درجات Lighthouse بين 98 و 100 في كل المعايير.",
    },
    tags: ["React 19", "Vite", "Tailwind v4", "TanStack Query", "Framer Motion"],
    live: "https://e-commerce-app-alpha-olive.vercel.app/",
    accent: "from-emerald-400/20 via-teal-400/10 to-cyan-500/20",
  },
  {
    title: "Social Media App",
    description: {
      en: "A modern social media app with a real-time feed, user interactions, protected routes and JWT authentication. Smooth, snappy and responsive across devices.",
      ar: "تطبيق تواصل اجتماعي حديث يحتوي على تغذية لحظية وتفاعلات بين المستخدمين ومسارات محميّة ومصادقة بـ JWT. تجربة سلسة وسريعة على جميع الأجهزة.",
    },
    tags: ["React", "JWT Auth", "Protected Routes", "REST APIs"],
    live: "https://social-media-app-one-mu.vercel.app/",
    accent: "from-indigo-400/20 via-violet-400/10 to-fuchsia-500/20",
  },
];
