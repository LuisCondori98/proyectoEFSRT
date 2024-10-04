import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const addToCart = (product) => {

    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const isInCart = (id) => {

    return cart.some(prod => prod.id === id)
}


  const deleteProduct = (productId) => {

    const updatedCart = cart.filter((item) => item.id !== productId);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalQuantity = () => {

    let totalQuantity = 0

    cart.forEach(prod => {

        totalQuantity += prod.quantity
    })

    return totalQuantity
  }

  const totalQuantity = getTotalQuantity()

  const getTotal = () => {

    let total = 0

    cart.forEach(prod => {

        total += prod.quantity * prod.price
    }) 

    return total
  }

  const total = getTotal()

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteProduct, totalQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};