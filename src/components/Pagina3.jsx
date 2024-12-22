import React, { useState } from "react";
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Batata Tradicional (300gm)",
    content: "Entregamos para sua região",
    price: 9.99,
    imgSrc: "/img/batatanormal.jpg",
  },
  {
    id: 2,
    name: "Batata Recheada (300gm)",
    content: "Entregamos para sua região",
    price: 14.99,
    imgSrc: "/img/batatarecheada.jpg",
  },
];

const complements = [
  { id: 1, name: "Cheddar", price: 0.0 },
  { id: 2, name: "Catupiry", price: 0.0 },
  { id: 3, name: "Calabresa", price: 0.0 },
  { id: 4, name: "Queijo Ralado", price: 0.0 },
];

const Pagina3 = ({ addToCart }) => {
  const [selectedComplements, setSelectedComplements] = useState([]);

  const handleComplementChange = (complement) => {
    setSelectedComplements((prev) => {
      if (prev.includes(complement)) {
        return prev.filter((item) => item !== complement);
      } else {
        return [...prev, complement];
      }
    });
  };

  const calculateTotalPrice = (basePrice) => {
    const complementPrice = selectedComplements.reduce((total, comp) => total + comp.price, 0);
    return basePrice + complementPrice;
  };

  const handleAddToCart = (product) => {
    const updatedProduct = {
      ...product,
      name: `${product.name}${
        selectedComplements.length && product.name.includes("Recheada")
          ? " + " + selectedComplements.map((comp) => comp.name).join(", ")
          : ""
      }`,
      price: calculateTotalPrice(product.price),
    };
    addToCart(updatedProduct);
    setSelectedComplements([]);
  };

  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>BATATAS</h1>
        <p>Conheça nossas Batatas (Tradicional/Recheadas)</p>
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
                <span>R${calculateTotalPrice(product.price).toFixed(2)}</span>

                {/* Seção de Complementos */}
                {product.name.includes("Recheada") && (
                  <div className="complements">
                    <p>Escolha seus complementos:</p>
                    {complements.map((complement) => (
                      <label key={complement.id} className="complement-item">
                        <input
                          type="checkbox"
                          checked={selectedComplements.includes(complement)}
                          onChange={() => handleComplementChange(complement)}
                        />
                        {complement.name} (+R${complement.price.toFixed(2)})
                      </label>
                    ))}
                  </div>
                )}

                <button
                  className="btn"
                  type="button"
                  onClick={() => handleAddToCart(product)}
                >
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
