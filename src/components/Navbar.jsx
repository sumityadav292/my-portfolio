import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
     { id: 4, link: "certificates" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="fixed w-full h-16 px-6 backdrop-blur-lg bg-black/30 text-white flex justify-between items-center z-50 shadow-md border-b border-white/10">
      <h1 className="text-2xl font-extrabold text-indigo-400 tracking-wide">
        Sumit-Yadav
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize text-sm font-medium cursor-pointer group transition-all duration-300"
          >
            <Link to={link} smooth duration={500}>
              <span className="relative group-hover:text-indigo-400">
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-50 cursor-pointer" onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 text-center py-8 flex flex-col space-y-6 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize text-lg font-medium hover:text-indigo-400 transition-all duration-300"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
