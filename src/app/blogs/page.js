// src/app/articles/page.js
import FeaturedThisMonth from '../components/FeaturedThisMonth';
import RecentlyPosted from '../components/RecentlyPosted';
import SubscriptionSection from '../components/Subscriptionemailbox'; 

export default async function ArticlesPage() {
  return (
    <div>
      <h1>Articles</h1>
      <FeaturedThisMonth />
      <SubscriptionSection />
      <div className="mb-12">
        <RecentlyPosted/>
      </div>
    </div>
  );
}