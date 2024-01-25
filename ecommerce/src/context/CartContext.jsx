import { createContext, useState } from "react";

export const CartContext = createContext();


// El siguiente Provider es un componente.
// Se piensa el Provider como un componente. Min. 00:59
export const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id == id);
    // El método .some() verifica si al menos un elemento del array cumple con la condición
    // dada en la función de prueba.
  }

  const itemQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  const total = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }

  const emptyCart = () => {
    setCart([]);
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id != id))
  }

  return (

    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      isInCart,
      itemQuantity,
      total,
      emptyCart,
      removeItem
    }}>
      {children}
    </CartContext.Provider>

  )

}