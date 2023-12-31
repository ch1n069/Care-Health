import React from "react";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="">
      <div className="p-8">
        {/* create a banner black in color at the top */}
        <div className=" h-full w-full pt-8 p-2">
          <h4 className="text-4xl font-bold">About us</h4>
          <p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
