import React, { useContext } from "react"
import DefaultLayout from "../layouts"
import { CartContext } from "../contexts/CartContext"

const Cart = () => {
  const {
    cart: {
      checkout: { lineItems },
    },
  } = useContext(CartContext)
  return (
    <DefaultLayout>
      <h1>Cart</h1>
      <div>The cart length is {lineItems.length}</div>
    </DefaultLayout>
  )
}

export default Cart
