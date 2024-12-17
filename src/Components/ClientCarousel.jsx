import React from "react";
import { motion } from "framer-motion";

// Import your images
import logo1 from "../assets/ClientLogo/ClientLogo1.jpg";
import logo2 from "../assets/ClientLogo/ClientLogo2.jpg";
import logo3 from "../assets/ClientLogo/ClientLogo3.jpg";
import logo4 from "../assets/ClientLogo/ClientLogo4.jpg";
import logo5 from "../assets/ClientLogo/ClientLogo5.jpg";
import logo6 from "../assets/ClientLogo/ClientLogo6.jpg";
import logo7 from "../assets/ClientLogo/ClientLogo1.jpg";
import logo8 from "../assets/ClientLogo/ClientLogo1.jpg";
import logo9 from "../assets/ClientLogo/ClientLogo1.jpg";
import logo10 from "../assets/ClientLogo/ClientLogo1.jpg";
import logo11 from "../assets/ClientLogo/ClientLogo1.jpg";
import logo12 from "../assets/ClientLogo/ClientLogo1.jpg";

// Array of logos
const logos = [logo1, logo2, logo3, logo4, logo5, logo6 , logo7, logo8, logo9, logo10, logo11, logo12];

function ClientCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#CFB1D4] via-[#FAEBFF] to-[#CFB1D4] py-10 mt-8 xl:mt-36">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        {/* Duplicate logos 3 times to avoid gaps */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-4 shrink-0">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-10 md:h-14 xl:h-28 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ClientCarousel;
