import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import MatrixText from "./MatrixText";

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

function ThemeIconDropdown({ theme, setTheme, setMenuOpen, scrambleKey }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isDark = theme === "theme-dark";

  useEffect(() => {
    setMenuOpen?.(open);
    return () => setMenuOpen?.(false);
  }, [open, setMenuOpen]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
        aria-haspopup="menu"
        aria-expanded={open}
        title="Theme"
      >
        <span className="nav-link-fx inline-flex items-center">
          {isDark ? <HiOutlineMoon className="w-5 h-5" /> : <HiOutlineSun className="w-5 h-5" />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="
              absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl
              border border-white/10 bg-zinc-950 shadow-xl z-[9999]
            "
          >
            <button
              role="menuitem"
              onClick={() => {
                setTheme("theme-dark");
                setOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-sm flex items-center gap-2
                hover:bg-white/10 transition
                ${theme === "theme-dark" ? "text-white" : "text-white/70"}`}
            >
              <HiOutlineMoon className="w-4 h-4" />
              <MatrixText text="Dark" scrambleKey={scrambleKey} />
              {theme === "theme-dark" ? <span className="ml-auto">✓</span> : null}
            </button>

            <button
              role="menuitem"
              onClick={() => {
                setTheme("theme-light");
                setOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-sm flex items-center gap-2
                hover:bg-white/10 transition
                ${theme === "theme-light" ? "text-white" : "text-white/70"}`}
            >
              <HiOutlineSun className="w-4 h-4" />
              <MatrixText text="Light" scrambleKey={scrambleKey} />
              {theme === "theme-light" ? <span className="ml-auto">✓</span> : null}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar({ t, theme, setTheme, scrambleKey }) {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);

  const LINKS = [
    { label: t?.nav?.inicio ?? "Inicio", href: "#resume" },
    { label: t?.nav?.experiencia ?? "Experiencia", href: "#experiencia" },
    { label: t?.nav?.portfolio ?? "Portfolio", href: "#portfolio" },
    { label: t?.nav?.about ?? "Sobre mí", href: "#about" },
    { label: t?.nav?.contacto ?? "Contacto", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.nav
        initial={false}
        animate={scrolled ? { y: 14, scale: 0.98 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={[
          "pointer-events-auto mx-auto mt-3",
          "w-fit rounded-2xl px-4 py-2",
          scrolled || menuOpen
            ? "border border-white/10 bg-zinc-950 shadow-lg"
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
              <span className="nav-link-fx">
                <MatrixText text={l.label} scrambleKey={scrambleKey} />
              </span>
            </a>
          ))}

          <ThemeIconDropdown
            theme={theme}
            setTheme={setTheme}
            setMenuOpen={setMenuOpen}
            scrambleKey={scrambleKey}
          />
        </div>
      </motion.nav>
    </div>
  );
}
