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

/* ================= DATA ================= */

const SKILL_GROUPS = [
  {
    title: "Frontend",
    accent: "text-cyan-300",
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
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code", Icon: null },
    ],
  },
];

/* ================= COMPONENTS ================= */

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
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-xl"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-white/10 blur-3xl" />

            <div className="flex items-baseline justify-between">
              <h3 className={`text-xl font-semibold ${group.accent}`}>
                {group.title}
              </h3>
              <span className="text-xs text-zinc-400">
                {group.items.length} skills
              </span>
            </div>

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
            href="#skills"
            className="px-7 py-3 rounded-2xl font-semibold bg-white text-black hover:bg-zinc-200 transition"
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

      <SkillsSection />
    </div>
  );
}
