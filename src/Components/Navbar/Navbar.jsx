import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Pages/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import cart from "../Assets/shopping-bag.png";
import menu from "../Assets/burger-menu-svgrepo-com.svg";
import { data } from "../data/data";

const Navbar = () => {
  const { cartState } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
    setFilteredProducts([]);
  };

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter(
      (product) => product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <>
      <div className="w-full text-[10px] lg:text-[12px] text-center h-12 items-center justify-between px-6 flex bg-[#E8AAAD] uppercase font-bold text-white">
        <p className="text-[#094962]">VERVE Décors</p>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            className="px-2 py-1 border w-full border-white text-black focus:border-gray-400"
            style={{ userSelect: 'none' }}
          />

          {/* Suggestions Dropdown */}
          {filteredProducts.length > 0 && (
            <div className="absolute z-40 text-black top-full left-0 mt-2 w-full bg-white border rounded-md shadow-lg">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
         
        </div>
        <div className="flex gap-x-3">
        <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook text-xl lg:text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-instagram text-xl lg:text-2xl "></i>
            </a>
        </div>
      </div>



      <nav className="py-5 lg:py-8 px-6 w-full bg-white shadow-md">
        <div className="mx-auto flex justify-between items-center">
          {/* Hamburger Menu for Mobile (Left) */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <img className="w-6 h-auto" src={menu} alt="" />
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </button>
          </div>

          {/* Title and Navigation Links */}
          <div className="text-black text-2xl lg:text-3xl flex-grow text-center lg:text-left font-custom font-extrabold">
            <Link to="/">VERVE Décors</Link>
          </div>

          {/* Navigation Links for Large Screens */}
          <div className="hidden text-[14px] uppercase lg:flex lg:items-center justify-center space-x-8 ml-auto font-custom font-extrabold">
            <Link to="/" className="text-[#094962] hover:text-gray-300">
              Ballina
            </Link>
            <Link to="/about" className="text-[#094962] hover:text-gray-300">
              Për ne
            </Link>
            <Link to="/products" className="text-[#094962] hover:text-gray-300">
              Produktet
            </Link>
            <Link to="/contact" className="text-[#094962] hover:text-gray-300">
              Kontakti
            </Link>
          </div>

          {/* Cart on the Right */}
          <div className="text-black relative flex items-center lg:pl-6">
            <Link to="/cart" className="flex items-center hover:scale-110">
              <img className="h-8" src={cart} alt="cartIcon" />
              {cartState.items.length > 0 && (
                <span className="bg-gray-700 font-custom w-6 h-6 rounded-full absolute bottom-3 right-[1px] flex justify-center items-center text-white text-center text-xs">
                  {cartState.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Links (Centered) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-4 text-center uppercase font-custom divide-y-2 bg-[#E8AAAD]"
            >
              <Link
                to="/"
                onClick={toggleNavbar}
                className="text-black hover:text-gray-300 block py-3"
              >
                Ballina
              </Link>
              <Link
                to="/about"
                onClick={toggleNavbar}
                className="text-black hover:text-gray-300 block py-3"
              >
                Për ne
              </Link>
              <Link
                to="/products"
                onClick={toggleNavbar}
                className="text-black hover:text-gray-300 block py-3"
              >
                Produktet
              </Link>
              <Link
                to="/contact"
                onClick={toggleNavbar}
                className="text-black hover:text-gray-300 block py-3"
              >
                Kontakti
              </Link>
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={() => handleProductClick(product.id)}
                  className="text-black hover:text-gray-300 block py-2"
                >
                  {product.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
