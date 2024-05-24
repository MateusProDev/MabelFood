import React from 'react';
import './Category.css';

const Category = () => {
  return (
    <div className="categoryContainer">
      <div className="boxCate">
        <img src="./img/SalamiPizza.png" alt="Hamburgues" />
        <h3>Pizzas</h3>
      </div>
      <div className="boxCate">
        <img src="./img/Hamburger.png" alt="Pizzas" />
        <h3>Hamburgues</h3>
      </div>
      <div className="boxCate">
        <img src="./img/HotDog.png" alt="HotDog" />
        <h3>HotDog</h3>
      </div>
      <div className="boxCate">
        <img src="./img/Soda.png" alt="Bebidas" />
        <h3>Bebidas</h3>
      </div>
    </div>
  );
}

export default Category;
