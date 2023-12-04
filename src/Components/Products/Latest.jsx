import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import { Link } from 'react-router-dom';

const Latest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(calculateSlidesPerPage());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const autoplayInterval = 4000;

  function calculateSlidesPerPage() {
    if (window.innerWidth < 768) {
      return 1; 
    } else {
      return 3; 
    }
  }

  const nextSlide = () => {
    const next = currentSlide + slidesPerPage;
    setCurrentSlide(next >= data.length ? 0 : next);
  };

  const prevSlide = () => {
    let prev = currentSlide - slidesPerPage;
    if (prev < 0) {
      prev = data.length - (data.length % slidesPerPage);
      if (prev === data.length) {
        prev = data.length - slidesPerPage;
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
          <p className='text-2xl font-custom uppercase'>Produktet e fundit</p>
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
  {data.slice(currentSlide, currentSlide + slidesPerPage).map((product) => (
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
        <p className="text-xl font-custom text-gray-800">{product.price} €</p>
        <Link to={`/products/${product.id}`} onClick={window.scrollTo({ top: 0 })}>
        <button className= "bg-red-400 hover:bg-gray-400 px-10 py-1 my-5 rounded-xl text-white font-custom">
          Shiko produktin
        </button>
        </Link>
      </div>
    </div>
  ))}
</div>
<div className="flex justify-center mt-8">
          <Link to="/products" onClick={window.scrollTo({ top: 0 })}>
            <button
              className="hover:bg-gray-400 text-black font-custom py-2 px-14 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
              
            >
              Shiko te gjitha
            </button>
          </Link>
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
