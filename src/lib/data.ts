export const about = {
  welcomingText: "Passionate about coding, building, and making an impact.",
  description:
    "As a college student passionate about software engineering, I am eager to learn and create impactful projects. I have developed applications that solve real-world problems and enhance everyday experiences.",
  school: "Faculty of Informatics and Information Technologies STU in Bratislava (STU FIIT)",
  email: "maximilian.jaroscak@gmail.com",
  location: "Bratislava, Slovakia",
  linkedin:
    "https://www.linkedin.com/in/maximilian-jaro%C5%A1%C4%8D%C3%A1k-32323529a/",
  github: "https://github.com/MasterPieceSVK",
};

export const experience = [
  {
    id: 1,
    company: "UNIIT",
    image: "/logos/uniit-logo.png",
    position: "Junior Software Developer",
    date: "2024 - Present",
    bulletPoints: [
      "Developed event management software for the Night of Chances conference, improving event organization and user experience.",
      "Mainly working on UNISPACE mobile app right now",
      "Also working on Zmudri.sk, UNIBER, and Tower Finance CRM",
      "Tech stack: Next.js, Nuxt.js, SvelteKit, TypeScript, React Native, Expo, GraphQL, tRPC, Tailwind CSS, Prisma, Strapi CMS.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "OnTime",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "React Leaflet",
      "React Query",
      "PWA",
    ],
    description:
      "OnTime is a smarter way to commute with Slovak public transport. Instead of searching for the same A-to-B route every day, simply pick your usual stop from the homepage and instantly see all upcoming departures with real-time delays and a live map. No need to type stop names or wait for route searches. Plus, with PWA support, OnTime works just like a native mobile app for quick, everyday access.",
    live: "https://ontime.jaroscak.com",
    figma:
      "https://www.figma.com/design/oMjjKCtkpiqdtWc46F7Wiq/OnTime?node-id=0-1&t=LZao0K3kdWSwrUrY-1",
    image: "/banners/ontimemockup.png",
  },
  {
    id: 2,
    title: "Portfolio website",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Docker"],
    description:
      "This is my personal portfolio website, built with Next.js and Tailwind CSS to showcase my skills, projects, and experience as a software developer. The site is designed to be fast, responsive, and user-friendly, providing visitors with an easy way to learn about my work and get in touch. It features sections for my projects, skills, certifications and more, all styled with Tailwind CSS for a modern and clean look.",
    github: "https://github.com/MasterPieceSVK/portfolio",
    live: "https://jaroscak.com",
    figma:
      "https://www.figma.com/design/fZ5hZHl3vvMn2kwI4vP2DM/Portfolio?node-id=1-2&t=JflDUKnBn8i5xJh8-1",
    image: "/banners/portfolio_mockup.png",
  },
  {
    id: 3,
    title: "Quizzy - AI Quiz App",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Google Gemini AI",
    ],
    description:
      "Quizzy is an AI-enhanced quiz creation and participation platform designed to make learning more interactive and efficient. Teachers can effortlessly generate quiz questions using AI and assign quizzes to student groups, while students enjoy a user-friendly environment with instant feedback. The platform features secure user authentication and a fully responsive design, ensuring a seamless experience across desktops, tablets, and mobile devices. Built for the 2024 Gemini API Developer Competition, Quizzy combines modern technologies to deliver an engaging and educational experience.",
    github:
      "https://github.com/MasterPieceSVK/Quizzy-Gemini_API_Developer_competition",
    // live: "https://quizzy-ai.netlify.app", // server is off so i disabled this
    image: "/banners/quizzy.png",
  },
  {
    id: 4,
    title: "OCR Grade calculator",
    tags: [
      "Next.js",
      "Node.js",
      "JavaScript",
      "Tesseract",
      "Multer",
      "React Query",
      "PWA",
      "Tailwind CSS",
    ],
    description:
      "This Calculator app is specifically designed for Edupage users, featuring Optical character recognition functionality to quickly extract and calculate numerical data from images. Built with Next.js for the frontend and Node.js for the backend, it leverages Tesseract for optical character recognition and Multer for efficient image handling. The app provides a fast, user-friendly experience with React Query for data management and PWA functionality for a native app-like experience. Its sleek Tailwind CSS design ensures seamless performance across all devices.",
    github: "https://github.com/MasterPieceSVK/grade_calculator_v3_frontend",
    live: "https://maxgrade-calculator.netlify.app/",
    image: "/banners/ocrgradecalculator.png",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Full-Stack Engineer",
    tags: [
      "HTML",
      "JavaScript",
      "CSS",
      "React",
      "Node.js",
      "Git",
      "SQL",
      "Express.js",
      "REST",
    ],
    link: "https://www.codecademy.com/profiles/MasterPieceSVK/certificates/ffd0f42cce1a44e9a0108b365047a0a6",
    image: "/banners/codecademy.png",
  },
  {
    id: 2,
    title: "React Native Course",
    tags: ["React Native", "Expo"],
    link: "https://www.codecademy.com/profiles/MasterPieceSVK/certificates/458aef4eef5f5130685423fc15e6493d",
    image: "/banners/reactnative.webp",
  },
  {
    id: 3,
    title: "Golang/Go Course",
    tags: ["Go"],
    link: "https://www.codecademy.com/profiles/MasterPieceSVK/certificates/60773d2e920679c8e46ff634b9ed2e6e",
    image: "/banners/go.png",
  },
  {
    id: 4,
    title: "C Course",
    tags: ["C"],

    link: "https://www.codecademy.com/profiles/MasterPieceSVK/certificates/9dba9d9b6bf64cf58b2b416ef9cd0912",
    image: "/banners/c.png",
  },
  {
    id: 5,
    title: "PHP Course",
    tags: ["PHP"],

    link: "https://www.codecademy.com/profiles/MasterPieceSVK/certificates/9b7bcc38d0ed49f593228763cbfd51e3",
    image: "/banners/php.webp",
  },
];

export const skills = [
  {
    id: 1,
    title: "Next.js",
    tags: ["Fullstack", "Frontend"],
    description:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
    image: "/logos/nextjslogo.svg",
  },
  {
    id: 2,
    title: "SvelteKit",
    tags: ["Fullstack", "Frontend"],
    description:
      "SvelteKit is a framework for building web applications with Svelte, providing server-side rendering, routing, and other features out of the box.",
    image: "/logos/svelte.svg",
  },
  {
    id: 3,
    title: "HTML",
    tags: ["Frontend"],
    description:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.",
    image: "/logos/html.svg",
  },
  {
    id: 4,
    title: "React",
    tags: ["Frontend"],
    description:
      "React is a JavaScript library for building user interfaces, allowing developers to create reusable UI components efficiently.",
    image: "/logos/react.svg",
  },
  {
    id: 5,
    title: "Svelte",
    tags: ["Frontend"],
    description:
      "Svelte is a component-based JavaScript framework that compiles components into highly efficient vanilla JavaScript at build time.",
    image: "/logos/svelte.svg",
  },
  {
    id: 6,
    title: "TypeScript",
    tags: ["Fullstack"],
    description:
      "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript, helping developers catch errors early and improve code maintainability.",
    image: "/logos/typescript.svg",
  },
  {
    id: 7,
    title: "JavaScript",
    tags: ["Fullstack"],
    description:
      "JavaScript is a versatile programming language that enables dynamic web development, both on the frontend and backend.",
    image: "/logos/javascript.svg",
  },
  {
    id: 8,
    title: "Node.js",
    tags: ["Backend"],
    description:
      "Node.js is a runtime environment that allows JavaScript to be used on the server side, enabling scalable backend applications.",
    image: "/logos/nodejs.svg",
  },
  {
    id: 9,
    title: "Express.js",
    tags: ["Backend"],
    description:
      "Express.js is a fast and minimalist web framework for Node.js, used for building RESTful APIs and web applications.",
    image: "/logos/express.svg",
  },
  {
    id: 10,
    title: "REST",
    tags: ["API"],
    description:
      "REST (Representational State Transfer) is an architectural style for designing scalable web APIs using HTTP methods.",
    image: "/logos/rest.svg",
  },
  {
    id: 11,
    title: "GraphQL",
    tags: ["API"],
    description:
      "GraphQL is a query language for APIs that provides a more flexible and efficient alternative to REST APIs.",
    image: "/logos/graphql.svg",
  },
  {
    id: 12,
    title: "tRPC",
    tags: ["API"],
    description:
      "tRPC enables typesafe APIs using TypeScript, allowing seamless communication between frontend and backend applications without the need for GraphQL.",
    image: "/logos/trpc.svg",
  },
  {
    id: 13,
    title: "React Native",
    tags: ["Mobile", "Frontend"],
    description:
      "React Native is a framework for building mobile applications using JavaScript and React, enabling cross-platform development.",
    image: "/logos/react.svg",
  },
  {
    id: 14,
    title: "Expo",
    tags: ["Mobile"],
    description:
      "Expo is a framework and platform for universal React applications, streamlining the development of React Native apps.",
    image: "/logos/expo.svg",
  },
  {
    id: 15,
    title: "CSS",
    tags: ["Frontend"],
    description: "CSS (Cascading Style Sheets) is used for styling web pages.",
    image: "/logos/css.svg",
  },
  {
    id: 16,
    title: "Tailwind CSS",
    tags: ["Frontend"],
    description:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with pre-defined classes.",
    image: "/logos/tailwind.svg",
  },
  {
    id: 17,
    title: "PostgreSQL",
    tags: ["Database"],
    description:
      "PostgreSQL is an advanced open-source relational database management system known for its reliability and performance.",
    image: "/logos/postgres.svg",
  },
  {
    id: 18,
    title: "SQL",
    tags: ["Database"],
    description:
      "SQL (Structured Query Language) is a language used for managing and querying relational databases.",
    image: "/logos/sql.svg",
  },
  {
    id: 19,
    title: "Prisma",
    tags: ["Database"],
    description:
      "Prisma is a modern ORM for Node.js and TypeScript that simplifies database access and management.",
    image: "/logos/prisma.svg",
  },

  {
    id: 20,
    title: "Figma",
    tags: ["Design"],
    description:
      "Figma is a cloud-based design tool used for UI/UX design, prototyping, and collaboration.",
    image: "/logos/figma.svg",
  },
  {
    id: 21,
    title: "C",
    tags: ["Low Level Programming"],
    description:
      "C is a general-purpose programming language known for its performance and low-level memory manipulation capabilities.",
    image: "/logos/c.svg",
  },
  {
    id: 22,
    title: "Go",
    tags: ["Backend"],
    description:
      "Go (Golang) is a statically typed, compiled language designed for high performance and concurrency.",
    image: "/logos/go.svg",
  },
  {
    id: 23,
    title: "PHP",
    tags: ["Fullstack"],
    description:
      "PHP is a widely-used scripting language designed for web development and server-side scripting.",
    image: "/logos/php.svg",
  },
  {
    id: 24,
    title: "Git",
    tags: ["Version Control"],
    description:
      "Git is a distributed version control system that allows developers to track changes and collaborate on projects.",
    image: "/logos/git.svg",
  },
  {
    id: 25,
    title: "PWA",
    tags: ["Frontend"],
    description:
      "Progressive Web Apps (PWA) offer a native app-like experience using web technologies, allowing offline usage and fast performance.",
    image: "/logos/pwa.svg",
  },

  {
    id: 26,
    title: "Tesseract",
    tags: ["OCR"],
    description:
      "Tesseract is an optical character recognition (OCR) engine that extracts text from images.",
    image: "/logos/tesseract.svg",
  },

  {
    id: 27,
    title: "React Leaflet",
    tags: ["Frontend"],
    description:
      "React Leaflet is a React library for integrating interactive maps into web applications using Leaflet.js.",
    image: "/logos/reactleaflet.svg",
  },
  {
    id: 28,
    title: "Docker",
    tags: ["DevOps"],
    description:
      "Docker is a platform for developing, shipping, and running applications in containers, providing a consistent environment across different systems.",
    image: "/logos/docker.svg",
  },
];
