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
  {
    name: "Case studies",
    hash: "#case-studies",
    linkActive: true,
    url: "/case-studies/",
  },
] as const;

// Static case studies served from public/case-studies/<slug>/ (newest first).
export const caseStudiesData = [
  {
    slug: "regrag",
    title: "RegRAG: cited answers from ADGM financial regulation",
    summary:
      "How I built RegRAG: question answering over 40 ADGM rulebooks with exact passage citations, refusals, a LangGraph pipeline on Gemini, and an evaluation on the ObliQA dataset's own labels.",
    timeline: "Nov 2026",
    role: "Solo, open-source",
    tags: ["RAG", "BM25", "LangGraph", "Evaluation"],
    thumbnail: "/case-studies/regrag/thumb.png",
  },
  {
    slug: "dojo-wizard-rag",
    title: "Dojo Wizard: a guarded, read-only RAG assistant for SecDojo",
    summary:
      "How I designed and shipped Dojo Wizard, SecDojo's in-app AI assistant: custom RAG on Qdrant, Gemini function calling, SSE streaming and five layers of guardrails.",
    timeline: "Nov 2025 – Jan 2026",
    role: "Lead AI Engineer",
    tags: ["RAG", "Qdrant", "Gemini", "Guardrails"],
    thumbnail: "/case-studies/dojo-wizard-rag/thumb.png",
  },
  {
    slug: "dojo-lab-wizard-agent",
    title:
      "Dojo Lab Wizard: an AI agent that picks the right labs from the database",
    summary:
      "How I built Dojo Lab Wizard end to end for SecDojo: a drop-in front-end sidebar, a Laravel gateway and a Gemini function-calling agent that resolves every catalog dimension, guarded by a tool gateway and evaluated against SQL ground truth.",
    timeline: "Dec 2025 – Jan 2026",
    role: "Feature owner",
    tags: ["AI agents", "Function calling", "Tool security", "Evaluation"],
    thumbnail: "/case-studies/dojo-lab-wizard-agent/thumb.png",
  },
  {
    slug: "dojo-hints",
    title: "Dojo Hints: AI hints that unblock learners without spoiling the lab",
    summary:
      "How I built Dojo Hints for SecDojo: instructor-reviewed hints delivered one at a time by an AI mentor, scoped to the learner's lab instance and guarded against spoilers in both directions.",
    timeline: "Dec 2025 – Jan 2026",
    role: "Feature owner",
    tags: ["LLM guardrails", "Celery", "Evaluation"],
    thumbnail: "/case-studies/dojo-hints/thumb.png",
  },
  {
    slug: "intelligent-pathways",
    title:
      "Intelligent Pathways: training paths built only from MITRE ATT&CK and NIST NICE",
    summary:
      "How I built Intelligent Pathways for SecDojo: a manager describes a training goal, Gemini maps it to MITRE and NIST NICE IDs, and only the courses and labs mapped to those IDs are ranked into a pathway, behind three validation gates.",
    timeline: "Sep – Nov 2025",
    role: "Feature owner",
    tags: ["Structured output", "Recommenders", "Guardrails"],
    thumbnail: "/case-studies/intelligent-pathways/thumb.png",
  },
] as const;

export const experiencesData = [
  {
    title: "AI Full Stack Developer — SecDojo",
    location: "Casablanca, Morocco",
    description: [
      "Developed a Python/FastAPI AI backend for Cyberlab and Cyberlearn, integrating OpenAI and Google GenAI with chat and file-upload APIs, conversation history and responses streamed through SSE (Server-Sent Events).",
      "Built an autonomous assistant using Gemini and function calling, connected to business APIs to recommend labs (hands-on cybersecurity exercises), provide contextual hints and guide users through their learning journey.",
      "Created a semantic search index from lab data and technical documentation, generating OpenAI embeddings and indexing them with metadata in Qdrant (a vector database) to support a custom RAG (Retrieval-Augmented Generation) system.",
      "Automated the analysis of labs (hands-on cybersecurity exercises) and their write-ups (technical documentation) using Python and LangGraph to suggest mappings to MITRE ATT&CK (a knowledge base of adversary tactics and techniques) and NIST NICE (a framework describing cybersecurity roles and skills), with lab creation team validation before saving the results in the back office.",
      "Orchestrated long-running back-office processes with n8n and Celery/RabbitMQ, using workflows that call business APIs, separate processing queues, task-status tracking and result delivery through APIs and SSE.",
      "Led frontend architecture for three SecDojo SaaS platforms—Cyberlab, Cyberlearn and CyberAwareness—using React and Next.js, from design through production delivery.",
      "Developed Sekops with NestJS and Next.js, orchestrating security scanners in parallel with BullMQ/Redis, from repository cloning to vulnerability detection and tracking results by commit.",
      "Implemented GitLab CI/CD pipelines with tests, static analysis and vulnerable-dependency checks, blocking deployments that failed quality and security checks.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 – Present",
  },
  {
    title: "Front-End Engineer — Sekera Group",
    location: "Casablanca, Morocco",
    description:
      "Led Vue.js and TypeScript architecture across three SecDojo SaaS platforms (Cyberlab, Cyberlearn, CyberAwareness). Developed landing pages in close collaboration with the UI/UX designer, built and maintained the Vue.js internal back-office with a Node.js (NestJS) backend, and guided front-end interns through onboarding and code reviews.",
    icon: React.createElement(FaVuejs),
    date: "Feb 2023 – Jan 2024",
  },
  {
    title: "Full-Stack Developer — Digital Partnership Group",
    location: "Casablanca, Morocco",
    description:
      "Worked in a 5-person team building SaaS and enterprise web applications for national clients using Laravel, PHP, JavaScript, Svelte.js and React. Delivered multiple client projects from design handoff to production.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 – Jan 2023",
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
      "Developed AI services and frontend features for Cyberlab, Cyberlearn and CyberAwareness, combining Python/FastAPI, OpenAI and Gemini integrations, Qdrant-based semantic indexing and AI-assisted back-office workflows with React and Next.js interfaces.",
    tags: ["Python", "FastAPI", "React", "Next.js", "OpenAI", "Gemini", "Qdrant", "LangGraph", "n8n"],
    imageUrl: cyberlabScreen,
    projectUrl: "https://sec-dojo.com",
  },
  {
    title: "Sekops",
    description:
      "Built an application security platform with a NestJS backend and Next.js interface, coordinating security scanners through BullMQ and Redis to detect vulnerabilities and track findings by repository commit.",
    tags: ["NestJS", "Next.js", "BullMQ", "Redis", "PostgreSQL", "Docker", "OWASP", "Semgrep"],
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
      "Contributed to the development of the Dreebz landing page, presenting a platform that uses AI to answer user questions and connects users with qualified experts.",
    tags: ["HTML", "CSS", "Javascript", "PHP", "Laravel"],
    imageUrl: dreebz,
    projectUrl: "https://dreebz.com",
  },
  {
    title: "Animo.ma",
    description:
      "Contributed to building Animo.ma, a platform connecting people who want to buy, sell or adopt pets.",
    tags: ["HTML", "CSS", "Scss", "Javascript", "Laravel", "Livewire"],
    imageUrl: animo,
    projectUrl: "https://animo.ma",
  },
  {
    title: "GetManager",
    description:
      "Contributed to rebuilding GetManager (getmanager.ma) from scratch as part of a 3-person team, developing a B2B SaaS ERP platform covering HR management, accounting, inventory, commercial operations and project management. The platform serves companies and users across Morocco.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST APIs", "PHP"],
    imageUrl: getmanagerScreen,
    projectUrl: "https://getmanager.ma",
  },
] as const;

export const skillsData = [
  { group: "AI / GenAI", skills: ["OpenAI API", "Google GenAI / Gemini", "LLM integration", "RAG", "Embeddings", "Vector stores", "Qdrant", "LangChain", "LangGraph", "Langfuse", "AI agents", "Function calling / tool calling", "Model Context Protocol (MCP)", "Pandas", "Scikit-learn"] },
  { group: "Backend", skills: ["Python", "FastAPI", "Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "SSE", "Celery", "RabbitMQ", "BullMQ", "Redis", "TypeORM", "Prisma", "Passport.js / JWT", "Keycloak"] },
  { group: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "React Query / TanStack Query", "shadcn/ui", "Radix UI", "Framer Motion", "Tailwind CSS", "Sass/SCSS", "HTML5", "CSS3"] },
  { group: "Databases and search", skills: ["PostgreSQL", "pgvector", "MySQL", "MongoDB", "Supabase", "Redis", "Qdrant", "Elasticsearch", "Algolia"] },
  { group: "Automation, DevOps and cloud", skills: ["n8n", "Docker", "Docker Compose", "Git", "GitLab CI/CD", "Terraform", "Unix/Linux", "AWS", "Microsoft Azure"] },
  { group: "Testing and quality", skills: ["Vitest", "Playwright", "Cypress", "SonarQube"] },
  { group: "Additional", skills: ["Go", "Java", "Spring Boot", "PHP", "Laravel", "Vue.js"] },
/*
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
*/
] as const;
