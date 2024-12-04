import React from "react";
import { Link } from 'react-router-dom';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import Cooperate from './../Components/Cooperate';
import img1 from '../assets/image 27.png';
import img2 from '../assets/Cash1.png';
import img3 from "../assets/Cash2.png"
import img4 from "../assets/cost3.png"
import img5 from "../assets/cash3.png"
import img6 from "../assets/cash4.png"
import BusinessForward from './../Components/BusinessForward';


const features = [
  {
    title: "Enhanced Efficiency",
    description:
      "Streamline your prawning operations with automated tools and real-time tracking.",
    icon: "🏢", // Replace with SVG or actual icon
  },
  {
    title: "User-Friendly Interface",
    description:
      "Enjoy a simple, intuitive design that makes prawning easier for all user",
    icon: "📱", // Replace with SVG or actual icon
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage powerful analytics to optimize your prawning strategies and performance.",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Seamless Integration ",
    description:
      " Integrate Asipiya Prawing effortlessly with your existing workflows and technology.",
    icon: "📋", // Replace with SVG or actual icon
  },
  {
    title: "Real-Time Updates",
    description:
      "Get instant notifications and live monitoring for better decision-making",
    icon: "👥", // Replace with SVG or actual icon
  },
  {
    title: "Customizable Features",
    description:
      "Adapt Asipiya Prawing to suit your unique prawning needs with flexible options.",
    icon: "💼", // Replace with SVG or actual icon
  },
];

const Prawing = () => {
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
                    <h2 className="text-5xl font-bold text-white">Discover smarter </h2>
                    <h2 className="text-5xl font-bold text-white">prawning with</h2>
                    <h2 className="text-5xl font-bold text-white">Asipiya Prawing.</h2>
                    <p className="mb-8 text-base text-white">
                        Get total control of your prawning operations with the Asipiya Prawing
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

           

         {/* Why Choose Microfinance Solution section */}
        <div className="min-h-screen px-4 py-12 bg-purple-50 sm:px-8 lg:px-16">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Why Choose the Asipiya Prawing System?
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

        <p className="mt-10 text-4xl font-bold text-center">How Can Asipiya Prawing System Help You?</p>
        <p className="mt-3 text-center text-gray-500">Transform your business using Microfinance which will improve efficiency, reduce costs and give your business the ability to launch new</p>
        <p className="mb-10 text-center text-gray-500">products effortlessly with our cloud based Microfinance System. A proud Sri Lankan Product!</p>
        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-32"
                    src={img2}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
                    <h2 className="text-2xl font-bold ">Gold Valuation and Collateral Management</h2>
                    <p className="mt-4 text-sm text-gray-500">
                        The Asipiya Pawning Web App streamlines the assessment and valuation of gold items, ensuring accurate tracking of collateral and efficient 
                        loan issuance. With its intuitive interface, users can record gold item details, calculate their value, and maintain precise records for 
                        every transaction, enhancing both accuracy and accountability.
                    </p>
                </div>
            </div>

             {/* Cash Flow Monthly section */}
            <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10">
            <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start md:mr-32">
                <img
                    className="object-cover rounded-lg shadow-md md:mr-52"
                    src={img3}
                    alt="Placeholder"
                />
            </div>

            <div className="w-full mx-32 text-center md:w-1/2 md:pr-8 md:text-left">
                <h2 className="text-2xl font-bold ">Pawning Ticket Issuance</h2>
                <p className="mt-4 text-base text-gray-500">
                    The Asipiya Pawning Web App automatically generates comprehensive pawning tickets, including detailed item descriptions, gold weight, 
                    assessed value, loan amount, interest rate, and maturity date. This ensures a seamless and professional process, reducing manual effort 
                    while maintaining accurate and standardized documentation for every transaction.
                </p>
            </div>
        </div>

          {/* Profit/Loss section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-32"
                    src={img4}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
                    <h2 className="text-2xl font-bold ">Loan Issuance Based on Gold Value</h2>
                    <p className="mt-4 text-sm text-gray-500">
                        The Asipiya Pawning Web App facilitates loan issuance based on the appraised value of gold collateral. It offers customizable 
                        loan-to-value (LTV) ratios, allowing flexibility to align with business policies and customer needs while ensuring accurate and efficient 
                        loan processing.
                    </p>
                </div>
            </div>

            {/* Balance Sheet section */}
            <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10">
            <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start md:mr-32">
                <img
                    className="object-cover rounded-lg shadow-md md:mr-52"
                    src={img4}
                    alt="Placeholder"
                />
            </div>

            <div className="w-full mx-32 text-center md:w-1/2 md:pr-8 md:text-left">
                <h2 className="text-2xl font-bold ">Interest and Penalty Calculation</h2>
                <p className="mt-4 text-base text-gray-500">
                    The Asipiya Pawning Web App automatically calculates loan interest and overdue payment penalties, incorporating customizable parameters. 
                    Additionally, it can factor in gold market fluctuations, ensuring precise and dynamic financial management aligned with market trends and 
                    customer agreements.
                </p>
            </div>
        </div>


        {/* Trial Balancet section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-32"
                    src={img4}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
                    <h2 className="text-2xl font-bold ">Renewal and Redemption Options</h2>
                    <p className="mt-4 text-sm text-gray-500">
                        The Asipiya Pawning Web App streamlines the management of loan renewals and gold item redemptions. It allows customers to renew pawning loans 
                        with ease, updating terms and conditions as needed. Upon loan repayment, the app facilitates the secure and efficient redemption of gold items, 
                        ensuring a seamless and customer-friendly experience.
                    </p>
                </div>
            </div>


            {/* General Ledger Summary section */}
            <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10">
            <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start md:mr-32">
                <img
                    className="object-cover rounded-lg shadow-md md:mr-52"
                    src={img5}
                    alt="Placeholder"
                />
            </div>

            <div className="w-full mx-32 text-center md:w-1/2 md:pr-8 md:text-left">
                <h2 className="text-2xl font-bold ">Gold Auction Management</h2>
                <p className="mt-4 text-base text-gray-500">
                    The Asipiya Pawning Web App manages the auction process for unredeemed gold efficiently. It tracks inventory, schedules auctions, and records 
                    detailed bidding information, ensuring transparency and accuracy. The app streamlines the process from item listing to final sale, 
                    helping businesses maximize value while maintaining compliance with regulatory requirements.
                </p>
            </div>
        </div>

        {/* 	Branch Equity section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-32"
                    src={img4}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
                    <h2 className="text-2xl font-bold ">Document and Asset Management</h2>
                    <p className="mt-4 text-sm text-gray-500">
                        The Asipiya Pawning Web App allows users to upload and securely store gold appraisals, pawn tickets, and customer documents. It ensures 
                        easy access to records through an organized and searchable system, enhancing efficiency while maintaining data confidentiality 
                        and compliance with record-keeping regulations.
                    </p>
                </div>
            </div>

             {/* Interbank Transfers section */}
             <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10">
            <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start md:mr-32">
                <img
                    className="object-cover rounded-lg shadow-md md:mr-52"
                    src={img6}
                    alt="Placeholder"
                />
            </div>

            <div className="w-full mx-32 text-center md:w-1/2 md:pr-8 md:text-left">
                <h2 className="text-2xl font-bold ">Bulk Payment and Invoice Processing</h2>
                <p className="mt-4 text-base text-gray-500">
                    The Asipiya Pawning Web App streamlines the repayment process by enabling the bulk updating of multiple payments and generating invoices in batches. 
                    This feature enhances efficiency in loan management, reduces manual effort, and ensures accurate financial records for both customers and the 
                    business.
                </p>
            </div>
        </div>


         {/* General Ledger Summary: section */}
         <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-32"
                    src={img6}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
                    <h2 className="text-2xl font-bold ">Service Benefits</h2>
                    <p className="mt-4 text-sm text-gray-500">
                    .Service Assistance: The supplier agreed to provide service assistance for any software-related issues. <br />
                    .Lifetime Software Updates: The supplier agreed to provide software updates whenever necessary
                    </p>
                </div>
            </div>
          <BusinessForward/>
          <Cooperate/>
          <Footer/>

    </>
  );
};

export default Prawing;
