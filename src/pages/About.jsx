import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function About() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 flex items-center">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 overflow-hidden
                     shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
        >
          {/* ambient glow (muy sutil) */}
          <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-400/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 -left-44 w-[28rem] h-[28rem] rounded-full bg-cyan-400/8 blur-3xl" />

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* FOTO */}
            <motion.div variants={fadeUp} className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-emerald-400/15 blur-2xl" />
              <img
                src="/src/assets/profile.png"
                alt="Juan José Rincón"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover
                           border border-white/20 shadow-xl"
                draggable={false}
              />
            </motion.div>

            {/* TEXTO */}
            <div className="text-center md:text-left">
              <motion.h1
                variants={fadeUp}
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                Software Engineer <span className="text-white/90">con enfoque en backend</span>.
              </motion.h1>

              {/* línea que aparece (simple y pro) */}
              <motion.div
                variants={fadeUp}
                className="mt-5 h-[2px] max-w-[420px] mx-auto md:mx-0
                           bg-gradient-to-r from-emerald-400/70 via-cyan-400/70 to-transparent"
              />

              <motion.p
                variants={fadeUp}
                className="mt-7 text-zinc-300 leading-relaxed text-base md:text-lg"
              >
                Soy Juan José Rincón, desarrollador de software con enfoque en backend. Me
                dedico a programar porque disfruto resolviendo problemas reales y
                construyendo soluciones claras, eficientes y bien estructuradas. Trabajo
                principalmente con Java y C#, participando en el desarrollo y mejora de
                aplicaciones y sistemas, cuidando las buenas prácticas y la calidad del
                código. A lo largo de mi formación y experiencia he trabajado con bases de
                datos y en proyectos multiplataforma, lo que me ha permitido adaptarme a
                distintos entornos y tecnologías. Busco seguir creciendo como desarrollador,
                aprender de equipos con experiencia y aportar valor en proyectos donde el
                software tenga impacto real y a largo plazo.
              </motion.p>

              {/* detalle final minimal */}
              <motion.div variants={fadeUp} className="mt-8 flex justify-center md:justify-start">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* mini nota opcional (queda muy bien) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 text-center text-xs text-zinc-500"
        >
          Claridad, estructura y mantenibilidad — por encima del hype.
        </motion.p>
      </div>
    </section>
  );
}

