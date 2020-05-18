import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const SHOPIFY_CHECKOUT_STORAGE_KEY = "shopify_checkout_id"

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
  const [cart, setCart] = useState(initialCartState)
  const { checkout, client } = cart

  const addToCart = variant => {
    const lineItemsToAdd = [{ variantId: variant.shopifyId, quantity: 1 }]
    const newCheckout = { lineItems: [...checkout.lineItems, lineItemsToAdd] }
    setCart(prevState => {
      return { ...prevState, checkout: newCheckout, isAdding: false }
    })
  }

  const removeFromCart = id => {
    const newCheckout = {
      lineItems: checkout.lineItems.filter(item => item.shopifyId !== id),
    }
    setCart(prevState => {
      return { ...prevState, checkout: newCheckout, isAdding: false }
    })
  }

  const value = { cart, addToCart, removeFromCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export { CartContext, CartContextProvider }
