import React from "react";
import { motion } from "framer-motion";
import frame from "../assets/Frame 4.png"; // Replace with your image path

function LogoRow() {
  // Number of icons to display (duplicated for seamless animation)
  const logos = Array(10).fill(frame); // Adjust the count based on your need

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        className="flex "
        animate={{ x: ["0%", "-100%"] }} // Moves left continuously
        transition={{
          repeat: Infinity, // Repeat infinitely
          duration: 15, // Adjust duration for speed
          ease: "linear", // Smooth animation
        }}
      >
        {/* Duplicating the list for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="w-[1000px] md:w-auto h-[60px] md:h-[114px] " // Adjust height as needed
          />
        ))}
      </motion.div>
    </div>
  );
}

export default LogoRow;
