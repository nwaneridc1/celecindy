import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebook,
    url: "https://facebook.com/celecindytravels",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/celecindytravels",
    label: "Instagram",
  },
  {
    icon: FaTwitter,
    url: "https://twitter.com/celecindytravels",
    label: "Twitter",
  },
  {
    icon: FaTiktok,
    url: "https://tiktok.com/@celecindytravels",
    label: "TikTok",
  },
];

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-indigo-500 to-teal-400 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-20 pb-10"
    >
      {/* Top Section */}
      <div className="flex flex-col sm:grid grid-cols-[1.5fr_1fr_1.5fr] gap-20">
        {/* Logo + About */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 max-w-3xl relative text-white"
        >
          <h1 className="font-bold text-3xl lg:text-4xl leading-tight font-serif drop-shadow-lg">
            <span className="text-red-500">Celecindy </span>Travels
          </h1>

          <p className="font-serif font-medium leading-relaxed text-gray-100/90">
            Your trusted partner for study, work, visit, and immigration
            support. We guide you through every step of your journey with expert
            assistance, ensuring a smooth, stress-free and successful travel
            experience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, url, label }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white hover:bg-white/10 transition duration-300 rounded-full backdrop-blur-sm shadow-lg cursor-pointer"
              >
                <Icon size={20} className="text-gray-800"/>
              </motion.a>
            ))}
          </div>

          {/* Glow Animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-6 -bottom-16 w-40 h-40 rounded-full bg-white/5 blur-3xl"
          />
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-center font-serif text-white"
        >
          <p className="font-bold text-2xl lg:text-4xl mb-5 drop-shadow-lg">
            Company
          </p>

          <ul className="flex flex-col gap-1 cursor-pointer">
            {[
              { name: "Home", to: "#" },
              { name: "About Us", to: "/" },
              { name: "Our Services", to: "/" },
              { name: "Privacy Policy", to: "/" },
              { name: "Our Socials", to: "/" },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-2 font-medium"
              >
                <a className="hover:text-black">{item.name}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Support Links */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col justify-center font-serif text-white"
        >
          <p className="font-bold text-2xl lg:text-4xl mb-5 drop-shadow-lg">
            Customer Support
          </p>

          <ul className="flex flex-col gap-1 cursor-pointe">
            {[
              "Account",
              "Frequently Asked Questions",
              "Reviews",
              "Contacts",
              "Did You Know?",
            ].map((name, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-2 font-medium hover:text-black"
              >
                {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="my-5"
      >
        <hr className="border-white" />
      </motion.div>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center pt-8 font-serif text-white hover:text-black"
      >
        © {new Date().getFullYear()} Celecindy Travel's. All Rights Reserved.
      </motion.p>
    </motion.div>
  );
};

export default Footer;
