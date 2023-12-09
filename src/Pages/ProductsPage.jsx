import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../Components/data/data';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const uniqueCategories = [...new Set(data.map((product) => product.category))];
  const sortOptions = ['Lowest Price', 'Highest Price'];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const sortedProducts = data.slice().sort((a, b) => {
    if (selectedSortOption === 'Lowest Price') {
      return a.price - b.price;
    } else if (selectedSortOption === 'Highest Price') {
      return b.price - a.price;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    const categoryCondition =
      selectedCategory === '' || product.category === selectedCategory;

    return categoryCondition;
  });

  return (
    <div className="bg-slate-50 min-h-screen font-custom">
      <div className=" mx-auto py-8">
        <h2 className="text-3xl text-center mb-6">PRODUKTET TONA</h2>
        <div className="flex flex-col items-center text-center justify-center mb-6 px-8 lg:px-0">
          <label htmlFor="categoryFilter" className="text-lg mr-4 text-gray-500">
            FILTRO PRODUKTET SIPAS KATEGORISE:
          </label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-3 bg-white lg:p-2 border text-center rounded focus:outline-none focus:border-blue-500 w-full lg:w-72"
          >
            <option value="">All</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor="sortOption" className="text-lg mr-4 text-gray-500">
            RENDITI SIPAS CMIMIT:
          </label>
          <select
            id="sortOption"
            value={selectedSortOption}
            onChange={handleSortOptionChange}
            className="p-3 lg:p-2 border text-center rounded focus:outline-none focus:border-blue-500 w-full lg:w-72"
          >
            <option value="">Select Sorting</option>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {filteredProducts?.map((product) => (
            <div
              key={product.id}
              className=" overflow-hidden bg-white shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 lg:h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price.toFixed(2)} €</p>
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="text-base inline-block bg-gray-500 text-white px-2 py-1 lg:px-4 lg:py-2 hover:bg-red-700 transition duration-300"
                >
                  Shiko produktin
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
