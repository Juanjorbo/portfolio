import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

function useCloseOnOutsideAndEsc(ref, setOpen) {
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
  }, [ref, setOpen]);
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("theme-dark", "theme-light");
  root.classList.add(theme);
}

function FloatingBox({ icon, label, children, pulseKey }) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const ref = useRef(null);

  useCloseOnOutsideAndEsc(ref, setOpen);

  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 240);
    return () => clearTimeout(t);
  }, [pulseKey]);

  return (
    <div ref={ref} className="relative">
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        animate={
          pulse
            ? {
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 22px rgba(16,185,129,0.30)",
                  "0 0 0 rgba(0,0,0,0)",
                ],
              }
            : {}
        }
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="h-11 w-44 px-4 rounded-2xl
                   border border-white/15 bg-zinc-950/70 backdrop-blur-md
                   text-sm font-semibold text-white/90
                   hover:bg-zinc-950/85 transition
                   shadow-[0_18px_50px_rgba(0,0,0,0.45)]
                   flex items-center justify-between"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="text-white/80">{icon}</span>
          <span>{label}</span>
        </span>
        <span className={`text-white/60 transition ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </motion.button>

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
            {children({ close: () => setOpen(false) })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LanguageFloating({ lang, setLang }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "theme-dark";
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {/* ===== Language box ===== */}
      <FloatingBox
        icon={<HiOutlineGlobeAlt className="w-4 h-4" />}
        label={lang === "es" ? "ES" : "EN"}
        pulseKey={lang}
      >
        {({ close }) => (
          <>
            <button
              onClick={() => {
                setLang("es");
                close();
              }}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-white/10 transition
                ${lang === "es" ? "text-white" : "text-white/70"}`}
            >
              Español {lang === "es" ? "✓" : ""}
            </button>

            <button
              onClick={() => {
                setLang("en");
                close();
              }}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-white/10 transition
                ${lang === "en" ? "text-white" : "text-white/70"}`}
            >
              English {lang === "en" ? "✓" : ""}
            </button>
          </>
        )}
      </FloatingBox>

      {/* ===== Theme box ===== */}
      <FloatingBox
        icon={
          theme === "theme-dark" ? (
            <HiOutlineMoon className="w-4 h-4" />
          ) : (
            <HiOutlineSun className="w-4 h-4" />
          )
        }
        label={theme === "theme-dark" ? "Dark" : "Light"}
        pulseKey={theme}
      >
        {({ close }) => (
          <>
            <button
              onClick={() => {
                setTheme("theme-dark");
                close();
              }}
              className={`w-full px-4 py-3 flex items-center gap-2 text-sm hover:bg-white/10 transition
                ${theme === "theme-dark" ? "text-white" : "text-white/70"}`}
            >
              <HiOutlineMoon className="w-4 h-4" />
              Dark {theme === "theme-dark" ? "✓" : ""}
            </button>

            <button
              onClick={() => {
                setTheme("theme-light");
                close();
              }}
              className={`w-full px-4 py-3 flex items-center gap-2 text-sm hover:bg-white/10 transition
                ${theme === "theme-light" ? "text-white" : "text-white/70"}`}
            >
              <HiOutlineSun className="w-4 h-4" />
              Light {theme === "theme-light" ? "✓" : ""}
            </button>
          </>
        )}
      </FloatingBox>
    </div>
  );
}
