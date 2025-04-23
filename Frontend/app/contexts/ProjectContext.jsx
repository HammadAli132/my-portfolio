"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

      //   const [projectsRes, categoriesRes] = await Promise.all([
      //     fetch(`${backendUrl}/api/projects?populate=*`),
      //     fetch(`${backendUrl}/api/categories`)
      //   ]);

      //   const projectsData = await projectsRes.json();
      //   const categoriesData = await categoriesRes.json();

      //   setProjects(projectsData.data || []);
      //   setCategories(categoriesData.data || []);
      // } catch (err) {
      //   console.error("Context fetch error:", err);
      // }
      try {
        const [projectsRes, categoriesRes] = await Promise.all([
          fetch("/data/projects.json"),
          fetch("/data/categories.json")
        ]);

        const projectsData = await projectsRes.json();
        const categoriesData = await categoriesRes.json();

        setProjects(projectsData.data || []);
        setCategories(categoriesData.data || []);
      } catch (err) {
        console.error("Context fetch error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, categories }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
