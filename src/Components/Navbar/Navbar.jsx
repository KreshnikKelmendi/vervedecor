import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Pages/CartContext";
import Cart from "../../Pages/Cart";
import cart from "../Assets/shopping-bag.png";

const Navbar = () => {
  const { cartState } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    toggleNavbar(); // Close the navbar on link click
  };

  return (
    <nav className=" p-4 bg-neutral-100">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu for Mobile (Left) */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Title and Navigation Links */}
        <div className="text-black font-bold text-2xl lg:text-3xl flex-grow text-center lg:text-left">
          <Link to="/">VERVE Decor</Link>  
        </div>
          {/* Navigation Links for Large Screens */}
          <div className="hidden lg:flex lg:items-center justify-center uppercase space-x-12 ml-auto">
            <Link to="/" className="text-black hover:text-gray-300">
              Ballina
            </Link>
            <Link to="/about" className="text-black hover:text-gray-300">
              Për ne
            </Link>
            <Link to="/products" className="text-black hover:text-gray-300">
              Produktet
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-300">
              Kontakti
            </Link>
          </div>
        

        {/* Cart on the Right */}
        <div className="text-black relative flex items-center lg:pl-10">
          <Link className="flex items-center" onClick={toggleCart}>
            <img className="h-8 px-3" src={cart} alt="cartIcon" />
            <span className="bg-blue-800 w-6 h-6 rounded-full absolute top-0 right-0 flex justify-center items-center text-white text-center text-xs">
              {cartState.items.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links (Centered) */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4 text-center uppercase`}
      >
        <Link to="/" onClick={preventDefault} className="text-black hover:text-gray-300 block py-2">
          Ballina
        </Link>
        <Link to="/about" onClick={preventDefault} className="text-black hover:text-gray-300 block py-2">
          Për ne
        </Link>
        <Link to="/products" onClick={preventDefault} className="text-black hover:text-gray-300 block py-2">
          Produktet
        </Link>
        <Link to="/contact" onClick={preventDefault} className="text-black hover:text-gray-300 block py-2">
          Kontakti
        </Link>
      </div>

      {/* Cart Component */}
      <Cart isOpenCart={isOpenCart} toggleNavbar={toggleCart} />
    </nav>
  );
};

export default Navbar;
