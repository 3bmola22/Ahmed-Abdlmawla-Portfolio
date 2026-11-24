"use client";
import { useApp } from "../providers/AppProvider";
import { personal } from "../data/portfolio";
import { GithubIcon, WhatsAppIcon } from "./icons";
import { Mail } from "lucide-react";

export default function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-ink-50/60 py-10 dark:border-white/5 dark:bg-ink-950">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-xs text-ink-500 dark:text-ink-400 text-center sm:text-start">
          © {year} {personal.name}. {t.footer.rights}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          {t.footer.built}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 hover:bg-ink-100 dark:border-white/10 dark:hover:bg-white/5 transition"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 hover:bg-ink-100 dark:border-white/10 dark:hover:bg-white/5 transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 hover:bg-ink-100 dark:border-white/10 dark:hover:bg-white/5 transition"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
