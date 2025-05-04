"use client";

import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-teal-500 text-white rounded-lg py-6 px-60 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg max-w-6xl mx-auto">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-1">
          The best subscription news ALL in one place!
        </h2>
        <p className="text-lg">
          Subscribe below to stay updated!
        </p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-teal-400 text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          onClick={handleSubscribe}
          className="px-6 py-2 bg-white text-teal-500 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;