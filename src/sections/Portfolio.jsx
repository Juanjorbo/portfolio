import { motion } from "framer-motion";

export default function Portfolio({ t }) {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        {t.portfolio.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-zinc-300 text-center max-w-2xl mx-auto mt-4"
      >
        {t.portfolio.subtitle}
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.portfolio.projects.map((project, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <h3 className="text-white font-semibold">{project.title}</h3>

            <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-white hover:underline"
                >
                  Demo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-white hover:underline"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
