import React, { useState } from "react";
import "./pagina5.css";

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
    name: "Burguer Mac",
    content: "Entregamos para sua região",
    description: "Pão Brioche, Carne artesanal, Queijo, Presunto, Ovo, Alface e Tomate",
    price: 29.99,
    imgSrc: "/img/burguer.jpg",
  },
  {
    id: 3,
    name: "Pizza Marguerita",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Queijo, Tomate, Orégano e Azeitona",
    price: 39.99,
    imgSrc: "/img/marg.jpg",
  },
  {
    id: 4,
    name: "Pizza de Carne do sol",
    content: "Entregamos para sua região",
    description: "Massa fresca, Molho de tomate, Carne do sol, Queijo, Orégano e Azeitona",
    price: 46.99,
    imgSrc: "/img/carnedosol.jpg",
  },
];

const crustPrices = {
  "Borda Cheddar": 0.0,
  "Borda Catupiry": 0.0,
  "Borda Chocolate": 3.0,
};

const Pagina5 = ({ addToCart }) => {
  const [secondFlavor, setSecondFlavor] = useState("");
  const [selectedCrust, setSelectedCrust] = useState("");
  const [notification, setNotification] = useState("");

  const handleAddToCart = (product, secondFlavor, selectedCrust) => {
    let productName = product.name;
    let finalPrice = product.price;

    // Ajuste o nome do produto com o segundo sabor, se houver
    if (secondFlavor) {
      productName = `${product.name} - Metade ${secondFlavor}`;
    }

    // Adiciona o valor da borda ao preço final
    if (selectedCrust) {
      finalPrice += crustPrices[selectedCrust];
      productName += ` - ${selectedCrust}`;
    }

    // Adiciona o produto ao carrinho
    addToCart({ ...product, name: productName, price: finalPrice });

    // Exibe a notificação
    setNotification("Item adicionado à sacola!");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="pagina5-container">
      <div className="pagina5-seeHome">
        <h1>Mais Vendidos</h1>
        <p>Conheça os produtos mais vendidos</p>
      </div>
      <div className="pagina5-container box-pagina">
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

                {/* Seleção de segundo sabor */}
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

                {/* Seleção de borda */}
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
                  onClick={() => handleAddToCart(product, secondFlavor, selectedCrust)}
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

export default Pagina5;
