import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Slick from "./components/Slick";
import Category from "./components/Category";
import MaisVendidos from "./components/MaisVendidos";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";


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
  // Componentes para diferentes rotas
  const Home = () => (
    <div>
      {/* Barra de navegação */}
      <NavBar cart={cart} total={getTotal()} />
      {/* Categorias */}
      <Category />
      {/* Banners*/}
      <Slick />
      {/* Os mais pedidos */}
      <MaisVendidos addToCart={addToCart} />
    </div>
  );

  const Pizzas = () => (
    <div>
      {/* Barra de navegação */}
      <NavBar cart={cart} total={getTotal()} />
      <Category />
      <Pagina1 addToCart={addToCart}/>
    </div>
  );

  const Burguers = () => (
    <div>
      {/* Barra de navegação */}
      <NavBar cart={cart} total={getTotal()} />
      <Category />
      <Pagina2 addToCart={addToCart}/>
    </div>
  );

  const HotDogs = () => (
    <div>
      {/* Barra de navegação */}
      <NavBar cart={cart} total={getTotal()} />
      <Category />
      <Pagina3 addToCart={addToCart}/>
    </div>
  );
  const Bebidas = () => (
    <div>
      {/* Barra de navegação */}
      <NavBar cart={cart} total={getTotal()} />
      <Category />
      <Pagina4 addToCart={addToCart}/>
    </div>
  );
  const AllProducts = () => (
    <div>
      {/* Barra de navegação */}
      <NavBar cart={cart} total={getTotal()} />
      <Category />
      <Pagina4 addToCart={addToCart}/>
    </div>
  );

  return (
    <Router>
      <div className="mainConteudo">
        {/* Definição de rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pizzas" element={<Pizzas />} />
          <Route path="/Burguers" element={<Burguers />} />
          <Route path="/HotDogs" element={<HotDogs />} />
          <Route path="/Bebidas" element={<Bebidas />} />
          <Route path="/AllProducts" element={<AllProducts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
