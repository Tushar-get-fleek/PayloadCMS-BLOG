"use client";

import React from 'react';

const SubscribeButton = () => {
  return (
    <button 
      className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg uppercase shadow-sm hover:shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
      onClick={() => alert('Subscription initiated!')}
    >
      Click Here to Buy Now!
    </button>
  );
};

export default SubscribeButton;