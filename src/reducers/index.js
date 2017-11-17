import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as notifications } from 'react-notification-system-redux'

import { productReducer } from './ProductReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  notifications,
  productReducer
})

export default (state, action) => {
  return rootReducer(state, action)
}
