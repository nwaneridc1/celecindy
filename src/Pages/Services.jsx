import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import Reviews from "../Components/Reviews";
import { assets } from "../assets/asset";
import { Dot, Icon } from "lucide-react";
import WhyChooseUs from "../Components/WhychoosUs";

import { Helmet } from "react-helmet";

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

<Helmet>
  <title>About Celecindy Travels | Visa & Travel Consultation Experts</title>

  <meta
    name="description"
    content="Celecindy Travels is a Canada-based travel and migration consultancy offering visa assistance, study abroad guidance, and international travel planning. We plan, You travel."
  />

  <meta
    name="keywords"
    content="Celecindy Travels, visa consultancy, travel agency, study abroad, migration services, Canada travel consultant, visa assistance, international travel planning"
  />

  <meta name="author" content="Celecindy Travels" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph (for social sharing) */}
  <meta property="og:title" content="Celecindy Travels – We Plan, You Travel" />
  <meta
    property="og:description"
    content="Trusted visa consultation, study abroad, and international travel services. Seamless planning from start to finish."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/seo-banner.jpg" />
</Helmet>;

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const Services = () => {
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
              backgroundImage: `url(${assets.services})`,
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
              Our Services
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

              <span className="text-red-600 font-semibold cursor-pointer">Our Services</span>
            </motion.nav>
          </div>
        </div>

        {/* ---------- SECTION 1 ---------- */}
        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-16 gap-5 items-center mb-16">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="order-2 md:order-1"
            >
              <img
                src={assets.study}
                alt="About Elion Cars"
                className="w-full max-h-[83vh] object-cover rounded-xl shadow-md"
              />
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.3)}
              className="order-1 md:order-2"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif mb-3">
                Empowering Global Visions
              </p>
              <p className="text-gray-600 mx-auto mb-5 font-serif text-md leading-relaxed">
                At <span className="font-bold">Celecindy Travels</span>, we are
                committed to making global travel, study, and migration
                opportunities accessible, seamless, and stress-free. With our
                many years os experience, we operate with a strong international
                perspective, connecting clients to trusted global partners and
                verified institutions.{" "}
                <p className="mt-3">
                  Driven by excellence and transparency, we guide individuals
                  and families through every stage of their journey. From travel
                  planning and study pathways to visa assistance and settlement
                  support. We remove complexity, uncertainty, and unnecessary
                  delays, ensuring every process is handled with professionalism
                  and care.
                </p>
                <p className="mt-3">
                  At Celecindy Travels, we believe your journey should begin
                  with confidence. That’s why we focus on personalized planning,
                  reliable guidance, and end-to-end support tailored to your
                  goals.
                </p>
                Our promise is simple:{" "}
                <span className="font-bold italic">“We plan, You travel.”</span>
              </p>

              {/* Button */}
              <button
                onClick={openModal}
                className="flex font-serif gap-3 mt-6 py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Our Media Handles
                <img className="w-7" src={assets.whatsapp} alt="Social Icon" />
              </button>

              {/* Modal */}
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
                      <h2 className="text-xl font-bold text-gray-800 mb-10 text-center font-serif">
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
        </motion.section>

        {/* ---------- SECTION 2 ---------- */}
        <div className="relative overflow-hidden mb-12">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30"
            style={{
              backgroundImage: `url(${assets.study})`,
              backgroundAttachment: "fixed",
            }}
            aria-hidden="true"
          />

          {/* Dark overlay for contrast */}
          <div
            className="absolute inset-0 bg-black/30 -z-20"
            aria-hidden="true"
          />

          {/* Ambient floating lights */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <div className="absolute left-1/4 -top-40 w-[520px] h-[520px] rounded-full bg-cyan-400/10 blur-[140px] animate-slowMove" />
            <div className="absolute -right-40 top-1/3 w-[420px] h-[420px] rounded-full bg-indigo-500/10 blur-[120px] animate-slowMove" />
          </div>

          {/* Center glow behind heading */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-cyan-400/20 blur-[160px] rounded-full -z-10"
            aria-hidden="true"
          />

          {/* Content */}
          <WhyChooseUs />
        </div>

        {/* ---------- WHAT WE OFFER ---------- */}
        <motion.section
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center font-bold text-gray-800 font-serif pb-10"
          >
            What We Offer
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Visa Assistance",
                text: "We provide expert visa guidance and application support for travel, study, and migration routes, ensuring accuracy, compliance, and higher approval success.",
              },
              {
                title: "Travel & Study Consultation",
                text: "Our personalized consultations help you choose the right destination, institution, and pathway based on your goals, budget, and long-term plans.",
              },
              {
                title: "End-to-End Support",
                text: "From documentation and embassy processes to travel planning and settlement guidance, we support you every step of the way — before and after departure.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.1)}
                className="border px-8 py-10 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition"
              >
                <b className="text-gray-800 text-xl font-serif">{item.title}</b>
                <p className="text-gray-600 text-md mt-4 font-serif">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Mission & Vision */}
          <motion.section
            variants={fadeIn("up", 0.3)}
            className="py-12 text-center grid gap-12 md:grid-cols-2"
          >
            <div className="text-justify border bg-gray-100 px-8 py-10 rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-bold font-serif text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="ttext-gray-600 text-md mt-4 font-serif">
                To simplify international travel, study, and migration by
                providing transparent visa guidance, expert consultation, and
                personalized travel planning. Ensuring every client’s journey is
                seamless, secure, and successful.
              </p>
            </div>

            <div className="text-justify border bg-gray-100 px-8 py-10 rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-bold font-serif text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-md mt-4 font-serif">
                To become a globally trusted travel and migration consultancy,
                empowering individuals and families to access international
                opportunities with confidence, clarity, and peace of mind.
                <br />
                <span className="block mt-3 text-gray-500 italic">
                  “We plan, You travel.”
                </span>
              </p>
            </div>
          </motion.section>
        </motion.section>
      </div>

      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Services;
