import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useApp } from "../providers/AppProvider";
import { personal } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { GithubIcon, WhatsAppIcon } from "./icons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useApp();

  const schema = z.object({
    name: z.string().min(2, t.contact.validation.nameMin),
    email: z.string().email(t.contact.validation.emailInvalid),
    message: z.string().min(10, t.contact.validation.messageMin),
  });
  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    void values;
    try {
      const PUBLIC_KEY = "ysWx6gclbf7N-Acul";
      const TEMPLATE_ID = "template_abdlmawla";
      const SERVICE_ID = "service_abdlmawla";
      // ----------------------------------------------------------
      // EmailJS integration (يا أحمد):
      // 1. ثبّت @emailjs/browser  →  npm i @emailjs/browser
      // 2. import emailjs from "@emailjs/browser";
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
      // الآن: نحاكي الإرسال بنجاح ليعمل النموذج فوراً.
      // ----------------------------------------------------------
      await new Promise((r) => setTimeout(r, 900));
      toast.success(t.contact.success);
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      toast.error(t.contact.error);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-white dark:bg-ink-950 border-t border-ink-100 dark:border-white/5"
    >
      <div className="container-x">
        <SectionHeader
          kicker={t.contact.kicker}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-7 rounded-3xl border border-ink-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-ink-900/40"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.contact.name} error={errors.name?.message}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Ahmed"
                  className="input"
                />
              </Field>
              <Field label={t.contact.email} error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@email.com"
                  className="input"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label={t.contact.message} error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="..."
                  className="input resize-none"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 disabled:opacity-60 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 transition shadow-lg shadow-ink-950/10"
            >
              {isSubmitting ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {t.contact.sending}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 flip-rtl" />
                  {t.contact.send}
                </>
              )}
            </button>
          </motion.form>

          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-3"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-2">
              {t.contact.direct}
            </h3>

            <ContactRow
              href={`mailto:${personal.email}`}
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={personal.email}
            />
            <ContactRow
              href={`tel:${personal.phone}`}
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={personal.phoneDisplay}
            />
            <ContactRow
              href={personal.whatsapp}
              icon={<WhatsAppIcon className="h-4 w-4" />}
              label="WhatsApp"
              value={personal.phoneDisplay}
            />
            <ContactRow
              href={personal.github}
              icon={<GithubIcon className="h-4 w-4" />}
              label="GitHub"
              value="github.com/3bmola22"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-ink-200);
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--color-ink-900);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input::placeholder { color: var(--color-ink-400); }
        .input:focus {
          border-color: var(--color-ink-900);
          box-shadow: 0 0 0 4px rgba(24,24,27,0.06);
        }
        .dark .input {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.10);
          color: var(--color-ink-100);
        }
        .dark .input::placeholder { color: var(--color-ink-500); }
        .dark .input:focus {
          border-color: rgba(255,255,255,0.45);
          box-shadow: 0 0 0 4px rgba(255,255,255,0.06);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-ink-700 dark:text-ink-300">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-rose-500">{error}</span>
      )}
    </label>
  );
}

function ContactRow({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-4 hover:border-ink-300 hover:bg-ink-50 dark:border-white/10 dark:bg-ink-900/40 dark:hover:border-white/20 dark:hover:bg-white/5 transition"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-100 text-ink-700 group-hover:bg-ink-950 group-hover:text-white dark:bg-white/5 dark:text-ink-200 dark:group-hover:bg-white dark:group-hover:text-ink-950 transition">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-bold uppercase tracking-widest text-ink-500 dark:text-ink-400">
          {label}
        </div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
    </a>
  );
}
