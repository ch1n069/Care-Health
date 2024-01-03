import React from "react";
import Footer from "../components/Footer";
import { MdHealthAndSafety } from "react-icons/md";
import { GiHealthPotion } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";

const AboutPage = () => {
  return (
    <div className="">
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* create a banner black in color at the top */}
        <div className="pt-8 ">
          <h4 className="text-4xl font-bold">About us</h4>
          <p className="text-base text-gray-500">
            With a steadfast commitment to your well-being, we strive to create
            a nurturing environment where every individual is valued and
            supported throughout their healthcare journey. Our team of
            experienced professionals stands united in their dedication to
            providing personalized care that exceeds expectations, blending
            cutting-edge technology with a human touch. We believe in empowering
            individuals to take charge of their health, guiding them with
            knowledge, expertise, and unwavering support. Your health is our
            priority, and we take pride in being the cornerstone of your journey
            towards a healthier, happier life."
          </p>
          <h4 className="text-4xl font-bold">History</h4>
          <p className="text-base text-gray-500">
            Founded 2023, Robust health services began as a beacon of hope and
            healing in the realm of healthcare. Rooted in a vision to
            revolutionize the wellness experience, our humble beginnings marked
            the inception of a transformative journey. From day one, our focus
            has been to deliver healthcare services that surpass conventional
            standards. Driven by a commitment to compassion, innovation, and
            excellence, we swiftly gained recognition for offering the best
            health care services and advancements, and we were awarded a
            certificate for that. These milestones laid the foundation for our
            evolution into a trusted healthcare partner. In an ever-evolving
            landscape, we navigated through significant shifts in the healthcare
            industry by embracing change and innovation.
          </p>
        </div>
        <div className="pt-8 p-2">
          <img
            className="object-cover w-full h-full mt-3 "
            src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
          />
        </div>
      </div>
      {/* three cards section */}
      <h4 className="text-center px-8 pb-2 text-4xl font-bold">Our Values</h4>
      <div className="px-8 grid grid-col-1 gap-4 sm:grid-cols-3">
        <div className="bg-blue-100   flex flex-col items-center rounded-lg  shadow-lg ">
          <span className="text-center">
            <MdHealthAndSafety
              className="text-10xl text-red-500 mt-4"
              size={85}
            />
          </span>
          <h2 className="font-bold">Compassionate Care</h2>
          <p className="text-center text-gray-600">
            We believe in creating an environment where every individual,
            regardless of their background or circumstances, feels genuinely
            heard, understood, and valued. Our approach to care extends beyond
            clinical expertise; it involves actively listening, empathizing with
            concerns, and fostering a compassionate connection..
          </p>
        </div>
        <div className="bg-blue-100   flex flex-col items-center rounded-lg  shadow-lg ">
          <span className="text-center">
            <LuHeartHandshake
              className="text-10xl text-red-500 mt-4"
              size={85}
            />
          </span>
          <h2 className="font-bold">Collaboration</h2>
          <p className="text-center text-gray-600">
            We believe in the power of teamwork and collaboration. By fostering
            partnerships among healthcare professionals, we deliver
            comprehensive care for our patients.
          </p>
        </div>
        <div className="bg-blue-100   flex flex-col items-center rounded-lg  shadow-lg ">
          <span className="text-center">
            <GiHealthPotion className="text-10xl text-red-500 mt-4" size={85} />
          </span>
          <h2 className="font-bold">Empowerment</h2>
          <p className="text-center text-gray-600 mt-4 mb-6">
            We believe in creating an environment where every individual,
            regardless of their background or circumstances, feels genuinely
            heard, understood, and valued. Our approach to care extends beyond
            clinical expertise; it involves actively listening, empathizing with
            concerns, and fostering a compassionate connection..
          </p>
        </div>
      </div>
      {/* team section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
