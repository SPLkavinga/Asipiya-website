import React, { useState } from "react";
import choose from "../assets/choose.png";

function WhyChooseUs() {
  const features = [
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients by tailoring solutions to their unique needs, ensuring satisfaction at every step.",
    },
    {
      title: "Innovation and Technology",
      description:
        "We leverage cutting-edge technology to deliver innovative solutions that drive success.",
    },
    {
      title: "Experienced Team",
      description:
        "Our team of seasoned professionals brings expertise and dedication to every project.",
    },
    {
      title: "Customization and Flexibility",
      description:
        "We offer highly flexible solutions, customized to align with your business goals.",
    },
    {
      title: "Results-Driven Solutions",
      description:
        "Our focus is on delivering measurable results that propel your business forward.",
    },
    {
      title: "Transparent Communication",
      description:
        "We maintain clear and open communication to foster trust and collaboration.",
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(null);

  function handleFeatureClick(index) {
    if (selectedFeature === index) {
      setSelectedFeature(null);
    } else {
      setSelectedFeature(index);
    }
  }

  function renderFeatures() {
    return features.map((feature, index) => {
      const isActive = selectedFeature === index;
      return (
        <li
          key={index}
          className="pb-4 text-lg text-gray-700 border-b border-gray-300"
        >
          <button
            onClick={() => handleFeatureClick(index)}
            className={
              "flex items-center w-full text-left " +
              (isActive ? "font-bold text-blue-600" : "")
            }
          >
            <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-3 h-3 text-black"
              >
                <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
              </svg>
            </span>
            {feature.title}
          </button>
          {isActive && (
            <p className="mt-2 ml-8 text-sm text-gray-600">
              {feature.description}
            </p>
          )}
        </li>
      );
    });
  }

  return (
    <div className="flex flex-col items-center justify-between max-w-6xl p-4 mx-auto mb-10 space-y-8 md:space-y-12">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
        Why <span className="text-purple-600">Choose Us?</span>
      </h2>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={choose}
            alt="Person working"
            className="w-full max-w-md rounded-lg"
          />
        </div>
        {/* Feature List */}
        <div className="flex items-center w-full md:w-1/2">
          <ul className="space-y-4">{renderFeatures()}</ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
