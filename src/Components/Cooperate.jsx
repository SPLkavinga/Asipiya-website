import { Link } from 'react-router-dom';
import img5 from "../assets/choose2.png"

function Cooperate() {
    return ( 
        <>
            <div className="flex flex-col items-center justify-center mt-14 mb-14 ">
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
        </>
     );
}

export default Cooperate;