import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/asset";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// your destinations array as defined above
const destinations = [
  {
    id: 1,
    name: "Texas, US",
    image: assets.us,
    label: "Migrate To The United States",
    about:
      "Texas, the second-largest state in the United States, is known for its thriving economy, diverse culture, and vibrant cities like Houston, Dallas, and Austin. The state offers a unique blend of modern urban life and natural beauty, from sprawling ranches to the scenic Hill Country. Texas is home to world-class healthcare, universities, and a booming job market across energy, technology, and healthcare sectors. With a welcoming environment for international residents, Texas provides an ideal destination for both professional growth and family life.",
    route:
      "Migration to Texas is typically pursued through U.S. work visas such as the H-1B skilled worker visa, family-sponsored green cards, or student visas that can lead to long-term residency. Professionals in technology, healthcare, and engineering fields are highly sought after. Family reunification programs allow U.S. residents to sponsor spouses, children, or parents. Texas also offers investment-based options through EB-5 visas, allowing entrepreneurs to establish businesses while gaining residency.",
    study:
      "Texas is a hub for higher education, boasting renowned universities like the University of Texas at Austin, Texas A&M University, and Rice University. International students benefit from high-quality education, cutting-edge research facilities, and opportunities for internships across diverse industries. Studying in Texas provides access to a multicultural environment, practical experience, and strong career pathways, making it an excellent choice for those aiming to work or settle in the U.S.",
  },

  {
    id: 2,
    name: "Ontario, Canada",
    image: assets.canada,
    label: "Migrate To Canada",
    about:
      "Ontario, the heart of Canada, is a hub of economic, educational, and cultural opportunities. With bustling cities like Toronto and Ottawa, Ontario offers a vibrant lifestyle, top-tier healthcare, and one of the highest standards of living globally. The province is home to diverse communities, making it a welcoming destination for immigrants and students alike. From the stunning natural landscapes of Niagara Falls to the cultural festivals in Toronto, Ontario combines modernity with natural beauty.",
    route:
      "Migration routes to Ontario include skilled worker programs, provincial nominee programs, and family sponsorships. Skilled professionals can apply through the Ontario Immigrant Nominee Program (OINP) which selects candidates with skills in demand. International students graduating from Ontario universities can transition to permanent residency through the Canadian Experience Class. Family reunification allows residents to sponsor close relatives, making Ontario a comprehensive destination for a variety of migration paths.",
    study:
      "Ontario is a prime destination for international students, boasting world-renowned institutions such as the University of Toronto, McMaster University, and Queen's University. Students benefit from a curriculum that blends theoretical and practical learning, state-of-the-art facilities, and opportunities for internships across multiple industries. Ontario’s multicultural environment allows students to experience diverse cultures while gaining a globally recognized degree that enhances career prospects both in Canada and internationally.",
  },
  {
    id: 3,
    name: "London, United Kingdom",
    image: assets.uk,
    label: "Migrate To The UK",
    about:
      "London, the vibrant capital of the United Kingdom, is a city of history, culture, and opportunity. Known for its iconic landmarks like the Tower of London, Buckingham Palace, and the British Museum, London offers a unique mix of tradition and modernity. The city is an economic powerhouse, with thriving finance, tech, and creative sectors. With multicultural neighborhoods and world-class amenities, London attracts migrants seeking quality living standards, professional growth, and a cosmopolitan lifestyle.",
    route:
      "Migration to the UK is possible through skilled worker visas, student visas, and family visas. The Skilled Worker Visa allows professionals with job offers in approved sectors to settle in the UK. Students can apply for a Student Visa and, upon completion, access the Graduate Route for work opportunities. Family visas enable UK residents and citizens to sponsor their spouses, children, or other dependents. These pathways ensure a flexible and strategic approach to living and working in London.",
    study:
      "London is home to prestigious universities such as Imperial College London, University College London, and the London School of Economics. International students benefit from a rigorous curriculum, cutting-edge research opportunities, and vibrant student life. London’s global network and proximity to European markets provide excellent professional and cultural exposure. Students gain skills that are recognized worldwide, opening doors to career advancement both in the UK and internationally.",
  },
  {
    id: 4,
    name: "Paris, France",
    image: assets.france,
    label: "Migrate To France",
    about:
      "Paris, the capital city of France, is globally renowned for its culture, history, and lifestyle. Known as the 'City of Light,' Paris offers iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Beyond tourism, Paris is a hub for finance, fashion, technology, and education, providing ample opportunities for work, study, and business. The city combines rich heritage with modern amenities, making it an attractive destination for migrants seeking professional and cultural enrichment.",
    route:
      "Migration to France can be achieved through skilled worker visas, student visas, family reunification, or entrepreneur visas. Professionals with expertise in technology, healthcare, and business sectors are in demand. Students on long-term visas may transition to work permits after graduation. Family reunification allows residents to bring close relatives, while entrepreneur visas provide a pathway for starting businesses in France. The French government provides structured support to help newcomers integrate smoothly.",
    study:
      "Paris hosts prestigious educational institutions such as Sorbonne University, Sciences Po, and École Polytechnique. International students benefit from high-quality academics, research opportunities, and a vibrant cultural environment. Studying in Paris allows students to gain globally recognized qualifications, experience European lifestyle and networks, and access internships in leading French and international companies. It’s an ideal city for combining education with cultural and professional growth.",
  },
  {
    id: 5,
    name: "Australia",
    image: assets.australia,
    label: "Migrate To Australia",
    about:
      "Australia is known for its diverse landscapes, high standard of living, and strong economy. Cities like Sydney, Melbourne, and Brisbane offer vibrant urban life, while the natural beauty of the Outback, Great Barrier Reef, and national parks attract nature enthusiasts. Australia is multicultural and welcoming, with excellent healthcare, education, and job opportunities. The quality of life, safety, and opportunities for personal and professional growth make it a top destination for migrants.",
    route:
      "Migration to Australia is primarily through skilled migration, employer-sponsored visas, and family sponsorships. The General Skilled Migration program selects candidates based on skills, education, and work experience. Employer-sponsored visas allow qualified professionals to work and eventually gain permanent residency. Family sponsorship programs enable residents to bring spouses, children, or parents, providing pathways for family integration. Australia’s immigration system is structured to attract talent while supporting long-term settlement.",
    study:
      "Australia hosts world-class universities like the University of Sydney, University of Melbourne, and Australian National University. International students gain access to cutting-edge research, innovative learning methodologies, and strong industry connections. Australian education emphasizes practical experience, ensuring graduates are ready for global careers. Students can also access post-study work visas, allowing them to gain professional experience while exploring life in one of the world’s most liveable countries.",
  },

  {
    id: 6,
    name: "Malta",
    image: assets.malta,
    label: "Migrate To Malta",
    about:
      "Malta, a Mediterranean gem, is known for its sunny climate, historic architecture, and strategic location between Europe and North Africa. With a rich history dating back thousands of years, Malta offers a unique blend of cultural heritage and modern living. The country boasts excellent healthcare, vibrant communities, and a strong economy driven by finance, tourism, and IT sectors. Malta’s safe and welcoming environment makes it ideal for families, professionals, and retirees seeking a high quality of life.",
    route:
      "Migration to Malta can be achieved through work permits, investor programs, and family reunification. Professionals with expertise in finance, IT, and tourism can apply for employment-based permits. Malta also offers residency and citizenship options for investors who contribute to the national economy. Family reunification allows residents to bring spouses and children, ensuring a smooth transition for families. Malta’s migration framework is flexible and supportive, catering to diverse needs.",
    study:
      "Malta provides excellent opportunities for international students, with institutions like the University of Malta offering degrees in arts, science, and technology. Malta’s educational programs emphasize practical experience, cultural immersion, and multilingual proficiency. Students can benefit from small class sizes, modern facilities, and opportunities to engage in internships across Europe. Studying in Malta provides exposure to European markets while enjoying the island’s rich history and Mediterranean lifestyle.",
  },

  {
    id: 7,
    name: "Luxembourg",
    image: assets.luxembourg, // replace with Luxembourg image
    label: "Migrate To Luxembourg",
    about:
      "Luxembourg, a small but economically powerful European nation, offers a high quality of life, political stability, and robust financial and technology sectors. The country is multilingual, with Luxembourgish, French, and German widely spoken, making it attractive for international professionals. Luxembourg combines urban sophistication with serene natural landscapes along the Moselle and Ardennes regions, providing an exceptional living environment for migrants.",
    route:
      "Migration to Luxembourg is available through work permits, EU Blue Cards, and family reunification. Skilled professionals in finance, IT, and engineering are in demand. The EU Blue Card allows highly qualified workers to live and work in Luxembourg with long-term residence benefits. Family reunification ensures spouses and children can join residents seamlessly. Luxembourg’s immigration framework is designed to attract talent while maintaining a balanced quality of life.",
    study:
      "Luxembourg offers international students opportunities at institutions like the University of Luxembourg. Programs emphasize research, innovation, and multilingual education. Students benefit from small class sizes, modern facilities, and the ability to gain practical experience through internships. Studying in Luxembourg provides access to European job markets and a culturally rich environment, preparing students for global careers.",
  },
];

const Destinations = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevDestination = () => {
    setSelectedIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };
  const nextDestination = () => {
    setSelectedIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-b from-black/20 to-black/30">
      <div className="max-w-6xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4"
        >
          Top Destinations
        </motion.h2>
        <p className="max-w-2xl mx-auto pb-12 font-serif text-md md:text-lg leading-relaxed">
          Explore the world's most exciting destinations and migration opportunities.
        </p>
      </div>

            <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-2xl h-auto shadow-lg bg-white cursor-pointer hover:shadow-2xl transition"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-2xl transition">
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center font-ovo gap-2 text-gray-500 uppercase text-xs font-medium mb-1">
                    <MapPin size={16} />
                    <span>{dest.name}</span>
                  </div>
                  <button
                    onClick={() => openModal(index)}
                    className="mt-4 mb-10 w-full bg-gradient-to-r from-indigo-500 to-teal-400 py-2 rounded-xl font-semibold font-serif text-white shadow-md hover:scale-[1.02] transition-transform"
                  >
                    See More
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-lg w-full shadow-2xl relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button onClick={closeModal} className="absolute right-4 top-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                <img src={assets.cross} alt="close" className="w-4 h-4" />
              </button>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                {destinations[selectedIndex].name}
              </h2>
              <p className="text-gray-700 mb-4 font-ovo">{destinations[selectedIndex].about}</p>
              <h3 className="font-semibold text-gray-800 mb-2 font-serif">Migration Routes:</h3>
              <p className="text-gray-700 mb-4 font-ovo">{destinations[selectedIndex].route}</p>
              <h3 className="font-semibold text-gray-800 mb-2 font-serif">Study Opportunities:</h3>
              <p className="text-gray-700 mb-4 font-ovo">{destinations[selectedIndex].study}</p>

              <div className="flex justify-between mt-6 font-serif">
                <button onClick={prevDestination} className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800">
                  <ChevronLeft /> Previous
                </button>
                <button onClick={nextDestination} className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800">
                  Next <ChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Destinations;