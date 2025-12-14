import React from "react";
import { motion } from "framer-motion";

const onSubmitHandler = (event) => {
  event.preventDefault();
};

const Newsletter = () => {
  return (
    <section className="pt-20 pb-28 px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center"
      >
        Stay Connected With Us
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        // viewport={{ once: true }}
        className="text-gray-500 lg:max-w-2xl mx-auto mt-4 mb-12 text-center font-serif text-md md:text-lg leading-relaxed"
      >
        Be the first to receive travel inspiration, visa updates, exclusive
        offers, destination guides, and expert consultation tips, delivered
        straight to your inbox.
      </motion.p>

      {/* Form */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-xl mx-auto mt-12"
      >
        <form
          onSubmit={onSubmitHandler}
          className="flex items-center rounded-full shadow-xl bg-white 
          overflow-hidden border border-gray-300"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 py-4 px-6 font-serif text-gray-700 
            focus:outline-none placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-teal-500 
            text-white px-8 py-4 font-serif font-semibold 
            hover:opacity-90 transition-all"
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      {/* Soft Glow Accent */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 
        w-80 h-80 bg-indigo-400/20 blur-3xl rounded-full pointer-events-none"
      />
    </section>
  );
};

export default Newsletter;
