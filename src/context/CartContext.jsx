import React from "react";
import { createContext, useState } from "react";

// CartContext = CarritoContext
export const CartContext = createContext({
  cart: [], // = carrito
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const addItem = (item, cantidad) => {
    const productoExistente = cart.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCart((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  const eliminarProducto = (id) => {
    const productoEliminado = cart.find((prod) => prod.item.id === id);
    const carritoActualizado = cart.filter((prod) => prod.item.id !== id);
    setCart(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev - productoEliminado.item.precio * productoEliminado.cantidad
    );
  };

  //(clearCart)
  const vaciarCarrito = () => {
    setCart([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  //Usamos el componente CartContext.Provider
  return (
    
      <CartContext.Provider value = {{cart, addItem, eliminarProducto, vaciarCarrito, total, cantidadTotal}}> 
      {children}
      
      </CartContext.Provider>
    
  )
}
