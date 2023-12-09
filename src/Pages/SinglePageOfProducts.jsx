import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../Components/data/data';
import { useCart } from './CartContext';
import SuccessModal from './SuccessModal';

const ProductPage = () => {
  const { id } = useParams();
  const product = data.find(item => item.id === Number(id));
  const { cartState, addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    const existingCartItem = cartState.items.find(item => item.id === product.id);

    if (existingCartItem) {
      setShowSuccessMessage(`${product.name} është shtuar më herët në shportë!`);
    } else {
      addToCart({ ...product, quantity });
      setShowSuccessMessage(`${product.name} është shtuar me sukses në shportë!`);
    }
  };

  const handleThumbnailClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <div className="bg-slate-50 lg:py-1 lg:px-[20px] font-custom">
      <div className=" mx-auto bg-slate-50 p-8 flex flex-col md:flex-row lg:justify-center lg:items-center">
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={product[`singlePhoto${selectedPhotoIndex + 1}`]}
            alt={`${product.name} - ${selectedPhotoIndex + 1}`}
            className="w-full h-52 lg:h-96 mb-4 object-cover"
          />
          <div className="flex mt-4">
            {[1, 2, 3].map(index => (
              <img
                key={index}
                src={product[`singlePhoto${index}`]}
                alt={`${product.name} - ${index}`}
                className={`w-1/2 h-24 object-cover cursor-pointer ${selectedPhotoIndex === index - 1 ? 'border-2 border-gray-500' : ''}`}
                onClick={() => handleThumbnailClick(index - 1)}
              />
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 px-1 lg:px-0 mt-3 lg:mt-0 md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl text-red-500">{(product.price * quantity).toFixed(2)} €</p>
              <p className='mt-2'>Sasia</p>
              <div className="flex items-center mt-2 border-2 font-custom">
                <button onClick={handleDecrement} className=" border-r-2 bg-slate-100 hover:bg-slate-300 text-gray-700 px-2 py-1">
                  -
                </button>
                <button className="mx-2 px-2">{quantity}</button>
                <button onClick={handleIncrement} className="border-l-2 bg-slate-100 hover:bg-slate-300 text-gray-700 px-2 py-1">
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="bg-gray-500 text-white px-4 py-2 lg:mt-8 hover:bg-red-700 transition duration-300"
              >
                Shto në shportë
              </button>
            </div>
          </div>
        </div>
      </div>
      {showSuccessMessage && (
        <SuccessModal message={showSuccessMessage} onClose={() => setShowSuccessMessage(false)} duration={2000} />
      )}
    </div>
  );
};

export default ProductPage;
