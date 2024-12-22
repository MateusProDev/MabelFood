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
    price: 39.99,
    imgSrc: "/img/carnedosol.jpg",
  },
];

const Pagina1 = ({ addToCart }) => {
  const [secondFlavor, setSecondFlavor] = useState(""); // Estado para o segundo sabor
  const [selectedCrust, setSelectedCrust] = useState(""); // Estado para a borda
  const [notification, setNotification] = useState(""); // Estado para exibir a notificação

  const crustPrices = {
    "Borda Cheddar": 0.0,
    "Borda Catupiry": 0.0,
    "Borda Chocolate": 3.0,
  };

  const handleAddToCart = (product, secondFlavor, selectedCrust) => {
    let productName = product.name;
    let finalPrice = product.price;

    // Ajustar o nome do produto com o segundo sabor, se aplicável
    if (secondFlavor) {
      productName = `${product.name} - Metade ${secondFlavor}`;
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
            <div>
              <img src={product.imgSrc} alt={product.name} />
              <br />
              <strong>{product.content}</strong>
              <p>{product.description}</p>
              <div className="box-value">
                <span>R${product.price.toFixed(2)}</span>
                
                {/* Campo para escolher o segundo sabor */}
                <select
                  value={secondFlavor}
                  onChange={(e) => setSecondFlavor(e.target.value)}
                  className="select-flavor" // Estilo do select
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

                {/* Campo para escolher a borda */}
                <select
                  value={selectedCrust}
                  onChange={(e) => setSelectedCrust(e.target.value)}
                  className="select-crust" // Classe para estilizar
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
                    handleAddToCart(product, secondFlavor, selectedCrust) // Passa o segundo sabor e a borda
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
