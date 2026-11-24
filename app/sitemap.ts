import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ahmed-abdlmawla-portfolio.vercel.app";
  return ["en", "ar"].map((l) => ({ url: `${base}/${l}`, alternates: { languages: { en: `${base}/en`, ar: `${base}/ar` } } }));
}
