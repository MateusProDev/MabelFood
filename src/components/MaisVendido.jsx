import React from "react";
import "./MaisVendido.css";
import { Link } from 'react-router-dom';

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
    name: "Burguer Mac",
    content: "Entrega Grátis",
    price: 29.99,
    imgSrc: "/img/burguer.jpg",
  },
  {
    id: 3,
    name: "Pizza Margherita",
    content: "Entrega Grátis",
    price: 12.99,
    imgSrc: "/img/marg.jpg",
  },
  {
    id: 4,
    name: "Pizza Vegetariana",
    content: "Entrega Grátis",
    price: 32.99,
    imgSrc: "/img/vege.jpg",
  },
];

const MaisVendido = ({ addToCart }) => {
  return (
    <div className="containerFlexMais">
      <div className="flexMais">
        <div className="seeHome">
          <h1>Mais vendidos</h1>
          <Link to="/MaisVendidos">
            <h4>Ver Todos</h4>
          </Link>
        </div>
        <div className="container">
          {" "}
          {/* Adiciona a classe container aqui */}
          {products.map((product) => (
            <section key={product.id} className="produto">
              {" "}
              {/* Mantém a classe produto aqui */}
              <h2>{product.name}</h2>
              <div>
                <img src={product.imgSrc} alt={product.name} />
                <br />
                <strong>{product.content}</strong>
                <div className="box-value">
                  <span>R${product.price.toFixed(2)}</span>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Adicionar a sacola
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaisVendido;
