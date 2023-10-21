import { useState, useEffect, useCallback } from 'react';
import image1 from "../Assets/party.png"
import image2 from "../Assets/party3.png"
import image3 from "../Assets/wedding3.png"
import { ArrowRightIcon } from '@heroicons/react/solid';

function Hero() {
  const items = [
    { text: 'Lorem ipsum dolor sit amet', image: image1 },
    { text: 'Consectour lorem ipsum amet', image: image2 },
    { text: 'Lorem dolor sit amet consectour es', image: image3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const nextItem = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const currentItem = items[currentIndex];

  const autoplayInterval = 4000;

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      nextItem();
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [currentIndex, nextItem]);


  return (
    <div className="slider relative bg-red-500 grid grid-cols-1 md:grid-cols-2">
      <div className="slider-content my-20 col-span-1 md:col-span-1 flex flex-col justify-center items-center">
        <p className="text-3xl text-white text-center font-custom1">
          {currentItem.text}
        </p>
        <button className="mt-4 font-custom1 shadow-xl text-center text-white hover:bg-red-600 rounded-full py-2 px-4 relative flex items-center">
          Latest Collection
        <ArrowRightIcon className="h-5 w-5 ml-2 text-white" />
        </button>
      </div>
    <div className="slider-image col-span-1 md:col-span-1">
      <img className="w-full h-[25vh] lg:h-[100vh] object-contain" src={currentItem.image} alt="" />
    </div>
        <div className="arrow-button arrow-left absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-400 rounded-full p-2 cursor-pointer " onClick={prevItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.71 5.3a1 1 0 0 1 1.42 1.41L10.83 12l3.3 3.29a1 1 0 1 1-1.42 1.42l-4-4a1 1 0 0 1 0-1.42l4-4a1 1 0 0 1 0 1.42z"
            />
          </svg>
        </div>
        <div className="arrow-button arrow-right absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-400 rounded-full p-2 cursor-pointer " onClick={nextItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              d="M11.29 18.7a1 1 0 0 1-1.42-1.41L13.17 12l-3.3-3.29a1 1 0 0 1 1.42-1.42l4 4a1 1 0 0 1 0 1.42l-4 4a1 1 0 0 1 0-1.42z"
            />
          </svg>
        </div>
    </div>
  
  );
}

export default Hero;