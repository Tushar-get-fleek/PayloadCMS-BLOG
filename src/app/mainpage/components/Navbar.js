import React from 'react';

const Navbar = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-[#4ba76b] flex flex-col sm:flex-row items-center justify-center py-2 px-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-wrap justify-center items-center space-x-2">
          <img src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/amazon%20prime%20logo.png" alt="Amazon" className="h-8 sm:h-10" />
          <img src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/ZEE5LOGO.png" alt="Zee5" className="h-8 sm:h-10" />
          <img src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/sonylivlogo.jpeg" alt="SonyLIV" className="h-8 sm:h-10" />
        </div>
        <span className="text-black font-bold text-sm sm:text-base text-center sm:mx-4">
          GET EXCLUSIVE DISCOUNTS UPTO 45% OFF & MORE!
        </span>
        <a
          href="https://web.getfleek.app/marketplace"
          className="bg-black text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-base inline-block"
        >
          BUY NOW!
        </a>
      </div>

      {/* Main Navbar */}
      <div className="bg-black flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="flex items-center mr-4">
            {/* Removed the colored circle */}
            <img
              src="https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png"
              alt="Fleek Logo"
              className="h-6 sm:h-8 ml-2"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
          <a href="https://web.getfleek.app/marketplace" className="text-white hover:text-gray-300 text-sm sm:text-base">Discover Subscriptions</a>
          <a href="https://getfleek.app/partner-with-us" className="text-white hover:text-gray-300 text-sm sm:text-base">Partner with us</a>
          <a href="https://getfleek.app/about-us" className="text-white hover:text-gray-300 text-sm sm:text-base">About us</a>
          <a href="https://getfleek.app/careers" className="text-white hover:text-gray-300 text-sm sm:text-base">Careers</a>
          <a
            href="https://web.getfleek.app/download"
            className="bg-[#1db452] text-black font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-base inline-block"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
