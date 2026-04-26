import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Globe, Mail, MapPin, Moon, Sun } from "lucide-react";
import { GithubIcon } from "./icons";
import { useApp } from "../providers/AppProvider";
import { personal, skills } from "../data/portfolio";
import { MdDevices } from "react-icons/md";

export default function Hero() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-white to-ink-50 dark:from-ink-950 dark:via-ink-950 dark:to-ink-900"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400/20 via-fuchsia-400/10 to-transparent blur-3xl dark:from-violet-500/15 dark:via-fuchsia-500/10" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tl from-cyan-400/20 via-blue-400/10 to-transparent blur-3xl dark:from-cyan-500/10" />
        <div className="absolute inset-0 grain opacity-40 dark:opacity-100" />
      </div>

      {/* Mini top bar (لأن الـ Navbar مش ظاهر فوق الـ Hero) */}
      <div className="container-x pt-6 sm:pt-8 relative">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <MdDevices size={30} />

            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold tracking-tight text-sm">
                {personal.name}
              </span>
              <span className="text-[11px] text-ink-500 dark:text-ink-400">
                {t.hero.role}
              </span>
            </span>
          </a>
          <p className="text-xl font-bold">React.js Developer</p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5 transition"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === "en" ? "AR" : "EN"}</span>
            </button>
            <button
              onClick={toggleTheme}
              aria-label={t.nav.toggleTheme}
              className="grid h-9 w-9 place-items-center rounded-lg text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5 transition"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main hero grid */}
      <div className="container-x relative pt-12 sm:pt-16 lg:pt-20 pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-ink-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]"
            >
              <span className="block text-ink-500 dark:text-ink-400 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {t.hero.title1}
              </span>
              <span className="block mt-2 text-ink-950 dark:text-white">
                {t.hero.title2}
              </span>
              <span className="block bg-gradient-to-r from-ink-900 via-ink-500 to-ink-900 bg-clip-text text-transparent dark:from-white dark:via-ink-400 dark:to-white">
                {t.hero.title3}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink-950/20 hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:shadow-white/10 dark:hover:bg-ink-100 transition"
              >
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 flip-rtl" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-300 bg-white/40 px-5 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition"
              >
                <Mail className="h-4 w-4" />
                {t.hero.cta2}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500 dark:text-ink-400"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {t.hero.location}
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-ink-900 dark:hover:text-white transition"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                github.com/3bmola22
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-ink-900 dark:hover:text-white transition"
              >
                <Mail className="h-3.5 w-3.5" />
                {personal.email}
              </a>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-ink-300/40 via-transparent to-ink-300/40 blur-2xl dark:from-white/10 dark:to-white/10" />
              <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-ink-100 shadow-2xl dark:border-white/10 dark:bg-ink-900 glow">
                <img
                  src={personal.profileImage}
                  alt={`${personal.name} — ${t.hero.role}`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      {t.hero.role.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <p className="text-base font-semibold">{personal.name}</p>
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-2.5 py-1 text-[10px] font-semibold">
                    v2026
                  </div>
                </div>
              </div>

              {/* Floating skill chip */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-2xl border border-ink-200 bg-white px-3 py-2 shadow-xl dark:border-white/10 dark:bg-ink-900"
              >
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-500 text-base font-black">
                  ⚡
                </div>
                <div>
                  <div className="text-[11px] text-ink-500 dark:text-ink-400">
                    Lighthouse
                  </div>
                  <div className="text-sm font-bold">98–100 / 100</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Marquee of skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative mt-20 overflow-hidden border-y border-ink-200/70 py-5 dark:border-white/10"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-ink-950 z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-50 to-transparent dark:from-ink-900 z-10" />
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-ink-400 dark:text-ink-500"
              >
                {s}
                <span className="mx-5 text-ink-300 dark:text-ink-700">•</span>
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-xs text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white transition"
          >
            <span>{t.hero.scroll}</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
