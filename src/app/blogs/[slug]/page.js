// src/app/articles/[slug]/page.js
import { getPayload } from '../../../lib/payload';
import { notFound } from 'next/navigation';
import ArticlePageClient from './ArticlePageClient';

export default async function ArticlePage({ params }) {
  const { slug } = await params; // Await params to access slug

  let article = null;
  try {
    const payload = await getPayload();
    const result = await payload.find({
      collection: 'articles',
      where: { slug: { equals: slug } },
      limit: 1,
    });

    article = result.docs[0] || null;
    if (!article) {
      notFound();
    }
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }

  return <ArticlePageClient article={article} />;
}