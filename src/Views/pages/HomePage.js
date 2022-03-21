import React from "react";
import { MainLayout } from "../../styles/Layout";
import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import Slider from "../components/custom/Slider";
import Affordable from "../components/Home/Affordable";
import Departments from "../components/Home/Departments";
import Doctors from "../components/Home/Doctors";
import Mission from "../components/Home/Mission";
import Services from "../components/Home/Services";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Slider />

      <Doctors />
      <Services />
      <Mission />
      <Departments />
      <Affordable />

      <Footer />
    </div>
  );
};

export default HomePage;
