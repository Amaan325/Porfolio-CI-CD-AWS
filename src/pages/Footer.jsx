import React from "react";
import ContactImg from "../assets/contact-img.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      id="contact"
      className="relative z-0 w-full min-h-[680px] bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85] py-16 px-4 sm:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Contact Image with animation */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ContactImg}
            alt="Contact"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto animate-float"
          />
        </motion.div>

        {/* Contact Form with animation */}
        <motion.div
          className="w-full lg:w-1/2 p-4 sm:p-8 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-left">Get In Touch</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
            />
            <input
              type="tel"
              placeholder="Phone No."
              className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
            />
          </div>

          <textarea
            placeholder="Message"
            className="w-full p-3 h-40 sm:h-44 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent resize-none mb-4"
          />

          <button className="w-full sm:w-[120px] bg-white hover:bg-[#2b38a5] text-black font-semibold py-3 rounded-lg transition duration-300">
            Send
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
