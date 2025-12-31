import { motion } from "framer-motion";

export default function Experience({ t }) {
  const items = t.experience.items ?? [];

  return (
    <section id="experiencia" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center text-[rgb(var(--text))]"
      >
        {t.experience.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-center max-w-2xl mx-auto mt-4 text-[rgb(var(--muted))]"
      >
        {t.experience.subtitle}
      </motion.p>

      {/* Timeline */}
      <div className="mt-14 relative">
        {/* Central line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[rgb(var(--border))]" />

        <div className="space-y-10">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="
                    absolute left-4 md:left-1/2 top-6
                    w-3 h-3 rounded-full
                    -translate-x-1/2
                    bg-[rgb(var(--accent))]
                    shadow-[0_0_0_4px_rgba(255,255,255,0.04)]
                  "
                />

                {/* Card wrapper:
                    - Mobile: padding left for line + dot
                    - Desktop: half width, align left/right alternating
                */}
                <div
                  className={[
                    "pl-10 md:pl-0",
                    "md:w-1/2",
                    isLeft ? "md:pr-10 md:mr-auto" : "md:pl-10 md:ml-auto",
                  ].join(" ")}
                >
                  <div
                    className="
                      rounded-3xl
                      border border-[rgb(var(--border))]
                      bg-[rgb(var(--card))]
                      shadow-xl
                      p-6 md:p-7
                    "
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-[rgb(var(--text))]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                          {item.company}
                        </p>
                      </div>

                      <span className="text-sm text-[rgb(var(--muted))] whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                      {(item.desc ?? []).map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[2px] text-[rgb(var(--accent))]">
                            •
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
