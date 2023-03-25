import React from "react";

export const Home = () => {
  const introText =
    "I am a highly motivated and results-driven new graduate with a Bachelors in Software Engineering. With a strong passion for web development, machine learning and data analysis I thrive in fast-paced and challenging environments, constantly seeking new opportunities to learn and grow.";
  return (
    <div
      name="Home"
      className="relative w-full h-screen bg-[#25274d] bg-gradient-to-br from-[#3e8de3] to-[#5ba0e947] rounded-3xl shadow-lg z-[49]"
    >
      <div className="max-w-screen-lg mx-auto px-8 flex flex-col justify-center h-full">
        <p className="sm:text-lg text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Xyron Brual
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-white">
          I'm a<span className="text-black"> Software Engineer</span>
        </h2>

        <p className="sm:text-lg font-bold text-white">{introText}</p>
      </div>
    </div>
  );
};
