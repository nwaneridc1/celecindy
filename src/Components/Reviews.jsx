import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { assets } from "../assets/asset";

// import bgImage from "./"; // ← ADD any image here

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Chisom Okafor",
    role: "- Dubai Tourist",
    star_rating: 5,
    testimony:
      "CeleCindy Travel made my Dubai trip unforgettable! Smooth visa processing, top-notch communication, and perfect hotel arrangements.",
  },
  {
    name: "Amara Williams",
    role: "- Study Abroad Applicant",
    star_rating: 4,
    testimony:
      "My UK study visa process was easier than I expected. They guided me at every step. Truly reliable!",
  },
  {
    name: "Ibrahim Musa",
    role: "- Business Traveler",
    star_rating: 5,
    testimony:
      "I booked my Turkey trip with CeleCindy and everything was seamless—from flights to accommodation. Highly recommended!",
  },
  {
    name: "Faith Onyinye",
    role: "- Family Vacation Planner",
    star_rating: 5,
    testimony:
      "My family's vacation to Kenya was beautifully organized. No stress, just fun! CeleCindy is now our official travel plug.",
  },
  {
    name: "Samuel Enyi",
    role: "- Tourist (Zanzibar)",
    star_rating: 4,
    testimony:
      "The attention to detail was impressive. They even helped me plan activities and tours. Thank you CeleCindy!",
  },
];

const Reviews = () => {
  return (
    <div
      id="reviews"
      className="relative text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-20"
      style={{
        backgroundImage: `url(${assets.world})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* ===== SECTION HEADER ===== */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-serif"
        >
          Our Client's Reviews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mt-4 mb-12 font-serif text-md md:text-lg leading-relaxed"
        >
          From visas to vacations, our clients enjoy smooth, trustworthy, and
          stress-free travel experiences - every single time.
        </motion.p>

        {/* ===== SWIPER ===== */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          modules={[Pagination, Autoplay]}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {/* Fade-In Motion for Each Slide */}
             <motion.div
                         key={index}
                         variants={fadeUp}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, delay: index * 0.2 }}
                         className="px-8 py-10 h-[45vh] lg:h-[45vh] text-white rounded-xl shadow-2xl bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-teal-300/40 
                         hover:shadow-teal-300/40 transition-all duration-500 hover:scale-[1.03] relative overflow-hidden"
                       >
                         {/* Sliding Gradient Border */}
                         <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                         bg-gradient-to-r from-teal-300/30 to-teal-300/30  
                         opacity-0 hover:opacity-100 blur-[2px] transition-all duration-700"></div>
                {/* Testimony */}
                <p className="italic text-justify mb-10 font-serif leading-relaxed h-[50%]">
                  "{item.testimony}"
                </p>

                <div className="flex justify-between pt-0 lg:pt-7">
                  <div>
                    {/* Name */}
                    <h3 className="text-lg font-semibold text-black font-serif">
                      {item.name}
                    </h3>

                    {/* Role */}
                    <p className="text-sm text-gray-200 font-sans">
                      {item.role}
                    </p>
                  </div>
                  {/* Star Rating */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-lg pt-7 drop-shadow"
                      >
                        {i < item.star_rating ? <FaStar /> : <FaRegStar />}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
