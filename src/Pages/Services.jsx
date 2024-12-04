import React from "react";
import { Link } from "react-router-dom";
import NavBar from './../Components/NabBar';
import backgroundImg from '../assets/bg2.png';
import Cooperate from './../Components/Cooperate';
import Footer from './../Components/Footer';

const services = [
  {
    id: "erp",
    title: "ERP Systems",
    icon: "📋",
    link: "/service/erp",
    description: "Streamline your business operations with our comprehensive ERP solutions.",
  },
  {
    id: "pos",
    title: "POS Systems",
    icon: "💳",
    link: "/service/pos",
    description: "Enhance your retail operations with cutting-edge POS technology.",
  },
  {
    id: "micro-finance",
    title: "Micro Finance",
    icon: "🚀",
    link: "/Microfinance",
    description: "Empower communities with reliable microfinance solutions.",
  },
  {
    id: "gold-loan",
    title: "Gold Loan System",
    icon: "💰",
    link: "/service/gold-loan",
    description: "Simplify gold loan management with our efficient systems.",
  },
  {
    id: "leasing",
    title: "Leasing System",
    icon: "🏠",
    link: "/service/leasing",
    description: "Optimize your leasing operations with our robust tools.",
  },
  {
    id: "insurance",
    title: "Insurance Management",
    icon: "🛡️",
    link: "/service/insurance",
    description: "Streamline insurance processes with innovative management software.",
  },
  {
    id: "payroll",
    title: "Payroll Systems",
    icon: "💼",
    link: "/service/payroll",
    description: "Efficiently handle payroll operations with our tailored solutions.",
  },
  {
    id: "crm",
    title: "CRM Systems",
    icon: "📈",
    link: "/service/crm",
    description: "Boost customer relationships with our powerful CRM tools.",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    icon: "📦",
    link: "/service/inventory",
    description: "Keep track of inventory effortlessly with our smart systems.",
  },
];

function Services() {
  return (
    <>
        <NavBar/>

        <div
                className="relative flex items-center justify-start w-full h-auto bg-center bg-cover md:h-screen"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                }}
            >
                {/* Darker overlay */}
                <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

                {/* Text content aligned to the left */}
                <div className="z-10 w-full px-6 py-8 text-left md:w-2/3 md:px-20 md:mt-[-50px]">
                    <p className="mb-3 text-sm font-bold text-white md:text-lg">About US</p>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Design & Develop For</h2>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Better Solution</h2>
                    <p className="mb-8 text-sm text-white md:text-lg">
                        Welcome to Asipiya Soft Solutions PVT Ltd, your gateway to comprehensive and cutting-edge software solutions
                        tailored for businesses of all sizes. At Asipiya Soft Solutions, we pride ourselves on being your
                        trusted partner in navigating the digital landscape, offering a range of services designed to
                        enhance and streamline your business operations.
                    </p>
                </div>
            </div>

        <div className="container px-6 mx-auto">
        <h1 className="mt-10 mb-8 text-3xl font-bold text-center text-black">
            Services We're <span className="text-purple-800">Offer</span>
        </h1>
        <div className="grid justify-center grid-cols-1 gap-4 mb-4 md:ml-20 p-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
            <Link
                key={service.id}
                to={service.link}
                className="block p-6 text-center transition-transform transform bg-white rounded-lg shadow-md h-72 hover:scale-105 w-72"
            >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
            </Link>
            ))}
        </div>
        </div>
        <Cooperate/>
        <Footer/>
    </>
  );
}

export default Services;
