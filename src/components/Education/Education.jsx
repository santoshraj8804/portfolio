import React, { useState } from "react";
import { education } from "../../constants"; // Import education data

const Education = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === education.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? education.length - 1 : prev - 1));
  };

  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 shadow-lg shadow-purple-600/50"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Slide Container */}
      <div className="relative flex flex-col items-center">
        {/* Single Slide */}
        <div className="w-full max-w-3xl p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md 
          shadow-[0_0_10px_5px_rgba(130,69,236,0.4)] 
          hover:shadow-[0_0_20px_6px_rgba(130,69,236,0.6)] 
          transition-all duration-500 transform hover:scale-105">
          
          {/* Flex container for image and text */}
          <div className="flex items-center space-x-6">
            {/* School Logo/Image */}
            <div className="w-24 h-16 bg-white rounded-md overflow-hidden shadow-md shadow-purple-500/50">
              <img
                src={education[current].img}
                alt={education[current].school}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Degree, School, Date */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                  {education[current].degree}
                </h3>
                <h4 className="text-md text-gray-300">
                  {education[current].school}
                </h4>
              </div>
              <p className="text-sm text-gray-500 mt-2">{education[current].date}</p>
            </div>
          </div>

          <p className="mt-4 text-gray-400 font-bold">
            Grade: {education[current].grade}
          </p>
          <p className="mt-4 text-gray-400">{education[current].desc}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full max-w-3xl mt-6">
          <button
            onClick={prevSlide}
            className="px-6 py-2 bg-gray-800 hover:bg-purple-700 text-white rounded-xl font-semibold 
              shadow-md shadow-gray-700 hover:shadow-purple-600/50 transition-all duration-300"
          >
            ⬅ Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded-xl font-semibold 
              shadow-md shadow-purple-700 hover:shadow-purple-500/70 transition-all duration-300"
          >
            Next ➡
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {education.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-purple-600 shadow-md shadow-purple-500/70 scale-110"
                  : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
