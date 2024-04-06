import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer/footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ProductsPage from "./Pages/ProductsPage";
import SinglePageOfProducts from "./Pages/SinglePageOfProducts";

import { CartProvider } from './Pages/CartContext';
import Cart from "./Pages/Cart";
import ContactPage from "./Pages/ContactPage";
import Checkout from "./Pages/Checkout";

function App() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 9000);

    return () => clearInterval(notificationInterval);
  }, []);

  return (
    <div className="App relative">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<SinglePageOfProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />

          {/* Use motion.div to animate the notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation properties
            animate={{ opacity: showNotification ? 1 : 0, y: showNotification ? 0 : 20 }} // Animation properties when notification is shown or hidden
            transition={{ duration: 0.5 }} // Transition duration
            className="fixed w-80 bottom-4 right-2 bg-[#E8AAAD] font-custom font-bold text-white p-4 rounded shadow"
          >
            {showNotification && (
              <p>Porosit online në web ose duke na shkruar në rrjetet tona sociale!</p>
            )}
          </motion.div>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
