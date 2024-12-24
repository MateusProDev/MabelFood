import React, { useState } from "react";
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Calzone de Frango C/Catupiry",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 2,
    name: "Calzone de Calamista",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 3,
    name: "Calzone de Misto",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 4,
    name: "Calzone de Portuguesa",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 5,
    name: "Calzone de Calabreza",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 6,
    name: "Calzone de Chocolate",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 7,
    name: "Calzone de Mussarela",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 8,
    name: "Calzone de Marguerita",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 9,
    name: "Calzone a Moda da Casa",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 10,
    name: "Calzone de Bacon",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
  {
    id: 11,
    name: "Calzone de 3 Queijos",
    content: "Entregamos para sua região",
    basePrice: 18.99,
    imgSrc: "/img/calzone.jpeg",
  },
];

const sizes = [
  { name: "Calzone Médio", priceModifier: 0 },
  { name: "Calzone Grande", priceModifier: 6 },
];

const Pagina6 = ({ addToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const calculatePrice = (basePrice, size) => {
    const sizeModifier = sizes.find((s) => s.name === size)?.priceModifier || 0;
    return basePrice + sizeModifier;
  };

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id] || sizes[0].name; // Default to "Pequeno"
    const updatedProduct = {
      ...product,
      name: `${product.name} (${selectedSize})`,
      price: calculatePrice(product.basePrice, selectedSize),
    };
    addToCart(updatedProduct);
  };

  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>CALZONES</h1>
        <p>Conheça os sabores dos nossos Calzones</p>
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
                {/* Escolha de tamanho */}
                <div className="sizes">
                  <p>Escolha o tamanho:</p>
                  {sizes.map((size) => (
                    <label key={size.name} className="size-option">
                      <input
                        type="radio"
                        name={`size-${product.id}`}
                        checked={selectedSizes[product.id] === size.name}
                        onChange={() => handleSizeChange(product.id, size.name)}
                      />
                      {size.name}
                    </label>
                  ))}
                </div>

                {/* Exibir preço atualizado */}
                <span>
                  R${calculatePrice(product.basePrice, selectedSizes[product.id] || sizes[0].name).toFixed(2)}
                </span>
                <button className="btn" type="button" onClick={() => handleAddToCart(product)}>
                  Adicionar à sacola
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Pagina6;
