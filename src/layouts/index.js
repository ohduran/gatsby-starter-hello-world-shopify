import React from "react"
import { CartContextProvider } from "../contexts/CartContext"
import NavBar from "../components/NavBar"

const DefaultLayout = ({ children }) => {
  return (
    <CartContextProvider>
      <NavBar />
      {children}
    </CartContextProvider>
  )
}

export default DefaultLayout
