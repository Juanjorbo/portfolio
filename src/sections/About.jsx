import { motion } from "framer-motion";

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightedText({ text }) {
  const KEYWORDS = [
  "Juanjo",
  "Desarrollo de software",
  "Programación desde los 15 años",
  "Raspberry Pi",
  "Ayuntamiento de Barcelona",
  "Herramientas internas",
  "Impacto real"
]

  const pattern = new RegExp(`(${KEYWORDS.map(escapeRegExp).join("|")})`, "gi");

  const parts = text.split(pattern);

  return (
    <p className="mt-6 leading-relaxed text-base md:text-lg whitespace-pre-line text-[rgb(var(--muted))]">
      {parts.map((part, i) => {
        const isKeyword = KEYWORDS.some((k) => k.toLowerCase() === part.toLowerCase());
        return isKeyword ? (
          <span
            key={i}
            className="font-semibold text-[rgb(var(--accent))]"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </p>
  );
}

export default function About({ t }) {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
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

          <div className="mt-4 h-[2px] w-24 mx-auto md:mx-0 bg-[rgb(var(--border))]" />

          <HighlightedText text={t.about.text} />
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.25rem] bg-[rgb(var(--accent))]/10 blur-2xl" />
            <div className="absolute -inset-10 rounded-[2.25rem] bg-[rgb(var(--accent-soft))]/10 blur-3xl" />

            <div
              className="
                relative overflow-hidden rounded-[2.25rem]
                border border-[rgb(var(--border))]
                bg-[rgb(var(--card))]
                shadow-2xl
              "
            >
              <img
                src="/public/images/profile2.png"
                alt={t.about.title}
                className="w-64 h-72 md:w-80 md:h-96 object-cover"
                draggable={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
