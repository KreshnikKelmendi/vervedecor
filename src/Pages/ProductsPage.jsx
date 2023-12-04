import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { data } from '../Components/data/data';

const ProductsPage = () => {


  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? data.filter((product) => product.category === selectedCategory)
    : data;

  return (
    <div className="bg-slate-50">
      <div className="pt-6">
        <h2 className="text-2xl font-bold text-center font-custom">Produktet tona</h2>
        <div className="flex flex-col lg:flex-row w-fit justify-center mx-auto mt-4 font-custom">
          <button
            onClick={() => handleCategoryClick(null)} 
            className={`mx-2 px-4 py-2 ${
              selectedCategory === null ? 'border-b border-red-700' : ''
            }`}
          >
            Të gjitha
          </button>
          <button
            onClick={() => handleCategoryClick('Buqeta')}
            className={`mx-2 mt-3 lg:mt-0 px-4 py-2 ${
              selectedCategory === 'Buqeta' ? 'border-b border-cyan-700' : ''
            }`}
          >
            Dhurata të personalizuara
          </button>
          <button
            onClick={() => handleCategoryClick('Other')}
            className={`mx-2 px-4 mt-3 lg:mt-0 py-2 ${
              selectedCategory === 'Other' ? 'border-b border-cyan-700' : ''
            }`}
          >
            Buqeta
          </button>
          {/* Add more buttons for other categories as needed */}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-8">
          {filteredProducts?.map((product) => (
            <div
              key={product.id}
              className="rounded border border-gray-200 p-4 m-4 flex flex-col"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded h-32 lg:h-52 w-[100%] object-cover "
                />
              </div>
              <div className=''>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price.toFixed(2)} €</p>
                <Link to={`/products/${product.id}`} 
                      onClick={window.scrollTo({ top: 0, behavior: 'auto' })}>
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
