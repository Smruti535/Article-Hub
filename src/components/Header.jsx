import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">ArticleHub</Link>
        </h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/bookmarks" className="mr-4">Bookmarks</Link>
          <button onClick={toggleDarkMode} className="bg-gray-300 px-2 py-1 rounded">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
