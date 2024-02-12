import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-red-400 mx-5 py-16">
      <div className="mx-auto flex flex-wrap justify-between text-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
        <p className="text-[#094962] text-2xl">VERVE Décors</p>
          <p className="mt-4 font-custom text-gray-500 text-[12px]">Evente, ngjarje, dhurata të personalizuara</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0 text-center">
          <h3 className="text-xl font-custom font-bold">Menu</h3>
          <ul className="mt-4 leading-8 font-custom uppercase text-gray-500">
            <li>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Ballina</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Për ne</Link>
            </li>
            <li>
              <Link to="/products" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Produktet</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Kontakti</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0 text-center">
          <h3 className="text-xl font-custom font-bold">Kontakti</h3>
          <address className="mt-4 font-custom text-gray-500">
            123 Street Name<br />
            City, State 12345<br />
            Email: info@example.com<br />
            Phone: (123) 456-7890
          </address>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
          <h3 className="text-xl font-custom font-bold">Na ndiqni në</h3>
          <div className="mt-4">
          <a href="https://www.instagram.com/vervedecors/" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <i className="fab fa-instagram-square text-3xl mx-2"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-square text-3xl mx-2"></i>
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
