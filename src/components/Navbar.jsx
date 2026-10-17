
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaArrowUp
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Projects", link: "projects" },
    { id: 4, name: "Certificates", link: "certificates" },
    { id: 5, name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  const closeMenu = (link) => {
    setActiveLink(link);
    setNav(false);
  };

  return (
    <header className="premium-navbar">
      <nav
        className={`navbar-shell ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={600}
          className="navbar-brand"
          onClick={() => closeMenu("home")}
        >
          <span className="brand-icon">
            <FaCode />
          </span>

          <span className="brand-name">
            SUMIT-YADAV<span className="brand-accent">🩷</span>
            
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {links.map(({ id, name, link }) => (
            <li key={id} className="navbar-item">
              <Link
                to={link}
                smooth
                duration={600}
                offset={-75}
                spy
                onSetActive={() => setActiveLink(link)}
                onClick={() => closeMenu(link)}
                className={`navbar-link ${
                  activeLink === link ? "active-link" : ""
                }`}
              >
                {name}
                <span className="nav-link-glow" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <Link
          to="contact"
          smooth
          duration={600}
          offset={-75}
          onClick={() => closeMenu("contact")}
          className="navbar-cta"
        >
          Let's Talk
          <FaArrowUp className="cta-arrow" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={nav}
          aria-controls="mobile-navigation"
          onClick={() => setNav((previous) => !previous)}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu-overlay ${
          nav ? "mobile-menu-open" : ""
        }`}
        onClick={() => setNav(false)}
        aria-hidden={!nav}
      >
        <ul
          id="mobile-navigation"
          className="mobile-menu-panel"
          onClick={(event) => event.stopPropagation()}
        >
          <li className="mobile-menu-heading">
            <span>EXPLORE</span>
            <span className="mobile-menu-dot" />
          </li>

          {links.map(({ id, name, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={600}
                offset={-75}
                onClick={() => closeMenu(link)}
                className={`mobile-nav-link ${
                  activeLink === link ? "active-link" : ""
                }`}
              >
                <span className="mobile-nav-number">
                  0{id}
                </span>
                {name}
                <span className="mobile-nav-arrow">↗</span>
              </Link>
            </li>
          ))}

          <li className="mobile-menu-footer">
            <span>LET'S BUILD SOMETHING GREAT.</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
