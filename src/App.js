import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
