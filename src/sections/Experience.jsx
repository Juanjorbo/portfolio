import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Software Engineer · Backend",
    company: "Instituto Municipal de Urbanismo — Ayuntamiento de Barcelona",
    date: "Oct 2024 — Presente",
    desc: [
      "Desarrollo y mantenimiento de software interno crítico.",
      "Backend en Java y C# con foco en calidad y estructura.",
      "Automatización de procesos y soporte en entornos productivos.",
    ],
    stack: ["Java", "C#", "Backend", "Automatización"],
  },
  {
    role: "Software Developer · Experiencia Internacional",
    company: "CtrlArt — Eslovenia (Erasmus+)",
    date: "Jul 2025 — Sep 2025",
    desc: [
      "Trabajo en equipo internacional, comunicación diaria en inglés.",
      "Buenas prácticas, depuración y control de versiones con Git.",
      "Desarrollo técnico con enfoque en programación y estructura.",
    ],
    stack: ["C#", "Git", "Inglés"],
  },
  {
    role: "Junior Software Developer · Internship",
    company: "Desilence",
    date: "Ene 2023 — Jun 2023",
    desc: [
      "Resolución de problemas y colaboración en proyectos reales.",
      "Trabajo con procesos y entregas en entorno de producción.",
      "Base sólida en programación y trabajo en equipo.",
    ],
    stack: ["Fundamentos", "Trabajo en equipo"],
  },
];

function TechChips({ items }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((t) => (
        <span
          key={t}
          className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-200"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{item.role}</h3>
        <span className="text-xs text-zinc-400 whitespace-nowrap">{item.date}</span>
      </div>
      <p className="text-zinc-300 mt-2">{item.company}</p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed list-disc list-inside">
        {item.desc.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>

      <TechChips items={item.stack} />
    </div>
  );
}

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        Experiencia profesional
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
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
                  <div className="md:pr-10">{isLeft && <Card item={item} />}</div>
                  <div className="md:pl-10">{!isLeft && <Card item={item} />}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
