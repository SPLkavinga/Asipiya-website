import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSchool,
  FaUsers,
  FaCalendarAlt,
  FaRegClock,
  FaTimes,
} from "react-icons/fa";
import CountUp from "react-countup";
import { Slide } from "react-awesome-reveal";
import Countdown from "react-countdown";
import backgroundImg from "../assets/bg2.png";
import vission from "../assets/vission.png";
import mission from "../assets/mission.png";
import value from "../assets/value.png";
import designImage from "../assets/design.png";
import developmentImage from "../assets/develop.png";
import testingImage from "../assets/test.png";
import img5 from "../assets/choose2.png";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NabBar";
import WhyChooseUs from "./../Components/WhyChooseUs";
import Leadership from "./../Components/Leadership";
import Cooperate from "../Components/Cooperate";
import logo from "../assets/logo.png"; // Make sure to add your logo path here

function AboutUs() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay of 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
  };

  // Loading screen
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <img src={logo} alt="Loading..." className="w-[200px] h-auto animate-bounce" />
      </div>
    );
  }

  // Main page content after loading
  return (
    <>
      <NavBar />
      {/* Full-screen background section */}
      <div
        className="relative flex items-center justify-start w-full h-auto bg-center bg-cover md:h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>
        <div className="z-10 w-full py-8 text-center xl:text-left md:w-full md:px-4 xl:mx-[120px] mx-[20px]">
          <p className="mb-[16px] text-sm text-white md:text-[19.2px]">
            About US
          </p>
          <h2 className="text-4xl font-semibold text-white md:text-[47.78px] mb-2">
            Design & Develop For
          </h2>
          <h2 className="text-4xl font-semibold text-white md:text-[47.78px] mb-[8px]">
            Better Solution
          </h2>
          <p className="mb-8 text-white md:text-[16px] font-normal leading-normal tracking-wide w-full md:w-full xl:w-[692px]">
            Welcome to Asipiya Soft Solutions PVT Ltd, your gateway to
            comprehensive and cutting-edge software solutions tailored for
            businesses of all sizes. At Asipiya Soft Solutions, we pride
            ourselves on being your trusted partner in navigating the digital
            landscape, offering a range of services designed to enhance and
            streamline your business operations.
          </p>
        </div>
      </div>

      {/* Count Row Section (White) */}
      <section className="container px-6 py-10 mx-auto mt-10 text-black bg-gradient-to-r from-purple-400 via-purple-100 to-purple-400 ">
        <Slide direction="up" triggerOnce>
          <div className="grid grid-cols-1 gap-6 text-center xl:grid-cols-4 xl:gap-8 xl:px-40">
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={15} duration={2} />+
              </p>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={99} duration={2} />%
              </p>
              <p className="text-sm">Satisfied Clients</p>
            </div>
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={7} duration={2} />+
              </p>
              <p className="text-sm">Expert Team Member</p>
            </div>
            <div className="p-2">
              <p className="text-[60px] text-[#7D00C5] font-bold">
                <CountUp end={7} duration={2} />
                K+
              </p>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </Slide>
      </section>

      {/* Mission Vision Section */}
      <section className="container py-10 mt-5 md:mt-20 ">
        <div className="flex flex-col items-center justify-center gap-6 xl:flex-row md:gap-8 mx-[20px] xl:mx-[120px]">
          {/* Vision */}
          <div className="w-[350px] text-center">
            <div className="flex items-center justify-center">
              <img className="w-[183px] h-[177px]" src={vission} alt="Vision" />
            </div>
            <p className="mt-4 text-[39.81px] text-[#333333] font-semibold">
              Our Vision
            </p>
            <p className="mt-2 text-[16px] text-[#525252] text-opacity-80">
              Pioneering transformative software solutions <br /> for business success
              in a tech-driven future.
            </p>
          </div>

          {/* Mission */}
          <div className="w-[350px] text-center">
            <div className="flex items-center justify-center">
              <img
                className="w-[183px] h-[177px]"
                src={mission}
                alt="Mission"
              />
            </div>
            <p className="mt-4 text-[39.81px] text-[#333333] font-semibold">
              Our Mission
            </p>
            <p className="mt-2 text-[16px] text-[#525252] text-opacity-80">
              Empowering businesses through innovative software solutions,
              seamlessly integrating technology for operational efficiency and
              sustainable success.
            </p>
          </div>

          {/* Values */}
          <div className="w-[350px] text-center">
            <div className="flex items-center justify-center">
              <img className="w-[183px] h-[177px]" src={value} alt="Values" />
            </div>
            <p className="mt-4 text-[39.81px] text-[#333333]  font-semibold">
              Our Values
            </p>
            <p className="mt-2 text-[16px] text-[#525252] text-opacity-80">
              Empowering businesses through innovative software solutions,
              seamlessly integrating technology for operational efficiency and
              sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Why ChooseUs Section */}
      <div className="mt-6 md:mt-16">
        <WhyChooseUs />
      </div>
      {/* Design, Development, testing Section */}
      <div className="w-full bg-white mt-[120px]">
        <div className="w-full ">
          {/* Design Section */}
          <div className="flex items-center justify-center  px-6 py-4 w-full h-full Xl:w-full xl:h-[163px] space-x-6 bg-gradient-to-r from-pink-200 via-purple-100 to-pink-200">
            <div className="flex-shrink-0 ">
              <img
                src={designImage}
                alt="Design"
                className="object-cover w-16 h-16 rounded-lg sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[81px] lg:h-[81px]"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-[23.04px] font-medium text-black">Design</h2>
              <p className="mt-[8px] w-[200px] xl:w-[385px] text-[13.33px]  text-[#525252]">
                Fuse creativity and function to shape ideas into captivating,
                user-centric design blueprints, laying the groundwork for an
                exciting development journey.
              </p>
            </div>
          </div>

          {/* Development Section */}
          <div className="flex items-center justify-center py-4 w-full h-full Xl:w-full xl:h-[163px] space-x-6 bg-white">
            <div className="flex-shrink-0">
              <img
                src={developmentImage}
                alt="Development"
                className="object-cover w-16 h-16 rounded-lg sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[81px] lg:h-[81px]"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-[23.04px] font-medium text-black">
                Development
              </h2>
              <p className="mt-[8px]  w-[200px] xl:w-[385px] text-[13.33px]  text-[#525252]">
                Our skilled developers bring designs to life with cutting-edge
                tech, crafting scalable, robust products using agile methods and
                rigorous testing.
              </p>
            </div>
          </div>

          {/* Testing & QA Section */}
          <div className="flex items-center justify-center w-full h-full Xl:w-full xl:h-[163px] px-6 py-4 space-x-6 bg-gradient-to-r from-pink-200 via-purple-100 to-pink-200">
            <div className="flex-shrink-0">
              <img
                src={testingImage}
                alt="Testing & QA"
                className="object-cover w-16 h-16 rounded-lg sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[81px] lg:h-[81px]"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-[23.04px] font-medium text-black">
                Testing & QA
              </h2>
              <p className="mt-[8px]   w-[200px] xl:w-[385px] text-[13.33px]  text-[#525252]">
                We meticulously test every aspect, from unit tests to user
                acceptance, ensuring flawless functionality and delivering a
                product that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <Leadership />

      {/* Cooperate Section */}
      <Cooperate />

      <Footer />
    </>
  );
}

export default AboutUs;
