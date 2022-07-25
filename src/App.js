import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
