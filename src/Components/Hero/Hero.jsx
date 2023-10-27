import React, { useState, useEffect } from "react";
import video1 from "../Assets/video1.MP4";
import soundOffIcon from "../Assets/soundoff.png";
import soundOnIcon from "../Assets/soundon.png";

function Hero() {
  const [isMuted, setIsMuted] = useState(true); // Start with sound off

  useEffect(() => {
    const video = document.querySelector('video');
    video.muted = isMuted;
    video.play(); // Start playing the video automatically
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative slider-content h-[50vh] p-0 md:h-[75vh]">
      <video
        src={video1}
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover mt-4"
      />
      <button onClick={toggleMute} className="absolute voice-toggle-button top-[45vh] lg:top-[65vh]">
        {isMuted ? (
          <img
            src={soundOffIcon}
            alt="Sound Off"
            className="w-6 h-6"
          />
        ) : (
          <img
            src={soundOnIcon}
            alt="Sound On"
            className="w-6 h-6"
          />
        )}
      </button>
    </div>
  );
}

export default Hero;
