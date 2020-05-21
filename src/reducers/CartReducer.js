export const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CHECKOUT":
      return { ...state, checkout: action.checkout, isAdding: false }

    default:
      return state
  }
}
