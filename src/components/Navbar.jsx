import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

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

function ThemeIconDropdown({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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

  const items = [
    { key: "theme-dark", label: "Dark" },
    { key: "theme-light", label: "Light" },
    { key: "theme-matrix", label: "Matrix" },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          px-3 py-2 rounded-lg text-sm
          font-semibold
          text-[rgb(var(--muted))]
          hover:text-[rgb(var(--text))]
          hover:bg-[rgb(var(--btn))]
          transition
        "
        aria-haspopup="menu"
        aria-expanded={open}
        title="Theme"
      >
        {theme === "theme-dark" ? (
          <HiOutlineMoon className="w-5 h-5" />
        ) : (
          <HiOutlineSun className="w-5 h-5" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="
              absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl
              border border-[rgb(var(--border))]
              bg-[rgb(var(--nav-solid))]
              shadow-xl z-[9999]
            "
          >
            {items.map((it) => (
              <button
                key={it.key}
                role="menuitem"
                onClick={() => {
                  setTheme(it.key);
                  setOpen(false);
                }}
                className="
                  w-full px-4 py-3 text-left text-sm flex items-center gap-2
                  text-[rgb(var(--text))]
                  hover:bg-[rgb(var(--btn))]
                  transition
                "
              >
                <span>{it.label}</span>
                {theme === it.key ? <span className="ml-auto">✓</span> : null}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar({ t, theme, setTheme }) {
  const scrolled = useScrolled(24);

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
        animate={{ y: scrolled ? 12 : 0, scale: scrolled ? 0.98 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="
          pointer-events-auto mx-auto mt-3
          w-fit rounded-2xl px-4 py-2
          border border-[rgb(var(--border))]
          bg-[rgb(var(--nav-solid))]
          shadow-lg
        "
      >
        <div className="flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="
                px-3 py-2 rounded-lg text-sm
                font-semibold
                text-[rgb(var(--muted))]
                hover:text-[rgb(var(--text))]
                hover:bg-[rgb(var(--btn))]
                transition
              "
            >
              <span className="nav-link-fx">{l.label}</span>
            </a>
          ))}

          <ThemeIconDropdown theme={theme} setTheme={setTheme} />
        </div>
      </motion.nav>
    </div>
  );
}
