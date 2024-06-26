import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "David Martínez Fernández",
  logo: "/logo2.webp",
  email: "davidfernandez835@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Sobre mi",
    url: "/about",
  },
  {
    title: "Proyectos",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/daxuus99",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:davidfernandez835@gmail.com",
    icon: "mdi:email",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/davidmf99/",
    icon: "mdi:linkedin",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/daavidmf99/",
    icon: "mdi:instagram",
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "David Martínez Fernández",
    description:
      "Apasionado por el código y los nuevos desafíos.",
    image: identity.logo,
  },
  role: "Estudiante y Desarrollador Full-Stack ",
  description:
    "Apasionado por el código y los nuevos desafíos.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Mis proyectos",
      url: "/projects",
    },
    {
      title: "Sobre mi",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Sobre mi | David Martínez",
    description:
      "Explorando el potencial del código y enfrentando constantemente a nuevos retos.",
    image: identity.logo,
  },
  subtitle: "Alguna información sobre mi",
  about: {
    description: `
  
Soy David Martínez Fernández, desarrollador fullstack y web. <br><br>Tengo un grado superior en Desarrollo de Aplicaciones Multiplataforma, lo que me ha dado una sólida base técnica. 
Destaco en el trabajo en equipo gracias a mis habilidades de comunicación y siempre estoy listo para nuevos desafíos.
`,
    image_l: {
      url: "/imagen2.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/imagen1.jpg",
      alt: "Right Picture",
    },
  },
work: {
    description: `He tenido la oportunidad de trabajar con diversas tecnologías y herramientas para desarrollar proyectos fascinantes. 
    A continuación, algunos de los proyectos en los que he participado.`,
    items: [
      {
        title: "Web Developer",
        company: {
          name: "Freelance",
          image: "/web.png",
          url: "https://github.com/daxuus99",
        },
        date: "Actualmente...",
      },
      {
        title: "SEO Analyst and Recruitment",
        company: {
          name: "Freelance",
          image: "/bytek.png",
          url: "https://bytek.ai/en/",
        },
        date: "Marzo 2023 - Junio 2023",
      },
    ],
  },
  connect: {
    description: `Siempre estoy interesado en conocer gente nueva y aprender cosas nuevas. No dudes en conectarte conmigo en cualquiera de las siguientes plataformas.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Proyectos | David Martínez",
    description: "Mira en lo que he estado trabajando...",
    image: identity.logo,
  },
  subtitle: "Mira en lo que he estado trabajando...",
  projects: [
    {
      title: "Desarrollo de Página Web para @YosoyJosema",
      description: `Tecnologías Utilizadas: WordPress, tema personalizado, HTML, CSS, JavaScript`,
      image: "/yosoyjosema.jpg",
      year: "2024",
      url: "https://myblog-tqsoty0icq.live-website.com/",
    },
    {
      title: "Desarrollo de Página Web para Venta de Calderas",
      description: "Tecnologías Utilizadas: WordPress, WooCommerce, personalización de temas, PHP, MySQL.",
      image: "/climabcn.jpg",
      year: "2024",
      url: "https://climabcn.com/",
    },  
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | David Martínez",
    description: "Pensamientos, historias e ideas.",
    image: identity.logo,
  },
  subtitle: "Pensamientos, historias e ideas.",
};
