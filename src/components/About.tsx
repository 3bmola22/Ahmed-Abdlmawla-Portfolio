"use client";
import { motion } from "framer-motion";
import { Award, Download, GraduationCap, Sparkles } from "lucide-react";
import { useApp } from "../providers/AppProvider";
import { personal, skills } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { t } = useApp();
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-white dark:bg-ink-950 border-t border-ink-100 dark:border-white/5"
    >
      <div className="container-x">
        <SectionHeader kicker={t.about.kicker} title={t.about.title} />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — bio + cv */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-lg leading-relaxed text-ink-700 dark:text-ink-300 text-balance">
              {t.about.paragraph}
            </p>

            <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-ink-50 to-white p-6 dark:border-white/10 dark:from-ink-900 dark:to-ink-950">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                <Sparkles className="h-3.5 w-3.5" />
                CV / Resume
              </div>
              <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">
                {t.about.downloadCV}.
              </p>
              <a
                href={personal.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-ink-950 px-5 py-3 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 transition shadow-lg shadow-ink-950/10"
              >
                <Download className="h-4 w-4" />
                {t.nav.downloadCV}
              </a>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                <Award className="h-4 w-4" />
                {t.about.certificatesTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {t.about.certificates.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-ink-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-ink-900/50"
                  >
                    <div>
                      <div className="text-sm font-semibold">{c.name}</div>
                      <div className="text-xs text-ink-500 dark:text-ink-400">
                        {c.issuer}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-ink-500 dark:text-ink-400">
                      {c.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — education + skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Education */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                <GraduationCap className="h-4 w-4" />
                {t.about.educationTitle}
              </h3>
              <ol className="relative mt-5 space-y-5 ms-3 border-s border-ink-200 dark:border-white/10 ps-6">
                {t.about.education.map((ed, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -start-[31px] top-1 grid h-3 w-3 place-items-center rounded-full bg-ink-950 ring-4 ring-white dark:bg-white dark:ring-ink-950" />
                    <div className="text-xs font-medium text-ink-500 dark:text-ink-400">
                      {ed.period}
                    </div>
                    <div className="mt-1 text-base font-semibold text-ink-950 dark:text-white">
                      {ed.degree}
                    </div>
                    <div className="text-sm text-ink-600 dark:text-ink-400">
                      {ed.school}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                {t.about.skillsTitle}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02, duration: 0.3 }}
                    className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink-700 hover:border-ink-400 hover:text-ink-950 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:border-white/30 dark:hover:text-white transition"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
