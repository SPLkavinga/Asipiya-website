import { Link } from "react-router-dom";
import img5 from "../assets/choose2.png";

function Cooperate() {
  return (
    <>
      {/* Cooperate section */}
      <div className="flex flex-col items-center justify-center mt-[200px]">
        <p className="text-[39.81px] font-bold text-center text-black">
          LET'S DEVELOP,{" "}
          <span className="font-bold text-[#7D00C5]">LETS COOPERATE!</span>
        </p>
        <img className="mt-16 mb-5" src={img5} alt="Centered_Image" />
        <Link
          to="/your-target-path"
          className="w-[483px] h-[72px] font-bold text-[#333333] text-center transition bg-white border-2  border-[#333333] rounded-full text-[39.81px] pt-1"
        >
          Let's Talk
        </Link>
      </div>
    </>
  );
}

export default Cooperate;
