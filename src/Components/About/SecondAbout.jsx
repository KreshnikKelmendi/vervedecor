import React, { useState, useEffect } from 'react';
import Image1 from '../Assets/contentOne.jpg';
import Image2 from '../Assets/decorative-heart.jpg';
import Image3 from '../Assets/helium11.png';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col md:flex-row w-full p-6 bg-slate-50 md:p-20 text-center">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img
            src={images[currentImage]}
            alt=""
            className="w-full h-[30vh] lg:h-[60vh] object-contain transition-transform transform-gpu scale-105 duration-300"
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
                className={`w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-800 focus:outline-none ${
                  index === currentImage ? 'bg-red-500' : ''
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 text-center flex flex-col justify-center items-center p-4 lg:px-20 font-custom">
  <h3 className="text-3xl md:text-3xl mb-4 font-custom">VERVE Décors</h3>
  <p className="">
  Ne besojmë se dekorimet janë thelbi i çdo eventi. Përdorimi i ngjyrave të kujdesshme, teksturave të veçanta dhe elementëve artistikë bëjnë që çdo event të ndjehet unik. Kujdesi ndaj detajit është në qendër të punës sonë; çdo gur dhe lule vendoset me kujdes për të siguruar një atmosferë të përsosur.
  </p>
  <Link to="/products" onClick={() => window.scrollTo({ top: 0, left: 0 })} >
       <button className='text-xs lg:text-base px-6 mt-3 font-extrabold font-custom py-2 bg-red-400 hover:bg-white hover:text-black hover:duration-500 rounded-md text-white'>Shfleto produktet</button>
  </Link>
</div>
    </div>
  );
};

export default Carousel;




