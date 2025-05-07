import React from 'react';
import { getPayload } from '../../lib/payload';
import Link from 'next/link';

const FeaturedCard = ({ title, description, date, image, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm mb-20 overflow-hidden cursor-pointer hover:shadow-lg hover:bg-gray-50 transition-all duration-300">
        {/* Image container */}
        <div className="w-full md:w-3/5 lg:w-1/3 h-64 md:h-auto relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-r-none">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}
        </div>

        {/* Content container */}
        <div className="w-full md:w-3/5 lg:w-2/3 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-2">{title || 'Untitled'}</h2>
          <div className="flex items-center mb-3 text-gray-600">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span className="text-xs sm:text-sm">{date || 'Unknown Date'}</span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const RelatedArticleCard = ({ title, date, image, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="flex items-center mb-4 cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300 rounded-lg p-2">
        {/* Small thumbnail image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded overflow-hidden mr-3 sm:mr-4 relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">No Image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default async function FeaturedWithRelated() {
  let featuredArticles = [];
  let relatedArticles = [];

  try {
    const payload = await getPayload();

    const featuredResult = await payload.find({
      collection: 'articles',
      where: { category: { contains: 'Featured This Month' } },
      limit: 4,
    });
    featuredArticles = featuredResult.docs || [];

    const relatedResult = await payload.find({
      collection: 'articles',
      where: { category: { contains: 'Related Articles' } },
      limit: 4,
    });
    relatedArticles = relatedResult.docs || [];

    console.log('Featured Articles:', JSON.stringify(featuredArticles, null, 2));
    console.log('Related Articles:', JSON.stringify(relatedResult?.docs || [], null, 2));

    featuredArticles.forEach((article, index) => {
      console.log(`Featured article ${index} image:`, article.image);
    });

    if (relatedResult?.docs) {
      relatedResult.docs.forEach((article, index) => {
        console.log(`Related article ${index} image:`, article.image);
      });
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
  const pageTitle = "Featured and Related Articles | Fleek Blog";
  const metaDescription = "Discover the latest featured articles and related content on Fleek Blog. Stay updated with insights, news, and more.";
  const metaKeywords = "featured articles, related articles, blog, news, insights, Fleek Blog";
  const canonicalUrl = "https://payload-cms-blog.vercel.app/blogs";
  const featuredImage = featuredArticles[0]?.image || "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png";

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Fleek Blog',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png',
        width: 600,
        height: 60,
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://payload-cms-blog.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Featured and Related Articles',
          item: canonicalUrl,
        },
      ],
    },
    mainEntity: [
      ...featuredArticles.map((article, index) => ({
        '@type': 'Article',
        headline: article.title || 'Untitled',
        description: article.miniTitle || 'No description available.',
        datePublished: article.date ? new Date(article.date).toISOString() : new Date().toISOString(),
        image: article.image || 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png',
        url: `https://payload-cms-blog.vercel.app/blogs/${article.slug}`,
        author: {
          '@type': 'Organization',
          name: 'Fleek Blog',
        },
        position: index + 1,
      })),
      ...relatedArticles.map((article, index) => ({
        '@type': 'Article',
        headline: article.title || 'Untitled',
        datePublished: article.date ? new Date(article.date).toISOString() : new Date().toISOString(),
        image: article.image || 'https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.pn',
        url: `https://payload-cms-blog.vercel.app/blogs/${article.slug}`,
        author: {
          '@type': 'Organization',
          name: 'Fleek Blog',
        },
        position: index + featuredArticles.length + 1,
      })),
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-15 pt-[250px] sm:pt-[80px] lg:pt-[90px]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Featured Articles Column */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-teal-500 text-xl sm:text-2xl font-medium mb-4 sm:mb-6 uppercase">
            Featured This Month
          </h2>
          
          {featuredArticles.length > 0 ? (
            featuredArticles.slice(0, 2).map((article) => (
              <FeaturedCard
                key={article.id}
                title={article.title}
                description={article.miniTitle || 'No description available.'}
                date={
                  article.date
                    ? new Date(article.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : 'Unknown Date'
                }
                image={article.image}
                slug={article.slug}
              />
            ))
          ) : (
            <p className="text-gray-600 text-sm sm:text-base">No featured articles found.</p>
          )}
        </div>
        
        {/* Related Articles Column */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-gray-800 text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-gray-200">
            Related Articles
          </h2>
          
          {relatedArticles.length > 0 ? (
            relatedArticles.map((article) => (
              <RelatedArticleCard
                key={article.id}
                title={article.title}
                date={
                  article.date
                    ? new Date(article.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : 'Unknown Date'
                }
                image={article.image}
                slug={article.slug}
              />
            ))
          ) : (
            <p className="text-gray-600 text-sm sm:text-base">No related articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
}