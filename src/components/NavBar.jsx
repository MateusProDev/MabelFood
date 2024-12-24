import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedias";
import "./NavBar.css";

const NavBar = ({ cart, total, addToCart, removeFromCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(cart.length);
  const [selectedRegion, setSelectedRegion] = useState(""); // Região selecionada
  const [deliveryFee, setDeliveryFee] = useState(0); // Taxa de entrega

  const regions = [
    { name: "Centro", fee: 5.0 },
    { name: "Zona Norte", fee: 7.0 },
    { name: "Zona Sul", fee: 10.0 },
    { name: "Outros", fee: 15.0 },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    setCartOpen(false);
  };

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
    setMenuOpen(false);
  };

  const handleFinalizePurchase = () => {
    const message = cart
      .map((item) => `${item.name} - R$${item.price.toFixed(2)}`)
      .join("\n");
    const totalValue = (Number(total) + deliveryFee).toFixed(2);
    const whatsappMessage = `Desejo concluir meu pedido:\n\n${message}\n\nTotal: R$${totalValue} \nFrete: R$${deliveryFee.toFixed(
      2
    )}\n\nPreencha as informações:\n\nNome:\nEndereço:\nForma de pagamento:\nPix, Débito, Crédito`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5585991470709&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleRegionChange = (event) => {
    const selected = regions.find((region) => region.name === event.target.value);
    setSelectedRegion(selected.name);
    setDeliveryFee(selected.fee);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo-container">
        <img
          src="./img/Logo.png"
          alt="Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizzas</Link>
        </li>
        <li>
          <Link to="/burguers">Pastéis</Link>
        </li>
        <li>
          <Link to="/calzones">Calzones</Link>
        </li>
        <li>
          <Link to="/bebidas">Bebidas</Link>
        </li>
        <li>
          <Link to="/MaisVendidos">+Vendidos</Link>
        </li>
        <div>
          <SocialMedia />
        </div>
      </ul>
      <div className="boxCar" onClick={handleCartToggle}>
        <img src="./img/ShoppingBag.png" alt="Cart" className="cart-icon" />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </div>
      <section className={`carinho_compras ${isCartOpen ? "open" : ""}`}>
        <h2 id="titleCar">Sacola</h2>
        <div className="carrinho-itens" id="carrinho-tbody">
          {cart.length === 0 ? (
            <p className="priceCar">Sua sacola está vazia</p>
          ) : (
            cart.map((item, index) => (
              <div key={index}>
                <span className="priceCar">
                  {item.name} - R${item.price.toFixed(2)}
                </span>
                <button id="removerCar" onClick={() => removeFromCart(index)}>
                  X
                </button>
                <hr />
              </div>
            ))
          )}
        </div>
        <div className="total-carrinho">
          <label>
            <strong className="car-tl">Selecione a região:</strong>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="region-select"
            >
              <option value="">Selecione...</option>
              {regions.map((region) => (
                <option key={region.name} value={region.name}>
                  {region.name} (+R${region.fee.toFixed(2)})
                </option>
              ))}
            </select>
          </label>
          <p>
            <strong>Taxa: </strong> R${deliveryFee.toFixed(2)}
          </p>
          <strong>Total:</strong>
          <span id="total-carrinho">
            {" R$" + (Number(total) + deliveryFee).toFixed(2)}
          </span>
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
