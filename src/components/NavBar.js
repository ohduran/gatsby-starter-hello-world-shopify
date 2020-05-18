import React, { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "gatsby"
import Cart from "../icons/Cart"
import Home from "../icons/Home"

const NavBar = () => {
  const {
    cart: {
      checkout: { lineItems },
    },
  } = useContext(CartContext)
  return (
    <nav>
      <Link to="/">
        <Home />
      </Link>
      <Link to="/cart">
        <Cart />
        <span>{lineItems.length}</span>
      </Link>
    </nav>
  )
}

export default NavBar
