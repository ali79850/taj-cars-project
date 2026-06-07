import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import tajcarsLogo from "../assets/tajcarslogo.jpg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={tajcarsLogo} className="h-8 rounded-full" alt="Taj Cars Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Taj Cars</span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar">
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-white md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
            {["/", "/about", "/services", "/contact"].map((path, idx) => {
              const labels = ["Home", "About", "Services", "Contact"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:border-0 md:p-0 transition ${
                        isActive
                          ? "text-blue-700 dark:text-blue-500 border-b-2  border-blue-900 md:border-b-0 md:hover:bg-transparent"
                          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }`
                    }
                    onClick={() => setMenuOpen(false)} // close on click mobile
                  >
                    {labels[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
