// src/components/ArtThread.jsx (VERSIÓN FINAL)
import React from "react";
import { motion, useTransform } from "framer-motion";

export function ArtThread({ scrollYProgress }) {
  const strokeColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#e56b6f", "#809bce", "#3a4a6b"]
  );

  return (
    <svg
      width="400"
      height="2800"
      viewBox="0 0 400 2800"
      className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
    >
      <motion.path
        d="M 200,0 C 200,200 400,200 300,400 S 100,600 200,800 S 400,1000 300,1200 S 100,1400 200,1600 S 400,1800 300,2000 S 100,2200 200,2400 S 300,2600 200,2800"
        fill="none"
        strokeWidth="3"
        style={{
          pathLength: scrollYProgress,
          stroke: strokeColor,
        }}
        strokeLinecap="round"
      />
    </svg>
  );
}