// Cart.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import Checkout from './Checkout'; // Import the Checkout component
import { Link } from 'react-router-dom';

const RecycleBinIcon = () => (
  <svg
    className="w-5 h-5 fill-current text-red-500 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18M4 6l1 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-12M9 14v-3M15 14v-3" />
  </svg>
);

const Cart = ({ isOpenCart, toggleNavbar }) => {
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
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${isOpenCart ? 'block' : 'hidden'}`} onClick={toggleNavbar}>
      <div className="absolute w-96 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Produktet në shportë</h2>
        {cartState.items.length === 0 ? (
          <p>Nuk ka produkte të shtuara në shportë.</p>
        ) : (
          <>
            <ul>
              {cartState.items.map((item, index) => (
                <li key={index} className="flex items-center mb-4">
                  <img src={item.image} alt={`${item.name}`} className="w-12 h-12 mr-4 rounded" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p>
                      {item.quantity} x {item.price ? item.price.toFixed(2) : 'N/A'} €
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700 flex items-center"
                    >
                      <RecycleBinIcon />
                      Fshije nga shporta
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={clearCart}
              className="mt-4 mx-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Fshij të gjitha
            </button>
            {showCheckoutButton && (
              <>
                {/* Use Link to navigate to the checkout route */}
                <Link
                  to="/checkout"
                  className="mt-4 mx-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Vazhdo me porosinë
                </Link>
                {isCheckoutVisible && <Checkout />}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
