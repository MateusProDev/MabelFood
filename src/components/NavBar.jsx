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

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
    setMenuOpen(false); // Fecha o menu quando o carrinho é aberto
  };

  const handleFinalizePurchase = () => {
    const message = cart.map(item => `${item.name} - R$${item.price.toFixed(2)}`).join("\n");
    const totalValue = Number(total).toFixed(2); // Corrigido para garantir que total seja um número
    const whatsappMessage = `Desejo concluir meu pedido:\n\n${message}\n\nTotal: R$${totalValue}\n\nPreencha as informações:\n\nNome:\nEndereço:\nForma de pagamento:\nPix, Debito, Credito`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5585991470709&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo-container">
        <img src="./img/Logo.png" alt="Logo" className="logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Pizzas</Link>
        </li>
        <li>
          <Link to="/contact">Hamburguers</Link>
        </li>
        <li>
          <Link to="/contact">HotDogs</Link>
        </li>
        <li>
          <Link to="/avaliações">Bebidas</Link>
        </li>
      </ul>
      <div className="boxCar" onClick={handleCartToggle}>
        <img src="./img/ShoppingBag.png" alt="Cart" className="cart-icon" />
      </div>
      <section className={`carinho_compras ${isCartOpen ? "open" : ""}`}>
        <h2 id="titleCar">Carrinho</h2>
        <div className="carrinho-itens" id="carrinho-tbody">
          {cart.length === 0 ? (
            <p className="priceCar">Seu carrinho está vazio</p>
          ) : (
            cart.map((item, index) => (
              <div key={index}>
                <span className="priceCar">
                  {item.name} - R${item.price.toFixed(2)}
                </span>
              </div>
            ))
          )}
        </div>
        <div className="total-carrinho">
          <strong>Total:</strong>
          <span id="total-carrinho">{" R$" + Number(total).toFixed(2)}</span>
        </div>
        <button className="btnCar" type="button" onClick={handleFinalizePurchase}>
          Finalizar Compra
        </button>
      </section>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
};

export default NavBar;
