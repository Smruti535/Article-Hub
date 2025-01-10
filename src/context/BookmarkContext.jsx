import React, { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (article) => {
    setBookmarks((prev) => [...prev, article]);
  };

  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((article) => article.id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => useContext(BookmarkContext);
