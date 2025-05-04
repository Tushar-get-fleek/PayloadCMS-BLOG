import React from 'react';
import { getPayload } from '../../lib/payload';
import Link from 'next/link';

// Featured article card component
const FeaturedCard = ({ title, description, date, image, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm mb-8 overflow-hidden cursor-pointer hover:shadow-lg hover:bg-gray-50 transition-all duration-300">
        {/* Image container */}
        <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto relative">
          {image && typeof image === 'object' && image.url ? (
            <img
              src={image.url}
              alt={image.alt || title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}
        </div>
        
        {/* Content container */}
        <div className="w-full md:w-3/5 lg:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title || 'Untitled'}</h2>
          
          {/* Date with calendar icon */}
          <div className="flex items-center mb-4 text-gray-600">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span className="text-sm">{date || 'Unknown Date'}</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
      </div>
    </Link>
  );
};

// Related article card component - compact with small image
const RelatedArticleCard = ({ title, date, image, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="flex items-center mb-6 cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300 rounded-lg p-2">
        {/* Small thumbnail image */}
        <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden mr-4 relative">
          {image && typeof image === 'object' && image.url ? (
            <img
              src={image.url}
              alt={image.alt || title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">No Image</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-grow">
          <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 newline2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
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
    
    // Fetch featured articles
    const featuredResult = await payload.find({
      collection: 'articles',
      where: { category: { contains: 'Featured This Month' } },
      limit: 4,
    });
    featuredArticles = featuredResult.docs || [];
    
    // Fetch related articles
    const relatedResult = await payload.find({
      collection: 'articles',
      where: { category: { equals: 'Related Articles' } },
      limit: 4,
    });
    relatedArticles = relatedResult.docs || [];
    
    console.log('Featured Articles:', JSON.stringify(featuredArticles, null, 2));
    console.log('Related Articles:', JSON.stringify(relatedResult?.docs || [], null, 2));
    
    // Debug log to check image URLs
    featuredArticles.forEach((article, index) => {
      console.log(`Featured article ${index} image:`, article.image?.url);
    });
    
    if (relatedResult?.docs) {
      relatedResult.docs.forEach((article, index) => {
        console.log(`Related article ${index} image:`, article.image?.url);
      });
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-[150px]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Featured Articles Column - Takes 2/3 width on desktop */}
        <div className="w-full md:w-2/3">
          <h2 className="text-teal-500 text-2xl font-medium mb-6 uppercase">
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
            <p>No featured articles found.</p>
          )}
        </div>
        
        {/* Related Articles Column - Takes 1/3 width on desktop */}
        <div className="w-full md:w-1/3">
          <h2 className="text-gray-800 text-xl font-bold mb-6 pb-2 border-b border-gray-200">
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
            <p>No related articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
}