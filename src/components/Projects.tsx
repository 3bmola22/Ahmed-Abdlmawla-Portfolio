import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../providers/AppProvider";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const { t, lang } = useApp();
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-ink-50/60 dark:bg-ink-900/30 border-t border-ink-100 dark:border-white/5"
    >
      <div className="container-x">
        <SectionHeader
          kicker={t.projects.kicker}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 sm:p-8 hover:border-ink-300 dark:border-white/10 dark:bg-ink-950 dark:hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Accent gradient */}
              <div
                className={`pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-ink-500 dark:text-ink-400">
                    Project · 0{i + 1}
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-ink-950 text-white opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 dark:bg-white dark:text-ink-950">
                    <ArrowUpRight className="h-4 w-4 flip-rtl" />
                  </div>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {p.description[lang]}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-ink-200 bg-ink-50 px-2 py-0.5 text-[11px] font-medium text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-ink-950 dark:text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    {t.projects.live}
                  </span>
                  <span className="text-ink-400">{new URL(p.live).hostname}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
