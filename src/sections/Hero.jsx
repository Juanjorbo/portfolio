import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MatrixText from "../components/MatrixText";

function AvailabilityBadge({ t, scrambleKey }) {
  return (
    <a
      href="https://www.linkedin.com/in/juanjorincon/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold
                 border border-emerald-400/40 bg-zinc-900/60 text-white/90
                 hover:bg-zinc-900/80 transition"
    >
      <MatrixText
        text={t.hero.available}
        scrambleKey={scrambleKey}
      />
    </a>
  );
}

export default function Hero({ t, scrambleKey }) {
  const [a, b, c] = t.hero.subtitleTyping;

  return (
    <section className="min-h-screen flex flex-col px-6 pt-24">
      {/* Centro */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 rounded-full bg-emerald-400/15 blur-2xl" />
              <img
                src="/src/assets/profile.png"
                alt={t.hero.name}
                className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover
                           border border-white/20 shadow-xl"
                draggable={false}
              />
            </motion.div>

            {/* Texto */}
            <div className="text-center md:text-left">
              {/* Typing (este NO lo tocamos, ya es animado) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-zinc-400 tracking-wide font-mono text-sm md:text-base h-6"
              >
                <TypeAnimation
                  sequence={[
                    a, 1800,
                    "", 900,
                    b, 1800,
                    "", 900,
                    c, 1800,
                    "", 900,
                  ]}
                  speed={28}
                  deletionSpeed={22}
                  repeat={Infinity}
                  cursor
                  wrapper="span"
                />
              </motion.div>

              {/* Nombre */}
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mt-3"
              >
                <MatrixText
                  text={t.hero.name}
                  scrambleKey={scrambleKey}
                />
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="text-lg md:text-xl text-zinc-300 max-w-xl mt-5 leading-relaxed mx-auto md:mx-0"
              >
                <MatrixText
                  text={t.hero.tagline}
                  scrambleKey={scrambleKey}
                />
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Abajo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-10 flex justify-center"
      >
        <AvailabilityBadge t={t} scrambleKey={scrambleKey} />
      </motion.div>
    </section>
  );
}
