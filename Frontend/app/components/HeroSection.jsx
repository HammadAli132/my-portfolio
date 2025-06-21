"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function HeroSection() {
  const handleDownload = async () => {
    try {
      // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my-resumes?populate=*`;
      
      // const response = await fetch(url);
  
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
  
      // const { data } = await response.json();
      
      // // Check if data exists and has at least one item with Resume
      // if (!data || !data.length || !data[0].Resume) {
      //   throw new Error("No resume data found");
      // }
  
      // const resume = data[0].Resume;
      // const pdfUrl = process.env.NEXT_PUBLIC_DEV_MODE === "true" ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${resume.url}` : `${resume.url}`;
      const pdfUrl = "/data/My_Resume.pdf";
      
      // Fetch the PDF file
      const pdfResponse = await fetch(pdfUrl);
      
      if (!pdfResponse.ok) {
        throw new Error("Failed to fetch PDF file");
      }
  
      const blob = await pdfResponse.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create download link
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "HammadAliResume.pdf"; // Use filename from API or fallback
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
      
    } catch (error) {
      console.error("Download failed:", error);
      alert(`Failed to download resume: ${error.message}`);
    }
  };
  

  return (
    <section id="about" className="px-4 py-20 bg-gradient-to-b from-[#111827] to-[#1d2735] relative">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:max-w-4/6 mx-auto"
      >
        {/* Left part: Title, brief intro, CTA Buttons */}
        <div className="text-center md:w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Elevate Your Ideas with 
            <span className="text-primary">
              <Typewriter
                words={[
                  " Software Engineer",
                  " Full-Stack Developer",
                  " Problem Solver",
                  " Innovator",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Hi, I'm <span className="font-semibold">Hammad Ali</span>, a passionate Software Engineer dedicated to building efficient, scalable, and innovative solutions.
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center">
            <a
              href="#projects"
              className="py-3 px-5 bg-secondary rounded-md hover:bg-tertiary transition text-white text-lg font-semibold"
            >
              View My Craft
            </a>
            <a
              href="#contact"
              className="py-3 px-5 border border-white bg-[#111827] rounded-md hover:bg-gray-800 transition text-white text-lg font-semibold"
            >
              Get In Touch
            </a>
            <HoverBorderGradient
              containerClassName="rounded-md"
              as="button"
              onClick={handleDownload}
              className="flex items-center space-x-2 px-5 py-3 text-lg font-semibold cursor-pointer"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </HoverBorderGradient>
          </div>
        </div>

        {/* Right part: Optimized Image */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] relative flex justify-center rounded-full shadow-lg overflow-hidden"
        >
          <Image
            src="/profile.jpeg"
            alt="Profile image of Hammad Ali"
            fill // This makes the image fill its container
            style={{ objectFit: "cover" }} // Optional: adjust how the image fills the container
            priority
          />
        </motion.div> */}
      </motion.div>
    </section>
  );
}

export default HeroSection;
