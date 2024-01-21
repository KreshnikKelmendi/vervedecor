import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import SecondAbout from './SecondAbout';
import ThirdAbout from './ThirdAbout';
import Latest from '../Products/Latest';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        staggerChildren: 0.4, // Adjust this value for the delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();

  const handleInView = (inView) => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  };

  return (
    <>
      <InView triggerOnce onChange={handleInView}>
        {({ inView, ref }) => (
          <motion.div
            className='text-3xl my-5 py-8 text-center font-custom justify-center align-center'
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <h3 className='p-1 lg:p-0 uppercase' variants={itemVariants}>
              Zbukuroni ngjarjet e rëndësishme në jetën tuaj!
            </h3>
          </motion.div>
        )}
      </InView>
      <InView triggerOnce onChange={handleInView}>
        {({ inView, ref }) => (
          <motion.div
            className="grid grid-cols-2 gap-4 px-6 md:grid-cols-4 text-center uppercase justify-center font-custom"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <motion.div
              className="bg-gray-200 bg-dhurata p-4 lg:h-72 flex items-center justify-center"
              variants={itemVariants}
            >
              <p className='bg-white text-black py-3 px-8'>Dhurata të personalizuara</p>
            </motion.div>
            <motion.div
              className="bg-gray-200 bg-buqeta p-4 h-52 lg:h-72 flex items-center justify-center"
              variants={itemVariants}
            >
              <p className='bg-white text-black py-3 px-8'>Buqeta</p>
            </motion.div>
            <motion.div
              className="bg-gray-200 bg-dekore p-4 h-52 lg:h-72 flex items-center justify-center"
              variants={itemVariants}
            >
              <p className='bg-white text-black py-3 px-8'>Dekore</p>
            </motion.div>
            <motion.div
              className="bg-gray-200 bg-ditelindje p-4 h-52 lg:h-72 flex items-center justify-center"
              variants={itemVariants}
            >
              <p className='bg-white text-black py-3 px-8'>Ditëlindje</p>
            </motion.div>
          </motion.div>
        )}
      </InView>
      <Latest variants={containerVariants} controls={controls} />
      <ThirdAbout variants={containerVariants} controls={controls} />
      <SecondAbout variants={containerVariants} controls={controls} />
    </>
  );
}

export default About;
