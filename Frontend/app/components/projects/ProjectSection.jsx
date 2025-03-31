import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <section>
        <div>
            <h1>Featured <span className='text-primary'>Projects</span></h1>
            <p>Here are some of my projects that showcase my skills and expertise.</p>
            <ProjectCard
                image="/test.webp"
                title="Collaborative Whiteboard"
                description="A real-time whiteboard with chat and room-based collaboration."
                techLogos={["/tech/react-original.svg", "/tech/nodejs-original.svg", "/tech/tailwindcss-original.svg", "/tech/mongodb-original.svg"]}
                link="https://your-project-link.com"
                github="https://github.com"
            />
        </div>
    </section>
  )
}

export default ProjectSection