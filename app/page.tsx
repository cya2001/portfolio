import Experience from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Articles from '@/components/articles';


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <Experience/>
      <Articles/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  )
}
