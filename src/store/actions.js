import {
  ADD_COUNTER,
  ADD_CART_LIST
} 
from './mutations_const'
export default {
  addCartList(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.id == payload.id
    )
    if(oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    }else {
      payload.count += 1
      context.commit(ADD_CART_LIST, payload)
    }
  }
}