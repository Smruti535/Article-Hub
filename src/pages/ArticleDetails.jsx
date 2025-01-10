import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/staticData';

const ArticleDetails = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <div className="text-center p-4">Article not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
      <p className="text-gray-500">{article.category} • {article.readingTime}</p>
      <p className="text-sm text-gray-400">Last edited: {article.lastEdited}</p>
      <p className="mt-4">{article.content}</p>
    </div>
  );
};

export default ArticleDetails;