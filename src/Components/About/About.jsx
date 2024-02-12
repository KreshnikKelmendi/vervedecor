import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import SecondAbout from './SecondAbout';
import ThirdAbout from './ThirdAbout';
import Latest from '../Products/Latest';
import video1 from "../Assets/video1.MP4";
import soundOffIcon from "../Assets/volumeOff.png";
import soundOnIcon from "../Assets/volume.png";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.3,
  });



  useEffect(() => {
    const video = document.querySelector('video');
    video.muted = isMuted;
    video.play();
  }, [isMuted]);



  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
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
            className='text-3xl my-5 py-4 text-center font-custom justify-center align-center'
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <p className='p-1 text-lg lg:p-0 uppercase font-custom' variants={itemVariants}>
              Zbukuroni ngjarjet e rëndësishme në jetën tuaj!
            </p>
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

      <div className="relative flex flex-col lg:flex-row lg:h-[85vh] mt-16 w-full 2xl:h-screen ">
        <video
          src={video1}
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <button
          onClick={toggleMute}
          className="absolute voice-toggle-button z-50 top-[2vh] left-[15px]"
        >
          {isMuted ? (
            <img src={soundOffIcon} alt="Sound Off" className="w-4 h-4" />
          ) : (
            <img src={soundOnIcon} alt="Sound On" className="w-4 h-4" />
          )}
        </button>
        <ThirdAbout variants={containerVariants} controls={controls} />
      </div>
    
      <Latest variants={containerVariants} controls={controls} />
      {/* <SecondAbout variants={containerVariants} controls={controls} /> */}
    </>
  );
}

export default About;
