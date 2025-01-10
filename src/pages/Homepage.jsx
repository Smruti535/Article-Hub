import React, { useState } from 'react';
import { articles } from '../data/staticData';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import { useFilter } from '../context/FilterContext';

const HomePage = () => {
  const { searchTerm, activeCategory } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Filter and search logic
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <FilterPanel />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {displayedArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
