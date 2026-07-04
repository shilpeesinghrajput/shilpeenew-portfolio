import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  icons8,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  laptop,
  shopify,
  carrent,
  aicodereviwer,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Escale Solution",
    icon: icons8,
    iconBg: "#383E56",
    date: "May 2023 - Nov 2023",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and React.",
      "Built reusable React components to improve maintainability and scalability.",
      "Integrated REST APIs and collaborated with backend developers.",
      "Fixed bugs, optimized performance, and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Escale Solution",
    icon: laptop,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - May 2026",
    points: [
      "Developing modern web applications using React, Next.js, TypeScript, and Tailwind CSS.",
      "Creating reusable components following clean architecture and Single Responsibility Principle (SRP).",
      "Implementing dynamic forms, dashboards, authentication, and API integrations.",
      "Participating in code reviews, debugging issues, and collaborating with designers and backend developers.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Code Reviewer",
    description:
      "An AI-powered code review application that analyzes source code using Google's Gemini AI. It provides instant feedback on bugs, performance, security, best practices, and code quality while supporting multiple programming languages.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "blue-text-gradient",
      },
      {
        name: "Monaco Editor",
        color: "green-text-gradient",
      },
    ],
    image: aicodereviwer,
    source_code_link: "https://github.com/shilpeesinghrajput/ai-code-reviewer",
    live_demo_link: "https://ai-code-reviewer-ashen-six.vercel.app",
  },

  {
    name: "Job IT",
    description:
      "A job search platform that enables users to discover job opportunities, search by keyword and location, and explore company details through a clean and responsive interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image:aicodereviwer,
    source_code_link: "https://github.com/YOUR_USERNAME/job-it",
  },

  {
    name: "Trip Guide",
    description:
      "A responsive travel website that allows users to explore destinations, discover travel packages, and browse curated recommendations with a modern user interface.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/YOUR_USERNAME/trip-guide",
  },
];

export { services, technologies, experiences, testimonials, projects };
