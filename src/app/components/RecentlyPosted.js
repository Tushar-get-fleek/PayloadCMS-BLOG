import React from 'react';
import { getPayload } from '../../lib/payload';
import Link from 'next/link';

// Recently Posted article card component
const RecentlyPostedCard = ({ title, description, date, image, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-xs mx-auto cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300">
        {/* Image */}
        <div className="w-full h-48 relative">
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
        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{title || 'Untitled'}</h3>
          <div className="flex items-center mb-2 text-gray-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span className="text-sm">{date || 'Unknown Date'}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default async function RecentlyPosted() {
  let recentlyPostedArticles = [];
  let errorMessage = null;

  try {
    const payload = await getPayload();

    // Fetch recently posted articles, sorted by date (newest first)
    const result = await payload.find({
      collection: 'articles',
      where: { category: { contains: 'Recently Posted' } },
      sort: '-date', // Sort by date, descending (newest first)
      limit: 3, // Limit to 3 articles
    });
    recentlyPostedArticles = result.docs || [];

    console.log('Recently Posted Articles:', JSON.stringify(recentlyPostedArticles, null, 2));
    recentlyPostedArticles.forEach((article, index) => {
      console.log(`Recently Posted article ${index} image:`, article.image?.url);
    });
  } catch (error) {
    console.error('Error fetching recently posted articles:', error);
    errorMessage = error.message;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-gray-800 text-2xl font-bold mb-6">Recently Posted</h2>
      {errorMessage ? (
        <p className="text-red-500">Error loading articles: {errorMessage}</p>
      ) : recentlyPostedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentlyPostedArticles.map((article) => (
            <RecentlyPostedCard
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
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No recently posted articles found.</p>
      )}
    </div>
  );
}