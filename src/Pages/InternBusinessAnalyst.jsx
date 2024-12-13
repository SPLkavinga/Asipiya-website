import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';

function InternBusinessAnalyst() {
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
                    <h2 className="text-4xl font-bold text-white md:text-5xl"> Business Analyst</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-2xl font-bold text-gray-800">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-gray-600"></div>
            <p className="mt-3 text-sm font-semibold text-gray-600">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="mt-3 text-sm font-semibold text-gray-600">
                We are seeking a motivated and detail-oriented Intern Business Analyst to join our dynamic team. 
                This role provides an excellent opportunity to gain hands-on experience in data analysis, 
                business process improvement, and strategic planning. If you are pursuing or have recently completed a 
                degree in Business, Economics, Finance, Computer Science, or a related field, we encourage you to apply.
            </p>
            <p className="mt-6 text-lg font-bold text-black">Key Responsibilities</p>

              {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Data Analysis: </span> 
                    Collect, analyze, and interpret data to support business decisions.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Report Preparation: </span> 
                    Prepare detailed reports and presentations for management and stakeholders.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Process Improvement: </span>
                    Identify areas for process improvements and contribute to the development of effective solutions.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Market Research: </span> 
                    Conduct market research to support business strategies and initiatives.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'> Documentation: </span>
                    Assist in documenting business processes and requirements.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Collaboration: </span>
                        Work closely with team members and stakeholders to achieve project goals.
                </p>
            </div>

            <p className="mt-10 text-lg font-bold text-black">Skills and Competencies</p>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'> Analytical Skills: </span>
                    Strong ability to analyze data and identify trends.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'> Communication Skills: </span>
                    Excellent verbal and written communication skills.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'> Technical Proficiency:</span>
                    Familiarity with Microsoft Office Suite (Excel, Word, PowerPoint) and basic understanding of 
                    data analysis tools and software.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'> Problem-Solving Skills:</span>
                    Ability to think critically and solve problems efficiently.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Detail-Oriented:</span>
                    Strong attention to detail to ensure accuracy in analysis and reporting.
                </p>
            </div>

            <p className="mt-10 text-lg font-bold text-black">Educational Background</p>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Pursuing or recently completed a degree in Business, Economics, Finance, Computer Science, 
                    or a related field.
                </p>
            </div>

            <p className="mt-10 text-lg font-bold text-black">Preferred Qualifications</p>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Basic understanding of business analysis frameworks and methodologies.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    Knowledge of data analysis tools and software.
                </p>
            </div>

            <p className="mt-10 text-lg font-bold text-black">Personal Attributes</p>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Eagerness to Learn:</span>
                    Enthusiasm for learning new concepts and applying them in real-world scenarios.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Adaptability:</span>
                     Ability to adapt to changing priorities and work in a fast-paced environment.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'>Initiative:</span>
                    Proactive approach to tasks and willingness to take on new challenges.
                </p>
            </div>

            
             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-sm font-semibold text-gray-600">
                    <span className='font-bold text-black'> Team Player:</span>
                    Ability to work collaboratively in a team environment.
                </p>
            </div>
            

            
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default InternBusinessAnalyst;
