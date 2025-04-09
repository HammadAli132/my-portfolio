"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useProjects } from "../contexts/ProjectContext";
import ProjectCard from "../components/projects/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const CustomDropdown = dynamic(() => import("../components/CustomDropdown"), {
  ssr: false,
});

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

function ProjectPage() {
  const { projects, categories } = useProjects();
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        selectedCategory === "All" ||
        project?.project_categories?.some(
          (cat) => cat.Category === selectedCategory
        );

      const matchSearch =
        project?.Title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project?.Description?.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [projects, selectedCategory, searchTerm]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchTerm(inputValue);
      if (inputValue.trim() !== "") {
        setLoading(true);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    if (filteredProjects.length > 0) {
      setLoading(false);
    }

    return () => clearTimeout(timer);
  }, [filteredProjects]);

  const categoriesList = ["All", ...categories.map((cat) => cat.Category)];

  return (
    <section className="px-4 py-20 relative">
      <div className="flex flex-col gap-12 lg:max-w-4/6 mx-auto">
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Category Dropdown using Headless UI */}
          <div className="w-full sm:w-1/3">
          <CustomDropdown
            options={categoriesList}
            selected={selectedCategory}
            setSelected={(value) => {
              setSelectedCategory(value);
              setLoading(true);
            }}
            placeholder="Select category"
          />
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search projects..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setLoading(true);
            }}
            className="border border-white/[0.1] p-2 rounded-md w-full sm:w-1/3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 w-full">
          <AnimatePresence>
            {loading ? (
              <motion.div
                key="loading"
                className="text-center col-span-full flex flex-col items-center gap-2 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div
                  className="w-16 h-16 border-4 border-dashed border-primary rounded-full"
                  style={{
                    animation: "spin 3s linear infinite",
                  }}
                ></div>
                <p className="mt-2 text-sm text-gray-500">Loading projects...</p>
              </motion.div>
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project) => {
                const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                const isDevMode = process.env.NEXT_PUBLIC_DEV_MODE === "true";

                const imageUrl = project.ProjectImage?.url
                  ? isDevMode && backendUrl
                    ? `${backendUrl}${project.ProjectImage.url}`
                    : project.ProjectImage.url
                  : "/test.webp";

                const techLogos =
                  project.TechStackLogos?.map((tech) => {
                    let techUrl = tech.url ? tech.url : "/default-logo.jpg";
                    if (isDevMode && backendUrl) {
                      techUrl = `${backendUrl}${techUrl}`;
                    }
                    return techUrl;
                  }) || [];

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard
                      image={imageUrl}
                      title={project.Title}
                      description={project.Description}
                      techLogos={techLogos}
                      link={project.LiveURL}
                      github={project.GithubURL}
                      isFeatured={project.isFeatured}
                    />
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                key="no-results"
                className="text-center col-span-full text-gray-500 flex flex-col items-center gap-2 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Lottie
                  animationData={require("../../public/emptyBox.json")}
                  loop
                  autoplay
                  style={{ height: "200px", width: "200px" }}
                />
                <p className="text-lg font-semibold">No matching projects found.</p>
                <p className="text-sm">Try a different category or search term.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;