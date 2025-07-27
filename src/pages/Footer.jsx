import React from "react";
import ContactImg from "../assets/contact-img.svg";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("meozgynr");

  return (
    <div
      id="contact"
      className="relative z-0 w-full min-h-[680px] bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85] py-16 px-4 sm:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Contact Image */}
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

        {/* Contact Form */}
        <motion.div
          className="w-full lg:w-1/2 p-4 sm:p-8 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-left">
            Get In Touch
          </h1>

          {state.succeeded ? (
            <p className="text-green-300 font-semibold">
              Thanks for reaching out!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  className="flex-1 p-3 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent"
                />
              </div>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 h-40 sm:h-44 rounded-2xl border border-gray-400 placeholder-gray-400 text-white bg-transparent resize-none mb-4"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="w-44 px-6 py-3 font-semibold bg-white text-black border border-black rounded-xl transition-all duration-300 hover:bg-black hover:text-white"
              >
                {state.submitting ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
