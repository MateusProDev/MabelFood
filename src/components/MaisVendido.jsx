import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação
import "./MaisVendido.css";

const products = [
  {
    id: 1,
    name: "Pizza de Frango C/Catupiry",
    content: "Entregamos para toda sua região",
    description: "Massa fresca, Molho de tomate,<br />Frango, Queijo, Orégano e Azeitona",
    price: 27.99,
    imgSrc: "/img/pizzafrangoc.avif",
  },
  {
    id: 2,
    name: "Pizza de Calabresa",
    content: "Entregamos para a sua região",
    description: "Pão Brioche, Carne artesanal, Queijo,<br />Prejunto, Ovos, Tomate e Alface",
    price: 27.99,
    imgSrc: "/img/pizzacalabresa.avif",
  },
  {
    id: 3,
    name: "Pizza Marguerita",
    content: "Entregamos para a sua região",
    description: "Massa fresca, Molho de tomate, <br />Queijo, Tomate, Orégano e Azeitona",
    price: 27.99,
    imgSrc: "/img/pizzamarguerita.avif",
  },
  {
    id: 4,
    name: "Pizza de Carne do Sol",
    content: "Entregamos para toda sua região",
    description: "Massa fresca, Molho de tomate, Carne<br />do sol, Queijo, Orégano e Azeitona",
    price: 34.99,
    imgSrc: "/img/carnedosol.jpg",
  },
];

const MaisVendido = ({ addToCart }) => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  return (
    <div className="containerFlexMais">
      <div className="flexMais">
        <div className="seeHome">
          <h1>Mais vendidos</h1>
          <h4 onClick={() => navigate("/MaisVendidos")}>Ver Todos</h4>
        </div>
        <div className="container">
          {products.map((product) => (
            <section key={product.id} className="produto">
              <h2>{product.name}</h2>
              <div className="maisVendidos">
                <img src={product.imgSrc} alt={product.name} />
                <br />
                <strong>{product.content}</strong>
                <div className="boxDesc">
                  <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                </div>
                <div className="box-value">
                  <span>R${product.price.toFixed(2)}</span>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => {
                      navigate("/MaisVendidos"); // Redireciona para a página 5
                    }}
                  >
                    Comprar Agora
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
