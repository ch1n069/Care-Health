import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Candice Health Care</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Empowering Health, Inspiring Lives
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            we are dedicated to fostering a community of wellness by delivering
            exceptional healthcare services that go beyond mere treatment.
          </p>
          <button className="bg-white text-black ">
            <Link to="/about-us">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
