import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/projects/ProjectSection";
import SkillsSection from "./components/skills/SkillsSection";
import TechSection from "./components/technologies/TechSection";
import ContactSection from "./components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <TechSection />
      <ContactSection />
    </>
  );
}
