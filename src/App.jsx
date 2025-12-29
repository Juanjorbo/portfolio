import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      <Navbar />

      <main>
        <Section id="resume">
          <Hero />
        </Section>

        <Section id="experiencia">
          <Experience />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="portfolio">
          <Portfolio />
        </Section>

        <Section id="about">
          <About />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>

      </main>
    </div>
  );
}
