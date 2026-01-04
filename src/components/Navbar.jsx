import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

/**
 * Histeresis:
 * - Se activa a partir de showAt px
 * - Se desactiva cuando vuelves a hideAt px
 * Evita que el navbar se quede "siempre activo".
 */
function useScrolled(showAt = 80, hideAt = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getY = () =>
      window.scrollY ??
      document.documentElement.scrollTop ??
      document.body.scrollTop ??
      0;

    const onScroll = () => {
      const y = getY();
      setScrolled((prev) => {
        if (!prev && y >= showAt) return true;
        if (prev && y <= hideAt) return false;
        return prev;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAt, hideAt]);

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
    <div ref={ref} className="relative flex-shrink-0">
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

/** Selector idioma compacto (para móvil dentro del navbar) */
function LanguageMini({ lang, setLang }) {
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

  return (
    <div ref={ref} className="relative flex-shrink-0 md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          px-3 py-2 rounded-lg text-sm font-semibold
          border border-[rgb(var(--border))]
          bg-[rgb(var(--btn))]
          text-[rgb(var(--text))]
          hover:bg-[rgb(var(--btn-hover))]
          transition
        "
        aria-haspopup="menu"
        aria-expanded={open}
        title="Language"
      >
        {lang === "es" ? "ES" : "EN"} <span className="opacity-70">▾</span>
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
              absolute right-0 mt-2 w-36 overflow-hidden rounded-2xl
              border border-[rgb(var(--border))]
              bg-[rgb(var(--nav-solid))]
              shadow-xl z-[9999]
            "
          >
            <button
              role="menuitem"
              onClick={() => {
                setLang("es");
                setOpen(false);
              }}
              className="
                w-full px-4 py-3 text-left text-sm
                text-[rgb(var(--text))]
                hover:bg-[rgb(var(--btn))]
                transition
              "
            >
              Español {lang === "es" ? "✓" : ""}
            </button>

            <button
              role="menuitem"
              onClick={() => {
                setLang("en");
                setOpen(false);
              }}
              className="
                w-full px-4 py-3 text-left text-sm
                text-[rgb(var(--text))]
                hover:bg-[rgb(var(--btn))]
                transition
              "
            >
              English {lang === "en" ? "✓" : ""}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar({ t, theme, setTheme, lang, setLang }) {
  const scrolled = useScrolled(80, 20);
  const [menuOpen, setMenuOpen] = useState(false);

  const LINKS = [
    { label: t?.nav?.inicio ?? "Inicio", href: "#resume" },
    { label: t?.nav?.experiencia ?? "Experiencia", href: "#experiencia" },
    { label: t?.nav?.portfolio ?? "Portfolio", href: "#portfolio" },
    { label: t?.nav?.about ?? "Sobre mí", href: "#about" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.nav
        initial={false}
        animate={{ y: scrolled ? 12 : 0, scale: scrolled ? 0.98 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={[
          "pointer-events-auto mx-auto mt-3",
          "rounded-2xl px-3 py-2",
          // ✅ responsive width (no se sale en móvil)
          "max-w-[92vw] w-fit",
          scrolled
            ? "border border-[rgb(var(--border))] bg-[rgb(var(--nav-solid))] shadow-lg"
            : "border border-transparent bg-transparent shadow-none",
        ].join(" ")}
      >
        {/* Barra superior */}
        <div className="flex items-center gap-1">
          {/* Desktop: links completos */}
          <div className="hidden md:flex items-center gap-1">
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
          </div>

          {/* Mobile: solo Inicio + idioma mini */}
          <div className="flex md:hidden items-center gap-1">
            <a
              href={LINKS[0].href}
              className="
                px-3 py-2 rounded-lg text-sm
                font-semibold
                text-[rgb(var(--muted))]
                hover:text-[rgb(var(--text))]
                hover:bg-[rgb(var(--btn))]
                transition
              "
            >
              <span className="nav-link-fx">{LINKS[0].label}</span>
            </a>

            <LanguageMini lang={lang} setLang={setLang} />
          </div>

          {/* Theme */}
          <ThemeIconDropdown theme={theme} setTheme={setTheme} />

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="
              md:hidden px-3 py-2 rounded-lg
              hover:bg-[rgb(var(--btn))]
              transition text-[rgb(var(--text))]
            "
            aria-label="Open menu"
          >
            {menuOpen ? (
              <HiOutlineXMark className="w-5 h-5" />
            ) : (
              <HiOutlineBars3 className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Menú desplegable móvil */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              className="
                md:hidden mt-2 p-2 rounded-2xl
                border border-[rgb(var(--border))]
                bg-[rgb(var(--nav-solid))]
                shadow-xl
              "
            >
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block px-4 py-3 rounded-xl text-sm font-semibold
                    text-[rgb(var(--text))]
                    hover:bg-[rgb(var(--btn))]
                    transition
                  "
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
