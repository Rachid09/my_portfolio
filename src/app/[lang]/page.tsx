import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Intro from "./components/intro";
import LangRedirect from "./components/LangRedirect";
import Projects from "./components/projects";
import SectionDivider from "./components/section-divider";
import Skills from "./components/skills";
import componentResolver from "./utils/component-resolver";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";

export default function RootRoute({ params }: { params: { lang: string } }) {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
