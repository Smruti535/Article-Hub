import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBookmark } from '../context/BookmarkContext';

const ArticleCard = ({ id, title, thumbnail, category, readingTime }) => {
  const { addBookmark } = useBookmark();
  const [isActive, setIsActive]=useState(false);
  const handleButtonClick = () => {
    // Function 1
    setIsActive(!prev);
    
  };

  return (
    <div className="border rounded-md p-4 shadow-md overflow-hidden transition-transform transform hover:-translate-y-1">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-sm text-gray-500">{category} • {readingTime}</p>
      <div className="flex justify-between mt-4">
        <Link to={`/article/${id}`} className="text-blue-500">Read More</Link>
        <Link to={`/edit-article/${id}`} className="text-blue-800">Edit</Link>
        {/* <button
      onClick={() => toggleBookmark({ id, title, thumbnail, category, readingTime })}
      className={`p-2 rounded ${
        isBookmarked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
    </button> */}
        <button
          onClick={() => addBookmark({ id, title, thumbnail, category, readingTime })}
          className="px-4 py-1 rounded-md hover:text-blue-500"
        >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>



        </button>
      </div>
    </div>
  );
};

export default ArticleCard;