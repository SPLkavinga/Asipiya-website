import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Importing an arrow icon
import backgroundImg from '../assets/Vacancy.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';

function Vacancie() {
    const vacancies = [
        { title: "Intern Software Engineer", link: "/intern" },
        { title: "Intern UI-UX Engineer", link: "/intern-ui-ux-engineer" },
        { title: "Digital Marketing Specialist Intern", link: "/digital-marketing-intern" },
        { title: "Quality Assurance Engineer", link: "/quality-assurance-engineer" },
        { title: "Search Engine Optimization Specialist", link: "/seo-specialist" },
        { title: "Customer Care Executive", link: "/customer-care-executive" },
        { title: "Business Analyst", link: "/business-analyst" },
        { title: "Graphic Designer", link: "/graphic-designer" },
        { title: "Associate Software Engineer", link: "/associate-software-engineer" },
        { title: "Intern Business Analyst", link: "/intern-business-analyst" },
    ];

    return ( 
        <>
            <NavBar />

            {/* Full-screen background section */}
            <div
                className="relative flex items-center justify-center w-full h-auto bg-center bg-cover md:h-screen"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                }}
            >
                {/* Darker overlay */}
                <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

                {/* Text content centered */}
                <div className="z-10 w-full px-6 py-8 text-center md:w-2/3 md:px-20">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Come and Innovate</h2>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">with Us</h2>
                    <p className="mt-4 text-sm text-white md:text-lg">
                        Be a part of our mission to revolutionize the future through the implementation of innovative and 
                        intelligent technological solutions. Join us on our quest to create products that have a meaningful 
                        impact, shaping a safer and more inclusive tomorrow.
                    </p>
                </div>
            </div>

            {/* Vacancies Section */}
            <div className="flex items-center justify-center min-h-screen px-4 py-10 md:p-20">
                <div className="w-full max-w-[1200px]">
                    <h1 className="mb-[8px] text-3xl font-bold text-center text-[#333333] ">Open <span className='text-purple-600'> Vacancies</span></h1>
                    <div className="h-1 max-w-screen-xl mt-1 bg-gray-600"></div>
                    <div className="p-6 ">
                        {vacancies.map((vacancy, index) => (
                            <Link to={vacancy.link} key={index} className="block mb-4">
                                <div className="flex items-center justify-between p-4 h-[84px] transition-colors border-2 border-[#D9D9D9] rounded-[30px] bg-[#F9F5FF] hover:bg-purple-100">
                                    <span className="text-[19.2px] font-medium text-[#333333]">{vacancy.title}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="px-5 py-3 text-[13.33px] font-bold text-gray-600 bg-white rounded-full">Full Time</span>
                                        <span className="px-8 py-4 text-[13.33px] font-bold text-gray-600 bg-white rounded-full"><FaArrowRight className="text-gray-500" /></span>
                                        
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="w-full max-w-[1200px] p-[102px] mb-5 bg-white border border-gray-300 rounded-md shadow-md ">
                    <h1 className="w-full mb-2 text-[38.81px] font-medium text-center ">Position Not Available?</h1>
                    <p className="mb-6 text-center font-normal text-gray-500 border-b-2 border-gray-400">
                    Just Apply And we’ll Get back To You!
                    </p>
                    <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium pl-2 text-gray-700" htmlFor="name">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="block w-full p-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-[14px]"
                        placeholder="Name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pl-2" htmlFor="email">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="block w-full p-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-[14px]"
                        placeholder="Email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pl-2" htmlFor="contactNumber">
                        Contact Number
                        </label>
                        <input
                        type="tel"
                        id="contactNumber"
                         className="block w-full p-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-[14px]"
                        placeholder="Contact Number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pl-2" htmlFor="nicNumber">
                        NIC Number
                        </label>
                        <input
                        type="text"
                        id="nicNumber"
                         className="block w-full p-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-[14px]"
                        placeholder="NIC Number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pl-2" htmlFor="linkedinProfile">
                        LinkedIn Profile
                        </label>
                        <input
                        type="url"
                        id="linkedinProfile"
                         className="block w-full p-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-[14px]"
                        placeholder="LinkedIn Profile"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pl-2" htmlFor="image">
                        Image
                        </label>
                        <input
                        type="file"
                        id="image"
                        className="block w-full p-4 py-4 mt-1 text-gray-500 border border-gray-300 text-[14px] rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pl-2" htmlFor="position">
                        Position
                        </label>
                        <input
                        type="text"
                        id="position"
                         className="block w-full p-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-[14px]"
                        placeholder="Position looking for"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 pl-2" htmlFor="message">
                        Message
                        </label>
                        <textarea
                        id="message"
                        rows="3"
                         className="block w-full p-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-[14px]"
                        placeholder="Your Message"
                        ></textarea>
                    </div>

                    <div className="text-end">
                        <button
                        type="submit"
                        className="px-6 py-2 w-[222px] font-medium text-white bg-purple-600 rounded-full shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Vacancie;
