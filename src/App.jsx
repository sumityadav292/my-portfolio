
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contactme.jsx';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <div className="portfolio-background" aria-hidden="true">
        <div className="ambient ambient-blue" />
        <div className="ambient ambient-purple" />
        <div className="ambient ambient-cyan" />
      </div>

      <Navbar />

      <main>
        <section id="home" className="portfolio-section">
          <Hero />
        </section>

        <section id="about" className="portfolio-section">
          <About />
        </section>

        <section id="projects" className="portfolio-section">
          <Projects />
        </section>

        <section id="certificates" className="portfolio-section">
          <Certificates />
        </section>

        <section id="contact" className="portfolio-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
