<template>
  <div class="cart">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
      <template #title>购物车({{ cartLength }})</template>
      
    </van-nav-bar>
    <div class="clear-list">
      <van-button type="danger" size="small" color="#e5017d" @click="clearList">清空购物车</van-button>
    </div>
     <cart-list />
  </div>
 
</template>

<script>
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList";
export default {
  name: 'Cart',
  components: {
    CartList
  },
  data() {
    return {
      cartInfo: [],
      isCartList: false
      // cartTitle: '购物车'
    };
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
     cartList: {
     get() {
        return this.$store.state.cartList
     },
     set(val) {
       return this.$store.state.cartList = val
     }
    },
  },
  created() {
    // this.getCartInfo()
  },
  methods: {
    // getCartInfo() {
    //   if(localStorage.cartInfo) {
    //     this.cartInfo = JSON.parse(localStorage.cartInfo)
    //     let a =1
    //     console.log(a)
    //   }
    //   let a =2
    //   console.log(a)
    //   console.log('this.cartInfo' + JSON.stringify(this.cartInfo))
    //   this.isCartList = this.cartInfo.length > 0 ? true : false
    // }
    onClickLeft() {
      this.$router.back();
    },
     clearList() {
       this.cartList = []
    },
  }
};
</script>

<style scoped>
.clear-list {
  text-align: right;
}
</style>