import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDownTray } from "react-icons/hi2";
import { SiLinkedin, SiGithub } from "react-icons/si";

function AvailabilityBadge({ t }) {
  return (
    <a
      href="https://www.linkedin.com/in/juanjorincon/"
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold
        border border-[rgb(var(--border))]
        bg-[rgb(var(--btn))]
        text-[rgb(var(--text))]
        hover:bg-[rgb(var(--btn-hover))]
        transition
      "
    >
      {t.hero.available}
    </a>
  );
}

export default function Hero({ t }) {
  const [a, b, c] = t.hero.subtitleTyping;

  return (
    <section className="min-h-screen flex flex-col px-6 pt-24">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* FOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 rounded-full bg-[rgb(var(--accent))]/25 blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-[rgb(var(--accent-soft))]/15 blur-2xl scale-110" />
              <img
                src="/src/assets/profile.png"
                alt={t.hero.name}
                className="
                  relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover
                  border border-[rgb(var(--border))] shadow-xl
                "
                draggable={false}
              />
            </motion.div>

            {/* TEXTO */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="tracking-wide font-mono text-sm md:text-base h-6 text-[rgb(var(--muted))]"
              >
                <TypeAnimation
                  sequence={[a, 1800, "", 900, b, 1800, "", 900, c, 1800, "", 900]}
                  speed={28}
                  deletionSpeed={22}
                  repeat={Infinity}
                  cursor
                  wrapper="span"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mt-3 text-[rgb(var(--text))]"
              >
                {t.hero.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="text-lg md:text-xl max-w-xl mt-5 leading-relaxed mx-auto md:mx-0 text-[rgb(var(--muted))]"
              >
                {t.hero.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 flex items-center justify-center md:justify-start gap-3"
              >
                <a
                  href="https://www.linkedin.com/in/juanjorincon/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    p-3 rounded-xl
                    border border-[rgb(var(--border))]
                    bg-[rgb(var(--btn))]
                    text-[rgb(var(--text))]
                    hover:bg-[rgb(var(--btn-hover))]
                    transition
                  "
                >
                  <SiLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/juanjorbo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    p-3 rounded-xl
                    border border-[rgb(var(--border))]
                    bg-[rgb(var(--btn))]
                    text-[rgb(var(--text))]
                    hover:bg-[rgb(var(--btn-hover))]
                    transition
                  "
                >
                  <SiGithub className="w-5 h-5" />
                </a>

                {/* cambiar */}
                <a
                  href="/public/cv/CV_JuanjoRincon.pdf"
                  download
                  className="
                    inline-flex items-center gap-2
                    rounded-xl px-4 py-3 text-sm font-semibold
                    border border-[rgb(var(--border))]
                    bg-[rgb(var(--accent))]
                    text-white
                    hover:opacity-90
                    transition
                  "
                >
                  <HiArrowDownTray className="w-5 h-5" />
                  CV
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-10 flex justify-center"
      >
        <AvailabilityBadge t={t} />
      </motion.div>
    </section>
  );
}
