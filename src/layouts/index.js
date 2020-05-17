import React from "react"
import { CartContextProvider } from "../contexts/CartContext"

const DefaultLayout = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>
}

export default DefaultLayout
