import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Static list of categories (can be fetched from the data as well)
  const categories = ['All', 'Technology', 'Health', 'Education', 'Finance'];

  return (
    <FilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        activeCategory,
        setActiveCategory,
        categories,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
