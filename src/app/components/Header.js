"use client";

import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // SEO Metadata
  const pageTitle = 'Fleek - Discover Subscriptions and More';
  const metaDescription = 'Explore subscription services, partnerships, and more with Fleek. Download now and join our community!';
  const metaKeywords = 'Fleek, subscriptions, partnerships, lifestyle, download app';
  const canonicalUrl = 'https://www.getfleek.app';
  const featuredImage = 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png';

  // Structured Data (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    image: featuredImage,
    publisher: {
      '@type': 'Organization',
      name: 'Get Fleek',
      logo: {
        '@type': 'ImageObject',
        url: featuredImage,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Get Fleek" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Get Fleek" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitterSolicita una demostración"/>
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={featuredImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <header className="fixed top-0 left-0 w-full z-50">
        {/* Banner Section */}
        <div className="bg-teal-500 text-white py-2 xs:py-3 px-4 xs:px-6 sm:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 xs:gap-3 flex-1">
            <div className="flex-1 flex justify-center">
              <span className="text-xs xs:text-sm sm:text-base font-medium text-center">
                DRUMROLL! YOU CAN NOW PURCHASE SUBSCRIPTIONS THROUGH OUR FLEEK WEBSITE!
              </span>
            </div>
          </div>
          <button
            className="bg-black text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium hover:bg-gray-800 transition focus:ring-2 focus:ring-white"
            aria-label="Buy subscriptions now"
          >
            BUY NOW!
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="bg-black text-white py-3 xs:py-4 px-4 xs:px-6 sm:px-8 flex justify-between items-center gap-3 xs:gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1 xs:gap-2">
            {/* Circular Icons (visible on all screens) */}
            <div className="w-5 h-5 xs:w-6 xs:h-6 flex items-center justify-center">
              <div className="w-3 h-3 xs:w-4 xs:h-4 bg-teal-500 rounded-full"></div>
              <div className="w-3 h-3 xs:w-4 xs:h-4 bg-white rounded-full -ml-1.5 xs:-ml-2"></div>
            </div>
            {/* Logo Text (hidden on mobile, shown on sm+) */}
            <span className="hidden sm:block text-base xs:text-lg sm:text-xl font-bold">fleek</span>
          </div>

          {/* Hamburger Menu Button (visible on mobile) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-2 py-1.5 rounded text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`w-5 h-5 xs:w-6 xs:h-6 ${isOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`w-5 h-5 xs:w-6 xs:h-6 ${isOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`sm:flex sm:items-center sm:gap-4 lg:gap-6 ${isOpen ? 'block' : 'hidden'} sm:block absolute sm:static top-[calc(100%+0.5rem)] left-0 w-full sm:w-auto bg-black sm:bg-transparent transition-all duration-300 ease-in-out`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 xs:gap-4 p-4 xs:p-5 sm:p-0">
              <Link
                href="/discover"
                className="text-xs xs:text-sm sm:text-base hover:text-gray-300 focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                Discover Subscriptions
              </Link>
              <Link
                href="/partner"
                className="text-xs xs:text-sm sm:text-base hover:text-gray-300 focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                Partner with us
              </Link>
              <Link
                href="/about"
                className="text-xs xs:text-sm sm:text-base hover:text-gray-300 focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/careers"
                className="text-xs xs:text-sm sm:text-base hover:text-gray-300 focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <button
                className="bg-teal-500 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm sm:text-base font-medium hover:bg-teal-600 transition sm:ml-2 focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
                aria-label="Download Fleek app"
              >
                Download Now
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;