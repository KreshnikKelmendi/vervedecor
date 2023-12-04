import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import emailjs from '@emailjs/browser';

const Modal = ({ text, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const { cartState } = useCart();
  const [formData, setFormData] = useState({
    customerName: '',
    customerAddress: '',
    customerMobile: '',
    customerEmail: '',
    orderedProducts: cartState.items.map(item => item.name).join(', '), 
    orderedQuantities: cartState.items.map(item => item.quantity).join(', '), 
  });
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    const total = cartState.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = cartState.items.reduce((acc, item) => acc + item.quantity, 0);
    return { total, totalQuantity };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      orderedProductsDetails: cartState.items.map(item => `${item.name} (${item.quantity} x ${item.price.toFixed(2)} €)`).join('\n'),
      totalOrderPrice: calculateTotal().total.toFixed(2) + '€',
    };

    // Send the form data via Email.js
    try {
      await emailjs.sendForm('service_kuz376a', 'template_wugxg18', document.querySelector('form'), 'GV8jbiIuwVVQ006bL');
      console.log('Form submitted and email sent successfully');

      setModalText(`Emri dhe Mbiemri: ${formData.customerName}`);
      setShowModal(true);

      setFormData({
        customerName: '',
        customerAddress: '',
        customerMobile: '',
        customerEmail: '',
        orderedProducts: '',
        orderedQuantities: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Totali i porosisë</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-l text-gray-300 font-semibold mb-4">Produktet e mia</h3>
          <ul>
            {cartState.items.map((item, index) => (
              <li key={index} className="flex items-center mb-4">
                <img src={item.image} alt={`${item.name}`} className="w-32 h-20 object-cover mr-4 rounded-lg" />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>
                    Sasia: {item.quantity} x {item.price ? item.price.toFixed(2) : 'N/A'} €
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold mt-4 text-center border-t">Totali: {calculateTotal().total.toFixed(2)} €</p>
        </div>
        <form id="#myForm" className="grid grid-cols-1" onSubmit={handleSubmit}>
          <label htmlFor="orderedProducts" className="mb-2 block">
            Produktet e porositura:
            <input
              type="text"
              id="orderedProducts"
              name="orderedProducts"
              value={formData.orderedProducts}
              readOnly
              className="border p-2 w-full bg-gray-100"
            />
          </label>
          <label htmlFor="orderedQuantities" className="mb-2 block">
            Sasia e porositur:
            <input
              type="text"
              id="orderedQuantities"
              name="orderedQuantities"
              value={formData.orderedQuantities}
              readOnly
              className="border p-2 w-full bg-gray-100"
            />
          </label>
          <label htmlFor="totalOrderPrice" className="mb-2 block">
            Totali €:
            <input
              type="text"
              id="totalOrderPrice"
              name="totalOrderPrice"
              value={calculateTotal().total.toFixed(2)}
              readOnly
              className="border p-2 w-full bg-gray-100"
            />
          </label>
          <label htmlFor="customerName" className="mb-2 block">
            Emri dhe mbiemri:
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>
          <label htmlFor="customerAddress" className="mb-2 block">
            Adresa:
            <input
              type="text"
              id="customerAddress"
              name="customerAddress"
              value={formData.customerAddress}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>
          <label htmlFor="customerMobile" className="mb-2 block">
            Numri i telefonit:
            <input
              type="tel"
              id="customerMobile"
              name="customerMobile"
              value={formData.customerMobile}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>
          <label htmlFor="customerEmail" className="mb-2 block">
            E-maili juaj:
            <input
              type="email"
              id="customerEmail"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-green-800 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition duration-300"
          >
            Dërgo porosinë
          </button>
        </form>
      </div>
      {showModal && <Modal text={modalText} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Checkout;
