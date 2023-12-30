import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Plan from "../components/Plan";
import Rooms from "../components/Rooms";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <Testimonials />
      <Services />
      <ImageSlider />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
