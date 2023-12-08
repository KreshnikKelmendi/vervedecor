import React from 'react';
import specialGift from "../Assets/specialGift.jpg";

const ThirdAbout = () => {
  return (
    <div className='w-full mt-6 lg:mt-16 px-6 lg:px-20 relative'>
      <img
        src={specialGift}
        alt="specialGift"
        className="w-full h-[50vh] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-opacity-70 bg-white hover:bg-red-100 p-4 rounded-md">
        <h3 className="text-3xl font-custom1">Your Title</h3>
        <p className="font-custom">
          Your descriptive text goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Your descriptive text goes here.
         
        </p>
      </div>
    </div>
  );
};

export default ThirdAbout;
