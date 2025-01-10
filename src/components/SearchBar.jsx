import React from 'react';
import { useFilter } from '../context/FilterContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useFilter();

  return (
    <div className="my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search articles..."
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
