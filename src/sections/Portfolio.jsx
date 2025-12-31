import { motion } from "framer-motion";
import { HiLink } from "react-icons/hi2";
import { SiArtstation } from "react-icons/si";

function ActionButton({ href, label, icon }) {
  if (!href) return null;

  const Icon = icon === "artstation" ? SiArtstation : HiLink;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2
        rounded-xl px-4 py-2 text-sm font-semibold
        border border-[rgb(var(--border))]
        bg-[rgb(var(--btn))]
        text-[rgb(var(--text))]
        hover:bg-[rgb(var(--btn-hover))]
        transition
      "
      aria-label={label}
      title={label}
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
}

function ScreenshotPreview({ src, alt }) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl
        border border-[rgb(var(--border))]
        bg-black/20
      "
    >
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/25 border-b border-white/10">
        <div className="h-full flex items-center gap-2 px-3">
          <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>

      <img
        src={src}
        alt={alt}
        className="w-full h-48 md:h-56 object-cover pt-8"
        loading="lazy"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
    </div>
  );
}

function ProjectCard({ p, t }) {
  return (
    <article
      className="
        rounded-3xl
        border border-[rgb(var(--border))]
        bg-[rgb(var(--card))]
        shadow-xl
        p-5 md:p-6
      "
    >
      <ScreenshotPreview src={p.image} alt={p.title} />

      {p.demo && (
        <div className="mt-3">
          <ActionButton
            href={p.demo}
            label={p.previewLabel ?? t.portfolio.previewLabel}
            icon={p.icon}
          />
        </div>
      )}

      {/* Texto */}
      <div className="mt-4">
        <h3 className="text-lg md:text-xl font-semibold text-[rgb(var(--text))] leading-tight">
          {p.title}
        </h3>

        <p className="mt-2 text-sm md:text-[15px] text-[rgb(var(--muted))] leading-relaxed">
          {p.description}
        </p>
      </div>
    </article>
  );
}

export default function Portfolio({ t }) {
  const projects = t.portfolio.projects ?? [];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center text-[rgb(var(--text))]"
      >
        {t.portfolio.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-center max-w-2xl mx-auto mt-4 text-[rgb(var(--muted))]"
      >
        {t.portfolio.subtitle}
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length ? (
          projects.map((p, idx) => (
            <motion.div
              key={p.title + idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard p={p} t={t} />
            </motion.div>
          ))
        ) : (
          <div className="md:col-span-2 text-center text-[rgb(var(--muted))]">
            {t.portfolio.empty}
          </div>
        )}
      </div>
    </section>
  );
}
