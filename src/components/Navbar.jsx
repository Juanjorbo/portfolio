import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

const LINKS = [
  { label: "Resume", href: "#resume" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre mí", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(24);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.nav
        initial={false}
        animate={scrolled ? { y: 14, scale: 0.98 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={[
          "pointer-events-auto mx-auto mt-3",
          "w-fit rounded-2xl px-4 py-2",
          scrolled
            ? "border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-lg"
            : "border border-transparent bg-transparent shadow-none",
        ].join(" ")}
      >
        <div className="flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
            >
              <span className="nav-link-fx">{l.label}</span>
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
