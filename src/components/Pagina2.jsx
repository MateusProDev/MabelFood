import React from 'react';
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Patel de Frango C/Catupiry",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelPremium.jpg",
  },
  {
    id: 2,
    name: "Pastel de Calamista",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelFrango.jpg",
  },
  {
    id: 3,
    name: "Pastel de Misto",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/Pastel.jpg",
  },
  {
    id: 4,
    name: "Pastel de Portuguesa",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 5,
    name: "Pastel de Calamista",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 6,
    name: "Pastel de Chocolate",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 7,
    name: "Pastel de Mussarela",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 8,
    name: "Pastel de 3 Queijos",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 9,
    name: "Pastel de Marguerita",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 10,
    name: "Pastel a Moda da casa",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 11,
    name: "Pastel de Bacon",
    content: "Entregamos para sua região",
    price: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
];

const Pagina2 = ({ addToCart }) => {
  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>Patéis</h1>
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
