import React from "react";
import profile from "../assets/Sumit.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
      
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-indigo-400 drop-shadow-sm">
          Hi, I am <span className="text-white">Sumit Yadav</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          A passionate Full Stack Developer, bringing ideas to life through clean, efficient, and modern code.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-7 py-3 rounded-lg transition duration-300 shadow-lg"
        >
          Let’s Connect
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-105 duration-300">
          <img
            src={profile}
            alt="Sumit Yadav"
            className="w-80 h-80 object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
