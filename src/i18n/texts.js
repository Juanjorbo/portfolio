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
      subtitleTyping: ["Developer Full Stack", "Hello World!"],
      name: "Juanjo Rincón",
      tagline:
        "Más de 2 años de experiencia, enfocado en la innovación de procesos en Barcelona, con foco en desarrollo full stack.",
    },

    experience: {
      title: "Experiencia profesional",
      subtitle:
        "Experiencia real en entornos productivos, con foco en backend y calidad de software.",
      items: [
        {
          role: "Desarrollador Full Stack",
          company:
            "Ayuntamiento de Barcelona — Instituto Municipal de Urbanismo",
          date: "Oct 2024 — Presente",
          desc: [
            "Desarrollo de aplicaciones internas utilizando React y Angular para la gestión y optimización de procesos.",
            "Programación de lógica de negocio en Java e integración mediante APIs REST.",
            "Implementación de automatizaciones y scripts para reducir tareas manuales.",
            "Gestión básica de servidores y trabajo con bases de datos SQL.",
            "Resolución de incidencias técnicas relacionadas con código y sistemas.",
          ],
        },
        {
          role: "Desarrollador Backend · Erasmus",
          company: "CtrlArt — Eslovenia",
          date: "Jul 2025 — Sep 2025",
          desc: [
            "Desarrollo de funcionalidades y sistemas interactivos en proyectos reales.",
            "Programación en C# y .NET aplicando principios de programación orientada a objetos.",
            "Uso de control de versiones y buenas prácticas en entornos colaborativos con Git.",
          ],
        },
        {
          role: "Desarrollador Frontend",
          company: "Desilence",
          date: "Ene 2023 — Jun 2023",
          desc: [
            "Aprendizaje y uso de Java, HTML, CSS y PHP en proyectos web.",
            "Desarrollo y mantenimiento de sitios web utilizando WordPress.",
          ],
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
            "Proyecto de videojuego creado desde cero como experiencia shooter por rondas, inspirado en el clásico modo zombis de Call of Duty. Ambientado en el Japón feudal, con foco en atmósfera visual, diseño de escenarios y progresión a través de oleadas de enemigos.",
          demo: "https://www.artstation.com/artwork/Zax080",
          icon: "artstation",
          previewLabel: "ArtStation",
        },
      ],
    },
    
    about: {
      title: "Sobre mí",
      text:
        "Me llamo Juan José, aunque prefiero que me llamen Juanjo. Empecé en la programación a los 15 años con una pequeña Raspberry Pi que despertó mi curiosidad por entender cómo funcionan las cosas desde dentro.\n\n Uno de mis mayores hitos profesionales fue colaborar con el Ayuntamiento de Barcelona en el desarrollo de herramientas internas, una experiencia que reforzó mi interés por crear software con impacto real.\n\n Actualmente estoy abierto a nuevos retos profesionales, especialmente en equipos donde se valore la calidad, el aprendizaje continuo y el impacto del producto. Busco proyectos que me reten y me permitan seguir creciendo como desarrollador.",
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
      subtitleTyping: ["Developer Full Stack", "Hello World!"],
      name: "Juanjo Rincón",
      tagline:
        "Over 2 years of experience, focused on process innovation in Barcelona, with a focus on full-stack development.",
    },

    experience: {
      title: "Professional experience",
      subtitle:
        "Real production experience, focused on backend engineering and software quality.",
      items: [
        {
          role: "Full Stack Developer",
          company:
            "Barcelona City Council — Municipal Institute of Urban Planning",
          date: "Oct 2024 — Present",
          desc: [
            "Development of internal applications using React and Angular to manage and optimize processes.",
            "Business logic development in Java and integration through REST APIs.",
            "Implementation of automations and scripts to reduce manual tasks.",
            "Basic server management and work with SQL databases.",
            "Resolution of technical issues related to code and systems.",
          ],
        },
        {
          role: "Backend Developer · Erasmus",
          company: "CtrlArt — Slovenia",
          date: "Jul 2025 — Sep 2025",
          desc: [
            "Development of features and interactive systems in real-world projects.",
            "Programming in C# and .NET applying object-oriented programming principles.",
            "Use of version control and best practices in collaborative environments with Git.",
          ],
        },
        {
          role: "Frontend Developer",
          company: "Desilence",
          date: "Jan 2023 — Jun 2023",
          desc: [
            "Learning and use of Java, HTML, CSS and PHP in web projects.",
            "Development and maintenance of websites using WordPress.",
          ],
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
            "A game project built from scratch as a round-based shooter experience inspired by the classic Call of Duty Zombies mode. Set in feudal Japan, the project focuses on atmosphere, visual design and level composition.",
          demo: "https://www.artstation.com/artwork/Zax080",
          icon: "artstation",
          previewLabel: "ArtStation",
        },
      ],
    },

    about: {
      title: "About me",
      text:
        "My name is Juan José, but I go by Juanjo. I started programming at the age of 15 with a small Raspberry Pi, which sparked my curiosity for understanding how things work under the hood.\n\n One of my biggest professional milestones was collaborating with the Barcelona City Council on the development of internal tools, an experience that strengthened my interest in building software with real-world impact. I am currently open to new professional challenges, especially within teams that value quality, continuous learning, and meaningful product impact. \n\nI’m looking for projects that challenge me and allow me to keep growing as a developer.",
    },
  },
};
