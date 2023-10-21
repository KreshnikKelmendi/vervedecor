import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const hoverVariants = {
    hover: {
      scale: 1.05, // Increase scale on hover
      transition: {
        duration: 0.2, // Animation duration
      },
    },
    initial: {
      scale: 1, // Default scale
    },
  };
  
  return (
    <>
    <div className='text-3xl py-10 text-center font-custom1 justify-center align-center'>
         <h3>Sjellim elegancën dhe magjinë në ditën tuaj të veçantë.</h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center justify-center font-custom1 p-4">
      <motion.div
        className="bg-gray-200 bg-dhurata p-4 h-64 flex items-center justify-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initial"
      >
        <p className="bg-white text-black px-10">Dhurata të personalizuara</p>
      </motion.div>
      <motion.div
        className="bg-gray-200 bg-buqeta p-4 h-64 flex items-center justify-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initial"
      >
        <p className="bg-white text-black px-10">Buqeta</p>
      </motion.div>
      <motion.div
        className="bg-gray-200 bg-dekore p-4 h-64 flex items-center justify-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initial"
      >
        <p className="bg-white text-black px-10">Dekore</p>
      </motion.div>
      <motion.div
        className="bg-gray-200 bg-ditelindje p-4 h-64 flex items-center justify-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initial"
      >
        <p className="bg-white text-black px-10">Ditëlindje</p>
      </motion.div>
    </div>
  </>
  )
}

export default About