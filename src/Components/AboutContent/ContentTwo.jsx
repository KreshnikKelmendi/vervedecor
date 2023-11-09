import React from 'react';
import img1 from "../Assets/helium.png"

const ContentTwo = () => {
  const images = [
    {
      ph: img1,
    },
    {
      ph: img1,
    },
    {
      ph: img1,
    },
    {
      ph: img1,
    },
    {
      ph: img1,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl font-custom1 mb-4">
        Të punuara me dashuri dhe perkushtim
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 my-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full ${index === 0 ? 'sm:col-span-2 md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1'}`}
          >
            <img
              src={image.ph}
              alt=""
              className={`w-full h-48 sm:h-64 md:h-80 lg:h-80 object-cover rounded-xl mx-auto`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentTwo;
