import React, { useState } from 'react';
import { FaFilter, FaSort, FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {
  AntarcticaImages,
  AntarcticaReferences,
  AntarcticaText,
  EmotionsImages,
  EmotionsReferences,
  EmotionsText,
  TippingPointsImages,
  TippingPointsReferences,
  TippingPointsText
} from '../Data/Data';

const content = [
  {
    title: "Emotions from the Inside Out!",
    text: EmotionsText,
    ref: EmotionsReferences,
    images: EmotionsImages,
    path: '/emotions',
    category: 'PSYCHOLOGY',
    date: 'MARCH 15, 2023'
  },
  // ... other content items remain the same
];

const ArticlePreview = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('NEWEST');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['ALL', ...new Set(content.map(item => item.category))];

  const filteredArticles = content
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.text.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortBy === 'NEWEST' ? dateB - dateA : dateA - dateB;
    });

  const handleArticleClick = (article) => {
    navigate('/articles', { 
      state: { 
        text: article.text,
        ref: article.ref,
        images: article.images,
        title: article.title
      } 
    });
  };

  return (
    <>
      <div className='max-w-4xl mt-[7%] mb-[5%] p-4 mx-auto text-gray-700 leading-7 text-xl font-nunito text-justify hyphens-auto'>
        Many of the initial scRNA-seq studies successfully examined human or mouse primary cells...
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {searchTerm ? (
                <FaTimes
                  className="cursor-pointer hover:text-gray-600"
                  onClick={() => setSearchTerm('')}
                />
              ) : (
                <FaSearch />
              )}
            </div>
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FaFilter className="text-gray-500" />
              <span>Filter</span>
            </button>
            <button
              onClick={() => setSortBy(sortBy === 'NEWEST' ? 'OLDEST' : 'NEWEST')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FaSort className="text-gray-500" />
              <span>{sortBy === 'NEWEST' ? 'Newest' : 'Oldest'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter */}
        {showFilters && (
          <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Articles Section */}
        <div className="space-y-12 mt-[7%]">
          {filteredArticles.map((article) => (
            <article 
              key={article.path}
              className="flex flex-col md:flex-row gap-6 items-start cursor-pointer"
              onClick={() => handleArticleClick(article)}
            >
              <div className="w-full md:w-2/5 aspect-video overflow-hidden rounded-lg">
                <img
                  src={article.images[0]}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-2 leading-6">
                  {article.text}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-900 font-medium uppercase">
                    {article.category}
                  </span>
                  <span className="text-gray-400">-</span>
                  <span className="text-gray-600">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12  text-gray-500">
            No articles found matching your criteria
          </div>
        )}
      </div>
    </>
  );
};

export default ArticlePreview;