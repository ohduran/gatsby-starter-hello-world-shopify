import React, { useContext } from "react"
import DefaultLayout from "../layouts"
import { CartContext } from "../contexts/CartContext"

const Cart = () => {
  const {
    cart: {
      checkout: { lineItems },
    },
  } = useContext(CartContext)
  console.log(lineItems)
  return (
    <DefaultLayout>
      <h1>Cart</h1>
      <div>The cart length is {lineItems.length}</div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {lineItems.map(item => (
          <li
            style={{
              listStyleType: "none",
              textAlign: "center",
            }}
          >
            <figure>
              <img
                src={item.variant.image.src}
                style={{
                  width: "100%",
                }}
              />
            </figure>
            <p>{item.title}</p>
            <p>{item.variant.title}</p>
            <p>{item.variant.price}€</p>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  )
}

export default Cart
