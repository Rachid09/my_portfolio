import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cyberlabScreen from "@/public/cyberlab-screen.svg";
import dreebz from "@/public/dreebz.png";
import harx from "@/public/harx-1.png";
import animo from "@/public/animo-1.png";
import digital360 from "@/public/360-digital.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
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
