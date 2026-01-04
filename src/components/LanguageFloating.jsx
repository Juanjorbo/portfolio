import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export default function LanguageFloating({ lang, setLang }) {
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
    <div className="hidden md:block fixed top-4 right-4 z-50">
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="
            h-11 px-4 rounded-2xl
            border border-[rgb(var(--border))]
            bg-[rgb(var(--card))]
            text-sm font-semibold
            text-[rgb(var(--text))]
            hover:bg-[rgb(var(--card-hover))]
            transition shadow-lg
            flex items-center gap-2
          "
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <HiOutlineGlobeAlt className="w-4 h-4 opacity-80" />

          <span className="inline-block w-6 text-center">
            {lang === "es" ? "ES" : "EN"}
          </span>

          <span className={`opacity-70 transition ${open ? "rotate-180" : ""}`}>▾</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="
                absolute right-0 mt-2 w-44 rounded-2xl overflow-hidden
                border border-[rgb(var(--border))]
                bg-[rgb(var(--card))]
                shadow-xl
              "
              role="menu"
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
    </div>
  );
}
