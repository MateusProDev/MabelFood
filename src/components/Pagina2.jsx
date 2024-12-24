import React, { useState } from "react";
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Pastel de Frango C/Catupiry",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/frango.avif",
  },
  {
    id: 2,
    name: "Pastel de Calamista",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/mistao.avif",
  },
  {
    id: 3,
    name: "Pastel de Misto",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/misto.jpg",
  },
  {
    id: 4,
    name: "Pastel de Portuguesa",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/portuguesa.avif",
  },
  {
    id: 5,
    name: "Pastel de Calabreza",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/calabresa.jpg",
  },
  {
    id: 6,
    name: "Pastel de Chocolate",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/chocolate.avif",
  },
  {
    id: 7,
    name: "Pastel de Mussarela",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/3queijos.avif",
  },
  {
    id: 8,
    name: "Pastel de Marguerita",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/modadacasa.jpg",
  },
  {
    id: 9,
    name: "Pastel a Moda da Casa",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/PastelMaster.jpg",
  },
  {
    id: 10,
    name: "Pastel de Bacon",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/bacon.png",
  },
  {
    id: 11,
    name: "Pastel de 3 Queijos",
    content: "Entregamos para sua região",
    basePrice: 6.99,
    imgSrc: "/img/3queijos.jpg",
  },
];

const sizes = [
  { name: "Pastel Pequeno", priceModifier: 0 },
  { name: "Pastel Grande (Pastelão)", priceModifier: 11.00 },
];

const Pagina2 = ({ addToCart }) => {
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
        <h1>PASTÉIS</h1>
        <p>Conheça os sabores dos nossos pastéis</p>
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

export default Pagina2;
