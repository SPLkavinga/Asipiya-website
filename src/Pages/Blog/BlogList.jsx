import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchBlogs } from "./contentful";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/background.png";
import NavBar from "../../Components/NabBar";
import Footer from "../../Components/Footer";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
  };

  return (
    <div>
      <NavBar />

      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-[650px] md:h-screen bg-center bg-cover md:flex-row-reverse  "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

        <div className="z-10 w-full px-6 py-8 text-center md:w-2/3 md:px-20">
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Exploring the Spectrum
          </motion.h2>

          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            of Knowledge
          </motion.h2>

          <motion.p
            className="mt-4 text-sm text-white md:text-lg"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Engage with the extraordinary as we delve into a world where
            imagination knows no limits.
          </motion.p>
        </div>
      </div>
      <div className="mx-[20px] xl:mx-[120px] ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8 w-full xl:w-[1000px] h-full">
    {blogs.map((blog) => (
      <Link
        to={`/blog/${blog.slug}`}
        key={blog.id}
        className="border rounded-lg hover:shadow-lg transition flex flex-col h-full"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold p-4 flex-grow">{blog.title}</h2> {/* The title will expand with flex-grow */}
        
        <div className="flex items-center mb-4 p-4 mt-auto"> {/* mt-auto ensures it stays at the bottom */}
          <img
            src={blog.profileimage}
            className="w-[30px] h-[30px] object-cover rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-[14px] font-medium">{blog.contentwriter}</h2>
            <h2 className="text-[13px] text-gray-500">{blog.date}</h2>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

      <Footer/>
    </div>
    
  );
};

export default BlogList;
