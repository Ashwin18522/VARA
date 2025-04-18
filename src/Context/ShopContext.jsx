import React, { createContext, useState } from 'react';
import products from '../Data/Products';

// Create the context
export const ShopContext = createContext();

// Initializing default cart (productId: quantity)
const getDefaultCart = () => {
  const cart = {};
  products.forEach((product) => {
    cart[product.product_id] = 0;
  });
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add to cart
  const addToCart = (productId, quantity = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + quantity,
    }));
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: Math.max(prev[productId] - 1, 0),
    }));
  };

  // Get total items in cart
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  // Get total price
  const getTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.price * cartItems[product.product_id];
    }, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
