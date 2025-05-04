import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Format date helper function
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const ArticlesSection = ({ featuredArticles, relatedArticles }) => {
  const [articles, setArticles] = useState({
    featured: featuredArticles || [],
    related: relatedArticles || []
  });
  const [loading, setLoading] = useState(!featuredArticles);

  useEffect(() => {
    // If articles were not provided as props, fetch them
    if (!featuredArticles) {
      const fetchArticles = async () => {
        try {
          const res = await fetch('/api/articles');
          const data = await res.json();
          
          // Sort articles by date (newest first)
          const sortedArticles = data.docs.sort((a, b) => 
            new Date(b.date) - new Date(a.date)
          );
          
          setArticles({
            featured: sortedArticles.slice(0, 2), // First 2 articles as featured
            related: sortedArticles.slice(2, 7)   // Next 5 as related
          });
          setLoading(false);
        } catch (error) {
          console.error('Error fetching articles:', error);
          setLoading(false);
        }
      };
      
      fetchArticles();
    }
  }, [featuredArticles]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading articles...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Featured Articles Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-medium text-teal-500 mb-8">FEATURED THIS MONTH</h2>
        
        <div className="grid grid-cols-1 gap-12">
          {articles.featured.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <Link href={`/articles/${article.slug}`}>
                    <div className="relative h-64 w-full">
                      <Image 
                        src={article.image?.url || '/placeholder-image.jpg'} 
                        alt={article.image?.alt || article.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>
                <div className="md:w-2/3 p-6">
                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="text-2xl font-bold mb-2 hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="flex items-center mb-4 text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="text-gray-700 mb-4">
                    {/* Extract text for preview - handle rich text or plain text */}
                    {typeof article.content === 'string' 
                      ? `${article.content.substring(0, 150)}...` 
                      : "Discover the top actors in the world, known for their outstanding performances and global recognition."}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Articles Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Related Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.related.map((article) => (
            <div key={article.id} className="flex items-start space-x-4">
              <div className="w-24 h-24 flex-shrink-0 relative">
                <Link href={`/articles/${article.slug}`}>
                  <Image 
                    src={article.image?.url || '/placeholder-image.jpg'} 
                    alt={article.image?.alt || article.title}
                    width={96}
                    height={96}
                    className="rounded object-cover"
                  />
                </Link>
              </div>
              <div className="flex-1">
                <Link href={`/articles/${article.slug}`}>
                  <h3 className="font-medium text-gray-900 hover:text-teal-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                <div className="text-sm text-gray-500 mt-1 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span>{formatDate(article.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;