import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../Components/data/data';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAllCategories = () => {
    // Set selectedCategory to null to show all categories
    setSelectedCategory(null);
  };

  const handleShowSubcategories = (subcategory) => {
    // Set selectedCategory to the chosen subcategory
    setSelectedCategory(subcategory);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const sortedProducts = () => {
    let sorted = [...data];

    if (selectedCategory) {
      sorted = sorted.filter(
        (product) => product.category === selectedCategory || product.subcategory === selectedCategory
      );
    }

    if (sortBy === 'lowest') {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'highest') {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  };

  return (
    <div className="bg-slate-50">
      <div className="pt-6">
        <h2 className="text-2xl font-bold text-center font-custom">Produktet tona</h2>
        <div className="flex flex-col lg:flex-row w-fit justify-center mx-auto mt-4 font-custom">
          <button
            onClick={handleShowAllCategories}
            className={`mx-2 px-4 py-2 ${
              selectedCategory === null ? 'border-b border-red-700' : ''
            }`}
          >
            ZGJEDH KATEGORINË
          </button>
          {/* Modify the data structure to include subcategories */}
          {data.map((product) => (
            <button
              key={product.subcategory}
              onClick={() => handleShowSubcategories(product.subcategory)}
              className={`mx-2 mt-3 lg:mt-0 px-4 py-2 ${
                selectedCategory === product.subcategory ? 'border-b border-cyan-700' : ''
              }`}
            >
              {product.subcategory}
            </button>
          ))}
          <div className="flex items-center mt-3 lg:mt-0">
            <span className="mr-2">Sort by:</span>
            <select
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortBy || ''}
              className="border border-gray-300 px-2 py-1 rounded"
            >
              <option value="">None</option>
              <option value="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-8">
          {sortedProducts().map((product) => (
            <div
              key={product.id}
              className="rounded border border-gray-100 p-4 m-4 flex flex-col"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded h-32 lg:h-52 w-[100%] object-cover "
                />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price.toFixed(2)} €</p>
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <button className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-700 transition duration-300">
                    Shiko produktin
                  </button>
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
