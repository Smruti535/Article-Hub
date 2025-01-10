import React from 'react';
import { useFilter } from '../context/FilterContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useFilter();

  return (
    <div className="my-4 flex ">
     

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search articles..."
        className="w-full p-2 border rounded-md"
      />
      <div className='rounded bg-slate-200 p-3 gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></div> 
    </div>
  );
};

export default SearchBar;