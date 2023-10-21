import { useState, useEffect, useCallback } from 'react';
import image1 from "../Assets/party.png"
import image2 from "../Assets/party3.png"
import image3 from "../Assets/wedding3.png"
import { ArrowRightIcon } from '@heroicons/react/solid';

import Video from "react-background-video-player";
import video1 from "../Assets/video2.mp4"

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
    <div className="slider-content h-[50vh] md:h-[100vh]">
    <video
      src={video1}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
  
  );
}

export default Hero;