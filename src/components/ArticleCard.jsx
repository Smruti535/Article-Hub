import React from 'react';
import { Link } from 'react-router-dom';
import { useBookmark } from '../context/BookmarkContext';

const ArticleCard = ({ id, title, thumbnail, category, readingTime }) => {
  const { addBookmark } = useBookmark();

  return (
    <div className="border rounded-md p-4 shadow-md">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-sm text-gray-500">{category} • {readingTime}</p>
      <div className="flex justify-between mt-4">
        <Link to={`/article/${id}`} className="text-blue-500">Read More</Link>
        <button
          onClick={() => addBookmark({ id, title, thumbnail, category, readingTime })}
          className="bg-blue-500 text-white px-4 py-1 rounded-md"
        >
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
