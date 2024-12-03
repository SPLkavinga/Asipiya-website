import React from "react";
import { Link } from 'react-router-dom';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import img1 from '../assets/image 27.png';

const features = [
  {
    title: "Branch-wise Group/Loan Creation",
    description:
      "With Asipiya Finance, create and manage groups and loans seamlessly across different branches.",
    icon: "🏢", // Replace with SVG or actual icon
  },
  {
    title: "Digital Application",
    description:
      "Improve loan officer efficiency and extend outreach with the Asipiya Finance Mobile Application for your field officers!",
    icon: "📱", // Replace with SVG or actual icon
  },
  {
    title: "Management Dashboard",
    description:
      "Asipiya Finance enables management to make faster and more informed decisions through real-time data insights.",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Integrated Accounting",
    description:
      "With Asipiya Finance, you gain access to fully automated financial reports and manual journal entry options, ensuring reduced paperwork and efficient management.",
    icon: "📋", // Replace with SVG or actual icon
  },
  {
    title: "Individual & Group Management",
    description:
      "The Asipiya Finance Microfinance System fully supports methodologies for both individual and group clients.",
    icon: "👥", // Replace with SVG or actual icon
  },
  {
    title: "Loan Management",
    description:
      "Easily launch loan products and generate loan-related documents instantly with the Asipiya Finance Microfinance Management System.",
    icon: "💼", // Replace with SVG or actual icon
  },
];

const Microfinance = () => {
  return (
    <>
        <NavBar />
         {/* Full-screen background section */}
         <div className="relative flex flex-col items-center justify-center w-full h-auto bg-purple-900 bg-center bg-cover md:flex-row-reverse md:h-screen">
                {/* Dark overlay */}
                <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

                {/* Image on the right side */}
                <div className="w-full md:w-1/2 md:h-[450px] flex justify-center md:justify-start mb-4 md:mb-0 z-10 mt-5 md:ml-20">
                    <img className="object-cover rounded-lg shadow-md" src={img1} alt="Placeholder" />
                </div>

                {/* Text content on the left side */}
                <div className="z-10 w-full px-4 py-8 text-center md:w-1/2 md:pr-2 md:text-left md:px-52 md:py-0">
                    <h2 className="text-5xl font-bold text-white">Empowering Lives</h2>
                    <h2 className="text-5xl font-bold text-white">Globally with Asipiya </h2>
                    <h2 className="text-5xl font-bold text-white">Finance </h2>
                    <h2 className="text-5xl font-bold text-white">With Trusted Microfinance</h2>
                    <h2 className="mb-4 text-5xl font-bold text-white">Solutions.</h2>
                    <p className="mb-8 text-base text-white">
                        Achieve complete control and visibility of your microfinance operations with the Asipiya Finance .
                    </p>
                    {/* Button below the text content */}
                    <Link
                        className="py-2 font-bold text-white bg-purple-800 border-0 rounded-full px-7"
                        to="/About"
                    >
                        Let's get started
                    </Link>

                    
                </div>
            </div>

           


        <div className="min-h-screen px-4 py-12 bg-purple-50 sm:px-8 lg:px-16">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Why Choose Microfinance Solution?
            </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
            <div
                key={index}
                className="flex flex-col p-6 text-left bg-purple-50"
            >
                <div className="mb-4 text-5xl text-black">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-left text-gray-800">
                {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
            ))}
        </div>
        <div className="mt-12 text-center">
            <button className="py-2 font-semibold text-white transition duration-300 bg-purple-700 rounded-lg shadow-lg px-14 hover:bg-purple-600">
            Explore
            </button>
        </div>
        </div>
        <Footer/>

    </>
  );
};

export default Microfinance;
