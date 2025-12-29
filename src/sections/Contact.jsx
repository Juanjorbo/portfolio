import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold"
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-zinc-300 max-w-2xl mx-auto mt-4"
      >
        Si te encaja mi perfil, estaré encantado de hablar. Lo más rápido es por LinkedIn.
      </motion.p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/juanjorincon/"
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3 rounded-2xl font-semibold bg-white text-black hover:bg-zinc-200 transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:TU_EMAIL_AQUI"
          className="px-7 py-3 rounded-2xl font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition"
        >
          Email
        </a>
      </div>
    </section>
  );
}
