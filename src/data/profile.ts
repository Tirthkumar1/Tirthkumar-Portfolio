export type Experience = {
  role: string;
  company: string;
  timeframe: string;
  location: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
  timeframe: string;
  location: string;
  link?: string;
  details?: string;
};

export type Project = {
  name: string;
  timeframe: string;
  description: string;
  tech: string[];
  link?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  url: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Profile = {
  name: string;
  tagline: string;
  location: string;
  nationality: string;
  email: string;
  phone: string;
  availability: string;
  about: string;
  languages: Language[];
  socials: ContactLink[];
};

export const profile: Profile = {
  name: "Tirthkumar Bodar",
  tagline: "Digital engineering student & front-end developer",
  location: "Weimar, Germany",
  nationality: "Indian",
  email: "bodar.tirth@gmail.com",
  phone: "+49 1573 4109519",
  availability: "Open to full-time roles and freelance collaborations",
  about:
    "Digital Engineering master's student with a civil engineering foundation and a passion for crafting immersive, responsive web experiences. Blends analytical thinking with modern front-end tooling to build products that feel polished and intuitive.",
  languages: [
    { name: "Gujarati", level: "Native" },
    { name: "English", level: "C1" },
    { name: "German", level: "B2" },
  ],
  socials: [
    { label: "Email", url: "mailto:bodar.tirth@gmail.com" },
    { label: "Phone", url: "tel:+4915734109519" },
    { label: "Download CV", url: "/Tirthkumar-Bodar-CV.pdf" },
  ],
};

export const experiences: Experience[] = [
  {
    role: "Front Desk Associate",
    company: "Boutique-Hotel Amalienhof",
    timeframe: "Aug 2023 - Aug 2025",
    location: "Weimar, Germany",
    highlights: [
      "Deliver warm, attentive guest relations while coordinating daily reception operations.",
      "Maintain hotel IT equipment, ensuring reliable connectivity and smooth check-in workflows.",
    ],
  },
  {
    role: "M.Sc. Thesis: Technical Line Drawing Generation",
    company: "Bauhaus University Weimar",
    timeframe: "Sep 2025 - Present",
    location: "Weimar, Germany",
    highlights: [
      "Developing a pipeline that produces detailed line drawings of mechanical components from their color imagery.",
      "Experimenting with Python, OpenCV, and pretrained vision models to detect edges, refine contours, and suppress noise.",
      "Iterating on model selection and post-processing to balance engineering precision with visual clarity.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.Sc. Digital Engineering",
    institution: "Bauhaus University Weimar",
    timeframe: "2022 - Present",
    location: "Weimar, Germany",
    link: "https://www.uni-weimar.de/",
    details: "Exploring software engineering, data-driven systems, and human-centered design.",
  },
  {
    degree: "B.E. Civil Engineering",
    institution: "Babaria Institute of Technology",
    timeframe: "2016 - 2020",
    location: "Vadodara, India",
    link: "https://bitseducampus.org/",
    details: "Laid the foundation for structural analysis, project planning, and problem solving.",
  },
];

export const projects: Project[] = [
  {
    name: "Modern Bank Website",
    timeframe: "Nov 2024",
    description:
      "Crafted a modern banking landing page with responsive layouts, interactive cards, and real-time sentiment animations tied into Sentry monitoring.",
    tech: ["React", "Tailwind CSS", "Sentry"],
    link: "https://bodar-webs.netlify.app/",
  },
  {
    name: "iPhone 15 Launch Experience",
    timeframe: "Oct - Nov 2024",
    description:
      "Built a storytelling product page featuring GSAP-driven motion, Three.js 3D models, and micro-interactions optimised for modern browsers.",
    tech: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    link: "https://brilliant-brigadeiros-41c384.netlify.app/",
  },
  {
    name: "Bloomscape Garden Services",
    timeframe: "2025",
    description:
      "Marketing site for a gardening brand, built with a NEXT+Typescript stack and tailored animations to present services.",
    tech: ["NEXT", "Typescript", "Tailwind CSS"],
    link: "http://jens-gardening.netlify.app/",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "React Native",
      "Vue.js",
      "GSAP",
      "Three.js",
      "TypeScript",
    ],
  },
  {
    title: "Design & Product",
    items: ["Figma", "Web design", "Locofy", "WordPress"],
  },
  {
    title: "Backend & Data",
    items: ["Java", "Python", "Machine Learning", "Natural Language Processing", "Docker", "Git"],
  },
  {
    title: "Engineering Tools",
    items: ["Matlab/Simulink", "AnyLogic", "Microsoft Office"],
  },
];
