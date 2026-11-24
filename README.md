# Ahmed Salamah — Portfolio

موقع شخصي (Portfolio) لـ **Ahmed Salamah** — Junior Front-End Developer (React.js).

## الستاك المستخدم
- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion (للأنيميشن وتمييز الـ active section)
- React Hook Form + Zod (تحقق من النموذج)
- Sonner (Toast notifications)
- Lucide React (أيقونات)

## المميزات
- **Dark Mode افتراضي** + زرار Theme Toggle.
- **دعم اللغتين EN / AR** مع RTL كامل.
- **Navbar مش Sticky من البداية** — يظهر ويثبت بعد الـ Hero Section مباشرة.
- **Active Link Highlighting** ديناميكي عبر `IntersectionObserver`.
- نموذج تواصل مع validation وـ toast.
- محسّن للـ SEO (meta tags + semantic HTML + alt + lang/dir دايم محدّث).

## التشغيل المحلي
```bash
npm install
npm run dev
```

## كيفية إضافة ملف الـ CV
ضع ملف السيرة الذاتية الخاص بك في:
```
public/cv.pdf
```
سيتم ربطه تلقائياً بكل أزرار "Download CV".

## كيفية تغيير الصورة الشخصية
استبدل الصورة في:
```
public/images/profile.jpg
```
أو غيّر المسار من `src/data/portfolio.ts`.

## إعداد EmailJS (اختياري)
في الوقت الحالي نموذج التواصل يحاكي الإرسال بنجاح. لتفعيل الإرسال الحقيقي:
1. `npm install @emailjs/browser`
2. أنشئ حساب على [emailjs.com](https://www.emailjs.com/) وأنشئ Service + Template.
3. افتح `src/components/Contact.tsx` وداخل `onSubmit` استبدل المحاكاة بـ:
```ts
import emailjs from "@emailjs/browser";
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  values,
  "YOUR_PUBLIC_KEY"
);
```

## النشر على Vercel
1. ارفع المشروع على GitHub.
2. ادخل [vercel.com](https://vercel.com) واختر "Import Project".
3. اختر المستودع — Vercel يكتشف Vite تلقائياً.
4. اضغط Deploy.

## نصائح SEO سريعة
- عدّل `<title>` و `<meta name="description">` في `index.html`.
- أضف ملف `public/robots.txt` و `public/sitemap.xml` (اختياري).
- استخدم صور WebP إن أمكن وأضف `width`/`height` لتقليل CLS.
- اضغط الصورة الشخصية وارفعها بحجم مناسب.

---
صنع بحب 🤍
