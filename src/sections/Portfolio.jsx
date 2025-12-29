import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        Portfolio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-zinc-300 text-center max-w-2xl mx-auto mt-4"
      >
        Aquí he de poner mis proyectos con cards (demo + GitHub + stack).
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <p className="text-white font-semibold">Proyecto {i}</p>
            <p className="text-zinc-400 mt-2 text-sm">
              proyecto
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
