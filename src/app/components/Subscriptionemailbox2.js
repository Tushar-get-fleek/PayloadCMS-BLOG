"use client";

import React, { useState } from 'react';

const SubscriptionSection2 = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-teal-500 text-white rounded-xl p-6 flex flex-col gap-4 shadow-lg max-w-xs">
      <div className="text-center">
        <h2 className="text-2xl font-bold uppercase mb-2">
          The best subscription news <span className="uppercase">ALL</span> in one place!
        </h2>
        <p className="text-sm">
          Subscribe below to stay updated!
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-teal-400 rounded-lg">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <button
          onClick={handleSubscribe}
          className="px-4 py-3 bg-white text-teal-500 rounded-lg font-medium uppercase hover:bg-gray-100 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection2;