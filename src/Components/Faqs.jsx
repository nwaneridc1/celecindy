import React, { useState, useEffect } from 'react';

const Questions = [
  {
    question: "How do I schedule a property viewing?",
    answer:
      "You can schedule a viewing directly from the property page by clicking 'Book Viewing' or by contacting the assigned agent. We'll confirm the time and send the details to your email or phone.",
  },
  {
    question: "Can I rent a house directly from the website?",
    answer:
      "Yes, we offer verified listings where you can inquire, book viewings, and start your rental process. Our agents will guide you through everything from inspection to payment and documentation.",
  },
  {
    question: "Are the properties on your website verified?",
    answer:
      "Absolutely. All properties are vetted for ownership and legal compliance before being listed to ensure safety and trust.",
  },
  {
    question: "What documents do I need to rent or buy a property?",
    answer:
      "Typically, you’ll need a valid ID, proof of income, and sometimes a reference. For purchases, proof of funds and a lawyer may be required. We’ll guide you through every step.",
  },
  {
    question: "Do you charge any agency or service fees?",
    answer:
      "Yes, a small service fee may apply depending on the property and transaction type. All fees are disclosed upfront — no hidden charges.",
  },
  {
    question: "Can I list my property for rent or sale?",
    answer:
      "Yes. You can list your property through our 'List a Property' form. An agent will reach out to verify the listing and publish it on the site.",
  },
  {
    question: "Do you help with property legal documentation?",
    answer:
      "Yes. We provide legal guidance and connect you with verified legal professionals to handle contracts, agreements, and title verification.",
  },
  {
    question: "Is it safe to make payments through your platform?",
    answer:
      "Yes. We use secure payment gateways and offer escrow services for major transactions to protect both buyers and sellers.",
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div id='faq'
    data-aos="fade-up"
    className="bg-white rounded shadow-md p-6 text-left transition-all duration-300 cursor-pointer hover:shadow-lg"
    onClick={onClick}
  >
    <div className="flex justify-between items-center">
      <h3 className="text-md font-semibold font-serif text-gray-800 flex items-center">
        {question}
      </h3>
      <span className="text-2xl font-bold text-gray-500">
        {isOpen ? '−' : '+'}
      </span>
    </div>

    <div
      className={`mt-2 text-gray-600 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="mt-2 text-lg font-ovo">{answer}</p>
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleOpen = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const visibleQuestions =
    isMobile && !showAll ? Questions.slice(0, 5) : Questions;

  return (
    <div className="text-center px-4 py-16">
      <h1 className="text-[2.6vh] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-justify lg:text-center xl:text-center md:text-center font-bold text-gray-800 font-serif pb-8">
            Most Frequently Asked Questions
          </h1>

      <p className="text-gray-600 text-justify lg:text-center xl:text-center md:text-center max-w-2xl mx-auto mb-10 font-medium font-serif">
        Whether you're buying, renting, or listing a property, we’ve got answers to your most common questions.
        <div className="mt-1">
          <strong className="text-gray-700">
            — Here’s everything you need to know before making your next move.
          </strong>
        </div>
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleQuestions.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleOpen(index)}
          />
        ))}
      </div>

      {/* Toggle Button for Mobile */}
      {isMobile && (
        <div className="mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-700 hover:bg-gray-900 px-6 sm:px-12 py-3 rounded-full font-semibold text-white w-max mt-5 transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Faq;