"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100 border-b border-[#33353F]">
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center justify-between gap-2 xs:gap-3 sm:gap-4">
        {/* Brand Logo (hidden on smaller screens, shown on lg+) */}
        <div className="hidden lg:flex items-center flex-shrink-0 text-white text-xl font-bold">
          <Link href="/">Fleek App</Link>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-2 xs:px-2.5 py-2 rounded text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:bg-gray-800"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ${isOpen ? "hidden" : "block"}`}
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
              className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ${isOpen ? "block" : "hidden"}`}
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
          className={`w-full lg:w-auto absolute lg:static top-14 left-0 lg:top-0 ${isOpen ? "block translate-y-0 opacity-100" : "hidden translate-y-[-10px] opacity-0"} lg:block lg:transform-none lg:opacity-100 bg-gray-900 lg:bg-transparent transition-all duration-300 ease-in-out`}
          id="navbar"
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-3 xl:space-x-6 p-4 xs:p-5 lg:p-0 rounded-b-lg lg:rounded-none">
            <li className="lg:mb-0">
              <Link
                href="/about"
                className="block py-2 xs:py-2.5 lg:py-0 text-gray-200 hover:text-white text-xs xs:text-sm sm:text-base lg:text-lg transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li className="lg:mb-0">
              <Link
                href="#projects"
                className="block py-2 xs:py-2.5 lg:py-0 text-gray-200 hover:text-white text-xs xs:text-sm sm:text-base lg:text-lg transition-colors duration-200"
              >
                Offers
              </Link>
            </li>
            <li className="lg:mb-0">
              <Link
                href="#blog"
                className="block py-2 xs:py-2.5 lg:py-0 text-gray-200 hover:text-white text-xs xs:text-sm sm:text-base lg:text-lg transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
            <li className="lg:mb-0">
              <Link
                href="/subscription"
                className="block py-2 xs:py-2.5 lg:py-0 text-gray-200 hover:text-white text-xs xs:text-sm sm:text-base lg:text-lg transition-colors duration-200"
              >
                Discover Subscription
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;