import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { AppProvider } from "@/providers/AppProvider";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!(lang === "en" || lang === "ar")) notFound();
  return (
    <AppProvider lang={lang}>
      <div className="min-h-screen bg-white dark:bg-ink-950 text-ink-900 dark:text-ink-100">
        <Hero />
        <Navbar />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster position="bottom-center" richColors closeButton dir={lang === "ar" ? "rtl" : "ltr"} />
      </div>
    </AppProvider>
  );
}
