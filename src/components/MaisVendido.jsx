import React from "react";
import "./MaisVendido.css";
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Pizza de Frango C/Catupiry",
    content: "Entregamos para toda sua região",
    description: "Massa fresca, Molho de tomate, Frango, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/frangoca.jpg",
  },
  {
    id: 2,
    name: "Burguer Mac",
    content: "Entregamos para a sua região",
    price: 29.99,
    imgSrc: "/img/burguer.jpg",
  },
  {
    id: 3,
    name: "Pizza Marguerita",
    content: "Entregamos para a sua região",
    price: 39.99,
    imgSrc: "/img/marg.jpg",
  },
  {
    id: 4,
    name: "Pizza de Carne do Sol",
    content: "Entregamos para toda sua região",
    description: "Massa fresca, Molho de tomate, Carne do sol, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/carnedosol.jpg",
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
              <p>{product.description}</p>
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
