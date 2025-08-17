import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx'; 
import Contact from './components/Contactme.jsx';

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates /> 
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
