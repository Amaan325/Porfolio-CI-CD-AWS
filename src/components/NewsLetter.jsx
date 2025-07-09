import React, { useEffect, useState } from "react";
import backgroundpic from "../assets/color-sharp2.png";
import { FaLinkedinIn } from "react-icons/fa6";

const NewsLetter = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    fetch("https://7wfcjqoab74jhpx2iu7vqzpdme0cnlpl.lambda-url.eu-north-1.on.aws/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Visitor count:", data);
        setVisitorCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });
  }, []);

  return (
    <div className="relative px-6 bg-[#0a0a0a] z-0" id="newsletter">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundpic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Subscription Section */}
      <div className="w-full text-center flex justify-center pt-32 pb-12 relative z-10">
        <div className="w-full max-w-[1100px] bg-white flex flex-col md:flex-row items-start rounded-4xl px-6 md:px-32 py-16 gap-8 shadow-xl -mt-40 md:-mt-52">
          <h1 className="font-bold text-2xl text-black text-left">
            Subscribe to our <br />
            Newsletter <br />& Never miss latest updates
          </h1>

          <span className="w-full max-w-md border-2 border-gray-400 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center bg-white">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 h-14 sm:h-[60px] w-full sm:rounded-l-2xl placeholder-gray-500 text-black bg-transparent outline-none"
            />

            <button className="w-full sm:w-[230px] h-12 sm:h-[55px] p-3 bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85] text-white rounded-2xl sm:rounded-l-none sm:rounded-r-2xl">
              Submit
            </button>
          </span>
        </div>
      </div>

      {/* Logo and Social Icons Section */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-28 mt-12 pb-6 text-center md:text-left">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold">
          thequreshidev
        </h1>
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-3">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/amaan-waqar-qureshi-2b8b18235/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-200 flex items-center justify-center cursor-pointer group"
            >
              <FaLinkedinIn className="text-xl text-white group-hover:text-blue-400 transition" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Amaan325"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-200 flex items-center justify-center cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:text-gray-400 transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.6 3 8.4 7.1 9.8.5.1.7-.2.7-.5v-1.6c-2.9.6-3.5-1.4-3.5-1.4-.5-1.1-1.1-1.3-1.1-1.3-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.3 0-1.2.4-2.1 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.9 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-.1 2.9-1.1 2.9-1.1.5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.8 0 4.1-2.4 5-4.7 5.3.4.4.6 1 .6 2v2.9c0 .3.2.6.7.5 4.1-1.4 7.1-5.2 7.1-9.8 0-5.8-4.7-10.5-10.5-10.5z"
                />
              </svg>
            </a>
          </div>
          <p className="text-white text-sm">
            © 2025. All Rights Reserved.
            <br />
            Visitors: {visitorCount !== null ? visitorCount : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
