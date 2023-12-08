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
      // Product is already in the cart
      setShowSuccessMessage(`${product.name} është shtuar më herët në shportë!`);
    } else {
      // Product is not in the cart, add it
      addToCart({ ...product, quantity });
      setShowSuccessMessage(`${product.name} është shtuar me sukses në shportë!`);
    }
  };


  return (
    <div className="bg-slate-50 p-8">
      <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          {quantity > 1 ? `${product.name}` : product.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src={product.singlePhoto1}
            alt={`${product.name} - 1`}
            className="w-full h-56 rounded-md mb-4 object-cover"
          />
          <img
            src={product.singlePhoto2}
            alt={`${product.name} - 2`}
            className="w-full h-56 rounded-md mb-4 object-cover"
          />
          <img
            src={product.singlePhoto3}
            alt={`${product.name} - 3`}
            className="w-full h-56 rounded-md mb-4 object-cover"
          />
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-red-500">{(product.price * quantity).toFixed(2)} €</p>
            <p className='mt-2'>Sasia</p>
            <div className="flex items-center mt-2">
              <button onClick={handleDecrement} className="bg-red-300 text-gray-700 px-2 py-1 rounded">
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button onClick={handleIncrement} className="bg-red-300 text-gray-700 px-2 py-1 rounded">
                +
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={handleAddToCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Shto në shportë
            </button>
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
