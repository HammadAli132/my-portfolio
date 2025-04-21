"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import CustomSlider from "../CustomSlider";

function ProjectCard({ images, title, description, techLogos, link, github, isFeatured }) {
  return (
    <CardContainer className="inter-var items-stretch h-full w-full max-w-[500px] ">
      <CardBody className="bg-transparent flex flex-col relative group/card flex-grow border-white/[0.1] w-full h-auto rounded-xl p-6 border">

        {/* Project Image Container with Featured Tag */}
        <div className="relative w-auto mb-4">
          {isFeatured && (
            <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Featured
            </span>
          )}
          <CardItem translateZ="100">
            <CustomSlider images={images} />
          </CardItem>
        </div>

        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-primary"
        >
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-white mb-6"
        >
          {description}
        </CardItem>

        {/* Bottom Row */}
        <div className="flex justify-between items-center gap-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {techLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Tech Logo" width={30} height={30} />
            ))}
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-2">
            {github && (
              <CardItem
                translateZ={200}
                as={Link}
                href={github}
                target="_blank"
                className="px-4 py-2 flex items-center gap-2 rounded-xl bg-gray-700 hover:bg-gray-600 cursor-pointer text-white text-xs font-bold"
              >
                GitHub <FaGithub size={14} />
              </CardItem>
            )}
            {link && (
              <CardItem
                translateZ={200}
                as={Link}
                href={link}
                target="_blank"
                className="px-4 py-2 flex items-center gap-2 rounded-xl bg-secondary hover:bg-tertiary cursor-pointer text-white text-xs font-bold"
              >
                View <FaExternalLinkAlt size={14} />
              </CardItem>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ProjectCard;