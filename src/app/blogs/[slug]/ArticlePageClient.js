"use client";

import Head from 'next/head';
import SubscriptionSection2 from '../../components/Subscriptionemailbox2';
import SubscribeButton from '../../components/BuyButton';

const generateIdFromText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const extractKeywords = (content) => {
  if (!content?.root?.children) return [];

  const keywords = [];
  content.root.children.forEach((node) => {
    if (node.type === 'heading' && node.tag === 'h3') {
      const text = node.children?.[0]?.text || '';
      const cleanedText = text.replace(/^\d+\.\s*/, '');
      const id = generateIdFromText(cleanedText);
      if (cleanedText && id) {
        keywords.push({ text: cleanedText, id });
      }
    }
  });
  return keywords;
};

// Helper function to render inline nodes (text, link, etc.)
const renderInlineNodes = (children, trimListPrefix = false) => {
  if (!children) return null;

  return children.map((child, childIndex) => {
    if (child.type === 'text') {
      let text = child.text || '';
      if (trimListPrefix) {
        text = text.replace(/^\s*-+\s*/, '');
      }
      const style = {};
      if (child.format & 1) style.fontWeight = 'bold'; // Bold
      if (child.format & 2) style.fontStyle = 'italic'; // Italic
      return (
        <span key={childIndex} style={style}>
          {text}
        </span>
      );
    } else if (child.type === 'link') {
      return (
        <a
          key={childIndex}
          href={child.fields.url}
          target={child.fields.newTab ? '_blank' : '_self'}
          rel={child.fields.newTab ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:underline"
        >
          {renderInlineNodes(child.children)}
        </a>
      );
    } else if (child.type === 'linebreak') {
      return <br key={childIndex} />;
    }
    return null;
  });
};

// Helper function to render list nodes recursively with indentation
const renderList = (node, index, indentLevel = 0) => {
  const ListTag = node.listType === 'number' ? 'ol' : 'ul';

  return (
    <ListTag
      key={index}
      className={`mb-4 ml-${4 + indentLevel * 4} sm:ml-${6 + indentLevel * 4} ${
        node.listType === 'number' ? 'list-decimal' : 'list-disc'
      } list-outside text-sm sm:text-base`}
    >
      {node.children?.map((listItem, itemIndex) => {
        if (listItem.type !== 'listitem') return null;

        return (
          <li key={itemIndex} className="text-gray-700 mb-2">
            {listItem.children?.map((child, childIndex) => {
              if (child.type === 'list') {
                return renderList(child, childIndex, indentLevel + 1);
              }
              return renderInlineNodes([child]);
            })}
          </li>
        );
      })}
    </ListTag>
  );
};

// Helper function to detect and render list-like paragraphs
const renderListFromParagraphs = (nodes, startIndex) => {
  let currentIndex = startIndex;
  const listItems = [];

  while (currentIndex < nodes.length) {
    const node = nodes[currentIndex];
    if (node.type !== 'paragraph' || !node.children?.length) break;

    const textNode = node.children[0];
    if (!textNode || textNode.type !== 'text' || !textNode.text) break;

    const text = textNode.text.trim();
    if (!text.match(/^-+\s/)) break;

    const leadingSpaces = textNode.text.match(/^\s*/)[0].length;
    const indentLevel = Math.floor(leadingSpaces / 2);

    const trimmedText = text.replace(/^-+\s*/, '');
    if (!trimmedText) {
      currentIndex++;
      continue;
    }

    listItems.push({
      text: trimmedText,
      indent: indentLevel,
      node,
    });

    currentIndex++;
  }

  const buildNestedList = (items, indentLevel) => {
    const list = [];
    let i = 0;

    while (i < items.length) {
      const item = items[i];
      if (item.indent < indentLevel) break;

      if (item.indent === indentLevel) {
        const nestedItems = [];
        let j = i + 1;
        while (j < items.length && items[j].indent > indentLevel) {
          nestedItems.push(items[j]);
          j++;
        }

        list.push(
          <li key={i} className="text-gray-700 mb-2">
            {renderInlineNodes(item.node.children, true)}
            {nestedItems.length > 0 && (
              <ul className={`mb-4 ml-${4 + (indentLevel + 1) * 4} sm:ml-${6 + (indentLevel + 1) * 4} list-disc list-outside text-sm sm:text-base`}>
                {buildNestedList(nestedItems, indentLevel + 1)}
              </ul>
            )}
          </li>
        );

        i = j;
      } else {
        i++;
      }
    }

    return list;
  };

  if (!listItems.length) {
    return { list: null, endIndex: startIndex };
  }

  return {
    list: <ul className="mb-4 ml-4 sm:ml-6 list-disc list-outside text-sm sm:text-base">{buildNestedList(listItems, 0)}</ul>,
    endIndex: currentIndex,
  };
};

// Helper function to render richText content
const renderRichText = (richText, addIdsToHeadings = false) => {
  if (!richText?.root?.children) return null;

  const elements = [];
  let index = 0;

  while (index < richText.root.children.length) {
    const node = richText.root.children[index];

    if (node.type === 'paragraph') {
      const textNode = node.children?.[0];
      if (textNode && textNode.type === 'text' && textNode.text.trim().match(/^-+\s/)) {
        const { list, endIndex } = renderListFromParagraphs(richText.root.children, index);
        if (list) {
          elements.push(<div key={index}>{list}</div>);
          index = endIndex;
          continue;
        }
      }

      if (!node.children || node.children.length === 0) {
        index++;
        continue;
      }
      elements.push(
        <p key={index} className="text-gray-700 mb-4 text-sm sm:text-base">
          {renderInlineNodes(node.children)}
        </p>
      );
    } else if (node.type === 'heading') {
      const level = node.tag || 'h2';
      const text = node.children?.[0]?.text || '';
      const cleanedText = text.replace(/^\d+\.\s*/, '');
      const id = addIdsToHeadings ? generateIdFromText(cleanedText) : null;
      const HeadingTag = level;
      elements.push(
        <HeadingTag
          key={index}
          id={id}
          className={`text-${level === 'h2' ? 'xl sm:2xl' : 'lg sm:xl'} font-bold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4`}
        >
          {renderInlineNodes(node.children)}
        </HeadingTag>
      );
    } else if (node.type === 'list') {
      elements.push(renderList(node, index));
    }
    index++;
  }

  return elements;
};

export default function ArticlePageClient({ article }) {
  const keywords = extractKeywords(article.content);

  const handleKeywordClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pageTitle = article.title ? `${article.title} | Your Blog Name` : 'Untitled Article | Your Blog Name';
  const metaDescription = article.miniVlogDescription?.root?.children?.[0]?.children?.[0]?.text?.slice(0, 160) || 'Discover the best articles and insights on Your Blog Name.';
  const metaKeywords = keywords.map(k => k.text).join(', ') || 'articles, blog, insights';
  const canonicalUrl = `https://yourblog.com/articles/${generateIdFromText(article.title || 'untitled')}`;
  const publishDate = article.date ? new Date(article.date).toISOString() : new Date().toISOString();
  const featuredImage = article.image || 'https://yourblog.com/default-image.jpg';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title || 'Untitled Article',
    description: metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Your Blog Name',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Blog Name',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourblog.com/logo.png',
      },
    },
    datePublished: publishDate,
    dateModified: publishDate,
    image: featuredImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Blog Name" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Your Blog Name" />

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-15 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8 pt-[100px] sm:pt-[120px]">
        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">{article.title || 'Untitled'}</h1>

          {/* Article Date */}
          <div className="flex items-center mb-4 sm:mb-6 text-gray-500">
            <time dateTime={publishDate} className="text-xs sm:text-sm">
              {article.date
                ? new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'Unknown Date'}
            </time>
          </div>

          {/* Article Image */}
          {article.image ? (
            <div className="mb-6 sm:mb-8">
              <img
                src={article.image}
                alt={`Featured image for ${article.title}`}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 flex items-center justify-center rounded-lg mb-6 sm:mb-8">
              <span className="text-gray-500 text-sm sm:text-base">No Image</span>
            </div>
          )}

          {/* Mini Title */}
          {article.miniTitle && (
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">{article.miniTitle}</h2>
          )}

          {/* Mini Vlog Description */}
          {article.miniVlogDescription && (
            <section className="prose max-w-none mb-4 sm:mb-6 text-sm sm:text-base">
              {renderRichText(article.miniVlogDescription)}
            </section>
          )}

          {/* Keywords (Navigation Links) */}
          {keywords.length > 0 && (
            <nav className="mb-6 sm:mb-8" aria-label="Article navigation">
              <div className="flex flex-wrap gap-2 text-gray-600 text-xs sm:text-sm">
                {keywords.map((keyword, index) => (
                  <span key={index} className="flex items-center">
                    <a
                      href={`#${keyword.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleKeywordClick(keyword.id);
                      }}
                      className="text-black hover:text-gray-700 font-medium"
                    >
                      {keyword.text}
                    </a>
                    {index < keywords.length - 1 && <span className="mx-1 sm:mx-2">|</span>}
                  </span>
                ))}
              </div>
            </nav>
          )}

          {/* Main Article Content */}
          <article className="prose max-w-none text-sm sm:text-base">
            {renderRichText(article.content, true)}
          </article>
        </div>

        {/* Subscription Section */}
        <aside className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-[120px] mt-6 lg:mt-0">
            <SubscriptionSection2 />
            <div className="mt-3 sm:mt-4">
              <SubscribeButton />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}