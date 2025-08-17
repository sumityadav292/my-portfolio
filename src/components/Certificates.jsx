import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import delTech from "../assets/Del_technology.png";
import deloitte from "../assets/Deloitte.png";
import edureka from "../assets/edureka.png";
import simplilearn from "../assets/simplelearn.png";
import udemy from "../assets/Udemy.png";

const certificates = [
  {
    id: 1,
    title: "Certificate 1",
    issuer: "Google Drive",
    link: "https://drive.google.com/file/d/1Y9GMd_KpHKa2mJe5GhHLUs8Uk2yGJbbX/view?usp=drive_link",
    img: edureka,
  },
  {
    id: 2,
    title: "Certificate 2",
    issuer: "Google Drive",
    link: "https://drive.google.com/file/d/1ZSbmWt30PFOoqYCK-p-3dzRkM8Ebc9bq/view?usp=drive_link",
    img: delTech,
  },
  {
    id: 3,
    title: "Certificate 3",
    issuer: "Google Drive",
    link: "https://drive.google.com/file/d/12XIcc2BbyIH6QHjGn9ad8EEOR9gC4ORk/view?usp=drive_link",
    img: udemy,
  },
  {
    id: 4,
    title: "Certificate 4",
    issuer: "Google Drive",
    link: "https://drive.google.com/file/d/1S3R86HdeZKjsKyxM9pLYpBpaJjAnDs4i/view?usp=drive_link",
    img: deloitte,
  },
  {
    id: 5,
    title: "Certificate 5",
    issuer: "Google Drive",
    link: "https://drive.google.com/file/d/1HtE13PDuPJWka4eDWsF_jb9Yh-CSRlh2/view?usp=drive_link",
    img: simplilearn,
  },
];

const Certificates = () => {
  return (
    <section
      name="certificates"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-indigo-400 drop-shadow-md">
          Certificates
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-md hover:shadow-indigo-500/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-300">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition duration-300 mt-3"
                >
                  View Certificate <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
