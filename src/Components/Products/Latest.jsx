import React, { useState, useEffect } from 'react';
import product1 from "../Assets/helium.png";
import product2 from "../Assets/decor3.jpg";
import product3 from "../Assets/decor4.jpg";
import product4 from "../Assets/helium3.jpg";

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    image: product1,
    price: 99.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    image: product2,
    price: 79.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    image: product3,
    price: 119.99,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for Product 4',
    image: product4,
    price: 139.99,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description for Product 5',
    image: product4,
    price: 99.99,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description for Product 6',
    image: product4,
    price: 79.99,
  },
];

const Latest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(calculateSlidesPerPage());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const autoplayInterval = 5000;

  function calculateSlidesPerPage() {
    if (window.innerWidth < 768) {
      return 1; 
    } else {
      return 4; 
    }
  }

  const nextSlide = () => {
    const next = currentSlide + slidesPerPage;
    setCurrentSlide(next >= products.length ? 0 : next);
  };

  const prevSlide = () => {
    let prev = currentSlide - slidesPerPage;
    if (prev < 0) {
      prev = products.length - (products.length % slidesPerPage);
      if (prev === products.length) {
        prev = products.length - slidesPerPage;
      }
    }
    setCurrentSlide(prev);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    function handleResize() {
      setSlidesPerPage(calculateSlidesPerPage());
    }
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    // Autoplay functionality
    const autoplay = setInterval(() => {
      nextSlide();
    }, autoplayInterval);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoplay);
    };
  }, [nextSlide]);

  return (
    <div className="bg-neutral-50 mt-16 py-12">
      <div className="container mx-auto relative">
      <div className='flex justify-between items-center p-5'>
        <div className="h-[1px] bg-red-300 flex-grow mr-4"></div>
          <p className='text-3xl font-custom1'>Produktet e fundit</p>
        <div className="h-[1px] bg-red-300 flex-grow ml-4"></div> 
      </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="black"
            stroke="pink"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 25 L5 15 L15 5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="black"
            stroke="pink"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 5 L25 15 L15 25" />
          </svg>
        </button>
        <div className="flex overflow-hidden">
  {products.slice(currentSlide, currentSlide + slidesPerPage).map((product) => (
    <div key={product.id} className={`w-full ${window.innerWidth < 768 ? '' : 'md:w-1/2 lg:w-1/3'} px-4 justify-center text-center`}>
      <div className="rounded-lg p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-[45vh] h-60 object-cover mx-auto block mb-4 cursor-pointer"
          onClick={() => selectProduct(product)}
        />
        <h2 className="text-xl font-custom1 text-gray-800">{product.name}</h2>
        {/* <p className="text-gray-600 font-custom mb-4">{product.description}</p> */}
        <p className="text-xl font-custom text-gray-800">${product.price}</p>
        <button className= "bg-red-400 hover:bg-gray-400 px-10 py-1 my-5 rounded-xl text-white font-custom1">
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-xl font-semibold text-gray-800">${selectedProduct.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Latest;
