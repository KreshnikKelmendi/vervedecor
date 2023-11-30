import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer/footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ProductsPage from "./Pages/ProductsPage";
import SinglePageOfProducts from "./Pages/SinglePageOfProducts";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<SinglePageOfProducts />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
