import React, { useState } from 'react';
import product1 from "../Components/Assets/helium1.jpg"
import product2 from "../Components/Assets/helium.png"
import product3 from "../Components/Assets/luxury-wedding-ceremony.jpg"
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const initialProducts = [
    { id: 1, name: 'Product 1', category: 'Buqeta', price: 19.99, image: product1 },
    { id: 2, name: 'Product 2', category: 'Buqeta', price: 29.99, image: product2 },
    { id: 3, name: 'Product 3', category: 'Other', price: 39.99, image: product3 },
    { id: 4, name: 'Product 4', category: 'Other', price: 49.99, image: product1 },
    // Add more products as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? initialProducts.filter((product) => product.category === selectedCategory)
    : initialProducts;

  return (
    <div className="bg-slate-50">
      <div className="pt-6">
        <h2 className="text-2xl font-bold text-center font-custom">Our Products</h2>
        <div className="flex justify-center mt-4 font-custom1">
          <button
            onClick={() => handleCategoryClick(null)} 
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === null ? 'bg-red-500 text-white' : 'bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryClick('Buqeta')}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === 'Buqeta' ? 'bg-red-500 text-white' : 'bg-gray-300'
            }`}
          >
            Buqeta
          </button>
          <button
            onClick={() => handleCategoryClick('Other')}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === 'Other' ? 'bg-red-500 text-white' : 'bg-gray-300'
            }`}
          >
            Other
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
                  className="rounded h-52 w-[100%] object-cover "
                />
              </div>
              <div className=''>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                <Link to={`/products/${product.id}`}>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
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
