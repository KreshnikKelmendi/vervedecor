import React from 'react';
import specialGift from "../Assets/specialGift.jpg";

const ThirdAbout = () => {
  return (
    <div className='w-full relative hidden lg:block'>
      <img
        src={specialGift}
        alt="specialGift"
        className="w-full lg:h-[85vh] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2  bg-opacity-70 bg-white hover:bg-red-100 p-4 rounded-md">
        <p className="font-custom font-bold px-5">
        Nga dasmat e mrekullueshme tek ngjarjet e ndryshme festive, ne specializohemi në organizimin e çdo lloji eventi. Ekipi ynë i përkushtuar dhe kreativ do të ndihmojë që momenti juaj të jetë shumë më shumë se një ngjarje e zakonshme.
         
        </p>
      </div>
    </div>
  );
};

export default ThirdAbout;
