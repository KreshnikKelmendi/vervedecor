import React, { useState } from 'react';
import { useCart } from './CartContext';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
import trolley from "../Components/Assets/shopper.png"
import deleteCart from "../Components/Assets/delete.png"

const EmptyCartIcon = () => (
  <div className="text-center empty-cart-icon-container font-custom">
    <img
      src={trolley}
      alt="Shopping Cart"
      className="w-16 h-16 mx-auto mb-4 empty-cart-icon"
    />
    <p className="text-gray-600 mb-4">Shporta juaj është e zbrazur.</p>
    <Link to="/products" onClick={window.scrollTo({ top: 0, behavior: 'auto' })}>
      <button className="bg-gray-500 text-white px-4 py-2 w-full mt-4 hover:bg-red-700 transition duration-300">
        Shfleto produkte
      </button>
    </Link>
    <div className='text-center flex justify-center items-center mt-4'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='text-green-800'>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="8" />
      </svg>
      <i className='text-[9px] text-green-800 ml-1'>Shporta juaj mund të përmbajë më shumë se një produkt, por produkti nuk bën të jetë i njëjtë.</i>
    </div>
  </div>
);

const RecycleBinIcon = () => (
  <img
  src={deleteCart}
  alt="Recycle Bin Icon"
  className="w-4 h-4 text-red-500 mr-2"
/>
);

const Cart = () => {
  const { cartState, clearCart, removeFromCart } = useCart();
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const showCheckoutButton = cartState.items.length > 0;

  const handleProceedToCheckout = () => {
    setCheckoutVisible(true);
  };

  return (
    <>
    
    <div className="flex justify-center items-center py-10 lg:py-20" style={{ height: cartState.items.length === 0 ? '100vh' : 'auto' }}>
      {!isCheckoutVisible && (
        <div className="w-full max-w-md p-6 rounded font-custom">
          <h2 className="text-3xl mb-6 text-center uppercase">Produktet në shportë</h2>
          {cartState.items.length === 0 ? (
            <EmptyCartIcon />
          ) : (
            <>
              <ul className="w-full divide-y divide-gray-200">
                {cartState.items.map((item, index) => (
                  <li key={index} className="flex items-center py-3">
                    <img src={item.image} alt={`${item.name}`} className="w-16 h-16 mr-4 object-cover" />
                    <div className="flex-grow">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity} x {item.price ? item.price.toFixed(2) : 'N/A'} €
                      </p>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-black hover:scale-105 flex items-center text-sm"
                      >
                        <RecycleBinIcon />
                        Fshije nga shporta
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-x-2 mt-4">
                <button
                  onClick={clearCart}
                  className="bg-gray-500 w-full text-white px-4 py-2 hover:bg-red-700 transition duration-300"
                >
                  Fshij të gjitha
                </button>
                {showCheckoutButton && (
                  <Link to="/checkout">
                    <button
                      onClick={handleProceedToCheckout}
                      className="bg-gray-700 w-full text-white px-4 py-2 hover:bg-red-700 transition duration-300"
                    >
                      Vazhdo me porosi
                    </button>
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      )}
      {isCheckoutVisible && <Checkout />}
    </div>
    </>
  );
};

export default Cart;
