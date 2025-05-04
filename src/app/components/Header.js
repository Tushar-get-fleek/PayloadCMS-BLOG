"use client";

import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      {/* Banner Section */}
      <div className="bg-teal-500 text-white py-3 px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 flex-1">
          {/* Subscription Service Logos (if any) */}
          <div className="flex-1 flex justify-center">
            <span className="text-sm font-medium">
              DRUMROLL! YOU CAN NOW PURCHASE SUBSCRIPTIONS THROUGH OUR FLEEK WEBSITE!
            </span>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition">
          BUY NOW!
        </button>
      </div>

      {/* Navigation Section */}
      <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full -ml-2"></div>
          </div>
          <span className="text-xl font-bold">fleek</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/discover" className="text-sm hover:text-gray-300">
            Discover Subscriptions
          </Link>
          <Link href="/partner" className="text-sm hover:text-gray-300">
            Partner with us
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-300">
            About us
          </Link>
          <Link href="/careers" className="text-sm hover:text-gray-300">
            Careers
          </Link>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition">
            Download Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;