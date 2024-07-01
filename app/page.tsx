import Experience from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Contact from "@/components/contact";
import Internship from "@/components/internship";
import Award from "@/components/award";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <Experience/>
      <Internship/>
      <Projects/>
      <Award/>
      <Contact/>
    </main>
  )
}
