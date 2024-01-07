import React from "react";

const DevelopmentSupportworker = () => {
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
          before:from-blue-700
          before:to-blue-300
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
        </div>
        <div className="sm:mt-2">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/7551677/pexels-photo-7551677.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
          />
        </div>
      </div>
      <h4 className="text-center font-bold text-3xl mt-4">Services</h4>
    </div>
  );
};

export default DevelopmentSupportworker;
