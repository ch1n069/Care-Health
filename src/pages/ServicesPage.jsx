import React from "react";
// import Navbar from "../components/Navbar";

const ServicesPage = () => {
  const imageUrl =
    "https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg?auto=compress&cs=tinysrgb&w=1200";

  return (
    <div className="h-screen ">
      <div className="relative h-[300px] w-full ">
        <img
          className="top-0 left-0 w-full h-full object-cover"
          src={imageUrl}
          alt="/"
        />
        <div className="bg-black absolute top-0 left-0 w-full h-full opacity-30" />
        <div className=" absolute top-0 left-0 w-full h-full  flex items-center justify-center text-white">
          <h4>we are her</h4>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
