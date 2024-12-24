import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Slick from "./components/Slick";
import Category from "./components/Category";
import MaisVendido from "./components/MaisVendido";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";
import Pagina5 from "./components/Pagina5";
import Pagina6 from "./components/Pagina6";

// Componente principal da aplicação
const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((item, index) => index !== indexToRemove));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const Home = () => (
    <div>
      <NavBar cart={cart} total={getTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Category />
      <Slick />
      <MaisVendido addToCart={addToCart} />
    </div>
  );

  const Pizzas = () => (
    <div>
      <NavBar cart={cart} total={getTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Category />
      <Pagina1 addToCart={addToCart} />
    </div>
  );

  const Pasteis = () => (
    <div>
      <NavBar cart={cart} total={getTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Category />
      <Pagina2 addToCart={addToCart} />
    </div>
  );
  const Calzones = () => (
    <div>
      <NavBar cart={cart} total={getTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Category />
      <Pagina6 addToCart={addToCart} />
    </div>
  );

  const Batatas = () => (
    <div>
      <NavBar cart={cart} total={getTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Category />
      <Pagina3 addToCart={addToCart} />
    </div>
  );

  const Bebidas = () => (
    <div>
      <NavBar cart={cart} total={getTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Category />
      <Pagina4 addToCart={addToCart} />
    </div>
  );

  const MaisVendidos = () => (
    <div>
      <NavBar cart={cart} total={getTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Category />
      <Pagina5 addToCart={addToCart} />
    </div>
  );

  return (
    <Router>
      <div className="mainConteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pizzas" element={<Pizzas />} />
          <Route path="/Pasteis" element={<Pasteis />} />
          <Route path="/Calzones" element={<Calzones />} />
          <Route path="/Batatas" element={<Batatas />} />
          <Route path="/Bebidas" element={<Bebidas />} />
          <Route path="/MaisVendidos" element={<MaisVendidos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
