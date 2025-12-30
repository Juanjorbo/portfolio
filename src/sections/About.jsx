import { motion } from "framer-motion";

export default function About({ t }) {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
      >
        <div className="md:col-span-7 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-[rgb(var(--text))]">
            {t.about.title}
          </h2>
          <div className="mt-4 h-[2px] w-20 mx-auto md:mx-0 bg-[rgb(var(--border))]" />

          <p className="mt-6 leading-relaxed text-base md:text-lg whitespace-pre-line text-[rgb(var(--muted))]">
            {t.about.text}
          </p>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[rgb(var(--accent))]/15 blur-2xl" />
            <img
              src="/src/assets/profile.png"
              alt={t.about.title}
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border border-[rgb(var(--border))] shadow-lg"
              draggable={false}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
