import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/projects/ProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
    </>
  );
}
