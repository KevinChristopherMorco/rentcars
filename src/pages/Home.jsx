import React from "react";
import Hero from "../components/home/Hero";
import Steps from "../components/home/Steps";
import Service from "../components/home/Service";
import FeaturedCars from "../components/home/FeaturedCars";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Service />
      <FeaturedCars />
      <Testimonials />
    </>
  );
};

export default Home;
