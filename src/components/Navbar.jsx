import { NavLink } from "react-router-dom";
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

export default function Navbar() {
  const scrolled = useScrolled(24);

  const base = "px-3 py-2 text-sm transition rounded-lg";
  const inactive = "text-white/70";
  const active = "text-white";

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
          {[
            { to: "/", label: "Resume", end: true },
            { to: "/sobre-mi", label: "Sobre mí" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/contacto", label: "Contacto" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              <span className="nav-link-fx">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
