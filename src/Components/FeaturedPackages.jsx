import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { assets } from "../assets/asset";

// ----------------------- DATA -----------------------
export const packagesData = {
  study: [
    {
      id: 1,
      title: "Study in Canada",
      image: assets.canada,
      description:
        "Get admission support, SOP writing, visa application guidance, and settlement assistance for Canada study routes.",
      details: `
Canada offers globally recognized education with strong post-study work opportunities.
Students can pursue undergraduate, postgraduate, and PhD programs in world-renowned institutions
like the University of Toronto, University of British Columbia, and McGill University.
Programs cover diverse fields including technology, healthcare, business, and social sciences.
International students benefit from multicultural campuses, modern research facilities, and access
to internships that enhance employability. Support includes guidance for study permits, health insurance,
accommodation, and transition into Canadian society. Canada’s friendly immigration policies also allow
students to gain work experience after graduation through programs like the Post-Graduation Work Permit
(PGWP), providing pathways to permanent residency.
      `,
    },
    {
      id: 2,
      title: "Study in the UK",
      image: assets.uk,
      description:
        "Secure admission into top UK universities with documentation support, CAS guidance, and visa mentoring.",
      details: `
The United Kingdom is home to prestigious universities like Imperial College London, University of Oxford,
and University College London. Students enjoy high-quality teaching, cutting-edge research opportunities,
and globally recognized degrees. Programs span engineering, IT, finance, arts, and medical sciences.
Services provided include application processing, guidance for CAS letters, visa applications,
health insurance, accommodation arrangements, and cultural orientation. International students can
also access work placements, internships, and graduate visa pathways post-study.
      `,
    },
    {
      id: 3,
      title: "Study in Australia",
      image: assets.australia,
      description:
        "Comprehensive support for admission, visa, accommodation, and career opportunities in Australia.",
      details: `
Australia hosts world-class universities like University of Sydney, University of Melbourne,
and Australian National University. Students enjoy modern classrooms, research labs, and
internship opportunities. Popular fields include IT, engineering, business, and health sciences.
Assistance covers admission requirements, visa processing, scholarship applications,
student housing, and orientation programs. Australia also allows post-study work visas,
offering international graduates real-world experience and pathways to permanent residency.
      `,
    },
    {
      id: 4,
      title: "Study in Germany",
      image: assets.germany,
      description:
        "Access tuition-free education at top German universities with guidance on applications and visas.",
      details: `
Germany is renowned for high-quality education, especially in engineering, IT, and sciences.
Top universities include Technical University of Munich, Heidelberg University, and Ludwig Maximilian University.
We help students with application processes, language requirements, visa processing, and accommodation.
Germany offers low or no tuition fees, modern facilities, and strong career prospects. International students
may work part-time and gain internships to enhance employability in Europe’s tech and engineering markets.
      `,
    },
    {
      id: 5,
      title: "Study in France",
      image: assets.france,
      description:
        "Full support for studying in France, including university selection, visa, and accommodation guidance.",
      details: `
France is home to globally recognized institutions like Sorbonne University, Sciences Po, and École Polytechnique.
Students can study arts, sciences, technology, business, and culinary programs.
Services include admission processing, student visa support, housing arrangements, and integration into French culture.
Students enjoy internships in Paris and other cities, with potential for work opportunities during or after studies.
      `,
    },
    {
      id: 6,
      title: "Study in Ireland",
      image: assets.ireland,
      description:
        "Guidance for top Irish universities including Trinity College Dublin and University College Dublin.",
      details: `
Ireland offers programs in IT, business, health sciences, and creative industries.
Support covers admission, visa application, scholarships, and accommodation.
International students can work part-time during studies and access post-study work visas.
Ireland’s welcoming culture, English-speaking environment, and high employment prospects make it ideal for international students.
      `,
    },
  ],

  work: [
    {
      id: 1,
      title: "UK Skilled Worker Visa",
      image: assets.uk,
      description:
        "Complete support for skilled professionals seeking UK work visas, eligibility checks, CV upgrades, and job placement.",
      details: `
The UK Skilled Worker Visa allows qualified professionals to work in approved sectors such as healthcare, IT, engineering,
and finance. Our service guides applicants through eligibility checks, documentation, CV optimization, employer sponsorships,
visa applications, and relocation support. Professionals gain access to long-term employment and potential pathways to
settlement or citizenship in the UK.
      `,
    },
    {
      id: 2,
      title: "Canada Global Talent Stream",
      image: assets.canada,
      description:
        "Migration support for tech professionals, developers, data analysts, and engineers under Canada’s GTS program.",
      details: `
Canada actively seeks skilled technology professionals through the Global Talent Stream (GTS) and other provincial nominee programs.
Services include job search guidance, document preparation, visa applications, and settlement support.
Professionals can secure long-term residency and employment in cities like Toronto, Vancouver, and Montreal.
      `,
    },
    {
      id: 3,
      title: "Australia Skilled Migration",
      image: assets.australia,
      description:
        "Guidance on Australia’s skilled migration pathways including work visas, employer sponsorship, and PR eligibility.",
      details: `
Australia offers work visas for IT specialists, healthcare workers, engineers, and tradespeople.
Support includes skills assessment, visa application guidance, CV improvement, employer referrals,
and relocation assistance. Skilled migration pathways provide long-term residency opportunities.
      `,
    },
    {
      id: 4,
      title: "Germany Blue Card & Work Visa",
      image: assets.germany,
      description:
        "Secure employment in Germany with support for EU Blue Card, work permit applications, and relocation.",
      details: `
Germany’s EU Blue Card enables highly skilled workers to live and work in the country.
Our service helps with eligibility checks, employer sponsorship verification, visa applications, and integration support.
Popular sectors include IT, engineering, finance, and healthcare.
      `,
    },
    {
      id: 5,
      title: "Ireland Critical Skills Employment Visa",
      image: assets.ireland,
      description:
        "Support for skilled professionals in Ireland seeking work in high-demand sectors.",
      details: `
Ireland provides Critical Skills Employment Permits for IT, healthcare, and engineering professionals.
Assistance includes job matching, documentation, visa guidance, and relocation.
Opportunities exist for permanent residency and career growth in major Irish cities.
      `,
    },
  ],

  visit: [
    {
      id: 1,
      title: "Dubai Tourist Visa",
      image:  assets.dubai,
      description:
        "Dubai travel visa with itinerary planning, hotel booking, and guidance.",
      details: `
Dubai is a hub for tourism, luxury experiences, and modern architecture.
Our service includes visa application, flight booking, hotel reservations, guided tours,
and itinerary planning to explore iconic landmarks like Burj Khalifa, Palm Jumeirah, and Dubai Marina.
      `,
    },
    {
      id: 2,
      title: "France Visit Visa",
      image: assets.france,
      description:
        "France visiting visa with complete documentation, travel guidance, and cultural immersion tips.",
      details: `
Experience Paris, Lyon, and Nice with a fully planned travel itinerary.
Services include visa guidance, travel documentation support, accommodation arrangements,
and cultural orientation. Explore landmarks like Eiffel Tower, Louvre, and Château de Versailles.
      `,
    },
    {
      id: 3,
      title: "Italy Travel Visa",
      image: assets.italy,
      description:
        "Visa support for Italian travel including documentation, accommodation, and sightseeing guidance.",
      details: `
Italy offers iconic travel experiences in Rome, Venice, Florence, and Milan.
Services include visa assistance, itinerary planning, hotel booking, and local travel guidance.
Explore landmarks like Colosseum, Venice Canals, Leaning Tower of Pisa, and Vatican City.
      `,
    },
    {
      id: 4,
      title: "USA Tourist Visa",
      image: assets.us,
      description:
        "Complete support for US travel visas including documentation, itinerary, and hotel assistance.",
      details: `
Visit major US destinations like New York, Los Angeles, and Orlando.
Services include travel visa support, accommodation booking, guided tours, and local transport.
Explore attractions like Statue of Liberty, Disney World, Grand Canyon, and Hollywood.
      `,
    },
    {
      id: 5,
      title: "UK Visitor Visa",
      image: assets.uk,
      description:
        "Support for UK visiting visas including travel plans, accommodation, and cultural experience.",
      details: `
Travel across London, Edinburgh, and Manchester with full visa application support,
hotel arrangements, and guided tours. Discover iconic landmarks like Buckingham Palace,
Tower of London, and Edinburgh Castle while enjoying local cuisine and cultural experiences.
      `,
    },
    {
      id: 6,
      title: "Australia Visitor Visa",
      image: assets.australia,
      description:
        "Australia visiting visa support including itinerary planning, flights, and accommodation.",
      details: `
Explore Sydney, Melbourne, and the Great Barrier Reef with tailored travel plans.
Our service covers visa application support, hotel bookings, itinerary planning,
and guidance on local culture and attractions.
      `,
    },
    {
      id: 7,
      title: "Singapore Visit Visa",
      image: assets.singapore,
      description:
        "Assistance with Singapore travel visas, itinerary planning, and accommodation guidance.",
      details: `
Singapore offers modern urban experiences, Marina Bay Sands, Sentosa Island, and Gardens by the Bay.
Services include visa application guidance, hotel booking, and tailored travel itineraries.
      `,
    },
    {
      id: 8,
      title: "Malta Tourist Visa",
      image: assets.malta,
      description:
        "Tourist visa assistance for Malta including travel and accommodation guidance.",
      details: `
Visit Malta’s historical sites, beaches, and Mediterranean lifestyle.
Services include visa documentation support, hotel reservations, and travel itinerary planning.
Explore Valletta, Mdina, and the Blue Lagoon.
      `,
    },
  ],
};

// ----------------------- COMPONENT -----------------------
const FeaturedPackages = () => {
  const [activeTab, setActiveTab] = useState("study");
  const [modalData, setModalData] = useState(null);

  return (
    <section className="w-full py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white">
      <div className="max-w-6xl mx-auto px- text-center">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold font-serif"
        >
          Featured Packages
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {["study", "work", "visit"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-full text-sm :font-medium border transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-500 to-teal-400 rounded-xl py-2 text-white font-semibold font-serif text-white shadow-md hover:scale-[1.02] transition-transform"
                  : "bg-white text-gray-800 hover:bg-gray-200 font-semibold rounded-xl py-2 font-serif shadow-md hover:scale-[1.02] transition-transform"
              }`}
            >
              {tab === "study"
                ? "Study"
                : tab === "work"
                ? "Work"
                : "Visit & Vacation"}
            </button>
          ))}
        </div>

        {/* Animated Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45 }}
          >
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
              {packagesData[activeTab].map((item) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl shadow-lg bg-white overflow-hidden border h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-4 text-justify">
                      <h3 className="text-gray-500 text-xl font-serif relative z-10">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mt-4 text-sm font-ovo leading-relaxed relative z-10">
                        {item.description}
                      </p>

                      <button
                        onClick={() => setModalData(item)}
                        className="mt-4 mb-10 w-full bg-gradient-to-r from-indigo-500 to-teal-400 py-2 rounded-xl font-semibold font-serif text-white shadow-md hover:scale-[1.02] transition-transform"
                      >
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-lg w-full shadow-2xl relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">{modalData.title}</h2>

              <p className="text-gray-700 mb-4 font-ovo">{modalData.details}</p>

              <button
                onClick={() => setModalData(null)}
                className="mt-4 mb-10 w-full bg-gradient-to-r from-indigo-500 to-teal-400 py-2 rounded-xl font-semibold font-serif text-white shadow-md hover:scale-[1.02] transition-transform"
                  >
                Close Menu 
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedPackages;
