"use client";
import React, { useState, useEffect, useRef } from 'react';

const FeaturesSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [showImage, setShowImage] = useState(false); // New state to control image visibility
  const sectionRefs = useRef([]);

  const features = [
    {
      heading: 'Track, Manage and more!',
      description: [
        'Tracks the status of ALL your active subscriptions with regular updates and alerts.',
        'Easy share features to help you keep track of payments from family and friends you share your subs with.',
        'Never forget a subscription and never pay for subscriptions you aren’t using.'
      ],
      image: 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/image1.png'
    },
    {
      heading: 'Exciting subscription offers with exclusive Bundles.',
      description: [
        'It’s almost like buying multiple subs and paying for just HALF of them!'
      ],
      image: 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/image2.png'
    },
    {
      heading: 'Earn FleekCoin Get more discounts.',
      description: [
        'Our one-of-a-kind digital currency which helps you save real money on your subscriptions.'
      ],
      image: 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/image3.png'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let highestVisibleIndex = visibleIndex;
        let maxIntersectionRatio = 0;

        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          const intersectionRatio = entry.intersectionRatio;

          // Log for debugging
          console.log(`Section ${index}: Intersection Ratio = ${intersectionRatio}`);

          // Find the section with the highest visibility
          if (intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = intersectionRatio;
            highestVisibleIndex = index;
          }
        });

        // Update the image to the most visible section
        if (highestVisibleIndex !== visibleIndex) {
          console.log(`Updating visibleIndex to ${highestVisibleIndex}`);
          setVisibleIndex(highestVisibleIndex);
        }

        // Show the image only if a section is at least 50% visible
        setShowImage(maxIntersectionRatio >= 0.5);
      },
      {
        root: null, // Use the viewport as the root
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleIndex]);

  return (
    <div style={{ backgroundColor: '#121212' }} className="bg-black text-white ">
      <div className="flex">
        {/* Left text area */}
        <div className="w-1/2 space-y-24 px-6 py-16">
          {features.map((feature, index) => (
            <section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="min-h-screen flex flex-col justify-center snap-start"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {feature.heading}
              </h2>
              {feature.description.map((desc, i) => (
                <div key={i} className="flex items-start mb-4">
                  <span className="text-[#B2E0C2] mr-2">✓</span>
                  <p className="text-lg">{desc}</p>
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Right fixed image with crossfade */}
        <div className="w-1/2 h-screen flex items-center justify-center sticky top-0 relative">
          {features.map((feature, index) => (
            <img
              key={index}
              src={feature.image}
              alt={`Feature ${index + 1}`}
              className="max-w-full h-auto absolute transition-opacity duration-1000"
              style={{
                opacity: visibleIndex === index && showImage ? 1 : 0
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;