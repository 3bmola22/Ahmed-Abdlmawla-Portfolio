import { motion } from "framer-motion";

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300">
        <span className="h-1.5 w-1.5 rounded-full bg-ink-950 dark:bg-white" />
        {kicker}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
