import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';

function CustomerCareExecutive() {
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
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Customer Care Executive</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-2xl font-bold text-gray-800">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-gray-600"></div>
            <p className="mt-3 text-sm font-semibold text-gray-600">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="mt-3 text-sm font-semibold text-gray-600">
                This is a full-time on-site role for a Customer Care Executive located in Colombo. The Customer Care Executive 
                will be responsible for providing customer support, ensuring customer satisfaction, addressing customer 
                service inquiries and concerns, communicating effectively with customers, and driving sales.


            </p>
            <p className="mt-3 text-sm font-semibold text-gray-600">Qualifications:</p>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Customer Support, Customer Satisfaction, and Customer Service skills
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Proficient in working with popular keyword tools such as Screaming Frog, Ahrefs, SEMRush, and SimilarWeb.
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Excellent communication skills, both written and verbal
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Experience in sales and achieving sales targets
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Ability to handle customer inquiries and concerns in a professional and timely manner
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Able to work under pressure and tight deadlines
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Good problem-solving and analytical skills
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    A bachelor's degree in Business Administration, Marketing, or a related field is preferred
                </p>
            </div>

            
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default CustomerCareExecutive ;
