import React from 'react';
import SecondAbout from './SecondAbout';
import ThirdAbout from './ThirdAbout';

const About = () => {
  return (
    <>
    <div className='text-3xl my-5 text-center font-custom1 justify-center align-center'>
         <h3>Sjellim elegancën dhe magjinë në ditën tuaj të veçantë.</h3>
    </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 text-center justify-center font-custom1 p-4">
            <div className="bg-gray-200 bg-dhurata p-4 h-64 flex items-center justify-center">
                <p className='bg-white text-black py-3 px-8'>Dhurata të personalizuara</p>
            </div>
            <div className="bg-gray-200 bg-buqeta p-4 h-64 flex items-center justify-center">
                <p className='bg-white text-black py-3 px-8'>Buqeta</p>
            </div>
            <div className="bg-gray-200 bg-dekore p-4 h-64 flex items-center justify-center">
                <p className='bg-white text-black py-3 px-8'>Dekore</p>
            </div>
            <div className="bg-gray-200 bg-ditelindje p-4 h-64 flex items-center justify-center">
                <p className='bg-white text-black py-3 px-8'>Ditëlindje</p>
            </div>
    </div>
    <SecondAbout />
    <ThirdAbout />
   
  </>
  )
}

export default About