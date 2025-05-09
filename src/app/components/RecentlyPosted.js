import React from 'react';
import { getPayload } from '../../lib/payload';
import Link from 'next/link';
import Head from 'next/head';

const RecentlyPostedCard = ({ title, description, date, image, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full max-w-sm mx-auto cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300">
        {/* Image */}
        <div className="w-full h-40 sm:h-48 relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2">{title || 'Untitled'}</h3>
          <div className="flex items-center mb-2 text-gray-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span className="text-xs sm:text-sm">{date || 'Unknown Date'}</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-2 sm:mb-3">{description}</p>
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
      console.log(`Recently Posted article ${index} image:`, article.image); // Fixed logging to use article.image directly
    });
  } catch (error) {
    console.error('Error fetching recently posted articles:', error);
    errorMessage = error.message;
  }

  const pageTitle = "Recently Posted Articles | Fleek Blog";
  const metaDescription = "Explore the most recently posted articles on Fleek Blog. Stay updated with the latest news, insights, and more.";
  const metaKeywords = "recently posted, articles, blog, news, insights, Fleek Blog";
  const canonicalUrl = "https://payload-cms-blog.vercel.app/blogs";
  const featuredImage = recentlyPostedArticles[0]?.image || "https://pub-c5505ce6d8bb49aeac6484258ff435ce.r2.dev/fleek%20logo.png";

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
          name: 'Recently Posted Articles',
          item: canonicalUrl,
        },
      ],
    },
    mainEntity: recentlyPostedArticles.map((article, index) => ({
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
  };


  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fleek Blog" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fleek Blog" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={featuredImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          <ol className="flex space-x-2 text-sm sm:text-base text-gray-600">
            {/* <li>
              <Link href="/" className="hover:text-gray-800">Home</Link>
            </li> */}
            {/* <li>/</li>
            <li className="text-gray-800">Recently Posted Articles</li> */}
          </ol>
        </nav>

        <h2 className="text-gray-800 text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Recently Posted</h2>
        {errorMessage ? (
          <p className="text-red-500 text-sm sm:text-base lg:text-lg">Error loading articles: {errorMessage}</p>
        ) : recentlyPostedArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">No recently posted articles found.</p>
        )}
      </div>
    </>
  );
}