import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Certifique-se de importar o arquivo de estilos

const NavBar = ({ cart, total }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    setCartOpen(false); // Fecha o carrinho quando o menu é aberto
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo-container">
        <img src="./img/Logo.png" alt="Logo" className="logo" />
      </div>
      <div className="boxCar">
        
        <div className="menu-icon" onClick={handleMenuToggle}>
          <img
          src="./img/ShoppingBag.png"
          alt="CAR"
        />
        </div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/avaliações">Avaliações</Link>
        </li>
      </ul>
      <div className={`social-links ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-links-mobile">
          <section className={`carinho_compras ${isCartOpen ? "open" : ""}`}>
            <h2>Carrinho</h2>
            <div className="carrinho-itens" id="carrinho-tbody">
              {cart.length === 0 ? (
                <p>Seu carrinho está vazio</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index}>
                    <span>
                      {item.name} - R${item.price.toFixed(2)}
                    </span>
                  </div>
                ))
              )}
            </div>
            <div className="total-carrinho">
              <strong>Total</strong>
              <span id="total-carrinho">R${total}</span>
            </div>
            <button type="button" onClick={() => alert("Compra Finalizada!")}>
              Finalizar Compra
            </button>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
