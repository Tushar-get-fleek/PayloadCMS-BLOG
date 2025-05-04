import { getPayload } from "../../lib/payload";
import Link from "next/link";

const RelatedArticles = async () => {
  try {
    const payload = await getPayload();
    const relatedArticles = await payload.find({
      collection: "articles",
      where: { category: { contains: "Related Articles" } }, // Updated to use 'contains'
      limit: 4,
    });

    console.log("Related Articles:", relatedArticles);

    return (
      <div className="w-full md:w-1/3">
        <h2 className="text-teal-500 text-xl font-bold mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {relatedArticles.docs.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`} passHref>
              <div className="bg-white p-4 rounded-xl shadow-lg flex items-center cursor-pointer hover:bg-gray-50 transition-all">
                {article.image && article.image.url ? (
                  <img
                    src={article.image.url}
                    alt={article.image.alt || article.title}
                    className="w-16 h-16 object-cover mr-4 rounded-lg"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 mr-4 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xs">No Image</span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">{article.title}</h3>
                  <p className="text-gray-500 text-xs mt-1 flex items-center">
                    <svg
                      className="w-3 h-3 mr-1 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(article.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return (
      <div className="w-full md:w-1/3">
        <h2 className="text-teal-500 text-xl font-bold mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">
          Related Articles
        </h2>
        <p>Error loading articles: {error.message}</p>
      </div>
    );
  }
};

export default RelatedArticles;