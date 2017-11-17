export const ADD_PRODUCT = "add_product"
export const REMOVE_PRODUCT = "remove_product"

export const addProduct = ({name, amount, pricePerUnit, totalPrice}) => {
  return {
    type: ADD_PRODUCT,
    product: { name, amount, pricePerUnit, totalPrice }
  }
}

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    productId
  }
}
