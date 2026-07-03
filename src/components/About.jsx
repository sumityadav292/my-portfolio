import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-lg bg-white/5 rounded-xl shadow-2xl p-10 max-w-4xl text-center border border-white/10"
      >
        <h2 className="text-5xl font-extrabold mb-6 text-indigo-400 drop-shadow-lg">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
          Hello! I am{" "}
          <span className="text-white font-semibold">Sumit Yadav</span>, a
          B.Tech graduate in Computer Science & Engineering from RR Group of Institutions (AKTU), Lucknow.
          <br />
          <br />
          I love crafting engaging web apps and solving real-world challenges
          with code. I am passionate about{" "}
          <span className="text-indigo-300 font-medium">
            Full stack development
          </span>{" "}
          and constantly expanding my skillset.
          <br />
          <br />
          <span className="block text-indigo-400 font-semibold mt-4 mb-2">
            My Core Skills:
          </span>
          <span className="text-indigo-200">
            React, Tailwind CSS, JavaScript, C++, Git & GitHub, and more.
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default About;
