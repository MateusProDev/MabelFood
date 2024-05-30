import React from 'react';
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Dogão 4 queijos",
    content: "Entrega Grátis",
    price: 8.00,
    imgSrc: "/img/dog2.jpg",
  },
  {
    id: 2,
    name: "Dogão tradicional",
    content: "Entrega Grátis",
    price: 7.00,
    imgSrc: "/img/dog3.jpg",
  },
  {
    id: 3,
    name: "Hot'Tudo",
    content: "Entrega Grátis",
    price: 10.00,
    imgSrc: "/img/dog1.jpg",
  },
];

const Pagina3 = ({ addToCart }) => {
  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>HOTDOGS</h1>
        <p>Conheça os sabores dos nossos Hotdogs</p>
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

export default Pagina3;
