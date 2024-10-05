import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  // FUNCION PARA AGREGAR PRODUCTO AL CARRITO
  const addToCart = (product) => {

    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // FUNCION QUE REVISA SI EXISTE EL PRODUCTO
  const isInCart = (id) => {

    return cart.some(prod => prod.id === id)
  }

  // FUNCION PARA BORRAR PRODUCTO
  const deleteProduct = (productId) => {

    const updatedCart = cart.filter((item) => item.id !== productId);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // FUNCION QUE DEVUELVE LA CANTIDAD DE PRODUCTOS AGREGADOS
  const getTotalQuantity = () => {

    let totalQuantity = 0

    cart.forEach(prod => {

        totalQuantity += prod.quantity
    })

    return totalQuantity
  }

  const totalQuantity = getTotalQuantity()

  // FUNCION QUE MUESTRA EL TOTAL DEL CARRITO
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