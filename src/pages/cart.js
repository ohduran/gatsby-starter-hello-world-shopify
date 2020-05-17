import React from "react"
import DefaultLayout from "../layouts"
import CartList from "../components/CartList"

const Cart = () => {
  return (
    <DefaultLayout>
      <h1>Cart</h1>
      <CartList />
    </DefaultLayout>
  )
}

export default Cart
