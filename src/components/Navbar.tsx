import { motion, AnimatePresence } from "framer-motion";
import { Download, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useApp } from "../providers/AppProvider";
import { useActiveSection, useScrolledPast } from "../hooks/useActiveSection";
import { personal } from "../data/portfolio";
import { cn } from "../utils/cn";
import { MdDevices } from "react-icons/md";

const SECTIONS = ["home", "about", "projects", "contact"] as const;

export default function Navbar() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp();
  const active = useActiveSection([...SECTIONS]);
  // الـ Navbar يظهر ويثبت بعد ما المستخدم يعدّي الـ Hero Section
  const scrolled = useScrolledPast(window.innerHeight * 0.85);
  const [mobileOpen, setMobileOpen] = useState(false);

  const labels: Record<(typeof SECTIONS)[number], string> = {
    home: t.nav.home,
    about: t.nav.about,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed inset-x-0 top-0 z-50"
        >
          <div className="container-x pt-3 sm:pt-4">
            <nav
              className={cn(
                "flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 backdrop-blur-xl",
                "border-ink-200/80 bg-white/75 shadow-lg shadow-ink-900/5",
                "dark:border-white/10 dark:bg-ink-950/70 dark:shadow-black/40",
              )}
            >
              {/* Logo */}
              <a
                href="#home"
                className="flex items-center gap-2.5 group"
                aria-label="Home"
              >
                <MdDevices />

                <span className="hidden sm:inline font-semibold tracking-tight">
                  {personal.name}
                </span>
              </a>

              {/* Desktop nav */}
              <ul className="hidden md:flex items-center gap-1">
                {SECTIONS.map((id) => {
                  const isActive = active === id;
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={cn(
                          "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                          isActive
                            ? "text-ink-950 dark:text-white"
                            : "text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white",
                        )}
                      >
                        {labels[id]}
                        {isActive && (
                          <motion.span
                            layoutId="active-pill"
                            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-ink-950 dark:bg-white"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Right cluster */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleLang}
                  aria-label="Toggle language"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-ink-600 hover:bg-ink-100 hover:text-ink-950 dark:text-ink-300 dark:hover:bg-white/5 dark:hover:text-white transition"
                >
                  <Globe className="h-4 w-4" />
                  <span>{lang === "en" ? "AR" : "EN"}</span>
                </button>

                <button
                  onClick={toggleTheme}
                  aria-label={t.nav.toggleTheme}
                  className="grid h-9 w-9 place-items-center rounded-lg text-ink-600 hover:bg-ink-100 hover:text-ink-950 dark:text-ink-300 dark:hover:bg-white/5 dark:hover:text-white transition"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                      <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="h-4.5 w-4.5" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="h-4.5 w-4.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                <a
                  href={personal.cvPath}
                  download
                  className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-ink-950 px-3.5 py-2 text-xs font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 transition shadow-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  {t.nav.downloadCV}
                </a>

                <button
                  onClick={() => setMobileOpen((p) => !p)}
                  className="md:hidden grid h-9 w-9 place-items-center rounded-lg text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5"
                  aria-label="Menu"
                >
                  {mobileOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="md:hidden mt-2 rounded-2xl border border-ink-200/80 bg-white/90 p-3 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-ink-950/85"
                >
                  <ul className="grid gap-1">
                    {SECTIONS.map((id) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm font-medium",
                            active === id
                              ? "bg-ink-100 text-ink-950 dark:bg-white/10 dark:text-white"
                              : "text-ink-600 dark:text-ink-300",
                          )}
                        >
                          {labels[id]}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-center gap-2 border-t border-ink-200/80 pt-2 dark:border-white/10">
                    <button
                      onClick={toggleLang}
                      className="flex-1 rounded-lg bg-ink-100 px-3 py-2 text-xs font-semibold dark:bg-white/5"
                    >
                      {lang === "en" ? "العربية" : "English"}
                    </button>
                    <a
                      href={personal.cvPath}
                      download
                      className="flex-1 rounded-lg bg-ink-950 px-3 py-2 text-xs font-semibold text-white text-center dark:bg-white dark:text-ink-950"
                    >
                      {t.nav.downloadCV}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
