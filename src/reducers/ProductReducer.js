import {
  omit as _omit,
  uniqueId as _uniqueId
} from 'lodash'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from '../actions/ProductActions'

export const productReducer = (
  state = {
    products: {}
  },
  action
) => {
  switch(action.type) {
    case ADD_PRODUCT:
      const id = _uniqueId('product_')
      return {
        products: {
          ...state.products,
          [id]: {
            id,
            ...action.product
          }
        }
      }
    case REMOVE_PRODUCT:
      return {
        products: {
          ..._omit(state.products, action.productId)
        }
      }
    default:
      return state
  }
}
