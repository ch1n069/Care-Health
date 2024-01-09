import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="bg-black bg-opacity-55 absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20 hover:cursor-pointer">
        <Link to="">Health Care</Link>
      </h1>
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <Link className="font-bold text-3xl p-8">Home</Link>
          <Link to="/offers" className="font-bold text-3xl p-8">
            Offers
          </Link>
          <Link to="about-us" className="font-bold text-3xl p-8">
            About us
          </Link>
          <Link className="font-bold text-3xl p-8">Testimonials</Link>
          <Link className="font-bold text-3xl p-8">Careers</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
