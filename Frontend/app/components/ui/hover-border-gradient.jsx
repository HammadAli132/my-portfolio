"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(198, 93%, 60%) 0%, rgba(56, 189, 248, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(198, 93%, 60%) 0%, rgba(56, 189, 248, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(198, 93%, 60%) 0%, rgba(56, 189, 248, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, hsl(198, 93%, 60%) 0%, rgba(56, 189, 248, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, hsl(198, 93%, 60%) 0%, rgba(56, 189, 248, 0.7) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <div className="relative inline-block">
      {/* Glowing Border (Neon Effect) */}
      <motion.div
        className="absolute inset-0 rounded-md"
        style={{
          background: "hsl(198, 93%, 60%)",
          filter: "blur(8px)",
          opacity: hovered ? 0.6 : 0.3,
          zIndex: 0,
          margin: "2px", // Expands beyond container
        }}
        animate={{
          opacity: hovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />

      <Tag
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex rounded-md items-center justify-center overflow-visible p-px w-full",
          containerClassName
        )}
        {...props}
      >
        {/* Animated Gradient Border */}
        <motion.div
          className="absolute inset-0 rounded-md"
          style={{
            background: movingMap[direction],
            filter: "blur(4px)",
            zIndex: 1,
          }}
          animate={{
            background: hovered
              ? [movingMap[direction], highlight]
              : movingMap[direction],
          }}
          transition={{ ease: "linear", duration: duration ?? 1 }}
        />

        {/* Solid Background (Hides center of gradient) */}
        <div className="bg-gray-900 absolute z-10 inset-[1px] rounded-md" />

        {/* Content */}
        <div
          className={cn(
            "relative z-20 bg-gray-900 px-4 py-2 rounded-md text-white",
            className
          )}
        >
          {children}
        </div>
      </Tag>
    </div>
  );
}