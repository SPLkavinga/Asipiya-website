import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-3">
      <div className="container mx-auto text-center md:text-left ">
        {/* Top Section - Logo, Tagline, Email, and Phone in one line */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mb-4">
          {/* Logo */}
          <img className="w-[160px] h-[60px] mb-2 md:mb-0" src={logo} alt="Asipiya Logo" />

          {/* Tagline */}
          <p className="text-sm md:text-base md:ml-2 mb-2 md:mb-0">
            Your trusted partner for cutting-edge software solutions. Streamlining business operations at Asipiya
          </p>

          {/* Contact Info - Email and Phone */}
          <div className="flex flex-col md:flex-row items-center">
            <p className="mr-4">
              <a href="mailto:Info@Asipiya.com" className="underline">Info@Asipiya.com</a>
            </p>
            <p>
              <a href="tel:+94778820000" className="underline">+94 77 882 0000</a>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          {/* Row for Home, Services, and Contact Us */}
          <div className="flex justify-center space-x-14 mb-4">
            <div>
              <h3 className="font-bold mb-2">Home</h3>
              <ul>
                <li><Link to="/" className="hover:underline">Services</Link></li>
                <li><Link to="/" className="hover:underline">Tech Stack</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Services</h3>
              <ul>
                <li><Link to="/services" className="hover:underline">Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <ul>
                <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Centered About Us and Blogs Links */}
          <div className="flex justify-center space-x-14 mt-5">
            <div>
              <h3 className="font-bold mb-2">About Us</h3>
              <ul>
                <li><Link to="/mission" className="hover:underline">Mission</Link></li>
                <li><Link to="/vision" className="hover:underline">Vision</Link></li>
                <li><Link to="/values" className="hover:underline">Values</Link></li>
                <li><Link to="/leadership" className="hover:underline">Leadership</Link></li>
                <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Blogs</h3>
              <ul>
                <li><Link to="/blog" className="hover:underline">Search</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center mt-5">
          <h3 className="font-bold mb-2">Get In Touch</h3>
          <div className="flex space-x-4">
            <a href="https://wa.me/+94778820000" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://xing.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-xing"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center">
          <p className="border-t border-gray-700 pt-4">&copy; All rights reserved © 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
