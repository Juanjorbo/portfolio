import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiDotnet,
  SiOpenjdk,
} from "react-icons/si";

/* ================= DATA ================= */

const EXPERIENCE = [
  {
    role: "Software Engineer · Backend",
    company: "Instituto Municipal de Urbanismo — Ayuntamiento de Barcelona",
    date: "Oct 2024 — Presente",
    desc: [
      "Desarrollo y mantenimiento de software interno crítico para la gestión urbana municipal.",
      "Diseño e implementación de lógica backend y servicios en Java y C#.",
      "Automatización de procesos administrativos para reducir tareas manuales y mejorar eficiencia operativa.",
      "Análisis, diagnóstico y resolución de incidencias en entornos productivos.",
      "Colaboración con equipos multidisciplinares para garantizar estabilidad, continuidad y calidad del software.",
    ],
    stack: ["Java", "C#", "Backend", "Automatización", "Producción"],
  },
  {
    role: "Software Developer · Experiencia Internacional",
    company: "CtrlArt — Eslovenia (Erasmus+)",
    date: "Jul 2025 — Sep 2025",
    desc: [
      "Desarrollo de aplicaciones y prototipos con foco en programación y estructura de software.",
      "Trabajo en equipo internacional con comunicación diaria en inglés.",
      "Buenas prácticas, depuración y control de versiones con Git.",
    ],
    stack: ["C#", "Git", "Inglés", "Equipo internacional"],
  },
  {
    role: "Junior Software Developer · Internship",
    company: "Desilence",
    date: "Ene 2023 — Jun 2023",
    desc: [
      "Desarrollo de soluciones técnicas orientadas a la resolución de problemas.",
      "Participación en proyectos reales con flujos de producción y colaboración.",
      "Refuerzo de fundamentos de programación y trabajo en equipo.",
    ],
    stack: ["Fundamentos", "Resolución de problemas", "Trabajo en equipo"],
  },
];

const SKILL_GROUPS = [
  {
    title: "Backend & Lenguajes",
    accent: "text-violet-300",
    glow: "from-violet-400/40",
    items: [
      { name: "Java", Icon: SiOpenjdk },
      { name: "C#", Icon: SiDotnet },
      { name: "MySQL", Icon: SiMysql },
      { name: "APIs REST", Icon: null },
    ],
  },
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
    title: "Herramientas",
    accent: "text-amber-300",
    glow: "from-amber-400/40",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code", Icon: null },
    ],
  },
  {
    title: "Extra",
    accent: "text-emerald-300",
    glow: "from-emerald-400/30",
    items: [{ name: "Unity / VR (plus)", Icon: null }],
  },
];

/* ================= UI ================= */

function AvailabilityBadge() {
  return (
    <a
      href="https://www.linkedin.com/in/juanjorincon/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold
                 border border-emerald-400/40 bg-zinc-900/60
                 text-white/90 hover:bg-zinc-900/80 transition"
    >
      Disponible para trabajar
    </a>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col px-6 pt-24">
      {/* Centro: foto + texto */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* FOTO (más grande) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative shrink-0"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl" />

              <img
                src="/src/assets/profile.g"
                alt="Juanjo Rincón"
                className="relative w-44 h-44 md:w-56 md:h-56
                           rounded-full object-cover
                           border border-white/20
                           shadow-xl"
              />
            </motion.div>

            {/* TEXTO */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-zinc-400 tracking-wide font-mono text-sm md:text-base h-6"
              >
                <TypeAnimation
                  sequence={[
                    "Software Engineer", 1800,
                    "", 900,
                    "Backend Developer", 1800,
                    "", 900,
                    "Developer", 1800,
                    "", 900,
                  ]}
                  speed={28}
                  deletionSpeed={22}
                  repeat={Infinity}
                  cursor
                  wrapper="span"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mt-3"
              >
                Juanjo Rincón
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="text-lg md:text-xl text-zinc-300 max-w-xl mt-5 leading-relaxed mx-auto md:mx-0"
              >
                Software Engineer orientado a construir sistemas backend fiables,
                mantenibles y con buen diseño.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Abajo: badge centrado */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pb-10 flex justify-center"
      >
        <AvailabilityBadge />
      </motion.div>
    </section>
  );
}



function SkillTile({ name, Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-xl
                    border border-white/10 bg-white/5
                    px-3 py-2 hover:bg-white/10 transition">
      <div className="w-6 h-6 flex items-center justify-center text-white/90">
        {Icon ? <Icon className="w-5 h-5" /> : <span className="text-xs text-zinc-400">•</span>}
      </div>
      <span className="text-sm text-zinc-200">{name}</span>
    </div>
  );
}

function TechChips({ items }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((tech) => (
        <span
          key={tech}
          className="text-xs px-2 py-1 rounded-full
                     border border-white/10 bg-white/5 text-zinc-200"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function TimelineCard({ item }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{item.role}</h3>
        <span className="text-xs text-zinc-400 whitespace-nowrap">{item.date}</span>
      </div>

      <p className="text-zinc-300 mt-2">{item.company}</p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed list-disc list-inside">
        {item.desc.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <TechChips items={item.stack} />
    </div>
  );
}

function TimelineSection() {
  return (
    <section id="experiencia" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        Experiencia profesional
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-zinc-300 text-center max-w-2xl mx-auto mt-4"
      >
        Experiencia real en entornos productivos, con foco en backend y calidad de software.
      </motion.p>

      <div className="relative mt-12">
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
                <div className="absolute left-1/2 top-7 -translate-x-1/2 h-3 w-3 rounded-full bg-white/40" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="md:pr-10">{isLeft && <TimelineCard item={item} />}</div>
                  <div className="md:pl-10">{!isLeft && <TimelineCard item={item} />}</div>
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
        Stack enfocado en desarrollo de software, con especial interés en backend.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {SKILL_GROUPS.map((group) => (
          <motion.div
            key={group.title}
            initial="rest"
            animate="rest"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative overflow-hidden rounded-3xl border border-white/10
                       bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-xl"
          >
            <motion.div
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute inset-0 rounded-3xl"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br
                            ${group.glow} via-transparent to-transparent
                            blur-3xl mix-blend-screen`}
              />
            </motion.div>

            <div className="pointer-events-none absolute -top-24 -right-24
                            w-56 h-56 rounded-full bg-white/10 blur-3xl" />

            <h3 className={`text-xl font-semibold ${group.accent}`}>{group.title}</h3>

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

export default function Resume() {
  return (
    <div>
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
    </div>
  );
}
