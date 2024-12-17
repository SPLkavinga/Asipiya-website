import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import logo1 from "../assets/bg2.png"; // Replace with actual paths
import logo2 from "../assets/bg2.png";
import logo3 from "../assets/bg2.png";
import logo4 from "../assets/bg2.png";
import logo5 from "../assets/bg2.png";
import logo6 from "../assets/bg2.png";

function ClientCarousel() {
  const clients = [
    { id: 1, logo: logo1, alt: "Client 1" },
    { id: 2, logo: logo2, alt: "Client 2" },
    { id: 3, logo: logo3, alt: "Client 3" },
    { id: 4, logo: logo4, alt: "Client 4" },
    { id: 5, logo: logo5, alt: "Client 5" },
    { id: 6, logo: logo6, alt: "Client 6" },
  ];

  return (
    <motion.div
      className="h-[160px] xl:h-[206px] bg-gradient-to-r from-[#CFB1D4] via-[#FAEBFF] to-[#CFB1D4] mt-[120px]"
      initial={{ opacity: 0 }} // Start hidden
      whileInView={{ opacity: 1 }} // Animate to visible when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of section is visible
      transition={{ duration: 0.7, ease: "easeOut" }} // Smooth fade-in transition
    >
      {/* Heading */}
      <h2 className="text-[33.18px] font-medium text-center text-gray-800 mb-[16px]">
        Our Clients
      </h2>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={5} // Show 5 images at a time
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 }, // 2 slides on smaller screens
            768: { slidesPerView: 3 }, // 3 slides on medium screens
            1024: { slidesPerView: 5 }, // 5 slides on large screens
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={client.id} className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0 }} // Start with opacity 0
                whileInView={{ opacity: 1 }} // Fade in when slide is in view
                viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% of the slide is visible
                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="w-16 h-16 xl:w-24 xl:h-24 mx-auto"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination */}
      <div className="mt-6 swiper-pagination text-center"></div>
    </motion.div>
  );
}

export default ClientCarousel;
