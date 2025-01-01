import React from "react";
import { useNavigate } from "react-router-dom";

function HomeContent() {
  const navigate = useNavigate();
  const goToTask = () => {
    navigate("/Mytask/task-list");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12">
        {/* Logo */}
        <div className="w-40 h-40 bg-primary flex items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <h1 className="font-mylogo text-white text-4xl">Erfolg</h1>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mt-6 leading-tight text-gray-900">
          "The Future Depends On What You Do Today"
        </h1>

        {/* Description Text */}
        <p className="text-lg text-center mt-4 text-gray-600 max-w-2xl">
          Our intuitive Erfolg platform is designed to help you organize your
          day, prioritize your most important tasks, and stay focused.
        </p>

        {/* Call to Action Button */}
        <button
          onClick={goToTask}
          className="mt-6 bg-primary text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-primary_light  transition duration-500"
        >
          Get Started
        </button>
      </div>
    </>
  );
}

export default HomeContent;
