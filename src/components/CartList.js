import React, { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const CartList = () => {
  const { cart } = useContext(CartContext)
  return <div>The cart length is {cart.length}</div>
}

export default CartList
