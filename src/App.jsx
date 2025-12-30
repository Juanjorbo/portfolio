import { useEffect, useState } from "react";
import { texts } from "./i18n/texts";

import Navbar from "./components/Navbar";
import LanguageFloating from "./components/LanguageFloating";

import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Contact from "./sections/Contact";

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("theme-dark", "theme-light");
  root.classList.add(theme);
}

export default function App() {
  const [lang, setLang] = useState("es");
  const t = texts[lang];

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "theme-dark";
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="min-h-screen
                 text-[rgb(var(--text))]
                 bg-gradient-to-br
                 from-[rgb(var(--bg-from))]
                 via-[rgb(var(--bg-via))]
                 to-[rgb(var(--bg-to))]"
    >
      <Navbar t={t} theme={theme} setTheme={setTheme} scrambleKey={lang} />
      <LanguageFloating lang={lang} setLang={setLang} />

      <main>
        <section id="resume" className="scroll-mt-28">
          <Hero t={t} scrambleKey={lang} />
        </section>

        <section id="experiencia" className="scroll-mt-28">
          <Experience t={t} scrambleKey={lang} />
          <Skills t={t} scrambleKey={lang} />
        </section>

        <section id="portfolio" className="scroll-mt-28">
          <Portfolio t={t} scrambleKey={lang} />
        </section>

        <section id="about" className="scroll-mt-28">
          <About t={t} scrambleKey={lang} />
        </section>

        <section id="contact" className="scroll-mt-28">
          <Contact t={t} scrambleKey={lang} />
        </section>
      </main>
    </div>
  );
}
