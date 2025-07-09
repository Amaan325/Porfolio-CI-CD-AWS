import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Animation from "../assets/header-img.svg";
import banner from "../assets/banner-bg.png";
import { FaArrowCircleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Skills from "./Skills";

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-0" id="home">
      {/* Background Section */}
      <div
        className="min-h-[90vh] bg-cover bg-center pb-12"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Navbar */}
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
          }`}
        >
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] pt-32 px-6 sm:px-12 md:px-16 lg:px-20 gap-12">
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:max-w-[60%] text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-52 h-10 text-white text-md font-semibold shadow-md mx-auto lg:mx-0 bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85] border border-gray-300">
              Welcome to my Portfolio
            </div>

            <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-wrap justify-center lg:justify-start">
                  <span>Hi! I'm Amaan</span>
                  <span className="inline-block min-w-[100px] ml-2 text-purple-400">
                    <ReactTyped
                      strings={["Web", "UI/UX"]}
                      typeSpeed={150}
                      backSpeed={350}
                      backDelay={1500}
                      loop
                    />
                  </span>
                </div>
                <div className="min-h-[60px]">
                  <ReactTyped
                    strings={["Developer", "Designer"]}
                    typeSpeed={150}
                    backSpeed={104}
                    backDelay={1500}
                    loop
                  />
                </div>
              </div>
            </div>

            <p className="text-md poppins-light text-gray-300 max-w-xl mx-auto lg:mx-0">
              Full-stack web developer skilled in the MERN stack (MongoDB,
              Express.js, React.js, Node.js) with experience in Vue.js, Redux,
              and Firebase. Proficient in Tailwind CSS, Material UI, Bootstrap,
              and deploying apps using AWS EC2 and PM2. Currently exploring
              Docker for containerized deployments.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
              <button className="bg-[#212d85] hover:bg-[#2b38a5] text-white px-6 py-2 rounded-full font-semibold transition duration-300">
                Let's Connect
              </button>
              <FaArrowCircleRight className="text-[#212d85] text-2xl" />
            </div>
          </div>

          {/* Image */}
          <div className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[380px]">
            <img
              src={Animation}
              alt="Animated"
              className="w-full animate-float"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default About;
