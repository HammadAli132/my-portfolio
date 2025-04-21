"use client";

import { useProjects } from "@/app/contexts/ProjectContext";
import { TbExternalLink } from "react-icons/tb";
import ProjectCard from "./ProjectCard";
import "dotenv/config";
import Link from "next/link";

export default function ProjectSection() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const isDevMode = process.env.NEXT_PUBLIC_DEV_MODE === "true"; // Check if DEV_MODE is true or false
  const { projects } = useProjects();

  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section id="projects" className="px-4 py-20 relative">
      <div className="flex flex-col justify-between items-center gap-12 lg:max-w-4/6 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            <span className="text-primary">Innovative Creations,</span> Real-World Impact
          </h1>
          <p className="text-lg md:max-w-5/6 mx-auto">
            A showcase of projects that blend creativity with technology.  
            From seamless user experiences to powerful backend systems, these works highlight my passion for building <span className="font-bold text-primary">scalable, efficient, and innovative solutions.</span>
          </p>
        </div>
        <div id="grid" className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 w-full relative">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project) => {
              // Conditional image URL for the project image
              const urls = project.ProjectImages?.map((img) => img.url);
              let imageUrls = [];

              if (!urls || urls.length === 0) {  
                imageUrls = ["/default-image.jpg"];
              } else {
                imageUrls = urls.map((url) => {
                  if (isDevMode && backendUrl) {
                    return `${backendUrl}${url}`;
                  }
                  return url;
                });
              }

              console.log("Image URLs:", imageUrls);

              // Conditional image URLs for tech stack logos
              const techLogos = project.TechStackLogos?.map(tech => {
                let techUrl = tech.url ? tech.url : "/default-logo.jpg";
                if (isDevMode && backendUrl) {
                  techUrl = `${backendUrl}${techUrl}`;
                }
                return techUrl;
              }) || [];

              return (
                <ProjectCard
                  key={project.id}
                  images={imageUrls}
                  title={project.Title}
                  description={project.Description}
                  techLogos={techLogos}
                  link={project.LiveURL}
                  github={project.GithubURL}
                  isFeatured={project.isFeatured}
                />
              );
            })
          ) : (
            <p>No featured projects found.</p>
          )}
        </div>
        <Link href={"/projects"} className="text-lg text-primary hover:underline self-end">
          Explore All Projects<TbExternalLink className="inline-block ml-1" />
        </Link>
      </div>
    </section>
  );
}
