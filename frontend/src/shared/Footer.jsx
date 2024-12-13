import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-6 px-4 mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: About */}
        <div>
          <h2 className="text-lg font-bold mb-2">About Job Hunter</h2>
          <p className="text-sm text-gray-600">
            Job Hunter is your go-to platform for finding the perfect job or
            hiring top talent. We connect job seekers with opportunities
            worldwide.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="text-sm text-gray-600">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-primary ${
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
                  `hover:text-primary ${
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
                  `hover:text-primary ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                My Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobpost"
                className={({ isActive }) =>
                  `hover:text-primary ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                My JobPost
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Section 3: Follow Us */}
        <div>
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-800"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-600"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-700 hover:text-blue-900"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by Job
          Hunter
        </p>
      </div>
    </footer>
  );
};

export default Footer;
