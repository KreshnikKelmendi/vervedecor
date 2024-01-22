import React from 'react';
import { data } from '../data/data';
import { Link } from 'react-router-dom';

const Latest = () => {
  const limitedData = data.slice(0, 4);

  return (
    <>
    <div className='py-10'>
    <div className='flex justify-between items-center p-5'>
          <div className="h-[1px] bg-red-300 flex-grow mr-4"></div>
          <p className='text-2xl font-custom uppercase font-bold'>Produktet e fundit</p>
          <div className="h-[1px] bg-red-300 flex-grow ml-4"></div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 mt-8">
        {limitedData?.map((product) => (
          <div key={product.id} className=" overflow-hidden bg-slate-50 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 lg:h-44 object-cover"
            />
            <div className="p-4">
              <p className='text-xs'>{product?.category}</p>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.price.toFixed(2)} €</p>
              <Link
                to={`/products/${product.id}`}
                onClick={() => window.scrollTo({ top: 0, left:0 })}
                className="text-xs lg:text-base rounded-md inline-block bg-red-400 text-white px-2 py-1 lg:px-4 lg:py-2 hover:bg-gray-500 transition duration-300"
              >
                Shiko produktin
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Latest;
