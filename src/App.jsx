import React from "react";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";

const App = () => {
  return (
    <div>
      <div className="pb-14">
        <Navbar />
      </div>
      <Routes>
        <Route path="/"  element={<Home/>}/>  
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
    </div>
  );
};

export default App;
