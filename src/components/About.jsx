
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "C++",
  "PHP",
  "MySQL",

  "Vite",
  "Framer Motion",
];

const highlights = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: <FaCode />,
    title: "Development",
    description: "Modern web applications",
  },
  {
    icon: <FaRocket />,
    title: "My Approach",
    description: "Learn, build and improve",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-background-glow" aria-hidden="true" />

      <div className="about-container">
        {/* Section heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span className="about-eyebrow">
            <HiSparkles />
            GET TO KNOW ME
          </span>

          <h2>
            About <span>Me.</span>
          </h2>

          <p>
            A little about my journey, my passion and what I love building.
          </p>
        </motion.div>

        {/* Main glass card */}
        <motion.div
          className="about-main-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="about-card-decoration" aria-hidden="true" />

          <div className="about-card-top">
            <div className="about-code-icon">
              <FaLaptopCode />
            </div>

            <span className="about-card-label">
              MY STORY <span>01 / 03</span>
            </span>
          </div>

          <h3>
            Turning ideas into{" "}
            <span>digital experiences.</span>
          </h3>

          <p className="about-description">
            Hello! I'm <strong>Sumit Yadav</strong>, a Computer Science
            and Engineering graduate from RR Group of Institutions,
            affiliated with AKTU, Lucknow.
          </p>

          <p className="about-description">
            I enjoy creating responsive websites and interactive web
            applications that combine thoughtful design with practical
            functionality. I work with modern frontend technologies and
            continue learning backend development to build full-stack
            applications.
          </p>

          <p className="about-description">
            My goal is to solve real-world problems through code,
            strengthen my development skills and contribute to projects
            that make a meaningful difference.
          </p>

          <div className="about-values">
            <div>
              <FaCheckCircle />
              <span>Clean, maintainable code</span>
            </div>
            <div>
              <FaCheckCircle />
              <span>Responsive user interfaces</span>
            </div>
            <div>
              <FaCheckCircle />
              <span>Continuous learning</span>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="about-highlights">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="about-highlight-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="about-highlight-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          className="about-skills-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="about-skills-heading">
            <div>
              <span className="about-skills-eyebrow">MY TOOLKIT</span>
              <h3>Technologies I Work With</h3>
            </div>

            <FaCode className="about-skills-heading-icon" />
          </div>

          <div className="about-skill-list">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="about-skill-chip"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.06, y: -3 }}
              >
                <span className="about-skill-dot" />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
