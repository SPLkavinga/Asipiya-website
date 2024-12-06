import React from "react";
import { Link } from "react-router-dom";
import NavBar from './../Components/NabBar';
import backgroundImg from '../assets/serviceback.png';
import Cooperate from './../Components/Cooperate';
import Footer from './../Components/Footer';

const services = [
  {
    id: "erp",
    title: "ERP Systems",
    icon: "📋",
    link: "/ERP",
    description: "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "pos",
    title: "Prawing Systems",
    icon: "💳",
    link: "/Prawing",
    description: "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "micro-finance",
    title: "Micro Finance",
    icon: "🚀",
    link: "/Microfinance",
    description: "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "gold-loan",
    title: "Gold Loan System",
    icon: "💰",
    link: "/Prawing",
    description: "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "leasing",
    title: "Leasing System",
    icon: "🏠",
    link: "/Leasing",
    description: "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "Estate",
    title: "Real Estate",
    icon: "🛡️",
    link: "/service/insurance",
    description: "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: "📢",
    link: "/service/crm",
    description:
      "Enhance your brand's visibility with our comprehensive social media marketing strategies, tailored to engage and grow your audience effectively.",
  },
  {
    id: "printing",
    title: "Aipiya Printing",
    icon: "🖨️",
    link: "/service/inventory",
    description:
      "Deliver exceptional quality with our state-of-the-art printing solutions, perfect for all your personal and professional needs.",
  },
];
function Services() {
  return (
    <>
      <NavBar />

      {/* Background Section */}
      <div
        className="relative flex items-center justify-start w-full h-auto bg-center bg-cover md:h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

        <div className="z-10 w-full px-6 py-8 text-left md:w-2/3 md:px-20 md:mt-[-50px] ml-[120px]">
          <p className="mb-3 text-sm text-white md:text-[19.2px]">Services</p>
          <h2 className="text-4xl font-semibold text-white md:text-[47.78px] mb-2">
            Our Services
          </h2>
          <h2 className="text-4xl font-semibold text-white md:text-[47.78px] mb-[8px]">
            and Expertise
          </h2>
          <p className="mb-8 font-normal text-white md:text-[16px] leading-normal tracking-wide w-[488px]">
            At Asipiya Soft Solutions, we empower your business for success in
            the digital age. Join us on an innovative journey towards efficiency
            and thrive together in shaping your future.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container px-16 mx-auto ">
        <h1 className="mt-10 mb-[8px] text-[39.81px] font-medium text-center text-black">
          Services We're <span className="text-purple-800">Offer</span>
        </h1>
        <div className="grid justify-center grid-cols-1 gap-4 mb-4 md:ml-20 p-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="block w-[387px] h-[387px] p-6  bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="mb-4 text-[100px] text-center ">{service.icon}</div>
              <h2 className="mb-2 text-[23.04px] font-semibold">{service.title}</h2>
              <p className="text-gray-600 text-[16px] line-clamp-4">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Components */}
      <Cooperate />
      <Footer />
    </>
  );
}

export default Services;
