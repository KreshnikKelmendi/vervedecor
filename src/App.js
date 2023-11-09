import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer/footer";
import AboutUsPage from "./Pages/AboutUsPage";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
