import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MdCallToAction, MdOutlineAttachEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-3 text-white bg-purple-900 mt-[120px]">
      <div className="container mx-auto text-center md:text-left ">
        {/* Top Section - Logo, Tagline, Email, and Phone in one line */}
        <div className="flex flex-col items-center gap-2 px-[20px] xl:px-24 pb-2 mb-2  md:flex-row md:gap-[150px]">
          {/* Logo */}
          <img
            className="w-[160px] h-[60px] mb-2 md:mb-0"
            src={logo}
            alt="Asipiya Logo"
          />

          {/* Tagline */}
          <p className="mb-2 text-sm md:text-[13.33px] font-medium md:ml-2 md:mb-0">
            Your trusted partner for cutting-edge software solutions.
            Streamlining business operations at Asipiya
          </p>

          {/* Contact Info - Email and Phone */}
          <div className="flex flex-col items-center md:text-[13.33px] font-medium">
            <div className="flex flex-row">
              <p className="flex items-center mr-4">
                <MdOutlineAttachEmail className="mr-1" />
                <a href="mailto:Info@Asipiya.com" className="underline">
                  Info@Asipiya.com
                </a>
              </p>
              <p className="flex items-center">
                <IoCallOutline className="mr-1" />
                <a href="tel:+94778820000" className="underline">
                  +94 77 882 0000
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center mb-6 md:mb-0">
          {/* Row for Home, Services, and Contact Us */}
          <div className="flex justify-start mb-4 space-x-14  md:text-[13.33px] font-medium  text-start">
            <div>
              <Link to="/" className="mb-2 font-bold hover:underline">
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/services"
                className="mb-2 font-semibold hover:underline"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="mb-2 font-semibold hover:underline"
              >
                {" "}
                Contact Us
              </Link>
            </div>

            <div>
              <Link to="/about" className="mb-2 font-semibold hover:underline">
                About Us
              </Link>
            </div>

            <div>
              <Link to="/blog" className="mb-2 font-semibold hover:underline">
                Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Section moved next to Blogs */}
        <div className="flex flex-col items-center mt-2 mb-2">
         
          <div className="flex space-x-4">
            <a
              href="https://wa.me/+94778820000"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-whatsapp"></i>
            </a>
            <a
              href="https://instagram.com"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-facebook"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center justify-center text-white bg-[#7D00C5] hover:bg-[#5C0091] h-12 w-12 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[8px] text-center md:text-[13.33px] font-medium">
          <p className="pt-4 border-t border-white">
            &copy; All rights reserved © 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
