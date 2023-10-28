import React from 'react';
import client1 from "../Assets/01202.jpg";
import client2 from "../Assets/client5.jpg";
import client3 from "../Assets/client10.jpg";

const FirstAbout = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      photo: client1, 
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Pellentesque in tortor nec nunc posuere scelerisque.',
      photo: client2, 
    },
    {
      id: 3,
      name: 'Alice Johnson',
      text: 'Quisque bibendum leo in nisi varius, at ullamcorper justo dapibus.',
      photo: client3, 
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-custom1 mb-5">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-md mb-4 font-custom">{testimonial.text}</p>
              <p className="text-gray-900 font-semibold font-custom1">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstAbout;
