import React, { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const VariantItem = ({ variant }) => {
  const { addToCart } = useContext(CartContext)
  const handleAddToCartButton = variant => {
    addToCart(variant)
    console.log("item added to cart with id", shopifyId)
  }
  return (
    <div
      key={variant.shopifyId}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {variant.selectedOptions.map(option => {
        return (
          <p key={option.name}>
            {option.name}: {option.value}
          </p>
        )
      })}
      <p>
        Price: {variant.priceV2.amount} {variant.priceV2.currencyCode}
      </p>
      <button
        onClick={() => {
          handleAddToCartButton(variant)
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default VariantItem
