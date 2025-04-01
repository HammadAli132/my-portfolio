"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ image, title, description, techLogos, link, github }) {
  return (
    <CardContainer className="inter-var items-stretch h-full">
      <CardBody className="bg-transparent flex flex-col relative group/card flex-grow border-white/[0.1] w-auto h-auto rounded-xl p-6 border">

        {/* Project Image */}
        <CardItem translateZ="100" className="w-full mb-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        {/* Project Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-primary"
        >
          {title}
        </CardItem>

        {/* Project Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-white mb-6"
        >
          {description}
        </CardItem>

        {/* Bottom Row: Tech Logos & Links */}
        <div className="flex justify-between items-center gap-6 mt-auto">
          {/* Technology Logos */}
          <div className="flex flex-wrap gap-2">
            {techLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Tech Logo" width={30} height={30} />
            ))}
          </div>

          {/* View Project & GitHub Links */}
          <div className="flex md:flex-row flex-col-reverse gap-2">
            {github && (
              <CardItem
                translateZ={20}
                as={Link}
                href={github}
                target="_blank"
                className="px-4 py-2 flex items-center gap-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold"
              >
                GitHub <FaGithub size={14} />
              </CardItem>
            )}
            {link && (
              <CardItem
                translateZ={20}
                as={Link}
                href={link}
                target="_blank"
                className="px-4 py-2 flex items-center gap-2 rounded-xl bg-secondary hover:bg-tertiary text-white text-xs font-bold"
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