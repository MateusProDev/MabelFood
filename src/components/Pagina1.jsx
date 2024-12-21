import React, { useState } from "react";
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Pizza de Frango C/Catupiry",
    content: "Entregamos para sua região",
    descrition: "Massa fresca, Molho de tomate, Frango, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/pepperoni.jpg",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    content: "Entregamos para sua região",
    descrition: "Massa fresca, Molho de tomate, Frango, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/marg.jpg",
  },
  {
    id: 3,
    name: "Pizza de Chocolate",
    content: "Entregamos para sua região",
    descrition: "Massa fresca, Molho de tomate, Frango, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/pizzadoce.jpg",
  },
  {
    id: 4,
    name: "Pizza de Carne do sol",
    content: "Entregamos para sua região",
    descrition: "Massa fresca, Molho de tomate, Frango, Queijo, Orégano e Azeitona",
    price: 46.99,
    imgSrc: "/img/vege.jpg",
  },
];

const Pagina1 = ({ addToCart }) => {
  const [secondFlavor, setSecondFlavor] = useState(""); // Estado para o segundo sabor
  const [notification, setNotification] = useState(""); // Estado para exibir a notificação

  const handleAddToCart = (product, secondFlavor) => {
    let productName = product.name;
    if (secondFlavor) {
      productName = `${product.name} - Metade ${secondFlavor}`; // Corrigido para mostrar apenas o segundo sabor
    }
    addToCart({ ...product, name: productName });

    // Exibe a notificação
    setNotification("Item adicionado à sacola!");

    // Fecha a notificação após 3 segundos
    setTimeout(() => {
      setNotification(""); // Limpa a notificação após 3 segundos
    }, 3000);
  };

  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>PIZZAS</h1>
        <p>Conheça os sabores das nossas Pizzas</p>
      </div>
      <div className="container">
        {products.map((product) => (
          <section key={product.id} className="produto">
            <h2>{product.name}</h2>
            <div>
              <img src={product.imgSrc} alt={product.name} />
              <br />
              <strong>{product.content}</strong> <br />
              <p  className="descri">{product.descrition}</p>
              <div className="box-value">
                <span>R${product.price.toFixed(2)}</span>
                {/* Campo para escolher o segundo sabor */}
                <select
                  value={secondFlavor}
                  onChange={(e) => setSecondFlavor(e.target.value)}
                  className="select-flavor" // Estilo do select
                >
                  <option value="">Selecione o segundo sabor (opcional)</option>
                  {products.map((item) =>
                    item.name !== product.name ? (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ) : null
                  )}
                </select>
                <button
                  className="btn"
                  type="button"
                  onClick={() =>
                    handleAddToCart(product, secondFlavor) // Passa o segundo sabor para a função
                  }
                >
                  Adicionar a sacola
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Notificação */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default Pagina1;
