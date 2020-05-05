<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item" @changeData="changeData"/>
   <div class="cart-price">
      <span>总价格：</span>￥{{totalPrice}}
    </div>
   
  </div>
</template>

<script>
import CartListItem from "./CartListItem"

import { mapGetters } from 'vuex'
export default {
  components: {
    CartListItem,
    
  },
  computed: {
    ...mapGetters(['cartList']),
   
    totalPrice() {
      let allPrice = 0
      this.cartList.forEach((item, index) => {
        allPrice += item.price*item.count
      })
      return allPrice
    }
  },
  methods: {
    changeData() {
      this.$emit("changeData");
     
    }
  }
}
</script>

<style scoped>
  .cart-price {
    text-align: right;
    color: #e5017d;
    border-top: 1px solid #eee;
    height: 2rem;
    line-height: 2rem;
    padding-right: 1rem;
  }
  .cart-price span{
    font-size: .8rem;
    font-weight: bold;
    color: #999;
  }
</style>