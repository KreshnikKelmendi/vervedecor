import React from "react";
import video1 from "../Assets/video1.MP4"

function Hero() {

  return (
    <div className="slider-content h-[50vh] p-0 lg:p-3 md:h-[75vh]">
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