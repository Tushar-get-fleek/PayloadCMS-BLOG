import React from 'react';

const NewsroomSection = () => {
  const newsItems = [
    {
      logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/yourstorylogo.png", 
      title: "Subscription management startup Fleek raises $1M in seed round led by Axilor",
      url: "https://yourstory.com/2021/09/funding-subscription-management-platform-fleek-axilor", 
      source: "YOURSTORY",
    },
    {
      logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/Teachcircle%20logo.jpeg", 
      title: "SolRazr, Fleek, TechEagle raise $3 mn in seed-stage funding",
      url: "https://www.techcircle.in/2021/09/08/solrazr-fleek-techeagle-raise-3-mn-in-seed-stage-funding", 
      source: "TECHCIRCLE",
    },
    {
      logo: "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/inc42%20logo.png",
      title: "30 Startups To Watch: The Startups That Caught Our Eye In September 2021",
      url: "https://inc42.com/features/30-startups-to-watch-the-startups-that-caught-our-eye-in-september-2021/", 
      source: "INC42",
    },
  ];

  return (
    <div style={{ backgroundColor: '#121212' }}  className="bg-black py-12 flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-10">
        From the Newsroom
      </h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {newsItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1F1F1F] rounded-lg p-6 w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="mb-4">
              <img
                src={item.logo}
                alt={item.source}
                className="h-10 w-auto"  
              />
            </div>
            <h2 className="text-white text-lg font-semibold mb-4">
              {item.title}
            </h2>
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
              Learn more
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsroomSection;