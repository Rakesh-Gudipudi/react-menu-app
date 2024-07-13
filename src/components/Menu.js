import React from 'react';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Chicken Curry', price: 10, image: 'chicken-curry.jpg' },
  { id: 2, name: 'Paneer Butter Masala', price: 8, image: 'paneer-butter-masala.jpg' },
  { id: 3, name: 'Naan', price: 2, image: 'naan.jpg' },
];

const Menu = ({ addToCart }) => {
  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={`/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
