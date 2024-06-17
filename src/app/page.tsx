import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/pexels-pixabay-207896.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-2xl text-center p-6">
        <h1 className="text-5xl sm:text-7xl font-bold mb-4">
          Discover the Future of Finance
        </h1>
        <p className="text-2xl sm:text-3xl mb-6">
          Get the latest financial insights and market trends
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;
