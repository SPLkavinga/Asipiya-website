
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import NavBar from "./../Components/NabBar";
import Footer from "./../Components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/bro.png";
import img3 from "../assets/rafiki.png";
import img4 from "../assets/Group 201.png";
import img5 from "../assets/amico.png";
import backgroundImg from "../assets/background.png";
import frame from "../assets/Frame 4.png";
import WhyChooseUs from "./../Components/WhyChooseUs";
import LogoRow from "../Components/LogoRow";
import ClientCarousel from "../Components/ClientCarousel";
import Cooperate from "../Components/Cooperate";

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
  };

  const features = [
    {
      title: "Micro Finance",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      icon: "🚀", // Replace this with an actual image if necessary
    },
    {
      title: "Prawning System",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      icon: "🖥️", // Replace this with an actual image if necessary
    },
    {
      title: "Leasing System",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      icon: "📱", // Replace this with an actual image if necessary
    },
    {
      title: "ERP Solutions",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      icon: "📊", // Replace this with an actual image if necessary
    },
    {
      title: "Invoice System",
      description:
        "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
      icon: "📄", // Replace this with an actual image if necessary
    },
  ];

    const reviews = [
      {
        name: "Samantha Payne",
        title: "Graphic Designer",
        rating: "★★★★★",
        review:
          "Your company has been great at keeping me in work, they always line something else up.",
        date: "23 Nov 2021",
      },
      {
        name: "John Doe",
        title: "Software Engineer",
        rating: "★★★★☆",
        review:
          "I appreciate the professionalism and quick support provided by your team. Highly recommended!",
        date: "15 Oct 2022",
      },
      {
        name: "Emily Smith",
        title: "Marketing Specialist",
        rating: "★★★★★",
        review:
          "Fantastic service! The team exceeded my expectations and delivered amazing results.",
        date: "01 Jan 2023",
      },
    ];

  return (
    <>
      <NavBar />

      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-[650px] md:h-screen bg-center bg-cover md:flex-row-reverse  "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

        {/* Main container with mx-[120px] */}
        <div className="mx-[120px] flex flex-col-reverse xl:flex-row items-center">
          {/* Text content on the left side */}
          <div className="z-10 w-full px-4 text-center xl:w-1/2 md:pr-8 xl:text-left">
            {/* Add Framer Motion animations to each line of text */}
            <motion.h2
              className="text-[30px] xl:text-[47.78px] font-semibold text-white"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={textVariants}
            >
              Empowering Lives
            </motion.h2>
            <motion.h2
              className="text-[30px] xl:text-[47.78px] font-semibold text-white"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={textVariants}
            >
              Globally
            </motion.h2>
            <motion.h2
              className="text-[30px] xl:text-[47.78px] font-semibold text-white"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={textVariants}
            >
              With Trusted Microfinance
            </motion.h2>
            <motion.h2
              className="mb-[8px] text-[30px] xl:text-[47.78px] font-semibold text-white"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={textVariants}
            >
              Solutions.
            </motion.h2>
            <motion.p
              className="md:mb-[32px] mb-[16px] text-[14px] md:text-[19.2px] font-normal text-white"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={textVariants}
            >
              Empowering Businesses with Scalable and Flexible Microfinance
              Solutions.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={textVariants}
              className="flex justify-center w-full xl:justify-start"
            >
              <Link
                className="w-[150px] h-[45px] xl:w-[250px] xl:h-[50px] py-2 mb-4 text-[16px] xl:text-[19.2px] font-semibold text-white bg-[#7D00C5] rounded-full flex items-center justify-center"
                to="/About"
              >
                Let's get started
              </Link>
            </motion.div>
          </div>

          {/* Image on the right side */}
          <div className="w-[350px] h-[250px] md:w-[639px] md:h-[404px] flex justify-center md:justify-start mb-4 md:mb-0 z-10 mt-5">
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              animate={{ opacity: 1, x: 0 }} // Slide to its final position
              transition={{ duration: 0.7, ease: "easeOut" }} // Define timing and easing
            >
              <img src={img1} alt="Placeholder" />
            </motion.div>
          </div>
        </div>
      </div>
      <br />

      <div className="mx-[20px] xl:mx-[120px] ">
        <p className="text-[30px] md:text-[39.81px] font-medium text-center mt-[30px] md:mt-[78px]">
          Our <span className="text-purple-600"> Services</span>{" "}
        </p>
        <p className="mt-[4px] text-center text-slate-500 text-[15px] md:text-[16px]">
          At Asipiya Soft Solutions, we specialize in designing scalable
          microfinance solutions that drive your business forward in the digital
          era.
        </p>
        <p className="text-center text-slate-500  text-[15px] md:text-[16px]">
          Partner with us to unlock innovation, boost efficiency, and achieve
          sustainable growth.
        </p>
        <p className="text-center text-slate-500 mb-[16px]  text-[15px] md:text-[16px]">
          Let’s shape the future of your enterprise together.
        </p>
      </div>

      {/*Service section */}
      <motion.div
        className="py-12 bg-[#CFB1D4] bg-opacity-30"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }} 
      >
        <div className="px-[20px] mx-auto xl:mx-[120px]  max-w-7xl sm:px-6 lg:px-8 ">
          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-6 transition rounded-lg hover:bg-purple-50 hover:shadow-sm"
              >
                {/* Icon on the left */}
                <div className="mr-4 text-5xl">{feature.icon}</div>

                {/* Title and Description on the right */}
                <div>
                  <h3 className="mb-2 text-[23.04px] font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Button */}
          <div className="mt-12 text-center">
            <button className="w-[183px] h-[48px] px-6 py-1 text-[16px] font-semibold text-white transition bg-purple-600 rounded-full hover:bg-purple-700">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>

{/* Micro Finance section */}
<div className="mx-[20px] md:mx-[20px] lg:mx-[120px] flex flex-col items-center justify-center  xl:flex-row-reverse mt-[40px] md:mt-[80px]">
  {/* Image Section */}
  <motion.div
    className="w-[250px] h-[150px] md:w-[400px] md:h-[250px] xl:w-[500px] xl:h-[366.59px] mb-4 xl:mb-0  flex justify-center md:justify-start "
    initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
    whileInView={{ opacity: 1, x: 0 }} // Slide in from right when in view
    viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of element is in view
    transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
  >
    <img src={img2} alt="Placeholder" />
  </motion.div>

  {/* Text Section */}
  <motion.div
    className="w-full text-center md:w-1/2 xl:text-left "
    initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
    whileInView={{ opacity: 1, x: 0 }} // Slide in from left when in view
    viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of element is in view
    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} // Smooth transition with a slight delay
  >
    <h2 className="text-[30px] md:text-[39.81px] font-semibold text-purple-600 md:mb-0">
      Revolutionary
    </h2>
    <h2 className="text-[30px] md:text-[39.81px] font-semibold md:mb-2">
      Microfinance Solutions
    </h2>
    <h2 className="mb-4 text-[30px] md:text-[39.81px] font-bold">
      Development
    </h2>
    <p className="text-[15px] md:text-[16px] text-[#525252]">
      Building scalable microfinance solutions, ready-to-launch tools, and{" "}
      <br />
      applications powered by cutting-edge technologies for financial{" "}
      <br />
      empowerment.
    </p>
  </motion.div>
</div>


      {/* Language icon section */}
      <LogoRow />

      {/*<ClientCarousel />*/}
      <ClientCarousel />
    

      <div className="mx-[20px] xl:mx-[120px] mt-24">
        <div className="flex flex-col-reverse items-center justify-center gap-8 p-5 bg-white md:gap-12 xl:flex-row xl:items-start xl:justify-between">
          {/* Left: Review Slider */}
          <div className="relative flex justify-center w-full lg:w-[500px]">
            <Swiper
              navigation={{
                prevEl: '.swiper-button-prev', // Custom prev button selector
                nextEl: '.swiper-button-next', // Custom next button selector
              }}
              modules={[Navigation]}
              className="w-[90%] sm:w-[75%] md:w-[80%]"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 rounded-lg bg-slate-50 md:p-6">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.title}</p>
                    <div className="flex items-center mt-2 mb-4">
                      <span className="text-sm text-yellow-400 sm:text-base">
                        {review.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 sm:text-base">
                      {review.review}
                    </p>
                    <p className="mt-4 text-xs text-gray-400">{review.date}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="absolute text-2xl text-purple-600 transform -translate-y-1/2 cursor-pointer swiper-button-prev left-2 top-1/2">
              <FaArrowLeft /> {/* Left arrow icon */}
            </div>
            <div className="absolute text-2xl text-purple-600 transform -translate-y-1/2 cursor-pointer swiper-button-next right-2 top-1/2">
              <FaArrowRight /> {/* Right arrow icon */}
            </div>
          </div>

          {/* Right: Title and Description */}
          <div className="w-full text-center md:w-full lg:w-1/2 xl:text-left">
            <h2 className="text-xl sm:text-2xl md:text-[39.81px] font-semibold">
              <span className="text-purple-600">Client’s</span> Reviews
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-[#525252]">
              Our clients trust us for delivering reliable, innovative microfinance solutions that drive growth and success across industries worldwide.
            </p>
          </div>
        </div>
      </div>





      {/* Countries Serve Section */}
      <div className="mx-[20px] xl:mx-[120px]">
      <motion.div className="flex flex-col items-center justify-center p-9 gap-8   md:gap-12 xl:flex-row xl:items-start xl:justify-between mt-[80px] md:mt-[80px] xl:mt-[120px]">
        {/* Image Section */}
        <motion.div
          className="w-[250px] h-[150px] md:h-[350px] md:w-[590px] flex justify-center xl:justify-start"
          initial={{ x: -100 }} // Start position off-screen to the left
          whileInView={{ x: 0 }} // Move to its final position (normal flow)
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth movement animation
          viewport={{ once: true }} // Trigger animation only once
        >
          <img className="object-contain" src={img3} alt="Countries We Serve" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full text-center md:w-full lg:w-1/2 lg:pl-8 xl:text-left"
          initial={{ x: 100 }} 
          whileInView={{ x: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          viewport={{ once: true }} 
        >
          <h2 className="text-xl sm:text-2xl md:text-[39.81px] font-bold ">
            <span className="text-purple-600">Countries </span>We Serve
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg  xl:mx-[0px] mx-[20px] text-[#525252]">
            We offer innovative microfinance solutions in Dubai, the United
            States, Canada, Singapore, Sri Lanka, and Australia, empowering
            businesses and communities with reliable financial support.
          </p>
          <div className="flex justify-center xl:justify-start">
            <img className="h-10 mt-6" src={img4} alt="Countries we serve" />
          </div>
        </motion.div>
      </motion.div>
      </div>

      <Cooperate />

      <Footer />
    </>
  );
}

export default Home;
