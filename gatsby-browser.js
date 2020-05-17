import React from "react"

import { CartContextProvider } from "./src/contexts/CartContext"

export const wrapRootElement = ({ element }) => (
  <CartContextProvider>{element}</CartContextProvider>
)
