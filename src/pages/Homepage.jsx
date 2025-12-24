import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WorkFlow from "../components/WorkFlow";
import Personas from "../components/Personas";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
const Homepage = () => {
  return (
    <>
      <Hero />
      <Features />
      <WorkFlow />
      <Personas />
      <Testimonials />
      <Pricing />
    </>
  );
};

export default Homepage;
