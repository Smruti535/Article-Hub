import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ArticleDetails from './pages/ArticleDetails';
import BookmarkPage from './pages/BookmarkPage';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { FilterProvider } from './context/FilterContext';
import CreateArticle from './pages/CreateArticlePage';
import EditArticle from './pages/EditArticlePage';


const App = () => {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <FilterProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:id" element={<ArticleDetails />} />
              <Route path="/bookmarks" element={<BookmarkPage />} />
              <Route path="/create-article" element={<CreateArticle />} />
              <Route path="/edit-article/:id" element={<EditArticle />} />
            </Routes>
          </Router>
        </FilterProvider>
      </BookmarkProvider>
    </ThemeProvider>
  );
};

export default App;