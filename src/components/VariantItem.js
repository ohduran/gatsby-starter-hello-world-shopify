import React from "react"
import { useAddItemToCart } from "../contexts/CartContext"

const VariantItem = ({ variant }) => {
  const addItemToCart = useAddItemToCart()

  function handleAddToCart(variant) {
    addItemToCart(variant.shopifyId, 1)
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
          handleAddToCart(variant)
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default VariantItem
