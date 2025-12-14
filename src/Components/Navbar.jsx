import React, { useContext, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/asset";

// import { toast } from "react-toastify";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  //   const toggleTheme = () => {
  //     document.documentElement.classList.toggle("dark");
  //   };

  //  const logout = () => {
  //   localStorage.removeItem("token");
  //   setToken("");
  //   setFavItems({});
  //   toast.success("Logged Out Successfully");
  //   navigate("/login");
  // };

  return (
    <div className="font-ovo w-full fixed px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-3 flex items-center justify-between z-50 bg-white/50 dark:bg-black/60 backdrop-blur">
      <h1 className="text-2xl font-bold text-red-600 cursor-pointer font-serif">
        <a href="/#top">Celecindy</a>
      </h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-white bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent">
        <NavLink
          to={"/"}
          className="flex flex-col items-center text-gray- 700  hover:text-gray-900 no-underline"
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className="flex flex-col items-center text-gray- 700  hover:text-gray-900 no-underline"
        >
          About Us
        </NavLink>
        <NavLink
          to={"/services"}
          className="flex flex-col items-center text-gray- 700  hover:text-gray-900 no-underline"
        >
          Services
        </NavLink>
        {/* <NavLink className="flex flex-col items-center text-gray- 700  hover:text-gray-900 no-underline">
          Services
        </NavLink> */}
        <NavLink
          to={"/contact"}
          className="flex flex-col items-center text-gray- 700  hover:text-gray-900 no-underline"
        >
          Contact Us
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <div className="group relative">
          <Link to={"/"}>
            <img
              // onClick={() => (token ? null : navigate("/login"))}

              src={assets.profile}
              className="w-6 cursor-pointer"
              alt="User Menu"
            />
          </Link>

          {/* dropdown */}
          <div className="absolute right-0 hidden group-hover:block bg-slate-100 rounded shadow-md py-3">
            <p
              //   onClick={logout}
              className="cursor-pointer hover:text-gray-400 py-1 px-4"
            >
              Logout
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/+16138693234?text=Hello,%2C%20I%20am%20reaching%20out%20from%20your%20website,%20can%I%20know%20more%20about%20your%20serices?%20..."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full ml-4 hover:bg-green-50 hover:text-black transition dark:border-white/50"
        >
          Contact Us
          <img src={assets.whatsapp} className="w-6" alt="WhatsApp" />
        </a>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="block md:hidden ml-3">
          <img src={assets.menu} className="w-8 dark:hidden" alt="Menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed md:hidden flex flex-col py-20 px-5 top-0 bottom-0 right-0 w-[35vh] z-50 h-screen gap-5 bg-white shadow-2xl dark:bg-gradient-to-r from-black to-blue-600 dark:text-white transition-transform duration-500 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={closeMenu}
          className="absolute right-6 top-6 cursor-pointer"
        >
          <img src={assets.cross} className="w-6" alt="Close" />
        </div>

        <NavLink onClick={closeMenu} to={"/"}>
          Home
        </NavLink>
        <NavLink to={"/about"} onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink onClick={closeMenu} to={"/services"}>
          Our Services
        </NavLink>
        {/* <NavLink onClick={closeMenu}>Services</NavLink> */}
        <NavLink onClick={closeMenu} to={"/contact"}>
          Contact Us
        </NavLink>
        <a
          href="https://wa.me/+16138693234?text=Hello,%2C%20I%20am%20reaching%20out%20from%20your%20website,%20can%I%20know%20more%20about%20your%20serices?%20..."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-2 py-2 mt-4 border border-gray-500 rounded-full hover:bg-green-50 hover:text-black transition dark:border-white/50"
        >
          Contact Us
          <img src={assets.whatsapp} className="w-6" alt="WhatsApp" />
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
