import React from 'react'

const ContentOne = () => {
  return (
    <>
    <div className='bg-content h-[45vh]'></div>
      <div className="font-custom  2xl:text-xl text-center p-5 lg:p-20 leading-8 lg:leading-10">
        <span className='bg-neutral-50 px-2 rounded-lg shadow-lg shadow-stone-400 text-black'>
          Grand Flowers</span> si brand të veçantë nga Grand Decor e kemi krijuar në vitin 2020. Kërkesa e 
          madhe për lule dhe dhurata të dekoruara nga ekipi ynë profesional ka bërë që kësaj veprimtarie të 
          veçantë artistike t’ia japim përkushtimin e duhur. Tek ne gjeni lule të punuara nga floriste të 
          trajnuara, të cilat i adhurojnë lulet dhe ky përkushtim reflekton në çdo punim që bëjmë.
      </div>

      <div className='p-16 sm:p-28 mb-16 bg-myWebsite items-center'>
        <div className='flex flex-col sm:flex-row justify-between items-center font-custom1'>
          <p className="text-center sm:text-left text-2xl sm:text-4xl text-black">My website</p>
          <p className="text-center sm:text-right text-base sm:text-xl text-zinc-700">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

   
    </>
  )
}

export default ContentOne