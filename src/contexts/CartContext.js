import React, { createContext, useReducer, useEffect, useContext } from "react"
import Client from "shopify-buy"

import { cartReducer } from "../reducers/CartReducer"

const SHOPIFY_CHECKOUT_STORAGE_KEY = "shopify_checkout_id"

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOP_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

function createNewCheckout(cart) {
  return cart.checkout.create()
}

function fetchCheckout(client, id) {
  return client.checkout.fetch(id)
}

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
  const [cart, dispatch] = useReducer(cartReducer, initialCartState)

  useEffect(() => {
    const initializeCheckout = async () => {
      const isBrowser = typeof window !== "undefined"
      const existingCheckoutId = isBrowser
        ? localStorage.getItem(SHOPIFY_CHECKOUT_STORAGE_KEY)
        : null
      if (existingCheckoutId) {
        try {
          const checkout = await fetchCheckout(client, existingCheckoutId)
          if (!checkout.completedAt) {
            return {
              client,
              checkout,
              isAdding: false,
            }
          }
        } catch {
          localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, null)
        }
      }
      const newCheckout = await createNewCheckout(client)
      localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, newCheckout.id)
      return {
        client,
        newCheckout,
        isAdding: false,
      }
    }

    initializeCheckout()
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

function useAddItemToCart() {
  const { cart, dispatch } = useContext(CartContext)

  async function addItemToCart(variantId, quantity) {
    if (variantId === "" || !quantity) {
      console.error("Both a size and quantity are required.")
      return
    }

    dispatch({ type: "START_ADDING" })

    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
      localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, JSON.stringify(cart))
    }

    const checkoutId = cart.checkout.id
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]

    const newCheckout = await client.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    )

    dispatch({ type: "ADD_VARIANT", variantId, quantity })
  }

  return addItemToCart
}

export { CartContext, CartContextProvider, useAddItemToCart }
