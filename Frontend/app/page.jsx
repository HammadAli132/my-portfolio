import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/projects/ProjectSection";
import SkillsSection from "./components/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
    </>
  );
}
