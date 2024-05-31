import React from 'react';
import './pagina1.css';

const products = [
  {
    id: 1,
    name: "Pizza de Pepperoni",
    content: "Entrega Grátis",
    price: 34.99,
    imgSrc: "/img/pepperoni.jpg",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    content: "Entrega Grátis",
    price: 29.99,
    imgSrc: "/img/marg.jpg",
  },
  {
    id: 3,
    name: "Pizza de Chocolate",
    content: "Entrega Grátis",
    price: 36.99,
    imgSrc: "/img/pizzadoce.jpg",
  },
  {
    id: 4,
    name: "Pizza Vegetariana",
    content: "Entrega Grátis",
    price: 32.99,
    imgSrc: "/img/vege.jpg",
  },
];

const Pagina1 = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
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
              <strong>{product.content}</strong>
              <div className="box-value">
                <span>R${product.price.toFixed(2)}</span>
                <button className="btn" type="button" onClick={() => handleAddToCart(product)}>
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

export default Pagina1;
