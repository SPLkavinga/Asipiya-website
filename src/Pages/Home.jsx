import NavBar from './../Components/NabBar';
import Footer from './../Components/Footer';
import { Link } from 'react-router-dom';
import img1 from '../assets/image 27.png';
import img2 from '../assets/img1.png';
import img3 from "../assets/rafiki.png"
import img4 from "../assets/Group 201.png"
import img5 from "../assets/amico.png"
import Project1 from "../assets/project 1.jpg"
import Project2 from "../assets/project 2.jpg"
import Project3 from "../assets/project 3.jpg"
import backgroundImg from '../assets/background.png';
import frame from '../assets/Frame 4.png'


function Home() {
    const features = [
        {
            title: "Micro Finance",
            description: "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
            icon: "🚀", // Replace this with an actual image if necessary
        },
        {
            title: "Prawning System",
            description: "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
            icon: "🖥️", // Replace this with an actual image if necessary
        },
        {
            title: "Leasing System",
            description: "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
            icon: "📱", // Replace this with an actual image if necessary
        },
        {
            title: "ERP Solutions",
            description: "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
            icon: "📊", // Replace this with an actual image if necessary
        },
        {
            title: "Invoice System",
            description: "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet.",
            icon: "📄", // Replace this with an actual image if necessary
        },
    ];
    return (
        <>
            <NavBar />

            {/* Full-screen background section */}
            <div
                className="relative flex flex-col md:flex-row-reverse items-center justify-center w-full h-auto bg-cover bg-center md:h-[450px]"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

                {/* Image on the right side */}
                <div className="w-full md:w-1/2 h-[250px] flex justify-center md:justify-start mb-4 md:mb-0 z-10 mt-5 md:ml-32">
                    <img className="object-cover rounded-lg shadow-md" src={img1} alt="Placeholder" />
                </div>

                {/* Text content on the left side */}
                <div className="z-10 w-full px-4 py-8 text-center md:w-1/2 md:pr-8 md:text-left md:px-52 md:py-0">
                    <h2 className="text-4xl font-bold text-white">Empowering Lives</h2>
                    <h2 className="text-4xl font-bold text-white">Globally</h2>
                    <h2 className="text-4xl font-bold text-white">With Trusted Microfinance</h2>
                    <h2 className="mb-4 text-4xl font-bold text-white">Solutions.</h2>
                    <p className="mb-8 text-base text-white">
                        Empowering Businesses with Scalable and Flexible Microfinance Solutions.
                    </p>

                    {/* Button below the text content */}
                    <Link
                        className="py-2 font-bold text-white bg-purple-600 border-2 rounded-full px-7"
                        to="/About"
                    >
                        Let's get started
                    </Link>
                </div>
            </div>
            <br />

            <div>
                <p className='text-5xl font-bold text-center'>Our <span className='text-purple-600'> Services</span> </p>
                <p className='mt-4 text-center text-slate-500'>
                    At Asipiya Soft Solutions, we specialize in designing scalable microfinance solutions that drive your 
                    business forward in the digital era.  
                </p>
                <p className='text-center text-slate-500'>Partner with us to unlock innovation, boost efficiency, and achieve sustainable growth.</p>
                <p className='text-center text-slate-500'>Let’s shape 
                the future of your enterprise together.</p>
            </div>



            {/*Service section */}
            <div className="py-12 bg-purple-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">
                    Explore Our Services
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 text-center transition rounded-lg shadow-md bg-purple-50 hover:shadow-lg"
                        >
                            <div className="mb-4 text-5xl">{feature.icon}</div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-12 text-center">
                    <button className="px-6 py-1 text-lg font-semibold text-white transition bg-purple-600 rounded-full hover:bg-purple-700">
                        Learn More
                    </button>
                </div>
            </div>
        </div>



        {/* Micro Finance section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row-reverse md:p-10">
            <div className="w-[350px] h-[350px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start md:mr-32">
                <img
                    className="object-cover rounded-lg shadow-md md:mr-52"
                    src={img2}
                    alt="Placeholder"
                />
            </div>

            <div className="w-full mx-32 text-center md:w-1/2 md:pr-8 md:text-left">
                <h2 className="text-4xl font-bold text-purple-600 md:mb-2">Revolutionary </h2>
                <h2 className="text-4xl font-bold md:mb-2">Microfinance Solutions</h2>
                <h2 className="mb-4 text-4xl font-bold">Development</h2>
                <p className="text-base">
                    Building scalable microfinance solutions, ready-to-launch tools, and applications powered by cutting-edge 
                    technologies for financial empowerment.
                </p>
            </div>
        </div>

        {/* Language icon section */}
        <div>
            <img className="w-full h-auto mt-4 mb-8" src={frame} alt="" />
        </div>

        {/* Latest Project Section*/}
        <div>
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:text-4xl">
                Our Latest Project
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mb-10 md:gap-24">
                {[
                    { src: Project1, alt: "Project 1", name: "Micro Services", link: "/project1" },
                    { src: Project2, alt: "Project 2", name: "Project Name 2", link: "/project2" },
                    { src: Project3, alt: "Project 3", name: "Project Name 3", link: "/project3" },
                ].map((project, index) => (
                    <div key={index} className="relative w-full group sm:w-64 md:w-80 lg:w-80">
                        <img 
                            src={project.src} 
                            alt={project.alt} 
                            className="w-full h-auto transition duration-300 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
                            <div className="text-center">
                                <p className="mb-2 text-lg font-semibold text-white">{project.name}</p>
                                <a 
                                    href={project.link} 
                                    className="px-4 py-2 text-white transition duration-300 bg-gray-800 rounded-md hover:bg-gray-700"
                                >
                                    See More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



        {/* Clients Review Section*/}
        <div className="flex flex-col items-center justify-between p-6 bg-white md:flex-row md:p-12">
            {/* Left: Review Card */}
            <div className="flex justify-center w-full md:w-1/2 md:justify-start md:ml-36">
                <div className="p-6 bg-white shadow-lg rounded-lg w-[90%] md:w-[75%]">
                <h3 className="text-lg font-semibold">Samantha Payne</h3>
                <p className="text-sm text-gray-500">Graphic Designer</p>
                <div className="flex items-center mt-2 mb-4">
                    {/* Star Ratings */}
                    <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="text-sm text-gray-700">
                    Your company has been great at keeping me in work, they always line
                    something else up.
                </p>
                <p className="mt-4 text-xs text-gray-400">23 Nov 2021</p>
                </div>
            </div>

            {/* Right: Title and Description */}
            <div className="w-full mt-8 text-center md:w-1/2 md:text-left md:mt-0 md:m-20">
                <h2 className="text-3xl font-bold">
                <span className="text-purple-600">Client’s</span> Reviews
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                Our clients trust us for delivering reliable, innovative microfinance
                solutions that drive growth and success across industries worldwide.
                </p>
            </div>
        </div>


        {/* Countries serve section */}
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:p-10 ">
                <div className="w-[350px] h-[350px] md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <img className="object-cover rounded-lg shadow-md md:ml-40"
                    src={img3}
                    alt="Placeholder"/>
                </div>

                
                <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left md:ml-14 md:m-10">
                    <h2 className="text-4xl font-bold "><span className='text-purple-600'>Countries </span>We Serve</h2>
                    <p className="mt-4 text-base">
                        We offer innovative microfinance solutions in Dubai, the United States, Canada, Singapore, Sri lanka and 
                        Australia, empowering businesses and communities with reliable financial support.
                    </p>
                    <img className='h-10 mt-6' src={img4} alt="" />
                </div>
            </div>
            


            {/* Cooperate section */}
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <p className="text-4xl font-bold text-center text-black">
                    LET'S DEVELOP, <span className="font-bold text-purple-600">LETS COOPERATE!</span>
                </p>
                <img className="mt-5 mb-5" src={img5} alt="Centered_Image" />
                <Link
                    to="/your-target-path"
                    className="px-8 py-2 font-bold text-black transition bg-white border border-black rounded-full"
                >
                    Let's Talk
                </Link>
            </div>





            <Footer />
        </>
    );
}

export default Home;
