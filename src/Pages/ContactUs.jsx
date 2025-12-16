import React, { useState } from "react";
import { assets } from "../assets/asset";
import { Dot, Mail, MapPin, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

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

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <div className="pt-1 lg:pt-4 pb-6 overflow-hidden">
        {/* ----------------------- SECTION 0 (HERO / BREADCRUMB) ----------------------- */}
        <div className="relative h-screen overflow-hidden flex items-center justify-center mb-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30"
            style={{
              backgroundImage: `url(${assets.contact})`,
              backgroundAttachment: "fixed",
            }}
            aria-hidden="true"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/40 -z-20"
            aria-hidden="true"
          />

          {/* Soft center glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           w-[480px] h-[480px] bg-cyan-400/20 blur-[160px] rounded-full -z-10"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative text-center px-6">
            {/* Page Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-serif mb-6"
            >
              Contact Us
            </motion.h2>

            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 text-white/90 text-lg font-serif"
              aria-label="Breadcrumb"
            >
              <a href="/" className="hover:text-cyan-300 transition">
                Home
              </a>

              <Dot size={32} className="text-white/80" />

              <span className="text-red-600 font-semibold cursor-pointer">
                Contact Us
              </span>
            </motion.nav>
          </div>
        </div>
      </div>
      {/* -------------section 1 ----------------------- */}
      <div>
        <div className="grid md:grid-cols-2 gap-10 px-4 mb-12 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Contact Form */}
          <motion.form
            variants={fadeIn}
            className="bg-gray-100 p-4 rounded-2xl shadow-md space-y-5"
          >
            <div>
              <label className="block font-medium text-gray-800 text-lg font-serif mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-800 text-lg font-serif font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-800 text-lg font-serif font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                required
                placeholder="Type your message..."
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full font-serif bg-gradient-to-r from-indigo-500 to-teal-400 text-white py-3 rounded-lg hover:bg-blue-800 transition text-xl font-semibold"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            variants={fadeIn}
            className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 rounded-2xl shadow-md space-y-6"
          >
            <div className="flex items-start mt-10 gap-4">
              <div className=" mt-1">
                <MapPin className="text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg font-serif">
                  Location
                </h4>
                <p className="text-gray-600 text-md font-serif">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  delectus dolor, alias
                  molestiae.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneCall className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg font-serif">
                  Phone
                </h4>
                <p className="text-gray-600 text-md font-serif">
                  +1234567890000
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg font-serif">
                  Email
                </h4>
                <p className="text-gray-600 text-md font-serif">
                  celecindytravels@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg font-serif">
                  Support
                </h4>
                <p className="text-gray-600 text-md font-serif">
                  celecindy.com
                </p>
              </div>
            </div>
            <button
              onClick={openModal}
              className="flex gap-3 mt-6 py-3 px-6 font-serif bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              Connect With Us
              <img className="w-7" src={assets.whatsapp} alt="Social Icon" />
            </button>

            {/* Social Links */}
            <AnimatePresence>
              {showModal && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 60, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white w-[90%] sm:w-[420px] p-6 rounded-xl shadow-2xl relative"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center font-serif">
                      Our Social Media Handles
                    </h2>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-2 pb-8">
                      {socialLinks.map(({ icon: Icon, url, label }, i) => (
                        <motion.a
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          whileHover={{ scale: 1.15, rotate: 3 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 mx-auto bg-white/20 hover:bg-white transition duration-300 rounded-full backdrop-blur-md shadow-lg cursor-pointer"
                        >
                          <Icon size={28} className="text-gray-800" />
                        </motion.a>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={closeModal}
                        style={{ justifyContent: "center" }}
                        className="absolute right-2 -top-1  mt-2 rounded-full p-2 bg-gray-200 items-center"
                      >
                        <img className="h-4 w-4" src={assets.cross} alt="" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ContactUs;
