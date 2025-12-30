import { motion } from "framer-motion";
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
import MatrixText from "../components/MatrixText";

const cardVariants = { rest: { y: 0 }, hover: { y: -9 } };
const glowVariants = { rest: { opacity: 0 }, hover: { opacity: 1 } };

const ICONS = {
  html: SiHtml5,
  css: SiCss3,
  js: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  csharp: SiDotnet,
  java: SiOpenjdk,
};

function SkillTile({ name, iconKey }) {
  const Icon = iconKey ? ICONS[iconKey] : null;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition">
      <div className="w-6 h-6 flex items-center justify-center text-white/90">
        {Icon ? <Icon className="w-5 h-5" /> : <span className="text-xs text-zinc-400">•</span>}
      </div>
      <span className="text-sm text-zinc-200">{name}</span>
    </div>
  );
}

export default function Skills({ t, scrambleKey }) {
  const groups = t.skills.groups;

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        <MatrixText text={t.skills.title} scrambleKey={scrambleKey} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-zinc-300 text-center max-w-2xl mx-auto mt-4"
      >
        <MatrixText text={t.skills.subtitle} scrambleKey={scrambleKey} />
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            variants={cardVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-xl"
          >
            <motion.div
              variants={glowVariants}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute inset-0 rounded-3xl"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${group.glow} via-transparent to-transparent blur-3xl mix-blend-screen`}
              />
            </motion.div>

            <div className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-white/10 blur-3xl" />

            <h3 className={`text-xl font-semibold ${group.accent}`}>
              <MatrixText text={group.title} scrambleKey={scrambleKey} />
            </h3>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {group.items.map((it) => (
                <SkillTile key={it.name} name={it.name} iconKey={it.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
