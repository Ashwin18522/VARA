import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import products from '../Data/Products';
import './CSS/Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalPrice,
  } = useContext(ShopContext);

  const totalAmount = getTotalPrice();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {totalAmount === 0 ? (
        <p className="empty-cart-msg">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {products.map((product) => {
            const quantity = cartItems[product.product_id];
            if (quantity > 0) {
              return (
                <div className="cart-item" key={product.product_id}>
                  <img src={product.image_url} alt={product.name} />
                  <div className="item-details">
                    <h3>{product.name}</h3>
                    <p>₹{product.price} x {quantity}</p>
                    <p className="subtotal">Subtotal: ₹{product.price * quantity}</p>
                    <div className="item-controls">
                      <button onClick={() => removeFromCart(product.product_id)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => addToCart(product.product_id)}>+</button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div className="cart-summary">
            <h2>Total: ₹{totalAmount}</h2>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
