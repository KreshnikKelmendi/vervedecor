import React, { useState } from 'react';
import { useCart } from './CartContext';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
import trolley from "../Components/Assets/shopper.png"

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
  </div>
);

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
    <div className="flex justify-center items-center py-10 lg:py-20" style={{ height: cartState.items.length === 0 ? '100vh' : 'auto' }}>
      {!isCheckoutVisible && (
        <div className="w-full max-w-md p-6 bg-white rounded font-custom">
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
  );
};

export default Cart;
