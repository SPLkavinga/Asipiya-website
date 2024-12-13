import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';

function GraphicDesigner() {
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
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Graphic Designer</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-2xl font-bold text-gray-800">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-gray-600"></div>
            <p className="mt-3 text-sm font-semibold text-gray-600">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="mt-3 text-sm font-semibold text-gray-600">Position Overview:</p>
            <p className="mt-3 text-sm font-semibold text-gray-600">
                Craft visually compelling designs from home, balancing professional and personal commitments. 
                Work on diverse projects, contributing to our brand's visual excellence.
            </p>
            <p className="mt-8 text-lg font-bold text-black">Responsibilities:</p>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Design captivating graphics for digital and print, ensuring brand consistency.
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Develop engaging vector illustrations and edit compelling video content.
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Collaborate with teams, meet deadlines, and incorporate feedback effectively.
                </p>
            </div>

            <p className="mt-8 text-lg font-bold text-black">Requirements:</p>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Proficiency in Adobe Photoshop and Illustrator; experience in video editing
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Strong portfolio showcasing versatile design projects.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Excellent understanding of design principles and typography.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Self-motivated, with strong communication and collaboration skills.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Part-time availability with a flexible schedule.
                </p>
            </div>
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default GraphicDesigner;
