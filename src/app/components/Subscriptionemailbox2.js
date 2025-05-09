"use client";

import React, { useState } from 'react';

const SubscriptionSection2 = () => {
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
    <section className="bg-teal-500 text-white rounded-xl p-4 xs:p-6 flex flex-col gap-4 shadow-lg max-w-xs mx-auto">
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <div className="text-center">
        <h2 className="text-xl xs:text-2xl font-bold uppercase mb-2">
          The best subscription news <span className="uppercase">ALL</span> in one place!
        </h2>
        <p className="text-xs xs:text-sm">
          Subscribe below to stay updated!
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="flex items-center gap-2 xs:gap-3">
        <div className="flex-1 bg-teal-400 rounded-lg">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-transparent text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Email address for newsletter subscription"
            required
          />
        </div>
        <button
          type="submit"
          className="px-3 xs:px-4 py-2 xs:py-3 bg-white text-teal-500 rounded-lg font-medium uppercase hover:bg-gray-100 transition focus:ring-2 focus:ring-white"
          aria-label="Submit email for newsletter subscription"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SubscriptionSection2;