import React from "react";
import "./Home.css";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import FAQs from "../../components/FAQs";
import Values from "../../components/Values";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
