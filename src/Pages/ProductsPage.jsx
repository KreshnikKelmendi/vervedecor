import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../Components/data/data';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [loading, setLoading] = useState(false);

  const uniqueCategories = [...new Set(data.map((product) => product.category))];
  const sortOptions = ['Nga cmimi me i ulet', 'Nga cmimi me i larte'];

  const handleCategoryChange = async (event) => {
    const category = event.target.value;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update selected category and set loading to false
    setSelectedCategory(category);
    setLoading(false);
  };

  const handleSortOptionChange = async (event) => {
    const sortOption = event.target.value;

    // Set loading to true when sort option changes
    setLoading(true);

    // Simulate an asynchronous process (replace with your actual data fetching logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update selected sort option and set loading to false
    setSelectedSortOption(sortOption);
    setLoading(false);
  };

  const sortedProducts = data.slice().sort((a, b) => {
    if (selectedSortOption === 'Nga cmimi me i ulet') {
      return a.price - b.price;
    } else if (selectedSortOption === 'Nga cmimi me i larte') {
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
        <div className="flex flex-col lg:flex-row items-center text-center justify-center mb-6 px-8 lg:px-0">
          <label htmlFor="categoryFilter" className="text-lg mr-4 text-gray-500">
            FILTRO PRODUKTET SIPAS KATEGORISE:
          </label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-3 bg-white lg:p-2 border text-center rounded focus:outline-none focus:border-blue-500 w-full lg:w-72"
          >
            <option value="">Te gjitha</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor="sortOption" className="text-lg lg:mr-4 lg:ml-6 mt-3 lg:mt-0 text-gray-500">
            RENDITI SIPAS CMIMIT:
          </label>
          <select
            id="sortOption"
            value={selectedSortOption}
            onChange={handleSortOptionChange}
            className="p-3 lg:p-2 border bg-white text-center rounded focus:outline-none focus:border-blue-500 w-full lg:w-72"
          >
            <option value="">Cmimi</option>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {loading && (
            <div className="flex items-center justify-center my-4">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5a8 8 0 018-8h4c0 6.627-5.373 12-12 12v-4zm10-9a8 8 0 01-8 8V24c6.627 0 12-5.373 12-12h-4z"
                ></path>
              </svg>
              <span className="text-gray-800 font-custom"></span>
            </div>
          )}
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
