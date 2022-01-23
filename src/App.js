
import {  Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
   
  );
}

export default App;
