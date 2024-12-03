import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Importing an arrow icon
import backgroundImg from '../assets/bg2.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';

function Vacancie() {
    const vacancies = [
        { title: "Intern Software Engineer", link: "/intern-software-engineer" },
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
                <div className="w-full max-w-4xl">
                    <h1 className="mb-8 text-3xl font-bold text-center text-purple-600">Open Vacancies</h1>
                    <div className="p-6 ">
                        {vacancies.map((vacancy, index) => (
                            <Link to={vacancy.link} key={index} className="block mb-4">
                                <div className="flex items-center justify-between p-4 transition-colors shadow-md rounded-xl bg-purple-50 hover:bg-purple-100">
                                    <span className="text-lg font-medium text-gray-700">{vacancy.title}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 text-sm font-bold text-gray-600 bg-gray-200 rounded-full">Full Time</span>
                                        <FaArrowRight className="text-gray-500" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Vacancie;
