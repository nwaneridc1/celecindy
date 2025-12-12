import React from "react";
import { motion } from "framer-motion";

const onSubmitHandler = (event) => {
  event.preventDefault();
};

const Newsletter = () => {
  return (
    <div className="pt-16 pb-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-serif text-gray-800 text-center"
      >
        Subscribe To Our Newsletter
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-md sm:text-lg md:text-xl font-serif text-gray-600 font-medium mt-4 text-center max-w-2xl mx-auto"
      >
        Get exclusive updates, premium discounts, travel tips, visa guides, and
        much more - straight to your inbox!
      </motion.p>

      {/* Form */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-xl mx-auto mt-10"
      >
        <form
          onSubmit={onSubmitHandler}
          className="flex items-center rounded-full shadow-xl bg-white overflow-hidden border border-gray-300"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 py-3 px-5 font-serif text-gray-700 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white px-6 py-3 font-serif font-semibold hover:opacity-90 transition-all"
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      {/* Glow Background Element */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 mt-10 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full" />
      </div>
    </div>
  );
};

export default Newsletter;
