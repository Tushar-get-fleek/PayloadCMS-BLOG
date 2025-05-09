"use client";

import React from 'react';

const SubscribeButton = () => {
  const handleClick = () => {
    // Replace with production logic (e.g., redirect to checkout or API call)
    console.log('Subscription initiated!');
    // Example: window.location.href = 'https://www.getfleek.app/checkout';
  };

  // Structured Data (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BuyAction',
    name: 'Subscribe to Fleek',
    description: 'Click to purchase a Fleek subscription and access exclusive subscription news and offers.',
    url: 'https://www.getfleek.app/subscribe',
    agent: {
      '@type': 'Organization',
      name: 'Get Fleek',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png',
      },
    },
    object: {
      '@type': 'Product',
      name: 'Fleek Subscription',
      description: 'Access exclusive subscription news and offers with a Fleek subscription.',
    },
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.getfleek.app/checkout',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
    },
  };

  return (
    <div className="flex justify-center">
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <button
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 xs:py-2 sm:py-2.5 md:py-3 px-3 xs:px-4 sm:px-5 md:px-6 rounded-lg uppercase shadow-sm hover:shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 text-xs xs:text-sm sm:text-base md:text-lg"
        onClick={handleClick}
        aria-label="Purchase a Fleek subscription"
      >
        Click Here to Buy Now!
      </button>
    </div>
  );
};

export default SubscribeButton;