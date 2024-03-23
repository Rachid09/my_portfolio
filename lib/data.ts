import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cyberlabScreen from "@/public/cyberlab-screen.svg";
import dreebz from "@/public/dreebz.png";
import harx from "@/public/harx-1.png";
import animo from "@/public/animo-1.png";
import digital360 from "@/public/360-digital.png";
import { FaAngular } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FullStack Engineer - SecDojo",
    location: "Casablanca, Morocco",
    description:
      "FullStack Engineer at SecDojo since we lanched Successfully launched the new version of the SecDojo platform within six months, collaborating with a team of talented colleagues. Contributed significantly to revenue growth and user acquisition, expanding both B2B and B2C segments",
    icon: React.createElement(FaAngular),
    date: "Feb 2023 - Present",
  },
  {
    title: "Frontend Engineer - Sekera",
    location: "Casablanca, Morocco",
    description:
      "Front-End Developer at Sekera (Since February). Successfully launched the new version of the SecDojo platform within six months, collaborating with a team of talented colleagues. Contributed significantly to revenue growth and user acquisition, expanding both B2B and B2C segments",
    icon: React.createElement(FaAngular),
    date: "Feb 2023 - Present",
  },
  {
    title: "Full-Stack Developer - Digital Partnership Group",
    location: "Casablanca, Morocco",
    description:
      "Full-Stack Developer at Digital Partnership Group Agency . Collaborated with a 5-member team on diverse SaaS and enterprise-only web applications. Successfully launched projects attracting multiple national clients.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Feb 2023",
  },
  {
    title: "Graduated from FSTM",
    location: "Morocco, Mohammedia",
    description:
      "Bachelor's in Computer Science from the Faculty of Science and Technology of Mohammedia. Specialized in Networking Principles, Web Development, Project Management, and Cybersecurity Basics.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2021 - July 2022",
  },
  // {
  //   title: "Full-Stack Developer - Digital Partnership Group",
  //   location: "Casablanca, Morocco",
  //   description:
  //     "Full-Stack Developer at Digital Partnership Group Agency . Collaborated with a 5-member team on diverse SaaS and enterprise-only web applications. Successfully launched projects attracting multiple national clients.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "Aug 2021 - Feb 2023",
  // },
] as const;

export const projectsData = [
  {
    title: "SecDojo",
    description:
      "Contributed to the development of the new version of the SecDojo platform (a gamified cybersecurity learning and recruitment platform.) in 6 months using technologies above",
    tags: ["Angular", "Typescript", "TailwindCss", "RxJS", "Scss"],
    imageUrl: cyberlabScreen,
    projectUrl: "https://sec-dojo.com",
  },
  {
    title: "Harx.ai",
    description:
      "HARX is a platform that connects HARXEES (you) and COMPANIES. You sell the services and products of COMPANIES at your convenience and earn a commission",
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
    projectUrl: "https://dreebz.com/fr/explore",
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
    title: "360 Digital",
    description:
      "Built the landing page of a digital agency 360Digital that is responsive from mobile to desktop devices with some user fiendly scrolling animations using CSS keyframes",
    tags: ["HTML", "CSS", "Scss", "Javascript"],
    imageUrl: digital360,
    projectUrl: "https://unruffled-haibt-10b49f.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Angular Material",
  "React",
  "Next.js",
  "Svelte.js",
  "SvelteKit",
  "PHP",
  "Laravel.js",
  "Node.js",
  "Express.Js",
  "NestJs",
  "MongoDB",
  "MySql",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Flask",
  "Git",
  "Github",
  "Gitlab",
  "Containers",
  "Docker",
  "Vit",
  "WebPack",
] as const;
