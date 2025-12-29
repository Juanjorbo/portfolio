import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        Sobre mí
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-12 relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 -left-44 w-[28rem] h-[28rem] rounded-full bg-cyan-400/8 blur-3xl" />

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-emerald-400/12 blur-2xl" />
            <img
              src="/src/assets/profile.jpg"
              alt="Juan José Rincón"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border border-white/20 shadow-xl"
              draggable={false}
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Software Engineer con enfoque en backend.
            </h3>

            <div className="mt-4 h-[2px] max-w-[420px] mx-auto md:mx-0 bg-gradient-to-r from-emerald-400/70 via-cyan-400/70 to-transparent" />

            <p className="mt-6 text-zinc-300 leading-relaxed text-base md:text-lg">
              Soy Juan José Rincón, desarrollador de software con enfoque en backend. Me dedico a programar porque disfruto resolviendo problemas reales y construyendo soluciones claras, eficientes y bien estructuradas. Trabajo principalmente con Java y C#, participando en el desarrollo y mejora de aplicaciones y sistemas, cuidando las buenas prácticas y la calidad del código. A lo largo de mi formación y experiencia he trabajado con bases de datos y en proyectos multiplataforma, lo que me ha permitido adaptarme a distintos entornos y tecnologías. Busco seguir creciendo como desarrollador, aprender de equipos con experiencia y aportar valor en proyectos donde el software tenga impacto real y a largo plazo.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
