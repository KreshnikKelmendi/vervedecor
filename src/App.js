import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  return (
    <div className="App">
        <BrowserRouter>
        <CartProvider>
          <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<SinglePageOfProducts />} />
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            </CartProvider>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
