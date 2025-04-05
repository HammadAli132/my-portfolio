import ProjectCard from "./ProjectCard";
import "dotenv/config";

async function getProjects() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/projects?populate=*`, {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function ProjectSection() {
  const backendUrl = process.env.BACKEND_URL;
  const isDevMode = process.env.DEV_MODE === "true"; // Check if DEV_MODE is true or false
  const projects = await getProjects();

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
        <div id="grid" className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 w-full">
          {projects.length > 0 ? (
            projects.map((project) => {
              // Conditional image URL for the project image
              const imageUrl = project.ProjectImage?.url
                ? isDevMode && backendUrl 
                  ? `${backendUrl}${project.ProjectImage.url}` 
                  : project.ProjectImage.url 
                : "/test.webp";

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
                  image={imageUrl}
                  title={project.Title}
                  description={project.Description}
                  techLogos={techLogos}
                  link={project.LiveURL}
                  github={project.GithubURL}
                />
              );
            })
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
