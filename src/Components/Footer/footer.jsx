import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-contentOne py-16">
      <div className="mx-auto flex flex-wrap justify-between text-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-2xl font-custom">Company Name</h3>
          <p className="mt-4 font-custom text-gray-500">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0 text-center">
          <h3 className="text-2xl font-custom">Menu</h3>
          <ul className="mt-4 leading-8 font-custom text-gray-500">
            <li>
              <Link to="/">Ballina</Link>
            </li>
            <li>
              <Link to="/about">Për ne</Link>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0 text-center">
          <h3 className="text-2xl font-custom">Kontakti</h3>
          <address className="mt-4 font-custom text-gray-500">
            123 Street Name<br />
            City, State 12345<br />
            Email: info@example.com<br />
            Phone: (123) 456-7890
          </address>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
          <h3 className="text-2xl font-custom">Na ndiqni në</h3>
          <div className="mt-4">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-square text-3xl mx-2"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-instagram-square text-3xl mx-2"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
