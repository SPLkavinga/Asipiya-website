import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';

function Intern() {
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
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Intern</h2>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Software Engineer</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-2xl font-bold text-gray-800">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-gray-600"></div>
            <p className="mt-3 text-sm font-semibold text-gray-600">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="mt-3 text-sm font-semibold text-gray-600">
                Ready to make an impact? We are looking for Software Engineer to join our dynamic team.
            </p>
            <p className="mt-5 text-lg font-bold text-black">Requirements:</p>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">Web Markup Proficiency:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                Demonstrated understanding of web markup, including HTML5 and CSS3.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">Front-End Technologies:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Basic knowledge of Bootstrap and Tailwind CSS.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">Design Principles:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Strong knowledge of design patterns and Object-Oriented Programming (OOP) concepts.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">UI/UX Understanding:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Familiarity with Figma design tools.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">JavaScript Expertise:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Good understanding of advanced JavaScript libraries and frameworks, particularly ReactJS.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">Development Methodologies:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Basic knowledge of Agile and waterfall methodologies.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">Version Control:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Proficient understanding of code versioning tools, such as Git.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">Analytical Skills:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Strong problem-solving skills with meticulous attention to detail.
                </p>
            </div>
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default Intern;
