import React from "react";
import { Link } from "react-router-dom";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NabBar";
import Cooperate from "./../Components/Cooperate";
import backgroundImg from "../assets/bg12.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/Cash1.png";
import img3 from "../assets/Cash2.png";
import img4 from "../assets/cost3.png";
import img5 from "../assets/cash3.png";
import img6 from "../assets/cash4.png";
import BusinessForward from "./../Components/BusinessForward";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
  visible: { opacity: 1, y: 0 }, // Move to its final position (up)
};

const features = [
  {
    title: "Simplified Leasing Process",
    description:
      "Enjoy a seamless, straightforward leasing experience from start to finish.",
    icon: "🏢", // Replace with SVG or actual icon
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Track and manage all your lease transactions and contracts in real time",
    icon: "📱", // Replace with SVG or actual icon
  },
  {
    title: "User-Friendly Interface",
    description:
      "Easy-to-use design for both leasing professionals and customers, ensuring quick adoption.",
    icon: "📊", // Replace with SVG or actual icon
  },
  {
    title: "Secure and Reliable",
    description:
      " Built with top-notch security features to protect sensitive leasing data and ensure reliable service.",
    icon: "📋", // Replace with SVG or actual icon
  },
  {
    title: "Customizable Solutions",
    description:
      "Tailor the app to fit your unique leasing needs and business requirements.",
    icon: "👥", // Replace with SVG or actual icon
  },
  {
    title: "Analytics and Insights",
    description:
      "Gain valuable data insights to make informed decisions and improve your leasing strategies",
    icon: "💼", // Replace with SVG or actual icon
  },
];

const Leasing = () => {
  return (
    <>
      <NavBar />
      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full  h-[650px] xl:h-screen  bg-center bg-cover xl:flex-row-reverse "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Image on the right side */}
        <div className="w-[350px] h-[250px] xl:w-[639px] xl:h-[404px] flex justify-center xl:justify-start mb-4 md:mb-0 z-10 mr-[20px] xl:mr-[120px] mt-10 ">
          <img src={img1} alt="Placeholder" />
        </div>

        {/* Text content on the left side */}
        <div className="z-10 w-full py-8 text-center xl:w-1/2  md:text-left p-4 ml-[0px] xl:ml-[120px] md:py-0  ">
          <h2 className="text-[30px] xl:text-[47.78px] font-semibold text-black text-opacity-70 text-center xl:text-start">
            Discover smarter leasing with the Asipiya Leasing App.
          </h2>
          <p className="mt-3 mb-8 text-[16px] xl:text-[19.2px] font-medium text-black text-opacity-70 text-center xl:text-start">
            Get total control of your leasing operations with the Asipiya
            Leasing .
          </p>
          {/* Button below the text content */}
          {/* Button below the text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={textVariants}
            className="w-full flex justify-center xl:justify-start"
          >
            <Link
              className="w-[150px] h-[45px] xl:w-[250px] xl:h-[50px] py-2 mb-4 text-[16px] xl:text-[19.2px] font-semibold text-white bg-[#7D00C5] rounded-full flex items-center justify-center"
              to="/About"
            >
              Let's get started
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Microfinance Solution section */}
      <div className="min-h-screen  py-[16px] bg-purple-50 mt-16">
        <div className="px-[20px] mx-auto xl:mx-[120px]  max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-[30px] xl:text-[32px] font-semibold text-[#333333] sm:text-4xl mt-[16px]">
              Why Choose the Asipiya Leasing App?
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
            <button className="w-[183px] h-[48px] px-6  text-[16px] font-semibold text-white transition bg-purple-600 rounded-full hover:bg-purple-700">
              Explore
            </button>
          </div>
        </div>
      </div>

      <p className="mt-10 text-[32px] font-semibold text-[#333333] text-center">
        How Can Asipiya Leasing App Help You?
      </p>
      <p className="mt-3 text-center text-[#666666] ">
        Transform your business with the Asipiya Leasing App, enhancing
        efficiency, reducing costs, and empowering you to manage leases
        effortlessly with <br /> our cloud-based solution. A proud Sri Lankan
        product!{" "}
      </p>

      {/* information about micro finance section */}
      <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img src={img2} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
          <h2 className="text-2xl font-bold ">Vehicle Management</h2>
          <p className="mt-4 text-sm text-gray-500">
            The Asipiya Leasing App is designed to streamline the vehicle
            leasing process. It offers comprehensive vehicle inventory
            management, allowing users to track details like make, model, year,
            and current lease status. The app ensures real-time updates on
            vehicle availability, providing insights into whether a vehicle is
            leased, available, or under maintenance. Additionally, it
            facilitates easy scheduling for vehicle maintenance and inspections,
            ensuring all vehicles are properly maintained and ready for lease
            when needed.
          </p>
        </div>
      </div>

      {/* Cash Flow Monthly section */}
      <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
          <img src={img3} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:mr-28 md:text-left p-4">
          <h2 className="text-2xl font-bold ">Lease Agreement Management</h2>
          <p className="mt-4 text-base text-gray-500">
            The Asipiya Leasing App also simplifies the lease agreement process
            with online generation and signing, allowing users to complete lease
            agreements digitally. It offers customizable lease terms, enabling
            adjustments to down payments, interest rates, and lease tenure to
            suit individual needs. Additionally, the app automates renewal
            notifications and sends end-of-lease alerts, ensuring customers
            never miss important milestones in their lease agreements and
            helping maintain a smooth leasing experience.
          </p>
        </div>
      </div>

      {/* Profit/Loss section */}
      <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img src={img4} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
          <h2 className="text-2xl font-bold ">Payment & Billing System</h2>
          <p className="mt-4 text-sm text-gray-500">
            The Asipiya Leasing App enhances financial management by providing
            customers with a clear payment schedule and automated reminders to
            ensure timely payments. It supports seamless online payment
            processing through credit/debit cards and bank transfers, making
            transactions convenient. For late payments, the app handles
            penalties and sends notifications to keep customers informed.
            Additionally, the app offers flexible options for lease payoff and
            early termination, allowing users to pay off their lease early or
            terminate it with ease, providing greater flexibility and control
            over their leasing experience.
          </p>
        </div>
      </div>

      {/* Balance Sheet section */}
      <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
          <img src={img4} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:mr-28 md:text-left p-4">
          <h2 className="text-2xl font-bold ">Financial Reports & Analytics</h2>
          <p className="mt-4 text-base text-gray-500">
            The Asipiya Leasing App provides detailed financial insights through
            monthly, quarterly, and annual reports on revenue, profits, and
            customer trends, helping businesses make informed decisions. It also
            tracks vehicle usage and depreciation, allowing for accurate asset
            management and forecasting. For lease portfolio management, the app
            offers tools to monitor and analyze the performance of all leased
            vehicles, ensuring optimal fleet utilization. Additionally, it
            includes risk analysis features that help identify potential
            financial risks and optimize the overall leasing strategy, ensuring
            a sustainable and profitable leasing operation.
          </p>
        </div>
      </div>

      {/* Cash Flow Accumulated section */}
      <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img src={img4} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
          <h2 className="text-2xl font-bold ">Cash Flow Accumulated</h2>
          <p className="mt-4 text-sm text-gray-500">
            The Cash Flow Accumulated feature in the Asipiya Leasing App offers
            a detailed tracking of total cash inflows and outflows over a
            specified period, providing a clear picture of the company’s
            liquidity and financial stability. By monitoring cash flow trends,
            businesses can assess how effectively they are generating cash and
            meeting financial obligations. This feature helps identify long-term
            trends, plan for future cash requirements, and supports strategic
            financial decision-making, ensuring that the organization is
            well-prepared for any financial challenges and opportunities.
          </p>
        </div>
      </div>

      {/* General Ledger Summary section */}
      <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
      <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
          <img src={img5} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:mr-28 md:text-left p-4">
          <h2 className="text-2xl font-bold ">Profit/Loss</h2>
          <p className="mt-4 text-base text-gray-500">
            The Profit/Loss feature in the Asipiya Leasing App calculates the
            net profit or loss by comparing total revenues with total expenses
            over a defined period. This feature is essential for evaluating the
            company's financial performance and profitability. It helps
            businesses understand how well they are managing costs and
            generating revenue. By highlighting areas that need improvement, it
            supports better cost management and revenue-enhancing strategies,
            enabling informed business decisions that contribute to long-term
            financial success and sustainability.
          </p>
        </div>
      </div>

      {/* 	Branch Equity section */}
      <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img src={img4} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
          <h2 className="text-2xl font-bold ">Balance Sheet</h2>
          <p className="mt-4 text-sm text-gray-500">
            The Balance Sheet feature in the Asipiya Leasing App generates a
            comprehensive statement of the company’s assets, liabilities, and
            equity at a specific point in time. This financial snapshot is
            crucial for evaluating the company’s solvency, liquidity, and
            overall financial stability. It provides key insights for investors,
            creditors, and management, helping them assess the company's
            financial health. With this information, strategic decisions can be
            made to improve operations, manage risks, and plan for future
            growth, ensuring the business remains financially secure and
            well-positioned for success.
          </p>
        </div>
      </div>

      {/* Interbank Transfers section */}
      <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
          <img src={img6} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:mr-28 md:text-left p-4">
          <h2 className="text-2xl font-bold ">Trial Balance</h2>
          <p className="mt-4 text-base text-gray-500">
            The Trial Balance feature in the Asipiya Leasing App provides a
            summary of all ledger accounts along with their respective debit and
            credit balances. This serves as an essential preliminary check
            before preparing financial statements, ensuring that total debits
            equal total credits. By highlighting any discrepancies or errors in
            the accounting records, the Trial Balance feature helps identify
            areas that require adjustments or corrections, ensuring the accuracy
            of financial reports and maintaining the integrity of the company’s
            accounting system.
          </p>
        </div>
      </div>

      {/* General Ledger Summary: section */}
      <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img src={img6} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
          <h2 className="text-2xl font-bold ">General Ledger Summary: </h2>
          <p className="mt-4 text-sm text-gray-500">
            The General Ledger Summary feature in the Asipiya Leasing App
            consolidates and summarizes all financial transactions recorded in
            the general ledger. It offers a comprehensive overview of the
            company’s financial activities, which is vital for detailed
            financial analysis and reporting. This feature is crucial for
            tracking the company’s financial performance, managing accounts, and
            preparing accurate and up-to-date financial statements.
          </p>
          <br />
          <h2 className="text-2xl font-bold ">Branch Equity: </h2>
          <p className="mt-4 text-sm text-gray-500">
            The Branch Equity feature tracks and manages the equity or net worth
            of individual branches within the company. By monitoring the
            financial performance and stability of each branch separately, it
            provides valuable insights into their profitability, asset
            management, and overall financial health. This feature supports
            better decision-making, efficient resource allocation, and enables
            businesses to optimize the performance of each branch for
          </p>
        </div>
      </div>

      {/* Interbank Transfers: section */}
      <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
          <img src={img6} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:mr-28 md:text-left p-4">
          <h2 className="text-2xl font-bold ">Interbank Transfers:</h2>
          <p className="mt-4 text-base text-gray-500">
            The Interbank Transfers feature in the Asipiya Leasing App
            facilitates and records transfers of funds between the company’s
            various bank accounts. This feature ensures efficient cash
            management and liquidity control, helping the company optimize its
            cash position and meet financial obligations on time. By
            streamlining and accurately managing interbank transactions, it
            enables smooth fund transfers, reduces errors, and improves overall
            financial workflow, ensuring the company maintains a healthy and
            effective cash flow across all accounts.
          </p>
        </div>
      </div>

      {/* Chart of Accounts:  section */}
      <div className="flex flex-col items-center justify-center p-6 md:flex-row mx-[20px] xl:mx-[120px] ">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img src={img6} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:pl-8 md:text-left md:ml-20 md:m-10">
          <h2 className="text-2xl font-bold ">Chart of Accounts: </h2>
          <p className="mt-4 text-sm text-gray-500">
            The Chart of Accounts feature in the Asipiya Leasing App maintains a
            comprehensive list of all accounts used in the company’s accounting
            system. This structured framework organizes financial transactions
            into categories such as income, expenses, assets, and liabilities,
            ensuring accurate recording and reporting. It provides a clear and
            organized financial overview, making it easier to track and manage
            the company’s financial activities while ensuring compliance and
            clarity in financial reporting.
          </p>
        </div>
      </div>

      {/* Reconcile Entries section */}
      <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse mx-[20px] xl:mx-[120px]">
        <div className="w-[300px] h-[180px] xl:w-1/2 xl:h-1/2 mb-4 md:mb-0 flex justify-center md:justify-start ">
          <img src={img6} alt="Placeholder" />
        </div>

        <div className="w-full text-left md:w-1/2 md:mr-28 md:text-left p-4">
          <h2 className="text-2xl font-bold ">Reconcile Entries</h2>
          <p className="mt-4 text-base text-gray-500">
            The Reconcile Entries feature matches and verifies financial records
            with corresponding bank statements or external documents to ensure
            accuracy and completeness. This process includes managing
            discrepancies where cash collectors may have deposited collected
            amounts from customers but have not updated them in the company
            system. It involves: <br />
            • Comparing bank deposits with system records to identify missing or
            mismatched entries. <br />
            • Updating the system to reflect accurate cash balances and ensuring
            all transactions are accounted for. <br />
            • Maintaining accurate financial records and ensuring the integrity
            of financial data. <br />
            • Generating detailed reconciliation reports to support financial
            auditing and compliance. <br />• This feature is critical for
            maintaining accurate financial records, ensuring the reliability of
            financial statements, and preventing fraud or errors.
          </p>
        </div>
      </div>

      <BusinessForward />
      <Cooperate />
      <Footer />
    </>
  );
};

export default Leasing;
