import React from 'react';
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Coca Cola",
    content: "Entregamos para sua região",
    price: 7.99,
    imgSrc: "/img/cocacola.png",
  },
  {
    id: 2,
    name: "Pepsi",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/pepsi.png",
  },
  {
    id: 3,
    name: "Guaraná Antarctica",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/guarana.png",
  },
];

const Pagina4 = ({ addToCart }) => {
  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>BEBIDAS</h1>
        <p>Conheça os sabores das nossas Bebidas</p>
      </div>
      <div className="container"> {/* Adiciona a classe container aqui */}
        {products.map((product) => (
          <section key={product.id} className="produto"> {/* Mantém a classe produto aqui */}
            <h2>{product.name}</h2>
            <div>
              <img src={product.imgSrc} alt={product.name} />
              <br />
              <strong>{product.content}</strong>
              <div className="box-value">
                <span>R${product.price.toFixed(2)}</span>
                <button className="btn" type="button" onClick={() => addToCart(product)}>
                  Adicionar a sacola
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Pagina4;
