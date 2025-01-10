import React, { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  
   

  // const toggleBookmark = (article) => {
    // const isBookmarked = bookmarks.some((b) => b.id === article.id);

  //   if (isBookmarked) {
  //     setBookmarks((prev) => prev.filter((b) => b.id !== article.id));
  //   } else {
  //     setBookmarks((prev) => [...prev, article]);
  //   }
  // };
 

  const addBookmark = (article) => {
    if (!bookmarks.some((bookmark) => bookmark.id === article.id)) {
      setBookmarks([...bookmarks, article]);
    }
  };

  const removeBookmark = (articleId) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== articleId));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks,addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => useContext(BookmarkContext);
 