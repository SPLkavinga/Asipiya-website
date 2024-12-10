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

  return (
    <>
      <NavBar />

      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-auto bg-center bg-cover md:flex-row-reverse md:h-screen"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

        {/* Image on the right side */}
        <div className="w-full md:w-[639px] md:h-[404px] flex justify-center md:justify-start mb-4 md:mb-0 z-10 mt-5 md:ml-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Slide to its final position
            transition={{ duration: 0.7, ease: "easeOut" }} // Define timing and easing
          >
            <img src={img1} alt="Placeholder" />
          </motion.div>
        </div>

        {/* Text content on the left side */}
        <div className="z-10 w-full px-4 text-center md:w-1/2 md:pr-8 md:text-left md:px-[120px]">
          {/* Add Framer Motion animations to each line of text */}
          <motion.h2
            className="text-[47.78px] font-semibold text-white"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            Empowering Lives
          </motion.h2>
          <motion.h2
            className="text-[47.78px] font-semibold text-white"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Globally
          </motion.h2>
          <motion.h2
            className="text-[47.78px] font-semibold text-white"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={textVariants}
          >
            With Trusted Microfinance
          </motion.h2>
          <motion.h2
            className="mb-[8px] text-[47.78px] font-semibold text-white"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={textVariants}
          >
            Solutions.
          </motion.h2>
          <motion.p
            className="mb-[32px] text-[19.2px] font-normal text-white"
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
          >
            <Link
              className="w-[250px] h-[50px] py-2 text-[19.2px] font-semibold text-white bg-[#7D00C5] rounded-full flex items-center justify-center"
              to="/About"
            >
              Let's get started
            </Link>
          </motion.div>
        </div>
      </div>
      <br />

      <div>
        <p className="text-[39.81px] font-medium text-center mt-[78px]">
          Our <span className="text-purple-600"> Services</span>{" "}
        </p>
        <p className="mt-[4px] text-center text-slate-500 text-[16px]">
          At Asipiya Soft Solutions, we specialize in designing scalable
          microfinance solutions that drive your business forward in the digital
          era.
        </p>
        <p className="text-center text-slate-500 text-[16px]">
          Partner with us to unlock innovation, boost efficiency, and achieve
          sustainable growth.
        </p>
        <p className="text-center text-slate-500 mb-[16px] text-[16px]">
          Let’s shape the future of your enterprise together.
        </p>
      </div>

      {/*Service section */}
      <motion.div
        className="py-12 bg-[#CFB1D4] bg-opacity-30"
        initial={{ opacity: 0 }} // Start with opacity 0
        whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view
        viewport={{ once: true }} // Ensure animation triggers only once
        transition={{ duration: 2 }} // Smooth transition
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            whileInView={{ opacity: 1, x: 0 }} // Slide to its final position when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the element is in view
            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 flex items-center transition rounded-lg hover:bg-purple-50 hover:shadow-sm"
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
      <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10 mt-[80px]">
        {/* Image Section */}
        <motion.div
          className="w-[350px] h-[350px] md:w-[590px] md:h-[366.59px] mb-4 md:mb-0 flex justify-center md:justify-start md:mr-32"
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Slide in from right when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of element is in view
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
        >
          <img className="md:mr-52" src={img2} alt="Placeholder" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full ml-[120px] text-center md:w-1/2 md:text-left"
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          whileInView={{ opacity: 1, x: 0 }} // Slide in from left when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of element is in view
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} // Smooth transition with a slight delay
        >
          <h2 className="text-[39.81px] font-semibold text-purple-600 md:mb-0">
            Revolutionary
          </h2>
          <h2 className="text-[39.81px] font-semibold md:mb-2">
            Microfinance Solutions
          </h2>
          <h2 className="mb-4 text-4xl font-bold">Development</h2>
          <p className="text-[16px] text-[#525252]">
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

      <ClientCarousel />

      {/* Clients Review Section*/}
      <div className="flex flex-col items-center justify-between p-6 bg-white md:flex-row md:p-14 ">
        {/* Left: Review Card */}
        <div className="flex justify-center w-full md:w-1/2 md:justify-start md:ml-[120px]">
          <div className="p-6 bg-white shadow-lg rounded-lg w-[90%] md:w-[75%]">
            <h3 className="text-lg font-semibold">Samantha Payne</h3>
            <p className="text-sm text-gray-500">Graphic Designer</p>
            <div className="flex items-center mt-2 mb-4">
              {/* Star Ratings */}
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-sm text-gray-700">
              Your company has been great at keeping me in work, they always
              line something else up.
            </p>
            <p className="mt-4 text-xs text-gray-400">23 Nov 2021</p>
          </div>
        </div>

        {/* Right: Title and Description */}
        <div className="w-full mt-8 text-center md:w-1/2 md:text-left md:mt-0 md:m-20">
          <h2 className="text-[39.81px] font-semibold">
            <span className="text-purple-600 ">Client’s</span> Reviews
          </h2>
          <p className="mt-[4px] text-[16px] text-[#525252]">
            Our clients trust us for delivering reliable, innovative
            microfinance solutions that drive growth and success across
            industries worldwide.
          </p>
        </div>
      </div>

      {/* Countries serve section */}
      <motion.div className="flex flex-col items-center justify-center p-4 md:flex-row mt-[120px]">
        {/* Image Section */}
        <motion.div
          className="w-[350px] h-[350px] md:w-[590px] mb-4 md:mb-0 flex justify-center md:justify-start"
          initial={{ x: -100 }} // Start position off-screen to the left
          whileInView={{ x: 0 }} // Move to its final position (normal flow)
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth movement animation
          viewport={{ once: true }} // Trigger animation only once
        >
          <img className="md:ml-[120px] ml-0" src={img3} alt="Placeholder" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-14 md:m-10"
          initial={{ x: 100 }} // Start position off-screen to the right
          whileInView={{ x: 0 }} // Move to its final position (normal flow)
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth movement animation
          viewport={{ once: true }} // Trigger animation only once
        >
          <h2 className="text-4xl font-bold">
            <span className="text-purple-600">Countries </span>We Serve
          </h2>
          <p className="mt-4 text-base">
            We offer innovative microfinance solutions in Dubai, the United
            States, Canada, Singapore, Sri Lanka, and Australia, empowering
            businesses and communities with reliable financial support.
          </p>
          <img className="h-10 mt-6" src={img4} alt="Countries we serve" />
        </motion.div>
      </motion.div>

      <Cooperate/>

      
      <Footer />
    </>
  );
}

export default Home;
