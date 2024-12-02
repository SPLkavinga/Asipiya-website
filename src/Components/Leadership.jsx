import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import member12 from '../assets/member1.jpg'
import member22 from '../assets/member2.jpg'
import member32 from '../assets/member3.jpg'

const Leadership = ({ member1, member2, member3 }) => {
  return (
    <div className="w-full px-6 py-8 bg-gray-100">
      <p className="text-2xl font-bold text-center text-gray-800">
        Meet Our <span className="font-bold text-purple-600">Leadership</span>
      </p>

      <div className="flex flex-wrap justify-center gap-24 mt-8 md:mt-16">
        {/* Member 1 */}
        <div className="relative group w-[300px]">
          <img
            className="w-full h-[260px] rounded-lg object-cover"
            src={member12}
            alt="Member 1"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 text-white transition-opacity duration-300 rounded-b-lg opacity-0 bg-black/50 backdrop-blur-sm group-hover:opacity-100">
            {/* Name and Job Title */}
            <div>
              <p className="text-lg font-bold">John Doe</p>
              <p className="text-sm">Software Engineer</p>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="relative group w-[300px]">
          <img
            className="w-full h-[260px] rounded-lg object-cover"
            src={member22}
            alt="Member 2"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 text-white transition-opacity duration-300 rounded-b-lg opacity-0 bg-black/50 backdrop-blur-sm group-hover:opacity-100">
            <div>
              <p className="text-lg font-bold">Jane Smith</p>
              <p className="text-sm">Product Manager</p>
            </div>
            <div className="flex gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Member 3 */}
        <div className="relative group w-[300px]">
          <img
            className="w-full h-[260px] rounded-lg object-cover"
            src={member32}
            alt="Member 3"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 text-white transition-opacity duration-300 rounded-b-lg opacity-0 bg-black/50 backdrop-blur-sm group-hover:opacity-100">
            <div>
              <p className="text-lg font-bold">Alice Johnson</p>
              <p className="text-sm">UX Designer</p>
            </div>
            <div className="flex gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
