import React, { useState } from "react";
import cart from "../Assets/shopping-bag.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-900 p-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-black font-bold font-custom text-2xl">My website</div>
        <div className="text-right"> 
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
          <div className={`lg:flex ${isOpen ? "block" : "hidden"} mt-4 lg:mt-0 text-center font-custom1`}>
            <Link
              to="/"
              className="text-black hover:text-gray-300 px-4 py-2 block lg:inline"
            >
              Ballina
            </Link>
            <a
              href="#"
              className="text-black hover:text-gray-300 px-4 py-2 block lg:inline"
            >
              About
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-300 px-4 py-2 block lg:inline"
            >
              Services
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-300 px-4 py-2 block lg:inline"
            >
              Contact
            </a>
            <div className="flex">
                <button className="text-black border border-gray-300 px-10 rounded-full hover:bg-green-600">Login</button>
                <img className="h-10 px-5" src={cart} alt="cartIcon" />
                <div className="flex ml-[-35px] bg-blue-800 w-[22px] h-[22px] justify-center items-center text-white text-center rounded-full text-[2vh]">
                    0
                </div>
          </div>
          </div>
        
        </div>
       
      </div>
      
    </nav>
  );
};

export default Navbar;