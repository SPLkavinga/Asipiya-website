import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';

function QAEngineer() {
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
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Quality Assurance Engineer</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-2xl font-bold text-gray-800">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-gray-600"></div>
            <p className="mt-3 text-sm font-semibold text-gray-600">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="mt-3 text-sm font-semibold text-gray-600">
                This is a full-time Quality Assurance Engineer role with Asipiya Soft Solutions. 
                The Quality Assurance Engineer will be responsible for ensuring quality and proper functionality 
                of software applications. The Engineer will be expected to conduct manual testing and develop test 
                cases to ensure that software applications are performing as expected. This is a hybrid role, 
                located in Colombo with some flexibility to work from home.
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-600">Qualifications:</p>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Quality Assurance and Software Testing skills
                </p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Ability to execute tests and develop test cases
                </p>
            </div>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Manual Testing skills
                </p>
            </div>


            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">Relevant qualifications and skills that would be beneficial include:</p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Bachelor's degree in Computer Science or related field
                </p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Experience with automation testing tools
                </p>
            </div>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Experience in Agile development environments
                </p>
            </div>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Excellent written and verbal communication skills
                </p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-sm text-gray-600">
                    Ability to work independently and in a team environment
                </p>
            </div>

            
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default QAEngineer;
