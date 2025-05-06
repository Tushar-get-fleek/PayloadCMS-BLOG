"use client";
import React from 'react';

const ImageGridEffect = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] p-4 sm:p-6 lg:p-8 transition-all duration-500">
      <div
        id="grid"
        className="w-[calc(100%-4vmin)] sm:w-[calc(100%-8vmin)] lg:w-[calc(100%-10vmin)] aspect-[16/7] xs:aspect-[4/3] sm:aspect-[16/7] bg-[#fbfaf5] grid grid-cols-[1fr_0fr_1fr] items-center justify-items-center outline outline-1 sm:outline-2 outline-[#804a00] rounded-[4vmin] sm:rounded-[5vmin] shadow-[0_0.5rem_1rem_-0.5rem_rgba(68,50,4,1)] sm:shadow-[0_1rem_2rem_-1rem_rgba(68,50,4,1)] overflow-hidden transition-all duration-500 hover:grid-cols-[0fr_1fr_0fr] max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]"
      >
        <div
          className="left w-full h-full bg-[url('https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/image1.png')] bg-cover bg-center border-r border-[#804a00] transition-all duration-500"
        />
        <div
          className="middle w-full h-full bg-[url('https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleekappimage.png')] bg-cover bg-center text-[0rem] transition-all duration-500"
        />
        <div
          className="right w-full h-full bg-[url('https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/image3.png')] bg-cover bg-center border-l border-[#804a00] transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default ImageGridEffect;