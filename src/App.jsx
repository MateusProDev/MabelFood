import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Slick from './components/Slick';
import ApiData from './components/ApiData';
import Category from './components/Category';
import MaisVendidos from './components/MaisVendidos';

// Componentes para diferentes rotas
const Home = () => (
  <div>
    <Slick />
  </div>
);

const About = () => (
  <div>
    About
  </div>
);

const Contact = () => (
  <div>
    Contact
  </div>
);

const Avaliações = () => (
  <div>
    <ApiData />
  </div>
);

// Componente principal da aplicação
const App = () => {
  // lógica do carrinho
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Router>
      <div className='mainConteudo'>
        {/* Barra de navegação */}
        <NavBar cart={cart} total={getTotal()} />
        {/* Categorias */}
        <Category />

        {/* Definição de rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Avaliações" element={<Avaliações />} />
        </Routes>
        {/* Os mais pedidos */}
        <MaisVendidos addToCart={addToCart} />
      </div>
    </Router>
  );
};

export default App;
