
import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi2";
import profile from "../assets/Sumit.png";

const skills = ["React.js", "JavaScript", "Node.js", "MongoDB"];

const CV_URL =
  "https://drive.google.com/uc?export=download&id=1A8eBcYoZO1VF0mUsESLUR3Rdo3ZQ2mJN";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Ambient background */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-container">
        {/* Left content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-availability">
            <span className="availability-dot" />
            Available for opportunities
            <HiSparkles className="availability-sparkle" />
          </div>

          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            HELLO, I AM
          </p>

          <h1 className="hero-title">
            Sumit
            <span className="hero-title-highlight"> Yadav</span>
            <span className="hero-title-period">.</span>
          </h1>

          <div className="hero-role">
            <span className="hero-role-icon">
              <FaCode />
            </span>

            <span>Full Stack Developer</span>

            <span className="hero-role-divider">/</span>

            <span className="hero-role-secondary">React.js</span>
          </div>

          <p className="hero-description">
            I build modern, responsive and interactive web
            experiences using clean code and creative thinking.
            Passionate about turning ideas into real-world
            digital products.
          </p>

          {/* Skills */}
          <div className="hero-skills">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="hero-skill-chip"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35 + index * 0.1,
                  duration: 0.4,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="hero-actions">
            {/* Premium Download CV button */}
            <motion.a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cv-button"
              aria-label="Download Sumit Yadav's CV"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="hero-cv-icon">
                <FaDownload />
              </span>

              <span className="hero-cv-text">
                <strong>Download My CV</strong>
                <small>View my resume &amp; experience</small>
              </span>

              <FaArrowRight className="hero-cv-arrow" />
            </motion.a>

            {/* Let's Connect button */}
            <a
              href="#contact"
              className="hero-button hero-button-secondary"
            >
              Let's Connect
              <FaLaptopCode />
            </a>
          </div>

          {/* Social links */}
          <div className="hero-socials">
            <span className="hero-social-label">FIND ME ON</span>

            <a
              href="https://github.com/sumityadav292"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sumit8887y/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right profile visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <div className="hero-image-scene">
            {/* Outer animated ring */}
            <motion.div
              className="hero-ring hero-ring-outer"
              animate={{ rotate: 360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="hero-ring-dot ring-dot-one" />
              <span className="hero-ring-dot ring-dot-two" />
              <span className="hero-ring-dot ring-dot-three" />
            </motion.div>

            {/* Inner animated ring */}
            <motion.div
              className="hero-ring hero-ring-inner"
              animate={{ rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Profile card */}
            <motion.div
              className="hero-profile-card"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="hero-profile-top">
                <span className="profile-status">
                  <span className="availability-dot" />
                  DEVELOPER PROFILE
                </span>

                <HiSparkles />
              </div>

              <div className="hero-image-frame">
                <div className="hero-image-glow" />

                <img
                  src={profile}
                  alt="Sumit Yadav, Full Stack Developer"
                  className="hero-profile-image"
                />
              </div>

              <div className="hero-profile-info">
                <span className="hero-profile-name">
                  Sumit Yadav
                </span>

                <span className="hero-profile-caption">
                  Building digital experiences
                </span>
              </div>

              <div className="hero-profile-footer">
                <span>
                  <FaCode />
                  Clean Code
                </span>

                <span>
                  <HiSparkles />
                  Creative UI
                </span>
              </div>
            </motion.div>

            {/* Floating code badge */}
            <motion.div
              className="hero-float-card hero-float-code"
              animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaCode />
              <span>Code. Create. Build.</span>
            </motion.div>

            {/* Floating technology badge */}
            <motion.div
              className="hero-float-card hero-float-tech"
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaLaptopCode />
              <span>Full Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-indicator">
        <span className="hero-scroll-line" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
};

export default Hero;
