import React from "react";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="pb-16">
        <Navbar />
      </div>
      <Routes>
        {/* Homepage */}
        <Route path="/"  element={<Home/>}/>  
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
