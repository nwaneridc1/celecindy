// Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "./assets/asset"; // adjust path if needed
import WhyChooseUs from "./Components/WhychoosUs";

const TABS = ["Study", "Work", "Visit", "Consultation"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Study");
  const intervalRef = useRef(null);

  // Auto-slide tabs every 9 seconds, reset on manual click
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const idx = TABS.indexOf(prev);
        return TABS[(idx + 1) % TABS.length];
      });
    }, 9000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    // restart interval so user interaction feels smooth
    startAutoSlide();
  };

  // Stats data per tab
  const statsData = {
    Study: [
      {
        label: "Top Global Schools",
        value: "1K+",
        sub: "Partner Institutions",
        img: assets.verified,
      },
      {
        label: "Study Destinations",
        value: "45+",
        sub: "Countries Available",
        img: assets.location,
      },
    ],
    Work: [
      {
        label: "Verified Job Offers",
        value: "250+",
        sub: "Approved Employers",
        img: assets.verified,
      },
      {
        label: "Work Visa Countries",
        value: "30+",
        sub: "High-Demand Locations",
        img: assets.location,
      },
    ],
    Visit: [
      {
        label: "Approved Visit Visas",
        value: "240+",
        sub: "Successful Applications",
        img: assets.verified,
      },
      {
        label: "Travel Destinations",
        value: "80+",
        sub: "Countries You Can Visit",
        img: assets.location,
      },
    ],
    Consultation: [
      {
        label: "Happy Clients",
        value: "3K+",
        sub: "Consultation Successes",
        img: assets.verified,
      },
      {
        label: "Expert Consultants",
        value: "50+",
        sub: "Certified Professionals",
        img: assets.location,
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden h-auto pt-20 mt-1 lg:mt-4 flex items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Injected CSS for keyframes & utility classes */}

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-20]"
        style={{
          backgroundImage: `url(${assets.study})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden
      />

      {/* Dark overlay + ambient lights */}
      <div className="absolute inset-0 z-[-10] pointer-events-none">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        {/* floating ambient light blobs */}
        <div className="absolute left-1/4 -top-40 w-[520px] h-[520px] rounded-full bg-cyan-400/8 blur-[120px] animate-slowMove" />
        <div className="absolute -right-40 top-1/4 w-[420px] h-[420px] rounded-full bg-indigo-500/6 blur-[100px] animate-slowMove" />
      </div>

      {/* small centered glow behind title */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-cyan-400/14 blur-[120px] rounded-full z-[-5]" />

      {/* HERO CONTENT */}
      <motion.div
        className="text-white space-y-10 w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Heading */}
        <div className="space-y-6 max-w-3xl relative">
          <h1 className="font-bold text-4xl sm:text-6xl leading-tight font-serif drop-shadow-lg">
            <span className="text-red-500">Celecindy </span>Travel's
            {/* International */}
          </h1>

          <p className="text-md sm:text-lg md:text-xl font-serif text-gray-100 leading-relaxed font-medium mt-4">
            Your trusted partner for study, work, visit, and immigration
            support. We guide you through every step of your journey with expert
            assistance, ensuring a smooth, stress-free and successful travel
            experience.
          </p>

          {/* subtle float for heading */}
          <div className="absolute -left-6 -bottom-16 w-40 h-40 rounded-full bg-white/3 blur-3xl animate-floatY" />
        </div>

        {/* TABS + CONTENT */}
        <div className="pt-12 w-full">
          <div className="w-full space-y-6">
            {/* Tabs */}
            <div className="flex font-bold text-lg gap-3 lg:gap-14 pb-3 cursor-pointer font-serif text-gray-300 relative">
              {TABS.map((tab) => (
                <div key={tab} className="relative">
                  <p
                    role="button"
                    tabIndex={0}
                    onClick={() => changeTab(tab)}
                    onKeyDown={(e) =>
                      e.key === "Enter" ? changeTab(tab) : null
                    }
                    className={`capitalize transition px-1 ${
                      activeTab === tab ? "text-white" : "hover:text-white/80"
                    }`}
                  >
                    {tab}
                  </p>

                  {/* Animated Underline using layoutId (no exit prop) */}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.28 }}
                      className="absolute left-0 right-0 h-[2px] bg-white mt-1"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              {/* Tab Content (left) */}
              <div className="flex flex-col w-full gap-6 w-full lg:w-[60%]">
                <AnimatePresence mode="wait">
                  {activeTab === "Study" && (
                    <motion.div
                      key="study"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.45 }}
                    >
                      <TabCard
                        title="Study Abroad"
                        text="Get guidance on choosing the right study destination, securing admission, and navigating the visa process for your academic journey."
                      />
                    </motion.div>
                  )}

                  {activeTab === "Work" && (
                    <motion.div
                      key="work"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.45 }}
                    >
                      <TabCard
                        title="Working Visa"
                        text="Explore global work opportunities and receive support with visa requirements, documentation, and relocation."
                      />
                    </motion.div>
                  )}

                  {activeTab === "Visit" && (
                    <motion.div
                      key="visit"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.45 }}
                    >
                      <TabCard
                        title="Visiting Visas"
                        text="Learn about short-term travel visas, requirements, and application support to make your visit smooth and stress-free."
                      />
                    </motion.div>
                  )}

                  {activeTab === "Consultation" && (
                    <motion.div
                      key="consult"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.45 }}
                    >
                      <TabCard
                        title="Consultations"
                        text="Get expert one-on-one guidance on immigration, travel planning, or any visa-related concerns tailored to your needs."
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right side: Stats (grid for responsiveness) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-[50%] gap-6 lg:gap-5 lg:items-start">
                <AnimatePresence mode="wait">
                  {statsData[activeTab].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <StatCard {...stat} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
      </motion.div>
    </div>
  );
}

/* ===== TAB CARD (with sliding gradient border) ===== */
const TabCard = ({ title, text }) => {
  return (
    <div className="relative group">
      {/* moving gradient border container */}

      <div
        className="relative backdrop-blur-3xl text-gray-100 rounded-xl shadow-2xl p-6 z-10 border border-white/20 hover:border-teal-300/40 
                         hover:shadow-teal-300/40"
      >
        <div
          className="absolute -inset-[1.5px]  p-[2px] rounded-xl border-2 border-transparent 
                         bg-gradient-to-r from-teal-300/20 to-teal-300/10  
                         opacity-0 hover:opacity-100 blur-[2px] transition-all duration-700 animate-borderSlide"
        ></div>

        <p className="text-lg font-bold font-serif text-black">{title}</p>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 mt-4">
          <p className="flex-1 text-md font-ovo">{text}</p>
          <button
            type="button"
            className="bg-gradient-to-r from-indigo-500 to-teal-400 sm:max-w-[60%] max-h-12 px-4 py-2 rounded-xl font-semibold font-serif text-white shadow-md hover:scale-[1.01] transition-transform"
          >
            Browse products
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===== STAT CARD (with Option B ticker: animate only the leading number for K+) ===== */
const StatCard = ({ label, value, sub }) => {
  // Option B: animate the numeric prefix only (e.g., "3K+" => animate 0 -> 3, then show "3K+")
  const [count, setCount] = useState(0);

  // parse leading numeric portion
  const parseLeadingNumber = (val) => {
    // Extract initial digits (allow decimals but we'll animate integer)
    const match = String(val).match(/^(\d+(\.\d+)?)/);
    if (!match) return 0;
    // parse integer portion for ticking
    return Math.floor(Number(match[1]));
  };

  useEffect(() => {
    const target = parseLeadingNumber(value);
    if (!target || target <= 0) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 900; // ms
    const startTime = performance.now();

    let rafId = null;
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.floor(eased * target);
      setCount(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value]);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  // formatting: if value contains 'K' or other suffixes, we'll append the original suffix
  const suffixMatch = String(value).match(/^[\d.]+(.*)$/);
  const suffix = suffixMatch ? suffixMatch[1] : "";

  return (
    <div
      className="relative backdrop-blur-3xl text-gray-100 rounded-xl shadow-2xl p-6 z-10 border border-white/20 hover:border-teal-300/40 
                         hover:shadow-teal-300/40"
    >
      {/* inner soft glow */}
      <div
        className="absolute -inset-[1.5px]  p-[2px] rounded-xl border-2 border-transparent 
                         bg-gradient-to-r from-teal-300/20 to-teal-300/10  
                         opacity-0 hover:opacity-100 blur-[2px] transition-all duration-700 animate-borderSlide"
      ></div>

      <p className="text-sm font-semibold text-white font-serif whitespace-nowrap">
        {label}
      </p>

      <div className="mt-10 flex gap-4">
        <p className="text-xl sm:text-xl font-bold font-ovo text-white leadig-none overflow-hidden">
          {count}
          {suffix}
        </p>
        <p className="text-xl lg:text-sm font-semibold lg:pt-1 text-gray-100 whitespace-nowrap overflow-hidden">
          {sub}
        </p>
      </div>
    </div>
  );
};
