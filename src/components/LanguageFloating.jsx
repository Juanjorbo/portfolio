import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export default function LanguageFloating({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const ref = useRef(null);

  // cerrar al clicar fuera o ESC
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // animación suave cuando cambia el idioma
  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 260);
    return () => clearTimeout(t);
  }, [lang]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div ref={ref} className="relative">
        {/* BOTÓN FLOTANTE */}
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          animate={
            pulse
              ? {
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 25px rgba(16,185,129,0.35)",
                    "0 0 0 rgba(0,0,0,0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-11 px-4 rounded-2xl
                     border border-white/15 bg-zinc-950/70 backdrop-blur-md
                     text-sm font-semibold text-white/90
                     hover:bg-zinc-950/85 transition
                     shadow-[0_18px_50px_rgba(0,0,0,0.45)]
                     flex items-center gap-2"
          aria-haspopup="menu"
          aria-expanded={open}
        >
          {/* ICONO PRO */}
          <HiOutlineGlobeAlt className="w-4 h-4 text-white/80" />

          {/* TEXTO ES / EN ANIMADO */}
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="inline-block w-6 text-center"
            >
              {lang === "es" ? "ES" : "EN"}
            </motion.span>
          </AnimatePresence>

          <span
            className={`text-white/60 transition ${
              open ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </motion.button>

        {/* PANEL DESPLEGABLE */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              role="menu"
              className="absolute right-0 mt-2 w-44 rounded-2xl overflow-hidden
                         border border-white/15 bg-zinc-950/90 backdrop-blur-md shadow-xl"
            >
              <button
                role="menuitem"
                onClick={() => {
                  setLang("es");
                  setOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm
                  hover:bg-white/10 transition
                  ${lang === "es" ? "text-white" : "text-white/70"}`}
              >
                Español {lang === "es" ? "✓" : ""}
              </button>

              <button
                role="menuitem"
                onClick={() => {
                  setLang("en");
                  setOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm
                  hover:bg-white/10 transition
                  ${lang === "en" ? "text-white" : "text-white/70"}`}
              >
                English {lang === "en" ? "✓" : ""}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
