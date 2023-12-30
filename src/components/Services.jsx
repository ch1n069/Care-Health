import React from "react";
// import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="max-w-[100%] h-[100%] bg-black mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 text-white">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <span className="block w-20 h-1 bg-white mt-5 mb-4"></span>{" "}
        {/* <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p> */}
        <h5 className="text-2xl font-bold">Nurses (RN’s and RPN’s)</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. iure laborum!
          Perferendis, id sed vero, facilis blanditiis illo aliquid soluta
        </p>
        <button className="mt-4">
          <Link to="/services">Learn More</Link>
        </button>{" "}
        <div className="mt-4">
          <h5 className="text-2xl font-bold">Personal Support Worker</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. illo
            aliquid soluta incidunt minima voluptate quae earum laboriosam
            obcaecati amet.
          </p>
          <button className="mt-4">Learn More</button>{" "}
        </div>
        <div className="mt-4 mb-4">
          <h5 className="text-2xl font-bold">Development Support Worker</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ad quos iure laborum! Perferendis, id sed vero,
          </p>
          <button className="mt-4">Learn More</button>{" "}
        </div>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2 mb-4">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/6098047/pexels-photo-6098047.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/3933030/pexels-photo-3933030.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="/"
        />
      </div>
    </div>
  );
};
export default Services;
