export const texts = {
  /* =======================
     ESPAÑOL (ES)
  ======================= */
  es: {
    nav: {
      inicio: "Inicio",
      experiencia: "Experiencia",
      portfolio: "Portfolio",
      contacto: "Contacto",
      about: "Sobre mí",
    },

    hero: {
      subtitleTyping: ["Software Engineer", "Backend Developer", "Developer"],
      name: "Juanjo Rincón",
      tagline:
        "Desarrollo software backend con foco en claridad, estructura y calidad.",
      available: "Disponible para trabajar",
    },

    experience: {
      title: "Experiencia profesional",
      subtitle:
        "Experiencia real en entornos productivos, con foco en backend y calidad de software.",
      items: [
        {
          role: "Software Engineer · Backend",
          company:
            "Instituto Municipal de Urbanismo — Ayuntamiento de Barcelona",
          date: "Oct 2024 — Presente",
          desc: [
            "Desarrollo y mantenimiento de software interno crítico para la gestión municipal.",
            "Diseño e implementación de lógica backend y servicios con Java y C#.",
            "Automatización de procesos y soporte en entornos productivos.",
          ],
          stack: ["Java", "C#", "Backend", "Automatización"],
        },
        {
          role: "Software Developer · Experiencia Internacional",
          company: "CtrlArt — Eslovenia (Erasmus+)",
          date: "Jul 2025 — Sep 2025",
          desc: [
            "Trabajo en equipo internacional con comunicación diaria en inglés.",
            "Buenas prácticas, depuración y control de versiones con Git.",
            "Desarrollo técnico con foco en estructura y mantenibilidad.",
          ],
          stack: ["C#", "Git", "Inglés"],
        },
        {
          role: "Junior Software Developer · Internship",
          company: "Desilence",
          date: "Ene 2023 — Jun 2023",
          desc: [
            "Participación en proyectos reales siguiendo flujos de producción.",
            "Resolución de problemas y colaboración con el equipo.",
            "Refuerzo de fundamentos de programación y buenas prácticas.",
          ],
          stack: ["Fundamentos", "Trabajo en equipo"],
        },
      ],
    },

    skills: {
      title: "Skills",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      groups: [
        {
          title: "Frontend",
          accent: "text-pink-400",
          glow: "from-pink-500/40",
          items: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "JavaScript", icon: "js" },
            { name: "TypeScript", icon: "typescript" },
            { name: "React", icon: "react" },
            { name: "Vue", icon: "vue" },
            { name: "Angular", icon: "angular" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "WordPress", icon: "wordpress" },
          ],
        },
        {
          title: "Backend",
          accent: "text-cyan-400",
          glow: "from-cyan-500/40",
          items: [
            { name: "Java", icon: "java" },
            { name: "C#", icon: "csharp" },
            { name: ".NET", icon: "dotnet" },
            { name: "PHP", icon: "php" },
            { name: "REST API", icon: "api" },
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
          ],
        },
        {
          title: "Herramientas",
          accent: "text-emerald-400",
          glow: "from-emerald-500/40",
          items: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "VS Code", icon: "vscode" },
            { name: "Vercel", icon: "vercel" },
          ],
        },
        {
          title: "Extras",
          accent: "text-violet-400",
          glow: "from-violet-500/40",
          items: [{ name: "Unity", icon: "unity" }],
        },
      ],
    },

portfolio: {
  title: "Portfolio",
  subtitle: "Proyectos seleccionados con demo y enfoque en estructura y calidad.",
  previewLabel: "Preview",
  empty: "Aún no hay proyectos publicados.",
  projects: [
    {
      title: "Plataforma de Tickets (osTicket) — Setup & Diseño",
      image: "/src/assets/prova.png",
      description:
        "Implementé una plataforma de soporte basada en osTicket, definiendo toda la estructura de trabajo para gestionar incidencias de forma clara y escalable. Diseñé el flujo completo de tickets, usuarios y permisos para que el sistema sea realista y operativo desde el primer día, cuidando tanto la organización interna como la experiencia de uso.",
      demo: "https://sit.netspain.app/IMU/",
    },
    {
      title: "Videojuego Shooter — Experiencia gráfica y gameplay",
      image: "/src/assets/project2.jpg",
      description:
        "Proyecto de videojuego creado desde cero como experiencia shooter por rondas, inspirado en el clásico modo zombis de Call of Duty. El juego está ambientado en el Japón feudal y pone especial énfasis en la atmósfera visual, el diseño de escenarios y la sensación de progresión a través de oleadas de enemigos, combinando jugabilidad y narrativa visual.",
      demo: "https://www.artstation.com/artwork/Zax080",
      icon: "artstation",
      previewLabel: "ArtStation",
    },
  ],
},


    contact: {
      title: "Contacto",
      subtitle:
        "Si te encaja mi perfil, estaré encantado de hablar. Lo más rápido es por LinkedIn.",
      linkedin: "LinkedIn",
      email: "Email",
    },

    about: {
      title: "Sobre mí",
      text:
        "Soy Juan José Rincón, desarrollador de software con enfoque en backend. Me dedico a programar porque disfruto resolviendo problemas reales y construyendo soluciones claras, eficientes y bien estructuradas.\n\nTrabajo principalmente con Java y C#, participando en el desarrollo y mejora de aplicaciones y sistemas, cuidando las buenas prácticas y la calidad del código. Busco seguir creciendo como desarrollador, aprender de equipos con experiencia y aportar valor en proyectos donde el software tenga impacto real y a largo plazo.",
    },
  },

  /* =======================
     ENGLISH (EN)
  ======================= */
  en: {
    nav: {
      inicio: "Home",
      experiencia: "Experience",
      portfolio: "Projects",
      contacto: "Contact",
      about: "About",
    },

    hero: {
      subtitleTyping: ["Software Engineer", "Backend Developer", "Developer"],
      name: "Juanjo Rincón",
      tagline:
        "I build backend software focused on clarity, structure and quality.",
      available: "Available for work",
    },

    experience: {
      title: "Professional experience",
      subtitle:
        "Real production experience, focused on backend engineering and software quality.",
      items: [
        {
          role: "Software Engineer · Backend",
          company:
            "Municipal Institute of Urban Planning — Barcelona City Council",
          date: "Oct 2024 — Present",
          desc: [
            "Develop and maintain mission-critical internal software for municipal operations.",
            "Design and implement backend logic and services using Java and C#.",
            "Automate processes and provide support in production environments.",
          ],
          stack: ["Java", "C#", "Backend", "Automation"],
        },
        {
          role: "Software Developer · International experience",
          company: "CtrlArt — Slovenia (Erasmus+)",
          date: "Jul 2025 — Sep 2025",
          desc: [
            "Worked in an international team with daily English communication.",
            "Applied best practices, debugging and version control with Git.",
            "Built technical solutions focused on structure and maintainability.",
          ],
          stack: ["C#", "Git", "English"],
        },
        {
          role: "Junior Software Developer · Internship",
          company: "Desilence",
          date: "Jan 2023 — Jun 2023",
          desc: [
            "Contributed to real projects following production workflows.",
            "Problem-solving and collaboration with the development team.",
            "Strengthened programming fundamentals and engineering habits.",
          ],
          stack: ["Fundamentals", "Teamwork"],
        },
      ],
    },

    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with",
      groups: [
        {
          title: "Frontend",
          accent: "text-pink-400",
          glow: "from-pink-500/40",
          items: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "JavaScript", icon: "js" },
            { name: "TypeScript", icon: "typescript" },
            { name: "React", icon: "react" },
            { name: "Vue", icon: "vue" },
            { name: "Angular", icon: "angular" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "WordPress", icon: "wordpress" },
          ],
        },
        {
          title: "Backend",
          accent: "text-cyan-400",
          glow: "from-cyan-500/40",
          items: [
            { name: "Java", icon: "java" },
            { name: "C#", icon: "csharp" },
            { name: ".NET", icon: "dotnet" },
            { name: "PHP", icon: "php" },
            { name: "REST API", icon: "api" },
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
          ],
        },
        {
          title: "Tools",
          accent: "text-emerald-400",
          glow: "from-emerald-500/40",
          items: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "VS Code", icon: "vscode" },
            { name: "Vercel", icon: "vercel" },
          ],
        },
        {
          title: "Extras",
          accent: "text-violet-400",
          glow: "from-violet-500/40",
          items: [{ name: "Unity", icon: "unity" }],
        },
      ],
    },

portfolio: {
  title: "Projects",
  subtitle: "Selected projects with demos and a focus on structure and quality.",
  previewLabel: "Preview",
  empty: "No projects published yet.",
  projects: [
    {
      title: "Ticketing Platform (osTicket) — Setup & Design",
      image: "/src/assets/prova.png",
      description:
        "I implemented a support ticketing platform based on osTicket, designing the full working structure to manage issues clearly and at scale. I built the complete ticket workflow, user and permission system so the platform feels realistic and ready to operate from day one, with a strong focus on organization and usability.",
      demo: "https://sit.netspain.app/IMU/",
    },
    {
      title: "Shooter Game — Gameplay & Visual Experience",
      image: "/src/assets/project2.jpg",
      description:
        "A game project built from scratch as a round-based shooter experience, inspired by the classic Call of Duty Zombies mode. Set in ancient feudal Japan, the project focuses on atmosphere, visual design and level composition, delivering a strong sense of progression through enemy waves while blending gameplay and visual storytelling.",
      demo: "https://www.artstation.com/artwork/Zax080",
      icon: "artstation",
      previewLabel: "ArtStation",
    },
  ],
},


    contact: {
      title: "Contact",
      subtitle:
        "If my profile fits, I'd be happy to chat. LinkedIn is the fastest way.",
      linkedin: "LinkedIn",
      email: "Email",
    },

    about: {
      title: "About me",
      text:
        "I'm Juanjo Rincón, a backend-focused software engineer. I enjoy solving real problems and building clear, efficient and well-structured solutions.\n\nI mainly work with Java and C#, improving applications and systems while caring about best practices and code quality. I'm looking to keep growing as an engineer, learn from experienced teams and add value to long-term, impactful software.",
    },
  },
};
