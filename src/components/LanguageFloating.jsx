import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const MATRIX_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@*+-?/";

// Genera un string random de longitud n
function randString(n) {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
  }
  return out;
}

// Hook: anima un texto estilo "matrix scramble" hacia target
function useMatrixScramble(target, opts = {}) {
  const {
    duration = 520, // ms total del efecto
    steps = 16, // cuántos frames
  } = opts;

  const [text, setText] = useState(target);
  const animRef = useRef(null);

  useEffect(() => {
    // si target cambia, arrancamos animación
    if (animRef.current) cancelAnimationFrame(animRef.current);

    const start = performance.now();
    const len = target.length;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const step = Math.floor(t * steps);

      // Progreso: cuántos caracteres dejamos ya "fijos"
      const fixedCount = Math.floor((step / steps) * len);

      const fixed = target.slice(0, fixedCount);
      const scrambled = randString(Math.max(0, len - fixedCount));

      setText(fixed + scrambled);

      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setText(target); // al final dejamos el target limpio
      }
    };

    animRef.current = requestAnimationFrame(tick);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [target, duration, steps]);

  return text;
}

export default function LanguageFloating({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // target ES/EN
  const targetLabel = lang === "es" ? "ES" : "EN";
  const label = useMatrixScramble(targetLabel, { duration: 520, steps: 18 });

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
    <div className="fixed top-4 right-4 z-50">
      <div ref={ref} className="relative">
        {/* Botón */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="
            h-11 px-4 rounded-2xl
            border border-white/15 bg-zinc-950 shadow-lg
            text-sm font-semibold text-white/90
            hover:bg-zinc-900 transition
            flex items-center gap-2
          "
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <HiOutlineGlobeAlt className="w-4 h-4 text-white/80" />

          {/* Texto con efecto Matrix */}
          <span
            className="inline-block w-8 text-center font-mono tracking-widest text-white/90"
            aria-label={targetLabel}
            title={targetLabel}
          >
            {label}
          </span>

          <span className={`text-white/60 transition ${open ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="
                absolute right-0 mt-2 w-44 rounded-2xl overflow-hidden
                border border-white/15 bg-zinc-950 shadow-xl
              "
              role="menu"
            >
              <button
                role="menuitem"
                onClick={() => {
                  setLang("es");
                  setOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-white/10 transition
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
                className={`w-full px-4 py-3 text-left text-sm hover:bg-white/10 transition
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
