export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VARIANT":
      let lineItemsToAdd = [
        { variantId: action.variantId, quantity: action.quantity },
      ]
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

    case "START_ADDING":
      return { ...state, isAdding: true }
    case "STOP_ADDING":
      return { ...state, isAdding: false }

    default:
      return state
  }
}
