import React, { createContext, useContext, useState } from 'react';

const Cartcontent = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Cartcontent.Provider value={{ cart, addToCart, removeFromCart, clearCart, calculateTotalPrice }}>
      {children}
    </Cartcontent.Provider>
  );
};

export const useCart = () => {
  const context = useContext(Cartcontent);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
