import { useState } from "react";
import { texts } from "./i18n/texts";

import Navbar from "./components/Navbar";
import LanguageFloating from "./components/LanguageFloating";

import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import About from "./sections/About";

export default function App() {
  const [lang, setLang] = useState("es");
  const t = texts[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      <Navbar t={t} />
      <LanguageFloating lang={lang} setLang={setLang} />

      <main>
        <section id="resume"><Hero t={t} /></section>
        <section id="experiencia"><Experience t={t} /></section>
        <section id="skills"><Skills t={t} /></section>
        <section id="portfolio"><Portfolio t={t} /></section>
        <section id="about"><About t={t} /></section>
        <section id="contact"><Contact t={t} /></section>
      </main>
    </div>
  );
}
