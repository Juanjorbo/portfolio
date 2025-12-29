import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
      >
        {/* Texto */}
        <div className="md:col-span-7 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">Sobre mí</h2>
          <div className="mt-4 h-[2px] w-20 mx-auto md:mx-0 bg-white/20" />

          <p className="mt-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            Soy Juan José Rincón, desarrollador de software con enfoque en backend. Me
            dedico a programar porque disfruto resolviendo problemas reales y construyendo
            soluciones claras, eficientes y bien estructuradas. Trabajo principalmente con
            Java y C#, participando en el desarrollo y mejora de aplicaciones y sistemas,
            cuidando las buenas prácticas y la calidad del código.
            <br /><br />
            A lo largo de mi formación y experiencia he trabajado con bases de datos y en
            proyectos multiplataforma, lo que me ha permitido adaptarme a distintos entornos
            y tecnologías. Busco seguir creciendo como desarrollador, aprender de equipos
            con experiencia y aportar valor en proyectos donde el software tenga impacto
            real y a largo plazo.
          </p>
        </div>

        {/* Foto */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <img
            src="/src/assets/profile.png"
            alt="Juan José Rincón"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover
                       border border-white/20 shadow-lg"
            draggable={false}
          />
        </div>
      </motion.div>
    </section>
  );
}
