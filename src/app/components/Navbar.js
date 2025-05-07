import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100 border-b border-[#33353F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-between flex-wrap">
        {/* Brand Logo */}
        <div className="flex items-center flex-shrink-0 text-white text-lg sm:text-xl font-bold">
          <Link href="/">
            Fleek App
          </Link>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 rounded text-gray-200 hover:text-white focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 p-4 md:p-0 bg-gray-800 md:bg-transparent rounded-lg md:rounded-none">
            <li className="md:mb-0">
              <Link
                href="/about"
                className="block py-2 md:py-0 text-gray-200 hover:text-white text-sm sm:text-base"
              >
                About
              </Link>
            </li>
            <li className="md:mb-0">
              <Link
                href="#projects"
                className="block py-2 md:py-0 text-gray-200 hover:text-white text-sm sm:text-base"
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                href="#blog"
                className="block py-2 md:py-0 text-gray-200 hover:text-white text-sm sm:text-base"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;