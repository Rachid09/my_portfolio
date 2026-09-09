import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cyberlabScreen from "../../../../public/cyberlab-screen.svg";
import sekopsScreen from "../../../../public/sekops-screen.png";
import dreebz from "../../../../public/dreebz.png";
import harx from "../../../../public/harx-1.png";
import animo from "../../../../public/animo-1.png";
import getmanagerScreen from "../../../../public/getmanager-screen.png";
import { FaVuejs } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
    url: "/#home",
    linkActive: true,
  },
  {
    name: "About",
    hash: "#about",
    linkActive: true,
    url: "/#about",
  },
  {
    name: "Projects",
    hash: "#projects",
    linkActive: true,
    url: "/#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
    linkActive: true,
    url: "/#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
    linkActive: true,
    url: "/#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
    linkActive: true,
    url: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Engineer — SecDojo",
    location: "Casablanca, Morocco",
    description:
      "Leading full-stack development across Node.js/NestJS backend services and Vue.js frontends. Rebuilt a real-time competition system in Go from Laravel for high-concurrency performance handling 2k–10k simultaneous users. Built AI assistants (OpenAI, MCP, RAG) guiding B2B/B2C users through the platform in real time, automated lab creation and training-scenario workflows for the Content Security team, architected background job processing with BullMQ and Redis, and shipped B2B features for enterprise clients in banking and government sectors.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 – Present",
  },
  {
    title: "Front-End Engineer — Sekera Group",
    location: "Casablanca, Morocco",
    description:
      "Led Vue.js and TypeScript architecture across three SecDojo SaaS platforms (Cyberlab, Cyberlearn, CyberAwareness). Developed landing pages in close collaboration with the UI/UX designer, built and maintained the Vue.js internal back-office with a Node.js (NestJS) backend, and guided front-end interns through onboarding and code reviews.",
    icon: React.createElement(FaVuejs),
    date: "Feb 2023 – Feb 2024",
  },
  {
    title: "Full-Stack Developer — Digital Partnership Group",
    location: "Casablanca, Morocco",
    description:
      "Worked in a 5-person team building SaaS and enterprise web applications for national clients using  Laravel, PHP, JavaScript SvelteJs and ReactJS. Delivered multiple client projects from design handoff to production.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 – Feb 2023",
  },
  {
    title: "BSc Computer Science — FSTM",
    location: "Mohammedia, Morocco",
    description:
      "Bachelor's in Computer Science covering networking, web development, project management and cybersecurity fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2021",
  },
  {
    title: "Intern Full-Stack Developer — Digital Partnership Group",
    location: "Casablanca, Morocco",
    description:
      "Built responsive web interfaces from UI mockups using HTML, CSS and modern layout techniques. Developed UI components for Burger King's internal customer service platform, implemented REST APIs in Laravel, and migrated legacy jQuery applications to React.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "SecDojo",
    description:
      "Led front-end architecture and full-cycle development of three SecDojo SaaS platforms (Cyberlab, Cyberlearn, CyberAwareness) in Vue.js and TypeScript with Tailwind and SCSS, owning technical decisions from system design to production delivery across all platform versions.",
    tags: ["Vue.js", "Typescript", "TailwindCss", "Scss", "Go", "Laravel"],
    imageUrl: cyberlabScreen,
    projectUrl: "https://sec-dojo.com",
  },
  {
    title: "Sekops",
    description:
      "Automated application security platform detecting CVEs, secrets and static vulnerabilities across enterprise codebases. Built the scanning backend in NestJS with an async job queue running multiple security scanners in parallel, and the B2B client dashboard in Vue.js.",
    tags: [
      "NestJS",
      "Vue.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "OWASP",
      "Semgrep",
    ],
    imageUrl: sekopsScreen,
    projectUrl: "https://sekops.com",
  },
  {
    title: "Harx.ai",
    description:
      "AI-powered Transaction-as-a-Service platform connecting businesses to a global network of 60,000+ certified agents. Built the frontend in SvelteKit, covering the company-facing dashboard, rep management interface, gig posting flows and the public landing pages.",
    tags: ["Svelte", "SvelteKit", "Scss", "Node.js", "MongoDb"],
    imageUrl: harx,
    projectUrl: "https://harx.ai",
  },
  {
    title: "Dreebz",
    description:
      "Worked on the Developement of Landing page to the development Dreebz an innovative platform that uses AI technology as the main means to answer user questions. After receiving an AI-generated response, Dreebz can simply and transparently connect users with qualified experts from ",
    tags: ["HTML", "CSS", "Javascript", "PHP", "Laravel"],
    imageUrl: dreebz,
    projectUrl: "https://dreebz.com",
  },
  {
    title: "Animo.ma",
    description:
      "Contributed to building Animo.ma(a website that is the intermediary between buyers, sellers, and people wishing to buy, sell or adopt pets.).",
    tags: ["HTML", "CSS", "Scss", "Javascript", "Laravel", "Livewire"],
    imageUrl: animo,
    projectUrl: "https://animo.ma",
  },
  {
    title: "GetManager",
    description:
      "Contributed to rebuilding GetManager (getmanager.ma) from scratch as part of a 3-person team a full B2B SaaS ERP platform covering HR management, accounting, inventory, commercial operations, and project management. Now serving 280+ companies and 1000+ users across Morocco.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST APIs", "PHP"],
    imageUrl: getmanagerScreen,
    projectUrl: "https://getmanager.ma",
  },
] as const;

export const skillsData = [
  "Go",
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "NestJS",
  "Node.js",
  "PHP",
  "Laravel",
  "Next.js",
  "React",
  "Vue.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "SCSS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Qdrant",
  "OpenAI API",
  "Google Gemini",
  "RAG Pipelines",
  "MCP",
  "LLM Agents",
  "Docker",
  "GitLab CI/CD",
  "AWS",
  "Git",
  "Linux",
] as const;
