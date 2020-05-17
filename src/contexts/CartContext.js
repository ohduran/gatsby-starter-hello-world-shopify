import React, { createContext, useState, useEffect } from "react"

const CART_STORAGE_ID = "cartStorage"

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = variant => {
    setCart([...cart, variant])
  }

  const removeFromCart = id => {
    setCart(cart.filter(item => item.shopifyId !== id))
  }

  const value = { cart, addToCart, removeFromCart }

  // useEffect(() => {
  //   // WebPack doesn't allow for a normal flow of window.localStorage
  //   // and it has to be controled in this weird way.
  //   const windowGlobal = typeof window !== "undefined" && window
  //   if (windowGlobal) {
  //     windowGlobal.localStorage.setItem(CART_STORAGE_ID, JSON.stringify(cart))
  //   }
  // }, [cart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export { CartContext, CartContextProvider }
