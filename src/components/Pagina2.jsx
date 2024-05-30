import React from 'react';
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Burguer Mac",
    content: "Entrega Grátis",
    price: 16.99,
    imgSrc: "/img/BurguerPremium.jpg",
  },
  {
    id: 2,
    name: "Burguer Frango",
    content: "Entrega Grátis",
    price: 14.99,
    imgSrc: "/img/BurguerFrango.jpg",
  },
  {
    id: 3,
    name: "Burguer Premium",
    content: "Entrega Grátis",
    price: 22.99,
    imgSrc: "/img/burguer.jpg",
  },
  {
    id: 4,
    name: "Burguer Master",
    content: "Entrega Grátis",
    price: 27.99,
    imgSrc: "/img/BurguerMaster.jpg",
  },
];

const Pagina2 = ({ addToCart }) => {
  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>HAMBURGUERS</h1>
        <p>Conheça os sabores dos nossos Hambúrguers</p>
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

export default Pagina2;
