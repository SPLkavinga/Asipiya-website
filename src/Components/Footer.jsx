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
        <div className="flex flex-col items-center gap-2 px-[20px] xl:px-24 pb-4 mb-4 border-b border-white md:flex-row md:gap-[150px]">
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
              <p className="mr-4 flex items-center">
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
        <div className="mb-6 md:mb-0 w-[320px] mx-auto ">
          {/* Row for Home, Services, and Contact Us */}
          <div className="flex justify-start mb-4 space-x-14  md:text-[13.33px] font-medium  text-start">
            <div>
              <h3 className="mb-2 font-bold">Home</h3>
              <ul>
                <li>
                  <Link to="/" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Tech Stack
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-bold">Services</h3>
              <ul>
                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-bold">Contact Us</h3>
              <ul>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Centered About Us, Blogs Links, and Social Media Icons in One Row */}
          <div className="flex justify-start mt-5 space-x-14 md:text-[13.33px] font-medium text-start ">
            <div>
              <h3 className="mb-2 font-bold">About Us</h3>
              <ul>
                <li>
                  <Link to="/mission" className="hover:underline">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="/vision" className="hover:underline">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link to="/values" className="hover:underline">
                    Values
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className="hover:underline">
                    Leadership
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-bold ">Blogs</h3>
              <ul>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section moved next to Blogs */}
        <div className="flex flex-col items-center   mt-6">
          <h3 className="mb-2 font-bold ">Get In Touch</h3>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/+94778820000"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
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
