import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Ourmedia = () => {

    //  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <div>
                   <AnimatePresence>
              
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center font-serif">
                      Our Social Media Handles
                    </h2>

                    {/* Social Icons */}
                              <div className="flex gap-4 pt-2 pb-8">
                                {[FaFacebook, FaInstagram, FaTwitter, FaTiktok].map((Icon, i) => (
                                  <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.15, rotate: 3 }}
                                    whileTap={{ scale: 0.90 }}
                                    className="p-2 mx-auto bg-white/20 hover:bg-white transition duration-300 rounded-full fill-current backdrop-blur-md shadow-lg cursor-pointer"
                                  >
                                    <Icon size={28} className=""/>
                                  </motion.div>
                                ))}
                              </div>

                    <div>
                      <button
                        onClick={closeModal}
                        style={{justifyContent:'center'}}
                        className="flex gap-3 mt-6 w-full mx-auto max-w-32 px-9 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl py-2 rounded-lg font-semibold font-serif hover:opacity-90 transition"
                      >
                        Close <img className="h-6 w-6 pt-2" src={assets.cross} alt="" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              
            </AnimatePresence>
    </div>
  )
}

export default Ourmedia