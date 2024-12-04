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

           

         {/* Why Choose Microfinance Solution section */}
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


        {/* information about micro finance section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-32"
                    src={img2}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
                    <h2 className="text-2xl font-bold ">Cash Flow Accumulated</h2>
                    <p className="mt-4 text-sm text-gray-500">
                      With Asipiya Finance, the Cash Flow Accumulated feature offers a clear view of your company’s financial 
                      health by tracking cash inflows and outflows. This tool enables you to monitor liquidity, assess cash
                       generation, and stay on top of financial obligations, ultimately supporting long-term trend analysis, 
                       future cash planning, and informed strategic decisions.
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
                <h2 className="text-2xl font-bold ">Cash Flow Monthly</h2>
                <p className="mt-4 text-base text-gray-500">
                  The Cash Flow Monthly feature in Asipiya Finance offers detailed insights into monthly cash inflows and 
                  outflows, helping your organization identify patterns, manage short-term liquidity, and ensure sufficient 
                  cash to meet operational needs. This feature supports budgeting and forecasting, enabling better 
                  financial planning and control.
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
                    <h2 className="text-2xl font-bold ">Profit/Loss:</h2>
                    <p className="mt-4 text-sm text-gray-500">
                    The Profit/Loss feature calculates the net profit or loss by comparing the company’s total revenues with 
                    its total expenses over a specific period. This is crucial for assessing the company's financial 
                    performance, understanding its profitability, and making informed business decisions. 
                    It helps in identifying areas of improvement, cost management, and revenue enhancement.
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
                <h2 className="text-2xl font-bold ">Balance Sheet</h2>
                <p className="mt-4 text-base text-gray-500">
                  The Profit/Loss feature in Asipiya Finance calculates net profit or loss by comparing your company’s total 
                  revenues with total expenses over a specific period. This is essential for assessing financial performance, 
                  understanding profitability, and making informed business decisions. It also helps identify areas for 
                  improvement, cost management, and revenue enhancement
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
                    <h2 className="text-2xl font-bold ">Trial Balance</h2>
                    <p className="mt-4 text-sm text-gray-500">
                      The Trial Balance feature prepares a summary of all ledger accounts with their respective debit and 
                      credit balances. This serves as a preliminary check before preparing financial statements, 
                      ensuring that total debits equal total credits. It helps in identifying any discrepancies or 
                      errors in the accounting records, providing a basis for further adjustments and corrections.
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
                <h2 className="text-2xl font-bold ">General Ledger Summary:</h2>
                <p className="mt-4 text-base text-gray-500">
                  Asipiya Finance’s Trial Balance feature summarizes all ledger accounts with debit and credit balances, 
                  ensuring that debits and credits match before preparing financial statements. This tool is key for 
                  detecting errors or discrepancies in accounting records, making it easier to identify areas that require 
                  adjustments or corrections.
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
                    <h2 className="text-2xl font-bold ">	Branch Equity</h2>
                    <p className="mt-4 text-sm text-gray-500">
                      With Asipiya Finance, the Branch Equity feature allows you to monitor and manage the equity of each 
                      branch individually. By evaluating financial performance, asset management, and profitability, 
                      this tool supports better decision-making and efficient resource allocation across your branches.
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
                <h2 className="text-2xl font-bold ">Interbank Transfers</h2>
                <p className="mt-4 text-base text-gray-500">
                  Asipiya Finance’s Interbank Transfers feature enables smooth and accurate recording of fund transfers 
                  between your company’s bank accounts. This feature supports efficient cash management, 
                  optimizes liquidity, and ensures that financial obligations are met promptly.
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
                    <h2 className="text-2xl font-bold ">General Ledger Summary:</h2>
                    <p className="mt-4 text-sm text-gray-500">
                      The General Ledger Summary feature in Asipiya Finance consolidates and summarizes all financial 
                      transactions recorded in the general ledger. It provides a comprehensive overview of your company’s 
                      financial activities, supporting detailed financial analysis and reporting. This feature is essential 
                      for tracking financial performance, managing accounts, and preparing accurate financial statements
                    </p>
                </div>
            </div>


            {/* Reconcile Entries section */}
            <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10">
            <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start md:mr-32">
                <img
                    className="object-cover rounded-lg shadow-md md:mr-52"
                    src={img4}
                    alt="Placeholder"
                />
            </div>

            <div className="w-full mx-32 text-center md:w-1/2 md:pr-8 md:text-left">
                <h2 className="text-2xl font-bold ">Reconcile Entries</h2>
                <p className="mt-4 text-base text-gray-500">
                Asipiya Finance’s Reconcile Entries feature ensures financial accuracy by matching and verifying records with bank statements or external documents. This includes managing discrepancies, such as when cash collectors have deposited customer amounts but haven’t updated the company’s system. The process covers: <br />
                • Identifying missing or mismatched entries by comparing bank deposits with system records. <br />
                • Updating the system to reflect accurate balances, ensuring all transactions are accounted for. <br />
                • Maintaining the integrity of financial data with up-to-date records. <br />
                • Generating reconciliation reports to aid financial auditing and compliance. <br />
                This feature is essential for ensuring the accuracy of financial statements and preventing fraud.
                </p>
            </div>
        </div>


        {/* Manual Journal: section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[300px] h-[300px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-32"
                    src={img5}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
                    <h2 className="text-2xl font-bold ">Manual Journal:</h2>
                    <p className="mt-4 text-sm text-gray-500">
                      Asipiya Finance’s Manual Journal feature gives you the ability to record and manage journal entries 
                      manually for transactions that aren’t automatically processed. This feature handles adjustments, 
                      corrections, and complex entries, ensuring that every financial activity is accurately documented, 
                      while offering flexibility and control over your accounting workflow.
                    </p>
                </div>
            </div>
          <BusinessForward/>
          <Cooperate/>
          <Footer/>

    </>
  );
};

export default Microfinance;
