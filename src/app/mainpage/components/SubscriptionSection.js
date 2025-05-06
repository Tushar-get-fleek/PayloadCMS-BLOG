import React from 'react';

const SubscriptionSection = () => {
  const subscriptions = [
    { name: "Prime Video", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/amazon%20prime%20logo.png", url: "https://web.getfleek.app/brand/amazon-prime" },
    { name: "Sony LIV", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/sonylivlogo.jpeg", url: "https://web.getfleek.app/brand/sony-liv" },
    { name: "Zee5", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/ZEE5LOGO.png", url: "https://web.getfleek.app/brand/zee5" },
    { name: "Alt Balaji", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/ult%20balaji%20logo.jpeg", url: "https://web.getfleek.app/brand/alt-balaji" },
    { name: "Ultra", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/ultrahuman%20logo.png", url: "http://web.getfleek.app/brand/ultrahuman" },
    { name: "TOI", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/TOI%20logo.png", url: "https://web.getfleek.app/brand/times-of-india" },
    { name: "Hoichoi", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/Hoichoi%20logo.png", url: "https://web.getfleek.app/brand/hoichoi" },
    { name: "Mint", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/mini%20logo.png", url: "https://web.getfleek.app/brand/livemint" },
    { name: "Docubay", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/Docubay%20logo.jpeg", url: "https://web.getfleek.app/brand/docubay" },
  ];

  return (
    <div className="bg-blue-600 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center">
        All your favorite subscriptions at one place!
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
        {subscriptions.map((sub, index) => (
          <a
            key={index}
            href={sub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={sub.logo}
              alt={sub.name}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white p-1 object-contain"
            />
          </a>
        ))}
      </div>
      <a
        href="https://web.getfleek.app/marketplace"
        className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-gray-200"
      >
        Explore more
      </a>
    </div>
  );
};

export default SubscriptionSection;