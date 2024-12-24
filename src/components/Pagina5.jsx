import React, { useState } from "react";
import "./pagina5.css";

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

const crustPrices = {
  "Borda Cheddar": 0.0,
  "Borda Catupiry": 0.0,
  "Borda Chocolate": 3.0,
};

const Pagina5 = ({ addToCart }) => {
  const [secondFlavor, setSecondFlavor] = useState("");
  const [selectedCrust, setSelectedCrust] = useState("");
  const [notification, setNotification] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [currentPrices, setCurrentPrices] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: product.price }), {})
  );

  const handleSizeChange = (productId, size) => {
    setSelectedSize(size);

    // Atualiza o preço com base no tamanho
    const updatedPrices = { ...currentPrices };
    if (size === "Média") {
      updatedPrices[productId] = 21.99;
    } else if (size === "Grande") {
      updatedPrices[productId] = products.find((p) => p.id === productId).price;
    }
    setCurrentPrices(updatedPrices);

    // Reseta o segundo sabor ao mudar o tamanho
    setSecondFlavor("");
  };

  const handleAddToCart = (product, secondFlavor, selectedCrust, selectedSize) => {
    let productName = `${product.name} (${selectedSize})`;
    let finalPrice = currentPrices[product.id];

    if (selectedSize === "Grande" && secondFlavor) {
      productName += ` - Metade ${secondFlavor}`;
    }

    if (selectedCrust) {
      finalPrice += crustPrices[selectedCrust];
      productName += ` - ${selectedCrust}`;
    }

    addToCart({ ...product, name: productName, price: finalPrice });

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
                <span>R${currentPrices[product.id].toFixed(2)}</span>

                {/* Seleção de tamanho */}
                <select
                  value={selectedSize}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  className="select-size"
                >
                  <option value="">Escolha o tamanho</option>
                  <option value="Média">Média</option>
                  <option value="Grande">Grande</option>
                </select>

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

export default Pagina5;
