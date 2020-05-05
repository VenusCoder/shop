<template>
  <div class="list-item">
    <div class="cart-list-item">
      <!-- {{procuct}} -->
      <!-- {{$store.state.cartList}} -->
      <div class="img">
        <img :src="product.image" alt width="100%" />
      </div>
      <div class="cart-dec">
        <h2>{{ product.name }}</h2>
        <p>￥{{ product.price * product.count | price() }}</p>
        <van-stepper v-model="product.count" />
      </div>
    </div>
   
  </div>
</template>

<script>
import { toPrice } from "common/utils";
export default {
  data() {
    return {
      count: 1
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    
  },
  filters: {
    price(price) {
      return toPrice(price);
    }
  },
  methods: {
    addCount() {
      this.product.count--;
    },
    decrease() {
      this.product.count++;
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid #eee;
}
.cart-list-item > div {
  width: 100%;
  flex: 1;
}
.cart-dec h2 {
  font-size: 0.9rem;
  font-weight: normal;
  color: #888;
}
.cart-dec p {
  font-size: 0.8rem;

  color: #e5017d;
}
</style>