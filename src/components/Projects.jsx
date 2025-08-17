import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    desc: "React + Tailwind based responsive portfolio website.",
    link: "http://localhost:5173/",
  },
  {
    id: 2,
    title: "Student Information System",
    desc: "A web app to store, edit, delete, and view student records using localStorage.",
    link: "https://sumityadavproj.netlify.app/",
  },
  {
    id: 3,
title: "Weather App",
desc: "A modern weather forecasting app with real-time data, responsive design, and dynamic icons based on live conditions.",
link: "https://sumityadavproject.netlify.app/", 

  },
];

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-indigo-400 drop-shadow-md">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-indigo-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition duration-300 mt-2"
              >
                View Project <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
