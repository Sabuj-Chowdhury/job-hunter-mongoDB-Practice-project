import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to track whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-base-200 shadow-lg  lg:py-6 lg:px-4 z-50">
      {/* Main navigation bar */}
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo / Name on the left */}
        <div className="text-2xl font-bold">Job Hunter</div>

        {/* Links for desktop view (hidden on small screens) */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-primary ${
                isActive ? "text-primary font-bold underline" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `hover:text-primary ${
                isActive ? "text-primary underline bold" : ""
              }`
            }
          >
            All Jobs
          </NavLink>
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `hover:text-primary ${
                isActive ? "text-primary font-bold underline" : ""
              }`
            }
          >
            My Applications
          </NavLink>
          <NavLink
            to="/jobPost"
            className={({ isActive }) =>
              `hover:text-primary ${
                isActive ? "text-primary font-bold underline" : ""
              }`
            }
          >
            My JobPost
          </NavLink>
        </div>

        {/* Login and Register buttons for desktop view */}
        <div className="hidden md:flex gap-4">
          <NavLink
            to="/login"
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800"
          >
            Register
          </NavLink>
        </div>

        {/* Hamburger menu button for mobile view */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}{" "}
          {/* Show close icon if menu is open, else show menu icon */}
        </button>
      </nav>

      {/* Mobile menu dropdown (only visible when menuOpen is true) */}
      {menuOpen && (
        <div
          className="fixed top-24 right-4 bg-base-100 shadow-lg rounded-lg w-64 transition-transform transform animate-slide-down"
          onClick={closeMenu} // Close the menu when clicked
        >
          <ul className="flex flex-col items-start py-4 px-6 gap-4">
            {/* Menu links */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block hover:text-primary ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `block hover:text-primary ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                All Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applications"
                className={({ isActive }) =>
                  `block hover:text-primary ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                My Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobPost"
                className={({ isActive }) =>
                  `block hover:text-primary ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                My JobPost
              </NavLink>
            </li>
            {/* Login and Register buttons */}
            <li className=" w-full ">
              <NavLink to="/login">
                <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 w-full">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 w-full">
                  Register
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
