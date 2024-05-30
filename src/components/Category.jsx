import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="containerFlexCar">
      <div className="categoryContainer">
        <div className="boxCate" onClick={() => navigate('/Pizzas')}>
          <img src="./img/SalamiPizza.png" alt="Pizzas" />
          <h3>Pizzas</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/Burguers')}>
          <img src="./img/Hamburger.png" alt="Hamburgues" />
          <h3>Hamburgues</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/HotDogs')}>
          <img src="./img/HotDog.png" alt="HotDog" />
          <h3>HotDog</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/Bebidas')}>
          <img src="./img/Soda.png" alt="Bebidas" />
          <h3>Bebidas</h3>
        </div>
      </div>
    </div>
  );
}

export default Category;
