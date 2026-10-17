
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaAward,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

import delTech from "../assets/Del_technology.png";
import deloitte from "../assets/Deloitte.png";
import edureka from "../assets/edureka.png";
import simplilearn from "../assets/simplelearn.png";
import udemy from "../assets/Udemy.png";
import Claude from "../assets/Claude.png";
import trainx from "../assets/TrainX.png";

const certificates = [
  {
    id: 1,
    title: "Professional Certification",
    issuer: "Edureka",
    link: "https://drive.google.com/file/d/1Y9GMd_KpHKa2mJe5GhHLUs8Uk2yGJbbX/view?usp=drive_link",
    img: edureka,
    number: "01",
  },
  {
    
  id: 2,
  title: "Data Structure and Algorithm",
  issuer: "TrainX",
  link: "https://drive.google.com/file/d/1dz_nawZPeEiMN8R5nyPMOQFkpulAZb1Z/view?usp=sharing",
  img: trainx,
  number: "02",

  },
  {
    id: 3,
    title: "Online Learning Certification",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/12XIcc2BbyIH6QHjGn9ad8EEOR9gC4ORk/view?usp=drive_link",
    img: udemy,
    number: "03",
  },
  {
    id: 4,
    title: "Professional Development",
    issuer: "Deloitte",
    link: "https://drive.google.com/file/d/1S3R86HdeZKjsKyxM9pLYpBpaJjAnDs4i/view?usp=drive_link",
    img: deloitte,
    number: "04",
  },
  {
    id: 5,
    title: "Skills Certification",
    issuer: "Simplilearn",
    link: "https://drive.google.com/file/d/1HtE13PDuPJWka4eDWsF_jb9Yh-CSRlh2/view?usp=drive_link",
    img: simplilearn,
    number: "05",
  },
  {
    id: 6,
    title: "AI Learning Certification",
    issuer: "Claude",
    link: "https://drive.google.com/file/d/1vrAc7sQc-A-KzGfOY0tqfVOM_V5vd8gi/view?usp=drivesdk",
    img: Claude,
    number: "06",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-glow certificates-glow-one" />
      <div className="certificates-glow certificates-glow-two" />

      <div className="certificates-container">
        {/* Heading */}
        <motion.div
          className="certificates-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span className="certificates-eyebrow">
            <HiSparkles />
            LEARNING & ACHIEVEMENTS
          </span>

          <h2>
            My <span>Certificates.</span>
          </h2>

          <p>
            Every certificate represents a step forward in my
            learning journey and technical development.
          </p>

          <div className="certificates-count">
            <FaAward />
            <span>
              <strong>{certificates.length}</strong> Certificates
            </span>
          </div>
        </motion.div>

        {/* Certificate cards */}
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="certificate-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{
                y: -7,
                transition: { duration: 0.25 },
              }}
            >
              <div className="certificate-preview">
                <div className="certificate-preview-top">
                  <span className="certificate-number">
                    {cert.number}
                  </span>

                  <span className="certificate-preview-icon">
                    <FaCertificate />
                  </span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-image-link"
                  aria-label={`Open ${cert.issuer} certificate`}
                >
                  <img
                    src={cert.img}
                    alt={`${cert.issuer} certificate`}
                    className="certificate-image"
                    loading="lazy"
                  />

                  <span className="certificate-image-overlay">
                    <FaExternalLinkAlt />
                    Preview Certificate
                  </span>
                </a>
              </div>

              <div className="certificate-card-content">
                <span className="certificate-verified-label">
                  <FaShieldAlt />
                  CERTIFICATE
                </span>

                <h3>{cert.title}</h3>

                <p className="certificate-issuer">
                  Issued by <strong>{cert.issuer}</strong>
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-view-button"
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="certificates-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaAward />
          <span>Always learning. Always improving.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
