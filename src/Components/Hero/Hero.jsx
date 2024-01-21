import React, { useState, useEffect } from "react";
import video1 from "../Assets/video1.MP4";
import soundOffIcon from "../Assets/volumeOff.png";
import soundOnIcon from "../Assets/volume.png";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const texts = [
    "ZBUKURONI NGJARJET E RËNDËSISHME NË JETËN TUAJ!",
    "Another important message",
    "Yet another important message",
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const video = document.querySelector('video');
    video.muted = isMuted;
    video.play();
  }, [isMuted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [texts]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, x: 50, transition: { duration: 1, ease: "easeIn" } },
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex bg-slate-50 items-center justify-center p-6 bgwa h-72 lg:h-[85vh] 2xl:h-screen font-custom lg:w-1/2">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-3xl lg:text-4xl font-bold text-[#094962]"
          >
            {texts[textIndex]}
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-[40px] py-3 mt-5 text-[#094962] bg-white font-bold hover:bg-black hover:text-white hover:duration-300"
          >
            Shfleto produktet
          </motion.button>
        </motion.div>
      </div>
      <div className="relative h-72 lg:h-[85vh] 2xl:h-screen lg:w-1/2">
        <video
          src={video1}
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <button
          onClick={toggleMute}
          className="absolute voice-toggle-button top-[2vh] right-[15px]"
        >
          {isMuted ? (
            <img src={soundOffIcon} alt="Sound Off" className="w-4 h-4" />
          ) : (
            <img src={soundOnIcon} alt="Sound On" className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
