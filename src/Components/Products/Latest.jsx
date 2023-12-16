import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import { Link } from 'react-router-dom';

const Latest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 3;
  const totalProductsToShow = 6;
  const autoplayInterval = 4000;
  const isMobile = window.innerWidth < 768;

  const nextSlide = () => {
    const next = currentSlide + (isMobile ? 1 : slidesPerPage);
    setCurrentSlide(next >= totalProductsToShow ? 0 : next);
  };

  const prevSlide = () => {
    let prev = currentSlide - (isMobile ? 1 : slidesPerPage);
    if (prev < 0) {
      prev = totalProductsToShow - (totalProductsToShow % (isMobile ? 1 : slidesPerPage));
      if (prev === totalProductsToShow) {
        prev = totalProductsToShow - (isMobile ? 1 : slidesPerPage);
      }
    }
    setCurrentSlide(prev);
  };

  useEffect(() => {
    function handleResize() {
      if (isMobile !== (window.innerWidth < 820)) {
        setCurrentSlide(0);
      }
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
  }, [nextSlide, isMobile]);

  return (
    <div className=" bg-slate-50 mt-16 py-12">
      <div className="mx-auto relative">
        <div className='flex justify-between items-center p-5'>
          <div className="h-[1px] bg-red-300 flex-grow mr-4"></div>
          <p className='text-2xl font-custom uppercase'>Produktet e fundit</p>
          <div className="h-[1px] bg-red-300 flex-grow ml-4"></div>
        </div>

        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10 font-custom`}
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
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10 font-custom `}
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
        <div className={`flex flex-col ${isMobile ? '' : 'md:flex-row'} overflow-hidden`}>
          {data.slice(currentSlide, currentSlide + (isMobile ? 1 : slidesPerPage)).map((product) => (
            <div key={product.id} className={`w-full ${isMobile ? '' : 'md:w-1/3'} px-4 mb-8 md:mb-0 justify-center text-center`}>
              <div className="rounded-lg p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[45vh] h-60 object-cover mx-auto block mb-4"
                />
                <h2 className="text-xl font-custom">{product.name}</h2>
                <p className="text-xl font-custom text-gray-500">{product.price} €</p>
                <Link to={`/products/${product.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                  <button className= "bg-gray-500 hover:bg-red-700 px-4 py-2 my-5 text-white font-custom">
                    Shiko produktin
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/products" onClick={() => window.scrollTo({ top: 0 })}>
            <button
              className={`hover:bg-gray-500 text-black font-custom py-2 px-14 focus:outline-none focus:ring focus:ring-blue-300 ${isMobile ? 'block' : ''}`}
            >
              Shiko te gjitha
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Latest;
