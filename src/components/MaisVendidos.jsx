import React from "react";
import "./MaisVendidos.css";

const products = [
  {
    id: 1,
    name: "Pizza de Pepperoni",
    content: "Frete Grátis",
    price: 34.99,
    imgSrc: "/img/pepperoni.jpg",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    content: "Frete Grátis",
    price: 29.99,
    imgSrc: "/img/marg.jpg",
  },
  {
    id: 3,
    name: "Hambúrguer completo",
    content: "Frete Grátis",
    price: 12.99,
    imgSrc: "/img/burguer.jpg",
  },
  {
    id: 4,
    name: "Pizza Vegetariana",
    content: "Frete Grátis",
    price: 32.99,
    imgSrc: "/img/vege.jpg",
  },
];

const MaisVendidos = ({ addToCart }) => {
  return (
    <div>
      <div className="seeHome">
        <h1>Os mais vendidos</h1>
        <h4>Ver Todos</h4>
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
                <button type="button" onClick={() => addToCart(product)}>
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

export default MaisVendidos;
