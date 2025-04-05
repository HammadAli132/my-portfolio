import React from "react";
import SkillsCard from "./SkillsCard";
import "dotenv/config";

async function getSkills() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/skills?populate=*`, {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch skills");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}

export default async function SkillsSection() {
  const backendUrl = process.env.BACKEND_URL;
  const skillsData = await getSkills();
  const isDevMode = process.env.DEV_MODE === "true";  // Check if DEV_MODE is true or false

  return (
    <section id="skills" className="px-4 py-20 relative bg-[#1d2735]">
      <div className="flex flex-col justify-between items-center gap-12 lg:max-w-4/6 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Versatile Expertise,<span className="text-primary"> Cutting-Edge Skills</span>
          </h1>
          <p className="text-lg md:max-w-5/6 mx-auto">
            A showcase of my technical proficiencies, spanning various technologies and frameworks. 
            Constantly learning and evolving to build <span className="font-bold text-primary">scalable, innovative, and efficient solutions.</span>
          </p>
        </div>
        <div id="grid" className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 w-full">
          {/* Skills Cards */}
          {skillsData.length > 0 ? (
            skillsData.map((skill) => {
              let imageUrl = skill.Logo?.url ? skill.Logo.url : "/default-skill-logo.svg";
              
              // Conditionally prepend the backend URL if DEV_MODE is false
              if (isDevMode && backendUrl) {
                imageUrl = `${backendUrl}${imageUrl}`;
              }

              const skillsList = skill.Skills?.map(s => s.Name).filter(Boolean) || [];

              return (
                <SkillsCard
                  key={skill.id}
                  title={skill.Title}
                  logo={imageUrl}
                  skills={skillsList}
                />
              );
            })
          ) : (
            <p>No skills found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
