import { Toaster } from "sonner";
import { AppProvider, useApp } from "./providers/AppProvider";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ToasterWrapper() {
  const { theme, dir } = useApp();
  return (
    <Toaster
      position="bottom-center"
      theme={theme}
      dir={dir}
      richColors
      closeButton
    />
  );
}

function Shell() {
  return (
    <div className="min-h-screen bg-white dark:bg-ink-950 text-ink-900 dark:text-ink-100">
      {/* Hero أولاً (بدون Navbar فوقه) */}
      <Hero />
      {/* الـ Navbar يظهر sticky بعد ما المستخدم يعدّي الـ Hero */}
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToasterWrapper />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
