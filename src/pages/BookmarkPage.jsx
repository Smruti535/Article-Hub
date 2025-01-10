import React from 'react';
import ArticleCard from '../components/ArticleCard';
import { useBookmark } from '../context/BookmarkContext';

const BookmarkPage = () => {
  const { bookmarks } = useBookmark();

  if (bookmarks.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-lg font-bold">No Bookmarked Articles</h2>
        <p>Bookmark some articles to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookmarks.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;