import {
  ADD_COUNTER,
  ADD_CART_LIST
} 
from './mutations_const'
export default {
 [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_CART_LIST](state, payload) {
    state.cartList.push(payload)
  }
}