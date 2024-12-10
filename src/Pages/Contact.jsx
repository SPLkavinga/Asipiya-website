import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AiOutlineMessage, AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import backgroundImg from '../assets/Contact.png';
import NavBar from './../Components/NabBar';
import Footer from './../Components/Footer';

function Contact() {
  
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
  };

  return (
    <>
        <NavBar/>
      {/* Full-screen background section */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-auto bg-center bg-cover md:flex-row md:h-screen px-[120px]"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

        {/* Left Side: Text Content */}
        <motion.div className="z-10 w-full px-6 py-8 text-center text-white md:w-1/2 md:px-12 md:text-left"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={textVariants}
        >
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Let’s Level Up Your
          </h2>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Business Together
          </h2>
          <p className="mt-4 text-sm md:mt-6 md:text-lg w-[404px]">
            Welcome to Asipiya! For inquiries, reach out to us at <strong>info@asipiya.lk</strong>.
          </p>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div className="z-10 w-full px-6 py-8 mt-8 bg-white shadow-lg md:mt-3 rounded-xl md:w-1/2 lg:w-[692px]"
        initial={{ x: 100 }} // Start position off-screen to the right
        whileInView={{ x: 0 }} // Move to its final position
        transition={{ duration: 0.7, ease: "easeOut" }} // Smooth movement animation
        viewport={{ once: true }} // Trigger animation only once
        >
          <form>
            {/* First Row: First Name, Last Name, and Phone Number */}
            <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block mb-2 text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  placeholder="+94 70 2882 222"
                  className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                placeholder="Leave a Message here ....."
                className="w-full text-[14px] p-3 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="3"
              ></textarea>
            </div>

            {/* Interested Options */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-700">I'm interested in...</label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  className="p-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-purple-500 hover:text-white focus:outline-none"
                >
                  UI/UX Design
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-purple-500 hover:text-white focus:outline-none"
                >
                  Web Design
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-purple-500 hover:text-white focus:outline-none"
                >
                  Design System
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-purple-500 hover:text-white focus:outline-none "
                >
                  Software Solutions
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-purple-500 hover:text-white focus:outline-none"
                >
                  Other
                </button>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agree"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                You agree to our friendly{' '}
                <a href="#" className="text-purple-500 underline">
                  privacy policy.
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 text-lg text-white transition-all bg-purple-500 rounded-full hover:bg-purple-600"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
      <br />
      <br />

      <motion.div className="container px-[120px] mx-auto "
      initial={{ x: 100 }} // Start position off-screen to the right
      whileInView={{ x: 0 }} // Move to its final position
      transition={{ duration: 0.7, ease: "easeOut" }} // Smooth movement animation
      viewport={{ once: true }} // Trigger animation only once
      >
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-4 md:mt-0">
            {/* Section 1 */}
            <div>
            <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">Chat with Us</p>
            <p className="text-sm text-gray-500 w-[284px]">
                Reach out to us for inquiries, support, or collaborations. We’re here to assist you!
            </p>
            <p className="flex items-center mt-3 space-x-2 text-sm font-semibold">
                <AiOutlineMessage className="w-5 h-5 text-purple-600" />
                <span>Start Live Chat</span>
            </p>
            <Link
                to="/contact"
                className="flex items-center mt-3 space-x-2 text-sm text-purple-600"
                >
                <AiOutlineMail className="w-5 h-5" />
                <span className='font-semibold text-black'>Email Us</span>
            </Link>
            </div>

            {/* Section 2 */}
            <div>
            <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">Call Us</p>
            <p className="text-sm text-gray-500 w-[284px]">
                Call us for personalized assistance, inquiries, or support. We're just a phone call away!
            </p>
            <p className="flex items-center mt-3 space-x-2 text-sm font-semibold">
                <AiOutlinePhone className="w-5 h-5 text-purple-600" />
                <span>071 3324845</span>
            </p>
           
            </div>

            {/* Section 3 */}
            <div>
            <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">Visit Us</p>
            <p className="text-sm text-gray-500 w-[284px]">
                Visit us at our office for in-person consultations, services, or inquiries. We’d love to meet you!
            </p>
            <p className="flex items-center mt-3 space-x-2 text-sm font-semibold">
                <AiOutlineHome className="w-5 h-5 text-purple-600" />
                <span>Visit Us</span>
            </p>
            <p className="text-sm text-gray-500">
                123, kelaniya, Colombo, Sri Lanka
            </p>
            </div>

            {/* Section 4 */}
            <div>
      <p className="mb-3 text-sm font-semibold text-[#333333] text-opacity-80">Follow our social</p>
      <p className="mb-3 text-sm text-gray-500 w-[284px]">
        Follow us on social media for updates, news, and insights. Stay connected with our latest!
      </p>

      <div className="flex flex-col space-y-2">
        <Link
          to="/facebook"
          className="flex items-center space-x-2 text-sm text-purple-600"
        >
          <AiOutlineFacebook className="w-5 h-5" />
          <span>Facebook</span>
        </Link>

        <Link
          to="/instagram"
          className="flex items-center space-x-2 text-sm text-purple-600"
        >
          <AiOutlineInstagram className="w-5 h-5" />
          <span>Instagram</span>
        </Link>

        <Link
          to="/linkedin"
          className="flex items-center space-x-2 text-sm text-purple-600"
        >
          <AiOutlineLinkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </Link>
      </div>
    </div>
        </div>
        </motion.div>
        <br />
      <br />

      <Footer/>
    </>
  );
}

export default Contact;
