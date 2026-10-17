import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaCloudSun,
  FaUsers,
  FaLaptopCode,
  FaFilm,
  FaTachometerAlt,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Personal Portfolio",
    category: "PERSONAL WEBSITE",
    desc: "A responsive developer portfolio showcasing my skills, projects and development journey through a modern user interface.",
    link: "https://sumityadavportfolio1.netlify.app/",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icon: <FaLaptopCode />,
    color: "purple",
    github: "",
  },
  {
    id: 2,
    number: "02",
    title: "Movie Clone",
    category: "MOVIE WEB APPLICATION",
    desc: "A cinematic movie-themed web application featuring an engaging interface and a modern browsing experience.",
    link: "https://movieclonesumit.vercel.app/",
    tech: ["Web Development", "Responsive UI"],
    icon: <FaFilm />,
    color: "cyan",
    github: "",
  },
  {
    id: 3,
    number: "03",
    title: "SpeedTest Pro",
    category: "INTERNET SPEED TESTER",
    desc: "An interactive internet speed checker designed to help users test their connection and explore network performance through a modern interface.",
    link: "https://speed-checker-sy.netlify.app/",
    tech: ["React.js", "Vite", "Network Testing"],
    icon: <FaTachometerAlt />,
    color: "pink",
    github: "",
  },
  {
    id: 4,
    number: "04",
    title: "Student Information System",
    category: "WEB APPLICATION",
    desc: "A student record management application to add, view, edit and delete student information using localStorage.",
    link: "https://sumityadavproj.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    icon: <FaUsers />,
    color: "purple",
    github: "",
  },
  {
    id: 5,
    number: "05",
    title: "Weather App",
    category: "WEATHER APPLICATION",
    desc: "A weather application featuring live weather information, dynamic weather icons and a responsive interface.",
    link: "https://sumityadavproject.netlify.app/",
    tech: ["JavaScript", "API Integration", "CSS"],
    icon: <FaCloudSun />,
    color: "cyan",
    github: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-glow projects-bg-glow-one" />
      <div className="projects-bg-glow projects-bg-glow-two" />

      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span className="projects-eyebrow">
            <HiSparkles />
            SELECTED WORK
          </span>

          <h2>
            My <span>Projects.</span>
          </h2>

          <p>
            A collection of projects where ideas turn into working
            digital experiences.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card project-${project.color}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.13,
              }}
              whileHover={{
                y: -9,
                rotateX: 2,
                transition: { duration: 0.25 },
              }}
            >
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-visual">
                <div className="project-visual-orb" />
                <div className="project-icon">
                  {project.icon}
                </div>
                <span className="project-visual-sparkle">
                  <HiSparkles />
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-tech-list">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="project-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-button"
                  aria-label={`Open live demo of ${project.title}`}
                >
                  Live Demo
                  <FaExternalLinkAlt />
                </a>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-button"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-bottom-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <FaReact />
          <span>Designed with curiosity. Built with code.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
