import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Questions = [
  {
    question: "How do I book a trip with Celecindy Travels?",
    answer:
      "Simply choose your destination or service and submit a booking request. Our travel consultants will reach out to finalize arrangements and guide you step-by-step.",
  },
  {
    question: "Do you assist with visa applications?",
    answer:
      "Yes. We offer expert visa consultation and application support, ensuring your documents meet embassy standards for a smooth process.",
  },
  {
    question: "Are your travel packages affordable and transparent?",
    answer:
      "Absolutely. Our pricing is transparent with no hidden fees. You’ll receive a clear breakdown before confirming your booking.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes. We design custom travel plans tailored to your budget, destination preferences, and travel purpose.",
  },
  {
    question: "Do you offer flight and hotel reservations?",
    answer:
      "Yes. We handle flights, hotels, airport transfers, and travel insurance for a stress-free experience.",
  },
  {
    question: "Is it safe to make payments through Celecindy Travels?",
    answer:
      "Yes. We use secure payment channels to protect your data and transactions.",
  },
  {
    question: "Do you organize group tours and vacations?",
    answer:
      "Yes. We organize group tours, family vacations, honeymoons, and corporate travel experiences.",
  },
  {
    question: "How can I contact Celecindy Travels?",
    answer:
      "You can reach us via our contact page, social media platforms, or direct WhatsApp and phone support.",
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    onClick={onClick}
    className="cursor-pointer rounded-xl p-6 shadow-md hover:shadow-xl transition-all
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-800"
  >
    <div className="flex justify-between items-center">
      <h3 className="font-serif font-semibold text-gray-800 dark:text-gray-100">
        {question}
      </h3>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="text-2xl font-bold text-gray-500 dark:text-gray-400"
      >
        {isOpen ? "−" : "+"}
      </motion.span>
    </div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-lg font-ovo text-gray-600 dark:text-gray-300">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleQuestions =
    isMobile && !showAll ? Questions.slice(0, 5) : Questions;

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-20 text-center bg-gray-50 transition-colors">
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-serif"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        // viewport={{ once: true }}
        className="text-gray-600 max-w-2xl mx-auto mt-4 mb-12 font-serif text-md md:text-lg leading-relaxed"
      >
        {" "}
        Everything you need to know before planning your next journey with Celecindy Travels.
        {/* </span> */}
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-justify">
        {visibleQuestions.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      {isMobile && (
        <div className="mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-3 rounded-full font-semibold
              bg-gray-800 
              text-white 
              hover:opacity-90 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Faq;
