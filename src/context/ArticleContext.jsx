// import React, { createContext, useContext, useState } from "react";

// const ArticleContext = createContext();

// export const ArticleProvider = ({ children }) => {
//   const [articles, setArticles] = useState([]);
//   const [editingArticle, setEditingArticle] = useState(null); // Tracks article being edited

//   const createArticle = (newArticle) => {
//     setArticles((prev) => [...prev, { ...newArticle, id: Date.now() }]);
//   };

//   const updateArticle = (updatedArticle) => {
//     setArticles((prev) =>
//       prev.map((article) => (article.id === updatedArticle.id ? updatedArticle : article))
//     );
//   };

//   return (
//     <ArticleContext.Provider
//       value={{ articles, createArticle, updateArticle, editingArticle, setEditingArticle }}
//     >
//       {children}
//     </ArticleContext.Provider>
//   );
// };

// export const useArticle = () => useContext(ArticleContext);
