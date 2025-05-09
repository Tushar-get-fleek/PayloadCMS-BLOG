"use client";

import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (email) {
      console.log('Subscribed with email:', email);
      setEmail('');
    }
  };

  // Structured Data (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Fleek Subscription Newsletter',
    description: 'Subscribe to Fleek to stay updated on the best subscription news and offers all in one place.',
    url: 'https://www.getfleek.app/subscribe',
    publisher: {
      '@type': 'Organization',
      name: 'Get Fleek',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png',
      },
    },
    potentialAction: {
      '@type': 'SubscribeAction',
      target: 'https://www.getfleek.app/subscribe',
      name: 'Subscribe to Newsletter',
    },
  };

  return (
    <section className="bg-teal-500 text-white rounded-lg py-3 xs:py-4 sm:py-6 px-3 xs:px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center gap-3 xs:gap-4 shadow-lg w-full max-w-6xl mx-auto box-border">
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <div className="text-center">
        <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 xs:mb-2">
          The best subscription news <span className="uppercase">ALL</span> in one place!
        </h2>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg">
          Subscribe below to stay updated!
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="flex flex-col items-center gap-2 xs:gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 rounded-lg bg-teal-400 text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white box-border"
          aria-label="Email address for newsletter subscription"
          required
        />
        <button
          type="submit"
          className="w-full px-4 xs:px-6 sm:px-8 py-1.5 xs:py-2 sm:py-2.5 bg-white text-teal-500 rounded-lg font-medium hover:bg-gray-100 transition box-border focus:ring-2 focus:ring-white"
          aria-label="Submit email for newsletter subscription"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscriptionSection;