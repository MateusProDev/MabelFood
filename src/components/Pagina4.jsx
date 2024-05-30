import React from 'react';
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Coca Cola",
    content: "Entrega Grátis",
    price: 4.99,
    imgSrc: "/img/cocacola.jpg",
  },
  {
    id: 2,
    name: "Pepsi",
    content: "Entrega Grátis",
    price: 4.99,
    imgSrc: "/img/pepsi.jpg",
  },
  {
    id: 3,
    name: "Fata Laranja",
    content: "Entrega Grátis",
    price: 4.99,
    imgSrc: "/img/fanta.jpg",
  },
  {
    id: 4,
    name: "Vitamina de morango",
    content: "Entrega Grátis",
    price: 7.00,
    imgSrc: "/img/morango.jpg",
  },
  {
    id: 5,
    name: "Suco de Laranja",
    content: "Entrega Grátis",
    price: 7.00,
    imgSrc: "/img/laranja.jpg",
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
