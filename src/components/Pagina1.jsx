import React, { useState } from "react";
import "./pagina1.css";

const products = [
  {
    id: 1,
    name: "Pizza de Frango C/Catupiry",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Frango, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/frangoca.jpg",
  },
  {
    id: 2,
    name: "Pizza Marguerita",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Queijo,Tomate em rodelas, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/marg.jpg",
  },
  {
    id: 3,
    name: "Pizza de Chocolate",
    content: "Entregamos para sua região",
    description: "Massa fresca, Chocolate",
    price: 39.99,
    imgSrc: "/img/pizzadoce.jpg",
  },
  {
    id: 4,
    name: "Pizza de Carne do Sol",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Carne do sol, Queijo, Orégano e Azeitona",
    price: 46.99,
    imgSrc: "/img/carnedosol.jpg",
  },
  {
    id: 5,
    name: "Pizza de Calabreza",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Calabreza, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/.jpg",
  },
  {
    id: 6,
    name: "Pizza de Calamista",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, calabreza, Presunto, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/.jpg",
  },
  {
    id: 7,
    name: "Pizza 3 Queijos",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Queijo, Cheddar, Catupiry, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/.jpg",
  },
  {
    id: 8,
    name: "Pizza de Mussarela",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Queijo mussarela, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/.jpg",
  },
  {
    id: 9,
    name: "Pizza Mista",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Queijo Presunto, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/.jpg",
  },
  {
    id: 10,
    name: "Pizza de Bacon",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Bacon em Cubos, Queijo, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/.jpg",
  },
];

const Pagina1 = ({ addToCart }) => {
  const [secondFlavor, setSecondFlavor] = useState(""); // Estado para o segundo sabor
  const [selectedCrust, setSelectedCrust] = useState(""); // Estado para a borda
  const [notification, setNotification] = useState(""); // Estado para exibir a notificação
  const [selectedSize, setSelectedSize] = useState(""); // Estado para o tamanho

  const crustPrices = {
    "Borda Cheddar": 0.0,
    "Borda Catupiry": 0.0,
    "Borda Chocolate": 3.0,
  };

  const handleAddToCart = (product, secondFlavor, selectedCrust, selectedSize) => {
    let productName = `${product.name} (${selectedSize})`; // Inclui o tamanho no nome
    let finalPrice = product.price;

    // Adicionar o segundo sabor somente se o tamanho for grande
    if (selectedSize === "Grande" && secondFlavor) {
      productName += ` - Metade ${secondFlavor}`;
    }

    // Adicionar o valor da borda ao preço final
    if (selectedCrust) {
      finalPrice += crustPrices[selectedCrust];
      productName += ` - ${selectedCrust}`;
    }

    // Adiciona o item ao carrinho
    addToCart({ ...product, name: productName, price: finalPrice });

    // Exibe a notificação
    setNotification("Item adicionado à sacola!");

    // Fecha a notificação após 3 segundos
    setTimeout(() => {
      setNotification(""); // Limpa a notificação após 3 segundos
    }, 3000);
  };

  return (
    <div className="pagina1-container">
      <div className="seeHome">
        <h1>PIZZAS</h1>
        <p>Conheça os sabores das nossas Pizzas</p>
      </div>
      <div className="container">
        {products.map((product) => (
          <section key={product.id} className="produto">
            <h2>{product.name}</h2>
            <div className="boxPg1">
              <img src={product.imgSrc} alt={product.name} />
              <br />
              <strong>{product.content}</strong>
              <p>{product.description}</p>
              <div className="box-value">
                <span>R${product.price.toFixed(2)}</span>
                
                {/* Campo para escolher o tamanho */}
                <select
                  value={selectedSize}
                  onChange={(e) => {
                    setSelectedSize(e.target.value);
                    setSecondFlavor(""); // Reseta o segundo sabor ao mudar o tamanho
                  }}
                  className="select-size"
                >
                  <option value="">Escolha o tamanho</option>
                  <option value="Pequena">Pequena</option>
                  <option value="Grande">Grande</option>
                </select>

                {/* Campo para escolher o segundo sabor, exibido apenas para tamanhos grandes */}
                {selectedSize === "Grande" && (
                  <select
                    value={secondFlavor}
                    onChange={(e) => setSecondFlavor(e.target.value)}
                    className="select-flavor"
                  >
                    <option value="">Selecione o segundo sabor (opcional)</option>
                    {products.map((item) =>
                      item.name !== product.name ? (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ) : null
                    )}
                  </select>
                )}

                {/* Campo para escolher a borda */}
                <select
                  value={selectedCrust}
                  onChange={(e) => setSelectedCrust(e.target.value)}
                  className="select-crust"
                >
                  <option value="">Escolha a borda (opcional)</option>
                  <option value="Borda Cheddar">Borda Cheddar - R$ 0,00</option>
                  <option value="Borda Catupiry">Borda Catupiry - R$ 0,00</option>
                  <option value="Borda Chocolate">Borda Chocolate - R$ 3,00</option>
                </select>

                <button
                  className="btn"
                  type="button"
                  onClick={() =>
                    handleAddToCart(product, secondFlavor, selectedCrust, selectedSize)
                  }
                >
                  Adicionar a sacola
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Notificação */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default Pagina1;