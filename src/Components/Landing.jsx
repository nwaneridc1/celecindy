import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "./assets/asset";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("flights");

  const tabs = ["flights", "packages", "visa", "hotels"];

  return (
    <div className="grid md:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 min-h-screen justify-between bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
      {/* LEFT TEXT */}
      

    

      {/* TABS + CONTENT */}
      <div className="col-span-2 mt-14">
        {/* Tab Content */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {/* RIGHT STATS SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
              <p className="text-sm">Satisfied Travelers</p>
              <p className="text-3xl font-bold">50,000+</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
              <p className="text-sm">Countries Covered</p>
              <p className="text-3xl font-bold">120+</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
