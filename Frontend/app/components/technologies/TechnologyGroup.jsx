"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TechnologyGroup = ({ category, technologies }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl text-center">
      <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((url, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-xl p-3 shadow-md"
            whileHover={{ scale: 1.1, rotateZ: 360 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              src={url}
              alt="Technology Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGroup;
