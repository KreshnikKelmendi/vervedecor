import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import image1 from '../Assets/pexels-luciann-photography-3693392.jpg';
import image2 from '../Assets/cVCYJP46Ew.jpg';
import image3 from '../Assets/pexels-karolina-grabowska-4464487.jpg';
import { Link } from 'react-router-dom';

const SliderComponent = () => {
  const [textIndex, setTextIndex] = useState(0);
  const controls = useAnimation();

  const texts = ['Zbukuroni ngjarjet e rëndësishme në jetën tuaj!', 'Blej dhuratën për Ditën e të dashuruarve!', 'Text 3'];

  const imageUrls = [image1, image2, image3];

  useEffect(() => {
    // Trigger initial animation after the component has mounted
    controls.start({ x: '0%', opacity: 1, transition: { duration: 1, ease: 'easeInOut' } });
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); 

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [textIndex, controls]);

  const handleNextSlide = async () => {
    await controls.start({ x: '100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }); // Slide out to the right
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    await controls.start({ x: '0%', opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }); // Slide in from the left
  };

  const handlePrevSlide = async () => {
    await controls.start({ x: '-100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }); // Slide out to the left
    setTextIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
    await controls.start({ x: '0%', opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }); // Slide in from the right
  };

  return (
    <>
      <motion.img
        src={imageUrls[textIndex]}
        alt={`Image ${textIndex + 1}`}
        className="w-full h-full object-cover"
        animate={controls}
      />
      <div className='w-full'
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '50%',
          transform: 'translate(-50%, 0%)',
          color: 'white',
        }}
      >
        <div className='text-white font-custom py-6 lg:py-20'>
        <p className='font-custom bg-red-400 p-2 opacity-80 rounded-md text-2xl lg:text-3xl mt-12 lg:mt-5 font-extrabold'>{texts[textIndex]}</p>
        {/* <button onClick={handleNextSlide} className="mr-2">
          Next
        </button>
        <button onClick={handlePrevSlide}>Previous</button> */}
        <Link to="/products" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <button className='text-xs lg:text-base px-6 mt-3 font-extrabold font-custom py-2 bg-red-400 hover:bg-white hover:text-black hover:duration-500 rounded-md text-white'>Shfleto produktet</button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
