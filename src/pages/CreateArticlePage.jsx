import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState(''); 

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulate API call (replace with actual API call)
      const newArticle = {
        title,
        excerpt,
        content,
        category,
        thumbnail,
        // Add other fields as needed (e.g., author, createdAt, tags)
      };

      // Make API call to create article
      // await axios.post('/api/articles', newArticle); 

      // Redirect to article list page after successful creation
      navigate('/'); 
    } catch (error) {
      console.error('Error creating article:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create New Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
            Excerpt
          </label>
          <textarea 
            id="excerpt" 
            rows="4" 
            value={excerpt} 
            onChange={(e) => setExcerpt(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          {/* Use a rich text editor library here (e.g., Draft.js, Slate) */}
          <textarea 
            id="content" 
            rows="10" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select 
            id="category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option> 
            {/* Add more category options */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
            Thumbnail
          </label>
          <input 
            type="text" 
            id="thumbnail" 
            value={thumbnail} 
            onChange={(e) => setThumbnail(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Image URL" 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Article
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;