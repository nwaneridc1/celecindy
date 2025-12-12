import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Hero";
import Newsletter from "./Components/Newsletter";
import Reviews from "./Components/Reviews";
import Faq from "./Components/Faqs";
import FeaturedPackages from "./Components/FeaturedPackages";
import Destinations from "./Components/Destinations";

const Home = () => {
  return (
    <div>
      <div>
        <Hero/>
        <Destinations/>   
        <FeaturedPackages/>
        <Reviews/>
        <Faq/>
        <Newsletter/>
        <div className=""><Footer /></div>
      </div>
    </div>
  );
};

export default Home;
