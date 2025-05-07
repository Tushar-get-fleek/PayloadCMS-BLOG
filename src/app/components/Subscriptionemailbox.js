"use client";

import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-teal-500 text-white rounded-lg py-4 px-4 sm:px-8 md:px-16 lg:px-60 flex flex-col items-center justify-center gap-4 shadow-lg w-full max-w-6xl mx-auto box-border">
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
          The best subscription news ALL in one place!
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Subscribe below to stay updated!
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full max-w-md px-3 py-2 rounded-lg bg-teal-400 text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white box-border"
        />
        <button
          onClick={handleSubscribe}
          className="w-full max-w-md px-6 py-2 bg-white text-teal-500 rounded-lg font-medium hover:bg-gray-100 transition box-border"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;