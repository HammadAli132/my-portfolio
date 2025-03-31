"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-[#111827] to-[#1d2735] relative">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:max-w-4/6 mx-auto"
      >
        {/* Left part: Title, brief intro, CTA Buttons */}
        <div className="text-center md:text-left md:w-1/2">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Elevate Your Ideas with <br />
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
          {/* Brief intro */}
          <p className="mt-4 text-gray-300 text-lg">
            Hi, I'm <span className="font-semibold">Hammad Ali</span>, a
            passionate Software Engineer dedicated to building efficient,
            scalable, and innovative solutions. I love solving complex problems,
            optimizing performance, and turning ideas into reality through code.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
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
          </div>
        </div>

        {/* Right part: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/profile.png"
            alt="Hammad Ali - Software Engineer"
            width={350}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
