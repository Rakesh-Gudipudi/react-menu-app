import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={`/${item.image}`} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button className="payment-button">Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
