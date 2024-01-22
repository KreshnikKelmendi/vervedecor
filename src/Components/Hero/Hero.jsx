import React, { useState, useEffect } from "react";
import video1 from "../Assets/video1.MP4";
import soundOffIcon from "../Assets/volumeOff.png";
import soundOnIcon from "../Assets/volume.png";
import { useInView } from 'react-intersection-observer';
import SliderComponent from "./SliderComponent";

const Hero = () => {
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



  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative h-72 lg:h-[85vh] 2xl:h-screen lg:w-1/2 overflow-hidden">
      <SliderComponent />
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
