import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiUnity,
  SiGit,
  SiGithub,
  SiDotnet,
  SiOpenjdk,
} from "react-icons/si";

/* ================= VARIANTS ================= */

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -9 },
};

const glowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

/* ================= DATA ================= */

// 👉 Cambia esto por tu experiencia real
const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Empresa A",
    date: "2024 — 2025",
    desc: "Construí interfaces en React, mejoré rendimiento y trabajé con APIs.",
  },
  {
    role: "Developer / Intern",
    company: "Empresa B",
    date: "2023 — 2024",
    desc: "Mantenimiento, mejoras y soporte a desarrollo en producto interno.",
  },
  {
    role: "Freelance / Proyectos",
    company: "Proyectos personales",
    date: "2022 — 2023",
    desc: "Proyectos web y prototipos. Aprendizaje continuo y despliegues.",
  },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    accent: "text-cyan-300",
    glow: "from-cyan-400/40",
    items: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "React", Icon: SiReact },
      { name: "Tailwind", Icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Lenguajes",
    accent: "text-violet-300",
    glow: "from-violet-400/40",
    items: [
      { name: "C#", Icon: SiDotnet },
      { name: "Java", Icon: SiOpenjdk },
      { name: "MySQL", Icon: SiMysql },
      { name: "APIs REST", Icon: null },
    ],
  },
  {
    title: "Unity / VR",
    accent: "text-emerald-300",
    glow: "from-emerald-400/40",
    items: [
      { name: "Unity", Icon: SiUnity },
      { name: "C# Scripting", Icon: SiDotnet },
      { name: "VR", Icon: null },
      { name: "Game Dev", Icon: null },
    ],
  },
  {
    title: "Herramientas",
    accent: "text-amber-300",
    glow: "from-amber-400/40",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code", Icon: null },
    ],
  },
];

/* ================= COMPONENTS ================= */

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-zinc-400 tracking-wide"
      >
        Developer • Frontend • Backend
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold mt-4"
      >
        Juanjo Rincón
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="text-xl md:text-2xl text-zinc-300 max-w-2xl mt-6 leading-relaxed"
      >
        Construyo experiencias digitales modernas, limpias y con intención.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <a
          href="#trayectoria"
          className="px-7 py-3 rounded-2xl font-semibold bg-white text-black hover:bg-zinc-200 transition"
        >
          Ver trayectoria
        </a>

        <a
          href="#skills"
          className="px-7 py-3 rounded-2xl font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition"
        >
          Ver skills
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-14 text-zinc-500 text-sm"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}

function SkillTile({ name, Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition">
      <div className="w-6 h-6 flex items-center justify-center">
        {Icon ? (
          <Icon className="w-5 h-5" />
        ) : (
          <span className="text-xs text-zinc-400">•</span>
        )}
      </div>
      <span className="text-sm text-zinc-200">{name}</span>
    </div>
  );
}

function TimelineSection() {
  return (
    <section id="trayectoria" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        Trayectoria
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-zinc-300 text-center max-w-2xl mx-auto mt-4"
      >
        Mi experiencia organizada en una línea temporal, alternando izquierda y derecha.
      </motion.p>

      <div className="relative mt-12">
        {/* Línea central */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={`${item.company}-${item.date}-${i}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Punto central */}
                <div className="absolute left-1/2 top-7 -translate-x-1/2 h-3 w-3 rounded-full bg-white/40" />

                {/* 2 columnas en desktop; 1 columna en móvil */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Izquierda */}
                  <div className="md:pr-10">
                    {isLeft && (
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-semibold">{item.role}</h3>
                          <span className="text-xs text-zinc-400">{item.date}</span>
                        </div>
                        <p className="text-zinc-300 mt-2">{item.company}</p>
                        <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Derecha */}
                  <div className="md:pl-10">
                    {!isLeft && (
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-semibold">{item.role}</h3>
                          <span className="text-xs text-zinc-400">{item.date}</span>
                        </div>
                        <p className="text-zinc-300 mt-2">{item.company}</p>
                        <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        Skills & Tecnologías
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-zinc-300 text-center max-w-2xl mx-auto mt-4"
      >
        Un stack claro. Las tecnologías con las que construyo productos y experiencias.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.title}
            variants={cardVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-xl"
          >
            {/* GLOW */}
            <motion.div
              variants={glowVariants}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute inset-0 rounded-3xl"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${group.glow} via-transparent to-transparent blur-3xl mix-blend-screen`}
              />
            </motion.div>

            {/* DECORATIVE ORB */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-white/10 blur-3xl" />

            {/* CONTENT */}
            <h3 className={`text-xl font-semibold ${group.accent}`}>
              {group.title}
            </h3>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {group.items.map((it) => (
                <SkillTile key={it.name} name={it.name} Icon={it.Icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
    </div>
  );
}
