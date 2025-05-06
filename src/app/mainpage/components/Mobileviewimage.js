"use client";
import React, { useState, useEffect } from 'react';

const AnimatedImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* First image with fade-in animation */}
      <div className="bg-black flex justify-center ">
        <img
          src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleekappimage.png"
          alt="Fleek App Screens"
          className={`max-w-full h-auto transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Second image in its own section */}
      <div className="bg-black flex justify-center ">
        <img
          src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/Screenshot%202025-05-05%20at%2011.20.14%20PM.png"
          alt="Speciality offers"
          className="max-w-full h-auto"
        />
      </div>
    </>
  );
};

export default AnimatedImage;
