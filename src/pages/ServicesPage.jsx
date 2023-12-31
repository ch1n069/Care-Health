import React from "react";
// import Navbar from "../components/Navbar";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { LuFileBadge } from "react-icons/lu";
import ActiveSlider from "../components/ActiveSlider";
import Footer from "../components/Footer";
const ServicesPage = () => {
  const imageUrl =
    "https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg?auto=compress&cs=tinysrgb&w=1200";

  return (
    <div className="h-screen">
      <div className="relative h-[300px] w-full ">
        <img
          className="top-0 left-0 w-full h-full object-cover "
          src={imageUrl}
          alt="/"
        />
        <div
          className=" before:content-['']
          block
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-cyan-700
            before:to-cyan-300
            before:opacity-75
            before:z-[-5] absolute top-0 left-0 w-full h-full opacity-40"
        />
        <div className=" absolute top-0 left-0 w-full h-full  flex items-center justify-center text-white">
          <h4 className="font-bold text-4xl">Nurses (RN’s and RPN’s)</h4>
        </div>
      </div>
      <div className="p-2 mt-4 grid md:grid-cols-2 ">
        <div className="mb-4">
          <h4 className="font-bold text-4xl m-4">What we offer</h4>
          <p className="text-base m-4">
            Our registered and licensed nurses are dedicated to providing
            comprehensive care that exceeds expectations, whether it's within
            the hospital's clinical setting or the familiar comfort of your
            home. Their expertise extends across various domains, ensuring a
            holistic approach to your health and well-being.
          </p>
          <div className="bg-cyan-600 lg:mt-[40px] m-4 flex rounded-lg p-4 text-white shadow-xl ">
            <div className="border-green-300 flex-1 flex-row">
              <span className="font-bold text-2xl text-yellow-300">
                {" "}
                <FaFaceSmileBeam
                  className="text-yellow-400 font-extrabold"
                  size={34}
                />
                1000+
              </span>
              <h3 className="font-bold text-3xl">Happy Clients</h3>
            </div>
            <div className="flex-1">
              <LuFileBadge size={45} />

              <span className="text-3xl font-extrabold">10</span>
              <h4 className="font-extrabold text-2xl">Years experience</h4>
            </div>
          </div>
        </div>
        <div className="sm:mt-2">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/7551677/pexels-photo-7551677.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
          />
        </div>
      </div>
      <ActiveSlider />
      <Footer />
    </div>
  );
};

export default ServicesPage;
