import React from 'react';

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#121212' }} className="text-white flex flex-col items-center justify-center py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 min-h-[70vh]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 leading-snug sm:leading-tight">
        ALL your subscriptions under one<br />
        roof with GREAT discounts!
      </h1>
      <a
      href="https://web.getfleek.app/marketplace"
      className="bg-[#1db452] text-black font-bold py-2 px-4 sm:py-3 sm:px-6 rounded mb-6 sm:mb-8 text-sm sm:text-base hover:bg-[#17a146] hover:scale-105 transition-all duration-300"
    >
      Join Fleek
    </a>
      <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-center">
        Discover | Track | Manage
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="https://play.google.com/store/search?q=fleek&c=apps&hl=en_IN&gl=IN" className="bg-white text-black flex items-center justify-center py-2 px-4 rounded text-sm sm:text-base">
          <img src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/googleplaylogo.png" alt="Google Play" className="h-8 sm:h-10 w-auto mr-2" />
          GET IT ON Google Play
        </a>
        <a href="https://apps.apple.com/in/app/fleek-manage-subscriptions/id1604744564" className="bg-white text-black flex items-center justify-center py-2 px-4 rounded text-sm sm:text-base">
          <img src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/app%20store%20logo.png" alt="App Store" className="h-8 sm:h-10 w-auto mr-2" />
          Download on the App Store
        </a>
      </div>
    </div>
  );
};

export default HeroSection;