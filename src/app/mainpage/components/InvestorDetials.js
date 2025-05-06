import React from 'react';

const InvestorDetails = () => {
  const subscriptions = [
    { name: "Axilor", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/Axilor%20logo.jpeg", url: "https://www.axilor.com/" },
    { name: "Rtp", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/rtp%20logo.png", url: "https://rtp.vc/" },
    { name: "blume", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/blume%20logo.png", url: "https://blume.vc/" },
    { name: "TitanCapitals", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/titan%20capitals.png", url: "https://www.titancapital.vc/" },
    { name: "Recur", logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/Recur%20logo.jpeg", url: "https://www.brandbucket.com/names/recur?s=ext" },
  ];

  // Duplicate the subscriptions array to create a seamless loop
  const duplicatedSubscriptions = [...subscriptions, ...subscriptions, ...subscriptions]; // Tripled for smoother looping

  return (
    <div className="bg-[#1A2238] py-21 flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold mb-10">
        Backed by Investors
      </h1>
      <div className="overflow-hidden w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedSubscriptions.map((sub, index) => (
            <a
              key={index}
              href={sub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-8 transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={sub.logo}
                alt={sub.name}
                className="w-20 h-20 rounded-full bg-white p-1"
              />
            </a>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${subscriptions.length * (80 + 64)}px);
            }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee ${subscriptions.length * 2}s linear infinite;
          }
          .animate-marquee > * {
            width: 80px; /* Matches w-20 */
            margin-left: 32px; /* Matches mx-8 (left) */
            margin-right: 32px; /* Matches mx-8 (right) */
          }
        `}
      </style>
    </div>
  );
};

export default InvestorDetails;