<template>
  <div class="hot-item" @click="goodsDetail">
    <img v-lazy="product.image" alt width="88%" />
    <h3>{{product.name}}</h3>
    <p>￥{{product.price | priceFilter }}</p>
  </div>
</template>

<script>
import { toPrice } from "common/utils.js"
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    priceFilter(price) {
      return toPrice(price)
    }
  },
  methods: {
    goodsDetail() {
      console.log(this.product)
      this.$router.push('/detail/' + this.product.goodsId)
    }
  }
};
</script>

<style scoped>
  .hot-item h3 {
    font-size: 12px;
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
    font-weight: normal;
    color: #999;
  }
  .hot-item p {
    font-size: 14px;
    color: #e5017d;
    text-align: center;
  }
</style>