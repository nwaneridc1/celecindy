import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Trusted & Professional Guidance",
      text: "From study visas to work, tourism, and immigration support, our dedicated team ensures every requirement is handled with clarity and accuracy, stress-free and dependable.",
    },
    {
      title: "Transparent & Reliable Processing",
      text: "We provide verified information, honest timelines, and clear documentation procedures. No hidden charges, just a smooth trustworthy process you can rely on.",
    },
    {
      title: "Personalized Support for Every Journey",
      text: "Your travel goals are unique and so is our approach. We walk with you before, during, and after your application to ensure a seamless and successful travel experience.",
    },
  ];

  return (
    <div className="py-10">
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="pb-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center"
      >
        Why Choose Us?
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="px-8 py-10 rounded-xl shadow-2xl bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-teal-300/40 
            hover:shadow-teal-300/40 transition-all duration-500 hover:scale-[1.03] relative overflow-hidden"
          >
            {/* Sliding Gradient Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent 
            bg-gradient-to-r from-teal-300/20 to-teal-300/10 
            opacity-0 hover:opacity-100 blur-[2px] transition-all duration-700"></div>

            <h3 className="text-white text-xl font-serif relative z-10">
              {item.title}
            </h3>
            <p className="text-gray-200 mt-4 text-md font-serif leading-relaxed relative z-10">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
