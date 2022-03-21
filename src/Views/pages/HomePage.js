import React from "react";
import Footer from "../components/common/Footer";
import Slider from "../components/custom/Slider";
import Affordable from "../components/Home/Affordable";
import Departments from "../components/Home/Departments";
import Doctors from "../components/Home/Doctors";
import Mission from "../components/Home/Mission";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Slider />

      <Doctors />
      <Services />

      <Mission />
      <Departments />
      <Affordable />
      <Testimonial />

      <Footer />
    </div>
  );
};

export default HomePage;
