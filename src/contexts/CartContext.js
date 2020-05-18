import React, { createContext, useReducer, useEffect } from "react"
import Client from "shopify-buy"

import { cartReducer } from "../reducers/CartReducer"

const CART_STORAGE_KEY = "shopify_checkout_id"

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOP_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

const initialCartState = {
  client,
  isAdding: false,
  checkout: { lineItems: [] },
}

const CartContext = createContext({
  cart: initialCartState,
  setCart: () => null,
})

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState, () => {
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
      const localData = localStorage.getItem(CART_STORAGE_KEY)
      return localData ? JSON.parse(localData) : initialCartState
    }
    return initialCartState
  })

  useEffect(() => {
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    }
  }, cart)

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
