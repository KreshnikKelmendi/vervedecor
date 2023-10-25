import React, { useState, useEffect } from 'react';
import Image1 from '../Assets/helium.png';
import Image2 from '../Assets/helium1.jpg';
import Image3 from '../Assets/helium3.jpg';

const images = [Image1, Image2, Image3];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const selectImage = (index) => {
    setCurrentImage(index);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextImage]);

  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:p-20 text-center">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img
            src={images[currentImage]}
            alt=""
            className="w-full h-[50vh] rounded-lg object-cover transition-transform transform-gpu scale-105 duration-300"
          />
          <div className="hidden absolute inset-0 items-center justify-between">
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-gray-800 text-white rounded-l-md hover:bg-gray-900 focus:outline-none"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-gray-800 text-white rounded-r-md hover:bg-gray-900 focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>
        <ul className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <li key={index}>
              <button
                onClick={() => selectImage(index)}
                className={`w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-800 focus:outline-none ${
                  index === currentImage ? 'bg-red-500' : ''
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 text-left p-4">
        <h3 className="text-3xl md:text-3xl mb-4 font-custom1">Your Title</h3>
        <p className="text-gray-700 font-custom">
          Your descriptive text goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
