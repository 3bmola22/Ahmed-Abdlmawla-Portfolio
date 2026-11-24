"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { translations, type Dict, type Lang } from "../i18n/translations";
export type { Dict };

type Theme = "dark" | "light";

type AppContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
  t: Dict;
  dir: "ltr" | "rtl";
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo<AppContextValue>(
    () => ({
      theme,
      toggleTheme: () => setTheme((p) => (p === "dark" ? "light" : "dark")),
      lang,
      toggleLang: () => router.push(lang === "en" ? "/ar" : "/en"),
      t: translations[lang],
      dir: lang === "ar" ? "rtl" : "ltr",
    }),
    [theme, lang, router]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
