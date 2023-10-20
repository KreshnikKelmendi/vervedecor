import { useState, useEffect, useCallback } from 'react';
import image1 from "../Assets/party.png"
import image2 from "../Assets/party3.png"
import image3 from "../Assets/wedding3.png"

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

  const autoplayInterval = 3000;

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      nextItem();
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [currentIndex, nextItem]);



  return (
      <div className="slider relative bg-pink-700 grid grid-cols-1 md:grid-cols-2">
        <div className="slider-content col-span-1 md:col-span-1">
         <p className='text-3xl lg:w-[80vh] text-gray-300 text-center uppercase font-custom1  absolute top-[70vh] lg:top-1/2 lg:left-1/4 lg:transform lg:-translate-x-1/4 lg:-translate-y-1/2 p-4'>{currentItem.text}</p>
       
        </div>
        <div className="slider-image col-span-1 md:col-span-1">
          <img className='w-full h-[100vh] object-contain' src={currentItem.image} alt=""/>
        </div>
        <div className="arrow-button arrow-left absolute left-4 top-1/2 transform -translate-y-1/2 lg:bg-pink-800 rounded-full p-2 cursor-pointer hidden lg:block" onClick={prevItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.71 5.3a1 1 0 0 1 1.42 1.41L10.83 12l3.3 3.29a1 1 0 1 1-1.42 1.42l-4-4a1 1 0 0 1 0-1.42l4-4a1 1 0 0 1 0 1.42z"
            />
          </svg>
        </div>
        <div className="arrow-button arrow-right absolute right-4 top-1/2 transform -translate-y-1/2 lg:bg-pink-800 rounded-full p-2 cursor-pointer hidden lg:block" onClick={nextItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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