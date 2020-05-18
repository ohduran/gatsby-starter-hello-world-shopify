export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VARIANT":
      let lineItemsToAdd = [{ variantId: action.shopifyId, quantity: 1 }]
      let newCheckout = {
        lineItems: [...state.checkout.lineItems, lineItemsToAdd],
      }
      return { ...state, checkout: newCheckout, isAdding: false }

    case "DELETE_VARIANT":
      let filteredCheckOut = {
        lineItems: state.checkout.lineItems.filter(
          item => item.shopifyId !== action.id
        ),
      }
      return { ...state, checkout: filteredCheckOut, isAdding: false }

    default:
      return state
  }
}
