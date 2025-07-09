import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Footer from "./Footer";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero/About Section */}
      <section className="w-full">
        <About />
      </section>

      {/* Skills Section (already inside About) */}

      {/* Projects Section */}
      <section className="w-full">
        <Project />
      </section>

      {/* Contact Section */}
      <section className="w-full">
        <Footer />
      </section>

      {/* Newsletter */}
      <section className="w-full">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Home;
