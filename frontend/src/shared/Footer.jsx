import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Section 1: About */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            About Job Hunter
          </h2>
          <p className="text-sm leading-relaxed">
            Job Hunter connects talented job seekers with top companies
            worldwide. Whether you’re looking for your dream job or seeking to
            hire top talent, we’re here to help.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-500 transition-colors ${
                    isActive ? "text-blue-500 font-medium" : ""
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
                  `hover:text-blue-500 transition-colors ${
                    isActive ? "text-blue-500 font-medium" : ""
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
                  `hover:text-blue-500 transition-colors ${
                    isActive ? "text-blue-500 font-medium" : ""
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
                  `hover:text-blue-500 transition-colors ${
                    isActive ? "text-blue-500 font-medium" : ""
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
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Job Hunter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
