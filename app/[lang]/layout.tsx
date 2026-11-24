import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE = "https://ahmed-abdlmawla-portfolio.vercel.app";
const langs = ["en", "ar"] as const;

const meta = {
  en: {
    title: "Ahmed Salamah | Junior Front-End Developer (React.js), Cairo, Egypt",
    description:
      "Ahmed Salamah is a Junior Front-End Developer in Cairo, Egypt. He builds web apps with React 19, Next.js, TypeScript and Tailwind CSS. See his projects and get in touch.",
  },
  ar: {
    title: "احمد سلامه | مطوّر واجهات أمامية مبتدئ (React.js)، القاهرة، مصر",
    description:
      "احمد سلامه مطوّر واجهات أمامية مبتدئ في القاهرة، مصر. يبني تطبيقات ويب بـ React 19 وNext.js وTypeScript وTailwind CSS. شاهد أعماله وتواصل معه.",
  },
};

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!(lang === "en" || lang === "ar")) return {};
  const m = meta[lang];
  return {
    metadataBase: new URL(SITE),
    title: m.title,
    description: m.description,
    authors: [{ name: "Ahmed Salamah" }],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    icons: { icon: "/images/icon.jpg" },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      title: m.title,
      description: m.description,
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_EG",
      images: [{ url: "/images/profile.jpg", alt: "Ahmed Salamah" }],
    },
    twitter: { card: "summary", title: m.title, description: m.description, images: ["/images/profile.jpg"] },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(lang === "en" || lang === "ar")) notFound();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmed Salamah",
    alternateName: "احمد سلامه",
    jobTitle: "Junior Front-End Developer",
    url: `${SITE}/${lang}`,
    email: "mailto:3bmola22@gmail.com",
    telephone: "+201515397160",
    sameAs: ["https://github.com/3bmola22"],
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  };
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className="dark" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        {children}
      </body>
    </html>
  );
}
