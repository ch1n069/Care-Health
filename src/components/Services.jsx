import React from "react";
// import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="max-w-[100%] h-[100%] bg-black mx-auto my-15 pt-16 lg:mb-[30%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 text-white">
      <div className="lg:top-15 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <span className="block w-20 h-1 bg-white mt-5 mb-4"></span>{" "}
        {/* <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p> */}
        <h5 className="text-2xl font-bold">Nurses (RN’s and RPN’s)</h5>
        <p>
          Our team of dedicated Registered Nurses (RNs) and Registered Practical
          Nurses (RPNs) prioritize patient well-being, providing compassionate
          and personalized care.
        </p>
        <button className="mt-4 hover:bg-white hover:text-black">
          <Link to="/services">Learn More</Link>
        </button>{" "}
        <div className="mt-4">
          <h5 className="text-2xl font-bold">Personal Support Worker</h5>
          <p>
            Our team of dedicated Personal Support Workers (PSWs) delivers
            compassionate and attentive personal care, respecting the dignity
            and individuality of each client.
          </p>
          <button className="mt-4 hover:bg-white hover:text-black">
            <Link to="">Learn More</Link>
          </button>{" "}
        </div>
        <div className="mt-4 mb-4">
          <h5 className="text-2xl font-bold">Development Support Worker</h5>
          <p>
            Our Developmental Support Workers (DSWs) craft personalized support
            plans, catering to the unique needs and goals of individuals with
            developmental challenges.
          </p>
          <button className="mt-4 hover:bg-white hover:text-black">
            <Link to="/support-worker">Learn More</Link>
          </button>{" "}
        </div>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2 mb-4">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/7659862/pexels-photo-7659862.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
