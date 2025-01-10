import React from 'react';
import { useFilter } from '../context/FilterContext';

const FilterPanel = () => {
  const { activeCategory, setActiveCategory, categories } = useFilter();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
